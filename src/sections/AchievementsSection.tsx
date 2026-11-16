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
          tag="NO FABRICATED METRICS"
        />

        <div className="ledger-banner stagger-item" style={{ '--stagger-idx': 0 } as CSSProperties} role="note">
          {achievementsIntro.policyBanner}
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item, idx) => {
            const isVerified = item.verificationStatus === 'Verified Scope';
            return (
              <article
                key={item.id}
                className={`achievement-row ${
                  isVerified ? 'achievement-row--verified' : 'achievement-row--pending'
                } stagger-item`}
                style={{ '--stagger-idx': idx } as CSSProperties}
              >
                <div className="achievement-row__top">
                  <span className="mono-label" style={{ color: 'var(--color-ink-subtle-light)' }}>
                    {item.code} · {item.category}
                  </span>
                  <span
                    className={`status-chip ${
                      isVerified ? 'status-chip--verified-light' : 'status-chip--pending-light'
                    }`}
                  >
                    {item.verificationStatus}
                  </span>
                </div>

                <div className="achievement-row__metric">{item.metricValue}</div>
                <h3 className="achievement-row__title">{item.title}</h3>
                <p className="achievement-row__desc">{item.description}</p>
                <div className="achievement-row__context">
                  {item.period} · {item.contextNote}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
