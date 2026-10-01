export interface ContentItem {
  id: string;
  title: string;
  category: 'Vídeo' | 'Ensaio Visual' | 'Podcast' | 'Artigo';
  platform: 'YouTube' | 'Substack' | 'Spotify' | 'Instagram';
  releaseDate: string;
  metrics: string;
  duration?: string;
  summary: string;
  coverImage: string;
  accentQuote?: string;
  featured?: boolean;
  videoEmbedId?: string;
  linkUrl: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  handle: string;
  followers: string;
  cadence: string;
  focus: string;
  url: string;
  accent: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  status: 'Concluído' | 'Em Andamento' | 'Temporada Ativa' | 'Edição Especial';
  description: string;
  highlights: string[];
  image: string;
  externalLink?: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  segment: string;
  projectType: string;
  quote: string;
  deliverables: string;
  year: string;
}

export interface MediaKitMetric {
  label: string;
  value: string;
  subtext: string;
  context: string;
}

export const CREATOR_PROFILE = {
  name: "Valentim Rocha",
  displayRole: "Diretor Criativo & Ensaísta Audiovisual",
  location: "São Paulo · Lisboa",
  positioningStatement: "Narrativas visuais de alta retenção que investigam estética, arquitetura, tecnologia e o comportamento humano contemporâneo.",
  shortBio: "Com mais de 9 anos dedicados à interseção entre o cinema documental e a cultura digital, construo ensaios em profundidade para uma comunidade engajada de mais de 1.8 milhão de pessoas.",
  heroPortrait: "/src/assets/images/hero_creator_portrait_1790869828583.jpg",
  workspaceImage: "/src/assets/images/creator_workspace_1790869861216.jpg",
  podcastImage: "/src/assets/images/podcast_studio_mood_1790869850935.jpg",
  documentaryImage: "/src/assets/images/doc_cinematic_cover_1790869838539.jpg",
  editorialQuote: "Em uma época dominada pela pressa algorítmica, o conteúdo verdadeiramente memorável é aquele que respeita a inteligência do espectador.",
  quickStats: [
    { label: "Audiência Total Integrada", value: "1.85M+", detail: "Engajamento qualificado e nichado" },
    { label: "Visualizações Anuais", value: "52M+", detail: "Média de 78% de taxa de conclusão" },
    { label: "Retenção em Vídeos Longos", value: "84%", detail: "Tempo médio de 24min por sessão" },
    { label: "Projetos com Marcas Globais", value: "38+", detail: "Zero descaracterização editorial" },
  ]
};

export const CREATOR_PLATFORMS: PlatformItem[] = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@valentimrocha",
    followers: "840.000 inscritos",
    cadence: "Quinzenal · Domingos às 19h",
    focus: "Ensaios audiovisuais cinematográficos de 20 a 45 minutos gravados em 4K e 35mm.",
    url: "https://youtube.com",
    accent: "#E05A47"
  },
  {
    id: "spotify",
    name: "Spotify & Apple Podcasts",
    handle: "Frequência Aberta",
    followers: "340.000 ouvintes mensais",
    cadence: "Semanal · Terças-feiras",
    focus: "Conversas aprofundadas com arquitetos, cineastas, filósofos e fundadores de estúdios.",
    url: "https://spotify.com",
    accent: "#1DB954"
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@valentim.rocha",
    followers: "510.000 seguidores",
    cadence: "Diário · Diários de Produção",
    focus: "Fotografia de rua documental, bastidores de filmagem, notas de viagem e curadoria estética.",
    url: "https://instagram.com",
    accent: "#D47C59"
  },
  {
    id: "substack",
    name: "Substack / Newsletter",
    handle: "O Caderno Marginal",
    followers: "96.000 assinantes (68% open-rate)",
    cadence: "Semanal · Sextas às 08h",
    focus: "Ensaios em prosa, referências bibliográficas, ensaios fotográficos e análises culturais.",
    url: "https://substack.com",
    accent: "#C59B27"
  },
  {
    id: "tiktok",
    name: "TikTok & Shorts",
    handle: "@valentimrocha.rec",
    followers: "420.000 seguidores",
    cadence: "3x por semana",
    focus: "Micro-ensaios narrados com ritmo editorial, recortes de pensamento e experimentos sonoros.",
    url: "https://tiktok.com",
    accent: "#5C9EAD"
  }
];

export const FEATURED_CONTENTS: ContentItem[] = [
  {
    id: "algoritmo-solidao",
    title: "A Arquitetura do Silêncio: Por Que Esquecemos Como Olhar?",
    category: "Ensaio Visual",
    platform: "YouTube",
    releaseDate: "Março 2026",
    metrics: "1.4M visualizações · 94% like-ratio",
    duration: "34 min",
    summary: "Uma investigação em cinco atos pelas capitais mais verticais do mundo sobre o impacto dos espaços construídos na nossa capacidade de contemplação solitária.",
    coverImage: "/src/assets/images/doc_cinematic_cover_1790869838539.jpg",
    accentQuote: "Construímos cidades para nos conectar, mas desenhamos interiores para nos isolar.",
    featured: true,
    linkUrl: "#"
  },
  {
    id: "conversa-estudio",
    title: "Frequência Aberta #84: A Vida Após a Era da Atenção Imediata",
    category: "Podcast",
    platform: "Spotify",
    releaseDate: "Fevereiro 2026",
    metrics: "280k reproduções completas",
    duration: "1h 18min",
    summary: "Diálogo com pesquisadores de neurociência comportamental e designers sobre a transição para plataformas lentas e produtos que não sequestram a mente.",
    coverImage: "/src/assets/images/podcast_studio_mood_1790869850935.jpg",
    accentQuote: "A calmaria será o bem mais exclusivo das próximas décadas.",
    featured: false,
    linkUrl: "#"
  },
  {
    id: "ensaio-caderno",
    title: "Caderno de Notas: 10 Princípios Para Criar Sem Queimar o Espírito",
    category: "Artigo",
    platform: "Substack",
    releaseDate: "Janeiro 2026",
    metrics: "96k leituras · 4.8k compartilhamentos",
    duration: "11 min de leitura",
    summary: "Um ensaio sobre rotinas criativas sustentáveis, o abandono da ditadura do post diário e o cultivo de trabalhos com ciclo de vida superior a uma década.",
    coverImage: "/src/assets/images/creator_workspace_1790869861216.jpg",
    accentQuote: "Quem corre atrás da efemeridade constrói relevância descartável.",
    featured: false,
    linkUrl: "#"
  }
];

export const RECENT_CONTENTS: ContentItem[] = [
  {
    id: "rec-1",
    title: "A Tirania do Aperfeiçoamento Contínuo",
    category: "Vídeo",
    platform: "YouTube",
    releaseDate: "28 Mar 2026",
    metrics: "420k views",
    duration: "26 min",
    summary: "Como a obsessão por otimizar cada segundo transformou hobbies em linhas de montagem neuróticas.",
    coverImage: "/src/assets/images/doc_cinematic_cover_1790869838539.jpg",
    linkUrl: "#"
  },
  {
    id: "rec-2",
    title: "O Retorno ao Grão: A Busca pela Imperfeição Analógica",
    category: "Ensaio Visual",
    platform: "YouTube",
    releaseDate: "15 Mar 2026",
    metrics: "610k views",
    duration: "19 min",
    summary: "Por que jovens de 20 anos estão adotando fitas cassete, filmes 35mm e teclados mecânicos pesados.",
    coverImage: "/src/assets/images/creator_workspace_1790869861216.jpg",
    linkUrl: "#"
  },
  {
    id: "rec-3",
    title: "Frequência Aberta #83: A Cidade Invisível aos Turistas",
    category: "Podcast",
    platform: "Spotify",
    releaseDate: "04 Mar 2026",
    metrics: "210k plays",
    duration: "58 min",
    summary: "Uma conversa sensorial sobre urbanismo tático, esquinas esquecidas e memória afetiva coletiva.",
    coverImage: "/src/assets/images/podcast_studio_mood_1790869850935.jpg",
    linkUrl: "#"
  },
  {
    id: "rec-4",
    title: "Manifesto da Lentidão Digital: Por Que Deixei o Twitter",
    category: "Artigo",
    platform: "Substack",
    releaseDate: "20 Fev 2026",
    metrics: "84k leitores",
    duration: "8 min de leitura",
    summary: "Reflexão sobre ecologia mental e a escolha deliberada de formatos de leitura com profundidade.",
    coverImage: "/src/assets/images/hero_creator_portrait_1790869828583.jpg",
    linkUrl: "#"
  }
];

export const CREATOR_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Caderno de Campo: O Mundo Não Editado",
    category: "Série Documental em 4K",
    year: "2025 — 2026",
    status: "Temporada Ativa",
    description: "Série itinerante gravada em 6 países com foco em comunidades de artesãos, encadernadores, mestres do ferro e construtores de instrumentos musicais.",
    highlights: ["6 Episódios lançados", "Prêmio de Melhor Narrativa Digital 2025", "Exibido no Cineclube IMS"],
    image: "/src/assets/images/doc_cinematic_cover_1790869838539.jpg",
    externalLink: "#"
  },
  {
    id: "proj-2",
    title: "Frequência Aberta: Diálogos de Fundo",
    category: "Podcast & Videocast Autoral",
    year: "2024 — Presente",
    status: "Em Andamento",
    description: "O podcast semanal que se tornou referência nacional em debates sobre design, filosofia prática, direção de arte e futuro do trabalho criativo.",
    highlights: ["Top 5 Brasil em Cultura & Arte no Spotify", "Mais de 180 horas gravadas", "Público 82% universitário e pós-graduado"],
    image: "/src/assets/images/podcast_studio_mood_1790869850935.jpg",
    externalLink: "#"
  },
  {
    id: "proj-3",
    title: "Monolito Editorial: Tomo I",
    category: "Livro & Livreto Fotográfico de Colecionador",
    year: "2025",
    status: "Concluído",
    description: "Publicação física com tiragem limitada de 1.500 cópias numeradas à mão, papel italiano couché mate, compilando fotografias e crônicas autorais.",
    highlights: ["Esgotado em 36 horas", "Curadoria impressa em papel Munken 170g", "Envio para 18 países"],
    image: "/src/assets/images/creator_workspace_1790869861216.jpg",
    externalLink: "#"
  },
  {
    id: "proj-4",
    title: "Masterclass: Narrativas de Longo Fôlego",
    category: "Programa Imersivo para Criadores",
    year: "2026",
    status: "Edição Especial",
    description: "Laboratório de 8 semanas para videomakers e ensaístas que desejam estruturar roteiros densos, pós-produção cinematográfica e monetização ética.",
    highlights: ["400 vagas preenchidas", "Metodologia autoral de roteiro estruturado", "Comunidade privada ativa"],
    image: "/src/assets/images/hero_creator_portrait_1790869828583.jpg",
    externalLink: "#"
  }
];

export const DEMO_BRANDS: PartnerBrand[] = [
  {
    id: "b-1",
    name: "Lumina Optics",
    segment: "Equipamentos Ópticos & Cinema",
    projectType: "Embaixador Anual & Co-desenvolvimento de Lente",
    quote: "A integridade estética do Valentim transformou o lançamento da nossa série anamórfica no conteúdo com maior taxa de conversão orgânica do ano.",
    deliverables: "4 Ensaios dedicados no YouTube + Série de fotos exclusivas para catálogo",
    year: "2025/2026"
  },
  {
    id: "b-2",
    name: "Aura Habitats",
    segment: "Arquitetura Sustentável & Mobilidade",
    projectType: "Minidocumentário de Marca",
    quote: "Não compramos um anúncio tradicional; comissionamos uma obra de arte que comunicou nosso propósito com sofisticação incomparável.",
    deliverables: "Documentário de 28min + 4 pílulas para Instagram e Reels + Licenciamento institucional",
    year: "2025"
  },
  {
    id: "b-3",
    name: "Kronos Watchmakers",
    segment: "Alta Relojoaria Suíça",
    projectType: "Ensaio sobre a Concepção do Tempo",
    quote: "Raramente encontramos um criador que compreenda o valor do detalhe analógico e o ritmo lento da manufatura como Valentim.",
    deliverables: "Série fotográfica em macro + Ensaio em podcast patrocinado + Newsletter especial",
    year: "2025"
  },
  {
    id: "b-4",
    name: "Studio Serif",
    segment: "Software de Escrita & Produtividade Focada",
    projectType: "Estudo de Caso & Residência Criativa",
    quote: "Audiência ultracapacitada e disposta a investir em ferramentas de excelência. Retorno direto de mais de 12.000 assinaturas pro.",
    deliverables: "Integração orgânica de fluxo de trabalho + Masterclass ao vivo para a comunidade",
    year: "2026"
  }
];

export const MEDIA_KIT_DATA = {
  overviewMetrics: [
    { label: "Seguidores Totais", value: "1.86M", detail: "Crescimento de +24% YoY" },
    { label: "Impressões Mensais", value: "14.2M", detail: "Alcance orgânico não pago" },
    { label: "Taxa de Retenção", value: "82.4%", detail: "Em vídeos acima de 20 minutos" },
    { label: "Open-Rate Newsletter", value: "67.8%", detail: "Mais de 3x a média da indústria" }
  ],
  demographics: {
    age: [
      { range: "25 – 34 anos", percentage: 49 },
      { range: "35 – 44 anos", percentage: 27 },
      { range: "18 – 24 anos", percentage: 16 },
      { range: "45+ anos", percentage: 8 }
    ],
    geography: [
      { location: "Brasil (SP, RJ, Curitiba, BH, POA)", percentage: 72 },
      { location: "Portugal & Europa", percentage: 14 },
      { location: "Estados Unidos & Canadá", percentage: 9 },
      { location: "Outros países", percentage: 5 }
    ],
    interests: [
      { area: "Design, Arquitetura & Tipografia", match: "94%" },
      { area: "Cinema, Fotografia & Storytelling", match: "91%" },
      { area: "Tecnologia, Produtividade & Minimalismo", match: "87%" },
      { area: "Viagens Culturais, Gastronomia & Café", match: "82%" },
      { area: "Livros, Filosofia & Ensaísmo", match: "78%" }
    ],
    gender: [
      { label: "Masculino", percentage: "51%" },
      { label: "Feminino", percentage: "46%" },
      { label: "Não-binário / Outros", percentage: "3%" }
    ]
  },
  partnershipFormats: [
    {
      id: "fmt-1",
      title: "Ensaio Audiovisual Dedicado",
      channel: "YouTube (Vídeo Longform 4K)",
      scope: "Roteiro e produção completa com a marca inserida como patrocinadora apresentadora da narrativa central.",
      deliverables: ["1 Vídeo de 25-40 min", "Menção de 90s nativa no início + encerramento", "Links fixados na descrição e primeiro comentário", "3 recortes verticais para Shorts/Reels"],
      reachEstimate: "400.000 – 1.200.000 visualizações orgânicas"
    },
    {
      id: "fmt-2",
      title: "Capsula Multiplataforma Integrada",
      channel: "YouTube + Instagram + Substack",
      scope: "Campanha 360° para lançamentos de produtos de alto valor ou iniciativas institucionais de relevância.",
      deliverables: ["Integração de 120s em vídeo principal", "Carrossel fotográfico editorial no feed do Instagram", "3 sequências de Stories com links nativos", "Ensaio temático com citação no Substack"],
      reachEstimate: "1.800.000+ impressões combinadas"
    },
    {
      id: "fmt-3",
      title: "Episódio Especial em Videocast",
      channel: "Spotify + YouTube Podcast",
      scope: "Episódio dedicado ou bloco especial com liderança criativa da marca ou debate relevante ao ecossistema.",
      deliverables: ["Apresentação institucional do episódio", "Bloco de 3 minutos de aprofundamento do tema", "Cortes editoriais para redes"],
      reachEstimate: "250.000 – 450.000 ouvintes qualificados"
    },
    {
      id: "fmt-4",
      title: "Keynote, Talk & Presença VIP",
      channel: "Presencial / Eventos Corporativos",
      scope: "Palestra com direção visual autoral sobre cultura contemporânea, estética de retenção e economia da atenção.",
      deliverables: ["Talk de 60 minutos + 20 min Q&A", "Divulgação prévia para a comunidade", "Cobertura documental em foto para redes"],
      reachEstimate: "Audiência presencial direta + cobertura em rede"
    }
  ]
};

export const CURRENT_LIVE_STATUS = {
  activeProduction: "Temporada 2 de 'Caderno de Campo: O Mundo Não Editado' (Locações: Kyoto, Ilhas Faroé e Serra da Mantiqueira)",
  currentReading: "A Sociedade do Cansaço — Byung-Chul Han & Ensaios de Susan Sontag",
  currentGear: "Leica M11-P + Sony FX3 Cinema Line com lentes Zeiss Contax Vintage",
  availabilityNextQuarter: "Disponível para 2 ativações de marcas e 1 conferência presencial no próximo trimestre",
  editorialFocusQ2: "Investigação da IA generativa vs. a busca pelo erro humano e valor do trabalho manual"
};
