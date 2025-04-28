import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Mail, Phone, MessageSquare, Stethoscope } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto container-padding">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center bg-alencar-blue rounded-lg p-2">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-white">GRUPO ALENCAR</h3>
                <p className="text-xs text-gray-400">TRATAMENTOS</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Cuidados especializados com respeito e dignidade para quem você ama.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-alencar-blue transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-alencar-blue transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-alencar-blue transition-colors">
                <MessageSquare />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-alencar-blue transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-alencar-blue transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-alencar-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-alencar-blue transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-alencar-blue transition-colors">Enfermagem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-alencar-blue transition-colors">Cuidadores de Idosos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-alencar-blue transition-colors">Fisioterapia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-alencar-blue transition-colors">Acompanhamento Hospitalar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-alencar-blue" />
                <span className="text-gray-400">(11) 94233-2485</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-alencar-blue" />
                <span className="text-gray-400">contato@grupoalencartratamentos.com.br</span>
              </li>
            </ul>
            <Button className="mt-6 bg-alencar-blue hover:bg-alencar-blue-dark w-full">
              <MessageSquare className="h-5 w-5 mr-2" /> Fale Conosco
            </Button>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Grupo Alencar Tratamentos. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-alencar-blue transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="text-gray-400 hover:text-alencar-blue transition-colors">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
