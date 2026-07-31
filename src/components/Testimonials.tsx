import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Building2, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Eng. Carlos Eduardo Ramos",
      role: "Diretor de Operações Industriais",
      company: "Usina Alta Paulista",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      text: "A equipe da OZM Engenharia reformulou todo nosso sistema de automação e adequação NBR 5410. A precisão técnica e o cumprimento rigoroso dos prazos de parada industrial foram impressionantes. Reduzimos paradas não programadas em mais de 40%.",
      project: "Adequação NBR 5410 & Automação Industrial",
      rating: 5,
      verified: true,
      tag: "Indústria Sucroenergética"
    },
    {
      name: "Dra. Ana Paula Silveira",
      role: "Coordenadora de Infraestrutura & Pesquisa",
      company: "UNESP - Faculdade de Odontologia",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      text: "Desenvolveram um projeto sob medida para nosso laboratório de ensaios científicos avançados. Engenharia de altíssimo nível, superando todas as exigências das normas técnicas e garantindo precisão absoluta nos equipamentos.",
      project: "Projeto & Desenvolvimento de Equipamentos",
      rating: 5,
      verified: true,
      tag: "Setor Acadêmico & Pesquisa"
    },
    {
      name: "Marcelo F. Camargo",
      role: "Gerente de Obras & Infraestrutura",
      company: "Condomínio Residencial Diamante",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      text: "A automação do sistema de recalque de água e os laudos elétricos emitidos pela OZM Engenharia reduziram nosso consumo energético em 28% e eliminaram falhas recorrentes nas bombas. Atendimento exemplar do Eng. Vinícius.",
      project: "Automação de Recalque & Eficiência Energética",
      rating: 5,
      verified: true,
      tag: "Engenharia Predial"
    },
    {
      name: "Eng. Roberto Fonseca",
      role: "Head de Manutenção & Engenharia",
      company: "Grupo ACREPOM",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      text: "A OZM Engenharia é nossa parceira estratégica em instalações elétricas de alta complexidade e projetos de proteção contra incêndio. Rigor técnico impecável, emissão rápida de ART e suporte pós-entrega contínuo.",
      project: "Projeto de Combate a Incêndio & Elétrica",
      rating: 5,
      verified: true,
      tag: "Infraestrutura Industrial"
    }
  ];

  const stats = [
    { value: "+150", label: "Projetos Concluídos", detail: "Com conformidade NBR e ART emitida" },
    { value: "100%", label: "Aprovação em Laudos", detail: "Sem pendências em fiscalizações" },
    { value: "-28%", label: "Economia Energética", detail: "Média obtida em sistemas automatizados" },
    { value: "+8.000h", label: "Horas de Engenharia", detail: "Experiência técnica acumulada" }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-400 font-bold text-xs uppercase tracking-widest mb-4">
              <Award className="size-4" />
              Prova Social & Depoimentos
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-6">
              O que dizem os <span className="text-primary-500">líderes que confiam</span> na OZM Engenharia
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-medium">
              Histórias reais de diretores, engenheiros e gestores que transformaram suas operações com nossas soluções técnicas.
            </p>
          </motion.div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative"
            >
              <Quote className="absolute top-8 right-8 md:top-12 md:right-12 size-20 text-neutral-800/50 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Profile Column */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-8">
                  <div className="relative mb-6">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-primary-600/30 shadow-xl"
                    />
                    {testimonials[activeIndex].verified && (
                      <div className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 rounded-full shadow-lg" title="Cliente Verificado">
                        <CheckCircle2 className="size-4" />
                      </div>
                    )}
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-primary-950 text-primary-400 text-xs font-bold uppercase tracking-wider mb-3 border border-primary-800/40">
                    {testimonials[activeIndex].tag}
                  </span>

                  <h3 className="text-2xl font-bold font-display text-white mb-1">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-primary-400 text-sm font-semibold mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-neutral-400 text-xs font-medium flex items-center gap-1.5 justify-center lg:justify-start">
                    <Building2 className="size-3.5" />
                    {testimonials[activeIndex].company}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-4 text-amber-400">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Right Quote Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <blockquote className="text-lg md:text-xl text-neutral-200 leading-relaxed font-medium mb-8 italic">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-neutral-800/60">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-1">Projeto Realizado:</span>
                      <span className="text-sm font-bold text-white bg-neutral-800/60 px-3 py-1 rounded-lg border border-neutral-700/50">
                        {testimonials[activeIndex].project}
                      </span>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 rounded-full bg-neutral-800 hover:bg-primary-600 text-white flex items-center justify-center transition-all border border-neutral-700/60 active:scale-95"
                        aria-label="Depoimento anterior"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 rounded-full bg-neutral-800 hover:bg-primary-600 text-white flex items-center justify-center transition-all border border-neutral-700/60 active:scale-95"
                        aria-label="Próximo depoimento"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-primary-500' : 'w-2.5 bg-neutral-800 hover:bg-neutral-700'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quantifiable Social Proof Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-neutral-900"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-neutral-900/50 p-6 md:p-8 rounded-3xl border border-neutral-800/80 hover:border-primary-600/40 transition-all group">
              <span className="text-3xl md:text-5xl font-black font-display text-primary-500 block mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <h4 className="text-base font-bold text-white mb-1">{stat.label}</h4>
              <p className="text-xs text-neutral-400 font-medium">{stat.detail}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
