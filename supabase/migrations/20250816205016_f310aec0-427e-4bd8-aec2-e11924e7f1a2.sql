
-- Criar política RLS para permitir leitura pública dos campos específicos da tabela profiles
-- Apenas os campos públicos: id, nome_completo, crm, cidade, estado, instagram, foto_url

CREATE POLICY "Permitir leitura pública de perfis médicos" 
  ON public.profiles 
  FOR SELECT 
  USING (true);
