export type Category = 'Prelim' | 'Midterm' | 'Final' | 'Capstone' | 'Personal'

export type Project = {
  slug: string
  title: string
  blurb: string
  category: Category
  role: string
  tools: string
  timeline: string
  summary: string
}

const role = 'UI/UX Designer'
const tools = 'Figma, Canva, Stitch, Ibis Paint'

export const projects: Project[] = [
  {
    slug: 'prelim',
    title: 'Prelim Project',
    blurb: 'Preliminary project — placeholder.',
    category: 'Prelim',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the prelim project solves and summarize it here.',
  },
  {
    slug: 'midterm',
    title: 'Midterm Project',
    blurb: 'Midterm project — placeholder.',
    category: 'Midterm',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the midterm project solves and summarize it here.',
  },
  {
    slug: 'final',
    title: 'Final Project',
    blurb: 'Final project — placeholder.',
    category: 'Final',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the final project solves and summarize it here.',
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
    blurb: 'Personal project — placeholder.',
    category: 'Personal',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem ClassBridge solves and summarize the project here.',
  },
  {
    slug: 'spotter-campus-tracker',
    title: 'Spotter Campus Tracker',
    blurb: 'Personal project — placeholder.',
    category: 'Personal',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem Spotter Campus Tracker solves and summarize the project here.',
  },
  {
    slug: 'laundry-shop-management-system',
    title: 'Laundry Shop Management System',
    blurb: 'Personal project — placeholder.',
    category: 'Personal',
    role,
    tools,
    timeline: 'Update me',
    summary: 'Describe the problem the Laundry Shop Management System solves and summarize the project here.',
  },
]

export const projectHref = (p: Project) => `/work/${p.slug}`

export const multimediaCategories = ['Prelim', 'Midterm', 'Final'] as const
export const multimediaProjects = projects.filter((p) => (multimediaCategories as readonly string[]).includes(p.category))
export const personalProjects = projects.filter((p) => !(multimediaCategories as readonly string[]).includes(p.category))
export const pagePath = (p: Project) => (personalProjects.includes(p) ? '/personal' : '/multimedia')
