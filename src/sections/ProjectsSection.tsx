import { useState } from 'react';
import { projectCategories, projectsData, projectsIntro } from '../data/projects';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ProjectItem } from '../types/portfolio';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectItem['category'] | 'All'>('All');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section section--dark">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
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
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-stack">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="notice-strip">
            <p className="notice-strip__text">
              No entries currently filed under "{selectedCategory}". Project records await organizer confirmation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
