
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProfile } from '@/hooks/useProfile';
import { Save, X } from 'lucide-react';

interface ProfileEditFormProps {
  onCancel: () => void;
  onSave: () => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ onCancel, onSave }) => {
  const { profile, updateProfile, loading } = useProfile();
  
  const [formData, setFormData] = useState({
    nome_completo: '',
    crm: '',
    especialidade: '',
    telefone: '',
  });

  // Atualizar formData quando o perfil for carregado
  useEffect(() => {
    if (profile) {
      setFormData({
        nome_completo: profile.nome_completo || '',
        crm: profile.crm || '',
        especialidade: profile.especialidade || '',
        telefone: profile.telefone || '',
      });
    }
  }, [profile]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await updateProfile(formData);
    if (success) {
      onSave();
    }
  };

  // Mostrar loading enquanto o perfil está carregando
  if (loading && !profile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-playfair">Editar Perfil</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medical-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados do perfil...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-playfair">Editar Perfil</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nome_completo">Nome Completo</Label>
            <Input
              id="nome_completo"
              type="text"
              value={formData.nome_completo}
              onChange={(e) => handleInputChange('nome_completo', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="crm">CRM</Label>
            <Input
              id="crm"
              type="text"
              value={formData.crm}
              onChange={(e) => handleInputChange('crm', e.target.value)}
              placeholder="Ex: 12345/SP"
            />
          </div>

          <div>
            <Label htmlFor="especialidade">Especialidade</Label>
            <Input
              id="especialidade"
              type="text"
              value={formData.especialidade}
              onChange={(e) => handleInputChange('especialidade', e.target.value)}
              placeholder="Ex: Cardiologia"
            />
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              type="tel"
              value={formData.telefone}
              onChange={(e) => handleInputChange('telefone', e.target.value)}
              placeholder="Ex: (11) 99999-9999"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-medical-green-600 hover:bg-medical-green-700"
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              disabled={loading}
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileEditForm;
