import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { projectHref, type Project } from '../data/projects'

const tilts = ['-2.5deg', '1.8deg', '-1.2deg']

/** Polaroid-style project card: tilted like a sticker, taped on, straightens on hover. */
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const style = { '--tilt': tilts[index % tilts.length] } as CSSProperties
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 rounded-sm bg-petal/80"
      />
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt ?? ''}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl bg-blush object-contain"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid aspect-[4/3] place-items-center rounded-xl bg-blush text-sm font-bold text-berry"
        >
          Image placeholder
        </div>
      )}
      <h3 className="m-0 mt-5 text-4xl text-berry">{project.title}</h3>
      <p className="mb-0 mt-2">{project.blurb}</p>
      <p className="mb-0 mt-5 font-bold text-berry">View more →</p>
    </>
  )
  const base = 'card sticker relative block h-full p-4 pb-6 text-plum no-underline'
  return (
    <Link to={projectHref(project)} data-reveal style={style} className={base}>
      {inner}
    </Link>
  )
}
