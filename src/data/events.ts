import type { EventItem, EventsClosingPlate } from '../types/portfolio';

/**
 * EVENTS & ACTIVITIES DATA
 * Curated around the four genuine departmental activity areas and the verified
 * auditorium foyer interactive minigames photograph.
 */
export const eventsIntro = {
  sectionCode: 'SEC-03 // ACTIVITIES & FIELD DOCUMENTATION',
  title: 'Events & Departmental Activities',
  subtitle:
    'How TechOps contributes across introductory sessions, interactive minigames, student-led workshops, and ongoing technical operations at ACM FAST.',
};

export const eventCategories: Array<EventItem['category'] | 'All'> = [
  'All',
  'Introductory Sessions',
  'Interactive Minigames',
  'Workshops',
  'Technical Operations',
];

export const eventsData: EventItem[] = [
  {
    id: 'evt-intro-sessions',
    code: 'ACT-01',
    category: 'Introductory Sessions',
    name: 'Introductory Sessions',
    scopeLabel: 'Auditorium & Stage Tech',
    shortDescription:
      'TechOps manages technical equipment, presentation support, and stage-related operations during ACM introductory sessions.',
    visualType: 'schematic-intro',
  },
  {
    id: 'evt-minigames',
    code: 'ACT-02',
    category: 'Interactive Minigames',
    name: 'Interactive Minigames',
    scopeLabel: 'Auditorium Exterior Zone',
    shortDescription:
      'TechOps organizes and operates interactive minigames outside the auditorium during society activities, featuring student participation and small prizes.',
    visualType: 'schematic-minigames',
  },
  {
    id: 'evt-workshops',
    code: 'ACT-03',
    category: 'Workshops',
    name: 'Workshops & Learning Sessions',
    scopeLabel: 'Technical & Logistical Support',
    shortDescription:
      'TechOps assists with technical and logistical arrangements for student-led learning initiatives exploring competitive programming and practical coding skills beyond coursework.',
    visualType: 'schematic-workshop',
  },
  {
    id: 'evt-tech-ops',
    code: 'ACT-04',
    category: 'Technical Operations',
    name: 'Technical Operations',
    scopeLabel: 'Ongoing Chapter Support',
    shortDescription:
      'TechOps provides ongoing general IT assistance, technical equipment readiness, and operational troubleshooting across ACM day-to-day activities.',
    visualType: 'schematic-ops',
  },
];

export const eventsClosingPlate: EventsClosingPlate = {
  captionCode: 'FIELD DOCUMENTATION // INTERACTIVE MINIGAMES',
  title: 'Interactive Minigames Outside the Auditorium',
  description:
    'Students engaging with TechOps-operated interactive minigame stations and small prizes outside the auditorium during the ACM NUCES 2026–27 Introductory Session.',
  imageUrl: '/images/events/interactive-minigames.jpg',
  imageAlt:
    'ACM NUCES 2026-27 Introductory Session interactive minigames booth operated by TechOps outside the auditorium with students competing at laptops',
};
