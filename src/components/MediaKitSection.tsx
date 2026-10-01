import React, { useState } from 'react';
import { MEDIA_KIT_DATA, CREATOR_PROFILE } from '../data/creatorData';
import { Users, BarChart3, Globe, Award, Download, ArrowUpRight, Calculator, Check, CheckCircle2 } from 'lucide-react';

interface MediaKitSectionProps {
  onOpenCommercialContact: () => void;
  isLoading?: boolean;
}

export const MediaKitSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-16" aria-busy="true" aria-label="Carregando dados do Mídia Kit">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="w-52 h-3 bg-[#202330] rounded-sm" />
          <div className="w-64 sm:w-80 h-9 sm:h-11 bg-[#232736] rounded-md" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="w-44 h-9 bg-[#1B1E29] rounded-md" />
          <div className="w-40 h-9 bg-[#2A262C] rounded-md" />
        </div>
      </div>

      {/* 4 Overview Metrics Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4].map((idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-xl bg-[#13141B] border border-[#22242F] space-y-2.5 shadow-lg"
          >
            <div className="w-24 h-3 bg-[#202330] rounded" />
            <div className="w-28 h-8 bg-[#252A39] rounded" />
            <div className="w-36 h-3 bg-[#1C1F2B] rounded" />
          </div>
        ))}
      </div>

      {/* Demographics Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Age Breakdown (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#13141B] border border-[#22242F] space-y-6">
          <div className="flex items-center justify-between border-b border-[#20222D] pb-4">
            <div className="w-48 h-5 bg-[#232736] rounded" />
            <div className="w-32 h-3.5 bg-[#202330] rounded" />
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-3 bg-[#202330] rounded" />
                  <div className="w-8 h-3 bg-[#252A39] rounded" />
                </div>
                <div className="w-full h-2 bg-[#1C1E26] rounded-full overflow-hidden">
                  <div className="h-full bg-[#242938] rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <div className="w-full h-3 bg-[#1B1E29] rounded" />
            <div className="w-3/4 h-3 bg-[#1B1E29] rounded mt-1.5" />
          </div>
        </div>

        {/* Geographic & Audience Interests (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#13141B] border border-[#22242F] space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#20222D] pb-4 mb-6">
              <div className="w-48 h-5 bg-[#232736] rounded" />
              <div className="w-28 h-3.5 bg-[#202330] rounded" />
            </div>

            <div className="space-y-3.5">
              {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#1A1C24] last:border-none">
                  <div className="w-40 h-3 bg-[#202330] rounded" />
                  <div className="w-10 h-3 bg-[#252A39] rounded" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#20222D] space-y-3">
            <div className="w-44 h-3 bg-[#202330] rounded" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-6 bg-[#1A1C26] border border-[#262836] rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simulator Skeleton */}
      <div className="p-6 sm:p-10 rounded-2xl bg-[#13141B] border border-[#242736] space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#202330] pb-6">
          <div className="space-y-2">
            <div className="w-64 h-3 bg-[#202330] rounded" />
            <div className="w-72 sm:w-96 h-7 bg-[#232736] rounded" />
          </div>
          <div className="w-64 h-8 bg-[#1B1E29] rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-5 rounded-xl bg-[#161822] border border-[#222532] space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1.5">
                  <div className="w-28 h-3 bg-[#202330] rounded" />
                  <div className="w-48 h-5 bg-[#252A39] rounded" />
                </div>
                <div className="w-5 h-5 rounded bg-[#252938]" />
              </div>
              <div className="w-full h-3 bg-[#1C1F2B] rounded" />
              <div className="space-y-1 pt-1">
                <div className="w-3/4 h-2.5 bg-[#1F222F] rounded" />
                <div className="w-2/3 h-2.5 bg-[#1F222F] rounded" />
              </div>
              <div className="pt-3 border-t border-[#202330] flex justify-between">
                <div className="w-24 h-3 bg-[#1E212D] rounded" />
                <div className="w-32 h-3 bg-[#252A39] rounded" />
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-[#111218] border border-[#202330] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 w-full sm:w-2/3">
            <div className="w-40 h-3 bg-[#202330] rounded" />
            <div className="w-72 h-5 bg-[#252A39] rounded" />
            <div className="w-60 h-3 bg-[#1C1F2B] rounded" />
          </div>
          <div className="w-full sm:w-52 h-10 bg-[#2C2325] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export const MediaKitSection: React.FC<MediaKitSectionProps> = ({
  onOpenCommercialContact,
  isLoading = false
}) => {
  // Interactive Campaign Simulator State
  const [selectedFormats, setSelectedFormats] = useState<string[]>(['fmt-1']);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const toggleFormat = (id: string) => {
    if (selectedFormats.includes(id)) {
      if (selectedFormats.length > 1) {
        setSelectedFormats(selectedFormats.filter((f) => f !== id));
      }
    } else {
      setSelectedFormats([...selectedFormats, id]);
    }
  };

  const handleDownloadSummary = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
    // Simulate opening print or quick view
    window.print();
  };

  return (
    <section id="mediakit" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      {isLoading ? (
        <MediaKitSkeleton />
      ) : (
        <>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular mb-2">
                06 — Inteligência de Audiência & Dados Comerciais
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Mídia Kit Oficial 2026
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadSummary}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#E4E4E7] bg-[#161820] hover:bg-[#20232E] border border-[#2D313E] rounded-md transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>{downloadSuccess ? 'Documento Pronto / Imprimir' : 'Exportar Resumo (PDF/Print)'}</span>
              </button>

              <button
                onClick={onOpenCommercialContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-colors cursor-pointer"
              >
                <span>Consultar Disponibilidade</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Verified Overview Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {MEDIA_KIT_DATA.overviewMetrics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#13141B] border border-[#22242F] space-y-1 shadow-lg"
              >
                <div className="text-xs text-[#71717A] tracking-wider uppercase font-mono-tabular">
                  {item.label}
                </div>
                <div className="font-display text-3xl font-extrabold text-white font-mono-tabular">
                  {item.value}
                </div>
                <div className="text-xs text-[#A1A1AA] pt-1">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Demographics & Public Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Age Breakdown (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#13141B] border border-[#22242F] space-y-6">
              <div className="flex items-center justify-between border-b border-[#20222D] pb-4">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E07A5F]" />
                  <span>Distribuição por Faixa Etária</span>
                </h3>
                <span className="text-xs font-mono-tabular text-[#D4A373]">
                  76% entre 25 e 44 anos
                </span>
              </div>

              <div className="space-y-4">
                {MEDIA_KIT_DATA.demographics.age.map((group, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                      <span className="font-medium text-white">{group.range}</span>
                      <span className="font-mono-tabular font-bold">{group.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#1C1E26] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4A373] to-[#E07A5F] rounded-full transition-all duration-700"
                        style={{ width: `${group.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-[#71717A] leading-relaxed">
                Audiência em fase de alta autonomia financeira, poder de decisão e investimento em produtos de excelência técnica e cultural.
              </div>
            </div>

            {/* Geographic & Audience Interests (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#13141B] border border-[#22242F] space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#20222D] pb-4 mb-6">
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#D4A373]" />
                    <span>Geografia & Poder Aquisitivo</span>
                  </h3>
                  <span className="text-xs font-mono-tabular text-[#8E8E98]">
                    Nacional & Internacional
                  </span>
                </div>

                <div className="space-y-3">
                  {MEDIA_KIT_DATA.demographics.geography.map((geo, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-[#1A1C24] last:border-none">
                      <span className="text-[#C4C4CC]">{geo.location}</span>
                      <span className="font-mono-tabular font-semibold text-white">{geo.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#20222D] space-y-2">
                <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#71717A]">
                  Campos de Maior Afinidade do Público
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#D4A373]">
                  {MEDIA_KIT_DATA.demographics.interests.map((int, i) => (
                    <span key={i} className="bg-[#1A1C26] px-2.5 py-1 rounded text-[#C5C5CE] border border-[#262836]">
                      {int.area} <span className="font-mono-tabular text-[#E07A5F]">({int.match})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Campaign Simulator & Formats */}
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#151722] to-[#101117] border border-[#262A38] shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#232735] pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#E07A5F] mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Simulador de Entregáveis para Agências & Marcas</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Formatos de Parceria & Escopo Integrado
                </h3>
              </div>
              <p className="text-xs text-[#8E8E98] max-w-sm">
                Selecione os formatos desejados para simular um pacote de campanha personalizado e solicitar disponibilidade de calendário.
              </p>
            </div>

            {/* Formats Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MEDIA_KIT_DATA.partnershipFormats.map((fmt) => {
                const isSelected = selectedFormats.includes(fmt.id);
                return (
                  <div
                    key={fmt.id}
                    onClick={() => toggleFormat(fmt.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1C1F2B] border-[#E07A5F] shadow-lg shadow-[#E07A5F]/5'
                        : 'bg-[#13141B] border-[#22242F] hover:border-[#343847]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#D4A373]">
                            {fmt.channel}
                          </span>
                          <h4 className="font-display font-bold text-base text-white mt-0.5">
                            {fmt.title}
                          </h4>
                        </div>
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-[#E07A5F] border-[#E07A5F] text-white'
                              : 'border-[#3F4354] bg-[#14151C]'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        {fmt.scope}
                      </p>

                      <div className="pt-2 space-y-1">
                        {fmt.deliverables.map((d, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-[#8E8E98]">
                            <span className="w-1 h-1 rounded-full bg-[#D4A373]" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#232635] flex items-center justify-between text-[11px] font-mono-tabular text-[#A1A1AA]">
                      <span>Alcance Projetado:</span>
                      <span className="text-white font-semibold">{fmt.reachEstimate}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Simulator Summary Box */}
            <div className="p-6 rounded-xl bg-[#111218] border border-[#252838] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs text-[#71717A] uppercase tracking-wider font-mono-tabular">
                  Pacote Selecionado: {selectedFormats.length} {selectedFormats.length === 1 ? 'formato ativo' : 'formatos ativos'}
                </div>
                <div className="font-display text-lg font-semibold text-white">
                  Pronto para receber briefing e alinhar datas de gravação
                </div>
                <div className="text-xs text-[#8E8E98]">
                  Trabalhamos com limites rigorosos de 2 marcas patrocinadoras por trimestre.
                </div>
              </div>

              <button
                onClick={onOpenCommercialContact}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-all whitespace-nowrap cursor-pointer shadow-md"
              >
                Enviar Briefing para Este Pacote
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

