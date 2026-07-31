import { useState, useEffect } from 'react';
import { Menu, X, Calculator, ChevronDown, Zap, Cpu, Settings, Building2, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import QuickQuoteModal from './QuickQuoteModal';

interface NavbarProps {
  onNavigateService?: (slug: string) => void;
  onNavigateHome?: () => void;
}

export default function Navbar({ onNavigateService, onNavigateHome }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { name: 'Engenharia Elétrica', slug: 'eletrica', icon: Zap },
    { name: 'Automação Industrial', slug: 'automacao', icon: Cpu },
    { name: 'Engenharia Mecânica', slug: 'mecanica', icon: Settings },
    { name: 'Engenharia Civil', slug: 'civil', icon: Building2 },
    { name: 'Soluções Sustentáveis', slug: 'sustentaveis', icon: Leaf },
  ];

  const handleServiceClick = (slug: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    if (onNavigateService) {
      onNavigateService(slug);
    } else {
      window.location.hash = `#servicos/${slug}`;
    }
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '#home';
    }
  };

  return (
    <header className="fixed w-full z-50">
      {/* Main Nav */}
      <nav className={`transition-all duration-300 px-6 md:px-12 flex justify-between items-center py-1 md:py-2 border-b ${
        isScrolled 
          ? 'bg-black border-neutral-800 shadow-lg' 
          : 'bg-black border-neutral-900'
      }`}>
        <a href="#home" onClick={handleHomeClick} className="flex items-center gap-4 group">
          <img src="/logo1.webp" alt="OZM Engenharia Logo" className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            onClick={handleHomeClick}
            className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white"
          >
            Home
          </a>
          <a
            href="#sobre-nos"
            className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white"
          >
            Sobre
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <a
              href="#especialidades"
              className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white flex items-center gap-1.5 py-2"
            >
              <span>Serviços</span>
              <ChevronDown className={`size-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-primary-500' : ''}`} />
            </a>

            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-72 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-3 z-50"
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-neutral-400 px-3 py-1.5 border-b border-neutral-800 mb-1">
                    Landing Pages de Serviços
                  </div>
                  {servicesList.map((service) => (
                    <button
                      key={service.slug}
                      onClick={() => handleServiceClick(service.slug)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-900 text-left text-sm text-neutral-200 hover:text-primary-400 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-neutral-900 group-hover:bg-primary-600/20 text-primary-500 transition-colors">
                        <service.icon className="size-4" />
                      </div>
                      <span className="font-semibold">{service.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#projetos"
            className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white"
          >
            Portfólio
          </a>
          <a
            href="#faq"
            className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white"
          >
            FAQ
          </a>
          <a
            href="#contato"
            className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white"
          >
            Contato
          </a>

          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-primary-600 text-white px-7 py-3 rounded-full text-[16px] font-bold shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <Calculator className="size-4" />
            ORÇAMENTO
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 shadow-2xl p-6 text-white max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-white font-bold text-lg hover:text-primary-500 border-b border-neutral-900 pb-2"
                onClick={handleHomeClick}
              >
                Home
              </a>
              <a
                href="#sobre-nos"
                className="text-white font-bold text-lg hover:text-primary-500 border-b border-neutral-900 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </a>

              {/* Mobile Services List */}
              <div className="py-2 border-b border-neutral-900">
                <div className="text-xs font-black uppercase tracking-wider text-primary-500 mb-3">
                  Nossos Serviços (Subpáginas)
                </div>
                <div className="grid gap-2 pl-2">
                  {servicesList.map((service) => (
                    <button
                      key={service.slug}
                      onClick={() => handleServiceClick(service.slug)}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-900 text-left text-sm font-semibold text-neutral-200 hover:text-primary-400 active:bg-neutral-800"
                    >
                      <service.icon className="size-4 text-primary-500 shrink-0" />
                      <span>{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#projetos"
                className="text-white font-bold text-lg hover:text-primary-500 border-b border-neutral-900 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfólio de Obras
              </a>
              <a
                href="#faq"
                className="text-white font-bold text-lg hover:text-primary-500 border-b border-neutral-900 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contato"
                className="text-white font-bold text-lg hover:text-primary-500 border-b border-neutral-900 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="bg-primary-600 text-white text-center py-4 rounded-xl font-bold mt-2 shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2"
              >
                <Calculator className="size-5" />
                Solicitar Orçamento Rápido
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Quote Modal */}
      <QuickQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
}
