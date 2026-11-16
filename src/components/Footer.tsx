import { ArrowUp } from 'lucide-react';
import { siteData } from '../data/site';
import type { SocialLink } from '../types/portfolio';

function SocialPlatformIcon({ id }: { id: SocialLink['id'] }) {
  if (id === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 8h-2a2 2 0 0 0-2 2v11M9 13h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  const { brand, footer, navigation } = siteData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer grid-backdrop-dark">
      <div className="container">
        <div className="footer__grid">
          {/* Zone 1: Branding Block */}
          <div className="footer__colophon">
            <div className="footer__brand-lockup">
              <span className="navbar__mark" aria-hidden="true" />
              <div className="footer__brand-stack">
                <span className="footer__brand">{brand.society}</span>
                <span className="footer__brand-dept">{brand.department}</span>
              </div>
            </div>

            <p className="footer__note">{footer.tagline}</p>

            <div className="footer__meta-row">
              <span className="mono-label" style={{ color: 'var(--color-ink-subtle-dark)' }}>
                {footer.chapterLocation}
              </span>
              <button type="button" className="footer__top-btn" onClick={scrollToTop}>
                <span>Back to top</span>
                <ArrowUp size={13} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Zone 2: Quick Navigation (00 - 07) */}
          <nav aria-label="Footer quick navigation">
            <div className="footer__nav-title">Quick Navigation</div>
            <ul className="footer__nav-list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="footer__link">
                    <span className="footer__link-code">{item.code}</span>
                    <span aria-hidden="true">—</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zone 3: Official ACM Social Media */}
          <div>
            <div className="footer__nav-title">Official ACM Channels</div>
            <ul className="footer__socials">
              {footer.officialSocials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Official ACM FAST NUCES Karachi ${social.platform} (${social.handle}), opens in a new tab`}
                    className="footer__social-link"
                  >
                    <span className="footer__social-left">
                      <span className="footer__social-icon">
                        <SocialPlatformIcon id={social.id} />
                      </span>
                      <span>
                        <span className="footer__social-platform">{social.platform}</span>
                        <span className="footer__social-handle">{social.handle}</span>
                      </span>
                    </span>
                    <span className="footer__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Developer Credit Bar */}
        <div className="footer__credit-bar">
          <span>
            © {currentYear} ACM FAST NUCES KARACHI. ALL RIGHTS RESERVED.
          </span>

          {footer.developerLinkedInUrl ? (
            <a
              href={footer.developerLinkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Designed and engineered by Muhammad Farhan on LinkedIn, opens in a new tab"
              className="footer__credit-link"
            >
              <span>{footer.developerAttributionLabel}</span>
              <span className="footer__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : (
            <span className="footer__credit-static">
              {footer.developerAttributionLabel}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
