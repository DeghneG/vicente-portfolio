export type Category = 'Web Apps' | 'Games'

export type Project = {
  title: string
  blurb: string
  category: Category
  /** Route to the case study, or undefined while it is still planned */
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Prelim',
    blurb: 'Preliminary project — placeholder.',
    category: 'Web Apps',
    href: '/work/ridesentinel',
  },
  {
    title: 'Midterm',
    blurb: 'Midterm project — placeholder.',
    category: 'Games',
    href: '/work/ridesentinel',
  },
  {
    title: 'Final',
    blurb: 'Final project — placeholder.',
    category: 'Web Apps',
    href: '/work/ridesentinel',
  },
]
