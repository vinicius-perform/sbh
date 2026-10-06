import React from 'react';
import { Scale, Download, Search, FileText, Gavel, CheckCircle, AlertTriangle, Users, BookOpen, ExternalLink, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const Legislacao = () => {
  const documents = [
    {
      id: 1,
      title: "Código de Ética Médica - Resolução CFM nº 2.217/2018",
      category: "Ética",
      description: "Código de ética profissional do médico atualizado.",
      date: "2018",
      fileSize: "2.5 MB"
    },
    {
      id: 2,
      title: "Lei do Ato Médico - Lei nº 12.842/2013",
      category: "Legislação",
      description: "Define as atividades privativas do exercício da medicina.",
      date: "2013",
      fileSize: "1.8 MB"
    },
    {
      id: 3,
      title: "Resolução sobre Telemedicina - CFM nº 2.314/2022",
      category: "Diretrizes",
      description: "Normas para o exercício da telemedicina no Brasil.",
      date: "2022",
      fileSize: "3.2 MB"
    },
    {
      id: 4,
      title: "Diretrizes para Uso de PMMA - CFM nº 2.368/2023",
      category: "Diretrizes",
      description: "Normas técnicas para procedimentos com polimetilmetacrilato.",
      date: "2023",
      fileSize: "4.1 MB"
    },
    {
      id: 5,
      title: "Resolução sobre Biomateriais - ANVISA RDC nº 185/2019",
      category: "Legislação",
      description: "Regulamentação de biomateriais para uso médico.",
      date: "2019",
      fileSize: "3.8 MB"
    }
  ];

  const ethicsGuidelines = [
    {
      title: "Princípio da Beneficência",
      description: "O uso de PMMA deve sempre visar o bem-estar e melhoria da qualidade de vida do paciente.",
      points: [
        "Avaliação criteriosa dos benefícios vs. riscos",
        "Indicação baseada em evidências científicas",
        "Acompanhamento longitudinal do paciente"
      ]
    },
    {
      title: "Princípio da Não-Maleficência",
      description: "Minimizar riscos e complicações associadas ao uso de PMMA.",
      points: [
        "Técnica cirúrgica rigorosa",
        "Uso de materiais certificados",
        "Controle de infecção hospitalar"
      ]
    },
    {
      title: "Princípio da Autonomia",
      description: "Consentimento informado detalhado sobre procedimentos com PMMA.",
      points: [
        "Explicação clara dos riscos e benefícios",
        "Alternativas terapêuticas disponíveis",
        "Direito à recusa ou desistência"
      ]
    }
  ];

  const legislationItems = [
    {
      title: "RDC ANVISA nº 185/2019",
      description: "Regulamentação de dispositivos médicos implantáveis",
      requirements: [
        "Certificação ISO 13485 obrigatória",
        "Registro sanitário vigente",
        "Rastreabilidade do produto"
      ]
    },
    {
      title: "Resolução CFM nº 2.368/2023",
      description: "Normas específicas para uso de PMMA",
      requirements: [
        "Especialização em cirurgia plástica",
        "Centro cirúrgico habilitado",
        "Protocolo de emergência estabelecido"
      ]
    },
    {
      title: "Lei nº 12.842/2013 - Ato Médico",
      description: "Definição das atividades médicas privativas",
      requirements: [
        "Procedimento exclusivamente médico",
        "Responsabilidade técnica definida",
        "Supervisão médica obrigatória"
      ]
    }
  ];

  const qualityDirectives = [
    {
      category: "Pré-operatório",
      items: [
        "Avaliação clínica completa",
        "Exames complementares específicos",
        "Planejamento cirúrgico detalhado",
        "Termo de consentimento informado"
      ]
    },
    {
      category: "Trans-operatório",
      items: [
        "Técnica asséptica rigorosa",
        "Materiais certificados e rastreáveis",
        "Monitorização contínua",
        "Registro operatório completo"
      ]
    },
    {
      category: "Pós-operatório",
      items: [
        "Acompanhamento sistemático",
        "Controle de complicações",
        "Avaliação de resultados",
        "Educação do paciente"
      ]
    }
  ];

  const parecerPMMA = {
    title: "Anvisa reafirma uso aprovado do PMMA: perfil risco-benefício aceitável",
    resumo: "Em julho de 2025, a Anvisa concluiu que o PMMA continua autorizado no Brasil, com risco-benefício aceitável quando usado nas indicações aprovadas e sob condições adequadas, sem necessidade de novas restrições.",
    pontos: [
      "Reavaliação motivada por pedido do CFM.",
      "Revisão de literatura científica e experiências internacionais.",
      "Inspeções confirmaram cumprimento das Boas Práticas de Fabricação (BPF) dos produtos aprovados.",
      "Uso restrito às indicações aprovadas; não inclui uso indiscriminado para fins estéticos (off-label não regulamentado).",
      "Aplicação proibida a não-médicos; autorizada somente por médicos ou cirurgiões-dentistas habilitados.",
      "Aplicação glútea permitida apenas em casos de lipodistrofia por antirretrovirais, respeitando limite de 60 mL por glúteo.",
      "Notificação de eventos adversos é fundamental — alertas sobre subnotificação e necessidade de fiscalização pelos conselhos."
    ],
    link: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/avaliacao-da-anvisa-mantem-pmma-para-as-indicacoes-ja-aprovadas-no-pais"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Legislação & Ética
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-2xl mx-auto">
            Acesse documentos jurídicos, diretrizes éticas e regulamentações da medicina
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-green-500 focus:border-medical-green-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="etica">Ética</TabsTrigger>
              <TabsTrigger value="legislacao">Legislação</TabsTrigger>
              <TabsTrigger value="diretrizes">Diretrizes</TabsTrigger>
              <TabsTrigger value="pareceres">Pareceres</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-6">
              {documents.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center space-x-2 flex-1">
                        <FileText className="h-5 w-5 text-medical-green-600 flex-shrink-0" />
                        <span className="text-base">{doc.title}</span>
                      </CardTitle>
                      <Badge variant="secondary" className="bg-medical-green-100 text-medical-green-800 whitespace-nowrap ml-4">
                        {doc.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{doc.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <span>Ano: {doc.date}</span>
                        <span className="mx-2">•</span>
                        <span>Tamanho: {doc.fileSize}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" className="border-medical-green-600 text-medical-green-600 hover:bg-medical-green-50">
                          Visualizar
                        </Button>
                        <Button className="bg-medical-green-600 hover:bg-medical-green-700">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="etica" className="space-y-6">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="h-8 w-8 text-medical-green-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Ética em Procedimentos com PMMA</h2>
                    <p className="text-gray-600">Diretrizes éticas para o uso responsável do polimetilmetacrilato</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                {ethicsGuidelines.map((guideline, index) => (
                  <Card key={index} className="border-l-4 border-medical-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-medical-green-600" />
                        <span>{guideline.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{guideline.description}</p>
                      <ul className="space-y-2">
                        {guideline.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 bg-medical-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-900">
                    <Users className="h-5 w-5" />
                    <span>Comitê de Ética em Pesquisa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4">
                    Estudos clínicos envolvendo PMMA devem ser submetidos ao Comitê de Ética em Pesquisa (CEP) 
                    para aprovação prévia, seguindo as diretrizes da Resolução CNS nº 466/2012.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                    Saiba mais sobre CEP
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legislacao" className="space-y-6">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Gavel className="h-8 w-8 text-medical-green-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Legislação para PMMA</h2>
                    <p className="text-gray-600">Regulamentações e normas legais aplicáveis</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {legislationItems.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-medical-green-600" />
                        <span>{item.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Requisitos obrigatórios:</h4>
                        {item.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-amber-900">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Responsabilidade Legal</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800 mb-4">
                    O médico é integralmente responsável pela indicação, execução e acompanhamento 
                    de procedimentos com PMMA, devendo manter documentação completa e atualizada.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-100">
                      Consultar jurisprudência
                    </Button>
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-100">
                      Modelos de documentação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="diretrizes" className="space-y-6">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-8 w-8 text-medical-green-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Diretrizes de Qualidade para PMMA</h2>
                    <p className="text-gray-600">Protocolos e boas práticas para procedimentos seguros</p>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {qualityDirectives.map((directive, index) => (
                  <AccordionItem key={index} value={`directive-${index}`}>
                    <Card>
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="bg-medical-green-100 text-medical-green-800">
                            {directive.category}
                          </Badge>
                          <span className="font-semibold">Diretrizes {directive.category}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {directive.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                ))}
              </Accordion>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-900">
                    <CheckCircle className="h-5 w-5" />
                    <span>Indicadores de Qualidade</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">&gt; 95%</div>
                      <div className="text-sm text-gray-600">Taxa de sucesso</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">&lt; 2%</div>
                      <div className="text-sm text-gray-600">Complicações</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">&gt; 90%</div>
                      <div className="text-sm text-gray-600">Satisfação</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pareceres" className="space-y-6">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="h-8 w-8 text-medical-green-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Pareceres Oficiais</h2>
                    <p className="text-gray-600">Comunicados e posicionamentos de órgãos reguladores</p>
                  </div>
                </div>
              </div>

              <Card className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <Badge className="bg-blue-600 text-white mb-2">ANVISA - 2025</Badge>
                        <CardTitle className="text-lg text-gray-900 leading-tight">
                          {parecerPMMA.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-blue-900 font-medium leading-relaxed">
                      {parecerPMMA.resumo}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Principais pontos do parecer:</h4>
                    {parecerPMMA.pontos.map((ponto, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{ponto}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Fonte:</span> ANVISA • <span className="font-medium">Data:</span> Julho 2025
                    </div>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(parecerPMMA.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Leia o comunicado completo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-700">
                    <FileText className="h-5 w-5" />
                    <span>Próximos Pareceres</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Esta seção será atualizada conforme novos pareceres e posicionamentos oficiais 
                    sejam publicados pelos órgãos reguladores e conselhos profissionais.
                  </p>
                  <div className="text-sm text-gray-500">
                    Acompanhe regularmente para se manter informado sobre as últimas regulamentações.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900">Aviso Importante</h3>
                <p className="text-amber-800">
                  Os documentos aqui disponibilizados são para fins informativos e de consulta. 
                  Para orientações específicas sobre procedimentos com PMMA, consulte sempre o CFM ou CRM de sua região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legislacao;
