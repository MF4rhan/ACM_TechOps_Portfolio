import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, GitBranch } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-dossier">
      <div
        className={`project-dossier__media ${
          project.isPlaceholder ? 'project-dossier__media--blueprint' : ''
        }`}
      >
        <img
          src={project.screenshotUrl}
          alt={project.screenshotAlt}
          loading={project.isPlaceholder ? 'eager' : 'lazy'}
          decoding="async"
          width={800}
          height={480}
        />
      </div>

      <div className="project-dossier__body">
        <div className="project-dossier__top">
          <span className="project-dossier__code">
            {project.code} · {project.category}
          </span>
          <span
            className={`status-chip ${
              project.isPlaceholder ? 'status-chip--pending-dark' : 'status-chip--verified-dark'
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="project-dossier__title">{project.name}</h3>
        <p className="project-dossier__desc">{project.description}</p>

        <div className="project-dossier__meta-grid">
          <div>
            <span className="project-dossier__meta-label">Purpose</span>
            <span className="project-dossier__meta-val">{project.purpose}</span>
          </div>
          <div>
            <span className="project-dossier__meta-label">Date / Cycle</span>
            <span className="project-dossier__meta-val">{project.dateOrYear}</span>
          </div>
        </div>

        <div className="project-dossier__tags" aria-label="Technologies and tools">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-dossier__actions">
          <button
            type="button"
            className="btn btn--outline-dark"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <span>{expanded ? 'Hide Dossier Notes' : 'Inspect Dossier Notes'}</span>
            {expanded ? (
              <ChevronUp size={15} aria-hidden="true" />
            ) : (
              <ChevronDown size={15} aria-hidden="true" />
            )}
          </button>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-dark"
              >
                <GitBranch size={14} aria-hidden="true" />
                <span>Repository</span>
              </a>
            ) : (
              <span className="status-chip status-chip--pending-dark">GitHub Link Pending</span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <ExternalLink size={14} aria-hidden="true" />
                <span>Approved Link</span>
              </a>
            )}
          </div>
        </div>

        {expanded && (
          <div className="project-dossier__drawer">
            <div>
              <strong style={{ color: 'var(--color-paper)' }}>TechOps Contribution: </strong>
              {project.techOpsContribution}
            </div>
            <div>
              <strong style={{ color: 'var(--color-paper)' }}>Verified Outcome: </strong>
              {project.outcome}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
