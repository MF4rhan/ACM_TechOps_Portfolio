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

export interface SiteData {
  brand: {
    society: string;
    campus: string;
    department: string;
    shortCode: string;
    academicCycle: string;
    statusLabel: string;
    logoAssetNote: string;
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
}

export interface ProjectItem {
  id: string;
  code: string;
  name: string;
  category: 'Infrastructure' | 'Event Systems' | 'Society Tooling' | 'Documentation';
  status: 'Confirmed' | 'Pending Confirmation';
  dateOrYear: string;
  purpose: string;
  description: string;
  techOpsContribution: string;
  technologies: string[];
  outcome: string;
  screenshotUrl: string;
  screenshotAlt: string;
  repositoryUrl: string | null;
  liveUrl: string | null;
  isPlaceholder: boolean;
}

export interface CodersClubContribution {
  id: string;
  code: string;
  track:
    | 'Workshops'
    | 'Coding Sessions'
    | 'Competitive Programming'
    | 'Practical Skills'
    | 'Educational Initiatives';
  title: string;
  period: string;
  status: 'Standing Mandate' | 'Confirmed Record' | 'Details Pending';
  purpose: string;
  codersClubRole: string;
  communityBenefit: string;
  posterUrl: string;
  posterAlt: string;
  evidenceUrl: string | null;
  isPlaceholder: boolean;
}

export interface CodersClubData {
  sectionCode: string;
  title: string;
  subtitle: string;
  mandateStatement: string;
  attributionNotice: {
    label: string;
    description: string;
  };
  focusTracks: {
    code: string;
    name: string;
    description: string;
  }[];
  contributions: CodersClubContribution[];
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
  date: string;
  location: string;
  shortDescription: string;
  techOpsInvolvement: string;
  imageUrl: string;
  imageAlt: string;
  posterStatus: string;
  externalUrl: string | null;
  isPlaceholder: boolean;
}

export interface TeamMember {
  id: string;
  slotCode: string;
  tier: 'executive' | 'coders-club-leadership' | 'lead' | 'member';
  fullName: string;
  position: string;
  departmentUnit: string;
  rollNumber: string;
  responsibilities: string;
  photoUrl: string;
  photoAlt: string;
  isPlaceholder: boolean;
}

export interface AchievementItem {
  id: string;
  code: string;
  category: 'Operational Deliverable' | 'Educational Initiative' | 'Verified Metric';
  title: string;
  period: string;
  metricValue: string;
  verificationStatus: 'Verified Scope' | 'Pending Verification';
  description: string;
  contextNote: string;
  isPlaceholder: boolean;
}

export interface ContactChannel {
  id: string;
  label: string;
  channelType: 'Website' | 'Email' | 'GitHub' | 'Instagram' | 'LinkedIn' | 'Campus Desk';
  displayValue: string;
  url: string | null;
  statusNote: string;
  isPlaceholder: boolean;
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
    officeNote: string;
  };
  channels: ContactChannel[];
  participationTracks: {
    code: string;
    roleTitle: string;
    focus: string;
  }[];
}
