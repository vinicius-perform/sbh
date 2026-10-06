
import { BookOpen, Download, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ConteudoCientifico = () => {
  const articles = [
    {
      id: 1,
      title: "Novas Diretrizes em Cardiologia Preventiva",
      author: "Dr. João Silva",
      date: "15 de Janeiro, 2024",
      category: "Artigo",
      abstract: "Estudo sobre as mais recentes abordagens em prevenção cardiovascular..."
    },
    {
      id: 2,
      title: "Protocolo de Atendimento Pediátrico",
      author: "Dra. Maria Santos",
      date: "10 de Janeiro, 2024",
      category: "Protocolo",
      abstract: "Guidelines atualizadas para atendimento pediátrico de emergência..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Conteúdo Científico
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Acesse artigos, protocolos e publicações científicas da nossa comunidade médica
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="artigos">Artigos</TabsTrigger>
              <TabsTrigger value="protocolos">Protocolos</TabsTrigger>
              <TabsTrigger value="revistas">Revistas</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-medical-green-600" />
                        <span>{article.title}</span>
                      </CardTitle>
                      <span className="bg-medical-green-100 text-medical-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{article.abstract}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50">
                          Ler Mais
                        </Button>
                        <Button className="bg-medical-green-600 hover:bg-medical-green-700">
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="artigos">
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Artigos Científicos</h3>
                <p className="text-gray-500">Conteúdo disponível em breve</p>
              </div>
            </TabsContent>

            <TabsContent value="protocolos">
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Protocolos</h3>
                <p className="text-gray-500">Conteúdo disponível em breve</p>
              </div>
            </TabsContent>

            <TabsContent value="revistas">
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Revistas</h3>
                <p className="text-gray-500">Conteúdo disponível em breve</p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Access Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-900">Acesso Completo para Associados</h3>
                <p className="text-blue-700">
                  Alguns conteúdos estão disponíveis exclusivamente para membros da associação.
                </p>
                <Button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                  Fazer Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConteudoCientifico;
