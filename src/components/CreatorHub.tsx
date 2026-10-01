import React, { useState } from 'react';
import {
  Film,
  Layers,
  BarChart2,
  Briefcase,
  Activity,
  Send,
  Search,
  ExternalLink,
  Play,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Compass,
  Radio,
  FileText,
  X,
  Share2,
  ChevronRight
} from 'lucide-react';
import {
  CREATOR_PROFILE,
  FEATURED_CONTENTS,
  RECENT_CONTENTS,
  CREATOR_PLATFORMS,
  CREATOR_PROJECTS,
  DEMO_BRANDS,
  MEDIA_KIT_DATA,
  CURRENT_LIVE_STATUS,
  ContentItem,
  ProjectItem
} from '../data/creatorData';

interface CreatorHubProps {
  initialTab?: string;
  onSelectContent: (content: ContentItem) => void;
  onOpenProjectDetails: (project: ProjectItem) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const CreatorHub: React.FC<CreatorHubProps> = ({
  initialTab = 'conteudos',
  onSelectContent,
  onOpenProjectDetails,
  onNavigateToSection
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Quick commercial brief within hub state
  const [briefBrand, setBriefBrand] = useState('');
  const [briefEmail, setBriefEmail] = useState('');
  const [briefFormat, setBriefFormat] = useState('Ensaio Audiovisual Longform');
  const [briefSent, setBriefSent] = useState(false);

  const allContents = [...FEATURED_CONTENTS, ...RECENT_CONTENTS];
  const filteredContents = allContents.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabs = [
    { id: 'conteudos', label: 'Conteúdos', icon: Film, count: allContents.length },
    { id: 'plataformas', label: 'Plataformas', icon: Radio, count: CREATOR_PLATFORMS.length },
    { id: 'projetos', label: 'Projetos', icon: Layers, count: CREATOR_PROJECTS.length },
    { id: 'mediakit', label: 'Media Kit', icon: BarChart2 },
    { id: 'parcerias', label: 'Parcerias', icon: Briefcase, count: DEMO_BRANDS.length },
    { id: 'projetos_atuais', label: 'Radar Ao Vivo', icon: Activity, isLive: true },
    { id: 'contato_comercial', label: 'Briefing Express', icon: Send }
  ];

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSendBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefBrand || !briefEmail) return;
    setBriefSent(true);
    setTimeout(() => {
      setBriefSent(false);
      setBriefBrand('');
      setBriefEmail('');
    }, 4000);
  };

  return (
    <section id="central" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      {/* Editorial Pill/Headline lockup */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#E07A5F] font-mono-tabular mb-2">
            <Compass className="w-4 h-4" />
            <span>Recurso Premium Integrado</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Central do Criador
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] mt-2 max-w-xl">
            O hub de comando digital que unifica produção, métricas, projetos ativos e canal direto para marcas.
          </p>
        </div>

        {/* Live Status Tag */}
        <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#14161E] border border-[#262836] text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="space-y-0.5">
            <span className="text-[#8E8E98] uppercase text-[10px] tracking-wider block font-mono-tabular">
              Status de Produção
            </span>
            <span className="text-white font-medium">
              Gravando Série T2 em Portugal
            </span>
          </div>
        </div>
      </div>

      {/* Main Integrated Hub Container */}
      <div className="rounded-2xl bg-[#111218] border border-[#232635] shadow-2xl overflow-hidden flex flex-col">
        {/* Hub Tab Bar (Scrollable on mobile, clear active states) */}
        <div className="border-b border-[#20222F] bg-[#14161F] p-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-1.5">
          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#252838] text-white shadow-sm font-semibold'
                      : 'text-[#8E8E98] hover:text-white hover:bg-[#1A1C26]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E07A5F]' : 'text-[#71717A]'}`} />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className="text-[10px] font-mono-tabular px-1.5 py-0.2 rounded bg-black/40 text-[#A1A1AA]">
                      {tab.count}
                    </span>
                  )}
                  {tab.isLive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleCopyShare}
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#8E8E98] hover:text-white px-3 py-1.5 rounded hover:bg-[#1B1D28] transition-colors"
            title="Compartilhar Link da Central"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copiado!' : 'Compartilhar'}</span>
          </button>
        </div>

        {/* Tab 1: Conteúdos (Searchable archive & launchpad) */}
        {activeTab === 'conteudos' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A]" />
                <input
                  type="text"
                  placeholder="Buscar por tema, categoria ou formato..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                />
              </div>
              <div className="text-xs text-[#8E8E98] font-mono-tabular">
                Exibindo {filteredContents.length} produções catalogadas
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredContents.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectContent(item)}
                  className="p-4 rounded-xl bg-[#151722] border border-[#242736] hover:border-[#383C4F] transition-all cursor-pointer flex flex-col justify-between group space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0 bg-black">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono-tabular text-[#D4A373] uppercase">
                        <span>{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.duration}</span>
                      </div>
                      <h4 className="font-display font-semibold text-xs text-white group-hover:text-[#E07A5F] transition-colors truncate mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#71717A] line-clamp-1 mt-0.5">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#1F212E] flex items-center justify-between text-[11px] text-[#8E8E98]">
                    <span>{item.platform}</span>
                    <span className="text-white group-hover:text-[#E07A5F] flex items-center gap-1 font-medium">
                      <span>Assistir / Ler</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Plataformas */}
        {activeTab === 'plataformas' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CREATOR_PLATFORMS.map((plat) => (
                <div
                  key={plat.id}
                  className="p-5 rounded-xl bg-[#151722] border border-[#242736] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-white text-base">
                        {plat.name}
                      </span>
                      <span className="text-xs font-mono-tabular font-semibold text-[#D4A373]">
                        {plat.followers.split(' ')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-[#8E8E98] leading-relaxed">
                      {plat.focus}
                    </p>
                  </div>

                  <a
                    href={plat.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pt-3 border-t border-[#1F212E] text-xs font-semibold text-white hover:text-[#E07A5F] flex items-center justify-between group"
                  >
                    <span>Conectar Canal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Projetos */}
        {activeTab === 'projetos' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CREATOR_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onOpenProjectDetails(proj)}
                  className="p-5 rounded-xl bg-[#151722] border border-[#242736] hover:border-[#3A3F54] transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#D4A373] font-mono-tabular uppercase tracking-wider text-[11px]">
                        {proj.category}
                      </span>
                      <span className="text-[11px] text-[#A1A1AA] bg-black/40 px-2 py-0.5 rounded font-mono-tabular">
                        {proj.status}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-[#E07A5F] transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-[#8E8E98] leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#20222E] flex items-center justify-between text-xs text-[#E07A5F] font-semibold">
                    <span>Ver Ficha Técnica</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Media Kit Consolidation */}
        {activeTab === 'mediakit' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {MEDIA_KIT_DATA.overviewMetrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#151722] border border-[#242736]">
                  <div className="text-[11px] uppercase font-mono-tabular text-[#71717A]">
                    {m.label}
                  </div>
                  <div className="font-display font-bold text-2xl text-white font-mono-tabular mt-1">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] mt-0.5">
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#161822] border border-[#262A3A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white">
                  Precisa de Dados Demográficos Detalhados?
                </h4>
                <p className="text-xs text-[#8E8E98]">
                  Consulte a seção completa de Mídia Kit no site ou solicite o deck comercial em PDF.
                </p>
              </div>
              <button
                onClick={() => onNavigateToSection('mediakit')}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                Abrir Mídia Kit Completo
              </button>
            </div>
          </div>
        )}

        {/* Tab 5: Parcerias & Marcas */}
        {activeTab === 'parcerias' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DEMO_BRANDS.map((brand) => (
                <div key={brand.id} className="p-5 rounded-xl bg-[#151722] border border-[#242736] space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-white text-base">
                      {brand.name}
                    </h4>
                    <span className="text-[10px] text-[#D4A373] uppercase font-mono-tabular bg-[#1A1C24] px-2 py-0.5 rounded">
                      {brand.year}
                    </span>
                  </div>
                  <p className="text-xs font-editorial italic text-[#C4C4CC]">
                    "{brand.quote}"
                  </p>
                  <div className="text-[11px] text-[#71717A]">
                    {brand.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Radar Ao Vivo (Projetos Atuais) */}
        {activeTab === 'projetos_atuais' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#151722] border border-[#242736] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Em Produção Agora</span>
                </div>
                <h4 className="font-display font-bold text-base text-white">
                  {CURRENT_LIVE_STATUS.activeProduction}
                </h4>
                <p className="text-xs text-[#8E8E98] leading-relaxed">
                  Trabalho de campo dedicado à captação em formato anamórfico e entrevistas com mestres de ofícios raros.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#151722] border border-[#242736] space-y-3">
                <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#D4A373]">
                  Disponibilidade Comercial
                </div>
                <h4 className="font-display font-bold text-base text-white">
                  {CURRENT_LIVE_STATUS.availabilityNextQuarter}
                </h4>
                <p className="text-xs text-[#8E8E98] leading-relaxed">
                  Para preservar a exclusividade editorial, mantemos slots estritamente reduzidos para marcas e palestras presenciais.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#151722] border border-[#242736] space-y-2">
                <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#71717A]">
                  Leituras & Referências no Momento
                </div>
                <p className="text-xs text-[#C4C4CC]">
                  {CURRENT_LIVE_STATUS.currentReading}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#151722] border border-[#242736] space-y-2">
                <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#71717A]">
                  Equipamento Principal em Uso
                </div>
                <p className="text-xs text-[#C4C4CC]">
                  {CURRENT_LIVE_STATUS.currentGear}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 7: Contato Comercial / Briefing Express */}
        {activeTab === 'contato_comercial' && (
          <div className="p-6 sm:p-10 max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <h4 className="font-display font-bold text-xl text-white">
                Briefing Executivo para Marcas
              </h4>
              <p className="text-xs text-[#8E8E98]">
                Canal exclusivo para agências e marcas com resposta direta em até 48 horas úteis.
              </p>
            </div>

            {briefSent ? (
              <div className="p-6 rounded-xl bg-[#161B26] border border-[#2B354D] text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-display font-bold text-white text-base">
                  Briefing Express Recebido!
                </h5>
                <p className="text-xs text-[#A1A1AA]">
                  Nossa equipe de produção e curadoria entrará em contato através de {briefEmail}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendBrief} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Nome da Empresa / Marca *
                  </label>
                  <input
                    type="text"
                    required
                    value={briefBrand}
                    onChange={(e) => setBriefBrand(e.target.value)}
                    placeholder="Ex: Volvo, Leica, Estúdio Alfa..."
                    className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    E-mail Corporativo do Responsável *
                  </label>
                  <input
                    type="email"
                    required
                    value={briefEmail}
                    onChange={(e) => setBriefEmail(e.target.value)}
                    placeholder="contato@empresa.com"
                    className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Formato de Interesse
                  </label>
                  <select
                    value={briefFormat}
                    onChange={(e) => setBriefFormat(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white focus:outline-none focus:border-[#E07A5F]"
                  >
                    <option value="Ensaio Audiovisual Longform">Ensaio Audiovisual Longform (YouTube)</option>
                    <option value="Capsula Multiplataforma Integrada">Cápsula Multiplataforma Integrada</option>
                    <option value="Episodio Especial no Podcast">Episódio Especial no Podcast</option>
                    <option value="Palestra & Presenca VIP">Palestra & Presença VIP</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-lg transition-colors cursor-pointer"
                >
                  Enviar Briefing Express
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
