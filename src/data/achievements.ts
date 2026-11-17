import type { ImpactItem } from '../types/portfolio';

/**
 * DEPARTMENTAL IMPACT DATA
 * Qualitative presentation of TechOps' verified operational contributions
 * without fabricated metrics, attendee figures, or unverified scoreboard claims.
 */
export const achievementsIntro = {
  sectionCode: 'SEC-05 // DEPARTMENTAL IMPACT',
  title: 'Operational Contributions',
  subtitle:
    'Rather than relying on inflated metrics, TechOps measures its value through dependable execution across society sessions, student engagement booths, and educational logistics.',
};

export const achievementsData: ImpactItem[] = [
  {
    id: 'imp-01',
    code: 'IMP-01',
    category: 'Introductory & Chapter Sessions',
    title: 'Supporting the Technical Execution of ACM Activities',
    description:
      'Maintaining presentation readiness, audio-visual gear, and live stage technical operations so ACM introductory sessions run smoothly.',
  },
  {
    id: 'imp-02',
    code: 'IMP-02',
    category: 'Auditorium Foyer',
    title: 'Creating Interactive Student Experiences',
    description:
      'Setting up and running interactive minigame booths with small prizes outside the auditorium to welcome students and spark active participation.',
  },
  {
    id: 'imp-03',
    code: 'IMP-03',
    category: 'Workshops & Coders Club',
    title: 'Enabling Technical & Logistical Arrangements for Student-Led Learning',
    description:
      'Coordinating room readiness, equipment setup, and logistics that help facilitators deliver practical coding and competitive programming sessions.',
  },
  {
    id: 'imp-04',
    code: 'IMP-04',
    category: 'Core Infrastructure',
    title: 'Providing Operational IT Support',
    description:
      'Delivering steady IT assistance, equipment maintenance, and rapid troubleshooting across ACM FAST NUCES Karachi day-to-day activities.',
  },
];
