import { useState, useEffect } from 'react';
import { X, MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  client: string;
  year: string;
  images: string[];
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  results: string[];
}

interface ProjectDetailModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose, onOpenQuote }: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'results'>('overview');

  // Reset index and tab on project change
  useEffect(() => {
    if (project) {
      setActiveImageIndex(0);
      setActiveTab('overview');
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleWhatsAppProject = () => {
    const text = `Olá OZM Engenharia! Vi o projeto *${project.title}* no site e gostaria de um orçamento similar para a minha empresa.`;
    window.open(`https://wa.me/5518991450514?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md"
        />

        {/* Modal Window Container - Responsive Mobile Drawer / Desktop Centered Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-neutral-900 text-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-neutral-800 w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] flex flex-col z-10 overflow-hidden"
        >
          {/* Header Mobile Handlebar / Close Button Bar */}
          <div className="p-4 sm:p-6 bg-neutral-950 flex items-center justify-between border-b border-neutral-800 shrink-0">
            <div className="flex items-center gap-3">
              <span className="py-1 px-3 rounded-lg bg-primary-600/20 text-primary-400 border border-primary-500/30 text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                <MapPin className="size-3.5 text-primary-500" />
                {project.location}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700 rounded-full transition-colors active:scale-95"
              aria-label="Fechar detalhes do projeto"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-4 sm:p-6 md:p-8 space-y-6">
            
            {/* Project Header Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white mb-2 leading-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-neutral-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary-500" />
                  {project.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-primary-500" />
                  {project.year}
                </span>
                <span>•</span>
                <span className="text-neutral-300 font-semibold">Cliente: {project.client}</span>
              </div>
            </div>

            {/* Interactive Image Gallery Slider */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 aspect-[16/9] sm:aspect-[21/9] border border-neutral-800 group shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={project.images[activeImageIndex]}
                  alt={`${project.title} - Foto ${activeImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/30 pointer-events-none" />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950/70 hover:bg-primary-600 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/10 active:scale-95"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950/70 hover:bg-primary-600 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/10 active:scale-95"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}

              {/* Thumbnail Bar */}
              {project.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/10">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeImageIndex === idx ? 'bg-primary-500 scale-125' : 'bg-neutral-600 hover:bg-neutral-400'
                      }`}
                      aria-label={`Ver imagem ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Tab Buttons */}
            <div className="flex rounded-2xl bg-neutral-950 p-1.5 border border-neutral-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'technical'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Desafio & Solução
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'results'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Resultados
              </button>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div className="bg-neutral-950/60 p-5 rounded-2xl border border-neutral-800">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary-400 mb-2 flex items-center gap-2">
                      <Cpu className="size-4" /> Resumo do Projeto
                    </h3>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-medium">
                      {project.summary}
                    </p>
                  </div>

                  {/* Technical Badges / Tags */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Normas e Tecnologias Envolvidas:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-neutral-800 text-neutral-200 text-xs font-bold border border-neutral-700/60 flex items-center gap-1.5"
                        >
                          <ShieldCheck className="size-3.5 text-primary-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'technical' && (
                <motion.div
                  key="technical"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/30">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-2">Desafio Técnico:</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-primary-950/20 border border-primary-900/30">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary-400 mb-2">Solução OZM Engenharia:</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                      {project.solution}
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'results' && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Resultados Obtidos & Entregáveis:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.results.map((res, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start gap-3"
                      >
                        <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-bold text-white">{res}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Sticky Bottom Actions Bar (Mobile First CTA) */}
          <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="flex-1 bg-primary-600 text-white font-bold py-3.5 px-5 rounded-2xl hover:bg-primary-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 active:scale-95 text-sm"
            >
              Solicitar Projeto Similar
              <ArrowRight className="size-4" />
            </button>

            <button
              onClick={handleWhatsAppProject}
              className="bg-green-600/20 border border-green-500/40 text-green-400 font-bold py-3.5 px-5 rounded-2xl hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95 text-sm"
            >
              <MessageSquare className="size-4" />
              Falar no WhatsApp
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
