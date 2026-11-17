import type { CSSProperties } from 'react';
import type { TeamMember } from '../types/portfolio';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const rankClass =
    member.roleRank === 'head'
      ? 'team-card--head'
      : member.roleRank === 'co-head-1'
        ? 'team-card--cohead-left'
        : 'team-card--cohead-right';

  return (
    <article
      className={`team-card ${rankClass} stagger-item`}
      style={{ '--stagger-idx': index } as CSSProperties}
    >
      <div className="team-card__photo">
        <img
          src={member.photoUrl}
          alt={member.photoAlt}
          loading="lazy"
          decoding="async"
          width={808}
          height={910}
        />
      </div>

      <div className="team-card__body">
        <div className="team-card__slot">
          <span>
            {member.slotCode}
            {member.isPrimaryHead ? ' · PRIMARY LEAD' : ''}
          </span>
          <span>{member.departmentUnit}</span>
        </div>

        <h3 className="team-card__position">{member.position}</h3>
        <div className="team-card__name">{member.fullName}</div>
        {member.rollNumber && <div className="team-card__roll">{member.rollNumber}</div>}

        <p className="team-card__resp">{member.responsibilities}</p>
      </div>
    </article>
  );
}
