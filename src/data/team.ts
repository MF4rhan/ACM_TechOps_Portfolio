import type { TeamMember } from '../types/portfolio';

/**
 * TEAM & LEADERSHIP DATA
 * Official three-person executive leadership confirmed from ACM 2026 portrait assets:
 * - EXEC-01: Uzair Mustafa — TechOps Head (Center on desktop, first on mobile)
 * - EXEC-02: Ahsan Abbasi — TechOps Co-Head (Left on desktop, second on mobile)
 * - EXEC-03: Muhammad Fareed — TechOps Co-Head (Right on desktop, third on mobile)
 */
export const teamIntro = {
  sectionCode: 'SEC-04 // EXECUTIVE LEADERSHIP',
  title: 'Department Leadership',
  subtitle:
    'ACM FAST TechOps is led by one Department Head and two Co-Heads overseeing technical equipment, interactive booths, workshop logistics, and society-wide IT support.',
  structureNote: 'ACM 2026–27 · 1 HEAD · 2 CO-HEADS',
};

export const teamData: TeamMember[] = [
  {
    id: 'role-techops-head',
    slotCode: 'EXEC-01',
    roleRank: 'head',
    isPrimaryHead: true,
    fullName: 'Uzair Mustafa',
    position: 'TECHOPS HEAD',
    departmentUnit: 'ACM 2026',
    responsibilities:
      'Leads departmental technical operations, introductory session equipment readiness, and society-wide IT coordination.',
    photoUrl: '/images/team/uzair-mustafa-head.jpg',
    photoAlt: 'Official ACM 2026 portrait of Uzair Mustafa, TechOps Head',
  },
  {
    id: 'role-techops-cohead-01',
    slotCode: 'EXEC-02',
    roleRank: 'co-head-1',
    isPrimaryHead: false,
    fullName: 'Ahsan Abbasi',
    position: 'TECHOPS CO-HEAD',
    departmentUnit: 'ACM 2026',
    responsibilities:
      'Co-leads on-ground technical execution, auditorium exterior interactive minigames, and live event equipment setups.',
    photoUrl: '/images/team/ahsan-abbasi-cohead.jpg',
    photoAlt: 'Official ACM 2026 portrait of Ahsan Abbasi, TechOps Co-Head',
  },
  {
    id: 'role-techops-cohead-02',
    slotCode: 'EXEC-03',
    roleRank: 'co-head-2',
    isPrimaryHead: false,
    fullName: 'Muhammad Fareed',
    position: 'TECHOPS CO-HEAD',
    departmentUnit: 'ACM 2026',
    responsibilities:
      'Co-leads workshop technical and logistical arrangements, learning session readiness, and operational troubleshooting.',
    photoUrl: '/images/team/muhammad-fareed-cohead.jpg',
    photoAlt: 'Official ACM 2026 portrait of Muhammad Fareed, TechOps Co-Head',
  },
];
