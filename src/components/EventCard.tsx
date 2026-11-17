import type { CSSProperties } from 'react';
import type { EventItem } from '../types/portfolio';

interface EventCardProps {
  event: EventItem;
  index: number;
  animateFilter?: boolean;
}

function ActivitySchematic({ visualType }: { visualType: EventItem['visualType'] }) {
  if (visualType === 'schematic-intro') {
    return (
      <svg
        viewBox="0 0 640 380"
        role="img"
        aria-label="Technical schematic depicting ACM introductory session stage and presentation support"
      >
        <rect width="640" height="380" fill="#14171C" />
        <g stroke="rgba(242,240,233,0.06)" strokeWidth="1">
          <path d="M0 76H640M0 152H640M0 228H640M0 304H640" />
          <path d="M128 0V380M256 0V380M384 0V380M512 0V380" />
        </g>
        <rect x="36" y="36" width="568" height="308" fill="none" stroke="rgba(242,240,233,0.22)" />
        <line x1="36" y1="82" x2="604" y2="82" stroke="rgba(242,240,233,0.16)" />
        <text x="56" y="64" fill="rgba(242,240,233,0.72)" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
          SCHEMATIC // AUDITORIUM AV &amp; PRESENTATION RIG
        </text>
        <rect x="72" y="122" width="286" height="176" fill="#111316" stroke="#F25A38" strokeWidth="1.5" />
        <line x1="102" y1="162" x2="320" y2="162" stroke="rgba(242,240,233,0.45)" strokeWidth="2.5" />
        <line x1="102" y1="190" x2="265" y2="190" stroke="rgba(242,240,233,0.22)" strokeWidth="2" />
        <rect x="102" y="220" width="84" height="44" fill="rgba(242,90,56,0.18)" stroke="#F25A38" />
        <rect x="202" y="220" width="84" height="44" fill="rgba(52,79,197,0.2)" stroke="#344FC5" />
        <circle cx="482" cy="210" r="68" fill="none" stroke="rgba(242,240,233,0.25)" strokeWidth="1.5" />
        <circle cx="482" cy="210" r="38" fill="none" stroke="#F25A38" strokeWidth="1.5" strokeDasharray="5 4" />
        <circle cx="482" cy="210" r="8" fill="#F25A38" />
        <path d="M402 210H444M520 210H562M482 130V172M482 248V290" fill="none" stroke="rgba(242,240,233,0.35)" />
      </svg>
    );
  }

  if (visualType === 'schematic-workshop') {
    return (
      <svg
        viewBox="0 0 640 380"
        role="img"
        aria-label="Technical schematic depicting student-led workshop and practical coding arrangements"
      >
        <rect width="640" height="380" fill="#14171C" />
        <g stroke="rgba(242,240,233,0.06)" strokeWidth="1">
          <path d="M0 76H640M0 152H640M0 228H640M0 304H640" />
          <path d="M128 0V380M256 0V380M384 0V380M512 0V380" />
        </g>
        <rect x="36" y="36" width="568" height="308" fill="none" stroke="rgba(242,240,233,0.22)" />
        <line x1="36" y1="82" x2="604" y2="82" stroke="rgba(242,240,233,0.16)" />
        <text x="56" y="64" fill="rgba(242,240,233,0.72)" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
          SCHEMATIC // WORKSHOP LOGISTICS &amp; LAB READINESS
        </text>
        <rect x="74" y="120" width="492" height="184" fill="#111316" stroke="#344FC5" strokeWidth="1.5" />
        <line x1="74" y1="158" x2="566" y2="158" stroke="rgba(91,115,232,0.4)" />
        <circle cx="98" cy="139" r="4.5" fill="#F25A38" />
        <circle cx="116" cy="139" r="4.5" fill="#5B73E8" />
        <circle cx="134" cy="139" r="4.5" fill="rgba(242,240,233,0.4)" />
        <path d="M108 196H348M108 224H300M108 252H392M108 280H252" fill="none" stroke="rgba(242,240,233,0.45)" strokeWidth="2" />
        <rect x="424" y="184" width="110" height="94" fill="rgba(242,90,56,0.08)" stroke="#F25A38" strokeWidth="1.4" strokeDasharray="4 4" />
        <path d="M454 222L474 238L454 254M482 254H506" fill="none" stroke="#F2F0E9" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 380"
      role="img"
      aria-label="Technical schematic depicting general ACM IT and operational support"
    >
      <rect width="640" height="380" fill="#14171C" />
      <g stroke="rgba(242,240,233,0.06)" strokeWidth="1">
        <path d="M0 76H640M0 152H640M0 228H640M0 304H640" />
        <path d="M128 0V380M256 0V380M384 0V380M512 0V380" />
      </g>
      <rect x="36" y="36" width="568" height="308" fill="none" stroke="rgba(242,240,233,0.22)" />
      <line x1="36" y1="82" x2="604" y2="82" stroke="rgba(242,240,233,0.16)" />
      <text x="56" y="64" fill="rgba(242,240,233,0.72)" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
        SCHEMATIC // CHAPTER IT &amp; OPERATIONAL SUPPORT
      </text>
      <rect x="86" y="128" width="184" height="168" fill="#111316" stroke="rgba(242,240,233,0.3)" />
      <rect x="370" y="128" width="184" height="168" fill="#111316" stroke="rgba(242,240,233,0.3)" />
      <path d="M270 212H370" fill="none" stroke="#F25A38" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="320" cy="212" r="12" fill="#14171C" stroke="#F25A38" strokeWidth="2" />
      <rect x="112" y="158" width="132" height="24" fill="rgba(52,79,197,0.3)" stroke="#5B73E8" />
      <rect x="112" y="198" width="132" height="24" fill="none" stroke="rgba(242,240,233,0.28)" />
      <rect x="112" y="238" width="132" height="24" fill="none" stroke="rgba(242,240,233,0.28)" />
      <rect x="396" y="158" width="132" height="24" fill="rgba(242,90,56,0.25)" stroke="#F25A38" />
      <rect x="396" y="198" width="132" height="24" fill="none" stroke="rgba(242,240,233,0.28)" />
      <rect x="396" y="238" width="132" height="24" fill="none" stroke="rgba(242,240,233,0.28)" />
    </svg>
  );
}

export function EventCard({ event, index, animateFilter = false }: EventCardProps) {
  const isPhoto = event.visualType === 'photo' && event.imageUrl;

  return (
    <article
      className={`event-card ${isPhoto ? 'event-card--featured-photo' : ''} ${
        animateFilter ? 'filter-card-enter' : 'stagger-item'
      }`}
      style={{ '--stagger-idx': index } as CSSProperties}
    >
      <div className="event-card__media">
        {isPhoto ? (
          <img
            src={event.imageUrl}
            alt={event.imageAlt ?? event.name}
            loading="lazy"
            decoding="async"
            width={1016}
            height={675}
            className="event-card__real-photo"
          />
        ) : (
          <ActivitySchematic visualType={event.visualType} />
        )}
      </div>

      <div className="event-card__body">
        <div className="event-card__meta">
          <span>
            {event.code} · {event.category}
          </span>
          <span>{event.scopeLabel}</span>
        </div>

        <h3 className="event-card__title">{event.name}</h3>
        <p className="event-card__desc">{event.shortDescription}</p>
      </div>
    </article>
  );
}
