import type { EventItem } from '../types/portfolio';

/**
 * EVENTS & ACTIVITIES GALLERY DATA
 * Add any number of events below. The gallery layout and lightbox inspector
 * adapt automatically as photographs and verified event records are added.
 */
export const eventsIntro = {
  sectionCode: 'SEC-04 // EVENTS, GALLERY & ON-GROUND OPERATIONS',
  title: 'Events & Activity Contact Sheet',
  subtitle:
    'Documenting ACM FAST introductory sessions, auditorium foyer interactive minigames, workshops, and technical support operations. Architectural plate placeholders currently indicate where official photography will be inserted.',
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
    id: 'evt-intro-session',
    code: 'FRAME-01',
    category: 'Introductory Sessions',
    name: 'ACM Introductory Sessions — Event Details to be Confirmed',
    date: 'Date to be confirmed',
    location: 'Auditorium / Campus Venue (Pending exact room record)',
    shortDescription:
      'Society introductory sessions welcoming students to ACM FAST chapters, departments, and technical pathways.',
    techOpsInvolvement:
      'Confirmed TechOps Scope: Managing technical equipment, presentation feeds, audio checks, and live stage technology during introductory sessions.',
    imageUrl: '/images/events/event-intro-session.svg',
    imageAlt: 'Architectural contact-sheet placeholder for ACM Introductory Sessions equipment setup',
    posterStatus: 'Official photograph pending confirmation',
    externalUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'evt-minigames',
    code: 'FRAME-02',
    category: 'Interactive Minigames',
    name: 'Auditorium Foyer Interactive Minigames — Details to be Confirmed',
    date: 'Date to be confirmed',
    location: 'Outside Main Auditorium',
    shortDescription:
      'Interactive student engagement minigames with small prizes operated outside the auditorium during society activities.',
    techOpsInvolvement:
      'Confirmed TechOps Scope: Setting up booth equipment, operating interactive minigame stations, and managing small-prize challenge flow.',
    imageUrl: '/images/events/event-minigames.svg',
    imageAlt: 'Architectural contact-sheet placeholder for interactive minigames outside the auditorium',
    posterStatus: 'Official photograph pending confirmation',
    externalUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'evt-workshops',
    code: 'FRAME-03',
    category: 'Workshops',
    name: 'Technical Workshops & Learning Sessions — Details to be Confirmed',
    date: 'Date to be confirmed',
    location: 'Computing Labs / Seminar Rooms (Pending record)',
    shortDescription:
      'Society workshops and practical coding sessions delivered for FAST-NUCES Karachi students across technical tracks.',
    techOpsInvolvement:
      'Confirmed TechOps Scope: Assisting with technical readiness, workstation/projector logistics, and operational coordination for workshop facilitators.',
    imageUrl: '/images/events/event-workshop-support.svg',
    imageAlt: 'Architectural contact-sheet placeholder for workshop technical and logistical setup',
    posterStatus: 'Official poster & photograph pending confirmation',
    externalUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'evt-it-ops',
    code: 'FRAME-04',
    category: 'Technical Operations',
    name: 'General Society IT & Technical Support — Ongoing Operations',
    date: 'Academic cycle dates to be confirmed',
    location: 'FAST NUCES Karachi Campus',
    shortDescription:
      'Behind-the-scenes technical maintenance, rapid troubleshooting, and operational support across ACM FAST initiatives.',
    techOpsInvolvement:
      'Confirmed TechOps Scope: Providing general IT and technical assistance to sustain day-to-day society activities and event schedules.',
    imageUrl: '/images/events/event-tech-support.svg',
    imageAlt: 'Architectural contact-sheet placeholder for ACM general IT and technical operations',
    posterStatus: 'Official photograph pending confirmation',
    externalUrl: null,
    isPlaceholder: true,
  },
];
