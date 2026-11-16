import type { CSSProperties } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { contactData } from '../data/contact';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ContactSection() {
  const { ref, revealClassName } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section section--dark grid-backdrop-dark"
    >
      <div ref={ref} className={`container ${revealClassName}`}>
        <SectionHeader
          sectionCode={contactData.sectionCode}
          title={contactData.title}
          subtitle={contactData.subtitle}
          headingId="contact-heading"
          tag="FAST-NUCES KARACHI CHAPTER"
        />

        <div className="contact-layout">
          <div className="contact-callout stagger-item" style={{ '--stagger-idx': 0 } as CSSProperties}>
            <h3 className="contact-callout__title">{contactData.joinCalloutTitle}</h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--color-ink-muted-dark)' }}>
              {contactData.joinCalloutBody}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '1rem',
                border: '1px solid var(--border-dark)',
                backgroundColor: 'var(--color-graphite)',
              }}
            >
              <MapPin
                size={18}
                aria-hidden="true"
                style={{ color: 'var(--color-orange)', flexShrink: 0, marginTop: '2px' }}
              />
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ fontWeight: 600 }}>{contactData.campusLocation.institution}</div>
                <div style={{ color: 'var(--color-ink-muted-dark)' }}>
                  {contactData.campusLocation.campus} · {contactData.campusLocation.city}
                </div>
                <div
                  className="mono-label"
                  style={{ color: 'var(--color-orange)', marginTop: '0.35rem' }}
                >
                  {contactData.campusLocation.officeNote}
                </div>
              </div>
            </div>

            <div className="contact-tracks" aria-label="Ways to participate in TechOps and Coders Club">
              {contactData.participationTracks.map((track) => (
                <div key={track.code} className="contact-track">
                  <div className="contact-track__code">{track.code}</div>
                  <div className="contact-track__role">{track.roleTitle}</div>
                  <div className="contact-track__focus">{track.focus}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="stagger-item" style={{ '--stagger-idx': 1 } as CSSProperties}>
            <div className="mono-label" style={{ color: 'var(--color-ink-muted-dark)', marginBottom: '0.85rem' }}>
              OFFICIAL CHANNELS & VERIFICATION STATUS
            </div>

            <div className="contact-channels">
              {contactData.channels.map((channel) => (
                <div key={channel.id} className="channel-row">
                  <div>
                    <span className="channel-row__label">
                      {channel.channelType} · {channel.label}
                    </span>
                    <span className="channel-row__value">{channel.displayValue}</span>
                  </div>

                  {channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-row__link"
                    >
                      <span>Open Channel</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="status-chip status-chip--pending-dark">
                      {channel.statusNote}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
