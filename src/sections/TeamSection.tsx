import { teamData, teamIntro } from '../data/team';
import { SectionHeader } from '../components/SectionHeader';
import { TeamCard } from '../components/TeamCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const executiveTeam = teamData.filter((member) => member.tier === 'executive');
  const supportingRoster = teamData.filter((member) => member.tier !== 'executive');

  return (
    <section id="team" aria-labelledby="team-heading" className="section section--dark">
      <div ref={ref} className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          sectionCode={teamIntro.sectionCode}
          title={teamIntro.title}
          subtitle={teamIntro.subtitle}
          headingId="team-heading"
          tag="HEAD & CO-HEAD EXPLICITLY RESERVED"
        />

        <div className="team-tier-label">
          <span className="team-tier-label__title">01 // TechOps Executive Leadership</span>
          <span className="mono-label" style={{ color: 'var(--color-ink-muted-dark)' }}>
            {teamIntro.structureNote}
          </span>
        </div>

        <div className="team-exec-grid">
          {executiveTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="team-tier-label">
          <span className="team-tier-label__title">
            02 // Coders Club Leadership, Approved Leads & Core Roster
          </span>
          <span className="mono-label" style={{ color: 'var(--color-ink-muted-dark)' }}>
            SEPARATE ATTRIBUTION WHERE CONFIRMED BY ACM FAST
          </span>
        </div>

        <div className="team-roster-grid">
          {supportingRoster.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
