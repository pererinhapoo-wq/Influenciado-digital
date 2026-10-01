import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Film, Compass } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/creatorData';

interface NavbarProps {
  onOpenHub: (initialTab?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHub, onNavigateToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", id: "sobre" },
    { label: "Conteúdos", id: "conteudos" },
    { label: "Plataformas", id: "plataformas" },
    { label: "Projetos", id: "projetos" },
    { label: "Parcerias", id: "marcas" },
    { label: "Mídia Kit", id: "mediakit" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0C0D10]/90 backdrop-blur-md border-b border-[#23252B] py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Strict single text element) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#E07A5F] transition-colors">
              {CREATOR_PROFILE.name.toUpperCase()}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
          </a>

          {/* Zone 2: Navigation Links (Clean text, subtle hover, no pills) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#A1A1AA]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap focus:outline-none relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E07A5F] hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenHub('conteudos')}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#D4A373] bg-[#1A1C23] hover:bg-[#232630] border border-[#2D313E] rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Central do Criador</span>
            </button>

            <button
              onClick={() => handleNavClick('contato')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              Contato Comercial
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#A1A1AA] hover:text-white rounded-md focus:outline-none cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Tailored editorial mobile experience) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0C0D10]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#71717A] border-b border-[#23252B] pb-3">
              Navegação Editorial
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left font-display text-2xl font-semibold text-[#E4E4E7] hover:text-[#E07A5F] transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#52525B] group-hover:text-[#E07A5F] transition-colors" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#23252B] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHub('mediakit');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#D4A373] bg-[#171920] border border-[#2D313E] rounded-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Abrir Central do Criador</span>
              </button>

              <button
                onClick={() => handleNavClick('contato')}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#E07A5F] rounded-md text-center"
              >
                Solicitar Parceria Comercial
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1F2128] text-xs text-[#71717A] flex items-center justify-between">
            <span>{CREATOR_PROFILE.name}</span>
            <span>{CREATOR_PROFILE.location}</span>
          </div>
        </div>
      )}
    </>
  );
};
