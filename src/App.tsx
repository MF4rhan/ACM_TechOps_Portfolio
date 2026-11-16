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

    if (elements.length === 0) {
      return;
    }

    let rafId = 0;

    const updateActiveSection = () => {
      rafId = 0;
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 12) {
        setActiveSectionId(elements[elements.length - 1].id);
        return;
      }

      const probeY = 72 + Math.min(window.innerHeight * 0.28, 220);
      let currentId = elements[0].id;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY) {
          currentId = el.id;
        } else {
          break;
        }
      }

      setActiveSectionId((prev) => (prev === currentId ? prev : currentId));
    };

    const onScrollOrResize = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('hashchange', updateActiveSection);
    };
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
