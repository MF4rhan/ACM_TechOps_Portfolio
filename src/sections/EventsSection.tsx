import { useState } from 'react';
import { eventCategories, eventsData, eventsIntro } from '../data/events';
import { SectionHeader } from '../components/SectionHeader';
import { EventCard } from '../components/EventCard';
import { LightboxModal } from '../components/LightboxModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { EventItem } from '../types/portfolio';

export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<EventItem['category'] | 'All'>('All');
  const [inspectedEvent, setInspectedEvent] = useState<EventItem | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const filteredEvents =
    selectedCategory === 'All'
      ? eventsData
      : eventsData.filter((event) => event.category === selectedCategory);

  return (
    <section id="events" aria-labelledby="events-heading" className="section section--light">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
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
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onInspect={setInspectedEvent} />
          ))}
        </div>
      </div>

      <LightboxModal event={inspectedEvent} onClose={() => setInspectedEvent(null)} />
    </section>
  );
}
