import type { AchievementItem } from '../types/portfolio';

/**
 * ACHIEVEMENTS & VERIFIED IMPACT DATA
 * Strict policy: Never fabricate numerical metrics, attendance counts, or unverified claims.
 * Replace "Details to be confirmed" fields only with approved statistics and evidence.
 */
export const achievementsIntro = {
  sectionCode: 'SEC-06 // VERIFIED OUTCOMES & IMPACT LEDGER',
  title: 'Achievements & Verification Ledger',
  subtitle:
    'A transparent record separating confirmed departmental operational roles from quantitative outcomes and milestones currently awaiting official organizer figures.',
  policyBanner:
    'Zero-Fabrication Policy: Numerical statistics, attendance numbers, and milestone counts remain marked "Details to be confirmed" until supplied directly by ACM FAST.',
};

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-verified-01',
    code: 'VER-01',
    category: 'Operational Deliverable',
    title: 'Introductory Session Technical Operations',
    period: 'Active Chapter Scope',
    metricValue: 'Verified Scope',
    verificationStatus: 'Verified Scope',
    description:
      'Consistent readiness and management of stage technology, audio-visual setups, and technical equipment during ACM FAST introductory sessions.',
    contextNote: 'Specific session dates and audience metrics: Details to be confirmed.',
    isPlaceholder: false,
  },
  {
    id: 'ach-verified-02',
    code: 'VER-02',
    category: 'Operational Deliverable',
    title: 'Auditorium Exterior Interactive Minigames',
    period: 'Active Chapter Scope',
    metricValue: 'Verified Scope',
    verificationStatus: 'Verified Scope',
    description:
      'Setup and live operation of interactive minigames with small prizes outside the auditorium to engage students during society activities.',
    contextNote: 'Specific activity editions and participant counts: Details to be confirmed.',
    isPlaceholder: false,
  },
  {
    id: 'ach-verified-03',
    code: 'VER-03',
    category: 'Educational Initiative',
    title: 'Coders Club Technical Learning Contributions',
    period: 'Ongoing Initiative',
    metricValue: 'Verified Scope',
    verificationStatus: 'Verified Scope',
    description:
      'Supporting student-led learning initiatives, coding sessions, practical workshops, and competitive programming education under Coders Club.',
    contextNote: 'Verified workshop count and session archive links: Details to be confirmed.',
    isPlaceholder: false,
  },
  {
    id: 'ach-metric-01',
    code: 'STAT-01',
    category: 'Verified Metric',
    title: 'Total Workshops & Sessions Supported',
    period: 'Current Term',
    metricValue: 'Pending Confirmation',
    verificationStatus: 'Pending Verification',
    description:
      'Reserved verified statistic slot for the exact count of technical workshops and Coders Club sessions supported during the term.',
    contextNote: 'Awaiting approved figures from ACM FAST organizers.',
    isPlaceholder: true,
  },
  {
    id: 'ach-metric-02',
    code: 'STAT-02',
    category: 'Verified Metric',
    title: 'Student Participation & Event Reach',
    period: 'Current Term',
    metricValue: 'Pending Confirmation',
    verificationStatus: 'Pending Verification',
    description:
      'Reserved verified statistic slot for approved attendance and student engagement counts across ACM FAST sessions.',
    contextNote: 'No estimated or extrapolated attendance numbers are displayed.',
    isPlaceholder: true,
  },
  {
    id: 'ach-metric-03',
    code: 'STAT-03',
    category: 'Verified Metric',
    title: 'Completed Technical Deliverables & Milestones',
    period: 'Current Term',
    metricValue: 'Pending Confirmation',
    verificationStatus: 'Pending Verification',
    description:
      'Reserved milestone ledger for verified projects, tools, and event outcomes approved for public attribution.',
    contextNote: 'Details to be confirmed upon official review.',
    isPlaceholder: true,
  },
];
