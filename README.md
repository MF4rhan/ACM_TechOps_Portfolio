# ACM FAST NUCES Karachi — TechOps Department Portfolio

## 1. Project Overview

This is the official portfolio website for the **ACM FAST NUCES Karachi TechOps Department**. It documents the department's technical and operational role within the ACM FAST student chapter, including introductory session equipment management, auditorium foyer interactive minigames, general IT and operational support, workshop logistics, leadership structure, and a prominent monograph dedicated to **Coders Club** educational contributions.

All content is separated from the presentation layer and currently uses clearly labeled, factual placeholders wherever official event records, names, roll numbers, statistics, or URLs are awaiting confirmation from ACM FAST organizers.

---

## 2. Technologies Used

- **Vite 6** — Fast frontend build tooling and local development server
- **React 18** — Component-driven UI architecture
- **TypeScript 5** — Strict type safety across data files and UI components
- **Custom CSS (Design Tokens)** — Editorial engineering design system using CSS custom properties (`#111316`, `#F2F0E9`, `#F25A38`, `#344FC5`)
- **Lucide React** — Crisp UI icons

---

## 3. Project Structure

```text
ACM_TechOps_Portfolio/
├── index.html                  # Document metadata, favicon link, Google Fonts
├── package.json                # Scripts and dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration (outputs to dist/)
├── PLACEHOLDERS.md             # Inventory of information awaiting organizer input
├── public/
│   ├── favicon.svg             # Typographic ACM TechOps favicon
│   └── images/
│       ├── coders-club/        # Coders Club workshop/session posters & photos
│       ├── events/             # Event & activity photographs
│       ├── projects/           # Technical project screenshots
│       └── team/               # Leadership and team member portraits
└── src/
    ├── App.tsx                 # Single-page composition & active-section tracking
    ├── main.tsx                # Application entry point
    ├── types/
    │   └── portfolio.ts        # Shared TypeScript interfaces for all content files
    ├── styles/
    │   ├── tokens.css          # Brand palette, typography scale, spacing & motion tokens
    │   ├── global.css          # Reset, base layout, section themes, buttons, accessibility
    │   ├── components.css      # Navbar, HeroSchematic, Lightbox, Footer styles
    │   └── sections.css        # Section-specific editorial grid layouts
    ├── hooks/
    │   └── useScrollReveal.ts  # IntersectionObserver reveal hook respecting reduced motion
    ├── data/                   # Replaceable content layer (edit these to update the site)
    │   ├── site.ts             # Hero copy, highlights, schematic nodes, About TechOps
    │   ├── projects.ts         # Technical projects and infrastructure records
    │   ├── codersClub.ts       # Coders Club tracks and verified contributions
    │   ├── events.ts           # Events gallery records and plate metadata
    │   ├── team.ts             # Head, Co-Head, Coders Club leadership, leads & members
    │   ├── achievements.ts     # Verified outcomes and approved statistical metrics
    │   └── contact.ts          # Campus information, joining tracks & official channels
    ├── components/             # Reusable UI components
    │   ├── Navbar.tsx
    │   ├── SectionHeader.tsx
    │   ├── HeroSchematic.tsx
    │   ├── ProjectCard.tsx
    │   ├── CodersClubCard.tsx
    │   ├── EventCard.tsx
    │   ├── LightboxModal.tsx
    │   ├── TeamCard.tsx
    │   └── Footer.tsx
    └── sections/               # All 8 required portfolio sections
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ProjectsSection.tsx
        ├── CodersClubSection.tsx
        ├── EventsSection.tsx
        ├── TeamSection.tsx
        ├── AchievementsSection.tsx
        └── ContactSection.tsx
```

---

## 4. Prerequisites

- **Node.js** (v18 or newer recommended)
- **npm** (v9 or newer recommended)

---

## 5. Installation Instructions

```bash
npm install
```

---

## 6. Development Server Instructions

Start the local Vite development server with hot module replacement:

```bash
npm run dev
```

Open the local URL printed in the terminal (typically `http://localhost:5173`).

---

## 7. Production Build Instructions

Type-check with TypeScript and generate the optimized static bundle in `dist/`:

```bash
npm run build
```

You can preview the production build locally using:

```bash
npm run preview
```

---

## 8. How to Update Website Content

All textual content, URLs, dates, and media paths live inside `src/data/`. You do **not** need to alter JSX components or CSS styles to update information:

- **Department Overview & Hero**: Edit `src/data/site.ts`
- **Achievements & Metrics**: Edit `src/data/achievements.ts` (keep `isPlaceholder: false` and update `verificationStatus: 'Verified Scope'` once numbers are officially approved)
- **Contact & Social Channels**: Edit `src/data/contact.ts` (set `url` from `null` to the verified `https://...` or `mailto:...` link so interactive links activate automatically)
- **Official Brand Logo**: Currently uses a deliberate typographic mark in `src/components/Navbar.tsx`; replace `.navbar__mark` with an official SVG or `<img>` asset if supplied.

---

## 9. Where Project Information Is Stored

Project records are managed in `src/data/projects.ts`.

Each item in `projectsData` follows the `ProjectItem` interface (`src/types/portfolio.ts`) with fields for `name`, `category`, `status`, `dateOrYear`, `purpose`, `description`, `techOpsContribution`, `technologies`, `outcome`, `screenshotUrl`, `repositoryUrl`, and `liveUrl`. Set `isPlaceholder: false` and `status: 'Confirmed'` when replacing a slot with verified data, and place screenshots inside `public/images/projects/`.

---

## 10. How to Add or Replace Event Photographs

1. Place approved `.webp`, `.jpg`, or `.png` photographs into `public/images/events/`.
2. Open `src/data/events.ts`.
3. Update `imageUrl` (for example, `'/images/events/intro-session-2026.webp'`) and write accurate `imageAlt` descriptions, `name`, `date`, `location`, `shortDescription`, `techOpsInvolvement`, and `posterStatus`.
4. To add more events, append new objects to `eventsData`. The responsive gallery and lightbox inspector scale automatically to any number of records.

---

## 11. How to Update Team Details and Roll Numbers

Executive leadership records are stored in `src/data/team.ts` (`EXEC-01` TechOps Head, `EXEC-02` TechOps Co-Head 01, and `EXEC-03` TechOps Co-Head 02).

1. Place approved portrait images in `public/images/team/` (`portrait-head.svg`, `portrait-cohead.svg`, `portrait-cohead-02.svg` or raster `.webp`/`.jpg` replacements).
2. Update the three entries (`role-techops-head`, `role-techops-cohead-01`, `role-techops-cohead-02`) with confirmed `fullName`, `rollNumber`, `responsibilities`, `photoUrl`, and `photoAlt`.
3. Set `isPlaceholder: false` on confirmed entries.
4. Footer social URLs and developer LinkedIn attribution (`developerLinkedInUrl`) are configured in `src/data/site.ts`.

---

## 12. How to Update Coders Club Contributions

Coders Club content is managed in `src/data/codersClub.ts`.

- Update `focusTracks` if the official learning tracks expand.
- Add or update entries in `contributions` with verified `title`, `period`, `purpose`, `codersClubRole`, `communityBenefit`, `posterUrl` (stored in `public/images/coders-club/`), and `evidenceUrl`.
- Keep Coders Club contributions distinct from initiatives owned exclusively by other ACM departments.

---

## 13. How to Deploy on Vercel

This Vite + React + TypeScript site builds cleanly into a static `dist/` directory and requires zero custom server configuration.

1. Open [Vercel](https://vercel.com/) and sign in with the connected GitHub account (`MF4rhan/ACM_TechOps_Portfolio`).
2. Click **Add New → Project** and import the `ACM_TechOps_Portfolio` repository.
3. Verify the auto-detected settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. Once deployment completes, open and verify the generated `https://*.vercel.app` public URL across desktop and mobile viewports.
