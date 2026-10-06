
import { Award, Download, Calendar, User, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Certificados = () => {
  const mockCertificates = [
    {
      id: 1,
      title: "Congresso de Cardiologia 2024",
      event: "XV Congresso Brasileiro de Cardiologia",
      date: "2024-01-15",
      hours: "40 horas",
      status: "Disponível",
      type: "Congresso"
    },
    {
      id: 2,
      title: "Workshop Telemedicina",
      event: "Workshop: Telemedicina na Prática Clínica",
      date: "2024-01-10",
      hours: "8 horas",
      status: "Disponível",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Curso de Ética Médica",
      event: "Curso: Ética e Bioética em Medicina",
      date: "2024-01-05",
      hours: "20 horas",
      status: "Processando",
      type: "Curso"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Disponível':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'Processando':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponível':
        return 'bg-green-100 text-green-800';
      case 'Processando':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Certificados Online
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Acesse e baixe seus certificados de participação em eventos e cursos
          </p>
        </div>
      </section>

      {/* Login Required Notice */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Acesso Restrito a Associados
            </h3>
            <p className="text-blue-700 mb-4">
              Para visualizar e baixar seus certificados, é necessário fazer login com sua conta de associado.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Fazer Login
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              Seus Certificados
            </h2>
            <p className="text-gray-600">Exemplo de como seus certificados aparecerão após o login</p>
          </div>

          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="disponivel">Disponíveis</TabsTrigger>
              <TabsTrigger value="processando">Processando</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-6">
              {mockCertificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow opacity-60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center space-x-3">
                        <div className="bg-medical-green-100 p-2 rounded-lg">
                          <Award className="h-6 w-6 text-medical-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                          <p className="text-sm text-gray-600">{cert.event}</p>
                        </div>
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(cert.status)}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(cert.status)}`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(cert.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{cert.hours}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>{cert.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        ID do Certificado: {cert.id.toString().padStart(6, '0')}
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50"
                          disabled
                        >
                          Visualizar
                        </Button>
                        <Button 
                          className="bg-medical-green-600 hover:bg-medical-green-700"
                          disabled={cert.status !== 'Disponível'}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="disponivel">
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Certificados Disponíveis</h3>
                <p className="text-gray-500">Faça login para ver seus certificados disponíveis para download</p>
              </div>
            </TabsContent>

            <TabsContent value="processando">
              <div className="text-center py-12">
                <Clock className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Certificados em Processamento</h3>
                <p className="text-gray-500">Certificados que estão sendo processados estarão disponíveis em breve</p>
              </div>
            </TabsContent>

            <TabsContent value="historico">
              <div className="text-center py-12">
                <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Histórico Completo</h3>
                <p className="text-gray-500">Visualize todos os certificados já emitidos</p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Help Section */}
          <div className="mt-12 bg-gray-100 rounded-lg p-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-medical-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                Como funcionam os certificados?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Participação no Evento</h4>
                  <p className="text-gray-600 text-sm">
                    Participe integralmente dos eventos e cursos oferecidos pela associação
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Processamento</h4>
                  <p className="text-gray-600 text-sm">
                    Seus certificados são processados automaticamente após o evento
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Download Disponível</h4>
                  <p className="text-gray-600 text-sm">
                    Baixe seus certificados em PDF com validade oficial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificados;
