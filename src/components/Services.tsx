import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Enfermagem",
      description: "Equipe de auxiliares e técnicas em enfermagem lideradas por enfermeira padrão. Nosso atendimento especializado visa sempre o cuidado profissional, sem esquecer a atenção emocional que nossos pacientes merecem.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    },
    {
      id: 2,
      title: "Cuidadores de Idosos",
      description: "Acompanhantes e cuidadores treinados e capacitados para auxiliar nas atividades diárias, garantindo qualidade de vida, conforto e dignidade aos idosos sob nossos cuidados.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },
    {
      id: 3,
      title: "Fisioterapia",
      description: "Serviços de fisioterapia para reabilitação, prevenção e manutenção da capacidade funcional, melhorando a mobilidade e promovendo maior independência.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    },
    {
      id: 4,
      title: "Acompanhamento Hospitalar",
      description: "Profissionais para acompanhamento durante internações hospitalares, garantindo atenção contínua e suporte emocional durante todo o período.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2953&q=80",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient inline-block">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços especializados para cuidar de seus entes queridos com o carinho, respeito e profissionalismo que merecem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-alencar-blue">
              <div className="aspect-video relative">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full border-alencar-blue text-alencar-blue hover:bg-alencar-blue/10">
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-12 bg-gradient-to-r from-alencar-blue to-alencar-blue-dark rounded-xl text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Precisa de atendimento personalizado?</h3>
            <p className="text-white/90">Entre em contato conosco para uma avaliação gratuita das suas necessidades.</p>
          </div>
          <Button size="lg" className="bg-white text-alencar-blue hover:bg-white/90 hover:text-alencar-blue-dark flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" /> Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
