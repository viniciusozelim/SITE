import { useState } from 'react';
import { ChevronDown, HelpCircle, Search, FileCheck, ShieldAlert, Cpu, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'eletrica' | 'automacao' | 'art' | 'geral';
  icon: typeof FileCheck;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "A OZM Engenharia emite Anotação de Responsabilidade Técnica (ART / CREA) para todos os projetos?",
      answer: "Sim, absolutamente. Todos os nossos projetos de engenharia elétrica, civil, mecânica e automação industrial acompanham a devida emissão de ART (Anotação de Responsabilidade Técnica) junto ao CREA-SP, assinada por engenheiros devidamente registrados. Isso garante respaldo jurídico total, segurança técnica e aprovação perante o Corpo de Bombeiros, Prefeituras e seguradoras.",
      category: "art",
      icon: FileCheck
    },
    {
      id: 2,
      question: "Como funciona a adequação de instalações elétricas às normas NBR 5410 e NR-10?",
      answer: "Nossa metodologia inicia-se com um diagnóstico técnico detalhado no local (ou análise de diagramas unifilares existentes), identificando pontos de sobrecarga, ausência de dispositivo DR/DPS, problemas de aterramento e termoscan de painéis. Em seguida, elaboramos o projeto executivo de adequação, memorial descritivo, cronograma físico e laudo conclusivo.",
      category: "eletrica",
      icon: ShieldAlert
    },
    {
      id: 3,
      question: "A OZM Engenharia atende projetos e obras fora do estado de São Paulo?",
      answer: "Sim. Embora nossa sede operacional esteja localizada em Araçatuba/SP, possuímos logística e infraestrutura técnica para desenvolver projetos executivos, consultorias e acompanhamento de obras industriais e comerciais em todo o território nacional.",
      category: "geral",
      icon: HelpCircle
    },
    {
      id: 4,
      question: "Como a automação industrial desenvolvida pela OZM reduz os custos operacionais da empresa?",
      answer: "Projetamos sistemas inteligentes utilizando CLPs, IHM e inversores de frequência que otimizam o ciclo de trabalho de motores, compressores e bombas de recalque. Isso elimina picos de demanda na fatura de energia, reduz o desgaste de componentes e gera uma economia média comprovada de 20% a 35% nos custos de energia e manutenção.",
      category: "automacao",
      icon: Cpu
    },
    {
      id: 5,
      question: "Quais são os prazos médios de entrega para projetos e laudos técnicos?",
      answer: "Prazos de laudos periciais e inspecionais variam de 3 a 7 dias úteis após a vistoria técnica. Projetos executivos de maior complexidade (como automação de plantas industriais ou projetos elétricos prediais) são entregues conforme cronograma de etapas acordado no planejamento inicial.",
      category: "art",
      icon: Clock
    },
    {
      id: 6,
      question: "Quais informações são necessárias para solicitar um orçamento de projeto?",
      answer: "Para agilizar a elaboração da proposta, solicitamos a localização da obra, o tipo de edificação/indústria e o objetivo do projeto. Caso possua plantas baixas em PDF ou CAD, elas ajudam a agilizar a análise. Se necessário, agendamos uma visita técnica prévia ao local.",
      category: "geral",
      icon: HelpCircle
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'eletrica', label: 'Elétrica & NBR 5410' },
    { id: 'automacao', label: 'Automação Industrial' },
    { id: 'art', label: 'ART & Laudos CREA' },
    { id: 'geral', label: 'Atendimento & Prazos' }
  ];

  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold text-xs uppercase tracking-widest mb-4 border border-primary-100">
              <Sparkles className="size-4" />
              Esclarecimentos Técnicos
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-neutral-900 leading-tight mb-6">
              Perguntas Frequentes & <span className="text-primary-600">Regras Técnicas</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed font-medium">
              Transparência e rigor normativo. Tire suas dúvidas sobre emissão de ART, conformidade NBR 5410, processos de automação e cronogramas.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pergunta ou norma técnica (ex: NBR 5410, ART, Prazo)..."
              className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl pl-14 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-neutral-50 rounded-3xl border border-neutral-200">
              <HelpCircle className="size-12 text-neutral-400 mx-auto mb-3" />
              <p className="text-neutral-700 font-bold">Nenhuma pergunta encontrada para sua busca.</p>
              <p className="text-xs text-neutral-500 mt-1">Tente pesquisar com outros termos ou entre em contato com nossa equipe.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const IconComponent = faq.icon;
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'bg-neutral-50 border-primary-500/40 shadow-md' 
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 text-base md:text-lg focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${isOpen ? 'bg-primary-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                        <IconComponent className="size-5" />
                      </div>
                      <span className="leading-snug">{faq.question}</span>
                    </span>
                    <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-100 text-primary-600' : 'text-neutral-400'}`}>
                      <ChevronDown className="size-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-neutral-600 text-sm leading-relaxed border-t border-neutral-200/60 font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Technical Support Direct Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto bg-neutral-950 text-white rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-primary-600/20 text-primary-500 rounded-2xl flex items-center justify-center shrink-0 border border-primary-500/30">
              <PhoneCall className="size-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1">Sua dúvida não está listada aqui?</h3>
              <p className="text-xs text-neutral-400 font-medium">Converse diretamente com o Eng. Vinícius Ozelim e nossa equipe de engenharia.</p>
            </div>
          </div>

          <a
            href="https://wa.me/5518991450514?text=Olá,%20tenho%20uma%20dúvida%20técnica%20sobre%20os%20serviços%20da%20OZM%20Engenharia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/20 whitespace-nowrap active:scale-95 text-sm shrink-0"
          >
            Falar com Engenheiro no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
