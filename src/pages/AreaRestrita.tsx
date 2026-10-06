import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import LoginForm from '@/components/LoginForm';
import ProfilePhoto from '@/components/ProfilePhoto';
import ProfileEditForm from '@/components/ProfileEditForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, FileText, LogOut, Edit } from 'lucide-react';
const AreaRestrita = () => {
  const {
    user,
    loading: authLoading,
    signOut
  } = useAuth();
  const {
    profile,
    loading: profileLoading
  } = useProfile();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  if (authLoading || profileLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>;
  }
  if (!user) {
    return <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-medical-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Área Restrita
            </h1>
            <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
              Acesso exclusivo para associados da nossa comunidade médica
            </p>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <LoginForm />
          </div>
        </section>
      </div>;
  }
  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };
  const handleCancelEdit = () => {
    setIsEditingProfile(false);
  };
  const handleSaveProfile = () => {
    setIsEditingProfile(false);
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-medical-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                Área Restrita
              </h1>
              <p className="text-medical-green-100">
                Bem-vindo, {profile?.nome_completo || user.email}
              </p>
            </div>
            <Button onClick={signOut} variant="outline" className="border-white hover:bg-white hover:text-medical-green-600 text-black">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              {isEditingProfile ? <ProfileEditForm onCancel={handleCancelEdit} onSave={handleSaveProfile} /> : <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-playfair">Meu Perfil</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ProfilePhoto photoUrl={profile?.foto_url} userName={profile?.nome_completo} />
                    <div className="mt-6 space-y-2">
                      <h3 className="font-semibold text-lg">{profile?.nome_completo}</h3>
                      {profile?.crm && <p className="text-gray-600">CRM: {profile.crm}</p>}
                      {profile?.especialidade && <p className="text-gray-600">{profile.especialidade}</p>}
                      {profile?.telefone && <p className="text-gray-600">{profile.telefone}</p>}
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                    <Button onClick={handleEditProfile} className="mt-4 bg-medical-green-600 hover:bg-medical-green-700">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar Perfil
                    </Button>
                  </CardContent>
                </Card>}
            </div>

            {/* Dashboard Content */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AreaRestrita;