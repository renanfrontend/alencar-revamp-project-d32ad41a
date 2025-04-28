
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone, X, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="flex items-center justify-center bg-alencar-blue rounded-lg p-3">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-bold text-alencar-blue-dark tracking-wider">GRUPO ALENCAR</h1>
                <p className="text-xs text-gray-600 tracking-wide">TRATAMENTOS</p>
              </div>
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-alencar-blue font-medium transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-alencar-blue font-medium transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-alencar-blue font-medium transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-alencar-blue font-medium transition-colors">Contato</a></li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="tel:+551194233-2485"
              className="flex items-center text-alencar-blue hover:text-alencar-blue-dark font-medium transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              (11) 94233-2485
            </a>
            <Button className="ml-4 bg-alencar-blue hover:bg-alencar-blue-dark">
              Agende uma Visita
            </Button>
          </div>

          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-alencar-blue focus:outline-none"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="flex items-center">
                <div className="flex items-center justify-center bg-alencar-blue rounded-lg p-3">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div className="ml-3">
                  <h1 className="text-lg font-bold text-alencar-blue-dark tracking-wider">GRUPO ALENCAR</h1>
                  <p className="text-xs text-gray-600 tracking-wide">TRATAMENTOS</p>
                </div>
              </a>
              <button 
                className="p-2 rounded-md text-gray-700 hover:text-alencar-blue focus:outline-none"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav>
              <ul className="space-y-6 text-center">
                <li><a href="#home" className="block text-xl font-medium text-gray-700 hover:text-alencar-blue" onClick={toggleMenu}>Início</a></li>
                <li><a href="#services" className="block text-xl font-medium text-gray-700 hover:text-alencar-blue" onClick={toggleMenu}>Serviços</a></li>
                <li><a href="#about" className="block text-xl font-medium text-gray-700 hover:text-alencar-blue" onClick={toggleMenu}>Sobre Nós</a></li>
                <li><a href="#contact" className="block text-xl font-medium text-gray-700 hover:text-alencar-blue" onClick={toggleMenu}>Contato</a></li>
              </ul>
            </nav>
            <div className="mt-8 space-y-4">
              <a 
                href="tel:+551194233-2485"
                className="flex items-center justify-center text-alencar-blue font-medium transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (11) 94233-2485
              </a>
              <Button className="w-full bg-alencar-blue hover:bg-alencar-blue-dark">
                Agende uma Visita
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
