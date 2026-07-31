/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceLandingPage from './components/ServiceLandingPage';
import QuickQuoteModal from './components/QuickQuoteModal';
import { servicesData } from './data/servicesData';

export default function App() {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);

  // Parse Hash or Path URL to detect service subpage
  useEffect(() => {
    const parseRoute = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;

      let foundSlug: string | null = null;

      // Check Hash route e.g. #servicos/eletrica or #/servicos/eletrica
      if (hash.includes('servicos/')) {
        const match = hash.match(/servicos\/([a-zA-Z0-9-]+)/);
        if (match && match[1] && servicesData[match[1]]) {
          foundSlug = match[1];
        }
      } 
      // Check Pathname route e.g. /servicos/eletrica
      else if (pathname.includes('/servicos/')) {
        const parts = pathname.split('/servicos/');
        const candidate = parts[1]?.split('/')[0];
        if (candidate && servicesData[candidate]) {
          foundSlug = candidate;
        }
      }

      setActiveServiceSlug(foundSlug);

      if (foundSlug && servicesData[foundSlug]) {
        document.title = `${servicesData[foundSlug].title} | OZM Engenharia`;
      } else {
        document.title = `OZM Engenharia | Soluções em Engenharia Civil, Elétrica e Automação`;
      }
    };

    parseRoute();
    window.addEventListener('hashchange', parseRoute);
    window.addEventListener('popstate', parseRoute);

    return () => {
      window.removeEventListener('hashchange', parseRoute);
      window.removeEventListener('popstate', parseRoute);
    };
  }, []);

  const handleNavigateService = (slug: string) => {
    window.location.hash = `#servicos/${slug}`;
    setActiveServiceSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    window.location.hash = '#home';
    setActiveServiceSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-primary-600 selection:text-white">
      {activeServiceSlug && servicesData[activeServiceSlug] ? (
        /* Render Service Subpage (Mobile-First High-Conversion Landing Page) */
        <ServiceLandingPage
          serviceSlug={activeServiceSlug}
          onBack={handleNavigateHome}
          onOpenQuote={handleOpenQuoteModal}
          onNavigateService={handleNavigateService}
        />
      ) : (
        /* Render Main Home Landing Page */
        <>
          <Navbar 
            onNavigateService={handleNavigateService}
            onNavigateHome={handleNavigateHome}
          />
          <main>
            <Hero />
            <Benefits />
            <Services onSelectService={handleNavigateService} />
            <About />
            <Projects />
            <Testimonials />
            <FAQ />
            <FinalCTA />
            <Contact />
          </main>
          <Footer 
            onNavigateService={handleNavigateService}
            onNavigateHome={handleNavigateHome}
          />
        </>
      )}

      {/* Floating Action WhatsApp Button */}
      <WhatsAppButton />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedQuoteService}
      />
    </div>
  );
}
