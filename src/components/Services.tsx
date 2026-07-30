import { Zap, Cpu, Settings, Building2, Leaf, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Engenharia Elétrica",
      description: "Projetos elétricos completos, da concepção à execução, com foco em segurança e eficiência.",
    },
    {
      icon: Cpu,
      title: "Automação",
      description: "Soluções industriais e prediais para otimização de processos e redução de custos.",
    },
    {
      icon: Settings,
      title: "Engenharia Mecânica",
      description: "Projetos de sistemas mecânicos com foco em durabilidade e eficiência operacional.",
    },
    {
      icon: Building2,
      title: "Engenharia Civil",
      description: "Projetos estruturais, fundações, instalações prediais e infraestrutura.",
    },
    {
      icon: Leaf,
      title: "Soluções Sustentáveis",
      description: "Projetos com foco em energias renováveis e práticas ecologicamente responsáveis.",
    }
  ];

  return (
    <section id="especialidades" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-extrabold uppercase tracking-widest text-sm mb-4 block">Áreas de Atuação</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">Nossos <span className="text-primary-600">Serviços</span></h2>
            <p className="text-neutral-600 text-lg font-medium">Combinamos rigor técnico e inovação para entregar projetos estruturados de ponta a ponta.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200 transition-all hover:bg-white"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="size-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-8 h-1 bg-primary-100 rounded-full group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-600/20 md:col-span-2 lg:col-span-1 flex flex-col justify-center"
          >
            <h3 className="font-display font-extrabold text-2xl mb-4">Precisa de um Projeto?</h3>
            <p className="text-sm text-primary-100 mb-8 font-medium">Solicite uma análise preliminar com nossos especialistas hoje mesmo.</p>
            <a href="#contato" className="flex items-center gap-2 font-bold hover:gap-4 transition-all text-white">
              Fale Conosco <ArrowRight className="size-5" />
            </a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20 bg-neutral-50 rounded-[3rem] p-12 items-center">
           <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80&w=2070&auto=format&fit=crop" 
               alt="Engenharia Digital, inovação e processos industriais automatizados"
               className="w-full h-full object-cover grayscale"
             />
             <div className="absolute inset-0 bg-primary-600/10 mix-blend-multiply"></div>
           </div>
           <div>
             <span className="text-primary-600 font-bold uppercase tracking-widest text-xs mb-4 block">Inovação Tecnológica</span>
            <h3 className="text-3xl font-display font-extrabold text-neutral-900 mb-6 leading-tight">Implementação de novas <br />tecnologias</h3>
             <p className="text-neutral-500 text-lg mb-8 leading-relaxed font-medium">
               Aprimoramos processos e resultados com a adoção de novas tecnologias no campo da engenharia.
             </p>
             <ul className="space-y-4">
               {['Simulações Computacionais', 'BIM para Engenharia Civil', 'Eficiência Energética Industrial'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 font-bold text-neutral-700">
                   <div className="size-2 rounded-full bg-primary-600"></div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    </section>
  );
}
