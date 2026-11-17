import type { SiteData } from '../types/portfolio';

export const siteData: SiteData = {
  brand: {
    society: 'ACM FAST',
    campus: 'NUCES KARACHI',
    department: 'TECHOPS DEPARTMENT',
    shortCode: 'ACM-KHI // TECHOPS',
    academicCycle: 'ACM 2026–2027',
    statusLabel: 'FAST-NUCES KARACHI CHAPTER',
  },
  navigation: [
    { id: 'home', code: '00', label: 'Overview' },
    { id: 'about', code: '01', label: 'TechOps' },
    { id: 'coders-club', code: '02', label: 'Coders Club', highlight: true },
    { id: 'events', code: '03', label: 'Events' },
    { id: 'team', code: '04', label: 'Leadership' },
    { id: 'achievements', code: '05', label: 'Impact' },
    { id: 'contact', code: '06', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'ACM STUDENT CHAPTER · FAST-NUCES KARACHI',
    headlineLine1: 'Technical Operations',
    headlineEmphasis: 'Engineering the',
    headlineLine2: 'Society Backbone.',
    leadParagraph:
      'TechOps coordinates the technical equipment, introductory session setups, auditorium foyer interactive minigames, general IT support, and workshop logistics that keep ACM FAST running—alongside dedicated support for Coders Club.',
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
        subtitle: 'Stage AV, IT support & workshop logistics',
        targetId: 'about',
        accent: 'orange',
      },
      {
        code: 'IDX-02',
        title: 'Coders Club',
        subtitle: 'Student-led learning & coding culture',
        targetId: 'coders-club',
        accent: 'cobalt',
      },
      {
        code: 'IDX-03',
        title: 'Events & Activities',
        subtitle: 'Intro sessions, minigames & workshops',
        targetId: 'events',
        accent: 'orange',
      },
      {
        code: 'IDX-04',
        title: 'Executive Leadership',
        subtitle: 'TechOps Head & two Co-Heads',
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
          'Managing technical equipment, presentation support, and stage technology during ACM introductory sessions.',
        deliverables: [
          'Stage equipment & projector readiness',
          'Presentation & audio-visual routing',
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
          'Interactive laptop & booth stations',
          'Student participation & timing flow',
          'Small prize fulfillment coordination',
        ],
        targetSectionId: 'events',
        accent: 'orange',
      },
      {
        id: 'node-coders',
        code: 'OP-03',
        title: 'Coders Club Initiatives',
        domain: 'STUDENT-LED TECHNICAL LEARNING',
        summary:
          'Supporting student-led workshops, coding sessions, competitive programming practice, and practical skill-building.',
        deliverables: [
          'Competitive & practical coding focus',
          'Collaborative peer learning spaces',
          'Workshop technical & setup assistance',
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
          'Providing general IT and technical support across ACM FAST operations while assisting workshop organizers.',
        deliverables: [
          'General IT troubleshooting & equipment care',
          'Workshop room & technical readiness',
          'Day-to-day operational continuity',
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
      'Behind the stage, inside the lab, and across the auditorium foyer—translating society initiatives into reliable on-ground execution.',
    overviewHeading: 'Technical Execution & Operational Continuity',
    overviewBody: [
      'The TechOps Department provides the technical and operational support required for ACM FAST NUCES Karachi activities. Whenever the chapter runs introductory sessions, interactive foyer stations, or student workshops, TechOps manages the hardware, setups, and live troubleshooting.',
      'By handling equipment readiness and operational logistics across society programs, TechOps lets speakers, facilitators, and educational leads focus cleanly on student engagement.',
    ],
    distinctionNote: {
      label: 'OPERATIONAL MANDATE',
      text: 'Four grounded responsibilities define TechOps across the academic cycle: introductory session technology, auditorium foyer minigames, general IT support, and workshop logistics.',
    },
    pillars: [
      {
        index: '01',
        title: 'Introductory Session Technical Support',
        scope: 'AUDITORIUM & STAGE OPERATIONS',
        description:
          'Managing technical equipment, presentation systems, and audio-visual technology during ACM introductory sessions.',
        activities: [
          'Pre-session equipment checks',
          'Presentation & display support',
          'Live stage technical operations',
        ],
      },
      {
        index: '02',
        title: 'Interactive Minigames Outside the Auditorium',
        scope: 'STUDENT ENGAGEMENT BOOTHS',
        description:
          'Setting up and operating interactive minigames with small prizes outside the auditorium during society activities.',
        activities: [
          'Foyer booth & hardware setup',
          'Interactive station operation',
          'Small prize coordination',
        ],
      },
      {
        index: '03',
        title: 'General IT & Technical Support',
        scope: 'CHAPTER-WIDE ASSISTANCE',
        description:
          'Providing ongoing IT assistance, equipment troubleshooting, and technical support across ACM FAST operations.',
        activities: [
          'Day-to-day IT troubleshooting',
          'Equipment readiness & care',
          'Rapid on-site technical fixes',
        ],
      },
      {
        index: '04',
        title: 'Workshop Technical & Logistical Arrangements',
        scope: 'LABS & CODERS CLUB SUPPORT',
        description:
          'Assisting with technical and logistical arrangements for student-led workshops and learning initiatives.',
        activities: [
          'Session venue & projector setup',
          'Facilitator technical assistance',
          'Logistical coordination during sessions',
        ],
      },
    ],
    workflowSteps: [
      {
        step: 'PHASE 01',
        phase: 'Equipment Check',
        detail: 'Verifying audio-visual gear, laptops, cabling, and room setups prior to each activity.',
      },
      {
        step: 'PHASE 02',
        phase: 'Booth & Stage Setup',
        detail: 'Preparing auditorium presentation feeds, workshop rooms, and exterior minigame stations.',
      },
      {
        step: 'PHASE 03',
        phase: 'Live Operations',
        detail: 'Running interactive booths, monitoring stage technology, and resolving technical issues.',
      },
      {
        step: 'PHASE 04',
        phase: 'Operational Handover',
        detail: 'Securing chapter equipment cleanly after sessions conclude and preparing for upcoming programs.',
      },
    ],
  },
  footer: {
    tagline:
      'Technical operations, infrastructure and student-led innovation behind the ACM FAST experience.',
    chapterLocation: 'FAST NUCES KARACHI CHAPTER · ACM 2026–2027',
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
