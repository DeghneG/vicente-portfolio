import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ProjectCard } from '../components/ProjectCard'
import { Melody } from '../components/Melody'
import { projects, type Category } from '../data/projects'

const filters: Array<'All' | Category> = ['All', 'Web Apps', 'Games']

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = projects.filter((p) => filter === 'All' || p.category === filter)
  const ref = useReveal<HTMLDivElement>({ start: 'top 95%' })

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl px-5 pt-16">
      <Melody float rotate={-6} flip className="absolute right-6 top-6 w-20 sm:w-32" />
      <h1 data-reveal className="m-0 text-6xl sm:text-8xl"><mark className="hl">Work</mark></h1>
      <p data-reveal className="mt-3 max-w-xl text-lg">Coursework and projects, from prelim to final.</p>

      <div data-reveal role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`cursor-pointer rounded-full border-2 border-petal px-5 py-2 font-bold ${
              filter === f ? 'bg-berry text-white' : 'bg-white text-plum hover:bg-blush'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
      {shown.length === 0 && <p className="mt-8">Nothing here yet</p>}

      {/* Sitemap: "Future case studies" (planned page, /work/project-title) */}
      <div data-reveal className="card mt-8 border-dashed p-6">
        <h2 className="m-0 text-2xl text-berry">Future case studies</h2>
        <p className="mb-0 mt-2">More case studies are planned. Check back soon</p>
      </div>
    </div>
  )
}
