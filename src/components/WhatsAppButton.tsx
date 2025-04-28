
import { WhatsApp } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5511942332485" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-alencar-green hover:bg-alencar-green-light text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute -top-10 -left-36 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale Conosco!
      </div>
      <WhatsApp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
