import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Briefcase, Sparkles, Clock, Globe } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/creatorData';

export const ContactSection: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<'comercial' | 'publico'>('comercial');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('R$ 30k – R$ 60k');
  const [timeline, setTimeline] = useState('Próximos 30-60 dias');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <section id="contato" className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1F2129]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context & Guidelines (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs uppercase tracking-widest text-[#D4A373] font-mono-tabular">
            07 — Conexão & Propostas
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Iniciar um Diálogo
          </h2>
          <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">
            Seja para propor uma parceria comercial estratégica ou compartilhar uma reflexão sobre os ensaios, nossa equipe lê cada mensagem com dedicação.
          </p>

          <div className="pt-4 space-y-4">
            <div className="p-4 rounded-lg bg-[#13141B] border border-[#22242F] space-y-1">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#71717A]">
                E-mail Comercial Direto
              </div>
              <div className="font-mono-tabular text-sm text-white font-medium">
                comercial@valentimrocha.com
              </div>
              <div className="text-[11px] text-[#8E8E98]">
                Atendimento gerido por assessoria executiva (SLA: 48h)
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#13141B] border border-[#22242F] space-y-1">
              <div className="text-xs font-mono-tabular uppercase tracking-wider text-[#71717A]">
                Comunidade & Cartas do Leitor
              </div>
              <div className="font-mono-tabular text-sm text-white font-medium">
                caderno@valentimrocha.com
              </div>
              <div className="text-[11px] text-[#8E8E98]">
                Respostas selecionadas compartilhadas nas edições de sexta do Substack
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dual Path Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#13141B] border border-[#22242F] rounded-2xl p-6 sm:p-10 shadow-xl">
          {/* Audience Selector Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[#1A1C25] rounded-lg border border-[#2A2E3D] mb-8">
            <button
              type="button"
              onClick={() => {
                setActiveAudience('comercial');
                setIsSubmitted(false);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeAudience === 'comercial'
                  ? 'bg-[#292D3C] text-white shadow-sm'
                  : 'text-[#8E8E98] hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Parcerias Comerciais & Marcas</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveAudience('publico');
                setIsSubmitted(false);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeAudience === 'publico'
                  ? 'bg-[#292D3C] text-white shadow-sm'
                  : 'text-[#8E8E98] hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Público & Comunidade</span>
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Mensagem Enviada com Sucesso!
              </h3>
              <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
                {activeAudience === 'comercial'
                  ? 'Recebemos sua solicitação de parceria. Nossa equipe comercial analisará o alinhamento editorial e responderá em até 2 dias úteis.'
                  : 'Obrigado por escrever! Suas palavras alimentam nosso processo de escrita e produção contínua.'}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="pt-2 text-xs text-[#E07A5F] hover:underline font-semibold cursor-pointer"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Clara Mendes"
                    className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="clara@empresa.com"
                    className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                  />
                </div>
              </div>

              {activeAudience === 'comercial' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                        Empresa / Marca Representada *
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ex: Studio Minimal, Volvo, etc."
                        className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                        Verba Estimada da Ação
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white focus:outline-none focus:border-[#E07A5F]"
                      >
                        <option value="R$ 30k – R$ 60k">R$ 30.000 – R$ 60.000</option>
                        <option value="R$ 60k – R$ 120k">R$ 60.000 – R$ 120.000</option>
                        <option value="R$ 120k+">Acima de R$ 120.000 (Projeto 360°)</option>
                        <option value="A definir / Palestra">A definir / Palestra Presencial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                      Previsão de Lançamento / Prazo Desejado
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white focus:outline-none focus:border-[#E07A5F]"
                    >
                      <option value="Imediato (Próximos 30 dias)">Imediato (Próximos 30 dias)</option>
                      <option value="Próximos 60-90 dias">Próximos 60-90 dias (Recomendado)</option>
                      <option value="Próximo Semestre / Campanha Anual">Próximo Semestre / Campanha Anual</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                  {activeAudience === 'comercial'
                    ? 'Detalhes da Campanha & Objetivos *'
                    : 'Sua Mensagem ou Reflexão *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    activeAudience === 'comercial'
                      ? 'Conte-nos sobre o produto, o conceito pretendido e como imagina a inserção no ecossistema do Valentim...'
                      : 'Compartilhe suas ideias sobre algum episódio recente, sugestão de livro ou consideração...'
                  }
                  className="w-full px-3.5 py-2.5 bg-[#171822] border border-[#272B3B] rounded-lg text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#E07A5F]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold text-white bg-[#E07A5F] hover:bg-[#D46B50] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E07A5F]/15"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {activeAudience === 'comercial'
                    ? 'Enviar Solicitação de Parceria'
                    : 'Enviar Mensagem para a Comunidade'}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
