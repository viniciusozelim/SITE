import { useState } from 'react';
import { 
  ArrowLeft, 
  MessageSquare, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  Zap,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data/servicesData';

interface ServiceLandingPageProps {
  serviceSlug: string;
  onBack: () => void;
  onOpenQuote: (serviceName?: string) => void;
  onNavigateService: (slug: string) => void;
}

export default function ServiceLandingPage({
  serviceSlug,
  onBack,
  onOpenQuote,
  onNavigateService
}: ServiceLandingPageProps) {
  const service = servicesData[serviceSlug] || servicesData["eletrica"];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(service.whatsappMessage);
    window.open(`https://wa.me/5518991450514?text=${text}`, '_blank');
  };

  const otherServices = Object.values(servicesData).filter(s => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pb-24 md:pb-12">
      {/* 1. Header Sticky Nav for Landing Page */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800 text-white px-4 md:px-12 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs md:text-sm font-bold text-neutral-300 hover:text-white transition-colors bg-neutral-900 hover:bg-neutral-800 px-3 py-2 rounded-full border border-neutral-700"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Voltar ao Início</span>
            <span className="sm:hidden">Voltar</span>
          </button>

          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <img src="/logo1.webp" alt="OZM Engenharia" className="h-9 md:h-12 w-auto" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenQuote(service.title)}
              className="bg-primary-600 hover:bg-primary-700 text-white text-xs md:text-sm font-extrabold px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg shadow-primary-600/20 transition-all flex items-center gap-1.5"
            >
              <Calculator className="size-4 hidden sm:inline" />
              <span>Orçamento</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section Mobile-First */}
      <section className="bg-neutral-950 text-white pt-10 pb-16 md:py-20 relative overflow-hidden">
        {/* Background Subtle Gradient & Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Category & CREA Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-primary-600/20 text-primary-400 border border-primary-500/30 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                  <service.icon className="size-3.5" />
                  {service.category}
                </span>
                <span className="bg-neutral-900 text-neutral-300 text-xs font-bold px-3 py-1 rounded-full border border-neutral-800 flex items-center gap-1">
                  <ShieldCheck className="size-3.5 text-green-400" />
                  {service.creaBadge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15] mb-5 tracking-tight text-white">
                {service.heroHeadline}
              </h1>
              <p className="text-neutral-300 text-base md:text-lg mb-8 leading-relaxed font-medium">
                {service.heroSubheadline}
              </p>

              {/* High Conversion CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-500 text-white font-extrabold px-6 py-4 rounded-2xl shadow-xl shadow-green-600/25 transition-all flex items-center justify-center gap-3 text-base group active:scale-95"
                >
                  <MessageSquare className="size-5 fill-current" />
                  <span>Falar com Engenheiro no WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="bg-primary-600 hover:bg-primary-500 text-white font-extrabold px-6 py-4 rounded-2xl shadow-xl shadow-primary-600/25 transition-all flex items-center justify-center gap-3 text-base active:scale-95 border border-primary-400/30"
                >
                  <Calculator className="size-5" />
                  <span>Solicitar Orçamento Rápido</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80 text-xs font-bold text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary-500 shrink-0" />
                  <span>Resposta em até 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-primary-500 shrink-0" />
                  <span>Engenheiros Registrados</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Zap className="size-4 text-primary-500 shrink-0" />
                  <span>Sem Compromisso</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Floating Highlight Box */}
                <div className="absolute bottom-6 left-6 right-6 bg-neutral-900/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black text-primary-400 uppercase tracking-widest block">Compromisso OZM</span>
                    <span className="text-sm font-bold text-white block">Excelência Técnica & Conformidade</span>
                  </div>
                  <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 border border-primary-500/30">
                    <ShieldCheck className="size-6" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Metrics Bar */}
      <section className="bg-white py-10 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-primary-600 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pain Points vs Solutions Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-extrabold uppercase tracking-widest text-xs block mb-3">
              Soluções Sob Medida
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 font-display tracking-tight mb-4">
              Dores do Mercado vs. <span className="text-primary-600">Solução OZM</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg font-medium">
              Elimine riscos técnicos, atrasos e custos desnecessários em seu empreendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.painPoints.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Problem Tag */}
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                    Problema Comum
                  </div>
                  <p className="text-neutral-800 font-semibold text-sm leading-relaxed mb-6 bg-rose-50/60 p-4 rounded-2xl border border-rose-100">
                    "{item.problem}"
                  </p>

                  {/* Solution Tag */}
                  <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-wider mb-3">
                    <CheckCircle2 className="size-4" />
                    Solução OZM Engenharia
                  </div>
                  <p className="text-neutral-700 font-medium text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-bold">
                  <span>Garantia de Conformidade</span>
                  <Sparkles className="size-4 text-primary-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deliverables Section */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-extrabold uppercase tracking-widest text-xs block mb-3">
              Escopo Completo
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 font-display tracking-tight mb-4">
              O Que Entregamos no Seu <span className="text-primary-600">Projeto</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg font-medium">
              Documentação técnica rigorosa e prontos para aprovação rápida junto aos órgãos competentes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliverables.map((deliv, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-primary-500/30 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <deliv.icon className="size-6" />
                </div>
                <h3 className="font-extrabold font-display text-lg text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {deliv.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {deliv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 4-Step Process Section */}
      <section className="py-16 md:py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-400 font-extrabold uppercase tracking-widest text-xs block mb-3">
              Transparência & Agilidade
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight mb-4">
              Nosso Processo em <span className="text-primary-500">4 Etapas</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg font-medium">
              Da primeira conversa até a entrega final com ART.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-black font-display text-primary-500 mb-4 opacity-80">
                    {step.step}
                  </div>
                  <h3 className="font-extrabold font-display text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-600" style={{ width: `${(idx + 1) * 25}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Central Callout Banner */}
          <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-white mb-3">
              Tem um projeto em mente ou precisa de adequação urgente?
            </h3>
            <p className="text-neutral-300 text-sm mb-6 max-w-xl mx-auto font-medium">
              Nossa equipe técnica faz o levantamento inicial dos requisitos e orienta sua empresa sem custos de consulta.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-500 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-green-600/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="size-4" />
                Falar com Engenheiro Agora
              </button>
              <button
                onClick={() => onOpenQuote(service.title)}
                className="bg-primary-600 hover:bg-primary-500 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Calculator className="size-4" />
                Receber Proposta Comercial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Specific FAQ */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-extrabold uppercase tracking-widest text-xs block mb-3">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl font-black text-neutral-900 font-display">
              Perguntas sobre <span className="text-primary-600">{service.title}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left font-bold text-neutral-900 font-display text-base flex justify-between items-center gap-4 hover:text-primary-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="size-5 text-primary-600 shrink-0" /> : <ChevronDown className="size-5 text-neutral-400 shrink-0" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-neutral-600 font-medium leading-relaxed border-t border-neutral-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Other Services Navigation Bar */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block">Explore</span>
              <h3 className="text-xl font-bold font-display text-neutral-900">Outras Áreas de Atuação OZM</h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-bold text-neutral-600 hover:text-primary-600 flex items-center gap-1.5 transition-colors"
            >
              <span>Ver todos os serviços na Home</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((other) => (
              <button
                key={other.slug}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onNavigateService(other.slug);
                }}
                className="p-4 rounded-2xl bg-neutral-50 hover:bg-primary-50 border border-neutral-200 hover:border-primary-300 text-left transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white text-primary-600 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <other.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-neutral-900 group-hover:text-primary-700 transition-colors">
                      {other.title}
                    </h4>
                    <span className="text-[10px] text-neutral-500 block font-medium">Ver landing page</span>
                  </div>
                </div>
                <ArrowRight className="size-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Mobile Sticky CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 p-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 active:bg-green-700 text-white font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-green-600/30"
          >
            <MessageSquare className="size-4 fill-current shrink-0" />
            <span>WhatsApp Direto</span>
          </button>
          
          <button
            onClick={() => onOpenQuote(service.title)}
            className="bg-primary-600 active:bg-primary-700 text-white font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-primary-600/30"
          >
            <Calculator className="size-4 shrink-0" />
            <span>Pedir Orçamento</span>
          </button>
        </div>
      </div>
    </div>
  );
}
