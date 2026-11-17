import type { CSSProperties } from 'react';
import { codersClubData } from '../data/codersClub';
import { SectionHeader } from '../components/SectionHeader';
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
          tag="EDUCATIONAL MONOGRAPH"
        />

        <div className="coders-monograph">
          <div className="coders-monograph__lead stagger-item" style={{ '--stagger-idx': 0 } as CSSProperties}>
            <p className="coders-hero-band__statement">{codersClubData.mandateStatement}</p>
            <p className="coders-monograph__body">{codersClubData.supportingCopy}</p>

            <aside className="coders-attribution" aria-label={codersClubData.attributionNotice.label}>
              <span className="coders-attribution__label">
                {codersClubData.attributionNotice.label}
              </span>
              <p className="coders-attribution__desc">
                {codersClubData.attributionNotice.description}
              </p>
            </aside>
          </div>

          <figure
            className="coders-monograph__diagram stagger-item"
            style={{ '--stagger-idx': 1 } as CSSProperties}
          >
            <svg
              viewBox="0 0 640 340"
              role="img"
              aria-label="Coders Club conceptual architecture linking peer workshops, competitive programming, and practical coding skills"
              style={{ width: '100%', height: 'auto' }}
            >
              <rect width="640" height="340" fill="#121C47" />
              <g stroke="rgba(242,240,233,0.08)" strokeWidth="1">
                <path d="M0 85H640M0 170H640M0 255H640" />
                <path d="M160 0V340M320 0V340M480 0V340" />
              </g>
              <rect x="24" y="24" width="592" height="292" fill="none" stroke="rgba(242,240,233,0.22)" />
              <line x1="24" y1="68" x2="616" y2="68" stroke="rgba(242,240,233,0.18)" />
              <text
                x="42"
                y="51"
                fill="#F2F0E9"
                fillOpacity="0.82"
                fontFamily="IBM Plex Mono, monospace"
                fontSize="11"
                letterSpacing="2"
              >
                CODERS CLUB // PEER EDUCATION FRAMEWORK
              </text>

              {/* Terminal & Algorithmic Graph Motif */}
              <rect x="46" y="96" width="248" height="190" fill="#111316" stroke="#7C92FF" strokeWidth="1.2" />
              <path d="M74 136L102 160L74 184" fill="none" stroke="#F25A38" strokeWidth="3" strokeLinecap="square" />
              <line x1="118" y1="184" x2="178" y2="184" stroke="#F2F0E9" strokeWidth="3" />
              <line x1="74" y1="220" x2="248" y2="220" stroke="rgba(242,240,233,0.32)" strokeWidth="2" />
              <line x1="74" y1="244" x2="210" y2="244" stroke="rgba(242,240,233,0.18)" strokeWidth="2" />

              {/* Connected Nodes */}
              <rect x="330" y="96" width="264" height="190" fill="#111316" fillOpacity="0.45" stroke="rgba(242,240,233,0.2)" strokeDasharray="4 4" />
              <path d="M352 240L430 148L508 192L572 118" fill="none" stroke="#F25A38" strokeWidth="2.4" />
              <circle cx="352" cy="240" r="7" fill="#F2F0E9" />
              <circle cx="430" cy="148" r="7" fill="#F25A38" />
              <circle cx="508" cy="192" r="7" fill="#7C92FF" />
              <circle cx="572" cy="118" r="7" fill="#F25A38" />
            </svg>
            <figcaption className="coders-monograph__caption">
              CONCEPTUAL LEARNING MODEL · WORKSHOPS &amp; PEER CODING CULTURE
            </figcaption>
          </figure>
        </div>

        <div className="coders-themes" aria-label="Coders Club learning focus areas">
          {codersClubData.learningThemes.map((theme, idx) => (
            <article
              key={theme.code}
              className="coders-track stagger-item"
              style={{ '--stagger-idx': idx } as CSSProperties}
            >
              <span className="coders-track__code">{theme.code}</span>
              <h3 className="coders-track__name">{theme.name}</h3>
              <p className="coders-track__desc">{theme.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
