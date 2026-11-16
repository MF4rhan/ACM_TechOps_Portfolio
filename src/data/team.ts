import type { TeamMember } from '../types/portfolio';

/**
 * TEAM & LEADERSHIP DATA
 * Replace placeholders below only with names, roll numbers, roles, and approved photographs
 * officially confirmed by ACM FAST leadership.
 * Per SRS Section 4.6: TechOps Head and Co-Head are explicitly highlighted, and any separate
 * Coders Club leadership structure should remain clearly labeled once confirmed.
 */
export const teamIntro = {
  sectionCode: 'SEC-05 // LEADERSHIP & DEPARTMENT ROSTER',
  title: 'Team & Leadership Structure',
  subtitle:
    'Explicitly reserving official leadership dossiers for the TechOps Head, TechOps Co-Head, Coders Club leadership (where separately confirmed), and approved domain leads. No names, roll numbers, or unconfirmed reporting hierarchies are fabricated.',
  structureNote:
    'Leadership names, student roll numbers, and portraits will be populated upon receipt of the official ACM FAST roster.',
};

export const teamData: TeamMember[] = [
  {
    id: 'role-techops-head',
    slotCode: 'EXEC-01',
    tier: 'executive',
    fullName: 'Leadership details awaiting approval',
    position: 'TechOps Head',
    departmentUnit: 'ACM FAST TechOps Department',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Leads overall technical operations, oversees equipment readiness for ACM introductory sessions, coordinates IT support, and aligns operational workflows across society events.',
    photoUrl: '/images/team/portrait-head.svg',
    photoAlt: 'Official portrait placeholder for ACM FAST TechOps Head',
    isPlaceholder: true,
  },
  {
    id: 'role-techops-cohead',
    slotCode: 'EXEC-02',
    tier: 'executive',
    fullName: 'Leadership details awaiting approval',
    position: 'TechOps Co-Head',
    departmentUnit: 'ACM FAST TechOps Department',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Co-leads departmental planning, coordinates foyer minigame stations and workshop logistics, and supports team deployment during active society programs.',
    photoUrl: '/images/team/portrait-cohead.svg',
    photoAlt: 'Official portrait placeholder for ACM FAST TechOps Co-Head',
    isPlaceholder: true,
  },
  {
    id: 'role-coders-club-leadership',
    slotCode: 'CC-LEAD-01',
    tier: 'coders-club-leadership',
    fullName: 'Leadership details awaiting approval',
    position: 'Coders Club Leadership (Head / Co-Head if separately structured)',
    departmentUnit: 'Coders Club · ACM FAST',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Reserved separate slot per SRS 4.6 for Coders Club leadership as officially structured and confirmed by ACM FAST—clearly distinguished from general TechOps reporting lines.',
    photoUrl: '/images/team/portrait-lead.svg',
    photoAlt: 'Official portrait placeholder for Coders Club leadership slot',
    isPlaceholder: true,
  },
  {
    id: 'role-domain-lead-01',
    slotCode: 'LEAD-01',
    tier: 'lead',
    fullName: 'Details to be confirmed',
    position: 'Approved Domain Lead — Slot 01',
    departmentUnit: 'TechOps Operations / Technical Support',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Accommodates officially approved domain leads (e.g., Event AV, Interactive Booths, or Workshop Logistics) once confirmed by the society.',
    photoUrl: '/images/team/portrait-lead.svg',
    photoAlt: 'Official portrait placeholder for Approved Domain Lead slot 01',
    isPlaceholder: true,
  },
  {
    id: 'role-member-01',
    slotCode: 'MEM-01',
    tier: 'member',
    fullName: 'Details to be confirmed',
    position: 'TechOps Team Member — Roster Slot',
    departmentUnit: 'ACM FAST TechOps Core Team',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Supports technical setup, interactive auditorium minigame stations, workshop preparation, and live society operations.',
    photoUrl: '/images/team/portrait-member.svg',
    photoAlt: 'Official portrait placeholder for TechOps Core Team member slot',
    isPlaceholder: true,
  },
  {
    id: 'role-member-02',
    slotCode: 'MEM-02',
    tier: 'member',
    fullName: 'Details to be confirmed',
    position: 'Coders Club Facilitator / Member — Roster Slot',
    departmentUnit: 'Coders Club · Technical Education',
    rollNumber: 'Roll No: To be confirmed',
    responsibilities:
      'Supports student-led coding sessions, competitive programming practice, and peer workshops upon official confirmation.',
    photoUrl: '/images/team/portrait-member.svg',
    photoAlt: 'Official portrait placeholder for Coders Club facilitator slot',
    isPlaceholder: true,
  },
];
