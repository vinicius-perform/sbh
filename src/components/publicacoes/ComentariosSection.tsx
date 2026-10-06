import { useState } from 'react';
import { MessageCircle, Send, User, ThumbsUp, Reply, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ComentariosSectionProps {
  artigoId: number;
}

interface Comentario {
  id: number;
  autor: string;
  tipo: 'medico' | 'pesquisador' | 'estudante' | 'geral';
  conteudo: string;
  data: string;
  likes: number;
  isLiked: boolean;
  respostas: Resposta[];
}

interface Resposta {
  id: number;
  autor: string;
  tipo: 'medico' | 'pesquisador' | 'estudante' | 'geral';
  conteudo: string;
  data: string;
  likes: number;
  isLiked: boolean;
}

const ComentariosSection = ({ artigoId }: ComentariosSectionProps) => {
  const [novoComentario, setNovoComentario] = useState('');
  const [novaResposta, setNovaResposta] = useState<{ [key: number]: string }>({});
  const [mostrarResposta, setMostrarResposta] = useState<{ [key: number]: boolean }>({});
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      id: 1,
      autor: "Dr. Rafael Santos",
      tipo: "medico",
      conteudo: "Excelente trabalho! Os resultados apresentados são muito promissores. Gostaria de saber mais sobre a técnica específica utilizada na aplicação da toxina botulínica na região do terço superior da face.",
      data: "2024-02-20",
      likes: 8,
      isLiked: false,
      respostas: [
        {
          id: 1,
          autor: "Dr. Carlos Eduardo Silva",
          tipo: "pesquisador",
          conteudo: "Obrigado pelo comentário, Dr. Rafael. A técnica utilizada seguiu o protocolo modificado que desenvolvemos, com pontos de aplicação específicos para cada grupo muscular. Posso enviar mais detalhes por email se houver interesse.",
          data: "2024-02-21",
          likes: 3,
          isLiked: true
        }
      ]
    },
    {
      id: 2,
      autor: "Dra. Patricia Lima",
      tipo: "medico",
      conteudo: "Muito interessante a abordagem metodológica. Os critérios de inclusão e exclusão estão bem definidos. Qual foi o tempo de follow-up médio dos pacientes?",
      data: "2024-02-18",
      likes: 5,
      isLiked: true,
      respostas: []
    },
    {
      id: 3,
      autor: "João Silva",
      tipo: "estudante",
      conteudo: "Como estudante de medicina, achei o artigo muito didático. A metodologia está bem explicada e os resultados são convincentes. Parabéns aos autores!",
      data: "2024-02-17",
      likes: 12,
      isLiked: false,
      respostas: []
    }
  ]);

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'medico': return 'bg-blue-100 text-blue-800';
      case 'pesquisador': return 'bg-purple-100 text-purple-800';
      case 'estudante': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'medico': return 'Médico';
      case 'pesquisador': return 'Pesquisador';
      case 'estudante': return 'Estudante';
      default: return 'Usuário';
    }
  };

  const handleSubmitComentario = () => {
    if (novoComentario.trim()) {
      const novoComent: Comentario = {
        id: Date.now(),
        autor: "Usuário Atual",
        tipo: "geral",
        conteudo: novoComentario,
        data: new Date().toISOString().split('T')[0],
        likes: 0,
        isLiked: false,
        respostas: []
      };
      setComentarios([novoComent, ...comentarios]);
      setNovoComentario('');
    }
  };

  const handleSubmitResposta = (comentarioId: number) => {
    const resposta = novaResposta[comentarioId];
    if (resposta?.trim()) {
      const novaResp: Resposta = {
        id: Date.now(),
        autor: "Usuário Atual",
        tipo: "geral",
        conteudo: resposta,
        data: new Date().toISOString().split('T')[0],
        likes: 0,
        isLiked: false
      };
      
      setComentarios(comentarios.map(comentario => 
        comentario.id === comentarioId 
          ? { ...comentario, respostas: [...comentario.respostas, novaResp] }
          : comentario
      ));
      
      setNovaResposta({ ...novaResposta, [comentarioId]: '' });
      setMostrarResposta({ ...mostrarResposta, [comentarioId]: false });
    }
  };

  const toggleLike = (comentarioId: number, respostaId?: number) => {
    setComentarios(comentarios.map(comentario => {
      if (comentario.id === comentarioId) {
        if (respostaId) {
          // Curtir resposta
          return {
            ...comentario,
            respostas: comentario.respostas.map(resposta => 
              resposta.id === respostaId
                ? { 
                    ...resposta, 
                    isLiked: !resposta.isLiked,
                    likes: resposta.isLiked ? resposta.likes - 1 : resposta.likes + 1
                  }
                : resposta
            )
          };
        } else {
          // Curtir comentário
          return {
            ...comentario,
            isLiked: !comentario.isLiked,
            likes: comentario.isLiked ? comentario.likes - 1 : comentario.likes + 1
          };
        }
      }
      return comentario;
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
          <MessageCircle className="h-5 w-5" />
          <span>Discussão Científica ({comentarios.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6">
        {/* Formulário para novo comentário */}
        <div className="space-y-3">
          <Textarea
            placeholder="Compartilhe sua opinião científica, dúvidas ou experiências relacionadas a este artigo..."
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
            className="min-h-[80px] md:min-h-[100px] text-sm md:text-base"
          />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <p className="text-xs md:text-sm text-gray-500">
              Mantenha um ambiente respeitoso e focado na discussão científica.
            </p>
            <Button 
              onClick={handleSubmitComentario}
              className="bg-medical-green-600 hover:bg-medical-green-700 w-full sm:w-auto"
              disabled={!novoComentario.trim()}
            >
              <Send className="h-4 w-4 mr-2" />
              Publicar
            </Button>
          </div>
        </div>

        {/* Lista de comentários */}
        <div className="space-y-4 md:space-y-6">
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="border-b border-gray-100 pb-4 md:pb-6 last:border-b-0">
              {/* Comentário principal */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Avatar className="flex-shrink-0">
                    <AvatarFallback className="bg-medical-green-100 text-xs">
                      {comentario.autor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <span className="font-medium text-gray-900 text-sm md:text-base truncate">{comentario.autor}</span>
                      <Badge variant="outline" className={`text-xs self-start sm:self-center ${getTipoColor(comentario.tipo)}`}>
                        {getTipoLabel(comentario.tipo)}
                      </Badge>
                      <span className="text-xs md:text-sm text-gray-500">
                        {new Date(comentario.data).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-3 leading-relaxed text-sm md:text-base break-words">{comentario.conteudo}</p>
                    
                    <div className="flex flex-wrap items-center gap-2 md:gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike(comentario.id)}
                        className={`text-sm ${comentario.isLiked ? 'text-blue-600' : 'text-gray-500'}`}
                      >
                        <ThumbsUp className={`h-4 w-4 mr-1 ${comentario.isLiked ? 'fill-current' : ''}`} />
                        {comentario.likes}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setMostrarResposta({ 
                          ...mostrarResposta, 
                          [comentario.id]: !mostrarResposta[comentario.id] 
                        })}
                        className="text-sm text-gray-500"
                      >
                        <Reply className="h-4 w-4 mr-1" />
                        Responder
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Formulário de resposta */}
                {mostrarResposta[comentario.id] && (
                  <div className="ml-8 md:ml-12 mt-3 space-y-2">
                    <Textarea
                      placeholder="Escreva sua resposta..."
                      value={novaResposta[comentario.id] || ''}
                      onChange={(e) => setNovaResposta({ 
                        ...novaResposta, 
                        [comentario.id]: e.target.value 
                      })}
                      className="min-h-[60px] md:min-h-[80px] text-sm"
                    />
                    <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setMostrarResposta({ 
                          ...mostrarResposta, 
                          [comentario.id]: false 
                        })}
                        className="w-full sm:w-auto"
                      >
                        Cancelar
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleSubmitResposta(comentario.id)}
                        className="bg-medical-green-600 hover:bg-medical-green-700 w-full sm:w-auto"
                        disabled={!novaResposta[comentario.id]?.trim()}
                      >
                        Responder
                      </Button>
                    </div>
                  </div>
                )}

                {/* Respostas */}
                {comentario.respostas.length > 0 && (
                  <div className="ml-8 md:ml-12 mt-4 space-y-3 md:space-y-4">
                    {comentario.respostas.map((resposta) => (
                      <div key={resposta.id} className="flex items-start space-x-2 md:space-x-3">
                        <Avatar className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0">
                          <AvatarFallback className="bg-gray-100 text-xs">
                            {resposta.autor.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                            <span className="font-medium text-gray-900 text-xs md:text-sm truncate">{resposta.autor}</span>
                            <Badge variant="outline" className={`text-xs ${getTipoColor(resposta.tipo)}`}>
                              {getTipoLabel(resposta.tipo)}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {new Date(resposta.data).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 text-xs md:text-sm mb-2 leading-relaxed break-words">{resposta.conteudo}</p>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleLike(comentario.id, resposta.id)}
                            className={`text-xs ${resposta.isLiked ? 'text-blue-600' : 'text-gray-500'}`}
                          >
                            <ThumbsUp className={`h-3 w-3 mr-1 ${resposta.isLiked ? 'fill-current' : ''}`} />
                            {resposta.likes}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {comentarios.length === 0 && (
          <div className="text-center py-6 md:py-8 text-gray-500">
            <MessageCircle className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-3 text-gray-300" />
            <p className="text-base md:text-lg font-medium mb-1">Nenhum comentário ainda</p>
            <p className="text-sm">Seja o primeiro a compartilhar sua opinião sobre este artigo.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ComentariosSection;
