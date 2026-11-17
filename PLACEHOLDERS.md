# Content Verification & Asset Status

Following the content simplification and real photography integration pass, placeholder blocks and unverified metric tables have been removed from the public site.

## Integrated Verified Assets
- **Leadership Portraits (`public/images/team/`)**:
  - `uzair-mustafa-head.jpg` — **Uzair Mustafa**, TechOps Head (`EXEC-01`)
  - `ahsan-abbasi-cohead.jpg` — **Ahsan Abbasi**, TechOps Co-Head (`EXEC-02`)
  - `muhammad-fareed-cohead.jpg` — **Muhammad Fareed**, TechOps Co-Head (`EXEC-03`)
- **Activity Photography (`public/images/events/`)**:
  - `interactive-minigames.jpg` — ACM NUCES 2026–27 Introductory Session Interactive Minigames outside the auditorium (`ACT-02` & Closing Photographic Plate)
- **Official Channels (`src/data/site.ts`, `src/data/contact.ts`)**:
  - Instagram: `https://www.instagram.com/acmnuceskhi/`
  - LinkedIn: `https://www.linkedin.com/company/acmnuceskhi/`
  - Facebook: `https://www.facebook.com/acmnuceskhi/`
  - Developer Attribution LinkedIn: `https://www.linkedin.com/in/muhammad-farhan-cs/`

## Optional Future Additions (Not Required for Launch)
- **Student Roll Numbers (`src/data/team.ts`)**: `rollNumber` is supported as an optional field on `TeamMember` and omitted visually unless explicitly supplied by leadership.
- **Official Vector Logo (`src/components/Navbar.tsx`)**: Currently uses a clean architectural typographic mark (`ACM FAST // TECHOPS DEPARTMENT`); swap `.navbar__mark` if an official chapter vector asset is supplied.
