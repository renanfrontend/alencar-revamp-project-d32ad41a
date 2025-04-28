
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { name: "Humildade", description: "Atuamos com simplicidade e disposição para aprender continuamente." },
    { name: "Confiança", description: "Construímos relações sólidas e transparentes com pacientes e familiares." },
    { name: "Responsabilidade", description: "Comprometimento com o bem-estar e recuperação de nossos pacientes." },
    { name: "Integridade", description: "Conduta ética e honesta em todas as nossas atividades." },
    { name: "Ética", description: "Respeitamos os princípios morais e profissionais que regem nossa atuação." },
    { name: "Paixão", description: "Dedicação e amor pelo cuidado ao próximo em todas as nossas ações." }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-alencar-blue/10 absolute -left-6 -top-6 w-full h-full rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1576766125535-b04cd50d4955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" 
                alt="Equipe do Grupo Alencar"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-xs">
                <p className="text-alencar-blue font-bold text-lg">"Os idosos são os que mais precisam desses cuidados. A medicina ajuda, mas uma pessoa da família ao lado é fundamental."</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 title-gradient inline-block">Sobre o Grupo Alencar</h2>
            <p className="text-gray-700 mb-6">
              O Grupo Alencar nasceu da paixão pelo cuidado e do compromisso com a qualidade de vida dos pacientes. Nossa missão é proporcionar atendimento humanizado e profissional, respeitando a individualidade de cada pessoa.
            </p>
            <p className="text-gray-700 mb-6">
              Com profissionais altamente capacitados e dedicados, oferecemos serviços de enfermagem e cuidados especializados, priorizando sempre o bem-estar físico e emocional de nossos assistidos.
            </p>
            <h3 className="text-xl font-bold mb-4 text-alencar-blue-dark">Nossos Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-l-4 border-l-alencar-blue">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-alencar-blue-dark">{value.name}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient inline-block">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Depoimentos de familiares que confiaram no Grupo Alencar para cuidar de seus entes queridos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-alencar-blue rounded-full flex items-center justify-center text-white font-bold">
                  ML
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Maria Lima</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600">
                "A equipe do Grupo Alencar transformou a vida da minha mãe. O cuidado, carinho e profissionalismo são notáveis. Recomendo a todos que precisam de cuidados especializados."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-alencar-blue rounded-full flex items-center justify-center text-white font-bold">
                  CS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Carlos Silva</h4>
                  <p className="text-sm text-gray-500">Guarulhos, SP</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Meu pai precisou de cuidados após uma cirurgia, e o Grupo Alencar foi fundamental na sua recuperação. Profissionais atenciosos e bem treinados que dão tranquilidade à família."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-alencar-blue rounded-full flex items-center justify-center text-white font-bold">
                  AR
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Ana Rodrigues</h4>
                  <p className="text-sm text-gray-500">Osasco, SP</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Encontrar o Grupo Alencar foi um alívio para nossa família. A atenção personalizada e o cuidado técnico aliados ao carinho fizeram toda diferença no tratamento da minha avó."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
