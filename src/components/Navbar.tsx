import { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import QuickQuoteModal from './QuickQuoteModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre-nos' },
    { name: 'Serviços', href: '#especialidades' },
    { name: 'Portfólio', href: '#projetos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Main Nav */}
      <nav className={`transition-all duration-300 px-6 md:px-12 flex justify-between items-center py-1 md:py-2 border-b ${
        isScrolled 
          ? 'bg-black border-neutral-800 shadow-lg' 
          : 'bg-black border-neutral-900'
      }`}>
        <a href="#home" className="flex items-center gap-4 group">
          <img src="/logo1.webp" alt="OZM Engenharia Logo" className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[18px] font-semibold transition-colors hover:text-primary-600 text-white"
            >
              {link.name}
            </a>
          ))}
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
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-2xl p-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-700 font-bold text-lg hover:text-primary-600 border-b border-neutral-50 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="bg-primary-600 text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2"
              >
                <Calculator className="size-5" />
                Solicitar Orçamento
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
