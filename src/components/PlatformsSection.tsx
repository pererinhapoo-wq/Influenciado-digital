import React from 'react';
import { CREATOR_PLATFORMS } from '../data/creatorData';
import { Youtube, Instagram, Radio, Mail, Smartphone, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

export const PlatformsSection: React.FC = () => {
  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'youtube':
        return Youtube;
      case 'spotify':
        return Radio;
      case 'instagram':
        return Instagram;
      case 'substack':
        return Mail;
      case 'tiktok':
        return Smartphone;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="plataformas" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular mb-2">
            03 — Ecossistema de Distribuição
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Presença Digital Estratégica
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#A1A1AA] max-w-md">
          Cada rede possui uma linguagem nativa, um propósito específico e uma frequência planejada para respeitar o tempo da audiência.
        </p>
      </div>

      {/* Bespoke Platform Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CREATOR_PLATFORMS.map((platform) => {
          const Icon = getPlatformIcon(platform.id);
          return (
            <div
              key={platform.id}
              className="p-6 md:p-8 rounded-xl bg-[#13141B] border border-[#22242F] hover:border-[#383C4D] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              {/* Subtle accent bar at the top */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: platform.accent }}
              />

              <div className="space-y-4">
                {/* Header with icon and handle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: `${platform.accent}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: platform.accent }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white group-hover:text-[#E07A5F] transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-xs font-mono-tabular text-[#71717A]">
                        {platform.handle}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono-tabular font-bold text-xs text-[#D4A373] bg-[#1A1C24] px-2.5 py-1 rounded border border-[#2A2D3A]">
                    {platform.followers.split(' ')[0]}
                  </span>
                </div>

                {/* Cadence badge & focus description */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5 font-mono-tabular">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.accent }} />
                    <span>{platform.cadence}</span>
                  </div>

                  <p className="text-xs text-[#8E8E98] leading-relaxed">
                    {platform.focus}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#1E2028] flex items-center justify-between">
                <span className="text-xs text-[#71717A]">
                  {platform.followers}
                </span>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-white hover:text-[#E07A5F] flex items-center gap-1.5 transition-colors group/link"
                >
                  <span>Acessar Canal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
