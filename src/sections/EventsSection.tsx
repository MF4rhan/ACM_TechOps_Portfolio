import { useEffect, useRef, useState } from 'react';
import { eventCategories, eventsData, eventsIntro } from '../data/events';
import { SectionHeader } from '../components/SectionHeader';
import { EventCard } from '../components/EventCard';
import { LightboxModal } from '../components/LightboxModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { EventItem } from '../types/portfolio';

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<EventItem['category'] | 'All'>('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterGeneration, setFilterGeneration] = useState(0);
  const [inspectedEvent, setInspectedEvent] = useState<EventItem | null>(null);
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
          tag={`SHOWING ${filteredEvents.length} PLATES`}
        />

        <div className="filter-bar" role="group" aria-label="Filter events by activity type">
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
                onInspect={setInspectedEvent}
              />
            ))}
          </div>
        </div>
      </div>

      <LightboxModal event={inspectedEvent} onClose={() => setInspectedEvent(null)} />
    </section>
  );
}
