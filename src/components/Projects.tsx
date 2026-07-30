import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "ACREPOM Araçatuba",
      category: "Elétrica e Automação",
      img: "/acrepom.png",
      description: "Foco em automação de sistema de incêndio"
    },
    {
      title: "UNESP Faculdade de Odontologia",
      category: "Projeto e Inovação",
      img: "/unespmelhr.png",
      description: "Projeto e desenvolvimento de equipamento para ensaios com roedores"
    },
    {
      title: "Residencial Diamante Gould",
      category: "Elétrica e Automação",
      img: "/diamanthd.png",
      description: "Atualização de sistema de recalque de bombas automatizado"
    },
    {
      title: "Escola Champagnat Birigui",
      category: "Engenharia e Automação",
      img: "/champagnat.png",
      description: "Soluções em projetos elétricos e automação de sistema de recalque de água e "
    },
    {
      title: "Residencial Manacá da Serra",
      category: "Automação",
      img: "/manaca.png",
      description: "Projetos de infraestrutura sustentável e inovação."
    },
    {
      title: "Automação Industrial",
      category: "Automação",
      img: "/ilhashd.png",
      description: "Novo projeto de automação industrial de alta complexidade."
    }
  ];

  return (
    <section id="projetos" className="section-padding bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm mb-4 block">Nossos Projetos</span>
            <h2 className="heading-lg text-white font-display mb-4">Veja alguns dos nossos trabalhos de destaque recentes</h2>
            <p className="text-neutral-400 text-lg">Soluções reais para problemas complexos. Nossa expertise aplicada em diversos cenários industriais e urbanos.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#contato"
              className="text-primary-400 font-bold flex items-center gap-2 hover:text-white transition-colors group"
              aria-label="Explorar portfólio completo na seção de contato"
            >
              Explorar Portfolio Completo
              <ExternalLink className="size-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href="#contato"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer block"
              aria-label={`Ver detalhes do projeto: ${project.title}`}
            >
              <img
                src={project.img}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent group-hover:via-neutral-950/40 transition-all duration-300"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block py-1 px-3 rounded-md bg-primary-600 text-white text-xs font-bold uppercase tracking-wider mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white font-display mb-2">{project.title}</h4>
                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  {project.description}
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  <span className="text-white text-sm font-semibold">Ver Detalhes</span>
                  <div className="bg-white/10 p-2 rounded-full text-white">
                    <ExternalLink className="size-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
