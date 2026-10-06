
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Heart, Bookmark, User, Calendar, Tag, Eye, Quote, FileText, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ComentariosSection from '@/components/publicacoes/ComentariosSection';

const ArtigoDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullAbstract, setShowFullAbstract] = useState(false);

  // Dados mockados do artigo - em uma aplicação real, estes dados viriam de uma API
  const artigo = {
    id: 1,
    title: "Toxina Botulínica Tipo A: Novas Aplicações em Harmonização Facial",
    authors: [
      { name: "Dr. Carlos Eduardo Silva", institution: "Universidade Federal de São Paulo", email: "carlos@unifesp.br" },
      { name: "Dra. Marina Oliveira", institution: "Hospital das Clínicas", email: "marina@hc.br" }
    ],
    journal: "Revista Brasileira de Harmonização Facial",
    volume: "15",
    issue: "3",
    pages: "45-62",
    date: "2024-02-15",
    category: "Artigo Original",
    specialty: "Harmonização Facial",
    abstract: "Este estudo apresenta uma análise abrangente das novas aplicações da toxina botulínica tipo A em harmonização facial, explorando técnicas inovadoras e resultados clínicos em 200 pacientes ao longo de 12 meses. Os resultados demonstram eficácia significativa em tratamentos de rejuvenescimento facial com mínimos efeitos colaterais. A pesquisa foi conduzida em ambiente controlado, seguindo protocolos rigorosos de segurança e eficácia. Foram analisados diferentes grupos etários e tipos de pele, permitindo uma compreensão mais ampla das aplicações da toxina botulínica em diversos contextos clínicos.",
    fullContent: `
      <h2>Introdução</h2>
      <p>A toxina botulínica tipo A tem revolucionado o campo da harmonização facial nas últimas décadas. Inicialmente utilizada para fins terapêuticos, sua aplicação estética tem se expandido significativamente, oferecendo resultados cada vez mais naturais e duradouros.</p>
      
      <h2>Metodologia</h2>
      <p>Este estudo prospectivo incluiu 200 pacientes, divididos em quatro grupos de acordo com a faixa etária: 25-35 anos, 36-45 anos, 46-55 anos e 56-65 anos. Todos os pacientes foram submetidos a avaliação clínica detalhada antes do tratamento.</p>
      
      <h2>Resultados</h2>
      <p>Os resultados demonstraram eficácia superior a 95% em todos os grupos estudados, com satisfação do paciente atingindo níveis de 98%. Os efeitos colaterais foram mínimos e transitórios.</p>
      
      <h2>Discussão</h2>
      <p>Os achados deste estudo confirmam a segurança e eficácia da toxina botulínica tipo A quando aplicada por profissionais qualificados, seguindo protocolos estabelecidos.</p>
      
      <h2>Conclusão</h2>
      <p>A toxina botulínica tipo A representa uma ferramenta valiosa na harmonização facial moderna, oferecendo resultados seguros e previsíveis quando utilizada adequadamente.</p>
    `,
    keywords: ["Toxina Botulínica", "Harmonização Facial", "Rejuvenescimento", "Estética"],
    downloads: 456,
    views: 1234,
    citations: 12,
    doi: "10.1234/rbhf.2024.001",
    openAccess: true,
    referencias: [
      "Smith J, Johnson A. Botulinum toxin applications in facial aesthetics. J Aesthetic Med. 2023;18(2):123-134.",
      "Brown L, Davis M. Safety protocols in cosmetic botulinum toxin procedures. Plast Reconstr Surg. 2023;151(4):789-798.",
      "Wilson R, Thompson K. Patient satisfaction in facial harmonization treatments. Aesthetic Plast Surg. 2023;47(3):456-465."
    ]
  };

  const artigosRelacionados = [
    {
      id: 2,
      title: "Preenchimento com Ácido Hialurônico: Protocolo de Segurança",
      authors: ["Dra. Ana Paula Santos"],
      category: "Protocolo Clínico"
    },
    {
      id: 3,
      title: "Bioestimuladores de Colágeno: Comparativo de Eficácia",
      authors: ["Dr. João Pedro Martins"],
      category: "Estudo Comparativo"
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: artigo.title,
        text: artigo.abstract.substring(0, 100) + '...',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/publicacoes')}
              className="flex items-center space-x-2 self-start"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar às Publicações</span>
              <span className="sm:hidden">Voltar</span>
            </Button>
            
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-600" : ""}
              >
                <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isLiked ? 'Curtido' : 'Curtir'}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-blue-600" : ""}
              >
                <Bookmark className={`h-4 w-4 mr-1 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isBookmarked ? 'Salvo' : 'Salvar'}</span>
              </Button>
              
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Compartilhar</span>
              </Button>
              
              <Button className="bg-medical-green-600 hover:bg-medical-green-700 text-sm">
                <Download className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Cabeçalho do artigo */}
            <Card>
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-medical-green-100 text-medical-green-800">
                    {artigo.category}
                  </Badge>
                  <Badge variant="outline">{artigo.specialty}</Badge>
                  {artigo.openAccess && (
                    <Badge className="bg-green-100 text-green-800">
                      Acesso Aberto
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 leading-tight break-words">
                  {artigo.title}
                </h1>
                
                {/* Autores */}
                <div className="space-y-2">
                  {artigo.authors.map((author, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-600">
                      <div className="flex items-center space-x-2 min-w-0">
                        <User className="h-4 w-4 flex-shrink-0" />
                        <span className="font-medium">{author.name}</span>
                      </div>
                      <span className="text-sm break-words sm:ml-6">- {author.institution}</span>
                    </div>
                  ))}
                </div>
                
                {/* Metadados da publicação */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    {new Date(artigo.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="flex items-center min-w-0">
                    <Tag className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{artigo.journal}</span>
                  </span>
                  <span className="break-all">Vol. {artigo.volume}, n. {artigo.issue}, p. {artigo.pages}</span>
                  <span className="font-mono text-xs break-all">DOI: {artigo.doi}</span>
                </div>
                
                {/* Métricas */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pt-2 border-t">
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {artigo.views} views
                  </span>
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {artigo.downloads} downloads
                  </span>
                  <span>{artigo.citations} citações</span>
                </div>
              </CardHeader>
            </Card>

            {/* Abstract */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                  <FileText className="h-5 w-5" />
                  <span>Resumo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {showFullAbstract ? artigo.abstract : artigo.abstract.substring(0, 300) + '...'}
                  </p>
                  {artigo.abstract.length > 300 && (
                    <Button
                      variant="ghost"
                      className="mt-2 p-0 h-auto text-medical-green-600 hover:text-medical-green-700"
                      onClick={() => setShowFullAbstract(!showFullAbstract)}
                    >
                      {showFullAbstract ? 'Ver menos' : 'Ver mais'}
                    </Button>
                  )}
                </div>
                
                {/* Keywords */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Palavras-chave:</h4>
                  <div className="flex flex-wrap gap-1">
                    {artigo.keywords.map((keyword, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conteúdo completo do artigo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Artigo Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose max-w-none text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: artigo.fullContent }}
                />
              </CardContent>
            </Card>

            {/* Referências */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                  <Quote className="h-5 w-5" />
                  <span>Referências</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  {artigo.referencias.map((ref, index) => (
                    <li key={index} className="text-sm text-gray-700 break-words">
                      {ref}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Seção de Comentários */}
            <div className="lg:hidden">
              <ComentariosSection artigoId={Number(id)} />
            </div>
          </div>

          {/* Sidebar - escondida em mobile, visível apenas em lg+ */}
          <div className="hidden lg:block space-y-6">
            {/* Ações rápidas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-medical-green-600 hover:bg-medical-green-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full">
                  <Quote className="h-4 w-4 mr-2" />
                  Como Citar
                </Button>
                <Button variant="outline" className="w-full" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </CardContent>
            </Card>

            {/* Artigos relacionados */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artigos Relacionados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {artigosRelacionados.map((artigo) => (
                  <div key={artigo.id} className="border-b pb-3 last:border-b-0">
                    <h4 className="font-medium text-sm mb-1 text-gray-900 hover:text-medical-green-600 cursor-pointer">
                      {artigo.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {artigo.authors.join(", ")}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {artigo.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Informações da revista */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sobre a Revista</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Revista:</strong> {artigo.journal}</p>
                  <p><strong>ISSN:</strong> 2594-5130</p>
                  <p><strong>Fator de Impacto:</strong> 2.45</p>
                  <p><strong>Periodicidade:</strong> Trimestral</p>
                </div>
              </CardContent>
            </Card>

            {/* Comentários na sidebar para desktop */}
            <ComentariosSection artigoId={Number(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtigoDetalhes;
