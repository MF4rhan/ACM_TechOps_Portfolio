interface SectionHeaderProps {
  sectionCode: string;
  title: string;
  subtitle: string;
  headingId: string;
  tag?: string;
}

export function SectionHeader({ sectionCode, title, subtitle, headingId, tag }: SectionHeaderProps) {
  return (
    <div className="section-header" data-reveal="header">
      <div className="section-header__meta">
        <span className="section-header__code">
          <span className="section-header__dot" aria-hidden="true" />
          <span>{sectionCode}</span>
        </span>
        {tag && <span className="mono-label">{tag}</span>}
      </div>

      <div className="section-header__grid">
        <h2 id={headingId} className="section-header__title">
          {title}
        </h2>
        <p className="section-header__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
