import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { EventItem } from '../types/portfolio';

interface LightboxModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export function LightboxModal({ event, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!event) {
      return;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [event, onClose]);

  if (!event) {
    return null;
  }

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__header">
          <span className="mono-label" style={{ color: 'var(--color-orange)' }}>
            {event.code} // {event.category}
          </span>
          <button
            type="button"
            className="lightbox__close"
            onClick={onClose}
            aria-label="Close plate inspector"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="lightbox__body">
          <div className="lightbox__media">
            <img src={event.imageUrl} alt={event.imageAlt} />
          </div>

          <div className="lightbox__content">
            <h3 id="lightbox-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}>
              {event.name}
            </h3>

            <div className="mono-label" style={{ color: 'var(--color-ink-muted-dark)' }}>
              {event.date} · {event.location}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted-dark)' }}>
              {event.shortDescription}
            </p>

            <div
              style={{
                padding: '0.95rem',
                border: '1px solid var(--border-dark)',
                backgroundColor: 'var(--color-graphite)',
                fontSize: '0.88rem',
              }}
            >
              <strong style={{ color: 'var(--color-orange)', display: 'block', marginBottom: '0.3rem' }}>
                TECHOPS INVOLVEMENT
              </strong>
              <span>{event.techOpsInvolvement}</span>
            </div>

            <div
              style={{
                padding: '0.85rem',
                border: '1px dashed var(--border-dark-strong)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-ink-muted-dark)',
              }}
            >
              Status: {event.posterStatus}. Replace image asset at <code>{event.imageUrl}</code> and update event details in <code>src/data/events.ts</code>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
