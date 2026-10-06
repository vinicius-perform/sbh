import { Users, Target, Eye, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DiretoriaSection from '@/components/DiretoriaSection';
const QuemSomos = () => {
  const values = [{
    icon: <Heart className="h-8 w-8" />,
    title: "Compromisso com a Vida",
    description: "Nossa dedicação à preservação e melhoria da qualidade de vida é absoluta"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Excelência Profissional",
    description: "Promovemos os mais altos padrões de qualidade na prática médica"
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Educação Continuada",
    description: "Incentivamos o desenvolvimento constante de nossos associados"
  }];
  return <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-green-600 to-medical-green-800 text-white section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Sobre a Associação Médica
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">A Sociedade Brasileira de Harmonização nasceu para ser a principal referência nacional em harmonização facial e corporal.
Nosso propósito é conectar profissionais da saúde, promover conhecimento científico de ponta e fortalecer a prática médica com ética, inovação e segurança.</p>
          </div>
        </div>
      </section>

      {/* Nossa Diretoria - agora primeira seção */}
      <DiretoriaSection />

      {/* Missão, Visão e Valores */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-medical-green-100 text-medical-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="font-playfair text-2xl text-medical-green-700">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Promover a excelência na prática médica através da educação continuada, 
                  networking profissional e suporte integral aos nossos associados, 
                  contribuindo para uma medicina de qualidade e humanizada.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-medical-gold-100 text-medical-gold-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="font-playfair text-2xl text-medical-gold-600">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Ser a principal referência em associação médica no Brasil, 
                  reconhecida pela qualidade de seus serviços, inovação em 
                  educação médica e impacto positivo na saúde da população.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-medical-green-100 text-medical-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="font-playfair text-2xl text-medical-green-600">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  Ética, transparência, inovação, colaboração e compromisso 
                  com a vida guiam todas as nossas ações e decisões, 
                  sempre priorizando o bem-estar dos profissionais e pacientes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossos Valores Detalhados */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Princípios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que norteiam cada ação e decisão da nossa associação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-medical-green-100 text-medical-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <CardTitle className="font-playfair text-xl text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-medical-green-600 text-white section-spacing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Junte-se a nós nessa jornada de excelência e seja parte da 
            transformação positiva da medicina brasileira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold text-lg px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              Seja um Associado
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-medical-green-600 text-lg px-8 py-4 rounded-lg font-medium transition-all duration-300">
              Entre em Contato
            </button>
          </div>
        </div>
      </section>
    </div>;
};
export default QuemSomos;