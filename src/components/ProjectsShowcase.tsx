import React, { useState } from 'react';
import { CREATOR_PROJECTS, ProjectItem } from '../data/creatorData';
import { ArrowUpRight, CheckCircle2, Calendar, Sparkles, Layers } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenProjectDetails: (project: ProjectItem) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenProjectDetails }) => {
  return (
    <section id="projetos" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular mb-2">
            04 — Produções Especiais & Autoria
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Projetos de Longo Fôlego
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#A1A1AA] max-w-md">
          Iniciativas que transcendem o feed diário: séries documentais, obras impressas, programas imersivos e pesquisa editorial.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CREATOR_PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenProjectDetails(project)}
            className="group cursor-pointer rounded-xl bg-[#13141B] border border-[#22242F] hover:border-[#383C4D] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
          >
            {/* Visual Cover */}
            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13141B] via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono-tabular text-[#D4A373] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="bg-[#1F222C]/90 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono-tabular text-white/90">
                  {project.year}
                </span>
              </div>

              <div className="absolute bottom-3 right-4">
                <span className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#A1A1AA] bg-black/70 px-2.5 py-1 rounded">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#E07A5F] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights List (Zero-pill text styling) */}
                <div className="pt-2 space-y-1.5">
                  {project.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#8E8E98]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F212A] flex items-center justify-between text-xs text-[#E07A5F] font-semibold">
                <span className="flex items-center gap-1.5">
                  <span>Conhecer Estrutura do Projeto</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="text-[#71717A] font-normal">
                  Arquivo Oficial
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
