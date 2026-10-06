
-- Criar tabela para armazenar dados dos usuários cadastrados
CREATE TABLE public.usuarios_cadastrados (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  nome_completo TEXT NOT NULL,
  crm TEXT NOT NULL,
  telefone TEXT,
  especialidade TEXT NOT NULL,
  tipo_associacao TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela
ALTER TABLE public.usuarios_cadastrados ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção (apenas para usuários autenticados - administradores)
CREATE POLICY "Admins can insert users" ON public.usuarios_cadastrados
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);

-- Política para permitir leitura (apenas para usuários autenticados - administradores)
CREATE POLICY "Admins can view users" ON public.usuarios_cadastrados
  FOR SELECT 
  TO authenticated
  USING (true);
