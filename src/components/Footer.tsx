import { ArrowUp } from 'lucide-react';
import { siteData } from '../data/site';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__colophon">
            <div className="footer__brand">
              {siteData.brand.society} · {siteData.brand.department}
            </div>
            <p className="footer__note">
              Official department portfolio for FAST NUCES Karachi ACM Student Chapter. Content is structured modularly so verified event records, leadership details, and official links can be integrated cleanly without redesigning the interface.
            </p>
            <div className="mono-label" style={{ color: 'var(--color-ink-subtle-dark)' }}>
              {siteData.brand.logoAssetNote}
            </div>
          </div>

          <div>
            <div className="footer__nav-title">Section Index</div>
            <ul className="footer__nav-list">
              {siteData.navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="footer__link">
                    {item.code} · {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__nav-title">Content Files</div>
            <ul style={{ display: 'grid', gap: '0.45rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ink-muted-dark)' }}>
              <li>src/data/site.ts</li>
              <li>src/data/projects.ts</li>
              <li>src/data/codersClub.ts</li>
              <li>src/data/events.ts</li>
              <li>src/data/team.ts</li>
              <li>src/data/achievements.ts</li>
              <li>src/data/contact.ts</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            {siteData.brand.society} · {siteData.brand.campus} · {siteData.brand.academicCycle}
          </span>
          <button type="button" className="footer__top-btn" onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={13} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
