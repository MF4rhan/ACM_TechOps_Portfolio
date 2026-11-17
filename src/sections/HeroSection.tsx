import type { CSSProperties } from 'react';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';
import { siteData } from '../data/site';
import { HeroSchematic } from '../components/HeroSchematic';

export function HeroSection() {
  const { brand, hero } = siteData;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="section--dark grid-backdrop-dark hero"
    >
      <div className="container">
        <div className="hero__topline hero-anim" style={{ '--hero-delay': '0ms' } as CSSProperties}>
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-mark" aria-hidden="true" />
            <span>{hero.eyebrow}</span>
          </div>
          <div className="hero__cycle">
            {brand.academicCycle} · {brand.statusLabel}
          </div>
        </div>

        <div className="hero__layout">
          <div>
            <h1 id="hero-heading" className="hero__headline">
              <span className="hero__headline-line hero-anim" style={{ '--hero-delay': '70ms' } as CSSProperties}>
                {hero.headlineLine1}
              </span>
              <span
                className="hero__headline-serif hero-anim"
                style={{ '--hero-delay': '150ms' } as CSSProperties}
              >
                {hero.headlineEmphasis}
              </span>
              <span className="hero__headline-line hero-anim" style={{ '--hero-delay': '230ms' } as CSSProperties}>
                {hero.headlineLine2}
              </span>
            </h1>

            <p className="hero__lead hero-anim" style={{ '--hero-delay': '310ms' } as CSSProperties}>
              {hero.leadParagraph}
            </p>

            <div className="hero__actions hero-anim" style={{ '--hero-delay': '390ms' } as CSSProperties}>
              <a href={`#${hero.primaryCta.targetId}`} className="btn btn--cobalt">
                <Terminal size={15} aria-hidden="true" />
                <span>{hero.primaryCta.label}</span>
                <ArrowDownRight size={15} aria-hidden="true" />
              </a>

              <a href={`#${hero.secondaryCta.targetId}`} className="btn btn--outline-dark">
                <span>{hero.secondaryCta.label}</span>
                <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <HeroSchematic nodes={hero.schematicNodes} />
        </div>

        <div className="hero__highlights" aria-label="Section highlights">
          {hero.highlights.map((item, idx) => (
            <a
              key={item.code}
              href={`#${item.targetId}`}
              className="hero__highlight hero-anim"
              style={{ '--hero-delay': `${440 + idx * 80}ms` } as CSSProperties}
            >
              <div className="hero__highlight-top">
                <span
                  className={
                    item.accent === 'cobalt'
                      ? 'hero__highlight-code--cobalt'
                      : 'hero__highlight-code--orange'
                  }
                >
                  {item.code}
                </span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </div>
              <div className="hero__highlight-title">{item.title}</div>
              <div className="hero__highlight-sub">{item.subtitle}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
