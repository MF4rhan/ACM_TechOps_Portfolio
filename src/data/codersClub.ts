import type { CodersClubData } from '../types/portfolio';

/**
 * CODERS CLUB — EDUCATIONAL INITIATIVE DATA
 * Presents Coders Club's mission and student-led learning areas within ACM FAST
 * without inventing historical workshop records or unverified scoreboard claims.
 */
export const codersClubData: CodersClubData = {
  sectionCode: 'SEC-02 // STUDENT-LED EDUCATIONAL ARM',
  title: 'Coders Club & Technical Education',
  subtitle:
    'A dedicated platform within ACM FAST fostering peer-led coding education, workshops, and practical programming culture.',
  mandateStatement:
    'Coders Club supports student-led technical learning at FAST NUCES Karachi through coding sessions, practical workshops, and collaborative problem-solving.',
  supportingCopy:
    'Designed to help students explore topics beyond routine coursework, Coders Club encourages active programming practice alongside peers—supported logistically and technically by ACM FAST operations.',
  attributionNotice: {
    label: 'DISTINCT EDUCATIONAL SCOPE',
    description:
      'Coders Club focuses specifically on technical education and student-led learning initiatives within ACM FAST, distinct from event production or general operations handled by other chapters and departments.',
  },
  learningThemes: [
    {
      code: 'THEME 01',
      name: 'Competitive Programming',
      description:
        'Exploring algorithmic problem-solving strategies, complexity reasoning, and structured contest preparation.',
    },
    {
      code: 'THEME 02',
      name: 'Practical Coding Skills',
      description:
        'Building applied programming fluency, debugging confidence, and clean implementation habits beyond theory.',
    },
    {
      code: 'THEME 03',
      name: 'Collaborative Technical Learning',
      description:
        'Bringing students together in peer-supported spaces to share ideas, work through challenges, and grow collectively.',
    },
    {
      code: 'THEME 04',
      name: 'Student-Led Workshops',
      description:
        'Empowering knowledgeable students to guide peers through focused technical topics and coding sessions.',
    },
  ],
};
