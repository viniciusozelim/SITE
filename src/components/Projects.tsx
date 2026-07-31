import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, MapPin, Eye } from 'lucide-react';
import ProjectDetailModal, { ProjectData } from './ProjectDetailModal';
import QuickQuoteModal from './QuickQuoteModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const projects: ProjectData[] = [
    {
      id: "acrepom",
      title: "ACREPOM Araçatuba",
      category: "Elétrica & Automação",
      location: "Araçatuba / SP",
      client: "Associação ACREPOM",
      year: "2024",
      images: ["/acrepom.webp", "/Generate.webp", "/ilhashd.webp"],
      summary: "Automação integral de sistema de combate a incêndio e pressurização de bombas com redundância de emergência em conformidade com as exigências dos Bombeiros.",
      challenge: "Necessidade de adequação imediata do sistema de combate a incêndio com acionamento autônomo por queda de pressão e alertas visuais/sonoros sem margem para falha.",
      solution: "Instalação de painel de comando blindado com CLP dedicado, inversores de frequência para controle de partida da bomba principal e jockey, sensores ultrassônicos e ART emitida.",
      tags: ["NBR 5410", "NR-10", "Combate a Incêndio", "Automação de Bombas", "ART Emitida"],
      results: [
        "100% Aprovado na Vistoria dos Bombeiros",
        "Acionamento Automático em <2 segundos",
        "Diagnóstico de Falhas e Pressão em Tempo Real"
      ]
    },
    {
      id: "unesp",
      title: "UNESP Faculdade de Odontologia",
      category: "Projeto & Inovação",
      location: "Araçatuba / SP",
      client: "UNESP Araçatuba",
      year: "2024",
      images: ["/unespmelhr.webp", "/Generate.webp"],
      summary: "Projeto e desenvolvimento de equipamento mecatrônico de alta precisão para ensaios científicos em laboratório de pesquisa universitário.",
      challenge: "Criar um mecanismo computadorizado de precisão micrométrica capaz de aplicar e registrar cargas contínuas em testes científicos com roedores.",
      solution: "Desenvolvimento de firmware proprietário em microcontrolador, estrutura em alumínio de grau aeronáutico e sensores de célula de carga calibrados.",
      tags: ["Mecatrônica", "Desenvolvimento de Hardware", "Pesquisa Científica", "Alta Precisão"],
      results: [
        "Precisão Micrométrica em Registros",
        "Exportação de Dados em Tempo Real",
        "Certificação de Calibração Laboratorial"
      ]
    },
    {
      id: "diamante",
      title: "Residencial Diamante Gould",
      category: "Elétrica & Automação Predial",
      location: "Araçatuba / SP",
      client: "Condomínio Diamante Gould",
      year: "2024",
      images: ["/diamanthd.webp", "/fundo.webp"],
      summary: "Modernização e automação do sistema de recalque de bombas de água potável e drenagem pluvial do condomínio.",
      challenge: "Quadros elétricos antigos geravam picos de corrente na partida, queimas frequentes de motores e risco de transbordamento nos reservatórios.",
      solution: "Montagem de novo quadro elétrico sob NBR 5410 com soft-starters, alternância automática de bombas para desgaste uniforme e sensores ultrassônicos de nível.",
      tags: ["Automação Predial", "Eficiência Energética", "Sensores Ultrassônicos", "Soft-Starters"],
      results: [
        "-28% de Redução no Consumo Elétrico",
        "Alternância Autônoma das Bombas",
        "Eliminação de Queimas de Motores"
      ]
    },
    {
      id: "champagnat",
      title: "Escola Champagnat Birigui",
      category: "Engenharia & Automação",
      location: "Birigui / SP",
      client: "Instituição Champagnat",
      year: "2024",
      images: ["/champagnat.webp", "/Generate.webp"],
      summary: "Reformulação da infraestrutura elétrica de baixa tensão e automação de controle de nível dos reservatórios escolares.",
      challenge: "Garantir o suprimento ininterrupto de água e a segurança das instalações elétricas do complexo escolar sem interromper as aulas.",
      solution: "Dimensionamento e instalação de novo QDF (Quadro de Distribuição de Força) adaptado à NBR 5410 com relés de proteção contra falta de fase e transbordamento.",
      tags: ["NBR 5410", "Infraestrutura Escolar", "Proteção de Circuitos", "Automação"],
      results: [
        "Zero Interrupção nas Atividades Letivas",
        "Proteção Térmica e Elétrica Integral",
        "ART Registrada no CREA-SP"
      ]
    },
    {
      id: "manaca",
      title: "Residencial Manacá da Serra",
      category: "Automação & Sustentabilidade",
      location: "Araçatuba / SP",
      client: "Condomínio Manacá da Serra",
      year: "2024",
      images: ["/manaca.webp", "/fundo.webp"],
      summary: "Projetos de infraestrutura sustentável e automação de iluminação perimetral e áreas comuns.",
      challenge: "Reduzir custos operacionais de energia em áreas comuns mantendo elevados padrões de iluminação e segurança noturna.",
      solution: "Redistribuição de circuitos, instalação de fotocélulas temporizadas inteligentes e substituição por coletores LED de alta eficiência energética.",
      tags: ["Energia Sustentável", "Iluminação Inteligente", "Adequação de Circuitos", "Eficiência"],
      results: [
        "-35% no Custo de Iluminação Comum",
        "Acionamento Autônomo Sol-a-Sol",
        "Garantia de Operação Continuada"
      ]
    },
    {
      id: "automacao-ind",
      title: "Projeto de Automação Industrial",
      category: "Automação Industrial",
      location: "Região de Araçatuba / SP",
      client: "Planta Industrial de Processamento",
      year: "2024",
      images: ["/ilhashd.webp", "/Generate.webp"],
      summary: "Automação completa e comissionamento de esteira de transporte e dosagem industrial com painel IHM.",
      challenge: "Sincronizar linhas de produção assíncronas e registrar paradas não programadas em tempo real.",
      solution: "Integração de CLP Siemens com interface IHM touch-screen de 10 polegadas, inversores de frequência vetoriais e rede Profinet.",
      tags: ["CLP Siemens", "IHM Touchscreen", "Profinet", "Telemetria Industrial", "NR-12"],
      results: [
        "+18% de Ganho na Produtividade",
        "Diagnóstico de Falhas em <5 segundos",
        "Conformidade NR-12 em Maquinários"
      ]
    }
  ];

  const handleOpenDetail = (project: ProjectData) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  return (
    <section id="projetos" className="section-padding bg-neutral-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-primary-400 font-bold uppercase tracking-widest text-xs mb-4 block">
              <Sparkles className="size-4" /> Portfólio de Obras & Projetos
            </span>
            <h2 className="heading-lg text-white font-display mb-4 leading-tight">
              Veja alguns dos nossos <span className="text-primary-500">trabalhos de destaque</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Clique em qualquer projeto para abrir a galeria interativa de fotos, normas atendidas e os resultados técnicos obtidos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-primary-600 text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-primary-500 transition-all flex items-center gap-2 shadow-lg shadow-primary-600/20 active:scale-95 text-sm"
            >
              Solicitar Orçamento de Projeto
              <ExternalLink className="size-4" />
            </button>
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleOpenDetail(project)}
              className="group relative h-[420px] sm:h-[450px] rounded-3xl overflow-hidden cursor-pointer block border border-neutral-800 bg-neutral-900 shadow-xl"
            >
              {/* Image */}
              <img
                src={project.images[0]}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-85"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent group-hover:via-neutral-950/60 transition-all duration-300"></div>

              {/* Top Badges Container */}
              <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between gap-2 pointer-events-none">
                <span className="py-1 px-3 rounded-lg bg-neutral-950/80 backdrop-blur-md text-primary-400 text-xs font-bold uppercase tracking-wider border border-white/10 truncate max-w-[65%] shadow-sm">
                  {project.category}
                </span>
                <span className="py-1 px-2.5 rounded-lg bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-xs font-medium border border-white/10 flex items-center gap-1 shrink-0 shadow-sm">
                  <MapPin className="size-3 text-primary-500" />
                  {project.location.split('/')[0]}
                </span>
              </div>

              {/* Content Card */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-300 text-xs md:text-sm line-clamp-2 mb-4 font-medium leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-primary-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:underline">
                    <Eye className="size-4" /> Ver Galeria & Detalhes
                  </span>
                  <div className="bg-primary-600/20 text-primary-400 p-2 rounded-full border border-primary-500/30 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <ExternalLink className="size-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </section>
  );
}
