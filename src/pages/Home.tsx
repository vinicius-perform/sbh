import { Link } from 'react-router-dom';
import { Stethoscope, Users, BookOpen, Calendar, Award, Heart, ChevronRight, Star, Shield, Building2, GraduationCap, TrendingUp, FileText, Microscope, Globe, Handshake, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [{
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Qualificação",
    description: "Programas exclusivos que elevam o padrão de atuação médica, com foco em práticas modernas e seguras na harmonização."
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Carreira Médica", 
    description: "Fortaleça sua trajetória profissional com networking, atualização constante e reconhecimento no cenário nacional."
  }, {
    icon: <FileText className="h-8 w-8" />,
    title: "Estudos Avançados",
    description: "Acesso a artigos científicos e pesquisas de ponta sobre PMMA e técnicas inovadoras em harmonização."
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Certificação",
    description: "Certificações oficiais que validam sua expertise e garantem mais confiança para seus pacientes."
  }, {
    icon: <Calendar className="h-8 w-8" />,
    title: "Educação Continuada",
    description: "Cursos, congressos e eventos para seu desenvolvimento profissional"
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Suporte Jurídico",
    description: "Orientação ética e legal para sua prática médica"
  }];

  const stats = [{
    number: "5.000+",
    label: "Médicos Associados"
  }, {
    number: "50+",
    label: "Anos de Tradição"
  }, {
    number: "200+",
    label: "Eventos por Ano"
  }, {
    number: "100%",
    label: "Compromisso"
  }];

  const latestArticles = [{
    title: "Novas Diretrizes para Hipertensão Arterial",
    date: "15 Jan 2024",
    author: "Dr. João Silva",
    category: "Cardiologia"
  }, {
    title: "Avanços em Medicina Personalizada",
    date: "10 Jan 2024",
    author: "Dra. Maria Santos",
    category: "Genética"
  }, {
    title: "Protocolos de Emergência Atualizados",
    date: "08 Jan 2024",
    author: "Dr. Pedro Costa",
    category: "Emergência"
  }];

  const beneficios = [{
    icon: <Microscope className="h-8 w-8" />,
    title: "Atualizações Científicas",
    description: "Conteúdos periódicos baseados em evidências e protocolos inovadores na harmonização facial e corporal."
  }, {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Cursos & Fellowships Certificados",
    description: "Capacitações com foco em técnicas avançadas e diferenciais competitivos."
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: "Eventos e Congressos",
    description: "Participação em encontros de alto nível com especialistas nacionais e internacionais."
  }, {
    icon: <Handshake className="h-8 w-8" />,
    title: "Networking de Referência",
    description: "Conexão com médicos líderes da área, ampliando reconhecimento e oportunidades."
  }, {
    icon: <Scale className="h-8 w-8" />,
    title: "Apoio Jurídico & Ético",
    description: "Orientação sobre exercício da harmonização médica em conformidade com as normas do CFM."
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Selo de Associado SBH",
    description: "Credibilidade e reconhecimento que fortalecem sua atuação profissional."
  }];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Excelência em 
                <span className="text-medical-gold-300"> Medicina e Harmonização</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                A Sociedade Brasileira de Harmonização nasce para ser referência nacional em harmonização médica.
                Reunimos profissionais de saúde comprometidos com a ciência, promovemos estudos avançados — com destaque para o PMMA — e criamos um espaço de networking e crescimento para médicos que buscam se destacar no mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJnoRiSPliBYAzZl7LZplWFoOAS9_GVvHeYiOyFRTA-eXn7Q/viewform" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-gold text-lg px-8 py-4">
                    Seja um Associado
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/encontre-seu-medico">
                  <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white hover:text-medical-blue-600 text-lg px-8 py-4 text-gray-900">
                    Encontre seu Médico
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <Stethoscope className="h-20 w-20 text-medical-gold-300 mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-semibold mb-4">
                    Tradição que Começa Agora, Inovação que Nos Guia
                  </h3>
                  <p className="text-blue-100">
                    Estamos construindo uma história de credibilidade e inovação, oferecendo suporte contínuo para impulsionar a carreira de cada associado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que fazer parte da nossa comunidade?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos recursos exclusivos, networking qualificado e suporte completo 
              para sua jornada médica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-md" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader className="text-center pb-4">
                  <div className="bg-medical-blue-100 text-medical-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-playfair text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Clube de Benefícios Section - Premium */}
      <section className="section-spacing bg-gradient-to-br from-medical-gold-50 via-white to-medical-gold-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-gold-200/20 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-blue-200/20 rounded-full blur-3xl translate-y-40 -translate-x-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-medical-gold-500 to-medical-gold-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />
                Exclusivo para Associados
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-medical-blue-600 to-medical-gold-600 bg-clip-text text-[#ee950b]">
              Clube de Benefícios SBH
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ao se tornar associado, você tem acesso a um ecossistema exclusivo que fortalece sua carreira médica e amplia suas oportunidades de crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {beneficios.map((beneficio, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white relative overflow-hidden" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {/* Premium border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-medical-gold-200 via-transparent to-medical-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-white rounded-lg"></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="bg-gradient-to-br from-medical-gold-100 to-medical-gold-200 text-medical-gold-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {beneficio.icon}
                  </div>
                  <CardTitle className="font-playfair text-xl text-gray-900 group-hover:text-medical-blue-700 transition-colors duration-300">
                    {beneficio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {beneficio.description}
                  </CardDescription>
                </CardContent>
                
                {/* Premium shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:animate-pulse"></div>
              </Card>)}
          </div>

          {/* Premium CTA Box */}
          <div className="relative">
            <div className="bg-gradient-to-r from-medical-blue-600 via-medical-blue-700 to-medical-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-medical-gold-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-medical-gold-500/20 backdrop-blur-sm rounded-full p-4">
                    <Star className="h-8 w-8 text-medical-gold-300 fill-current" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6 leading-tight text-black">
                  Faça parte de uma sociedade que defende o protagonismo médico na estética avançada.
                </h3>
                <p className="mb-8 text-lg max-w-2xl mx-auto text-zinc-900">
                  Junte-se a milhares de profissionais que já fazem parte desta revolução na medicina estética.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJnoRiSPliBYAzZl7LZplWFoOAS9_GVvHeYiOyFRTA-eXn7Q/viewform" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-gold text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <Award className="mr-2 h-5 w-5" />
                    Seja um Associado
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
