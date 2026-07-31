import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-20">
      {/* Dark modern background image */}
      <div 
        className="absolute inset-0 z-0"
      >
        <img
          src="/fundo.webp"
          alt="Fundo conceitual de engenharia e estrutura metálica - OZM Engenharia"
          className="w-full h-full object-cover opacity-40 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-600/20 border border-primary-600/30 mb-8 mt-10">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-primary-400 font-bold text-xs uppercase tracking-wider">Sua melhor escolha em engenharia</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Soluções completas em <br className="hidden md:block" />
              <span className="text-primary-500">Engenharia e Automação</span>
            </h1>

            <p className="text-neutral-300 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl font-medium">
              Entregamos projetos que atendem suas necessidades com qualidade e preço competitivo. Compromisso com a sustentabilidade e rigor técnico no estado de São Paulo e Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contato"
                className="group flex items-center justify-center gap-3 bg-primary-600 text-neutral-900 px-9 py-4 rounded-xl font-extrabold text-lg hover:bg-primary-500 transition-all active:scale-95 shadow-xl shadow-primary-600/20"
              >
                Fale com um Especialista
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#especialidades"
                className="group flex items-center justify-center gap-3 bg-white/10 text-white backdrop-blur-md px-9 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Nossos Serviços
              </a>
            </div>
            
            <div className="mt-14 flex items-center gap-6 saturate-0 opacity-60">
               {/* Decorative structural elements to represent engineering trust */}
               <div className="flex flex-col">
                  <span className="text-white font-bold text-xl uppercase">NBR 5410</span>
                  <span className="text-neutral-400 text-xs">Conformidade Absoluta</span>
               </div>
               <div className="w-px h-10 bg-neutral-700"></div>
               <div className="flex flex-col">
                  <span className="text-white font-bold text-xl uppercase">+8k</span>
                  <span className="text-neutral-400 text-xs">Horas de Experiência</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
