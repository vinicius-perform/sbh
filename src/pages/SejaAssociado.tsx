import { Users, Award, BookOpen, Calendar, CheckCircle, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SejaAssociado = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Atualizações Científicas",
      description: "Conteúdos baseados em evidências e protocolos inovadores"
    },
    {
      icon: Calendar,
      title: "Cursos e Fellowships",
      description: "Cursos certificados com foco em técnicas avançadas"
    },
    {
      icon: Award,
      title: "Eventos de Alto Nível",
      description: "Congressos com especialistas nacionais e internacionais"
    },
    {
      icon: Users,
      title: "Networking Profissional",
      description: "Conecte-se com profissionais de referência no mercado"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Proposta de Associação à SBHM
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Sociedade Brasileira de Harmonização Médica
          </p>
        </div>
      </section>

      {/* Carta de Apresentação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    <strong>Prezado(a) Dr(a)</strong>
                  </p>
                  
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    É com grande satisfação que a Sociedade Brasileira de Harmonização Médica (SBHM) convida Vossa Senhoria a integrar nosso seleto corpo de associados — profissionais médicos comprometidos com a excelência técnica, ética e científica no campo da harmonização facial e corporal.
                  </p>

                  <p className="mb-4 text-gray-700">
                    <strong>Como membro associado da SBHM, o(a) senhor(a) terá acesso exclusivo a:</strong>
                  </p>

                  <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
                    <li>Atualizações científicas periódicas, com conteúdos baseados em evidências e protocolos inovadores;</li>
                    <li>Cursos e Fellowships certificados, com foco em técnicas avançadas;</li>
                    <li>Eventos e congressos de alto nível, com participação de especialistas nacionais e internacionais;</li>
                    <li>Networking com profissionais de referência, fortalecendo sua presença e reconhecimento no mercado;</li>
                    <li>Plataforma de apoio jurídico e ético, orientando o exercício da harmonização médica conforme as normativas do CFM;</li>
                    <li>Selo de Associado SBH, agregando credibilidade à sua atuação profissional.</li>
                  </ul>

                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Ao se associar, o(a) senhor(a) estará inserido(a) em um movimento que valoriza o papel exclusivo do médico na prática segura, ética e cientificamente fundamentada da harmonização estética, fortalecendo sua carreira com respaldo institucional e diferencial competitivo no cenário nacional.
                  </p>

                  <div className="text-center bg-medical-green-50 rounded-lg p-6 mb-6">
                    <p className="text-xl font-semibold text-medical-green-800 mb-2">
                      Faça parte de uma sociedade que defende o protagonismo médico na estética avançada.
                    </p>
                    <p className="text-medical-green-600 font-medium">
                      Condições especiais de associação nos dias de congresso.
                    </p>
                  </div>

                  <p className="text-right text-gray-700 mb-2">
                    Atenciosamente,<br />
                    <strong>Diretoria da Sociedade Brasileira de Harmonização</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Benefícios Exclusivos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra todas as vantagens de fazer parte da nossa associação médica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-medical-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-medical-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como se Associar Section */}
      <section className="py-16 bg-white" data-form-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Associe-se à Sociedade Brasileira de Harmonização
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Preencha o formulário de inscrição e nossa equipe entrará em contato com você para confirmar sua associação.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-medical-green-50 to-medical-green-100 rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <Users className="h-16 w-16 text-medical-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Faça Parte da Nossa Comunidade
                </h3>
                <p className="text-gray-600">
                  Junte-se aos profissionais mais qualificados da harmonização médica no Brasil
                </p>
              </div>

              <Button 
                asChild
                className="w-full md:w-auto bg-medical-green-600 hover:bg-medical-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfJnoRiSPliBYAzZl7LZplWFoOAS9_GVvHeYiOyFRTA-eXn7Q/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Quero me Associar Agora
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>

              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Após o preenchimento do formulário, a equipe da SBH entrará em contato para finalizar sua associação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Como funciona o pagamento da anuidade?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Após o cadastro, você receberá um boleto ou link para pagamento via PIX. O valor pode ser parcelado em até 12x no cartão.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Posso cancelar minha associação?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Sim, você pode cancelar sua associação a qualquer momento. Basta entrar em contato conosco.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Há taxa de adesão?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Não cobramos taxa de adesão. Você paga apenas a anuidade escolhida conforme seu tipo de associação.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Como acesso o conteúdo exclusivo?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Após a confirmação do pagamento, você receberá suas credenciais de acesso por e-mail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejaAssociado;
