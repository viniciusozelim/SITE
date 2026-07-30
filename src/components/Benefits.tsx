import { ShieldCheck, Zap, Layers, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck className="size-8 text-primary-600" />,
      title: "Segurança e Qualidade",
      description: "Projetos em conformidade com todas as normas técnicas e rigoroso controle de qualidade.",
    },
    {
      icon: <Zap className="size-8 text-primary-600" />,
      title: "Distribuição eficiente",
      description: "Sistemas projetados para máxima eficiência energética e viabilidade econômica.",
    },
    {
      icon: <Layers className="size-8 text-primary-600" />,
      title: "Organização garantida",
      description: "Facilidade de manutenção e operação otimizada com gestão inteligente de processos.",
    },
    {
      icon: <TrendingUp className="size-8 text-primary-600" />,
      title: "Valorização do investimento",
      description: "Aumente o valor do seu empreendimento com planejamento de ponta e sustentabilidade.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-6 leading-tight tracking-tight">
              Segurança, inovação e <span className="text-primary-600">desempenho para sua operação</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-medium">
              Com metodologias avançadas e foco técnico, garantimos projetos de engenharia elétrica, automação, civil e mecânica que unem segurança máxima, desempenho e escalabilidade para o seu negócio.
            </p>
            
            <div className="space-y-8">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary-50 rounded-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
             <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl scale-90">
               <img 
                 src="/Generate.png" 
                 alt="Engenheiro da OZM Engenharia revisando projetos estruturais e plantas" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-neutral-100">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      <Cpu className="size-6" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900 leading-tight">Tecnologia Avançada</p>
                      <p className="text-sm text-neutral-500 font-medium">Automação de ponta</p>
                    </div>
                  </div>
               </div>
             </div>
             {/* Decorative Background Block */}
             <div className="absolute -inset-6 bg-neutral-100 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
