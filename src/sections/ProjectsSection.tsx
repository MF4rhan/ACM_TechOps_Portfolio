import { useEffect, useRef, useState } from 'react';
import { projectCategories, projectsData, projectsIntro } from '../data/projects';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ProjectItem } from '../types/portfolio';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectItem['category'] | 'All'>('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterGeneration, setFilterGeneration] = useState(0);
  const timerRef = useRef<number | null>(null);
  const { ref, revealClassName } = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCategoryChange = (category: ProjectItem['category'] | 'All') => {
    if (category === selectedCategory) {
      return;
    }

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setSelectedCategory(category);
      setFilterGeneration((g) => g + 1);
      return;
    }

    setIsTransitioning(true);
    timerRef.current = window.setTimeout(() => {
      setSelectedCategory(category);
      setFilterGeneration((g) => g + 1);
      setIsTransitioning(false);
    }, 130);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section section--dark">
      <div ref={ref} className={`container ${revealClassName}`}>
        <SectionHeader
          sectionCode={projectsIntro.sectionCode}
          title={projectsIntro.title}
          subtitle={projectsIntro.subtitle}
          headingId="projects-heading"
          tag="SOURCE: SRC/DATA/PROJECTS.TS"
        />

        <div className="notice-strip" role="note">
          <span className="status-chip status-chip--pending-dark">
            {projectsIntro.emptyStateNotice.status}
          </span>
          <p className="notice-strip__text">{projectsIntro.emptyStateNotice.message}</p>
        </div>

        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-pill ${selectedCategory === category ? 'filter-pill--active' : ''}`}
              aria-pressed={selectedCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`filter-stage ${isTransitioning ? 'filter-stage--leaving' : ''}`}
          aria-live="polite"
        >
          {filteredProjects.length > 0 ? (
            <div className="projects-stack" key={`${selectedCategory}-${filterGeneration}`}>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  animateFilter={filterGeneration > 0}
                />
              ))}
            </div>
          ) : (
            <div className="notice-strip filter-card-enter">
              <p className="notice-strip__text">
                No entries currently filed under "{selectedCategory}". Project records await organizer confirmation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
