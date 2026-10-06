
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface MedicoCard {
  id: number;
  nome: string;
  especialidade: string;
  crm: string;
  funcao_diretoria?: string;
  funcao_conselho: string;
  idade?: number;
  telefone?: string;
  foto_url?: string;
  descricao?: string;
  email?: string;
  created_at?: string;
}

export const useMedicos = () => {
  return useQuery({
    queryKey: ['medicos'],
    queryFn: async () => {
      console.log('Buscando médicos do Supabase...');
      
      const { data, error } = await supabase
        .from('medicos_cards')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Erro ao buscar médicos:', error);
        throw error;
      }

      console.log('Médicos encontrados:', data?.length);
      console.log('Dados dos médicos:', data);
      return data as MedicoCard[];
    },
  });
};
