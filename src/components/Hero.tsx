import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Compass, FileText, CheckCircle2 } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/creatorData';

interface HeroProps {
  onOpenHub: (tab?: string) => void;
  onExploreWork: () => void;
  onOpenFeaturedVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenHub,
  onExploreWork,
  onOpenFeaturedVideo
}) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-10 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Decorative ambient gradient backing (soft, non-intrusive) */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-96 h-96 bg-[#E07A5F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Editorial Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typographic & Positioning Power (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Subtle live indicator / discipline status */}
          <div className="flex items-center gap-3 text-xs tracking-wider text-[#A1A1AA]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E07A5F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E07A5F]"></span>
            </span>
            <span className="font-mono-tabular uppercase tracking-widest text-[#D4A373]">
              {CREATOR_PROFILE.location}
            </span>
            <span aria-hidden="true" className="text-[#3F3F46]">·</span>
            <span className="text-[#A1A1AA]">Plataforma & Mídia Kit Oficial</span>
          </div>

          {/* Oversized Editorial Name & Headline */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              {CREATOR_PROFILE.name}
            </h1>
            <p className="font-editorial italic text-2xl sm:text-3xl text-[#D4A373] font-normal">
              {CREATOR_PROFILE.displayRole}
            </p>
          </div>

          {/* Positioning Statement with balance */}
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl text-balance">
            {CREATOR_PROFILE.positioningStatement}
          </p>

          {/* Social Platforms Snapshot with fast handles */}
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#71717A]">
            <span className="text-[#E4E4E7] font-semibold">Canais Centrais:</span>
            <span className="hover:text-white transition-colors cursor-pointer">YouTube (840k)</span>
            <span aria-hidden="true" className="text-[#3F3F46]">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Spotify (340k)</span>
            <span aria-hidden="true" className="text-[#3F3F46]">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Instagram (510k)</span>
            <span aria-hidden="true" className="text-[#3F3F46]">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">Substack (96k)</span>
          </div>

          {/* Primary Action Suite */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-all shadow-lg shadow-[#E07A5F]/15 cursor-pointer"
            >
              <span>Explorar Conteúdos</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenHub('conteudos')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#E4E4E7] bg-[#16181F] hover:bg-[#1F222B] border border-[#2D313E] rounded-md transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#D4A373]" />
              <span>Central do Criador</span>
            </button>

            <button
              onClick={() => onOpenHub('mediakit')}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Mídia Kit Resumido</span>
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Framed Portrait with Overlap Details (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background frame accent */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#252834] via-[#1E202A] to-[#121318] rounded-xl -rotate-1 border border-[#2B2E3D]" />

            {/* Main Portrait Card */}
            <div className="relative rounded-lg overflow-hidden bg-[#15161C] border border-[#2C2F3C] shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] relative overflow-hidden group">
                <img
                  src={CREATOR_PROFILE.heroPortrait}
                  alt={CREATOR_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-95 group-hover:scale-102 transition-transform duration-700"
                />

                {/* Scrim overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/20 to-transparent" />

                {/* Floating interactive play button for flagship reel */}
                <button
                  onClick={onOpenFeaturedVideo}
                  className="absolute top-4 right-4 flex items-center gap-2 py-1.5 px-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-white hover:bg-black/90 transition-all cursor-pointer"
                  title="Ver Manifesto Audiovisual"
                >
                  <Play className="w-3 h-3 fill-current text-[#E07A5F]" />
                  <span>Ver Manifesto</span>
                </button>

                {/* Bottom Card Editorial Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                    <span className="font-mono-tabular tracking-wider uppercase text-[#D4A373]">
                      Diário de Produção
                    </span>
                    <span className="text-[11px] text-white/70">Temporada 2 em Curso</span>
                  </div>
                  <p className="text-sm font-medium text-white line-clamp-2">
                    "A beleza da lentidão e a estética do detalhe no cinema contemporâneo."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Editorial Metric Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-[#171821]/95 backdrop-blur-md border border-[#2B2E3D] rounded-lg p-4 shadow-xl max-w-[220px] hidden sm:block">
              <div className="text-[11px] text-[#A1A1AA] uppercase tracking-wider mb-1">
                Comunidade Ativa
              </div>
              <div className="font-display font-bold text-2xl text-white">
                1.85M+
              </div>
              <div className="text-xs text-[#D4A373] flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Audiência Qualificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Structured Verified Metrics */}
      <div className="mt-16 pt-8 border-t border-[#1F2129] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {CREATOR_PROFILE.quickStats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-xs text-[#71717A] tracking-wider uppercase">
              {stat.label}
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white font-mono-tabular">
              {stat.value}
            </div>
            <div className="text-xs text-[#A1A1AA]">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
