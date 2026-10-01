import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Share2, ExternalLink, Clock, Calendar, CheckCircle2, Bookmark, Eye } from 'lucide-react';
import { ContentItem } from '../data/creatorData';

interface ContentModalProps {
  content: ContentItem | null;
  onClose: () => void;
}

export const ContentModal: React.FC<ContentModalProps> = ({ content, onClose }) => {
  if (!content) return null;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111218] border border-[#262A3B] rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-4 sm:px-6 border-b border-[#202330] bg-[#14161F] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#D4A373] uppercase tracking-wider">
            <span>{content.category}</span>
            <span aria-hidden="true" className="text-[#3F4354]">·</span>
            <span className="text-[#A1A1AA]">{content.platform}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-[#8E8E98] hover:text-white rounded-md transition-colors"
              title="Copiar Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#8E8E98] hover:text-white rounded-md transition-colors cursor-pointer"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          {/* Simulated Media Player Area */}
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
            <img
              src={content.coverImage}
              alt={content.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Simulated Player Controls */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-between items-center text-xs text-white/80">
                <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-md font-mono-tabular">
                  Master 4K Cinema DCI
                </span>
                <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-md font-mono-tabular">
                  {content.duration}
                </span>
              </div>

              {/* Big Center Play / Pause toggle */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#E07A5F] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Progress bar and audio controls */}
              <div className="space-y-2 bg-gradient-to-t from-black/80 to-transparent p-2 rounded">
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-[#E07A5F] transition-all duration-300"
                    style={{ width: isPlaying ? '38%' : '8%' }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-white/90">
                  <span className="font-mono-tabular text-[11px]">
                    {isPlaying ? '12:45' : '02:30'} / {content.duration}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1 hover:text-[#E07A5F] transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] text-[#A1A1AA]">
                      {content.metrics}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Text Content & Synopsis */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-[#71717A]">
                <span>Lançado em {content.releaseDate}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#D4A373]">{content.metrics}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                {content.title}
              </h2>
            </div>

            {content.accentQuote && (
              <div className="p-4 rounded-lg bg-[#161822] border-l-2 border-[#E07A5F] font-editorial italic text-base text-[#D4D4D8]">
                "{content.accentQuote}"
              </div>
            )}

            <div className="space-y-4 text-sm text-[#A1A1AA] leading-relaxed">
              <p>{content.summary}</p>
              <p>
                Esta produção foi concebida como parte da investigação estética continuada de Valentim Rocha, gravada com lentes prime cinematográficas e captação de áudio binaural para proporcionar uma experiência auditiva e visual imersiva.
              </p>
            </div>

            {/* Bottom Direct CTA */}
            <div className="pt-6 border-t border-[#202330] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#71717A]">
                Disponível na íntegra no canal oficial do {content.platform}
              </div>

              <a
                href={content.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-colors cursor-pointer"
              >
                <span>Assistir no {content.platform}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
