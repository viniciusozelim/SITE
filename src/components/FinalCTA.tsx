import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight leading-tight">
            Pronto para modernizar seu projeto com a OZM Engenharia?
          </h2>
          <p className="text-xl text-neutral-800 font-medium mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas. Projetos que seguem estritamente as normas e garantem valorização ao seu empreendimento.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a
              href="#contato"
              className="bg-neutral-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-2xl active:scale-95"
             >
               Solicitar Orçamento
               <ArrowRight className="size-5" />
             </a>
             <a
              href="https://wa.me/5518991450514?text=ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-neutral-900 px-8 py-5 rounded-xl font-extrabold text-lg hover:bg-neutral-900/5 transition-all flex items-center gap-3 border-2 border-neutral-900/20"
             >
               <Phone className="size-5" />
               +55 (18) 99145-0514
             </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
