import type { ContactData } from '../types/portfolio';

/**
 * CONTACT & JOIN ACM DATA
 * Do not invent email addresses, phone numbers, or social URLs.
 * Keep `url: null` until an approved official URL is provided by ACM FAST organizers.
 */
export const contactData: ContactData = {
  sectionCode: 'SEC-07 // OFFICIAL CHANNELS & INVOLVEMENT',
  title: 'Connect & Join ACM FAST TechOps',
  subtitle:
    'Official ACM FAST NUCES Karachi digital channels and contact links will be activated here once supplied by the society leadership.',
  joinCalloutTitle: 'Interested in Technical Operations or Coders Club?',
  joinCalloutBody:
    'Students at FAST NUCES Karachi looking to gain hands-on experience in live event technology, general IT coordination, interactive activity engineering, or peer-led coding education through Coders Club can connect during official ACM FAST recruitment drives.',
  campusLocation: {
    institution: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    campus: 'Karachi Campus · ACM Student Chapter',
    city: 'Karachi, Pakistan',
    officeNote: 'Recruitment & induction schedule: Details to be confirmed.',
  },
  channels: [
    {
      id: 'ch-website',
      label: 'Official ACM FAST Website',
      channelType: 'Website',
      displayValue: 'Official website URL pending confirmation',
      url: null,
      statusNote: 'Set url in src/data/contact.ts when supplied',
      isPlaceholder: true,
    },
    {
      id: 'ch-email',
      label: 'Official Department / Society Email',
      channelType: 'Email',
      displayValue: 'Official email address to be confirmed',
      url: null,
      statusNote: 'Awaiting approved contact email',
      isPlaceholder: true,
    },
    {
      id: 'ch-github',
      label: 'ACM FAST / TechOps GitHub',
      channelType: 'GitHub',
      displayValue: 'Official GitHub organization link pending',
      url: null,
      statusNote: 'Awaiting approved repository organization URL',
      isPlaceholder: true,
    },
    {
      id: 'ch-instagram',
      label: 'Official Instagram',
      channelType: 'Instagram',
      displayValue: 'Official social handle to be confirmed',
      url: null,
      statusNote: 'Awaiting verified social media URL',
      isPlaceholder: true,
    },
    {
      id: 'ch-linkedin',
      label: 'Official LinkedIn',
      channelType: 'LinkedIn',
      displayValue: 'Official LinkedIn page to be confirmed',
      url: null,
      statusNote: 'Awaiting verified LinkedIn URL',
      isPlaceholder: true,
    },
  ],
  participationTracks: [
    {
      code: 'JOIN-01',
      roleTitle: 'Event Technical Operations',
      focus: 'Stage equipment, AV management, auditorium introductory sessions & live troubleshooting.',
    },
    {
      code: 'JOIN-02',
      roleTitle: 'Interactive Experience & Booths',
      focus: 'Setting up and running interactive foyer minigames and on-ground student engagements.',
    },
    {
      code: 'JOIN-03',
      roleTitle: 'Coders Club Facilitators & Learners',
      focus: 'Peer workshops, competitive programming sessions, and practical coding education.',
    },
  ],
};
