import { useLayoutEffect, useRef, useState } from 'react';

type RevealPhase = 'visible' | 'hidden';

/**
 * Progressive-enhancement scroll reveal hook.
 * Content remains visible by default if reduced motion is preferred,
 * on tall capture viewports, or once scrolled past/into view.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [phase, setPhase] = useState<RevealPhase>('visible');

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (
      prefersReducedMotion ||
      typeof IntersectionObserver === 'undefined' ||
      window.innerHeight >= 2200
    ) {
      setPhase('visible');
      return;
    }

    const isInOrAboveViewport = () => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight - 24 || rect.bottom <= window.innerHeight;
    };

    if (isInOrAboveViewport()) {
      setPhase('visible');
      return;
    }

    setPhase('hidden');

    const reveal = () => {
      setPhase('visible');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || isInOrAboveViewport()) {
            reveal();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(element);

    const onScrollOrNav = () => {
      if (isInOrAboveViewport()) {
        reveal();
        observer.disconnect();
      }
    };

    window.addEventListener('scroll', onScrollOrNav, { passive: true });
    window.addEventListener('hashchange', onScrollOrNav);
    window.addEventListener('resize', onScrollOrNav, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollOrNav);
      window.removeEventListener('hashchange', onScrollOrNav);
      window.removeEventListener('resize', onScrollOrNav);
    };
  }, []);

  return {
    ref,
    isVisible: phase === 'visible',
    revealClassName: phase === 'visible' ? 'reveal is-visible' : 'reveal reveal--hidden',
  };
}
