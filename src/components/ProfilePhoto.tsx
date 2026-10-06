
import React, { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Camera, User } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';

interface ProfilePhotoProps {
  photoUrl?: string | null;
  userName?: string | null;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ photoUrl, userName }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadProfilePhoto } = useProfile();

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('O arquivo deve ter no máximo 5MB.');
      return;
    }

    await uploadProfilePhoto(file);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <Avatar className="w-32 h-32">
          <AvatarImage src={photoUrl || undefined} alt={userName || 'Foto do perfil'} />
          <AvatarFallback className="text-2xl bg-medical-green-100 text-medical-green-600">
            {photoUrl ? <User className="w-12 h-12" /> : getInitials(userName)}
          </AvatarFallback>
        </Avatar>
        <Button
          onClick={triggerFileUpload}
          size="sm"
          className="absolute bottom-0 right-0 rounded-full w-10 h-10 bg-medical-green-600 hover:bg-medical-green-700"
        >
          <Camera className="w-4 h-4" />
        </Button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden"
      />
      <p className="text-sm text-gray-600 text-center">
        Clique no ícone da câmera para alterar sua foto
      </p>
    </div>
  );
};

export default ProfilePhoto;
