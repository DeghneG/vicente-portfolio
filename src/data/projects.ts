export type Category = 'Prelim' | 'Midterm' | 'Final' | 'Capstone' | 'Personal'

export type Project = {
  slug: string
  title: string
  blurb?: string
  category: Category
  role: string
  tools: string
  /** Languages and frameworks the project was built with, if known */
  techStack?: string
  timeline: string
  summary: string
  /** Source code repository, if public */
  github?: string
  /** Canva design (use the /view link, not /edit) */
  canva?: string
  /** PDF in /public, embedded on the case study */
  pdf?: string
  /** Screenshot in /public, shown on the card and the case study */
  image?: string
  imageAlt?: string
}

const role = 'UI/UX Designer'
const tools = 'Figma, Canva, Stitch, Ibis Paint'

export const projects: Project[] = [
  {
    slug: 'prelim',
    title: 'Prelim Project',
    blurb: 'RideSentinel — prelim presentation.',
    category: 'Prelim',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the prelim project solves and summarize it here.',
    canva: 'https://www.canva.com/design/DAHQOVuEeF4/WpLm00FRtEakCNCuMPjckg/view',
    image: '/projects/prelim.png',
    imageAlt: 'RideSentinel title slide: A Standalone QR-Based Verification and Safety System for Informal Motorcycle Ride Services.',
  },
  {
    slug: 'midterm',
    title: 'Midterm Project',
    blurb: 'Morning Routine — midterm project.',
    category: 'Midterm',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the midterm project solves and summarize it here.',
    pdf: '/projects/midterm/Morning_Routine.pdf',
    image: '/projects/midterm.png',
    imageAlt: 'Morning Routine, a six-panel comic: a student sleeps through a 7:00 alarm, wakes at 8:00, runs to school, finds the doors closed and faces the teacher.',
  },
  {
    slug: 'final',
    title: 'Final Project',
    blurb: 'Digital Portfolio Sitemap — final project.',
    category: 'Final',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the final project solves and summarize it here.',
    pdf: '/projects/final/Vicente-Portfolio-Sitemap.pdf',
    image: '/projects/final.png',
    imageAlt: 'Digital Portfolio Sitemap for Leighmarie Abigail Vicente: Home, About, Work and Contact pages with their sections, and a footer navigation bar.',
  },
  {
    slug: 'capstone',
    title: 'Capstone Project',
    blurb: 'RideSentinel — UI/UX design for my capstone.',
    category: 'Capstone',
    role,
    tools,
    timeline: 'Update me',
    summary: 'RideSentinel is my capstone project. Describe the problem it solves and summarize the project here.',
  },
  {
    slug: 'classbridge',
    title: 'ClassBridge',
    category: 'Personal',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem ClassBridge solves and summarize the project here.',
    techStack: 'JavaScript, CSS, HTML',
    github: 'https://github.com/mirei-sayo/ClassBridge',
    image: '/projects/classbridge.png',
    imageAlt: 'ClassBridge sign-in screen: a dark card with the ClassBridge logo, student email and password fields, and an orange Sign In button.',
  },
  {
    slug: 'spotter-campus-tracker',
    title: 'Spotter Campus Tracker',
    category: 'Personal',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem Spotter Campus Tracker solves and summarize the project here.',
    techStack: 'HTML, Python, CSS, JavaScript',
    github: 'https://github.com/mirei-sayo/spotter-campus-tracker',
    image: '/projects/spotter-campus-tracker.png',
    imageAlt: 'Spotter login screen: a dark page with the headline "Leave it. Track it. Score it back." and a Welcome to Spotter sign-in card.',
  },
  {
    slug: 'laundry-shop-management-system',
    title: 'Laundry Shop Management System',
    category: 'Personal',
    role,
    tools,
    timeline: 'Update me',
    github: 'https://github.com/JustineSalinas/Laundry-Shop-Management-System',
    summary: 'Describe the problem the Laundry Shop Management System solves and summarize the project here.',
  },
]

export const projectHref = (p: Project) => `/work/${p.slug}`

export const multimediaCategories = ['Prelim', 'Midterm', 'Final'] as const
export const multimediaProjects = projects.filter((p) => (multimediaCategories as readonly string[]).includes(p.category))
export const personalProjects = projects.filter((p) => !(multimediaCategories as readonly string[]).includes(p.category))
export const pagePath = (p: Project) => (personalProjects.includes(p) ? '/personal' : '/multimedia')
