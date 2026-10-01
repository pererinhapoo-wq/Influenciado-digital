import React from 'react';
import { Camera, BookOpen, Mic, Film, Compass, Award, Sparkles } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/creatorData';

export const CreatorStory: React.FC = () => {
  const milestones = [
    {
      year: "2017",
      title: "Primeiros Ensaios Analógicos",
      description: "Estreia de curtas-metragens independentes em 35mm e experimentação com ensaios visuais no YouTube."
    },
    {
      year: "2021",
      title: "Lançamento do Frequência Aberta",
      description: "Criação do podcast de arquitetura, estética e cultura contemporânea, atingindo o Top 5 Brasil no Spotify."
    },
    {
      year: "2024",
      title: "Consolidação & Monolito Editorial",
      description: "Atingimento de 1.5M de audiência integrada e publicação do livro de arte fotográfica com tiragem esgotada."
    },
    {
      year: "2026",
      title: "Série Internacional 'Caderno de Campo'",
      description: "Produção de documentários imersivos em 4K explorando ofícios ancestrais e o futuro das cidades."
    }
  ];

  const focusAreas = [
    {
      icon: Film,
      title: "Cinema Ensaístico",
      description: "Vídeos longform de 20 a 45 minutos que combinam rigor estético, narrativa literária e trilha sonora imersiva."
    },
    {
      icon: Mic,
      title: "Diálogos em Profundidade",
      description: "Entrevistas sem cortes apressados com figuras que moldam o pensamento estético, tecnológico e humano."
    },
    {
      icon: BookOpen,
      title: "Publicações Impressas & Textos",
      description: "Newsletters semanais com mais de 67% de taxa de abertura e livros de fotografia em tiragens de colecionador."
    },
    {
      icon: Camera,
      title: "Pesquisa Visual & Fotografia",
      description: "Documentação de territórios urbanos, arquitetura brutalista e o impacto dos espaços na psicologia coletiva."
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular mb-2">
            01 — Biografia & Filosofia de Trabalho
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            A Construção de uma Voz Autoral
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#A1A1AA] max-w-md">
          Não se trata apenas de criar vídeos ou posts, mas de fundar um território digital onde a contemplação e o rigor têm valor perene.
        </p>
      </div>

      {/* Main Split Story Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Visual Archive & Quote (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative rounded-lg overflow-hidden border border-[#272A36] bg-[#14151B] group shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={CREATOR_PROFILE.workspaceImage}
                alt="Mesa de trabalho e pesquisa criativa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-103 transition-transform duration-700"
              />
            </div>
            <div className="p-5 border-t border-[#232631]">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D4A373] mb-1">
                Acervo de Criação
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Roteiros manuscritos, negativos fotográficos e gravadores de campo: o processo físico que antecede cada lançamento digital.
              </p>
            </div>
          </div>

          {/* Editorial Manifesto Quote Box */}
          <div className="p-6 md:p-8 rounded-lg bg-[#14161E] border border-[#262835] relative">
            <span className="font-editorial text-5xl text-[#D4A373]/30 leading-none select-none absolute top-4 left-4">“</span>
            <blockquote className="relative z-10 pt-2 font-editorial italic text-lg sm:text-xl text-[#E4E4E7] leading-relaxed">
              {CREATOR_PROFILE.editorialQuote}
            </blockquote>
            <div className="mt-4 pt-4 border-t border-[#232530] flex items-center justify-between text-xs text-[#71717A]">
              <span>Valentim Rocha</span>
              <span>Manifesto do Canal</span>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline & Focus Areas (7 cols) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Narrative text block */}
          <div className="space-y-4 text-base text-[#B4B4BC] leading-relaxed">
            <p>
              Ao longo de quase uma década na internet, recusei a fórmula das manchetes sensacionalistas e dos vídeos descartáveis de 60 segundos. Em vez disso, dediquei minha energia a investigar como a arte, a arquitetura e as transformações sociais moldam a experiência da vida moderna.
            </p>
            <p>
              O resultado é uma comunidade extremamente engajada de pensadores, profissionais do mercado criativo, arquitetos, diretores e pessoas que buscam narrativas que permaneçam com elas muito tempo depois do término da reprodução.
            </p>
          </div>

          {/* Focus Areas Grid */}
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#71717A] font-mono-tabular">
              Campos de Investigação & Formatos
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-[#121319] border border-[#22242F] hover:border-[#383C4D] transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-[#E07A5F] mb-3" />
                    <h3 className="font-display font-semibold text-sm text-white mb-1.5">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#8E8E98] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Editorial Timeline (Marcos) */}
          <div className="space-y-4 pt-4">
            <div className="text-xs uppercase tracking-widest text-[#71717A] font-mono-tabular">
              Marcos da Jornada Criativa
            </div>
            <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#252835]">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-[#E07A5F] group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono-tabular font-bold text-xs text-[#D4A373]">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#8E8E98] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
