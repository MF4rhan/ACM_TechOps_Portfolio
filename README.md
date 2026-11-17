# ACM FAST NUCES Karachi — TechOps Department Portfolio

## 1. Project Overview

This is the official portfolio website for the **ACM FAST NUCES Karachi TechOps Department**. It presents the department's real operational responsibilities within the ACM FAST student chapter, including introductory session technical operations, auditorium foyer interactive minigames, general IT support, workshop logistics, executive leadership (`1 Head` & `2 Co-Heads`), and a dedicated educational monograph for **Coders Club**.

---

## 2. Technologies Used

- **Vite 6** — Frontend build tooling and local development server
- **React 18** — Component-driven UI architecture
- **TypeScript 5** — Strict type safety across data files and UI components
- **Custom CSS (Design Tokens)** — Editorial engineering design system (`#111316`, `#F2F0E9`, `#F25A38`, `#344FC5`)
- **Lucide React** — UI icons

---

## 3. Project Structure

```text
ACM_TechOps_Portfolio/
├── index.html                  # Document metadata, favicon link, Google Fonts
├── package.json                # Scripts and dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration (outputs to dist/)
├── PLACEHOLDERS.md             # Content verification status log
├── public/
│   ├── favicon.svg             # Typographic ACM TechOps favicon
│   └── images/
│       ├── events/             # Real minigames activity photograph
│       └── team/               # Real TechOps Head and Co-Heads portraits
└── src/
    ├── App.tsx                 # Single-page composition & scroll-spy tracking
    ├── main.tsx                # Application entry point
    ├── types/
    │   └── portfolio.ts        # Shared TypeScript interfaces
    ├── styles/
    │   ├── tokens.css          # Brand palette, typography scale, spacing & motion tokens
    │   ├── global.css          # Reset, base layout, animation keyframes, reduced motion
    │   ├── components.css      # Navbar, HeroSchematic, Filter transitions, Footer styles
    │   └── sections.css        # Section-specific editorial layouts
    ├── hooks/
    │   └── useScrollReveal.ts  # Progressive scroll-reveal hook respecting reduced motion
    ├── data/                   # Separated content modules
    │   ├── site.ts             # Brand, navigation (00–06), hero, schematic, About & footer
    │   ├── codersClub.ts       # Coders Club mandate & learning focus themes
    │   ├── events.ts           # Four departmental activity areas & closing field plate
    │   ├── team.ts             # TechOps Head (Uzair Mustafa) & Co-Heads (Ahsan Abbasi, Muhammad Fareed)
    │   ├── achievements.ts     # Qualitative operational impact pillars
    │   └── contact.ts          # FAST-NUCES Karachi details, tracks & official socials
    ├── components/             # Reusable UI components
    │   ├── Navbar.tsx
    │   ├── SectionHeader.tsx
    │   ├── HeroSchematic.tsx
    │   ├── EventCard.tsx
    │   ├── TeamCard.tsx
    │   └── Footer.tsx
    └── sections/               # All 7 active portfolio sections
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── CodersClubSection.tsx
        ├── EventsSection.tsx
        ├── TeamSection.tsx
        ├── AchievementsSection.tsx
        └── ContactSection.tsx
```

---

## 4. Development & Build Commands

```bash
npm install      # Install dependencies
npm run dev      # Start local Vite dev server (http://localhost:5173)
npm run build    # Type-check and build static production bundle into dist/
npm run preview  # Preview the production build locally
```

---

## 5. Updating Content & Photography

- **Overview, Navigation & Footer (`src/data/site.ts`)**: Update navigation items (`00`–`06`), hero schematic nodes, About TechOps responsibilities, official social links, or `footer.developerLinkedInUrl`.
- **Coders Club (`src/data/codersClub.ts`)**: Update the mandate copy and `learningThemes`.
- **Events & Activities (`src/data/events.ts`, `public/images/events/`)**: Update the four activity areas or `eventsClosingPlate`.
- **Executive Leadership (`src/data/team.ts`, `public/images/team/`)**: Update `Uzair Mustafa` (`EXEC-01`), `Ahsan Abbasi` (`EXEC-02`), and `Muhammad Fareed` (`EXEC-03`), including optional `rollNumber` values if added later.
- **Departmental Impact (`src/data/achievements.ts`)**: Update the four qualitative impact items.
- **Contact & Socials (`src/data/contact.ts`)**: Manage campus details, participation tracks, and official ACM FAST social channels.

---

## 6. Deployment on Vercel

This Vite + React + TypeScript application builds into static files under `dist/` and deploys directly from the connected GitHub repository (`MF4rhan/ACM_TechOps_Portfolio`) with `Framework Preset: Vite`, `Build Command: npm run build`, and `Output Directory: dist`.
