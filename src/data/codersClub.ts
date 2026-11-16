import type { CodersClubData } from '../types/portfolio';

/**
 * CODERS CLUB — MANDATORY & PROMINENT SECTION DATA
 * Update `contributions` with verified workshops, coding sessions, and educational initiatives
 * organized or supported by Coders Club. Keep attribution strictly accurate.
 */
export const codersClubData: CodersClubData = {
  sectionCode: 'SEC-03 // MANDATORY FEATURE · EDUCATIONAL ARM',
  title: 'Coders Club & Technical Education',
  subtitle: 'Student-led workshops, competitive programming education, and coding culture at ACM FAST NUCES Karachi.',
  mandateStatement:
    'Coders Club serves as a vital educational initiative associated with ACM FAST, dedicated to peer-led learning, practical programming skills, competitive programming concepts, and collaborative problem-solving sessions.',
  attributionNotice: {
    label: 'ATTRIBUTION & SEPARATION STANDARD',
    description:
      'Contributions listed in this monograph belong strictly to Coders Club initiatives and verified collaborative sessions—kept clearly distinct from initiatives led exclusively by other ACM departments.',
  },
  focusTracks: [
    {
      code: 'CC-TRK-01',
      name: 'Student-Led Workshops',
      description: 'Structured technical walkthroughs introducing practical development concepts and hands-on workflows.',
    },
    {
      code: 'CC-TRK-02',
      name: 'Competitive Programming Education',
      description: 'Guided problem-solving practice focused on algorithmic thinking, complexity awareness, and contest readiness.',
    },
    {
      code: 'CC-TRK-03',
      name: 'Coding Sessions & Peer Learning',
      description: 'Collaborative coding environments designed to help FAST students build confidence through live practice.',
    },
    {
      code: 'CC-TRK-04',
      name: 'Practical Programming Foundations',
      description: 'Applied programming sessions bridging coursework theory with clean code habits and debugging skills.',
    },
  ],
  contributions: [
    {
      id: 'cc-slot-01',
      code: 'CC-01 // ARCHIVE SLOT',
      track: 'Workshops',
      title: 'Technical Workshops — Specific Session Details Pending',
      period: 'Dates / Term to be confirmed',
      status: 'Details Pending',
      purpose:
        'Provide accessible, peer-taught workshops equipping ACM FAST students with practical coding and problem-solving skills.',
      codersClubRole:
        'Organizing curriculum focus, student instruction, and hands-on session exercises (confirmed activity type; specific workshop titles awaiting submission).',
      communityBenefit:
        'Helps participating students transition from classroom fundamentals to practical implementation alongside peers.',
      posterUrl: '/images/coders-club/cc-workshops.svg',
      posterAlt: 'Coders Club practical workshops placeholder graphic awaiting official poster',
      evidenceUrl: null,
      isPlaceholder: true,
    },
    {
      id: 'cc-slot-02',
      code: 'CC-02 // ARCHIVE SLOT',
      track: 'Competitive Programming',
      title: 'Competitive Programming Initiatives — Details to be Confirmed',
      period: 'Dates / Term to be confirmed',
      status: 'Details Pending',
      purpose:
        'Support students interested in algorithmic problem-solving, structured reasoning, and competitive programming preparation.',
      codersClubRole:
        'Facilitating educational sessions and guided practice tracks tailored for student learners (specific schedules and session records awaiting organizer confirmation).',
      communityBenefit:
        'Strengthens analytical problem-solving capabilities and fosters a peer-supported learning environment within ACM FAST.',
      posterUrl: '/images/coders-club/cc-competitive.svg',
      posterAlt: 'Coders Club competitive programming placeholder graphic awaiting official photograph',
      evidenceUrl: null,
      isPlaceholder: true,
    },
    {
      id: 'cc-slot-03',
      code: 'CC-03 // ARCHIVE SLOT',
      track: 'Coding Sessions',
      title: 'Collaborative Coding & Learning Sessions — Details to be Confirmed',
      period: 'Dates / Term to be confirmed',
      status: 'Details Pending',
      purpose:
        'Create recurring, welcoming spaces for students to practice programming skills, exchange knowledge, and learn collaboratively.',
      codersClubRole:
        'Coordinating student-led coding sessions and educational guidance across ACM FAST technical initiatives (exact dates and session records pending).',
      communityBenefit:
        'Lowers barriers for newer students entering society technical tracks while encouraging peer mentorship.',
      posterUrl: '/images/coders-club/cc-sessions.svg',
      posterAlt: 'Coders Club peer coding sessions placeholder graphic awaiting official photograph',
      evidenceUrl: null,
      isPlaceholder: true,
    },
  ],
};
