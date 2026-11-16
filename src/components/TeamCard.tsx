import type { TeamMember } from '../types/portfolio';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const isExecutive = member.tier === 'executive';
  const isCodersLeadership = member.tier === 'coders-club-leadership';

  const cardClasses = [
    'team-card',
    isExecutive ? 'team-card--exec' : '',
    isCodersLeadership ? 'team-card--coders' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cardClasses}>
      <div className="team-card__photo">
        <img
          src={member.photoUrl}
          alt={member.photoAlt}
          loading={member.isPlaceholder ? 'eager' : 'lazy'}
          decoding="async"
          width={420}
          height={500}
        />
      </div>

      <div className="team-card__body">
        <div className="team-card__slot">
          <span>{member.slotCode}</span>
          <span>{member.departmentUnit}</span>
        </div>

        <h3 className="team-card__position">{member.position}</h3>
        <div className="team-card__name">{member.fullName}</div>
        <div className="team-card__roll">{member.rollNumber}</div>

        <p className="team-card__resp">{member.responsibilities}</p>
      </div>
    </article>
  );
}
