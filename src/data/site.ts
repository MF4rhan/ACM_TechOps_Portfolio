import type { SiteData } from '../types/portfolio';

export const siteData: SiteData = {
  brand: {
    society: 'ACM FAST',
    campus: 'NUCES KARACHI',
    department: 'TECHOPS DEPARTMENT',
    shortCode: 'ACM-KHI // TECHOPS',
    academicCycle: 'PORTFOLIO ARCHIVE // 2026',
    statusLabel: 'CONTENT SYNCHRONIZATION IN PROGRESS',
    logoAssetNote:
      'Typographic identity active — official society vector emblem can be inserted in src/components/Navbar.tsx',
  },
  navigation: [
    { id: 'home', code: '00', label: 'Overview' },
    { id: 'about', code: '01', label: 'TechOps' },
    { id: 'projects', code: '02', label: 'Projects' },
    { id: 'coders-club', code: '03', label: 'Coders Club', highlight: true },
    { id: 'events', code: '04', label: 'Events' },
    { id: 'team', code: '05', label: 'Leadership' },
    { id: 'achievements', code: '06', label: 'Impact' },
    { id: 'contact', code: '07', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'ACM STUDENT CHAPTER · FAST-NUCES KARACHI',
    headlineLine1: 'Technical Operations',
    headlineEmphasis: 'Engineering the',
    headlineLine2: 'Society Backbone.',
    leadParagraph:
      'TechOps coordinates the technical infrastructure, live event setups, interactive auditorium foyer experiences, IT support, and workshop logistics that keep ACM FAST running—alongside dedicated support for Coders Club educational initiatives.',
    primaryCta: {
      label: 'Explore Coders Club',
      targetId: 'coders-club',
    },
    secondaryCta: {
      label: 'Department Mandate',
      targetId: 'about',
    },
    highlights: [
      {
        code: 'IDX-01',
        title: 'Operational Mandate',
        subtitle: 'AV rigs, IT support & live event execution',
        targetId: 'about',
        accent: 'orange',
      },
      {
        code: 'IDX-02',
        title: 'Coders Club',
        subtitle: 'Student-led coding & competitive education',
        targetId: 'coders-club',
        accent: 'cobalt',
      },
      {
        code: 'IDX-03',
        title: 'Events & Foyer Games',
        subtitle: 'Intro sessions, minigames & workshop logistics',
        targetId: 'events',
        accent: 'orange',
      },
      {
        code: 'IDX-04',
        title: 'Executive Leadership',
        subtitle: 'One TechOps Head & two Co-Heads',
        targetId: 'team',
        accent: 'cobalt',
      },
    ],
    schematicNodes: [
      {
        id: 'node-av',
        code: 'OP-01',
        title: 'Introductory Session Tech',
        domain: 'AUDITORIUM & STAGE AV',
        summary:
          'Managing technical equipment, display routing, audio checks, and stage technology during ACM introductory sessions.',
        deliverables: [
          'Stage equipment & projector readiness',
          'Live technical troubleshooting',
          'On-site session cue coordination',
        ],
        targetSectionId: 'events',
        accent: 'orange',
      },
      {
        id: 'node-games',
        code: 'OP-02',
        title: 'Foyer Interactive Minigames',
        domain: 'AUDITORIUM EXTERIOR ZONE',
        summary:
          'Setting up and operating interactive minigames with small prizes outside the auditorium during society activities.',
        deliverables: [
          'Booth hardware & interactive game stations',
          'Participant flow & timing supervision',
          'Small prize fulfillment coordination',
        ],
        targetSectionId: 'events',
        accent: 'orange',
      },
      {
        id: 'node-coders',
        code: 'OP-03',
        title: 'Coders Club Initiatives',
        domain: 'TECHNICAL EDUCATION & PRACTICE',
        summary:
          'Highlighting student-led learning initiatives, coding sessions, competitive programming education, and practical workshops.',
        deliverables: [
          'Hands-on coding & competitive prep tracks',
          'Workshop environment & lab support',
          'Clearly attributed educational contributions',
        ],
        targetSectionId: 'coders-club',
        accent: 'cobalt',
      },
      {
        id: 'node-it',
        code: 'OP-04',
        title: 'Society IT & Workshop Logistics',
        domain: 'CORE INFRASTRUCTURE',
        summary:
          'Providing general IT and technical support across ACM FAST operations while assisting workshop organizers with setup.',
        deliverables: [
          'General IT troubleshooting & tool support',
          'Workshop room & software readiness',
          'Verified archival of future deliverables',
        ],
        targetSectionId: 'about',
        accent: 'paper',
      },
    ],
  },
  about: {
    sectionCode: 'SEC-01 // DEPARTMENT OVERVIEW',
    title: 'How TechOps keeps ACM FAST operational.',
    subtitle:
      'Positioned behind the stage, inside the lab, and across the auditorium foyer—translating society plans into dependable on-ground execution.',
    overviewHeading: 'Standing Operational Scope vs. Verified Historical Records',
    overviewBody: [
      'The TechOps Department serves as the operational and technical backbone of the ACM FAST NUCES Karachi chapter. Whenever the society hosts introductory sessions, student workshops, or campus activities, TechOps handles the equipment, logistics, and real-time troubleshooting required to run them smoothly.',
      'To preserve complete factual integrity, this portfolio separates standing departmental responsibilities—confirmed by ACM organizers—from specific historical project records, event dates, and numerical outcomes that are currently awaiting final organizer documentation.',
    ],
    distinctionNote: {
      label: 'FACTUAL INTEGRITY PROTOCOL',
      text: 'This portfolio reports only verified operational scope and pending organizer slots. Unfinished or unverified deliverables are never presented as completed achievements.',
    },
    pillars: [
      {
        index: '01',
        title: 'Introductory Session Equipment & Technology',
        scope: 'AUDITORIUM & ORIENTATION OPERATIONS',
        description:
          'Managing technical equipment, presentation systems, and audio-visual technology during ACM introductory sessions for incoming and continuing students.',
        activities: [
          'Pre-session equipment verification',
          'Display & media playback readiness',
          'Real-time technical support during talks',
        ],
      },
      {
        index: '02',
        title: 'Interactive Minigames Outside the Auditorium',
        scope: 'CAMPUS ENGAGEMENT BOOTHS',
        description:
          'Setting up and operating interactive minigames with small prizes outside the auditorium during society activities to welcome and engage students.',
        activities: [
          'Foyer station setup and power routing',
          'Interactive challenge facilitation',
          'Small prize distribution logistics',
        ],
      },
      {
        index: '03',
        title: 'General IT & Technical Support',
        scope: 'SOCIETY-WIDE INFRASTRUCTURE',
        description:
          'Providing general IT assistance and technical troubleshooting across ACM FAST operations so other departments can deliver their initiatives without technical friction.',
        activities: [
          'Operational hardware & software assistance',
          'Digital tooling coordination',
          'Rapid issue resolution during events',
        ],
      },
      {
        index: '04',
        title: 'Workshop Technical & Logistical Assistance',
        scope: 'LABS, SESSIONS & CODERS CLUB SUPPORT',
        description:
          'Assisting with the technical and logistical organization of workshops and society activities—including hands-on coordination alongside Coders Club.',
        activities: [
          'Lab & workstation readiness checks',
          'Speaker setup and session logistics',
          'Cross-team coordination with education leads',
        ],
      },
    ],
    workflowSteps: [
      {
        step: 'PHASE 01',
        phase: 'Pre-Event Technical Readiness',
        detail: 'Inventory check, venue technical inspection, and equipment allocation prior to society sessions.',
      },
      {
        step: 'PHASE 02',
        phase: 'On-Ground Setup & Booth Deployment',
        detail: 'Preparing auditorium AV connections, workshop environments, and exterior interactive minigame stations.',
      },
      {
        step: 'PHASE 03',
        phase: 'Live Operations & IT Support',
        detail: 'Active monitoring, rapid troubleshooting, and smooth technical transitions throughout the event schedule.',
      },
      {
        step: 'PHASE 04',
        phase: 'Verification & Archive Logging',
        detail: 'Recording verified outcomes, photographs, and technical documentation once reviewed by organizers.',
      },
    ],
  },
  footer: {
    tagline:
      'Technical operations, infrastructure and student-led innovation behind the ACM FAST experience.',
    chapterLocation: 'FAST NUCES KARACHI CHAPTER · PORTFOLIO ARCHIVE',
    officialSocials: [
      {
        id: 'instagram',
        platform: 'INSTAGRAM',
        handle: '@acmnuceskhi',
        url: 'https://www.instagram.com/acmnuceskhi/',
      },
      {
        id: 'linkedin',
        platform: 'LINKEDIN',
        handle: '/company/acmnuceskhi',
        url: 'https://www.linkedin.com/company/acmnuceskhi/',
      },
      {
        id: 'facebook',
        platform: 'FACEBOOK',
        handle: '/acmnuceskhi',
        url: 'https://www.facebook.com/acmnuceskhi/',
      },
    ],
    developerAttributionLabel: 'DESIGNED & ENGINEERED BY MUHAMMAD FARHAN',
    developerLinkedInUrl: 'https://www.linkedin.com/in/muhammad-farhan-cs/',
  },
};
