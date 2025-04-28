
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="title-gradient">Cuidados especializados</span> para quem você ama
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Humildade, Confiança, Responsabilidade, Integridade, Ética e Paixão. Garantimos a prestação de serviços com excelência, respeito à vida e às pessoas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-alencar-blue hover:bg-alencar-blue-dark">
                Conhecer Serviços <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-alencar-blue text-alencar-blue hover:bg-alencar-blue/10">
                <Phone className="mr-2 h-4 w-4" /> (11) 94233-2485
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-alencar-blue/20 to-transparent rounded-lg z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" 
              alt="Profissional de saúde cuidando de idosa"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-alencar-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-alencar-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L9.75 8.25H3L8.25 12.75L6 19.5L12 15L18 19.5L15.75 12.75L21 8.25H14.25L12 2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Profissionais Qualificados</h3>
            <p className="text-gray-600">Equipe especializada e treinada para oferecer os melhores cuidados.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-alencar-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-alencar-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Cuidado Humanizado</h3>
            <p className="text-gray-600">Tratamento com atenção emocional e respeito à dignidade do paciente.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-alencar-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-alencar-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Monitoramento 24h</h3>
            <p className="text-gray-600">Acompanhamento constante para garantir segurança e bem-estar.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-alencar-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-alencar-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Personalização</h3>
            <p className="text-gray-600">Planos de cuidados desenvolvidos de acordo com as necessidades individuais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
