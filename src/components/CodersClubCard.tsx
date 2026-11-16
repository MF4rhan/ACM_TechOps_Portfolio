import { ExternalLink } from 'lucide-react';
import type { CodersClubContribution } from '../types/portfolio';

interface CodersClubCardProps {
  contribution: CodersClubContribution;
}

export function CodersClubCard({ contribution }: CodersClubCardProps) {
  return (
    <article className="cc-card">
      <div
        className={`cc-card__poster ${
          contribution.isPlaceholder ? 'cc-card__poster--blueprint' : ''
        }`}
      >
        <img
          src={contribution.posterUrl}
          alt={contribution.posterAlt}
          loading={contribution.isPlaceholder ? 'eager' : 'lazy'}
          decoding="async"
          width={720}
          height={480}
        />
      </div>

      <div className="cc-card__body">
        <div className="cc-card__header">
          <span className="cc-card__track">
            {contribution.code} · {contribution.track}
          </span>
          <span
            className={`status-chip ${
              contribution.isPlaceholder ? 'status-chip--pending-dark' : 'status-chip--verified-dark'
            }`}
          >
            {contribution.status}
          </span>
        </div>

        <h3 className="cc-card__title">{contribution.title}</h3>
        <div className="mono-label" style={{ color: 'var(--color-ink-muted-dark)' }}>
          Period: {contribution.period}
        </div>

        <div className="cc-card__specs">
          <div>
            <div className="cc-card__spec-label">Purpose</div>
            <p className="cc-card__spec-text">{contribution.purpose}</p>
          </div>
          <div>
            <div className="cc-card__spec-label">Coders Club Role</div>
            <p className="cc-card__spec-text">{contribution.codersClubRole}</p>
          </div>
          <div>
            <div className="cc-card__spec-label">Benefit to ACM FAST Students</div>
            <p className="cc-card__spec-text">{contribution.communityBenefit}</p>
          </div>
        </div>

        <div style={{ paddingTop: '0.4rem' }}>
          {contribution.evidenceUrl ? (
            <a
              href={contribution.evidenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--cobalt"
            >
              <span>View Approved Record</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : (
            <span className="status-chip status-chip--verified-dark">
              Evidence / Session Link Pending Confirmation
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
