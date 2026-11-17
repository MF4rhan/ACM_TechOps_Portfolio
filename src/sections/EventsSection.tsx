import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { eventCategories, eventsClosingPlate, eventsData, eventsIntro } from '../data/events';
import { SectionHeader } from '../components/SectionHeader';
import { EventCard } from '../components/EventCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { EventItem } from '../types/portfolio';

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<EventItem['category'] | 'All'>('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterGeneration, setFilterGeneration] = useState(0);
  const timerRef = useRef<number | null>(null);
  const { ref, revealClassName } = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCategoryChange = (category: EventItem['category'] | 'All') => {
    if (category === selectedCategory) {
      return;
    }

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setSelectedCategory(category);
      setFilterGeneration((g) => g + 1);
      return;
    }

    setIsTransitioning(true);
    timerRef.current = window.setTimeout(() => {
      setSelectedCategory(category);
      setFilterGeneration((g) => g + 1);
      setIsTransitioning(false);
    }, 130);
  };

  const filteredEvents =
    selectedCategory === 'All'
      ? eventsData
      : eventsData.filter((event) => event.category === selectedCategory);

  return (
    <section id="events" aria-labelledby="events-heading" className="section section--light">
      <div ref={ref} className={`container ${revealClassName}`}>
        <SectionHeader
          sectionCode={eventsIntro.sectionCode}
          title={eventsIntro.title}
          subtitle={eventsIntro.subtitle}
          headingId="events-heading"
          tag="4 ACTIVITY AREAS"
        />

        <div className="filter-bar" role="group" aria-label="Filter activities by category">
          {eventCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-pill ${selectedCategory === category ? 'filter-pill--active' : ''}`}
              aria-pressed={selectedCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`filter-stage ${isTransitioning ? 'filter-stage--leaving' : ''}`}
          aria-live="polite"
        >
          <div className="events-grid" key={`${selectedCategory}-${filterGeneration}`}>
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                animateFilter={filterGeneration > 0}
              />
            ))}
          </div>
        </div>

        {/* Photographic Closing Composition */}
        <figure
          className="events-closing-plate stagger-item"
          style={{ '--stagger-idx': 2 } as CSSProperties}
        >
          <div className="events-closing-plate__header">
            <span className="events-closing-plate__code">
              <span className="events-closing-plate__dot" aria-hidden="true" />
              <span>{eventsClosingPlate.captionCode}</span>
            </span>
            <span className="mono-label" style={{ color: 'var(--color-ink-subtle-light)' }}>
              ACM NUCES 2026–27 · INTRODUCTORY SESSION
            </span>
          </div>

          <div className="events-closing-plate__frame">
            <img
              src={eventsClosingPlate.imageUrl}
              alt={eventsClosingPlate.imageAlt}
              loading="lazy"
              decoding="async"
              width={1016}
              height={675}
            />
          </div>

          <figcaption className="events-closing-plate__caption">
            <h3 className="events-closing-plate__title">{eventsClosingPlate.title}</h3>
            <p className="events-closing-plate__desc">{eventsClosingPlate.description}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
