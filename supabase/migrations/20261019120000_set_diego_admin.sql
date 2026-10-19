-- 1. Garantir que a coluna 'role' exista na tabela profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';

-- 2. Atualizar permissão no Supabase Auth para diego@sbh.com
UPDATE auth.users 
SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb,
    raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || '{"role": "admin", "is_admin": true}'::jsonb
WHERE LOWER(email) = 'diego@sbh.com';

-- 3. Atualizar role na tabela public.profiles
UPDATE public.profiles
SET role = 'admin'
WHERE id IN (
  SELECT id FROM auth.users WHERE LOWER(email) = 'diego@sbh.com'
);

-- 4. Função auxiliar para verificação de admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
      AND (
        LOWER(auth.users.email) = 'diego@sbh.com'
        OR auth.users.raw_app_meta_data ->> 'role' = 'admin'
        OR auth.users.raw_user_meta_data ->> 'role' = 'admin'
      )
  ) OR EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- 5. Atualizar políticas RLS para administradores
DROP POLICY IF EXISTS "Admins can insert users" ON public.usuarios_cadastrados;
CREATE POLICY "Admins can insert users" ON public.usuarios_cadastrados
  FOR INSERT 
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins can view users" ON public.usuarios_cadastrados;
CREATE POLICY "Admins can view users" ON public.usuarios_cadastrados
  FOR SELECT 
  TO authenticated
  USING (public.is_admin());
