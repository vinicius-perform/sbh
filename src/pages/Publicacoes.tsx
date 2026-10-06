
import { BookOpen, Download, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PmmaList from '@/components/publicacoes/PmmaList';

const Publicacoes = () => {
  const publications = [{
    id: 1,
    title: "Avanços em Medicina Personalizada: Uma Revisão Sistemática",
    authors: ["Dr. João Silva", "Dra. Maria Santos"],
    journal: "Revista Brasileira de Medicina",
    date: "2024-01-15",
    category: "Artigo de Revisão",
    abstract: "Este estudo apresenta uma análise abrangente dos avanços recentes em medicina personalizada, explorando as implicações clínicas e futuras direções da pesquisa...",
    downloads: 156
  }, {
    id: 2,
    title: "Protocolos de Emergência em Cardiologia: Estudo de Caso",
    authors: ["Dr. Carlos Oliveira"],
    journal: "Arquivos de Cardiologia",
    date: "2024-01-10",
    category: "Estudo de Caso",
    abstract: "Análise detalhada dos protocolos de emergência mais eficazes em situações cardiológicas críticas...",
    downloads: 203
  }, {
    id: 3,
    title: "Telemedicina na Prática Pediátrica: Desafios e Oportunidades",
    authors: ["Dra. Ana Paula", "Dr. Roberto Lima"],
    journal: "Pediatria Moderna",
    date: "2024-01-05",
    category: "Artigo Original",
    abstract: "Investigação sobre a implementação e eficácia da telemedicina no atendimento pediátrico durante e pós-pandemia...",
    downloads: 178
  }];

  // Ordenar por data decrescente e pegar os 2 mais recentes
  const featuredPublications = publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Publicações Científicas
          </h1>
          <p className="text-lg md:text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto px-4">
            Explore as mais recentes pesquisas e publicações da nossa comunidade científica
          </p>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-6 md:py-8 bg-white">
        
      </section>

      {/* PMMA Publications */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pmma" className="w-full">
            <div className="overflow-x-auto mb-6 md:mb-8">
              <TabsList className="grid w-full grid-cols-1 min-w-[120px]">
                <TabsTrigger value="pmma" className="text-xs md:text-sm">PMMA</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="pmma">
              <PmmaList />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Publicacoes;
