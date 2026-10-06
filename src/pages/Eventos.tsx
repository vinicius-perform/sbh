
import { Calendar, MapPin, Clock, Users, Award, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Eventos = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop Remodelação Glútea Definitiva",
      date: "12 e 13 de setembro",
      location: "Cabo Frio/RJ",
      speaker: "Dr. Rafael Almenara",
      observation: "Exclusivo para médicos certificados – Vagas limitadas",
      contact: "(62) 99806-1319",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Workshop Remodelação Corporal Definitiva",
      date: "11 de outubro",
      location: "São Paulo/SP",
      speaker: "Dra. Mariana Rinaldi",
      observation: "Associado por ultrassom e manejo de intercorrências e complicações – Exclusivo para médicos certificados – Vagas limitadas",
      contact: "(62) 99806-1319",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Workshop Pontos Avançados Estratégicos para Remodelação Glútea e Corporal",
      date: "07 e 08 de novembro",
      location: "Curitiba/PR",
      speaker: "Dr. Leonardo Rizzo",
      observation: "Exclusivo para médicos certificados – Vagas limitadas",
      contact: "(62) 99806-1319",
      type: "Workshop"
    },
    {
      id: 4,
      title: "Workshop Bioplastia Glútea",
      date: "22 e 23 de novembro",
      location: "Curitiba/PR",
      speaker: "Dr. Sharbo Casagrande",
      observation: "Exclusivo para médicos certificados – Vagas limitadas",
      contact: "(62) 99806-1319",
      type: "Workshop"
    }
  ];

  const pastEvents: any[] = [];

  const handleWhatsAppContact = (contact: string, eventTitle: string) => {
    const message = `Olá! Gostaria de obter mais informações sobre o evento "${eventTitle}" e realizar minha inscrição. Aguardo retorno!`;
    const phoneNumber = contact.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Cursos & Eventos
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Participe dos principais eventos científicos e mantenha-se atualizado
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="proximos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="proximos">Próximos Eventos</TabsTrigger>
              <TabsTrigger value="passados">Eventos Passados</TabsTrigger>
            </TabsList>

            <TabsContent value="proximos" className="space-y-6">
              {upcomingEvents.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Nenhum evento próximo
                    </h3>
                    <p className="text-gray-500">
                      Não há eventos programados no momento. Fique atento às novidades!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                upcomingEvents.map(event => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-medical-green-600" />
                          <span className="text-lg">{event.title}</span>
                        </CardTitle>
                        <span className="bg-medical-green-100 text-medical-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.speaker}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          <strong>Observação:</strong> {event.observation}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Contato: {event.contact}
                        </span>
                        <Button 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleWhatsAppContact(event.contact, event.title)}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Inscrição via WhatsApp
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="passados" className="space-y-6">
              {pastEvents.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Nenhum evento passado
                    </h3>
                    <p className="text-gray-500">
                      Não há eventos anteriores registrados no momento.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                pastEvents.map(event => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <span>{event.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        {event.certificateAvailable && (
                          <Button className="bg-medical-green-600 hover:bg-medical-green-700">
                            <Award className="h-4 w-4 mr-1" />
                            Ver Certificado
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
