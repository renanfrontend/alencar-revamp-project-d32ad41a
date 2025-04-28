
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const ServicosPage = () => {
  const services = [
    {
      id: 1,
      title: "Enfermagem",
      description: "Equipe de auxiliares e técnicas em enfermagem lideradas por enfermeira padrão. Nosso atendimento especializado visa sempre o cuidado profissional, sem esquecer a atenção emocional que nossos pacientes merecem.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
      longDescription: "Nossa equipe de enfermagem é composta por profissionais altamente capacitados e especializados, incluindo auxiliares, técnicos e enfermeiros padrão. Oferecemos serviços completos de enfermagem domiciliar, desde administração de medicamentos, curativos, verificação de sinais vitais, até cuidados mais complexos como manejo de sondas e cateteres. Todos os procedimentos são realizados seguindo rigorosamente as prescrições médicas e normas técnicas, garantindo segurança e eficácia no tratamento. Além da parte técnica, nossos profissionais são treinados para oferecer apoio emocional e psicológico, fundamentais para uma recuperação mais rápida e confortável."
    },
    {
      id: 2,
      title: "Cuidadores de Idosos",
      description: "Acompanhantes e cuidadores treinados e capacitados para auxiliar nas atividades diárias, garantindo qualidade de vida, conforto e dignidade aos idosos sob nossos cuidados.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      longDescription: "Nossos cuidadores de idosos são profissionais especializados no acompanhamento de pessoas da terceira idade, auxiliando nas tarefas diárias como higiene pessoal, alimentação, locomoção e atividades recreativas. Proporcionamos companhia, conversas e estímulos cognitivos importantes para prevenir o isolamento social e manter a mente ativa. Todos os cuidadores passam por rigoroso processo de seleção, verificação de antecedentes e treinamento contínuo em primeiros socorros, ergonomia, nutrição para idosos e manejo de situações de emergência. Oferecemos acompanhamento 24 horas, diurno ou noturno, conforme a necessidade de cada família."
    },
    {
      id: 3,
      title: "Fisioterapia",
      description: "Serviços de fisioterapia para reabilitação, prevenção e manutenção da capacidade funcional, melhorando a mobilidade e promovendo maior independência.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
      longDescription: "Nossa equipe de fisioterapeutas é especializada em reabilitação geriátrica, neurológica, ortopédica e respiratória. Realizamos avaliação completa e desenvolvemos um plano de tratamento personalizado para cada paciente, com objetivos claros e mensuráveis. Utilizamos técnicas modernas e equipamentos de última geração para proporcionar resultados eficazes. Os atendimentos podem incluir cinesioterapia, eletroterapia, terapia manual, exercícios terapêuticos e orientações aos familiares. Nosso foco está em restaurar a funcionalidade, aliviar dores, melhorar a mobilidade e prevenir complicações decorrentes da imobilidade prolongada. Atendemos pacientes com diversas condições, desde recuperação pós-cirúrgica até doenças crônicas e degenerativas."
    },
    {
      id: 4,
      title: "Acompanhamento Hospitalar",
      description: "Profissionais para acompanhamento durante internações hospitalares, garantindo atenção contínua e suporte emocional durante todo o período.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2953&q=80",
      longDescription: "Durante internações hospitalares, nossos acompanhantes proporcionam suporte contínuo ao paciente, auxiliando em suas necessidades básicas, oferecendo apoio emocional e servindo como ponte de comunicação entre paciente, equipe médica e familiares. O acompanhante hospitalar permanece ao lado do paciente, observando alterações em seu quadro clínico e alertando a equipe médica quando necessário. Também auxiliam na alimentação, higiene, mudanças de posição para prevenção de úlceras e na comunicação com os profissionais de saúde. Sua presença traz segurança ao paciente e tranquilidade aos familiares, que muitas vezes não podem estar presentes em tempo integral. Oferecemos serviços em escalas de 6, 12 ou 24 horas, adaptados às necessidades específicas de cada situação."
    },
    {
      id: 5,
      title: "Terapia Ocupacional",
      description: "Serviços especializados para melhorar a autonomia e independência dos pacientes nas atividades diárias através de exercícios e adaptações personalizadas.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
      longDescription: "Nossa equipe de terapeutas ocupacionais trabalha para proporcionar maior independência e qualidade de vida aos pacientes. Avaliamos as limitações físicas, cognitivas ou sensoriais e desenvolvemos programas personalizados que incluem exercícios terapêuticos, adaptações ambientais e treinamento para atividades da vida diária. Utilizamos diversas técnicas para melhorar habilidades motoras finas, coordenação, memória e concentração. Também orientamos familiares sobre adaptações no ambiente doméstico para torná-lo mais seguro e acessível, como a instalação de barras de apoio, rampas e adaptadores para utensílios. Nosso objetivo é proporcionar maior autonomia, reduzir a dependência de terceiros e melhorar a autoestima do paciente, contribuindo para sua reintegração social e bem-estar emocional."
    },
    {
      id: 6,
      title: "Fonoaudiologia",
      description: "Atendimento especializado para pessoas com dificuldades de comunicação, deglutição e audição, promovendo melhor qualidade de vida.",
      image: "https://images.unsplash.com/photo-1516549655646-d9133db96efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      longDescription: "Nossos fonoaudiólogos são especializados no diagnóstico e tratamento de distúrbios da comunicação, voz, fala, linguagem, audição e deglutição. Atendemos pacientes de todas as idades, com foco especial em idosos que apresentam dificuldades decorrentes de AVC, Parkinson, Alzheimer e outras condições neurológicas. Realizamos avaliação completa e desenvolvemos planos terapêuticos individualizados visando melhorar a capacidade de comunicação, facilitar a alimentação segura e prevenir complicações respiratórias associadas a disfagias. Também orientamos familiares e cuidadores sobre estratégias para facilitar a comunicação e alimentação, tornando-os parte ativa do processo terapêutico. Nossa abordagem multidisciplinar, em conjunto com outros profissionais da saúde, garante um tratamento integrado e eficaz."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Grupo Alencar Tratamentos</title>
        <meta name="description" content="Conheça os serviços especializados oferecidos pelo Grupo Alencar: enfermagem, cuidadores de idosos, fisioterapia, acompanhamento hospitalar e muito mais." />
        <meta name="keywords" content="serviços de enfermagem, cuidador de idosos, fisioterapia domiciliar, acompanhamento hospitalar, home care São Paulo" />
        <link rel="canonical" href="https://grupoalencartratamentos.com.br/servicos" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="section-padding bg-gray-50 pt-32">
            <div className="container mx-auto container-padding">
              <div className="mb-8">
                <Breadcrumb items={[{ label: "Serviços" }]} />
              </div>
              
              <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 title-gradient inline-block">Nossos Serviços</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Oferecemos uma ampla gama de serviços especializados para cuidar de seus entes queridos com o carinho, respeito e profissionalismo que merecem.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-alencar-blue h-full flex flex-col">
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
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600 text-base">
                        {service.description}
                      </CardDescription>
                      <div className="mt-4">
                        <h3 className="font-semibold text-alencar-blue-dark mb-2">O que inclui:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          {service.id === 1 && (
                            <>
                              <li>Administração de medicamentos</li>
                              <li>Curativos e procedimentos</li>
                              <li>Monitoramento de sinais vitais</li>
                              <li>Cuidados com sondas e cateteres</li>
                            </>
                          )}
                          {service.id === 2 && (
                            <>
                              <li>Auxílio nas atividades diárias</li>
                              <li>Higiene e conforto pessoal</li>
                              <li>Acompanhamento para consultas</li>
                              <li>Estímulo cognitivo e social</li>
                            </>
                          )}
                          {service.id === 3 && (
                            <>
                              <li>Avaliação fisioterapêutica</li>
                              <li>Reabilitação motora</li>
                              <li>Prevenção de lesões</li>
                              <li>Orientações posturais</li>
                            </>
                          )}
                          {service.id === 4 && (
                            <>
                              <li>Acompanhamento 24h</li>
                              <li>Comunicação com equipe médica</li>
                              <li>Auxílio em necessidades básicas</li>
                              <li>Suporte emocional</li>
                            </>
                          )}
                          {service.id === 5 && (
                            <>
                              <li>Adaptação de ambientes</li>
                              <li>Treino para atividades diárias</li>
                              <li>Exercícios específicos</li>
                              <li>Orientação familiar</li>
                            </>
                          )}
                          {service.id === 6 && (
                            <>
                              <li>Reabilitação da deglutição</li>
                              <li>Terapia para afasia e disartria</li>
                              <li>Exercícios vocais</li>
                              <li>Orientações para comunicação</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full border-alencar-blue text-alencar-blue hover:bg-alencar-blue/10">
                        Mais Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-16 p-6 md:p-12 bg-gradient-to-r from-alencar-blue to-alencar-blue-dark rounded-xl text-white flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Plano de cuidados personalizado</h3>
                  <p className="text-white/90">Entre em contato para uma avaliação gratuita das necessidades específicas do seu familiar.</p>
                </div>
                <Button size="lg" className="bg-white text-alencar-blue hover:bg-white/90 hover:text-alencar-blue-dark flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" /> Fale Conosco no WhatsApp
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ServicosPage;
