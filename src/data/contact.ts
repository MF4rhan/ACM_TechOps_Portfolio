import type { ContactData } from '../types/portfolio';

/**
 * CONTACT & JOIN ACM DATA
 * Do not invent email addresses, phone numbers, or unverified URLs.
 * Verified ACM FAST-NUCES Karachi social URLs are active below;
 * remaining official URLs keep `url: null` until confirmed.
 */
export const contactData: ContactData = {
  sectionCode: 'SEC-07 // OFFICIAL CHANNELS & INVOLVEMENT',
  title: 'Connect & Join ACM FAST TechOps',
  subtitle:
    'Follow verified ACM FAST NUCES Karachi social channels below. Additional official website, email, and GitHub links will be activated once supplied by society leadership.',
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
      id: 'ch-instagram',
      label: 'Official Instagram',
      channelType: 'Instagram',
      displayValue: '@acmnuceskhi',
      url: 'https://www.instagram.com/acmnuceskhi/',
      statusNote: 'Verified Official Channel',
      isPlaceholder: false,
    },
    {
      id: 'ch-linkedin',
      label: 'Official LinkedIn',
      channelType: 'LinkedIn',
      displayValue: 'ACM NUCES Karachi (/company/acmnuceskhi)',
      url: 'https://www.linkedin.com/company/acmnuceskhi/',
      statusNote: 'Verified Official Channel',
      isPlaceholder: false,
    },
    {
      id: 'ch-facebook',
      label: 'Official Facebook',
      channelType: 'Website',
      displayValue: 'ACM NUCES Karachi (/acmnuceskhi)',
      url: 'https://www.facebook.com/acmnuceskhi/',
      statusNote: 'Verified Official Channel',
      isPlaceholder: false,
    },
    {
      id: 'ch-website',
      label: 'Official ACM FAST Website',
      channelType: 'Website',
      displayValue: 'Official website URL pending confirmation',
      url: null,
      statusNote: 'Pending Confirmation',
      isPlaceholder: true,
    },
    {
      id: 'ch-email',
      label: 'Official Department / Society Email',
      channelType: 'Email',
      displayValue: 'Official email address to be confirmed',
      url: null,
      statusNote: 'Pending Confirmation',
      isPlaceholder: true,
    },
    {
      id: 'ch-github',
      label: 'ACM FAST / TechOps GitHub',
      channelType: 'GitHub',
      displayValue: 'Official GitHub organization link pending',
      url: null,
      statusNote: 'Pending Confirmation',
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
