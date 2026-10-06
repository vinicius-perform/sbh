
-- Criar o tipo enum para função no conselho (se não existir)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'funcao-diretoria') THEN
        CREATE TYPE "funcao-diretoria" AS ENUM (
            'Presidente',
            'Vice-Presidente', 
            'Tesoureiro',
            'Secretária',
            'Conselheiro Fiscal',
            'Diretor Científico',
            'Coordenadora Científica',
            'Coordenadora de Pesquisa',
            'Diretor de Produtos e Materiais',
            'Assessor Jurídico Principal',
            'Membro Fundador'
        );
    END IF;
END $$;

-- Inserir todos os médicos da diretoria na tabela
INSERT INTO public.medicos_cards (
    nome, especialidade, crm, funcao_conselho, idade, telefone, foto_url, descricao, email
) VALUES 
-- Conselho Administrativo
('Dra. Keyla Klava', 'Medicina Estética', 'CRM SP/12345', 'Presidente', NULL, '(11) 99999-0001', '/lovable-uploads/25cee047-c41c-481d-81da-e8a772029e07.png', 'Especialista em Medicina Estética com vasta experiência em procedimentos minimamente invasivos e técnicas avançadas.', 'keyla.klava@sbhm.med.br'),

('Dr. Rafael Almenara', 'Cirurgia Plástica', 'CRM RJ/23456', 'Vice-Presidente', NULL, '(11) 99999-0002', '/lovable-uploads/6fd70c2e-3b8a-4b7d-a61a-8964ff1a2103.png', 'Cirurgião plástico renomado, especialista em procedimentos estéticos e reconstrutivos com técnicas inovadoras.', 'rafael.almenara@sbhm.med.br'),

('Dr. Gustavo Camargo', 'Dermatologia', 'CRM SP/34567', 'Tesoureiro', NULL, '(11) 99999-0003', '/lovable-uploads/505726ea-ea3c-433f-a3e6-37012355144b.png', 'Dermatologista especializado em procedimentos estéticos e tratamentos dermatológicos avançados.', 'gustavo.camargo@sbhm.med.br'),

('Dra. Nathalia Bittar', 'Medicina Estética', 'CRM SP/45678', 'Secretária', NULL, '(11) 99999-0004', '/lovable-uploads/ea4fbaa1-14ea-4fa3-ace1-ec37d9b9483d.png', 'Médica especialista em estética com expertise em harmonização facial e procedimentos injetáveis.', 'nathalia.bittar@sbhm.med.br'),

-- Conselho Fiscal
('Dr. Hamilton Couto', 'Medicina Interna', 'CRM MG/56789', 'Conselheiro Fiscal', NULL, '(11) 99999-0005', '/lovable-uploads/11be56a4-0709-4c48-82f7-0ce374d387fa.png', 'Especialista em Medicina Interna com vasta experiência em gestão financeira e auditoria médica.', 'hamilton.couto@sbhm.med.br'),

('Dr. Roberto Chacur', 'Administração Hospitalar', 'CRM RJ/67890', 'Conselheiro Fiscal', NULL, '(11) 99999-0006', '/lovable-uploads/0cba8ba7-ca1d-4106-86bd-10adb09681a0.png', 'Especialista em administração hospitalar com MBA em gestão financeira aplicada à saúde.', 'roberto.chacur@sbhm.med.br'),

-- Conselho Científico
('Dr. Honório Menezes', 'Cirurgia Plástica', 'CRM SP/78901', 'Diretor Científico', NULL, '(11) 99999-0007', '/lovable-uploads/bd8a23f9-698f-40b6-ac5c-df3ab8bd78fd.png', 'Cirurgião plástico com doutorado em pesquisa clínica, especialista em inovações em procedimentos estéticos.', 'honorio.menezes@sbhm.med.br'),

('Dra. Mariana Rinaldi', 'Dermatologia', 'CRM SP/89012', 'Coordenadora Científica', NULL, '(11) 99999-0008', '/lovable-uploads/c7ff46bf-bf65-4e71-8b07-5ec347393284.png', 'Dermatologista PhD em pesquisa translacional, coordena estudos multicêntricos na área estética.', 'mariana.rinaldi@sbhm.med.br'),

('Dra. Manoela Fassina', 'Medicina Estética', 'CRM PR/90123', 'Coordenadora de Pesquisa', NULL, '(11) 99999-0009', 'https://images.unsplash.com/photo-1594824388853-c5a0bbf9b0d4?w=400&h=400&fit=crop&crop=face', 'Especialista em medicina estética com expertise em protocolos de pesquisa clínica e desenvolvimento de técnicas.', 'manoela.fassina@sbhm.med.br'),

-- Conselho de Produtos e Materiais
('Dr. Maurício Olmedo', 'Cirurgia Plástica', 'CRM RS/01234', 'Diretor de Produtos e Materiais', NULL, '(11) 99999-0010', 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face', 'Cirurgião plástico especializado em biomateriais e implantes, consultor em inovação tecnológica para dispositivos médicos.', 'mauricio.olmedo@sbhm.med.br'),

-- Assessoria Jurídica
('Dr. Valentin', 'Direito Médico', 'OAB SP/123456', 'Assessor Jurídico Principal', NULL, '(11) 99999-0011', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face', 'Advogado especializado em Direito Médico e da Saúde, mestre em Bioética e Biodireito.', 'valentin@sbhm.med.br'),

-- Membros Fundadores
('Dra. Tatiana Fagnani', 'Medicina Estética', 'CRM SP/11111', 'Membro Fundador', NULL, '(11) 99999-0012', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face', 'Pioneira na medicina estética brasileira e fundadora da associação, especialista em técnicas inovadoras.', 'tatiana.fagnani@sbhm.med.br'),

('Dra. Tabita Nunes', 'Dermatologia', 'CRM RJ/22222', 'Membro Fundador', NULL, '(11) 99999-0013', 'https://images.unsplash.com/photo-1594824388853-c5a0bbf9b0d4?w=400&h=400&fit=crop&crop=face', 'Dermatologista fundadora, referência em procedimentos estéticos dermatológicos no Brasil.', 'tabita.nunes@sbhm.med.br'),

('Dra. Analia Vieira', 'Medicina Estética', 'CRM MG/33333', 'Membro Fundador', NULL, '(11) 99999-0014', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face', 'Especialista em medicina estética, pioneira em técnicas de harmonização facial no país.', 'analia.vieira@sbhm.med.br'),

('Dr. Leonardo Rizzo', 'Cirurgia Plástica', 'CRM SP/44444', 'Membro Fundador', NULL, '(11) 99999-0015', 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face', 'Cirurgião plástico fundador, especialista em cirurgias estéticas e reconstrutivas de alta complexidade.', 'leonardo.rizzo@sbhm.med.br'),

('Dr. Sharbo Casagrande', 'Medicina Estética', 'CRM PR/55555', 'Membro Fundador', NULL, '(11) 99999-0016', 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face', 'Médico fundador especializado em medicina estética, pioneiro em técnicas minimamente invasivas.', 'sharbo.casagrande@sbhm.med.br'),

('Dra. Paola Telles', 'Dermatologia', 'CRM RJ/66666', 'Membro Fundador', NULL, '(11) 99999-0017', 'https://images.unsplash.com/photo-1594824388853-c5a0bbf9b0d4?w=400&h=400&fit=crop&crop=face', 'Dermatologista fundadora, especialista em laser e tecnologias aplicadas à dermatologia estética.', 'paola.telles@sbhm.med.br'),

('Dr. Clayson', 'Cirurgia Plástica', 'CRM SC/77777', 'Membro Fundador', NULL, '(11) 99999-0018', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face', 'Cirurgião plástico fundador, especialista em procedimentos estéticos faciais e corporais.', 'clayson@sbhm.med.br'),

('Dr. Rogério Cardoso', 'Medicina Estética', 'CRM BA/88888', 'Membro Fundador', NULL, '(11) 99999-0019', 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face', 'Médico fundador especializado em medicina estética, referência em tratamentos anti-aging.', 'rogerio.cardoso@sbhm.med.br'),

('Dr. Tangui', 'Cirurgia Plástica', 'CRM CE/99999', 'Membro Fundador', NULL, '(11) 99999-0020', 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face', 'Cirurgião plástico fundador, especialista em técnicas avançadas de cirurgia estética.', 'tangui@sbhm.med.br'),

('Dra. Gláucia Peron', 'Medicina Estética', 'CRM GO/00000', 'Membro Fundador', NULL, '(11) 99999-0021', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face', 'Médica fundadora especializada em medicina estética, pioneira em procedimentos de rejuvenescimento.', 'glaucia.peron@sbhm.med.br');
