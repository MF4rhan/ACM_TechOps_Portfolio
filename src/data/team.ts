import type { TeamMember } from '../types/portfolio';

/**
 * TEAM & LEADERSHIP DATA
 * Public-facing executive roster consists strictly of:
 * - EXEC-01: One TechOps Head (center on desktop, first on mobile)
 * - EXEC-02: TechOps Co-Head 01 (left on desktop, second on mobile)
 * - EXEC-03: TechOps Co-Head 02 (right on desktop, third on mobile)
 *
 * Replace placeholders below only with official names, roll numbers, and portraits
 * confirmed by ACM FAST NUCES Karachi leadership.
 */
export const teamIntro = {
  sectionCode: 'SEC-05 // EXECUTIVE LEADERSHIP',
  title: 'Department Leadership',
  subtitle:
    'TechOps operates under an executive triad of one Department Head and two equal Co-Heads. Official names, FAST-NUCES roll numbers, and approved portraits will populate these dossiers upon organizer confirmation.',
  structureNote: 'APPROVED STRUCTURE: 1 TECHOPS HEAD · 2 TECHOPS CO-HEADS',
};

export const teamData: TeamMember[] = [
  {
    id: 'role-techops-head',
    slotCode: 'EXEC-01',
    roleRank: 'head',
    isPrimaryHead: true,
    fullName: 'Details to be confirmed',
    position: 'TECHOPS HEAD',
    departmentUnit: 'Primary Executive Lead',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Leads overall technical operations, oversees equipment readiness during ACM introductory sessions, coordinates general IT support, and aligns technical workflows across society activities.',
    photoUrl: '/images/team/portrait-head.svg',
    photoAlt: 'Official portrait placeholder for ACM FAST TechOps Head',
    isPlaceholder: true,
  },
  {
    id: 'role-techops-cohead-01',
    slotCode: 'EXEC-02',
    roleRank: 'co-head-1',
    isPrimaryHead: false,
    fullName: 'Details to be confirmed',
    position: 'TECHOPS CO-HEAD',
    departmentUnit: 'Executive Co-Lead',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Co-leads departmental operations, oversees auditorium exterior interactive minigame setups and prize logistics, and coordinates live event technical execution.',
    photoUrl: '/images/team/portrait-cohead.svg',
    photoAlt: 'Official portrait placeholder for ACM FAST TechOps Co-Head 01',
    isPlaceholder: true,
  },
  {
    id: 'role-techops-cohead-02',
    slotCode: 'EXEC-03',
    roleRank: 'co-head-2',
    isPrimaryHead: false,
    fullName: 'Details to be confirmed',
    position: 'TECHOPS CO-HEAD',
    departmentUnit: 'Executive Co-Lead',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Co-leads workshop technical and logistical coordination, supports Coders Club learning session setups, and manages general equipment availability for ACM FAST.',
    photoUrl: '/images/team/portrait-cohead-02.svg',
    photoAlt: 'Official portrait placeholder for ACM FAST TechOps Co-Head 02',
    isPlaceholder: true,
  },
];
