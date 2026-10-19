
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  nome_completo: string | null;
  crm: string | null;
  especialidade: string | null;
  telefone: string | null;
  foto_url: string | null;
  role?: string | null;
  created_at: string;
  updated_at: string;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        toast({
          title: "Erro ao carregar perfil",
          description: error.message,
          variant: "destructive",
        });
      } else if (!data) {
        // Se não existe perfil, criar um novo com dados do user metadata
        console.log('No profile found, creating one...');
        const newProfile = {
          id: user.id,
          nome_completo: user.user_metadata?.nome_completo || null,
          crm: user.user_metadata?.crm || null,
          especialidade: user.user_metadata?.especialidade || null,
          telefone: user.user_metadata?.telefone || null,
        };

        const { error: insertError } = await supabase
          .from('profiles')
          .insert(newProfile);

        if (insertError) {
          console.error('Error creating profile:', insertError);
          toast({
            title: "Erro ao criar perfil",
            description: insertError.message,
            variant: "destructive",
          });
        } else {
          // Buscar o perfil recém-criado
          await fetchProfile();
          return;
        }
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Unexpected error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating profile:', error);
        toast({
          title: "Erro ao atualizar perfil",
          description: error.message,
          variant: "destructive",
        });
        return false;
      } else {
        toast({
          title: "Perfil atualizado com sucesso!",
          description: "Suas informações foram salvas.",
        });
        await fetchProfile(); // Refresh profile data
        return true;
      }
    } catch (error) {
      console.error('Unexpected error updating profile:', error);
      return false;
    }
  };

  const uploadProfilePhoto = async (file: File) => {
    if (!user) return null;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/profile.${fileExt}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('profile-photos')
        .upload(fileName, file, { upsert: true });

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
        toast({
          title: "Erro ao fazer upload da foto",
          description: uploadError.message,
          variant: "destructive",
        });
        return null;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profile-photos')
        .getPublicUrl(fileName);

      // Update profile with new photo URL
      const success = await updateProfile({ foto_url: publicUrl });
      if (success) {
        return publicUrl;
      }
      return null;
    } catch (error) {
      console.error('Unexpected error uploading photo:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return {
    profile,
    loading,
    updateProfile,
    uploadProfilePhoto,
    refetch: fetchProfile,
  };
};
