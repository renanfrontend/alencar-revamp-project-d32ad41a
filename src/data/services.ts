
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Enfermagem",
    slug: "enfermagem",
    description: "Equipe de auxiliares e técnicas em enfermagem lideradas por enfermeira padrão. Nosso atendimento especializado visa sempre o cuidado profissional, sem esquecer a atenção emocional que nossos pacientes merecem.",
    longDescription: "Nossa equipe de enfermagem é composta por profissionais altamente capacitados e especializados, incluindo auxiliares, técnicos e enfermeiros padrão. Oferecemos serviços completos de enfermagem domiciliar, desde administração de medicamentos, curativos, verificação de sinais vitais, até cuidados mais complexos como manejo de sondas e cateteres. Todos os procedimentos são realizados seguindo rigorosamente as prescrições médicas e normas técnicas, garantindo segurança e eficácia no tratamento. Além da parte técnica, nossos profissionais são treinados para oferecer apoio emocional e psicológico, fundamentais para uma recuperação mais rápida e confortável.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    benefits: [
      "Administração correta de medicamentos",
      "Monitoramento constante de sinais vitais",
      "Prevenção de complicações e infecções",
      "Suporte emocional ao paciente e família",
      "Orientações para cuidados contínuos"
    ],
    features: [
      {
        title: "Supervisão de Enfermagem",
        description: "Visitas periódicas de enfermeiro(a) para avaliação e ajustes no plano de cuidados."
      },
      {
        title: "Cuidados com Feridas",
        description: "Realização de curativos com técnica asséptica e acompanhamento da cicatrização."
      },
      {
        title: "Administração de Medicamentos",
        description: "Organização e administração de medicamentos conforme prescrição médica."
      },
      {
        title: "Monitoramento de Sinais Vitais",
        description: "Verificação regular de pressão arterial, temperatura, frequência cardíaca e respiratória."
      }
    ]
  },
  {
    id: 2,
    title: "Cuidadores de Idosos",
    slug: "cuidadores-de-idosos",
    description: "Acompanhantes e cuidadores treinados e capacitados para auxiliar nas atividades diárias, garantindo qualidade de vida, conforto e dignidade aos idosos sob nossos cuidados.",
    longDescription: "Nossos cuidadores de idosos são profissionais especializados no acompanhamento de pessoas da terceira idade, auxiliando nas tarefas diárias como higiene pessoal, alimentação, locomoção e atividades recreativas. Proporcionamos companhia, conversas e estímulos cognitivos importantes para prevenir o isolamento social e manter a mente ativa. Todos os cuidadores passam por rigoroso processo de seleção, verificação de antecedentes e treinamento contínuo em primeiros socorros, ergonomia, nutrição para idosos e manejo de situações de emergência. Oferecemos acompanhamento 24 horas, diurno ou noturno, conforme a necessidade de cada família.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    benefits: [
      "Companhia e apoio emocional constante",
      "Auxílio nas atividades diárias",
      "Prevenção de quedas e acidentes domésticos",
      "Estímulo à socialização e atividades recreativas",
      "Tranquilidade para os familiares"
    ],
    features: [
      {
        title: "Higiene Pessoal",
        description: "Auxílio no banho, troca de roupas, higiene oral e cuidados com a aparência."
      },
      {
        title: "Alimentação",
        description: "Preparação de refeições nutritivas e auxílio na alimentação quando necessário."
      },
      {
        title: "Acompanhamento em Atividades",
        description: "Companhia em passeios, consultas médicas e atividades sociais."
      },
      {
        title: "Estímulo Cognitivo",
        description: "Atividades de leitura, jogos e conversas para manter a mente ativa."
      }
    ]
  },
  {
    id: 3,
    title: "Fisioterapia",
    slug: "fisioterapia",
    description: "Serviços de fisioterapia para reabilitação, prevenção e manutenção da capacidade funcional, melhorando a mobilidade e promovendo maior independência.",
    longDescription: "Nossa equipe de fisioterapeutas é especializada em reabilitação geriátrica, neurológica, ortopédica e respiratória. Realizamos avaliação completa e desenvolvemos um plano de tratamento personalizado para cada paciente, com objetivos claros e mensuráveis. Utilizamos técnicas modernas e equipamentos de última geração para proporcionar resultados eficazes. Os atendimentos podem incluir cinesioterapia, eletroterapia, terapia manual, exercícios terapêuticos e orientações aos familiares. Nosso foco está em restaurar a funcionalidade, aliviar dores, melhorar a mobilidade e prevenir complicações decorrentes da imobilidade prolongada. Atendemos pacientes com diversas condições, desde recuperação pós-cirúrgica até doenças crônicas e degenerativas.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    benefits: [
      "Recuperação da capacidade motora",
      "Redução de dores crônicas e agudas",
      "Prevenção de atrofias musculares",
      "Melhora da circulação sanguínea",
      "Aumento da independência funcional"
    ],
    features: [
      {
        title: "Avaliação Fisioterapêutica",
        description: "Análise detalhada da condição do paciente para elaboração de plano terapêutico personalizado."
      },
      {
        title: "Fisioterapia Neurológica",
        description: "Tratamento para pacientes com AVC, Parkinson, Alzheimer e outras condições neurológicas."
      },
      {
        title: "Fisioterapia Ortopédica",
        description: "Reabilitação após fraturas, cirurgias ortopédicas e problemas articulares."
      },
      {
        title: "Fisioterapia Respiratória",
        description: "Técnicas para melhorar a capacidade respiratória e prevenir complicações pulmonares."
      }
    ]
  },
  {
    id: 4,
    title: "Acompanhamento Hospitalar",
    slug: "acompanhamento-hospitalar",
    description: "Profissionais para acompanhamento durante internações hospitalares, garantindo atenção contínua e suporte emocional durante todo o período.",
    longDescription: "Durante internações hospitalares, nossos acompanhantes proporcionam suporte contínuo ao paciente, auxiliando em suas necessidades básicas, oferecendo apoio emocional e servindo como ponte de comunicação entre paciente, equipe médica e familiares. O acompanhante hospitalar permanece ao lado do paciente, observando alterações em seu quadro clínico e alertando a equipe médica quando necessário. Também auxiliam na alimentação, higiene, mudanças de posição para prevenção de úlceras e na comunicação com os profissionais de saúde. Sua presença traz segurança ao paciente e tranquilidade aos familiares, que muitas vezes não podem estar presentes em tempo integral. Oferecemos serviços em escalas de 6, 12 ou 24 horas, adaptados às necessidades específicas de cada situação.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2953&q=80",
    benefits: [
      "Vigilância contínua do paciente",
      "Comunicação eficiente com equipe médica",
      "Suporte emocional durante a internação",
      "Auxílio nas necessidades básicas",
      "Tranquilidade para a família"
    ],
    features: [
      {
        title: "Acompanhamento 24 horas",
        description: "Presença constante ao lado do paciente, em turnos ou integralmente."
      },
      {
        title: "Observação de Alterações",
        description: "Monitoramento de mudanças no quadro do paciente e comunicação com a equipe médica."
      },
      {
        title: "Auxílio em Refeições",
        description: "Ajuda durante as refeições, garantindo alimentação adequada."
      },
      {
        title: "Suporte nas Rotinas Hospitalares",
        description: "Acompanhamento em exames, procedimentos e consultas dentro do hospital."
      }
    ]
  }
];
