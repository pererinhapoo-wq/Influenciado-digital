import React from 'react';
import { X, CheckCircle2, Calendar, Layers, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/creatorData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111218] border border-[#262A3B] rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:px-6 border-b border-[#202330] bg-[#14161F] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#D4A373] uppercase tracking-wider">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-[#3F4354]">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8E8E98] hover:text-white rounded-md transition-colors cursor-pointer"
            title="Fechar (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs text-[#D4A373] font-mono-tabular">
              {project.status}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#151722] border border-[#242736] space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#D4A373] font-mono-tabular">
              Destaques de Execução & Impacto
            </div>
            <div className="space-y-2">
              {project.highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#C4C4CC]">
                  <CheckCircle2 className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#202330] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#71717A]">
              Interessado em patrocinar ou licenciar este projeto?
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-md transition-colors cursor-pointer"
            >
              Falar com Produção
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
