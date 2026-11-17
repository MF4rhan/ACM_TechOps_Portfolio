export type SectionTheme = 'dark' | 'light' | 'cobalt';

export interface NavItem {
  id: string;
  code: string;
  label: string;
  highlight?: boolean;
}

export interface SchematicNode {
  id: string;
  code: string;
  title: string;
  domain: string;
  summary: string;
  deliverables: string[];
  targetSectionId: string;
  accent: 'orange' | 'cobalt' | 'paper';
}

export interface OperationalPillar {
  index: string;
  title: string;
  scope: string;
  description: string;
  activities: string[];
}

export interface QuickHighlight {
  code: string;
  title: string;
  subtitle: string;
  targetId: string;
  accent: 'orange' | 'cobalt';
}

export interface SocialLink {
  id: 'instagram' | 'linkedin' | 'facebook';
  platform: string;
  handle: string;
  url: string;
}

export interface FooterConfig {
  tagline: string;
  chapterLocation: string;
  officialSocials: SocialLink[];
  developerAttributionLabel: string;
  developerLinkedInUrl: string | null;
}

export interface SiteData {
  brand: {
    society: string;
    campus: string;
    department: string;
    shortCode: string;
    academicCycle: string;
    statusLabel: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineEmphasis: string;
    headlineLine2: string;
    leadParagraph: string;
    primaryCta: {
      label: string;
      targetId: string;
    };
    secondaryCta: {
      label: string;
      targetId: string;
    };
    highlights: QuickHighlight[];
    schematicNodes: SchematicNode[];
  };
  about: {
    sectionCode: string;
    title: string;
    subtitle: string;
    overviewHeading: string;
    overviewBody: string[];
    distinctionNote: {
      label: string;
      text: string;
    };
    pillars: OperationalPillar[];
    workflowSteps: {
      step: string;
      phase: string;
      detail: string;
    }[];
  };
  navigation: NavItem[];
  footer: FooterConfig;
}

export interface CodersClubTheme {
  code: string;
  name: string;
  description: string;
}

export interface CodersClubData {
  sectionCode: string;
  title: string;
  subtitle: string;
  mandateStatement: string;
  supportingCopy: string;
  attributionNotice: {
    label: string;
    description: string;
  };
  learningThemes: CodersClubTheme[];
}

export interface EventItem {
  id: string;
  code: string;
  category:
    | 'Introductory Sessions'
    | 'Interactive Minigames'
    | 'Workshops'
    | 'Technical Operations';
  name: string;
  scopeLabel: string;
  shortDescription: string;
  visualType: 'photo' | 'schematic-intro' | 'schematic-workshop' | 'schematic-ops';
  imageUrl?: string;
  imageAlt?: string;
}

export interface EventsClosingPlate {
  captionCode: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TeamMember {
  id: string;
  slotCode: string;
  roleRank: 'head' | 'co-head-1' | 'co-head-2';
  isPrimaryHead: boolean;
  fullName: string;
  position: string;
  departmentUnit: string;
  rollNumber?: string;
  responsibilities: string;
  photoUrl: string;
  photoAlt: string;
}

export interface ImpactItem {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  channelType: string;
  displayValue: string;
  url: string;
}

export interface ContactData {
  sectionCode: string;
  title: string;
  subtitle: string;
  joinCalloutTitle: string;
  joinCalloutBody: string;
  campusLocation: {
    institution: string;
    campus: string;
    city: string;
  };
  channels: ContactChannel[];
  participationTracks: {
    code: string;
    roleTitle: string;
    focus: string;
  }[];
}
