import type { CSSProperties } from 'react';
import { siteData } from '../data/site';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AboutSection() {
  const { about } = siteData;
  const { ref } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section section--light grid-backdrop-light"
    >
      <div ref={ref} className="container">
        <SectionHeader
          sectionCode={about.sectionCode}
          title={about.title}
          subtitle={about.subtitle}
          headingId="about-heading"
          tag="4 CORE RESPONSIBILITIES"
        />

        <div className="about-editorial" data-reveal="stagger">
          <div className="about-editorial__prose stagger-item" style={{ '--stagger-idx': 0 } as CSSProperties}>
            <h3 className="about-editorial__heading">{about.overviewHeading}</h3>
            {about.overviewBody.map((paragraph) => (
              <p key={paragraph} className="about-editorial__body">
                {paragraph}
              </p>
            ))}
          </div>

          <aside
            className="about-protocol stagger-item"
            style={{ '--stagger-idx': 1 } as CSSProperties}
            aria-label={about.distinctionNote.label}
          >
            <span className="about-protocol__label">{about.distinctionNote.label}</span>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-graphite)' }}>
              {about.distinctionNote.text}
            </p>
          </aside>
        </div>

        <div className="about-pillars" data-reveal="stagger">
          {about.pillars.map((pillar, idx) => (
            <article
              key={pillar.index}
              className="pillar-cell stagger-item"
              style={{ '--stagger-idx': idx } as CSSProperties}
            >
              <div className="pillar-cell__head">
                <span className="pillar-cell__index">{pillar.index}</span>
                <span className="pillar-cell__scope">{pillar.scope}</span>
              </div>
              <h3 className="pillar-cell__title">{pillar.title}</h3>
              <p className="pillar-cell__desc">{pillar.description}</p>
              <ul className="pillar-cell__list">
                {pillar.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="workflow-strip" data-reveal="stagger" aria-label="Operational execution phases">
          {about.workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="workflow-step stagger-item"
              style={{ '--stagger-idx': idx } as CSSProperties}
            >
              <span className="workflow-step__code">{step.step}</span>
              <h4 className="workflow-step__title">{step.phase}</h4>
              <p className="workflow-step__detail">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
