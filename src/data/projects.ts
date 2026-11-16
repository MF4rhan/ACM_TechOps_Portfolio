import type { ProjectItem } from '../types/portfolio';

/**
 * PROJECTS & TECHNICAL WORK DATA
 * Replace placeholder entries with verified TechOps projects once confirmed by ACM organizers.
 * Important: Only list deliverables that have been genuinely completed and approved for publication.
 */
export const projectsIntro = {
  sectionCode: 'SEC-02 // TECHNICAL WORK & PROJECTS',
  title: 'Projects & Technical Infrastructure',
  subtitle:
    'A structured engineering dossier prepared for verified TechOps systems, internal tools, and technical builds. Entries below reflect the confirmed project schema while specific deliverables await organizer sign-off.',
  emptyStateNotice: {
    status: 'AWAITING VERIFIED PROJECT PACKET',
    message:
      'No unverified builds or incomplete deliverables are claimed here. Replace the structured slots in src/data/projects.ts once project names, dates, screenshots, and repository URLs are supplied by ACM FAST organizers.',
  },
};

export const projectCategories: Array<ProjectItem['category'] | 'All'> = [
  'All',
  'Infrastructure',
  'Event Systems',
  'Society Tooling',
  'Documentation',
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-slot-01',
    code: 'PRJ-01 // PENDING',
    name: 'Project Entry 01 — Details to be confirmed',
    category: 'Event Systems',
    status: 'Pending Confirmation',
    dateOrYear: 'Date / Year to be confirmed',
    purpose: 'Reserved slot for a verified TechOps event-operations or interactive activity system.',
    description:
      'Project information pending confirmation. This dossier structure is ready to present the confirmed system architecture, operational purpose, and event deployment notes once provided by the organizers.',
    techOpsContribution: 'TechOps contribution details awaiting organizer confirmation.',
    technologies: ['Stack details pending'],
    outcome: 'Verified outcome to be confirmed.',
    screenshotUrl: '/images/projects/project-blueprint-01.svg',
    screenshotAlt: 'Technical schematic placeholder for Project Entry 01 awaiting official screenshot',
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'proj-slot-02',
    code: 'PRJ-02 // PENDING',
    name: 'Project Entry 02 — Details to be confirmed',
    category: 'Society Tooling',
    status: 'Pending Confirmation',
    dateOrYear: 'Date / Year to be confirmed',
    purpose: 'Reserved slot for verified internal tooling or IT workflow utilities supporting ACM FAST operations.',
    description:
      'Project information pending confirmation. Once approved by department leadership, replace this record with the actual utility overview, tools used, and operational impact.',
    techOpsContribution: 'TechOps contribution details awaiting organizer confirmation.',
    technologies: ['Stack details pending'],
    outcome: 'Verified outcome to be confirmed.',
    screenshotUrl: '/images/projects/project-blueprint-02.svg',
    screenshotAlt: 'Technical schematic placeholder for Project Entry 02 awaiting official screenshot',
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
  {
    id: 'proj-slot-03',
    code: 'PRJ-03 // PENDING',
    name: 'Project Entry 03 — Details to be confirmed',
    category: 'Infrastructure',
    status: 'Pending Confirmation',
    dateOrYear: 'Date / Year to be confirmed',
    purpose: 'Reserved slot for verified technical infrastructure, workshop environments, or department documentation builds.',
    description:
      'Project information pending confirmation. Prepared with support for GitHub links, verified outcomes, and visual documentation in public/images/projects/.',
    techOpsContribution: 'TechOps contribution details awaiting organizer confirmation.',
    technologies: ['Stack details pending'],
    outcome: 'Verified outcome to be confirmed.',
    screenshotUrl: '/images/projects/project-blueprint-03.svg',
    screenshotAlt: 'Technical schematic placeholder for Project Entry 03 awaiting official screenshot',
    repositoryUrl: null,
    liveUrl: null,
    isPlaceholder: true,
  },
];
