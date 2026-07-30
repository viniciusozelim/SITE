import { CheckCircle2, ShieldCheck, MapPin, Users, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const reasons = [
    {
      icon: <ShieldCheck className="size-8 text-primary-600 mb-4" />,
      title: "Qualidade e responsabilidade",
      description: "Compromisso inegociável com a excelência técnica em todas as etapas de engenharia e automação."
    },
    {
      icon: <MapPin className="size-8 text-primary-600 mb-4" />,
      title: "Atendimento de ponta",
      description: "Infraestrutura flexível para atender demandas em São Paulo e diferentes regiões do Brasil."
    },
    {
      icon: <Users className="size-8 text-primary-600 mb-4" />,
      title: "Equipe qualificada",
      description: "Profissionais de engenharia em contínuo treinamento, com mais de 8.000 horas de experiência."
    },
    {
      icon: <Handshake className="size-8 text-primary-600 mb-4" />,
      title: "Compromisso com o cliente",
      description: "Nosso foco é o seu sucesso: transparência, honestidade e responsabilidade social em cada projeto."
    }
  ];

  return (
    <section id="sobre-nos" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-primary-600 font-extrabold uppercase tracking-widest text-sm mb-4 block">Diferenciais</span>
           <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">Por que escolher a <span className="text-primary-600">OZM Engenharia?</span></h2>
           <p className="text-lg text-neutral-600 font-medium">Desde 2018 provendo soluções completas e seguras. Aqui estão os princípios que nos tornam a melhor escolha.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:border-primary-600/30 hover:shadow-xl transition-all"
            >
              {reason.icon}
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{reason.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-medium">{reason.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
