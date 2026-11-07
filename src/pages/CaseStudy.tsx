import { Link, useParams } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SectionTitle } from '../components/SectionTitle'
import { Melody } from '../components/Melody'
import { PageMeta } from '../components/PageMeta'
import { projects } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const ref = useReveal<HTMLDivElement>()
  const i = projects.findIndex((p) => p.slug === slug)
  const project = projects[i]
  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-5 pt-8">
        <p>Project not found.</p>
        <Link to="/multimedia" className="font-bold text-berry">← Back to projects</Link>
      </div>
    )
  }
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  const details = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    { label: 'Design tools', value: project.tools },
    ...(project.techStack ? [{ label: 'Tech stack', value: project.techStack }] : []),
  ]

  return (
    <article ref={ref} className="relative mx-auto max-w-4xl px-5 pt-8">
      <PageMeta
        title={project.title}
        path={`/work/${project.slug}`}
        description={`${project.title} case study — problem, process and results.`}
      />
      <Melody float rotate={6} className="absolute right-4 top-8 w-20 sm:w-28" />
      <h1 data-reveal className="m-0 mt-2 text-5xl sm:text-7xl"><mark className="hl">{project.title}</mark></h1>

      <section className="mt-10">
        <SectionTitle>Problem &amp; summary</SectionTitle>
        <p data-reveal className="max-w-2xl text-lg">{project.summary}</p>
        {project.github && (
          <a
            data-reveal
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost mt-6"
          >
            View on GitHub ↗
          </a>
        )}
      </section>

      <section className="mt-14">
        <SectionTitle>At a glance</SectionTitle>
        <dl className={`m-0 grid gap-4 ${details.length > 3 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
          {details.map((d) => (
            <div key={d.label} data-reveal className="card p-5">
              <dt className="text-sm font-bold uppercase tracking-widest text-berry">{d.label}</dt>
              <dd className="m-0 mt-1">{d.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <SectionTitle>Wireframes &amp; visuals</SectionTitle>
        {project.image ? (
          <img
            data-reveal
            src={project.image}
            alt={project.imageAlt ?? ''}
            className="card w-full p-2"
          />
        ) : (
          <div data-reveal className="card grid min-h-48 place-items-center border-dashed p-6 text-center">
            Add wireframes, prototypes, and screenshots here.
          </div>
        )}
      </section>

      <nav aria-label="Project navigation" data-reveal className="mt-16 flex justify-between gap-4">
        <Link to={`/work/${prev.slug}`} className="btn btn-ghost">← Previous</Link>
        <Link to={`/work/${next.slug}`} className="btn btn-ghost">Next →</Link>
      </nav>
    </article>
  )
}
