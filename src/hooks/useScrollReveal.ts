import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const checkPosition = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 120) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkPosition()) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || checkPosition()) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '120px 0px 120px 0px' }
    );

    observer.observe(element);
    const onScrollOrHash = () => {
      if (checkPosition()) {
        observer.disconnect();
      }
    };
    window.addEventListener('scroll', onScrollOrHash, { passive: true });
    window.addEventListener('hashchange', onScrollOrHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollOrHash);
      window.removeEventListener('hashchange', onScrollOrHash);
    };
  }, []);

  return { ref, isVisible };
}
