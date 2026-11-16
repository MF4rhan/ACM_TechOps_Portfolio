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
        <div className="hero__topline">
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
              {hero.headlineLine1}
              <span className="hero__headline-serif">{hero.headlineEmphasis}</span>
              {hero.headlineLine2}
            </h1>

            <p className="hero__lead">{hero.leadParagraph}</p>

            <div className="hero__actions">
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
          {hero.highlights.map((item) => (
            <a key={item.code} href={`#${item.targetId}`} className="hero__highlight">
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
