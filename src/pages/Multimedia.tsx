import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ProjectCard } from '../components/ProjectCard'
import { Melody } from '../components/Melody'
import { PageMeta } from '../components/PageMeta'
import { multimediaProjects, type Category } from '../data/projects'

const filters: Array<'All' | Category> = ['All', 'Prelim', 'Midterm', 'Final']

export default function Multimedia() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = multimediaProjects.filter((p) => filter === 'All' || p.category === filter)
  const ref = useReveal<HTMLDivElement>({ start: 'top 95%' })

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl px-5 pt-8">
      <PageMeta title="Multimedia Projects" path="/multimedia" description="Placeholder: multimedia projects: prelim, midterm and final." />
      <Melody float rotate={-6} flip className="absolute right-6 top-6 w-20 sm:w-32" />
      <h1 data-reveal className="m-0 text-5xl sm:text-7xl"><mark className="hl">Multimedia Projects</mark></h1>
      <p data-reveal className="mt-3 max-w-xl text-lg">Multimedia projects, from prelim to midterm to final.</p>

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

    </div>
  )
}
