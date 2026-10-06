
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface MedicoPublico {
  id: string;
  nome_completo: string | null;
  crm: string | null;
  cidade: string | null;
  estado: string | null;
  instagram: string | null;
  foto_url: string | null;
  especialidade: string | null;
}

interface UseMedicosPublicosParams {
  searchTerm?: string;
  estado?: string;
  cidade?: string;
  limit?: number;
  offset?: number;
}

export const useMedicosPublicos = (params: UseMedicosPublicosParams = {}) => {
  const { searchTerm, estado, cidade, limit = 12, offset = 0 } = params;

  return useQuery({
    queryKey: ['medicos-publicos', { searchTerm, estado, cidade, limit, offset }],
    queryFn: async () => {
      console.log('Buscando médicos públicos com parâmetros:', params);
      
      let query = supabase
        .from('profiles')
        .select('id, nome_completo, crm, cidade, estado, instagram, foto_url, especialidade')
        .not('nome_completo', 'is', null)
        .order('nome_completo', { ascending: true })
        .range(offset, offset + limit - 1);

      // Aplicar filtro de busca por texto
      if (searchTerm && searchTerm.trim()) {
        const searchPattern = `%${searchTerm.trim()}%`;
        query = query.or(`nome_completo.ilike.${searchPattern},crm.ilike.${searchPattern},cidade.ilike.${searchPattern},especialidade.ilike.${searchPattern}`);
      }

      // Aplicar filtro de estado (independente de cidade)
      if (estado && estado !== 'all') {
        query = query.eq('estado', estado);
      }

      // Aplicar filtro de cidade (independente de estado)
      if (cidade && cidade !== 'all') {
        query = query.eq('cidade', cidade);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Erro ao buscar médicos públicos:', error);
        throw error;
      }

      console.log('Médicos públicos encontrados:', data?.length || 0);
      console.log('Dados dos médicos:', data);
      return data as MedicoPublico[];
    },
  });
};

export const useEstados = () => {
  return useQuery({
    queryKey: ['estados-distintos'],
    queryFn: async () => {
      console.log('Buscando estados disponíveis...');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('estado')
        .not('estado', 'is', null)
        .not('nome_completo', 'is', null)
        .order('estado');

      if (error) {
        console.error('Erro ao buscar estados:', error);
        throw error;
      }

      // Obter valores únicos
      const estados = [...new Set(data.map(item => item.estado))].filter(Boolean);
      console.log('Estados encontrados:', estados);
      return estados as string[];
    },
  });
};

export const useCidades = (estado?: string) => {
  return useQuery({
    queryKey: ['cidades-distintas', estado],
    queryFn: async () => {
      console.log('Buscando cidades para estado:', estado);
      
      if (!estado || estado === 'all') {
        // Se não há estado selecionado, buscar todas as cidades
        const { data, error } = await supabase
          .from('profiles')
          .select('cidade')
          .not('cidade', 'is', null)
          .not('nome_completo', 'is', null)
          .order('cidade');

        if (error) {
          console.error('Erro ao buscar todas as cidades:', error);
          throw error;
        }

        const cidades = [...new Set(data.map(item => item.cidade))].filter(Boolean);
        console.log('Todas as cidades encontradas:', cidades);
        return cidades as string[];
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('cidade')
        .eq('estado', estado)
        .not('cidade', 'is', null)
        .not('nome_completo', 'is', null)
        .order('cidade');

      if (error) {
        console.error('Erro ao buscar cidades do estado:', error);
        throw error;
      }

      // Obter valores únicos
      const cidades = [...new Set(data.map(item => item.cidade))].filter(Boolean);
      console.log('Cidades encontradas para', estado, ':', cidades);
      return cidades as string[];
    },
    enabled: true, // Sempre habilitado para permitir busca de todas as cidades
  });
};
