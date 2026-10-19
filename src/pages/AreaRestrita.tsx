import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import LoginForm from '@/components/LoginForm';
import ProfilePhoto from '@/components/ProfilePhoto';
import ProfileEditForm from '@/components/ProfileEditForm';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, FileText, LogOut, Edit, ShieldCheck, UserPlus, Users } from 'lucide-react';
const AreaRestrita = () => {
  const {
    user,
    loading: authLoading,
    signOut,
    isAdmin
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
                    {isAdmin && (
                      <div className="mt-3 flex justify-center">
                        <Badge className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-3 py-1 flex items-center gap-1 shadow-sm">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Administrador
                        </Badge>
                      </div>
                    )}
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
            <div className="lg:col-span-2 space-y-6">
              {isAdmin && (
                <Card className="border-medical-green-200 bg-gradient-to-br from-white to-medical-green-50 shadow-md">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-6 h-6 text-medical-green-700" />
                      <CardTitle className="text-xl font-playfair text-gray-900">
                        Painel do Administrador
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      Você possui privilégios de administrador da SBH. Utilize as ações abaixo para gerenciar associados e permissões.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      <Link to="/admin/cadastro-usuario" className="block">
                        <Button className="w-full bg-medical-green-600 hover:bg-medical-green-700 h-auto py-3 px-4 flex flex-col items-start gap-1 text-left">
                          <div className="flex items-center space-x-2 font-semibold text-white">
                            <UserPlus className="w-4 h-4" />
                            <span>Cadastrar Novo Associado</span>
                          </div>
                          <span className="text-xs text-medical-green-100 font-normal">
                            Criar credenciais e associar novos membros
                          </span>
                        </Button>
                      </Link>
                      <Link to="/associados" className="block">
                        <Button variant="outline" className="w-full h-auto py-3 px-4 flex flex-col items-start gap-1 text-left border-gray-300 hover:border-medical-green-600 hover:bg-medical-green-50">
                          <div className="flex items-center space-x-2 font-semibold text-gray-800">
                            <Users className="w-4 h-4 text-medical-green-700" />
                            <span>Ver Quadro de Associados</span>
                          </div>
                          <span className="text-xs text-gray-500 font-normal">
                            Consultar membros e especialistas
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Informações Gerais do Associado */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-playfair flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-medical-green-600" />
                      <span>Conteúdo Científico</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Acesse artigos, revisões e casos clínicos exclusivos para associados.
                    </p>
                    <Link to="/publicacoes">
                      <Button variant="outline" size="sm" className="text-medical-green-700 border-medical-green-600 hover:bg-medical-green-50">
                        Ver Publicações
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-playfair flex items-center space-x-2">
                      <Users className="w-5 h-5 text-medical-green-600" />
                      <span>Eventos & Cursos</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Confira o calendário de workshops e eventos presenciais da SBH.
                    </p>
                    <Link to="/eventos">
                      <Button variant="outline" size="sm" className="text-medical-green-700 border-medical-green-600 hover:bg-medical-green-50">
                        Ver Eventos
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AreaRestrita;