import React, { useState } from 'react';
import { RECENT_CONTENTS, ContentItem } from '../data/creatorData';
import { Play, ArrowUpRight, Filter, Sparkles, ExternalLink } from 'lucide-react';

interface RecentContentProps {
  onSelectContent: (content: ContentItem) => void;
}

export const RecentContent: React.FC<RecentContentProps> = ({ onSelectContent }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Vídeo', 'Ensaio Visual', 'Podcast', 'Artigo'];

  const filteredContents = activeCategory === 'Todos'
    ? RECENT_CONTENTS
    : RECENT_CONTENTS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      {/* Top Filter Bar with segmented buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#71717A] font-mono-tabular mb-1">
            Arquivo Cronológico
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Lançamentos Recentes
          </h3>
        </div>

        {/* Functional filter tabs (Zero-pill compliant: functional button controls) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#14151C] border border-[#232530] rounded-lg overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#272B38] text-white shadow-sm font-semibold'
                  : 'text-[#8E8E98] hover:text-white hover:bg-[#1C1E26]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Recent Works */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredContents.map((content) => (
          <div
            key={content.id}
            onClick={() => onSelectContent(content)}
            className="group cursor-pointer rounded-xl bg-[#13141B] border border-[#22242F] hover:border-[#3A3E4F] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-black/60"
          >
            {/* Visual Header */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={content.coverImage}
                alt={content.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13141B] via-transparent to-transparent" />

              <div className="absolute top-3 left-3 text-[11px] font-mono-tabular uppercase tracking-wider text-[#D4A373] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                {content.category}
              </div>

              <div className="absolute top-3 right-3 text-[11px] font-mono-tabular text-white/80 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                {content.duration}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#71717A]">
                  <span>{content.platform}</span>
                  <span aria-hidden="true">·</span>
                  <span>{content.releaseDate}</span>
                </div>

                <h4 className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-[#E07A5F] transition-colors line-clamp-2 leading-snug">
                  {content.title}
                </h4>

                <p className="text-xs text-[#8E8E98] line-clamp-2 leading-relaxed">
                  {content.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E2028] flex items-center justify-between text-xs text-[#71717A]">
                <span className="font-mono-tabular text-[11px] text-[#D4A373]">
                  {content.metrics}
                </span>
                <span className="text-[#A1A1AA] group-hover:text-white flex items-center gap-1 font-medium transition-colors">
                  <span>Acessar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
