
import { useState } from 'react';
import { Search, Filter, Calendar, User, MapPin, Clock, Download, Eye, Heart, MessageCircle, BookOpen, Stethoscope, Brain, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface CasoClinico {
  id: number;
  titulo: string;
  autores: string[];
  instituicao: string;
  especialidade: string;
  complexidade: 'Baixa' | 'Média' | 'Alta';
  tipoCaso: 'Diagnóstico Diferencial' | 'Tratamento Inovador' | 'Complicação Rara' | 'Caso Didático';
  dataPublicacao: string;
  resumo: string;
  sintomas: string[];
  diagnostico: string;
  tratamento: string;
  desfecho: string;
  tempoSeguimento: string;
  downloads: number;
  visualizacoes: number;
  likes: number;
  comentarios: number;
  palavrasChave: string[];
  destaque: boolean;
}

const CasosList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [especialidadeFiltro, setEspecialidadeFiltro] = useState('todas');
  const [complexidadeFiltro, setComplexidadeFiltro] = useState('todas');
  const [tipoCasoFiltro, setTipoCasoFiltro] = useState('todos');
  const [ordenacao, setOrdenacao] = useState('recentes');

  const casosClinicosData: CasoClinico[] = [
    {
      id: 1,
      titulo: "Síndrome de Takotsubo em Paciente Jovem: Diagnóstico Desafiador",
      autores: ["Dra. Marina Silva", "Dr. Carlos Oliveira", "Dr. Pedro Santos"],
      instituicao: "Hospital das Clínicas - USP",
      especialidade: "Cardiologia",
      complexidade: "Alta",
      tipoCaso: "Diagnóstico Diferencial",
      dataPublicacao: "2024-01-20",
      resumo: "Paciente feminina de 28 anos apresentou dor torácica súbita após estresse emocional intenso. O caso ilustra a importância do diagnóstico diferencial da síndrome de takotsubo em pacientes jovens.",
      sintomas: ["Dor torácica", "Dispneia", "Palpitações", "Ansiedade"],
      diagnostico: "Síndrome de Takotsubo (Cardiomiopatia de Estresse)",
      tratamento: "Betabloqueadores, IECA, suporte psicológico",
      desfecho: "Recuperação completa da função cardíaca em 4 semanas",
      tempoSeguimento: "6 meses",
      downloads: 234,
      visualizacoes: 1567,
      likes: 89,
      comentarios: 23,
      palavrasChave: ["takotsubo", "cardiomiopatia", "estresse", "diagnóstico diferencial"],
      destaque: true
    },
    {
      id: 2,
      titulo: "Tratamento Inovador de Melanoma Metastático com Imunoterapia Combinada",
      autores: ["Dr. Roberto Lima", "Dra. Ana Paula Costa"],
      instituicao: "Instituto do Câncer - SP",
      especialidade: "Oncologia",
      complexidade: "Alta",
      tipoCaso: "Tratamento Inovador",
      dataPublicacao: "2024-01-15",
      resumo: "Paciente masculino de 55 anos com melanoma metastático tratado com protocolo experimental de imunoterapia combinada, apresentando resposta completa sustentada.",
      sintomas: ["Lesão cutânea pigmentada", "Linfonodomegalia", "Perda de peso", "Fadiga"],
      diagnostico: "Melanoma Metastático (T4N3M1)",
      tratamento: "Pembrolizumab + Ipilimumab (protocolo experimental)",
      desfecho: "Resposta completa sustentada por 18 meses",
      tempoSeguimento: "24 meses",
      downloads: 456,
      visualizacoes: 2890,
      likes: 156,
      comentarios: 67,
      palavrasChave: ["melanoma", "imunoterapia", "pembrolizumab", "oncologia"],
      destaque: true
    },
    {
      id: 3,
      titulo: "Complicação Rara Pós-Cirurgia Ortopédica: Síndrome Compartimental Aguda",
      autores: ["Dr. Fernando Alves", "Dra. Lucia Mendes"],
      instituicao: "Hospital Ortopédico Municipal",
      especialidade: "Ortopedia",
      complexidade: "Média",
      tipoCaso: "Complicação Rara",
      dataPublicacao: "2024-01-10",
      resumo: "Desenvolvimento de síndrome compartimental aguda 48h após cirurgia de fixação de fratura de tíbia. O caso destaca a importância do monitoramento pós-operatório rigoroso.",
      sintomas: ["Dor desproporcional", "Parestesia", "Diminuição de pulsos", "Tensão muscular"],
      diagnostico: "Síndrome Compartimental Aguda",
      tratamento: "Fasciotomia de emergência",
      desfecho: "Preservação do membro com função parcial",
      tempoSeguimento: "12 meses",
      downloads: 189,
      visualizacoes: 987,
      likes: 43,
      comentarios: 18,
      palavrasChave: ["síndrome compartimental", "ortopedia", "complicação", "fasciotomia"],
      destaque: false
    },
    {
      id: 4,
      titulo: "Caso Didático: Diagnóstico de Pneumonia Atípica em Pediatria",
      autores: ["Dra. Sofia Reis", "Dr. Miguel Torres"],
      instituicao: "Hospital Infantil Sabará",
      especialidade: "Pediatria",
      complexidade: "Baixa",
      tipoCaso: "Caso Didático",
      dataPublicacao: "2024-01-08",
      resumo: "Criança de 7 anos com quadro respiratório atípico. Caso educativo que demonstra a abordagem diagnóstica sistemática em pneumonias atípicas pediátricas.",
      sintomas: ["Tosse seca persistente", "Febre baixa", "Mialgia", "Cefaleia"],
      diagnostico: "Pneumonia Atípica por Mycoplasma pneumoniae",
      tratamento: "Azitromicina oral por 5 dias",
      desfecho: "Resolução completa em 10 dias",
      tempoSeguimento: "30 dias",
      downloads: 312,
      visualizacoes: 1789,
      likes: 94,
      comentarios: 31,
      palavrasChave: ["pneumonia atípica", "pediatria", "mycoplasma", "educativo"],
      destaque: false
    },
    {
      id: 5,
      titulo: "Neurocirurgia Complexa: Ressecção de Glioblastoma em Área Eloquente",
      autores: ["Dr. Alexandre Cunha", "Dra. Patricia Moura", "Dr. José Silva"],
      instituicao: "Instituto de Neurociências - RJ",
      especialidade: "Neurocirurgia",
      complexidade: "Alta",
      tipoCaso: "Tratamento Inovador",
      dataPublicacao: "2024-01-05",
      resumo: "Paciente com glioblastoma multiforme em área motora primária submetido à ressecção com monitoramento intraoperatório e mapeamento cortical.",
      sintomas: ["Fraqueza progressiva MSD", "Convulsões focais", "Cefaleia", "Alterações visuais"],
      diagnostico: "Glioblastoma Multiforme (WHO Grau IV)",
      tratamento: "Ressecção máxima segura + RTX + TMZ",
      desfecho: "Ressecção de 95% com preservação neurológica",
      tempoSeguimento: "18 meses",
      downloads: 387,
      visualizacoes: 2134,
      likes: 127,
      comentarios: 45,
      palavrasChave: ["glioblastoma", "neurocirurgia", "mapeamento cortical", "oncologia"],
      destaque: true
    },
    {
      id: 6,
      titulo: "Endocardite Infecciosa por Germe Raro: Desafio Diagnóstico e Terapêutico",
      autores: ["Dr. Ricardo Ferreira"],
      instituicao: "Hospital do Coração - Brasília",
      especialidade: "Cardiologia",
      complexidade: "Média",
      tipoCaso: "Diagnóstico Diferencial",
      dataPublicacao: "2024-01-03",
      resumo: "Paciente com endocardite por Bartonella henselae, patógeno raro que apresentou desafios diagnósticos e terapêuticos específicos.",
      sintomas: ["Febre prolongada", "Sopro cardíaco novo", "Esplenomegalia", "Petéquias"],
      diagnostico: "Endocardite Infecciosa por Bartonella henselae",
      tratamento: "Doxiciclina + Rifampicina por 6 semanas",
      desfecho: "Cura microbiológica e melhora clínica",
      tempoSeguimento: "9 meses",
      downloads: 156,
      visualizacoes: 834,
      likes: 67,
      comentarios: 19,
      palavrasChave: ["endocardite", "bartonella", "diagnóstico", "cardiologia"],
      destaque: false
    }
  ];

  const especialidades = [
    'todas', 'Cardiologia', 'Oncologia', 'Ortopedia', 'Pediatria', 'Neurocirurgia', 'Infectologia', 'Dermatologia'
  ];

  const getEspecialidadeIcon = (especialidade: string) => {
    const icons = {
      'Cardiologia': Heart,
      'Oncologia': BookOpen,
      'Ortopedia': Stethoscope,
      'Pediatria': Heart,
      'Neurocirurgia': Brain,
      'Infectologia': Stethoscope,
      'Dermatologia': Eye
    };
    return icons[especialidade as keyof typeof icons] || Stethoscope;
  };

  const getComplexidadeColor = (complexidade: string) => {
    const colors = {
      'Baixa': 'bg-green-100 text-green-800',
      'Média': 'bg-yellow-100 text-yellow-800',
      'Alta': 'bg-red-100 text-red-800'
    };
    return colors[complexidade as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredCasos = casosClinicosData.filter(caso => {
    const matchesSearch = caso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caso.autores.some(autor => autor.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         caso.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caso.palavrasChave.some(palavra => palavra.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesEspecialidade = especialidadeFiltro === 'todas' || caso.especialidade === especialidadeFiltro;
    const matchesComplexidade = complexidadeFiltro === 'todas' || caso.complexidade === complexidadeFiltro;
    const matchesTipoCaso = tipoCasoFiltro === 'todos' || caso.tipoCaso === tipoCasoFiltro;

    return matchesSearch && matchesEspecialidade && matchesComplexidade && matchesTipoCaso;
  });

  const sortedCasos = [...filteredCasos].sort((a, b) => {
    switch (ordenacao) {
      case 'alfabetica':
        return a.titulo.localeCompare(b.titulo);
      case 'mais-visualizados':
        return b.visualizacoes - a.visualizacoes;
      case 'mais-baixados':
        return b.downloads - a.downloads;
      case 'complexidade':
        const complexidadeOrder = { 'Alta': 3, 'Média': 2, 'Baixa': 1 };
        return complexidadeOrder[b.complexidade] - complexidadeOrder[a.complexidade];
      default: // 'recentes'
        return new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime();
    }
  });

  return (
    <div className="space-y-6">
      {/* Header com estatísticas */}
      <div className="bg-medical-green-50 rounded-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 mb-2">
              Casos Clínicos
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {casosClinicosData.length} casos disponíveis para estudo e discussão
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
              <span className="text-gray-500">Total de Downloads:</span>
              <span className="font-semibold ml-1">
                {casosClinicosData.reduce((sum, caso) => sum + caso.downloads, 0).toLocaleString()}
              </span>
            </div>
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
              <span className="text-gray-500">Especialidades:</span>
              <span className="font-semibold ml-1">
                {new Set(casosClinicosData.map(caso => caso.especialidade)).size}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white rounded-lg border p-4 md:p-6">
        <div className="space-y-4">
          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar por título, autor, especialidade ou palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filtros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <Select value={especialidadeFiltro} onValueChange={setEspecialidadeFiltro}>
              <SelectTrigger>
                <SelectValue placeholder="Especialidade" />
              </SelectTrigger>
              <SelectContent>
                {especialidades.map((esp) => (
                  <SelectItem key={esp} value={esp}>
                    {esp === 'todas' ? 'Todas as Especialidades' : esp}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={complexidadeFiltro} onValueChange={setComplexidadeFiltro}>
              <SelectTrigger>
                <SelectValue placeholder="Complexidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as Complexidades</SelectItem>
                <SelectItem value="Baixa">Baixa</SelectItem>
                <SelectItem value="Média">Média</SelectItem>
                <SelectItem value="Alta">Alta</SelectItem>
              </SelectContent>
            </Select>

            <Select value={tipoCasoFiltro} onValueChange={setTipoCasoFiltro}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Caso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Tipos</SelectItem>
                <SelectItem value="Diagnóstico Diferencial">Diagnóstico Diferencial</SelectItem>
                <SelectItem value="Tratamento Inovador">Tratamento Inovador</SelectItem>
                <SelectItem value="Complicação Rara">Complicação Rara</SelectItem>
                <SelectItem value="Caso Didático">Caso Didático</SelectItem>
              </SelectContent>
            </Select>

            <Select value={ordenacao} onValueChange={setOrdenacao}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
                <SelectItem value="alfabetica">Ordem Alfabética</SelectItem>
                <SelectItem value="mais-visualizados">Mais Visualizados</SelectItem>
                <SelectItem value="mais-baixados">Mais Baixados</SelectItem>
                <SelectItem value="complexidade">Por Complexidade</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="text-sm text-gray-600 px-1">
        Mostrando {sortedCasos.length} de {casosClinicosData.length} casos
      </div>

      {/* Lista de Casos */}
      <div className="space-y-4 md:space-y-6">
        {sortedCasos.map((caso) => {
          const IconeEspecialidade = getEspecialidadeIcon(caso.especialidade);
          
          return (
            <Card key={caso.id} className={`hover:shadow-lg transition-all duration-200 ${caso.destaque ? 'border-l-4 border-l-medical-green-600' : ''}`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <CardTitle className="flex flex-col space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                      <IconeEspecialidade className="h-5 w-5 text-medical-green-600 flex-shrink-0" />
                      <span className="text-base md:text-lg leading-tight break-words">{caso.titulo}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center min-w-0">
                        <User className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{caso.autores.join(", ")}</span>
                      </span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span className="flex items-center flex-shrink-0">
                        <MapPin className="h-4 w-4 mr-1" />
                        {caso.instituicao}
                      </span>
                    </div>
                  </CardTitle>
                  
                  <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexidadeColor(caso.complexidade)}`}>
                      {caso.complexidade}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {caso.tipoCaso}
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {caso.especialidade}
                    </span>
                    {caso.destaque && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                        Destaque
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Resumo */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{caso.resumo}</p>
                  
                  {/* Detalhes do Caso */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-sm text-gray-700">Diagnóstico:</span>
                        <p className="text-sm text-gray-600 mt-1">{caso.diagnostico}</p>
                      </div>
                      <div>
                        <span className="font-medium text-sm text-gray-700">Sintomas Principais:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {caso.sintomas.map((sintoma, idx) => (
                            <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                              {sintoma}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-sm text-gray-700">Desfecho:</span>
                        <p className="text-sm text-gray-600 mt-1">{caso.desfecho}</p>
                      </div>
                      <div>
                        <span className="font-medium text-sm text-gray-700">Seguimento:</span>
                        <p className="text-sm text-gray-600 mt-1">{caso.tempoSeguimento}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Palavras-chave */}
                  <div>
                    <span className="font-medium text-sm text-gray-700 mb-2 block">Palavras-chave:</span>
                    <div className="flex flex-wrap gap-1">
                      {caso.palavrasChave.map((palavra, idx) => (
                        <span key={idx} className="bg-medical-green-100 text-medical-green-800 px-2 py-1 rounded-full text-xs">
                          {palavra}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Estatísticas e Ações */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {caso.visualizacoes.toLocaleString()} visualizações
                      </span>
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {caso.downloads} downloads
                      </span>
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {caso.likes} likes
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {caso.comentarios} comentários
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(caso.dataPublicacao).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50 text-sm">
                        <Eye className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Visualizar Caso</span>
                        <span className="sm:hidden">Ver Caso</span>
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
          );
        })}
      </div>

      {/* Estado vazio */}
      {sortedCasos.length === 0 && (
        <div className="text-center py-12">
          <Stethoscope className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum caso encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros de busca para encontrar casos clínicos.</p>
        </div>
      )}

      {/* CTA para Submissão */}
      <div className="bg-medical-green-50 rounded-lg p-6 md:p-8 text-center">
        <Stethoscope className="h-12 md:h-16 w-12 md:w-16 text-medical-green-600 mx-auto mb-4" />
        <h2 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 mb-4">
          Compartilhe seu Caso Clínico
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Contribua com a comunidade médica compartilhando casos interessantes e educativos. 
          Ajude outros profissionais a aprender com sua experiência clínica.
        </p>
        <Button className="bg-medical-green-600 hover:bg-medical-green-700 px-6 md:px-8 py-2 md:py-3">
          <BookOpen className="h-4 w-4 mr-2" />
          Submeter Caso Clínico
        </Button>
      </div>
    </div>
  );
};

export default CasosList;
