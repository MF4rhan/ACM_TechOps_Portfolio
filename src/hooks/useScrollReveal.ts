import { useLayoutEffect, useRef } from 'react';

/**
 * Granular progressive-enhancement scroll reveal hook.
 * Attaches to a section or footer root container and individually observes
 * each descendant `[data-reveal]` block so elements visibly animate as the
 * visitor scrolls directly to them. Content stays visible immediately if
 * reduced motion is preferred, on tall capture viewports, or if scrolled past.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }

    const targets: HTMLElement[] = [];
    if (root.hasAttribute('data-reveal')) {
      targets.push(root);
    }
    root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      targets.push(el);
    });

    if (targets.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const disableMotion =
      prefersReducedMotion ||
      typeof IntersectionObserver === 'undefined' ||
      window.innerHeight >= 2200;

    if (disableMotion) {
      targets.forEach((el) => {
        el.classList.remove('reveal-pending');
        el.classList.add('is-revealed');
      });
      return;
    }

    const isInOrAboveViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.9 || rect.bottom <= window.innerHeight;
    };

    const revealElement = (el: HTMLElement) => {
      el.classList.remove('reveal-pending');
      el.classList.add('is-revealed');
    };

    const pending = new Set<HTMLElement>();

    targets.forEach((el) => {
      if (isInOrAboveViewport(el)) {
        revealElement(el);
      } else {
        el.classList.remove('is-revealed');
        el.classList.add('reveal-pending');
        pending.add(el);
      }
    });

    if (pending.size === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting || isInOrAboveViewport(target)) {
            revealElement(target);
            pending.delete(target);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    pending.forEach((el) => observer.observe(el));

    const checkPendingOnScroll = () => {
      pending.forEach((el) => {
        if (isInOrAboveViewport(el)) {
          revealElement(el);
          pending.delete(el);
          observer.unobserve(el);
        }
      });
      if (pending.size === 0) {
        observer.disconnect();
        window.removeEventListener('scroll', checkPendingOnScroll);
        window.removeEventListener('hashchange', checkPendingOnScroll);
        window.removeEventListener('resize', checkPendingOnScroll);
      }
    };

    window.addEventListener('scroll', checkPendingOnScroll, { passive: true });
    window.addEventListener('hashchange', checkPendingOnScroll);
    window.addEventListener('resize', checkPendingOnScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkPendingOnScroll);
      window.removeEventListener('hashchange', checkPendingOnScroll);
      window.removeEventListener('resize', checkPendingOnScroll);
    };
  }, []);

  return { ref };
}
