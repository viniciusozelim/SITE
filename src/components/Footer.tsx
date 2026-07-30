import { ArrowUp, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Linkedin, href: "https://linkedin.com/company/ozm-engenharia", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com/ozmengenharia", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com/ozmengenharia", label: "Facebook" }
  ];

  return (
    <footer className="bg-black text-neutral-400 pt-24 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-4 mb-8 group">
              <img src="/logo1.png" alt="OZM Engenharia Logo" className="h-12 w-auto opacity-80 hover:opacity-100 transition-all" />
            </a>
            <p className="leading-relaxed mb-8 text-neutral-500 font-medium italic">
              Excelência e inovação em projetos de engenharia civil, elétrica e automação industrial. Referência em qualidade técnica.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center transition-all hover:border-primary-600 hover:text-primary-500"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white mb-10">Explorar</h4>
            <ul className="space-y-4 font-bold text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Sobre', href: '#sobre-nos' },
                { label: 'Instalações', href: '#especialidades' },
                { label: 'Obras', href: '#projetos' },
                { label: 'Contato', href: '#contato' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-primary-500 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white mb-10">Especialidades</h4>
            <ul className="space-y-4 font-bold text-sm">
              {['Estrutural', 'Elétrica', 'Automação', 'Consultoria'].map((item) => (
                <li key={item}>
                  <a href="#especialidades" className="hover:text-primary-500 transition-colors">
                    Engenharia {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-900">
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white mb-6">Suporte</h4>
            <div className="space-y-4">
              <p className="text-xs font-bold text-neutral-500">Fale com um Engenheiro</p>
              <a href="mailto:eng.viniciusozelim@hotmail.com" className="block text-white font-bold hover:text-primary-500 transition-colors">eng.viniciusozelim@hotmail.com</a>
              <a href="https://wa.me/5518991450514?text=ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noreferrer" className="block text-primary-500 font-display font-extrabold text-2xl">+55 (18) 99145-0514</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-600">
            © {currentYear} OZM Engenharia. Quality & Integrity.
          </div>
          
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-tighter text-neutral-600">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Qualidade</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Segurança</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">Sustentabilidade</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-primary-600 text-white transition-all group border border-neutral-800"
          >
            <ArrowUp className="size-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
