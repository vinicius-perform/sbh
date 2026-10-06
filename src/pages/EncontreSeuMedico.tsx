
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Search, X } from 'lucide-react';
import { useMedicosPublicos, useEstados, useCidades } from '@/hooks/useMedicosPublicos';
import MedicoPublicoCard from '@/components/MedicoPublicoCard';
import MedicoPublicoSkeleton from '@/components/MedicoPublicoSkeleton';
import { useDebounce } from '@/hooks/useDebounce';

const EncontreSeuMedico = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // States para filtros
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedEstado, setSelectedEstado] = useState(searchParams.get('uf') || 'all');
  const [selectedCidade, setSelectedCidade] = useState(searchParams.get('cidade') || 'all');
  const [offset, setOffset] = useState(0);
  const [allMedicos, setAllMedicos] = useState<any[]>([]);

  // Debounce para busca
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Queries
  const { data: estados, isLoading: loadingEstados } = useEstados();
  const { data: cidades, isLoading: loadingCidades } = useCidades(selectedEstado === 'all' ? '' : selectedEstado);
  
  const { data: medicos, isLoading, error } = useMedicosPublicos({
    searchTerm: debouncedSearchTerm,
    estado: selectedEstado === 'all' ? '' : selectedEstado,
    cidade: selectedCidade === 'all' ? '' : selectedCidade,
    limit: 12,
    offset
  });

  // Atualizar lista quando dados chegarem
  useEffect(() => {
    if (medicos) {
      if (offset === 0) {
        setAllMedicos(medicos);
      } else {
        setAllMedicos(prev => [...prev, ...medicos]);
      }
    }
  }, [medicos, offset]);

  // Reset offset quando filtros mudarem
  useEffect(() => {
    setOffset(0);
    setAllMedicos([]);
  }, [debouncedSearchTerm, selectedEstado, selectedCidade]);

  // Lógica mais flexível para cidade - não resetar automaticamente
  useEffect(() => {
    // Só resetar cidade se o estado mudou e a cidade atual não existe no novo estado
    if (selectedEstado !== 'all' && selectedCidade !== 'all' && cidades && cidades.length > 0) {
      if (!cidades.includes(selectedCidade)) {
        setSelectedCidade('all');
      }
    }
  }, [selectedEstado, cidades, selectedCidade]);

  // Atualizar URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearchTerm) params.set('q', debouncedSearchTerm);
    if (selectedEstado !== 'all') params.set('uf', selectedEstado);
    if (selectedCidade !== 'all') params.set('cidade', selectedCidade);
    
    setSearchParams(params);
  }, [debouncedSearchTerm, selectedEstado, selectedCidade, setSearchParams]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedEstado('all');
    setSelectedCidade('all');
    setOffset(0);
    setAllMedicos([]);
  };

  const loadMore = () => {
    setOffset(prev => prev + 12);
  };

  const hasMore = medicos && medicos.length === 12;
  const showingResults = allMedicos;

  console.log('Estado atual dos médicos:', {
    medicos: medicos?.length,
    allMedicos: allMedicos.length,
    isLoading,
    error,
    filters: { searchTerm: debouncedSearchTerm, selectedEstado, selectedCidade }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-medical-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Encontre seu Médico
          </h1>
          <p className="text-xl text-medical-green-100 mb-8 max-w-3xl mx-auto">
            Busque por nome, CRM ou localização e encontre médicos associados à SBH.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Busca */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar por nome, CRM ou cidade
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Buscar por nome, CRM ou cidade..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Estado */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <Select value={selectedEstado} onValueChange={setSelectedEstado}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os estados</SelectItem>
                      {estados?.map((estado) => (
                        <SelectItem key={estado} value={estado}>
                          {estado}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Cidade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade
                  </label>
                  <Select 
                    value={selectedCidade} 
                    onValueChange={setSelectedCidade}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as cidades</SelectItem>
                      {cidades?.map((cidade) => (
                        <SelectItem key={cidade} value={cidade}>
                          {cidade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Botão limpar filtros */}
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpar filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resultados */}
          <div>
            {/* Loading inicial */}
            {isLoading && offset === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <MedicoPublicoSkeleton key={index} />
                ))}
              </div>
            )}

            {/* Lista de médicos */}
            {!isLoading && showingResults.length > 0 && (
              <>
                <div className="mb-4">
                  <p className="text-gray-600">
                    {showingResults.length} médico{showingResults.length !== 1 ? 's' : ''} encontrado{showingResults.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {showingResults.map((medico) => (
                    <MedicoPublicoCard key={medico.id} medico={medico} />
                  ))}
                </div>

                {/* Botão carregar mais */}
                {hasMore && (
                  <div className="text-center">
                    <Button
                      onClick={loadMore}
                      disabled={isLoading}
                      className="bg-medical-green-600 hover:bg-medical-green-700"
                    >
                      {isLoading ? 'Carregando...' : 'Carregar mais'}
                    </Button>
                  </div>
                )}
              </>
            )}

            {/* Empty state */}
            {!isLoading && showingResults.length === 0 && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Nenhum médico encontrado
                  </h3>
                  <p className="text-gray-600">
                    Nenhum médico encontrado para os filtros escolhidos.
                    Tente ajustar sua busca ou filtros.
                  </p>
                </div>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Erro ao carregar médicos
                  </h3>
                  <p className="text-gray-600">
                    Houve um problema ao carregar a lista de médicos.
                    Tente novamente mais tarde.
                  </p>
                  <p className="text-sm text-red-600 mt-2">
                    Erro: {error.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EncontreSeuMedico;
