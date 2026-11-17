import type { CSSProperties } from 'react';
import { achievementsData, achievementsIntro } from '../data/achievements';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AchievementsSection() {
  const { ref, revealClassName } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section section--light grid-backdrop-light"
    >
      <div ref={ref} className={`container ${revealClassName}`}>
        <SectionHeader
          sectionCode={achievementsIntro.sectionCode}
          title={achievementsIntro.title}
          subtitle={achievementsIntro.subtitle}
          headingId="achievements-heading"
          tag="QUALITATIVE IMPACT"
        />

        <div className="impact-grid">
          {achievementsData.map((item, idx) => (
            <article
              key={item.id}
              className="impact-card stagger-item"
              style={{ '--stagger-idx': idx } as CSSProperties}
            >
              <div className="impact-card__top">
                <span className="impact-card__code">{item.code}</span>
                <span className="mono-label" style={{ color: 'var(--color-ink-subtle-light)' }}>
                  {item.category}
                </span>
              </div>

              <h3 className="impact-card__title">{item.title}</h3>
              <p className="impact-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
