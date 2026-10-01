import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreatorStory } from './components/CreatorStory';
import { FeaturedContent } from './components/FeaturedContent';
import { RecentContent } from './components/RecentContent';
import { PlatformsSection } from './components/PlatformsSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { BrandsAndPartners } from './components/BrandsAndPartners';
import { MediaKitSection } from './components/MediaKitSection';
import { CreatorHub } from './components/CreatorHub';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContentModal } from './components/ContentModal';
import { ProjectModal } from './components/ProjectModal';
import { ContentItem, ProjectItem, FEATURED_CONTENTS } from './data/creatorData';
import { RotateCw } from 'lucide-react';

export default function App() {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [hubInitialTab, setHubInitialTab] = useState<string>('conteudos');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial simulated load state to show skeleton transition smoothly
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to dismiss modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedContent(null);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenHub = (tab: string = 'conteudos') => {
    setHubInitialTab(tab);
    handleNavigateToSection('central');
  };

  const handleOpenFeaturedVideo = () => {
    const mainFeature = FEATURED_CONTENTS.find((c) => c.featured) || FEATURED_CONTENTS[0];
    setSelectedContent(mainFeature);
  };

  // Helper to re-trigger skeleton loading for test/demonstration
  const handleReloadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#E5E5E2] font-sans selection:bg-[#E07A5F] selection:text-white">
      {/* 1. Header Navigation Bar (Top Bar Contract) */}
      <Navbar
        onOpenHub={handleOpenHub}
        onNavigateToSection={handleNavigateToSection}
      />

      <main>
        {/* 2. Editorial Hero Section */}
        <Hero
          onOpenHub={handleOpenHub}
          onExploreWork={() => handleNavigateToSection('conteudos')}
          onOpenFeaturedVideo={handleOpenFeaturedVideo}
        />

        {/* 3. The Creator Story & Philosophy */}
        <CreatorStory />

        {/* 4. Flagship Curated Featured Content Showcase (With Skeleton Loading State) */}
        <FeaturedContent
          isLoading={isLoading}
          onSelectContent={(content) => setSelectedContent(content)}
          onOpenHubWithTab={(tab) => handleOpenHub(tab)}
        />

        {/* 5. Chronological Recent Releases Feed */}
        <RecentContent
          onSelectContent={(content) => setSelectedContent(content)}
        />

        {/* 6. Multiplatform Distribution Network */}
        <PlatformsSection />

        {/* 7. Special Longform Authorial Projects */}
        <ProjectsShowcase
          onOpenProjectDetails={(project) => setSelectedProject(project)}
        />

        {/* 8. Commercial Brand Cases & Collaborations */}
        <BrandsAndPartners
          onOpenCommercialContact={() => handleNavigateToSection('contato')}
        />

        {/* 9. Integrated Media Kit, Demographics & Campaign Simulator (With Skeleton Loading State) */}
        <MediaKitSection
          isLoading={isLoading}
          onOpenCommercialContact={() => handleNavigateToSection('contato')}
        />

        {/* 10. RECURSO PREMIUM: Central do Criador (Interactive Digital Hub) */}
        <CreatorHub
          initialTab={hubInitialTab}
          onSelectContent={(content) => setSelectedContent(content)}
          onOpenProjectDetails={(project) => setSelectedProject(project)}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* 11. Dual-Path Contact Section (Community vs Brand Partners) */}
        <ContactSection />
      </main>

      {/* Discrete floating tool to test/preview skeleton loading state anytime */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={handleReloadData}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono-tabular text-[#A1A1AA] hover:text-white bg-[#14161F]/90 backdrop-blur-md border border-[#272B3C] rounded-full shadow-lg transition-colors cursor-pointer group"
          title="Simular recarregamento com Skeleton Loader"
        >
          <RotateCw className={`w-3 h-3 text-[#E07A5F] ${isLoading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
          <span>{isLoading ? 'Carregando dados...' : 'Simular Skeleton'}</span>
        </button>
      </div>

      {/* 12. Bespoke Editorial Footer */}
      <Footer
        onOpenHub={handleOpenHub}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Interactive Media Player Modal */}
      <ContentModal
        content={selectedContent}
        onClose={() => setSelectedContent(null)}
      />

      {/* Interactive Project Technical File Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => handleNavigateToSection('contato')}
      />
    </div>
  );
}
