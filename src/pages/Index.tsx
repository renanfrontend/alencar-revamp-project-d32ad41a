
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SchemaOrg from '@/components/SchemaOrg';

const Index = () => {
  // Schema.org data for LocalBusiness
  const businessSchema = {
    name: 'Grupo Alencar Tratamentos',
    description: 'O Grupo Alencar oferece serviços especializados de enfermagem e cuidados para idosos em São Paulo, garantindo qualidade, respeito e dignidade.',
    url: 'https://grupoalencartratamentos.com.br',
    telephone: '+551194233-2485',
    email: 'contato@grupoalencartratamentos.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5489',
      longitude: '-46.6388'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/grupoalencartratamentos',
      'https://www.instagram.com/grupoalencartratamentos'
    ]
  };

  return (
    <>
      <Helmet>
        <title>Grupo Alencar Tratamentos - Cuidados especializados com amor e respeito</title>
        <meta name="description" content="O Grupo Alencar oferece serviços especializados de enfermagem e cuidados para idosos em São Paulo, garantindo qualidade, respeito e dignidade." />
        <meta name="keywords" content="enfermagem, cuidadores de idosos, cuidados especializados, home care, acompanhamento hospitalar, fisioterapia, São Paulo" />
        <meta property="og:title" content="Grupo Alencar Tratamentos - Cuidados especializados" />
        <meta property="og:description" content="Serviços de enfermagem e cuidados para idosos com profissionais qualificados e atendimento humanizado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grupoalencartratamentos.com.br" />
        <link rel="canonical" href="https://grupoalencartratamentos.com.br" />
      </Helmet>
      
      <SchemaOrg type="LocalBusiness" data={businessSchema} />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
