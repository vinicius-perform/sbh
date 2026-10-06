
-- Renomear colunas para usar underscore (padrão SQL)
ALTER TABLE public.medicos_cards 
RENAME COLUMN "funcao-diretoria" TO funcao_diretoria;

ALTER TABLE public.medicos_cards 
RENAME COLUMN "funcao-conselho" TO funcao_conselho;

-- Adicionar o médico Tesoureiro que está ausente (baseado no código que procura por essa função)
INSERT INTO public.medicos_cards (
  nome, 
  especialidade, 
  crm, 
  funcao_diretoria, 
  funcao_conselho,
  descricao,
  email,
  telefone,
  foto_url
) VALUES (
  'Dr. Carlos Mendes',
  'Medicina Estética',
  'CRM SP/34567',
  'Conselho Administrativo',
  'Tesoureiro',
  'Especialista em gestão financeira aplicada à medicina estética com MBA em controladoria.',
  'carlos.mendes@sbhm.med.br',
  '(11) 99999-0003',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
);
