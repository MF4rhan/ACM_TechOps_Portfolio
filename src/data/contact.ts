import type { ContactData } from '../types/portfolio';

/**
 * CONTACT & JOIN ACM DATA
 * Contains only verified FAST-NUCES Karachi campus context and official ACM social channels.
 */
export const contactData: ContactData = {
  sectionCode: 'SEC-06 // CHANNELS & INVOLVEMENT',
  title: 'Connect & Join ACM FAST TechOps',
  subtitle:
    'Follow the official ACM FAST NUCES Karachi social channels to stay updated on chapter sessions, Coders Club initiatives, and upcoming induction cycles.',
  joinCalloutTitle: 'Interested in Technical Operations or Coders Club?',
  joinCalloutBody:
    'Students at FAST NUCES Karachi interested in hands-on event technology, interactive foyer activities, workshop logistics, general IT support, or student-led coding sessions can connect through official ACM FAST NUCES Karachi announcements.',
  campusLocation: {
    institution: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    campus: 'Karachi Campus · ACM Student Chapter',
    city: 'Karachi, Pakistan',
  },
  channels: [
    {
      id: 'ch-instagram',
      label: 'Official Instagram',
      channelType: 'Instagram',
      displayValue: '@acmnuceskhi',
      url: 'https://www.instagram.com/acmnuceskhi/',
    },
    {
      id: 'ch-linkedin',
      label: 'Official LinkedIn',
      channelType: 'LinkedIn',
      displayValue: 'ACM NUCES Karachi (/company/acmnuceskhi)',
      url: 'https://www.linkedin.com/company/acmnuceskhi/',
    },
    {
      id: 'ch-facebook',
      label: 'Official Facebook',
      channelType: 'Facebook',
      displayValue: 'ACM NUCES Karachi (/acmnuceskhi)',
      url: 'https://www.facebook.com/acmnuceskhi/',
    },
  ],
  participationTracks: [
    {
      code: 'JOIN-01',
      roleTitle: 'Event Technical Operations',
      focus: 'Stage equipment, AV readiness, introductory session setups & live troubleshooting.',
    },
    {
      code: 'JOIN-02',
      roleTitle: 'Interactive Experience & Booths',
      focus: 'Setting up and operating interactive foyer minigames and student activity stations.',
    },
    {
      code: 'JOIN-03',
      roleTitle: 'Coders Club Learning Community',
      focus: 'Student-led coding sessions, competitive programming practice & practical workshops.',
    },
  ],
};
