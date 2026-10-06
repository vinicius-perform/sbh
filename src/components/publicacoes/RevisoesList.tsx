
import { useState } from 'react';
import { BookOpen, Download, Calendar, User, Tag, Search, Filter, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

const RevisoesList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('todas');
  const [selectedTipo, setSelectedTipo] = useState('todos');
  const [selectedAno, setSelectedAno] = useState('todos');

  const revisoes = [
    {
      id: 101,
      title: "Revisão Sistemática sobre Medicina Personalizada em Oncologia",
      authors: ["Dr. João Silva", "Dra. Maria Santos", "Prof. Carlos Lima"],
      journal: "Revista Brasileira de Oncologia",
      date: "2024-01-15",
      area: "Oncologia",
      tipoRevisao: "Sistemática",
      abstract: "Esta revisão sistemática analisa os avanços mais recentes em medicina personalizada aplicada ao tratamento oncológico, incluindo biomarcadores, terapias direcionadas e medicina de precisão. Foram analisados 156 estudos publicados entre 2020-2024.",
      downloads: 2847,
      visualizacoes: 5632,
      rating: 4.8,
      metodosIncluidos: 156,
      baseDados: ["PubMed", "Scopus", "Web of Science"],
      criteriosInclusao: "Estudos clínicos randomizados, meta-análises e estudos observacionais",
      featured: true,
      tags: ["Medicina Personalizada", "Oncologia", "Biomarcadores", "Terapia Direcionada"]
    },
    {
      id: 102,
      title: "Meta-análise: Eficácia da Telemedicina em Cuidados Primários",
      authors: ["Dra. Ana Paula Rodrigues", "Dr. Roberto Oliveira"],
      journal: "Telemedicina e Saúde Digital",
      date: "2024-01-10",
      area: "Saúde Digital",
      tipoRevisao: "Meta-análise",
      abstract: "Meta-análise abrangente avaliando a eficácia da telemedicina em cuidados primários de saúde. Incluiu 89 estudos controlados randomizados com mais de 50.000 pacientes.",
      downloads: 1923,
      visualizacoes: 3847,
      rating: 4.6,
      metodosIncluidos: 89,
      baseDados: ["PubMed", "Cochrane", "EMBASE"],
      criteriosInclusao: "Estudos controlados randomizados com follow-up mínimo de 6 meses",
      featured: false,
      tags: ["Telemedicina", "Cuidados Primários", "Saúde Digital", "Eficácia"]
    },
    {
      id: 103,
      title: "Revisão Narrativa: Inteligência Artificial em Diagnóstico Médico",
      authors: ["Prof. Marina Costa", "Dr. Felipe Santos", "Dra. Luciana Alves"],
      journal: "IA e Medicina",
      date: "2023-12-28",
      area: "Tecnologia Médica",
      tipoRevisao: "Narrativa",
      abstract: "Revisão narrativa explorando as aplicações atuais e futuras da inteligência artificial no diagnóstico médico, incluindo machine learning, deep learning e processamento de imagens médicas.",
      downloads: 3156,
      visualizacoes: 6234,
      rating: 4.9,
      metodosIncluidos: 234,
      baseDados: ["PubMed", "IEEE", "ACM Digital Library"],
      criteriosInclusao: "Artigos sobre IA aplicada ao diagnóstico médico publicados nos últimos 5 anos",
      featured: true,
      tags: ["Inteligência Artificial", "Diagnóstico", "Machine Learning", "Imagens Médicas"]
    },
    {
      id: 104,
      title: "Revisão Integrativa: Cuidados Paliativos em Pediatria",
      authors: ["Dra. Beatriz Ferreira", "Dr. André Mendes"],
      journal: "Pediatria e Cuidados Paliativos",
      date: "2023-12-20",
      area: "Pediatria",
      tipoRevisao: "Integrativa",
      abstract: "Revisão integrativa sobre as melhores práticas em cuidados paliativos pediátricos, abordando aspectos médicos, psicológicos e familiares no cuidado de crianças com doenças terminais.",
      downloads: 1567,
      visualizacoes: 2934,
      rating: 4.7,
      metodosIncluidos: 67,
      baseDados: ["PubMed", "CINAHL", "PsycINFO"],
      criteriosInclusao: "Estudos qualitativos e quantitativos sobre cuidados paliativos pediátricos",
      featured: false,
      tags: ["Cuidados Paliativos", "Pediatria", "Família", "Qualidade de Vida"]
    },
    {
      id: 105,
      title: "Scoping Review: Saúde Mental na Era Pós-COVID",
      authors: ["Dr. Gustavo Pereira", "Dra. Camila Rocha", "Prof. Ricardo Silva"],
      journal: "Saúde Mental Global",
      date: "2023-12-15",
      area: "Saúde Mental",
      tipoRevisao: "Scoping Review",
      abstract: "Revisão de escopo mapeando o impacto da pandemia de COVID-19 na saúde mental global, identificando lacunas na literatura e direções para pesquisas futuras.",
      downloads: 2145,
      visualizacoes: 4567,
      rating: 4.5,
      metodosIncluidos: 423,
      baseDados: ["PubMed", "PsycINFO", "Embase"],
      criteriosInclusao: "Estudos sobre impacto da COVID-19 na saúde mental publicados entre 2020-2023",
      featured: true,
      tags: ["COVID-19", "Saúde Mental", "Pandemia", "Impacto Social"]
    },
    {
      id: 106,
      title: "Revisão Sistemática: Cirurgia Robótica em Urologia",
      authors: ["Dr. Paulo Henrique", "Dra. Silvia Mendonça"],
      journal: "Urologia Moderna",
      date: "2023-12-05",
      area: "Urologia",
      tipoRevisao: "Sistemática",
      abstract: "Análise sistemática da eficácia e segurança da cirurgia robótica em procedimentos urológicos, comparando com técnicas convencionais e laparoscópicas.",
      downloads: 987,
      visualizacoes: 1876,
      rating: 4.4,
      metodosIncluidos: 78,
      baseDados: ["PubMed", "Cochrane", "Embase"],
      criteriosInclusao: "Estudos comparativos sobre cirurgia robótica em urologia",
      featured: false,
      tags: ["Cirurgia Robótica", "Urologia", "Minimamente Invasiva", "Tecnologia"]
    }
  ];

  const filteredRevisoes = revisoes.filter(revisao => {
    const matchesSearch = revisao.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         revisao.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         revisao.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesArea = selectedArea === 'todas' || revisao.area === selectedArea;
    const matchesTipo = selectedTipo === 'todos' || revisao.tipoRevisao === selectedTipo;
    const matchesAno = selectedAno === 'todos' || new Date(revisao.date).getFullYear().toString() === selectedAno;

    return matchesSearch && matchesArea && matchesTipo && matchesAno;
  });

  const areas = [...new Set(revisoes.map(r => r.area))];
  const tipos = [...new Set(revisoes.map(r => r.tipoRevisao))];
  const anos = [...new Set(revisoes.map(r => new Date(r.date).getFullYear().toString()))];

  const handleViewArticle = (id: number) => {
    navigate(`/artigo/${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header com estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-medical-green-600">{revisoes.length}</div>
          <div className="text-sm text-gray-600">Total de Revisões</div>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-medical-green-600">
            {revisoes.reduce((acc, r) => acc + r.metodosIncluidos, 0)}
          </div>
          <div className="text-sm text-gray-600">Estudos Analisados</div>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-medical-green-600">
            {Math.round(revisoes.reduce((acc, r) => acc + r.rating, 0) / revisoes.length * 10) / 10}
          </div>
          <div className="text-sm text-gray-600">Avaliação Média</div>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <div className="text-2xl font-bold text-medical-green-600">
            {areas.length}
          </div>
          <div className="text-sm text-gray-600">Áreas Médicas</div>
        </div>
      </div>

      {/* Filtros e busca */}
      <div className="bg-white p-4 md:p-6 rounded-lg border space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-medical-green-600" />
          <h3 className="font-semibold text-gray-900">Filtros</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative lg:col-span-2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar revisões, autores, tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedArea} onValueChange={setSelectedArea}>
            <SelectTrigger>
              <SelectValue placeholder="Área Médica" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas as Áreas</SelectItem>
              {areas.map(area => (
                <SelectItem key={area} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedTipo} onValueChange={setSelectedTipo}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Revisão" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Tipos</SelectItem>
              {tipos.map(tipo => (
                <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedAno} onValueChange={setSelectedAno}>
            <SelectTrigger>
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Anos</SelectItem>
              {anos.sort().reverse().map(ano => (
                <SelectItem key={ano} value={ano}>{ano}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Lista de revisões */}
      <div className="space-y-4">
        {filteredRevisoes.map((revisao) => (
          <Card key={revisao.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <CardTitle className="flex flex-col space-y-3">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-medical-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                        {revisao.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="bg-medical-green-100 text-medical-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          {revisao.tipoRevisao}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {revisao.area}
                        </span>
                        {revisao.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            Destaque
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardTitle>
                
                <div className="flex flex-col items-end space-y-2 flex-shrink-0">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(revisao.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({revisao.rating})</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* Informações dos autores e data */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600">
                  <span className="flex items-center min-w-0">
                    <User className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{revisao.authors.slice(0, 2).join(", ")}{revisao.authors.length > 2 ? " et al." : ""}</span>
                  </span>
                  <span className="flex items-center flex-shrink-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(revisao.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="flex items-center min-w-0">
                    <Tag className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{revisao.journal}</span>
                  </span>
                </div>

                {/* Abstract */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{revisao.abstract}</p>

                {/* Métricas da revisão */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-medical-green-600">{revisao.metodosIncluidos}</div>
                    <div className="text-xs text-gray-600">Estudos Incluídos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-medical-green-600">{revisao.baseDados.length}</div>
                    <div className="text-xs text-gray-600">Bases de Dados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-medical-green-600">{revisao.downloads}</div>
                    <div className="text-xs text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-medical-green-600">{revisao.visualizacoes}</div>
                    <div className="text-xs text-gray-600">Visualizações</div>
                  </div>
                </div>

                {/* Bases de dados */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Bases de Dados Consultadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {revisao.baseDados.map(base => (
                      <span key={base} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {base}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {revisao.tags.map(tag => (
                      <span key={tag} className="bg-medical-green-50 text-medical-green-700 px-2 py-1 rounded text-xs border border-medical-green-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ações */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {revisao.visualizacoes} visualizações
                    </span>
                    <span>{revisao.downloads} downloads</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      variant="outline" 
                      className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50 text-sm"
                      onClick={() => handleViewArticle(revisao.id)}
                    >
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Ler Completa</span>
                      <span className="sm:hidden">Ler</span>
                    </Button>
                    <Button className="bg-medical-green-600 hover:bg-medical-green-700 text-sm">
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

      {/* Mensagem quando não há resultados */}
      {filteredRevisoes.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhuma revisão encontrada</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou termo de busca</p>
        </div>
      )}
    </div>
  );
};

export default RevisoesList;
