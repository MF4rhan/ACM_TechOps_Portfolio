import { Maximize2, ExternalLink } from 'lucide-react';
import type { EventItem } from '../types/portfolio';

interface EventCardProps {
  event: EventItem;
  onInspect: (event: EventItem) => void;
}

export function EventCard({ event, onInspect }: EventCardProps) {
  return (
    <article className="event-card">
      <div className="event-card__media">
        <img
          src={event.imageUrl}
          alt={event.imageAlt}
          loading={event.isPlaceholder ? 'eager' : 'lazy'}
          decoding="async"
          width={800}
          height={520}
        />
        <button
          type="button"
          className="event-card__inspect"
          onClick={() => onInspect(event)}
          aria-label={`Inspect gallery plate for ${event.name}`}
        >
          <Maximize2 size={13} aria-hidden="true" />
          <span>Inspect Plate</span>
        </button>
      </div>

      <div className="event-card__body">
        <div className="event-card__meta">
          <span>
            {event.code} · {event.category}
          </span>
          <span>{event.date}</span>
        </div>

        <h3 className="event-card__title">{event.name}</h3>
        <p className="event-card__desc">{event.shortDescription}</p>

        <div className="event-card__ops">{event.techOpsInvolvement}</div>

        <div className="event-card__footer">
          <span>{event.location}</span>
          {event.externalUrl ? (
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                color: 'var(--color-cobalt)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>Official Link</span>
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          ) : (
            <span className="status-chip status-chip--pending-light">{event.posterStatus}</span>
          )}
        </div>
      </div>
    </article>
  );
}
