import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data/site';

interface NavbarProps {
  activeSectionId: string;
}

export function Navbar({ activeSectionId }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar__inner">
          <a href="#home" className="navbar__brand" aria-label="ACM FAST TechOps Department home">
            <span className="navbar__mark" aria-hidden="true" />
            <span className="navbar__brand-text">
              <span className="navbar__brand-primary">{siteData.brand.society}</span>
              <span className="navbar__brand-sub">{siteData.brand.department}</span>
            </span>
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {siteData.navigation.map((item) => {
              const isActive = activeSectionId === item.id;
              const classes = [
                'navbar__link',
                isActive ? 'navbar__link--active' : '',
                item.highlight ? 'navbar__link--coders' : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={classes}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className="navbar__link-code">{item.code}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={drawerOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setDrawerOpen((prev) => !prev)}
          >
            {drawerOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span className="mono-label">{drawerOpen ? 'Close' : 'Index'}</span>
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div
          id="mobile-navigation-drawer"
          className="navbar__drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site index"
        >
          <nav aria-label="Mobile section index">
            <ul className="navbar__drawer-list">
              {siteData.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`navbar__drawer-link ${
                      item.highlight ? 'navbar__drawer-link--coders' : ''
                    }`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="mono-label">{item.code}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__drawer-meta">
            <div>
              {siteData.brand.society} · {siteData.brand.campus}
            </div>
            <div>{siteData.brand.academicCycle}</div>
          </div>
        </div>
      )}
    </>
  );
}
