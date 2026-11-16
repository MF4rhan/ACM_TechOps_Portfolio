import { useEffect, useState } from 'react';
import { siteData } from './data/site';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CodersClubSection } from './sections/CodersClubSection';
import { EventsSection } from './sections/EventsSection';
import { TeamSection } from './sections/TeamSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('home');

  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'auto' });
      }
    }

    const sectionIds = siteData.navigation.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar activeSectionId={activeSectionId} />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CodersClubSection />
        <EventsSection />
        <TeamSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
