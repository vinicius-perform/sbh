import React from 'react';
import MedicoCard from './MedicoCard';
import { useMedicos } from '@/hooks/useMedicos';

const DiretoriaSection = () => {
  const {
    data: medicos,
    isLoading,
    error
  } = useMedicos();
  console.log('DiretoriaSection - medicos:', medicos);
  console.log('DiretoriaSection - isLoading:', isLoading);
  console.log('DiretoriaSection - error:', error);
  
  if (isLoading) {
    return <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">Nossa Diretoria</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça os profissionais que lideram nossa sociedade
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-green-600"></div>
          </div>
        </div>
      </section>;
  }
  
  if (error) {
    console.error('Erro na DiretoriaSection:', error);
    return <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">Nossa Diretoria</h2>
            <p className="text-lg text-red-600">
              Erro ao carregar informações da diretoria. Tente novamente mais tarde.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Detalhes: {error.message}
            </p>
          </div>
        </div>
      </section>;
  }
  
  if (!medicos || medicos.length === 0) {
    return <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">Nossa Diretoria</h2>
            <p className="text-lg text-gray-600">
              Nenhum membro da diretoria encontrado.
            </p>
          </div>
        </div>
      </section>;
  }

  // Função para ordenar o Conselho Administrativo na ordem específica
  const ordenarConselhoAdministrativo = (membros: any[]) => {
    const ordemDesejada = [
      'Dra. Keyla Klava',
      'Dr. Rafael Almenara', 
      'Dra. Nathalia Bittar',
      'Dr. Gustavo Camargo'
    ];
    
    return membros.sort((a, b) => {
      const indexA = ordemDesejada.findIndex(nome => 
        a.nome.toLowerCase().includes(nome.toLowerCase().replace('Dr. ', '').replace('Dra. ', ''))
      );
      const indexB = ordemDesejada.findIndex(nome => 
        b.nome.toLowerCase().includes(nome.toLowerCase().replace('Dr. ', '').replace('Dra. ', ''))
      );
      
      // Se ambos estão na lista, ordenar pela posição
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      
      // Se apenas um está na lista, ele vem primeiro
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      
      // Se nenhum está na lista, manter ordem original
      return 0;
    });
  };
  
  const conselhoAdministrativo = ordenarConselhoAdministrativo(
    medicos?.filter(medico => ['Presidente', 'Vice-Presidente', 'Tesoureiro', 'Secretária'].includes(medico.funcao_conselho)) || []
  );
  const conselhoFiscal = medicos?.filter(medico => medico.funcao_conselho === 'Conselheiro Fiscal') || [];
  const conselhoCientifico = medicos?.filter(medico => ['Diretor Científico', 'Coordenadora Científica', 'Coordenadora de Pesquisa'].includes(medico.funcao_conselho)) || [];
  const conselhoProdutos = medicos?.filter(medico => medico.funcao_conselho === 'Diretor de Produtos e Materiais') || [];
  const assessoriaJuridica = medicos?.filter(medico => medico.funcao_conselho === 'Assessor Jurídico Principal') || [];
  const membrosFundadores = medicos?.filter(medico => medico.funcao_conselho === 'Membro Fundador') || [];
  
  console.log('Conselho Administrativo:', conselhoAdministrativo);
  console.log('Conselho Fiscal:', conselhoFiscal);
  
  const renderConselho = (titulo: string, membros: any[], cor: string, corFundo: string) => {
    if (membros.length === 0) return null;
    console.log(`Renderizando ${titulo} com ${membros.length} membros`);
    return (
      <div className="mb-16">
        <h3 className={`font-playfair text-3xl font-bold ${cor} mb-8 text-center`}>
          {titulo}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {membros.map(medico => {
            // Verificar se é o Dr. Maurício Olmedo para ocultar a foto
            const isMauricioOlmedo = medico.nome.toLowerCase().includes('maurício olmedo') || 
                                   medico.nome.toLowerCase().includes('mauricio olmedo');
            
            return (
              <MedicoCard 
                key={medico.id} 
                medico={medico} 
                conselhoCor={cor} 
                conselhoCorFundo={corFundo}
                hideFoto={isMauricioOlmedo}
              />
            );
          })}
        </div>
      </div>
    );
  };
  
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">Nossa Diretoria</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Conheça os profissionais dedicados que lideram nossa sociedade, promovendo a excelência na harmonização facial e corporal, comprometidos com o avanço científico da área.</p>
        </div>

        <div className="space-y-16">
          {renderConselho("Conselho Administrativo", conselhoAdministrativo, "text-medical-green-700", "bg-medical-green-100")}
          
          {renderConselho("Conselho Fiscal", conselhoFiscal, "text-medical-gold-700", "bg-medical-gold-100")}
          
          {renderConselho("Conselho Científico", conselhoCientifico, "text-blue-700", "bg-blue-100")}
          
          {renderConselho("Conselho de Produtos e Materiais", conselhoProdutos, "text-purple-700", "bg-purple-100")}
          
          {renderConselho("Assessoria Jurídica", assessoriaJuridica, "text-red-700", "bg-red-100")}
          
          {renderConselho("Membros Fundadores", membrosFundadores, "text-amber-700", "bg-amber-100")}
        </div>

        {medicos && medicos.length > 0 && <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              Total de membros: {medicos.length}
            </p>
          </div>}
      </div>
    </section>;
};

export default DiretoriaSection;
