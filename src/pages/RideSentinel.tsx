import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SectionTitle } from '../components/SectionTitle'
import { Melody } from '../components/Melody'

const details = [
  { label: 'Role', value: 'Update me' },
  { label: 'Timeline', value: 'Update me' },
  { label: 'Tools', value: 'React, TypeScript, Tailwind CSS' },
]

export default function RideSentinel() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <article ref={ref} className="relative mx-auto max-w-4xl px-5 pt-16">
      <Melody float rotate={6} className="absolute right-4 top-8 w-20 sm:w-28" />
      <Link to="/work" data-reveal className="font-bold text-berry">← Back to work</Link>
      <h1 data-reveal className="m-0 mt-4 text-5xl sm:text-7xl"><mark className="hl">RideSentinel</mark></h1>

      <section className="mt-10">
        <SectionTitle>Problem &amp; summary</SectionTitle>
        <p data-reveal className="max-w-2xl text-lg">
          Describe the problem RideSentinel solves and summarize the project here.
        </p>
      </section>

      <section className="mt-14">
        <SectionTitle>At a glance</SectionTitle>
        <dl className="m-0 grid gap-4 sm:grid-cols-3">
          {details.map((d) => (
            <div key={d.label} data-reveal className="card p-5">
              <dt className="text-sm font-bold uppercase tracking-widest text-berry">{d.label}</dt>
              <dd className="m-0 mt-1">{d.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <SectionTitle>Wireframes, code &amp; visuals</SectionTitle>
        <div data-reveal className="card grid min-h-48 place-items-center border-dashed p-6 text-center">
          Add wireframes, code snippets, and screenshots here.
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>Deliverables &amp; metrics</SectionTitle>
        <p data-reveal className="max-w-2xl text-lg">Add final deliverables and measurable outcomes here.</p>
      </section>

      <nav aria-label="Project navigation" data-reveal className="mt-16 flex justify-between gap-4">
        <Link to="/work" className="btn btn-ghost">← Previous</Link>
        <Link to="/work" className="btn btn-ghost">Next →</Link>
      </nav>
    </article>
  )
}
