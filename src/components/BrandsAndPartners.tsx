import React from 'react';
import { DEMO_BRANDS, CREATOR_PROFILE } from '../data/creatorData';
import { Building2, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface BrandsAndPartnersProps {
  onOpenCommercialContact: () => void;
}

export const BrandsAndPartners: React.FC<BrandsAndPartnersProps> = ({ onOpenCommercialContact }) => {
  return (
    <section id="marcas" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular mb-2">
            05 — Ativações & Parcerias Comerciais
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Colaborações com Marcas
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#A1A1AA] max-w-md">
          Formatos customizados onde a identidade da marca se integra organicamente a narrativas de alto padrão estético, sem clichês publicitários.
        </p>
      </div>

      {/* Commercial Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-5 rounded-lg bg-[#121319] border border-[#20222D]">
          <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#D4A373] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#E07A5F]" />
            <span>Filtro de Relevância</span>
          </div>
          <h3 className="font-display font-semibold text-white text-sm mb-1">
            Alinhamento Ético & Estético
          </h3>
          <p className="text-xs text-[#8E8E98] leading-relaxed">
            Aceitamos apenas marcas que compartilham valores de excelência, sustentabilidade e respeito à inteligência do consumidor.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-[#121319] border border-[#20222D]">
          <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#D4A373] mb-2">
            <Sparkles className="w-4 h-4 text-[#E07A5F]" />
            <span>Roteiro 100% Autoral</span>
          </div>
          <h3 className="font-display font-semibold text-white text-sm mb-1">
            Produção Cinematográfica Nativa
          </h3>
          <p className="text-xs text-[#8E8E98] leading-relaxed">
            Nada de briefings engessados lidos na tela: criamos pontes conceituais legítimas entre o seu produto e o tema do vídeo.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-[#121319] border border-[#20222D]">
          <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#D4A373] mb-2">
            <Award className="w-4 h-4 text-[#E07A5F]" />
            <span>Longevidade do Conteúdo</span>
          </div>
          <h3 className="font-display font-semibold text-white text-sm mb-1">
            Ativo com Cauda Longa
          </h3>
          <p className="text-xs text-[#8E8E98] leading-relaxed">
            Ensaios continuam sendo assistidos e convertendo por anos, ao contrário do ciclo de 24 horas dos stories tradicionais.
          </p>
        </div>
      </div>

      {/* Brand Cases Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEMO_BRANDS.map((brand) => (
          <div
            key={brand.id}
            className="p-6 md:p-8 rounded-xl bg-[#13141B] border border-[#22242F] hover:border-[#333745] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-xl text-white">
                      {brand.name}
                    </h3>
                    <span className="text-[10px] text-[#A1A1AA] uppercase font-mono-tabular bg-[#1C1F28] px-2 py-0.5 rounded">
                      Demo Editável
                    </span>
                  </div>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {brand.segment} · {brand.year}
                  </p>
                </div>
                <span className="font-mono-tabular text-xs text-[#D4A373]">
                  {brand.projectType}
                </span>
              </div>

              {/* Quote from brand director */}
              <div className="p-4 rounded-lg bg-[#171922] border-l-2 border-[#E07A5F] text-xs font-editorial italic text-[#D4D4D8] leading-relaxed">
                "{brand.quote}"
              </div>

              {/* Deliverables summary */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#71717A]">
                  Escopo Realizado
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  {brand.deliverables}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1F212A] flex items-center justify-between text-xs text-[#71717A]">
              <span>Case Validado</span>
              <button
                onClick={onOpenCommercialContact}
                className="text-[#E07A5F] hover:text-white font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Solicitar Proposta Similar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
