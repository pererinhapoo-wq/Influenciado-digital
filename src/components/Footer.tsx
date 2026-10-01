import React from 'react';
import { CREATOR_PROFILE, CREATOR_PLATFORMS } from '../data/creatorData';
import { ArrowUp, ArrowUpRight, Compass, Shield, Heart } from 'lucide-react';

interface FooterProps {
  onOpenHub: (tab?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHub, onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0D] border-t border-[#1C1E26] pt-16 pb-12 px-6 md:px-10 text-xs text-[#8E8E98]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-display text-xl font-bold text-white tracking-tight">
                {CREATOR_PROFILE.name.toUpperCase()}
              </span>
              <p className="font-editorial italic text-[#D4A373] text-sm">
                {CREATOR_PROFILE.displayRole}
              </p>
            </div>

            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm">
              Plataforma digital independente dedicada ao ensaísmo audiovisual, fotografia contemporânea e narrativas com tempo de vida permanente.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenHub('conteudos')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#161820] border border-[#262937] text-white hover:text-[#E07A5F] transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Central do Criador</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-white font-semibold">
              Navegação
            </div>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => onNavigateToSection('sobre')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Trajetória & Filosofia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('conteudos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ensaios em Destaque
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('projetos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Séries & Publicações
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('marcas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Parcerias Comerciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('mediakit')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mídia Kit Oficial
                </button>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-white font-semibold">
              Ecossistema
            </div>
            <ul className="space-y-2 text-[#A1A1AA]">
              {CREATOR_PLATFORMS.map((plat) => (
                <li key={plat.id}>
                  <a
                    href={plat.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{plat.name}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-[#71717A]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial & Contact */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-white font-semibold">
              Contato & Imprensa
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Atendimento exclusivo para novos projetos, palestras e pautas editoriais.
            </p>
            <div className="pt-1 font-mono-tabular text-white text-xs">
              comercial@valentimrocha.com
            </div>
            <div className="text-[11px] text-[#71717A]">
              São Paulo · Lisboa · Atuação Global
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 border-t border-[#181920] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} {CREATOR_PROFILE.name}. Todos os direitos reservados.</span>
            <span aria-hidden="true">·</span>
            <span>Estruturado como Modelo de Alto Padrão NexaWeb</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1 cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
