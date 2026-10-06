
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/lovable-uploads/89a0df63-4256-4c04-addc-b3ff6ff01a27.png" alt="SBH - Sociedade Brasileira de Harmonização" className="h-8 w-8 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">SBH</h3>
                <p className="text-sm text-green-200">Sociedade Brasileira de Harmonização</p>
              </div>
            </div>
            <p className="text-green-200 mb-6 max-w-md">Conectando profissionais da harmonização facial, promovendo conhecimento científico e construindo uma nova referência em excelência médica no Brasil.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/sbharmonizacao/" target="_blank" rel="noopener noreferrer" className="bg-medical-green-700 p-2 rounded-lg hover:bg-medical-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-medical-gold-300">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/quem-somos" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Quem Somos
              </Link>
              <Link to="/encontre-seu-medico" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Encontre seu Profissional
              </Link>
              <Link to="/publicacoes" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Conteúdo Científico
              </Link>
              <Link to="/eventos" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Cursos & Eventos
              </Link>
              <Link to="/legislacao" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Legislação & Ética
              </Link>
            </nav>
          </div>

          {/* Para Associados */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-medical-gold-300">Para Associados</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/area-restrita" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Área Restrita
              </Link>
              <Link to="/seja-associado" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Seja um Associado
              </Link>
              <Link to="/renovacao" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Renovar Anuidade
              </Link>
              <Link to="/certificados" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Certificados
              </Link>
              <Link to="/clube-beneficios" className="text-green-200 hover:text-medical-gold-300 transition-colors">
                Clube de Benefícios
              </Link>
            </nav>
          </div>
        </div>

        {/* Contato */}
        <div className="border-t border-medical-green-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-medical-gold-400 mt-1" />
              <div>
                <p className="font-medium text-medical-gold-300">Endereço</p>
                <p className="text-green-200 text-sm">
                  Rua José Antônio Sampaio 173<br />
                  Cabo Frio - RJ<br />
                  CEP: 28905-340
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-medical-gold-400 mt-1" />
              <div>
                <p className="font-medium text-medical-gold-300">Telefone</p>
                <p className="text-green-200 text-sm">
                  (62) 99635-0781
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-medical-gold-400 mt-1" />
              <div>
                <p className="font-medium text-medical-gold-300">E-mail</p>
                <p className="text-green-200 text-sm">
                  sbharmonizacao@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-medical-green-700 mt-8 pt-6 text-center text-green-300 text-sm">
          <p>© 2024 SBH - Sociedade Brasileira de Harmonização. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link to="/politica-privacidade" className="hover:text-medical-gold-300 transition-colors">
              Política de Privacidade
            </Link>
            {' | '}
            <Link to="/termos-uso" className="hover:text-medical-gold-300 transition-colors">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
