
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Calendar, User, Tag, Download, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ArtigosList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedSpecialty, setSelectedSpecialty] = useState('todas');

  const artigos = [
    {
      id: 1,
      title: "Toxina Botulínica Tipo A: Novas Aplicações em Harmonização Facial",
      authors: ["Dr. Carlos Eduardo Silva", "Dra. Marina Oliveira"],
      journal: "Revista Brasileira de Harmonização Facial",
      date: "2024-02-15",
      category: "Artigo Original",
      specialty: "Harmonização Facial",
      abstract: "Este estudo apresenta uma análise abrangente das novas aplicações da toxina botulínica tipo A em harmonização facial, explorando técnicas inovadoras e resultados clínicos em 200 pacientes ao longo de 12 meses. Os resultados demonstram eficácia significativa em tratamentos de rejuvenescimento facial com mínimos efeitos colaterais.",
      keywords: ["Toxina Botulínica", "Harmonização Facial", "Rejuvenescimento", "Estética"],
      downloads: 456,
      views: 1234,
      citations: 12,
      doi: "10.1234/rbhf.2024.001",
      featured: true,
      openAccess: true
    },
    {
      id: 2,
      title: "Preenchimento com Ácido Hialurônico: Protocolo de Segurança e Eficácia",
      authors: ["Dra. Ana Paula Santos", "Dr. Roberto Lima", "Dr. Fernando Costa"],
      journal: "Arquivos de Medicina Estética",
      date: "2024-02-10",
      category: "Protocolo Clínico",
      specialty: "Preenchimentos",
      abstract: "Desenvolvimento de protocolo padronizado para aplicação de ácido hialurônico em diferentes regiões faciais, incluindo guidelines de segurança, técnicas de aplicação e manejo de complicações. Estudo multicêntrico envolvendo 15 clínicas e 500 procedimentos.",
      keywords: ["Ácido Hialurônico", "Protocolo", "Segurança", "Preenchimento"],
      downloads: 623,
      views: 2156,
      citations: 8,
      doi: "10.1234/ame.2024.002",
      featured: true,
      openAccess: false
    },
    {
      id: 3,
      title: "Bioestimuladores de Colágeno: Comparativo de Eficácia Clínica",
      authors: ["Dr. João Pedro Martins", "Dra. Carla Regina"],
      journal: "Journal of Aesthetic Medicine",
      date: "2024-01-28",
      category: "Estudo Comparativo",
      specialty: "Bioestimuladores",
      abstract: "Análise comparativa da eficácia de diferentes bioestimuladores de colágeno (hidroxiapatita de cálcio, ácido poli-L-lático e carboximetilcelulose) em tratamentos de flacidez facial. Avaliação objetiva através de ultrassonografia e análise histológica.",
      keywords: ["Bioestimuladores", "Colágeno", "Flacidez", "Hidroxiapatita"],
      downloads: 334,
      views: 987,
      citations: 5,
      doi: "10.1234/jam.2024.003",
      featured: false,
      openAccess: true
    },
    {
      id: 4,
      title: "Fios de Sustentação PDO: Técnica Minimamente Invasiva para Lifting",
      authors: ["Dr. Alexandre Ferreira", "Dra. Beatriz Almeida"],
      journal: "Revista de Cirurgia Plástica",
      date: "2024-01-20",
      category: "Artigo Original",
      specialty: "Fios de Sustentação",
      abstract: "Avaliação da eficácia e durabilidade dos fios de polidioxanona (PDO) em procedimentos de lifting facial minimamente invasivo. Acompanhamento de 150 pacientes por 18 meses com análise de satisfação e resultados estéticos.",
      keywords: ["PDO", "Fios de Sustentação", "Lifting", "Minimamente Invasivo"],
      downloads: 289,
      views: 756,
      citations: 3,
      doi: "10.1234/rcp.2024.004",
      featured: false,
      openAccess: false
    },
    {
      id: 5,
      title: "Laser CO2 Fracionado: Aplicações em Rejuvenescimento Cutâneo",
      authors: ["Dra. Luciana Torres", "Dr. Marcelo Ribeiro"],
      journal: "Dermatologia Clínica",
      date: "2024-01-15",
      category: "Revisão",
      specialty: "Laser",
      abstract: "Revisão sistemática sobre as aplicações do laser CO2 fracionado em tratamentos de rejuvenescimento cutâneo, incluindo parâmetros técnicos, indicações, contraindicações e manejo pós-procedimento para otimização de resultados.",
      keywords: ["Laser CO2", "Rejuvenescimento", "Fracionado", "Dermatologia"],
      downloads: 178,
      views: 543,
      citations: 7,
      doi: "10.1234/dc.2024.005",
      featured: false,
      openAccess: true
    }
  ];

  const categories = ['todos', 'Artigo Original', 'Protocolo Clínico', 'Estudo Comparativo', 'Revisão'];
  const specialties = ['todas', 'Harmonização Facial', 'Preenchimentos', 'Bioestimuladores', 'Fios de Sustentação', 'Laser'];

  const filteredArtigos = artigos.filter(artigo => {
    const matchesSearch = artigo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artigo.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         artigo.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'todos' || artigo.category === selectedCategory;
    const matchesSpecialty = selectedSpecialty === 'todas' || artigo.specialty === selectedSpecialty;
    
    return matchesSearch && matchesCategory && matchesSpecialty;
  });

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Filtros e Busca */}
      <div className="bg-white p-4 md:p-6 rounded-lg border">
        <div className="space-y-4">
          {/* Barra de busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar por título, autor ou palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-sm md:text-base"
            />
          </div>
          
          {/* Filtros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'todos' ? 'Todas as Categorias' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <Tag className="h-4 w-4 mr-2 flex-shrink-0" />
                <SelectValue placeholder="Especialidade" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map(specialty => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty === 'todas' ? 'Todas as Especialidades' : specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-600 flex items-center justify-center sm:justify-start">
              <span>{filteredArtigos.length} artigo(s) encontrado(s)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Artigos */}
      <div className="space-y-4 md:space-y-6">
        {filteredArtigos.map((artigo) => (
          <Card key={artigo.id} className={`hover:shadow-lg transition-all duration-300 ${artigo.featured ? 'border-l-4 border-l-medical-green-600' : ''}`}>
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg md:text-xl mb-3 text-gray-900 hover:text-medical-green-600 cursor-pointer transition-colors break-words">
                    {artigo.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-medical-green-100 text-medical-green-800 text-xs">
                      {artigo.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {artigo.specialty}
                    </Badge>
                    {artigo.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                        Destaque
                      </Badge>
                    )}
                    {artigo.openAccess && (
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        Acesso Aberto
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* Metadados */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                  <span className="flex items-center min-w-0">
                    <User className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{artigo.authors.join(", ")}</span>
                  </span>
                  <span className="flex items-center flex-shrink-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(artigo.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="flex items-center min-w-0">
                    <Tag className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{artigo.journal}</span>
                  </span>
                </div>

                {/* Abstract */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{artigo.abstract}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1">
                  <span className="text-sm font-medium text-gray-600 mr-2 flex-shrink-0">Palavras-chave:</span>
                  {artigo.keywords.map((keyword, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Métricas e DOI */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {artigo.views} views
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {artigo.downloads} downloads
                    </span>
                    <span className="hidden sm:inline">{artigo.citations} citações</span>
                    <span className="font-mono text-xs break-all">DOI: {artigo.doi}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50"
                      onClick={() => navigate(`/artigo/${artigo.id}`)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Visualizar</span>
                      <span className="sm:hidden">Ver</span>
                    </Button>
                    <Button size="sm" className="bg-medical-green-600 hover:bg-medical-green-700">
                      <Download className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Download PDF</span>
                      <span className="sm:hidden">PDF</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredArtigos.length === 0 && (
        <div className="text-center py-8 md:py-12">
          <Search className="h-12 md:h-16 w-12 md:w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">Nenhum artigo encontrado</h3>
          <p className="text-gray-500 text-sm md:text-base">Tente ajustar os filtros ou termos de busca</p>
        </div>
      )}
    </div>
  );
};

export default ArtigosList;
