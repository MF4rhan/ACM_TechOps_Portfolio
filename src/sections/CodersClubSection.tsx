import type { CSSProperties } from 'react';
import { codersClubData } from '../data/codersClub';
import { SectionHeader } from '../components/SectionHeader';
import { CodersClubCard } from '../components/CodersClubCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CodersClubSection() {
  const { ref, revealClassName } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="coders-club"
      aria-labelledby="coders-club-heading"
      className="section section--cobalt grid-backdrop-dark"
    >
      <div ref={ref} className={`container ${revealClassName}`}>
        <SectionHeader
          sectionCode={codersClubData.sectionCode}
          title={codersClubData.title}
          subtitle={codersClubData.subtitle}
          headingId="coders-club-heading"
          tag="CORE EDUCATIONAL MONOGRAPH"
        />

        <div className="coders-hero-band stagger-item" style={{ '--stagger-idx': 0 } as CSSProperties}>
          <p className="coders-hero-band__statement">{codersClubData.mandateStatement}</p>

          <aside className="coders-attribution" aria-label={codersClubData.attributionNotice.label}>
            <span className="coders-attribution__label">
              {codersClubData.attributionNotice.label}
            </span>
            <p className="coders-attribution__desc">
              {codersClubData.attributionNotice.description}
            </p>
          </aside>
        </div>

        <div className="coders-tracks" aria-label="Coders Club learning tracks">
          {codersClubData.focusTracks.map((track, idx) => (
            <div
              key={track.code}
              className="coders-track stagger-item"
              style={{ '--stagger-idx': idx } as CSSProperties}
            >
              <span className="coders-track__code">{track.code}</span>
              <h3 className="coders-track__name">{track.name}</h3>
              <p className="coders-track__desc">{track.description}</p>
            </div>
          ))}
        </div>

        <div className="coders-contributions">
          {codersClubData.contributions.map((contribution, idx) => (
            <CodersClubCard key={contribution.id} contribution={contribution} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
