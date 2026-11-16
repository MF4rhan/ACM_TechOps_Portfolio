import { teamData, teamIntro } from '../data/team';
import { SectionHeader } from '../components/SectionHeader';
import { TeamCard } from '../components/TeamCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TeamSection() {
  const { ref, revealClassName } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="team" aria-labelledby="team-heading" className="section section--dark">
      <div ref={ref} className={`container ${revealClassName}`}>
        <SectionHeader
          sectionCode={teamIntro.sectionCode}
          title={teamIntro.title}
          subtitle={teamIntro.subtitle}
          headingId="team-heading"
          tag={teamIntro.structureNote}
        />

        <div className="team-podium-grid">
          {teamData.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
