import React from 'react';
import { Play, ArrowUpRight, Clock, Eye, Sparkles, Volume2, BookOpen } from 'lucide-react';
import { FEATURED_CONTENTS, ContentItem } from '../data/creatorData';

interface FeaturedContentProps {
  onSelectContent: (content: ContentItem) => void;
  onOpenHubWithTab: (tab: string) => void;
  isLoading?: boolean;
}

export const FeaturedContentSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-14" aria-busy="true" aria-label="Carregando conteúdos em destaque">
      {/* Section Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="w-36 h-3 bg-[#202330] rounded-sm" />
          <div className="w-64 sm:w-80 h-9 sm:h-11 bg-[#232736] rounded-md" />
        </div>
        <div className="w-36 h-5 bg-[#1E212D] rounded" />
      </div>

      {/* Asymmetric Showcase Skeleton: Big Flagship (7 cols) + Split Secondary (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Flagship Project Skeleton (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-xl overflow-hidden bg-[#14151C] border border-[#222532] flex flex-col h-full shadow-2xl">
            {/* 16:9 Image Area Skeleton */}
            <div className="relative aspect-[16/9] w-full bg-[#1A1D27] flex items-center justify-center">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-20 h-5 bg-[#252937] rounded" />
                <div className="w-14 h-5 bg-[#252937] rounded" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#262A39] flex items-center justify-center" />
              <div className="absolute bottom-4 left-4 right-4 h-3.5 bg-[#252937]/70 rounded w-2/3" />
            </div>

            {/* Details Skeleton */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-3 bg-[#222533] rounded" />
                  <div className="w-20 h-3 bg-[#222533] rounded" />
                  <div className="w-28 h-3 bg-[#252A3B] rounded" />
                </div>

                <div className="space-y-2">
                  <div className="w-5/6 h-7 bg-[#252938] rounded" />
                  <div className="w-3/5 h-7 bg-[#252938] rounded" />
                </div>

                <div className="space-y-2 pt-1">
                  <div className="w-full h-3.5 bg-[#1F222F] rounded" />
                  <div className="w-11/12 h-3.5 bg-[#1F222F] rounded" />
                  <div className="w-3/4 h-3.5 bg-[#1F222F] rounded" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F212D] flex items-center justify-between">
                <div className="w-36 h-4 bg-[#262B3B] rounded" />
                <div className="w-28 h-3 bg-[#1F222F] rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Column: 2 Cards Skeleton (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {[1, 2].map((idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#14151C] border border-[#222532] p-6 flex flex-col justify-between flex-1 space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-4 bg-[#232736] rounded" />
                  <div className="w-12 h-3.5 bg-[#1E212E] rounded" />
                </div>

                <div className="space-y-2">
                  <div className="w-4/5 h-5 bg-[#252938] rounded" />
                  <div className="w-3/5 h-5 bg-[#252938] rounded" />
                </div>

                <div className="space-y-2 pt-1">
                  <div className="w-full h-3 bg-[#1F222F] rounded" />
                  <div className="w-5/6 h-3 bg-[#1F222F] rounded" />
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1F212D] flex items-center justify-between">
                <div className="w-32 h-3 bg-[#1E212E] rounded" />
                <div className="w-16 h-3 bg-[#252A3B] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FeaturedContent: React.FC<FeaturedContentProps> = ({
  onSelectContent,
  onOpenHubWithTab,
  isLoading = false
}) => {
  const mainFeature = FEATURED_CONTENTS.find((c) => c.featured) || FEATURED_CONTENTS[0];
  const secondaryFeatures = FEATURED_CONTENTS.filter((c) => c.id !== mainFeature.id);

  return (
    <section id="conteudos" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      {isLoading ? (
        <FeaturedContentSkeleton />
      ) : (
        <>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular mb-2">
                02 — Curadoria Editorial
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Conteúdos em Destaque
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenHubWithTab('conteudos')}
                className="text-xs font-semibold text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Ver Catálogo Completo</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Asymmetric Showcase: Big Flagship + Split Secondary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Flagship Project (7 cols) */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onSelectContent(mainFeature)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-[#14151C] border border-[#252834] hover:border-[#3E4357] transition-all duration-300 flex flex-col h-full shadow-2xl"
              >
                {/* Image container with 16:9 cinematic aspect */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={mainFeature.coverImage}
                    alt={mainFeature.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-black/30 to-transparent" />

                  {/* Tag and duration overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium text-white/90">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[#D4A373] font-mono-tabular uppercase tracking-wider text-[11px]">
                      {mainFeature.category}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded font-mono-tabular text-[11px]">
                      {mainFeature.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#E07A5F] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom quote on image */}
                  {mainFeature.accentQuote && (
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-editorial italic text-white/80 line-clamp-1">
                      "{mainFeature.accentQuote}"
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#71717A]">
                      <span>{mainFeature.platform}</span>
                      <span aria-hidden="true">·</span>
                      <span>{mainFeature.releaseDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#D4A373] font-mono-tabular">{mainFeature.metrics}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#E07A5F] transition-colors leading-snug">
                      {mainFeature.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {mainFeature.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#20222B] flex items-center justify-between text-xs text-[#E07A5F] font-semibold">
                    <span className="flex items-center gap-2">
                      <span>Abrir Ensaio Completo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] text-[#71717A] uppercase font-mono-tabular">
                      Obra Principal 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Column: 2 Curated Works with Distinct Format (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryFeatures.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectContent(item)}
                  className="group cursor-pointer rounded-xl bg-[#14151C] border border-[#252834] hover:border-[#3E4357] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between flex-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#71717A]">
                      <div className="flex items-center gap-2">
                        {item.category === 'Podcast' ? (
                          <Volume2 className="w-4 h-4 text-[#D4A373]" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-[#D4A373]" />
                        )}
                        <span className="font-medium text-[#D4A373] uppercase tracking-wider text-[11px]">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-mono-tabular text-[11px] text-[#8E8E98]">
                        {item.duration}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white group-hover:text-[#E07A5F] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#8E8E98] line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#20222B] flex items-center justify-between text-xs text-[#A1A1AA]">
                    <span className="text-[11px] text-[#71717A]">{item.platform} · {item.releaseDate}</span>
                    <span className="font-semibold text-white group-hover:text-[#E07A5F] flex items-center gap-1">
                      <span>Explorar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

