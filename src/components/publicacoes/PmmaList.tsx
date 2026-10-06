import { useState } from 'react';
import { Search, Filter, Calendar, User, Tag, Download, Eye, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
const PmmaList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const artigos = [{
    id: 1,
    title: "Biocompatibilidade e resposta fibrosa do PMMA em músculos estriados",
    authors: ["Eduardo da Costa Teixeira", "Fernanda Bortolozo", "Honório Sampaio Menezes"],
    journal: "International Journal of Development Research",
    date: "2021-10-01",
    category: "Artigo Original",
    abstract: "Estudo experimental em ratos Wistar avaliando a biocompatibilidade do PMMA, mostrando formação fibrosa estável sem sinais de toxicidade.",
    keywords: ["PMMA", "Biocompatibilidade", "Músculos estriados", "Toxicidade"],
    downloads: 0,
    views: 234,
    citations: 8,
    doi: "10.22192/ijdr.2021.15.10.004",
    featured: true,
    openAccess: true,
    link: "https://biossimetric.com.br/biocompatibility-and-fibrous-response-of-pmma-in-skeletal-muscles/"
  }, {
    id: 2,
    title: "Análise por Microscopia Eletrônica do PMMA de Terceira Geração",
    authors: ["Fernanda Bortolozo", "Honório Sampaio Menezes", "Ângela Schütz Paschoal", "Mariana Rinaldi", "Bárbara Rêgo", "Priscila de Souza"],
    journal: "MedNEXT Journal of Medical and Health Sciences",
    date: "2022-05-01",
    category: "Artigo Original",
    abstract: "Comparou partículas de PMMA de duas empresas brasileiras, constatando alta homogeneidade e tamanho ideal das microesferas.",
    keywords: ["PMMA", "Microscopia Eletrônica", "Microesferas", "Terceira Geração"],
    downloads: 0,
    views: 456,
    citations: 12,
    doi: "10.34256/mednext.2022.s3.014",
    featured: true,
    openAccess: true,
    link: "https://biossimetric.com.br/scanning-electron-microscope-analysis-of-pmma-third-generation-a-comparative-experimental-study/"
  }, {
    id: 3,
    title: "Segurança do PMMA para Preenchimento Facial",
    authors: ["Bruno Peres Paulucci"],
    journal: "Aesthetic Plastic Surgery",
    date: "2019-10-01",
    category: "Revisão Sistemática",
    abstract: "Revisão sobre taxas de ocorrência de granulomas e métodos de tratamento no uso de PMMA para preenchimento facial.",
    keywords: ["PMMA", "Preenchimento Facial", "Granulomas", "Segurança"],
    downloads: 0,
    views: 623,
    citations: 15,
    doi: "10.1007/s00266-019-01478-9",
    featured: false,
    openAccess: false,
    link: "https://biossimetric.com.br/pmma-safety-for-facial-filling-review-of-rates-of-granuloma-occurrence-and-treatment-methods/"
  }, {
    id: 4,
    title: "Diagnóstico Diferencial por Imagem entre PMMA e Silicone Líquido",
    authors: ["Suzana Barretto Garcia Pereira", "Danuza Dias Alves", "Honório Sampaio Menezes", "Fernanda Bortolozo", "Roberto Chacur"],
    journal: "Indian Journal Of Applied Research",
    date: "2020-12-01",
    category: "Artigo Original",
    abstract: "Estudo de diagnóstico por imagem diferenciando PMMA de silicone líquido.",
    keywords: ["PMMA", "Silicone Líquido", "Diagnóstico por Imagem", "Diferencial"],
    downloads: 0,
    views: 345,
    citations: 6,
    doi: "10.36106/ijar.2020.12.008",
    featured: false,
    openAccess: true,
    link: "https://biossimetric.com.br/imaging-differential-diagnosis-of-pmma-and-liquid-silicone/"
  }, {
    id: 5,
    title: "Uso de Cânula Guiada por Ultrassom para Injeção de PMMA em Gluteoplastia Estética",
    authors: ["Honório Sampaio Menezes", "Ozorio Sampaio Menezes"],
    journal: "Journal Surgical Case Reports",
    date: "2023-01-01",
    category: "Estudo de Caso",
    abstract: "Técnica segura usando ultrassom para guiar a aplicação de PMMA na gluteoplastia estética.",
    keywords: ["PMMA", "Ultrassom", "Gluteoplastia", "Cânula Guiada"],
    downloads: 0,
    views: 789,
    citations: 4,
    doi: "10.1093/jscr/rjab567",
    featured: true,
    openAccess: true,
    link: "https://biossimetric.com.br/ultrasonography-guided-cannula-method-for-pmma-injection-in-aesthetic-gluteal-augmentation-a-technical-note/"
  }, {
    id: 6,
    title: "Comparação do Risco de Embolia entre PMMA e Ácido Hialurônico",
    authors: ["Nie F", "Xie H", "Wang G", "An Y"],
    journal: "Aesthetic Plastic Surgery",
    date: "2019-06-01",
    category: "Artigo Original",
    abstract: "Estudo em coelhos comparando o risco de embolia entre PMMA e ácido hialurônico, com menor risco observado no PMMA.",
    keywords: ["PMMA", "Ácido Hialurônico", "Embolia", "Comparação de Risco"],
    downloads: 0,
    views: 567,
    citations: 9,
    doi: "10.1007/s00266-019-01389-x",
    featured: false,
    openAccess: false,
    link: "https://biossimetric.com.br/risk-comparison-of-filler-embolism-between-polymethyl-methacrylate-pmma-and-hyaluronic-acid-ha/"
  }];
  const categories = ['todos', 'Artigo Original', 'Revisão Sistemática', 'Estudo de Caso'];
  const filteredArtigos = artigos.filter(artigo => {
    const matchesSearch = artigo.title.toLowerCase().includes(searchTerm.toLowerCase()) || artigo.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) || artigo.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'todos' || artigo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="space-y-4 md:space-y-6">
      {/* Filtros e Busca */}
      <div className="bg-white p-4 md:p-6 rounded-lg border">
        <div className="space-y-4">
          {/* Barra de busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar por título, autor ou palavra-chave..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 text-sm md:text-base" />
          </div>
          
          {/* Filtros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => <SelectItem key={category} value={category}>
                    {category === 'todos' ? 'Todas as Categorias' : category}
                  </SelectItem>)}
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
        {filteredArtigos.map(artigo => <Card key={artigo.id} className={`hover:shadow-lg transition-all duration-300 ${artigo.featured ? 'border-l-4 border-l-medical-green-600' : ''}`}>
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
                      PMMA
                    </Badge>
                    {artigo.featured && <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                        Destaque
                      </Badge>}
                    {artigo.openAccess && <Badge className="bg-green-100 text-green-800 text-xs">
                        Acesso Aberto
                      </Badge>}
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  
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
                  {artigo.keywords.map((keyword, index) => <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {keyword}
                    </span>)}
                </div>

                {/* Métricas e DOI */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                  
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    
                    <Button size="sm" className="bg-medical-green-600 hover:bg-medical-green-700" onClick={() => window.open(artigo.link, '_blank')}>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Acesse a matéria completa</span>
                      <span className="sm:hidden">Matéria completa</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>)}
      </div>

      {filteredArtigos.length === 0 && <div className="text-center py-8 md:py-12">
          <Search className="h-12 md:h-16 w-12 md:w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">Nenhum artigo encontrado</h3>
          <p className="text-gray-500 text-sm md:text-base">Tente ajustar os filtros ou termos de busca</p>
        </div>}
    </div>;
};
export default PmmaList;