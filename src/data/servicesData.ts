import { 
  Zap, 
  Cpu, 
  Settings, 
  Building2, 
  Leaf, 
  ShieldCheck, 
  FileCheck, 
  ZapOff, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Wrench, 
  BarChart3, 
  Award,
  Sparkles,
  LucideIcon
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  heroTag: string;
  heroHeadline: string;
  heroSubheadline: string;
  creaBadge: string;
  whatsappMessage: string;
  image: string;
  metrics: { value: string; label: string }[];
  painPoints: {
    problem: string;
    solution: string;
  }[];
  deliverables: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "eletrica": {
    slug: "eletrica",
    title: "Engenharia Elétrica",
    category: "Projetos & Infraestrutura Elétrica",
    icon: Zap,
    heroTag: "Conformidade Técnica NBR 5410 & SPDA",
    heroHeadline: "Projetos Elétricos de Alta Complexidade com Máxima Eficiência e Segurança",
    heroSubheadline: "Evite paradas industriais, riscos de incêndio e multas. Desenvolvemos projetos dimensionados para a máxima performance energética e total conformidade técnica.",
    creaBadge: "Registro CREA-SP • ART Inclusa • 100% Norma NBR",
    whatsappMessage: "Olá OZM Engenharia! Vim pelo site e preciso de um orçamento para Projeto de Engenharia Elétrica.",
    image: "/Generate.webp",
    metrics: [
      { value: "100%", label: "Conformidade com Normas NBR 5410 / 14039" },
      { value: "+180", label: "Projetos Elétricos Executados" },
      { value: "Até 30%", label: "Economia no Dimensionamento de Cabos" },
      { value: "24h-48h", label: "Agilidade na Análise Inicial" }
    ],
    painPoints: [
      {
        problem: "Quedas constantes de energia, sobrecarga em quadros e risco de sobreaquecimento de cabos.",
        solution: "Dimensionamento exato de carga, balanceamento de fases e proteção contra sobretensões conforme NBR 5410."
      },
      {
        problem: "Dificuldade na aprovação junto à concessionária de energia e fiscalizações do Corpo de Bombeiros.",
        solution: "Elaboração de prontuários elétricos completos, diagramas unifilares atualizados e emissão imediata de ART."
      },
      {
        problem: "Gasto excessivo de energia e multas por baixo fator de potência (energia reativa).",
        solution: "Projeto e instalação de bancos de capacitores automáticos para eliminação de multas e ganho energético."
      }
    ],
    deliverables: [
      {
        title: "Diagramas Unifilares & Multifilares",
        description: "Mapeamento detalhado dos circuitos, quadros de distribuição e componentes do sistema elétrico.",
        icon: FileCheck
      },
      {
        title: "Projeto de SPDA & Aterramento (NBR 5419)",
        description: "Proteção contra descargas atmosféricas e malha de aterramento para segurança patrimonial e humana.",
        icon: ShieldCheck
      },
      {
        title: "Subestações & Entrada de Energia",
        description: "Dimensionamento de transformadores, cubículos de média tensão e entrada padronizada de energia.",
        icon: Zap
      },
      {
        title: "Laudo Elétrico & Emissão de ART",
        description: "Documentação oficial assinada por engenheiro eletricista habilitado no CREA.",
        icon: Award
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Diagnóstico & Levantamento",
        description: "Inspeção técnica local ou análise documental para entender a necessidade e demandas elétricas da edificação."
      },
      {
        step: "02",
        title: "Cálculo & Dimensionamento",
        description: "Desenvolvimento computacional dos esquemas elétricos, queda de tensão, curtos-circuitos e seletividade."
      },
      {
        step: "03",
        title: "Entrega do Projeto & ART",
        description: "Fornecimento de plantas executivas, lista de materiais para cotação e Anotação de Responsabilidade Técnica."
      },
      {
        step: "04",
        title: "Suporte na Execução",
        description: "Acompanhamento da instalação para garantir que tudo seja montado estritamente como projetado."
      }
    ],
    faqs: [
      {
        question: "Por que minha empresa precisa de um Projeto Elétrico formal?",
        answer: "Um projeto elétrico garante a segurança de pessoas e patrimônio, reduz custos com refações, garante eficiência energética e é exigido por lei (Corpo de Bombeiros, Prefeituras e Concessionárias de Energia)."
      },
      {
        question: "O projeto acompanha a ART (Anotação de Responsabilidade Técnica)?",
        answer: "Sim. Todos os projetos e laudos da OZM Engenharia acompanham a emissão de ART assinada por engenheiro responsável com registro ativo no CREA."
      },
      {
        question: "Como solicitar um orçamento de Engenharia Elétrica?",
        answer: "Basta clicar nos botões 'Solicitar Orçamento' ou 'WhatsApp' nesta página. Em poucos instantes nossa equipe colherá os dados básicos da sua obra/instalação."
      }
    ]
  },
  "automacao": {
    slug: "automacao",
    title: "Automação Industrial & Predial",
    category: "Tecnologia & Controle de Processos",
    icon: Cpu,
    heroTag: "Indústria 4.0 & Otimização Operacional",
    heroHeadline: "Aumente a Produtividade e Reduza Falhas com Automação Inteligente",
    heroSubheadline: "Transforme linhas de produção e sistemas prediais com automação customizada, programação de CLPs, IHMs e quadros elétricos automatizados.",
    creaBadge: "Soluções em CLP & SCADA • Eficiência Operacional",
    whatsappMessage: "Olá OZM Engenharia! Vim pelo site e gostaria de um orçamento para Automação Industrial e Controle.",
    image: "/Engenharia_digital.png",
    metrics: [
      { value: "+45%", label: "Aumento na Velocidade de Produção" },
      { value: "Zero", label: "Erros por Intervenção Manual" },
      { value: "24/7", label: "Monitoramento em Tempo Real" },
      { value: "100%", label: "Adequação às Normas de Segurança (NR-12)" }
    ],
    painPoints: [
      {
        problem: "Processos manuais lentos, sujeitos a falhas humanas e paradas não programadas.",
        solution: "Automação via CLP e IHM com receita de processo programada e detecção automática de anomalias."
      },
      {
        problem: "Falta de controle de métricas e dados de produção em tempo real.",
        solution: "Desenvolvimento de sistemas supervisórios (SCADA) e dashboards para monitoramento remoto."
      },
      {
        problem: "Quadros de comando antigos, sem peças de reposição e sem conformidade com a NR-12.",
        solution: "Retrofit de painéis elétricos com inclusão de reles de segurança, inversores e CLPs modernos."
      }
    ],
    deliverables: [
      {
        title: "Programação de CLPs & IHMs",
        description: "Lógica de controle avançada para as principais marcas do mercado (Siemens, Rockwell, Schneider, WEG).",
        icon: Cpu
      },
      {
        title: "Projetos de Painéis de Comando",
        description: "Desenvolvimento de esquemas elétricos para montagem de quadros de automação e acionamento de motores.",
        icon: Layers
      },
      {
        title: "Sistemas Supervisórios & SCADA",
        description: "Interface intuitiva para operação, gráficos de tendência e histórico de alarmes operacionais.",
        icon: BarChart3
      },
      {
        title: "Adequação NR-12 em Máquinas",
        description: "Implantação de dispositivos de segurança (cortinas de luz, paradas de emergência) com laudo de validação.",
        icon: ShieldCheck
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Análise de Processo",
        description: "Entendimento do fluxo produtivo e levantamento dos requisitos funcionais do sistema a ser automatizado."
      },
      {
        step: "02",
        title: "Desenvolvimento da Lógica",
        description: "Criação do código do CLP, telas da IHM e desenho dos diagramas elétricos dos painéis."
      },
      {
        step: "03",
        title: "Testes Simulado (FAT)",
        description: "Validação da lógica de controle em ambiente simulado antes da aplicação em campo para evitar paradas indesejadas."
      },
      {
        step: "04",
        title: "Start-up & Treinamento",
        description: "Comissionamento na fábrica e capacitação dos operadores e técnicos da sua equipe."
      }
    ],
    faqs: [
      {
        question: "Minhas máquinas atuais são antigas. É possível automatizá-las?",
        answer: "Sim! Trabalhamos com Retrofit de máquinas e processos, modernizando o painel de comando e instalando sensores e CLPs sem necessidade de trocar a estrutura mecânica existente."
      },
      {
        question: "A automação ajuda na redução de custos operacionais?",
        answer: "Com certeza. A automação reduz o desperdício de matérias-primas, otimiza o consumo energético e minimiza o tempo de máquina parada."
      },
      {
        question: "Vocês realizam integração com sistemas de gestão?",
        answer: "Sim, desenvolvemos arquiteturas de comunicação prontas para integração com sistemas industriais e bancos de dados."
      }
    ]
  },
  "mecanica": {
    slug: "mecanica",
    title: "Engenharia Mecânica",
    category: "Projetos Estruturais & Térmicos",
    icon: Settings,
    heroTag: "Projetos Mecânicos, PMOC & Laudos Industriais",
    heroHeadline: "Engenharia Mecânica de Alta Precisão para Indústrias e Edificações",
    heroSubheadline: "Desenvolvimento de projetos de estruturas metálicas, tubulações, sistemas de climatização (PMOC) e laudos de integridade com emissão de ART.",
    creaBadge: "Conformidade NR-12 & PMOC • Registro CREA-SP",
    whatsappMessage: "Olá OZM Engenharia! Vim pelo site e solicito um orçamento de Engenharia Mecânica / PMOC / Laudos.",
    image: "/acrepom.webp",
    metrics: [
      { value: "100%", label: "Conformidade com a Legislação PMOC" },
      { value: "+120", label: "Projetos Mecânicos Elaborados" },
      { value: "NR-12", label: "Segurança de Máquinas e Equipamentos" },
      { value: "Garantia", label: "Acompanhamento Técnico Especializado" }
    ],
    painPoints: [
      {
        problem: "Notificação da Vigilância Sanitária por falta do Plano de Manutenção, Operação e Controle (PMOC) do ar condicionado.",
        solution: "Elaboração e assinatura imediata do PMOC exigido por lei para ambientes climatizados comerciais e industriais."
      },
      {
        problem: "Necessidade de dimensionar galpões metálicos ou estruturas sem risco de deformações ou colapso.",
        solution: "Cálculo estrutural mecânico avançado, dimensionamento de treliças, perfis e elementos de fixação com ART."
      },
      {
        problem: "Vazamentos ou perda de carga em redes de tubulações industriais (vapor, ar comprimido, amônia).",
        solution: "Projeto isométrico de tubulações e simulação fluida para máxima eficiência de transporte térmico e hidráulico."
      }
    ],
    deliverables: [
      {
        title: "PMOC (Plano de Manutenção de Ar Condicionado)",
        description: "Elaboração do plano obrigatório por lei federal para garantia da qualidade do ar e funcionamento dos equipamentos.",
        icon: FileCheck
      },
      {
        title: "Projeto de Estruturas Metálicas",
        description: "Dimensionamento de coberturas, galpões, mezaninos e suportes industriais de alta resistência.",
        icon: Building2
      },
      {
        title: "Laudos de Segurança de Máquinas (NR-12)",
        description: "Avaliação pericial, análise de riscos e recomendações de adequação para proteger operadores.",
        icon: ShieldCheck
      },
      {
        title: "Projetos de Tubulações Industriais",
        description: "Dimensionamento de redes de fluidos, gases e vapor com especificação de materiais e válvulas.",
        icon: Wrench
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Levantamento de Requisitos",
        description: "Vistoria técnica para análise das cargas, condições ambientais e especificações mecânicas."
      },
      {
        step: "02",
        title: "Modelagem & Dimensionamento",
        description: "Desenho 3D e cálculo analítico de esforços mecânicos, fadiga e expansão térmica."
      },
      {
        step: "03",
        title: "Detalhamento de Fabricação",
        description: "Emissão das plantas de fabricação, corte, dobra e soldagem para a equipe de montagem."
      },
      {
        step: "04",
        title: "Emissão de Laudo e ART",
        description: "Formalização dos documentos técnicos exigidos pelos órgãos reguladores e prefeituras."
      }
    ],
    faqs: [
      {
        question: "Quem é obrigado a ter o PMOC para Ar Condicionado?",
        answer: "De acordo com a Lei Federal 13.589/2018, todos os edifícios de uso público e coletivo que possuem ambientes climatizados artificialmente acima de 60.000 BTU/h são obrigados a ter o PMOC assinado por Engenheiro Mecânico."
      },
      {
        question: "Qual a importância da ART em um projeto mecânico?",
        answer: "A ART comprova formalmente a responsabilidade técnica do engenheiro perante o CREA, garantindo que o projeto foi feito sob normas rígidas de segurança."
      },
      {
        question: "Vocês fazem vistoria de máquinas e pontes rolantes?",
        answer: "Sim, emitimos laudos de integridade física e estrutural para pontes rolantes, guindastes e máquinas industriais."
      }
    ]
  },
  "civil": {
    slug: "civil",
    title: "Engenharia Civil & Estrutural",
    category: "Construção & Projetos Estruturais",
    icon: Building2,
    heroTag: "Estruturas, Fundações & Regularização",
    heroHeadline: "Projetos Estruturais Solidos para Obras Comerciais e Industriais",
    heroSubheadline: "Segurança fundacional, otimização de materiais e compatibilização BIM para que sua obra seja executada no prazo e sem desperdícios.",
    creaBadge: "Compatibilização BIM • Calculo Estrutural • ART CREA",
    whatsappMessage: "Olá OZM Engenharia! Vim pelo site e gostaria de um orçamento para Projeto de Engenharia Civil / Estrutural.",
    image: "/champagnat.webp",
    metrics: [
      { value: "Zero", label: "Imprevistos de Carga e Patologias" },
      { value: "+200", label: "Projetos Civis e Estruturais" },
      { value: "Economia", label: "Otimização de Aço e Concreto" },
      { value: "BIM", label: "Modelagem Tridimensional sem Conflitos" }
    ],
    painPoints: [
      {
        problem: "Superdimensionamento de concreto e aço gerando custos absurdos e desnecessários na obra.",
        solution: "Cálculo estrutural otimizado por software especializado, garantindo economia sem comprometer a estabilidade."
      },
      {
        problem: "Trincas, rachaduras e problemas de fundação surgindo durante ou após a construção.",
        solution: "Estudo detalhado do solo e dimensionamento correto de sapatas, estacas e blocos de fundação."
      },
      {
        problem: "Conflito entre instalações hidráulicas, elétricas e a estrutura durante a execução.",
        solution: "Compatibilização total em tecnologia BIM (Building Information Modeling) antes de ir para o canteiro."
      }
    ],
    deliverables: [
      {
        title: "Projeto Estrutural (Concreto Armado & Alvenaria)",
        description: "Formas, armações de aço, detalhes de vigas, pilares e lajes prontos para execução.",
        icon: Building2
      },
      {
        title: "Dimensionamento de Fundações",
        description: "Projetos de estacas, tubulões, sapatas e radier com base no laudo de sondagem do terreno.",
        icon: Layers
      },
      {
        title: "Compatibilização de Projetos em BIM",
        description: "Integração tridimensional das disciplinas para eliminar interferências físicas antes da obra.",
        icon: Sparkles
      },
      {
        title: "Laudos Periciais & Reformas (NBR 16280)",
        description: "Avaliação técnica de estruturas existentes e emissão de laudo para reformas e ampliações.",
        icon: Award
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Análise do Terreno & Arquitetura",
        description: "Estudo das plantas arquitetônicas, topografia e sondagem do solo para definição do tipo de estrutura."
      },
      {
        step: "02",
        title: "Cálculo computacional",
        description: "Simulação de cargas ativas e passivas, vento e esforços normais para estruturação segura."
      },
      {
        step: "03",
        title: "Compatibilização BIM",
        description: "Unificação dos projetos elétricos, hidráulicos e estruturais evitando interferências de campo."
      },
      {
        step: "04",
        title: "Detalhamento Próprio de Canteiro",
        description: "Envio de pranchas detalhadas, resumo de armações e acompanhamento técnico."
      }
    ],
    faqs: [
      {
        question: "Por que contratar um Engenheiro Estrutural antes de construir?",
        answer: "O projeto estrutural economiza até 25% no custo total de materiais (aço e concreto), evita tragédias e desabamentos e garante a durabilidade do imóvel por décadas."
      },
      {
        question: "Vocês emitem laudo para reformas em condomínios (NBR 16280)?",
        answer: "Sim. Realizamos a vistoria técnica e emitimos o laudo com ART autorizando a obra com total segurança exigida pelo síndico."
      },
      {
        question: "O que é o projeto em BIM?",
        answer: "É a modelagem virtual em 3D da edificação. Ela permite visualizar cada tubo, viga e conduíte antes de construir, zerando erros de execução."
      }
    ]
  },
  "sustentaveis": {
    slug: "sustentaveis",
    title: "Soluções Sustentáveis & Energia",
    category: "Energia Renovável & Eficiência",
    icon: Leaf,
    heroTag: "Energia Solar Fotovoltaica & Mercado Livre",
    heroHeadline: "Reduza seus Custos de Energia em Até 95% com Engenharia Sustentável",
    heroSubheadline: "Projetos de energia solar fotovoltaica, migração para o Mercado Livre de Energia e consultoria em eficiência energética industrial e comercial.",
    creaBadge: "Projetos Fotovoltaicos • Homologação em Concessionárias",
    whatsappMessage: "Olá OZM Engenharia! Vim pelo site e quero um orçamento para Energia Solar / Soluções Sustentáveis.",
    image: "/manaca.webp",
    metrics: [
      { value: "Até 95%", label: "Redução na Conta de Energia Elétrica" },
      { value: "Payback", label: "Retorno Rápido sobre o Investimento" },
      { value: "+100%", label: "Aprovação Técnica Concessionária" },
      { value: "Zero", label: "Emissões de Carbono Diretas" }
    ],
    painPoints: [
      {
        problem: "Contas de luz exorbitantes pesando no orçamento mensal da sua empresa ou propriedade.",
        solution: "Projeto e homologação de sistema fotovoltaico sob medida para gerar sua própria energia limpa."
      },
      {
        problem: "Complexidade na homologação de usinas solares junto às concessionárias de energia.",
        solution: "Gestão completa de acesso: engenharia, entrada na concessionária, vistoria e troca do medidor."
      },
      {
        problem: "Desperdício de energia em Motores e iluminação industrial sem saber onde está o gargalo.",
        solution: "Auditoria energética completa com medições periciais e plano de ação imediato."
      }
    ],
    deliverables: [
      {
        title: "Projetos Fotovoltaicos (On-Grid / Off-Grid / Zero Grid)",
        description: "Dimensionamento exato da quantidade de módulos, inversores e estruturas de fixação.",
        icon: Leaf
      },
      {
        title: "Homologação Junto à Concessionária",
        description: "Processo técnico completo junto às distribuidoras para rápida conexão do sistema à rede elétrica.",
        icon: FileCheck
      },
      {
        title: "Estudo de Migração para o Mercado Livre de Energia",
        description: "Consultoria e adequação de medição para empresas comprarem energia com descontos expressivos.",
        icon: TrendingUp
      },
      {
        title: "Auditoria & Gestão de Eficiência Energética",
        description: "Análise de curvas de carga, correção de consumo e otimização tarifária.",
        icon: BarChart3
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Análise de Fatura & Carga",
        description: "Avaliação do histórico de consumo elétrico para dimensionar a usina ideal sem sobredimensionar."
      },
      {
        step: "02",
        title: "Engenharia & Simulação",
        description: "Simulação de sombreamento e produção energética anual garantindo o melhor ROI."
      },
      {
        step: "03",
        title: "Homologação Formal",
        description: "Submissão de parecer de acesso e documentação junto à concessionária de energia regional."
      },
      {
        step: "04",
        title: "Start-up & Monitoramento",
        description: "Conexão da usina, ativação do app de monitoramento em tempo real no celular do cliente."
      }
    ],
    faqs: [
      {
        question: "Quanto posso economizar com um sistema solar fotovoltaico?",
        answer: "A economia pode chegar a até 95% na conta de energia, pagando apenas as taxas mínimas e impostos obrigatórios da concessionária."
      },
      {
        question: "Qual o tempo médio de payback (retorno do investimento)?",
        answer: "Na maioria dos sistemas comerciais e residenciais, o retorno do investimento ocorre entre 3 a 5 anos, enquanto o sistema possui vida útil estimada superior a 25 anos."
      },
      {
        question: "Vocês cuidam da burocracia com a concessionária de energia?",
        answer: "Sim! A OZM Engenharia é responsável por todo o trâmite técnico e documental de homologação até o medidor ser ligado."
      }
    ]
  },
  "laudos": {
    slug: "laudos",
    title: "Laudos e Perícias Técnicas",
    category: "Vistorias, Inspeções & Respaldo Legal",
    icon: FileCheck,
    heroTag: "Perícias Judiciais, Vistorias & Emissão de ART",
    heroHeadline: "Laudos e Perícias Técnicas com Rigor, Imparcialidade e Respaldo Legal",
    heroSubheadline: "Laudos, vistorias e perícias técnicas com rigor, imparcialidade e respaldo legal, oferecendo diagnósticos precisos para instalações, equipamentos e sistemas de engenharia.",
    creaBadge: "Peritos Cadastrados • Emissão de ART CREA • Respaldo Jurídico",
    whatsappMessage: "Olá OZM Engenharia! Vim pelo site e preciso de um orçamento para Laudos e Perícias Técnicas.",
    image: "/champagnat.webp",
    metrics: [
      { value: "100%", label: "Conformidade com Normas ABNT e NBR" },
      { value: "+150", label: "Laudos e Perícias Entregues" },
      { value: "ART", label: "Anotação de Responsabilidade Técnica Inclusa" },
      { value: "Jurídico", label: "Validade e Respaldo em Processos Judiciais" }
    ],
    painPoints: [
      {
        problem: "Notificações, multas ou impedimentos de órgãos fiscalizadores por falta de laudos vigentes.",
        solution: "Inspeção criteriosa com emissão de laudo técnico oficial assinado por engenheiro habilitado com ART."
      },
      {
        problem: "Dúvidas técnicas e divergências judiciais ou extrajudiciais sobre falhas em instalações ou sinistros.",
        solution: "Perícia técnica imparcial com laudo pericial fundamentado em evidências e ensaios normatizados."
      },
      {
        problem: "Necessidade de avaliar a segurança e estado de conservação de edificações e máquinas antes de reformas ou compra.",
        solution: "Vistoria técnica predial e mecânica detalhada com relatório fotográfico e mapeamento de anomalias."
      }
    ],
    deliverables: [
      {
        title: "Laudo Pericial Judicial & Extrajudicial",
        description: "Parecer técnico fundamentado com embasamento nas normas ABNT/NBR para instrução de processos.",
        icon: ShieldCheck
      },
      {
        title: "Vistoria Técnica & Inspeção Predial",
        description: "Mapeamento detalhado de patologias, trincas, instalações e estado de conservação de imóveis.",
        icon: FileCheck
      },
      {
        title: "Laudos de Recebimento de Obras & Reformas",
        description: "Conferência técnica de execução e entrega de obras conforme especificações de projeto.",
        icon: Award
      },
      {
        title: "Emissão de ART no CREA-SP",
        description: "Documentação legal assinada garantindo a responsabilidade técnica do engenheiro perito.",
        icon: CheckCircle2
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Solicitação & Alinhamento",
        description: "Entendimento do objetivo da perícia ou laudo (judicial, extrajudicial, preventivo ou fiscalitário)."
      },
      {
        step: "02",
        title: "Vistoria In Loco & Ensaios",
        description: "Inspeção presencial detalhada com registros fotográficos, medições e coleta de dados em campo."
      },
      {
        step: "03",
        title: "Elaboração do Laudo",
        description: "Análise norma a norma, diagnósticos de causa raiz e fundamentação técnica dos achados."
      },
      {
        step: "04",
        title: "Entrega Formal & ART",
        description: "Emissão e entrega do laudo pericial impresso/digital com ART vinculada junto ao CREA."
      }
    ],
    faqs: [
      {
        question: "O que é um Laudo Técnico com ART?",
        answer: "É um documento emitido por um engenheiro habilitado que atesta as condições de segurança, funcionamento ou regularidade de um sistema ou edificação, acompanhado da Anotação de Responsabilidade Técnica (ART)."
      },
      {
        question: "Qual a diferença entre Vistoria e Perícia Técnica?",
        answer: "A vistoria é a constatação de fatos e estado das coisas. A perícia envolve a apuração das causas que motivaram determinado evento ou anomalia, com fundamentação científica e normativa."
      },
      {
        question: "Os laudos da OZM Engenharia têm validade jurídica?",
        answer: "Sim. Nossos laudos são elaborados por engenheiros registrados no CREA e seguem estritamente as diretrizes da ABNT para perícias de engenharia."
      }
    ]
  }
};
