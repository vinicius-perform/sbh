import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigationItems = [{
    name: 'Início',
    path: '/'
  }, {
    name: 'Quem Somos',
    path: '/quem-somos'
  }, {
    name: 'Encontre seu Médico',
    path: '/encontre-seu-medico'
  }, {
    name: 'Clube de Benefícios',
    path: '/seja-associado'
  }, {
    name: 'Legislação & Ética',
    path: '/legislacao'
  }];
  const submenuItems = [{
    name: 'Publicações Científicas',
    path: '/publicacoes'
  }, {
    name: 'Cursos & Eventos',
    path: '/eventos'
  }, {
    name: 'Área Restrita',
    path: '/area-restrita'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <>
      {/* Top bar com contatos */}
      <div className="bg-medical-green-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contato@sbh.com.br</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Header principal */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="/lovable-uploads/89a0df63-4256-4c04-addc-b3ff6ff01a27.png" alt="SBH - Sociedade Brasileira de Harmonização" className="h-12 w-12 object-cover rounded-lg" />
              </div>
              <div>
                <h1 className="font-playfair text-2xl font-bold text-medical-green-700">
                  SBH
                </h1>
                <p className="text-xs text-gray-600">Sociedade Brasileira de Harmonização</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map(item => <Link key={item.path} to={item.path} className={`link-hover py-2 transition-colors ${isActive(item.path) ? 'text-medical-green-600 font-medium' : 'text-gray-700 hover:text-medical-green-600'}`}>
                  {item.name}
                </Link>)}
              
              {/* Submenu Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 py-2 text-gray-700 hover:text-medical-green-600 transition-colors">
                  <span>Mais</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg border">
                  {submenuItems.map(item => <DropdownMenuItem key={item.path} asChild>
                      <Link to={item.path} className={`w-full px-4 py-2 text-sm transition-colors ${isActive(item.path) ? 'bg-medical-green-50 text-medical-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="btn-gold">
                Seja um Associado
              </Button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-medical-green-600 hover:bg-gray-100 rounded-lg">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="lg:hidden py-4 border-t animate-fade-in">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 rounded-lg transition-colors ${isActive(item.path) ? 'bg-medical-green-50 text-medical-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {item.name}
                  </Link>)}
                
                {/* Submenu items integrated into main list */}
                {submenuItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 rounded-lg transition-colors ${isActive(item.path) ? 'bg-medical-green-50 text-medical-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {item.name}
                  </Link>)}
                
                <div className="pt-4 border-t">
                  <Link to="/seja-associado" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 mt-2">
                    <Button className="w-full btn-gold">
                      Seja um Associado
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>}
        </div>
      </header>
    </>;
};
export default Header;