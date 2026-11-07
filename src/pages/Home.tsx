import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReveal } from '../hooks/useReveal'
import { Heart, Strawberry } from '../components/Bow'
import { Melody } from '../components/Melody'
import { Marquee } from '../components/Marquee'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'


const headline = ['Building', 'cute,', 'clear', 'things', 'for', 'the', 'web.']

export default function Home() {
  const ref = useReveal<HTMLDivElement>()
  const heroRef = useRef<HTMLDivElement>(null)

  // The one authored moment: headline words spring in, then the bubble and hearts pop.
  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'back.out(1.8)' } })
        tl.from('[data-word]', { yPercent: 110, rotate: 8, opacity: 0, duration: 0.8, stagger: 0.07 })
          .from('[data-hero-art]', { scale: 0.7, opacity: 0, rotate: -8, duration: 0.9 }, 0.15)
          .from('[data-pop]', { scale: 0, duration: 0.5, stagger: 0.12 }, 0.7)
      })
    },
    { scope: heroRef },
  )

  return (
    <div ref={ref} className="mx-auto max-w-5xl px-5">
      <section ref={heroRef} className="relative grid items-center gap-6 pb-4 pt-12 sm:grid-cols-[1.35fr_1fr] sm:pt-20">
        <div>
          <p className="m-0 mb-4 flex items-center gap-2 font-bold text-berry">
            Hi, I'm Leighmarie <Heart className="heart-pop w-5" color="#f783b0" />
          </p>
          <h1 className="m-0 text-[clamp(3rem,9.5vw,6rem)] font-semibold leading-[0.98]">
            {headline.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <span data-word className="inline-block">
                  {w === 'clear' ? <mark className="hl">{w}</mark> : w}
                  {' '}
                </span>
              </span>
            ))}
          </h1>
          <p data-reveal className="mt-6 max-w-lg text-lg">
            I design and build web apps and games with a soft touch and sharp details.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <Link to="/work" className="btn">See my work</Link>
            <Link to="/contact" className="btn btn-ghost">Say hello</Link>
          </div>
        </div>

        <div data-hero-art className="relative mx-auto mt-10 w-72 sm:mt-0 sm:w-full">
          <div className="absolute inset-x-0 bottom-0 top-10 rounded-[58%_42%_55%_45%/50%_58%_42%_50%] bg-petal" />
          <Melody src="/cute.png" float className="relative w-full" />
          <span data-pop className="absolute -left-2 top-16 w-10 -rotate-12">
            <Heart color="#f783b0" />
          </span>
          <span data-pop className="absolute -right-3 top-28 w-11 rotate-12">
            <Strawberry />
          </span>
          <span data-pop className="absolute bottom-20 -left-6 w-7 rotate-6">
            <Heart color="#c4366f" />
          </span>
        </div>
      </section>

      <Marquee />

      <section aria-labelledby="featured">
        <SectionTitle>
          <span id="featured">Projects</span>
        </SectionTitle>
        <div className="grid gap-8 sm:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="pt-24" aria-labelledby="quick-about">
        <SectionTitle>
          <span id="quick-about">Quick intro</span>
        </SectionTitle>
        <p data-reveal className="max-w-2xl text-xl">
          I'm a student developer who loves turning ideas into friendly, usable interfaces. I care about
          accessibility, good motion, and details people notice without being told.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.name} data-reveal>
              <h3 className="m-0 mb-3 text-2xl text-berry">{g.name}</h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {g.items.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link data-reveal to="/about" className="btn btn-ghost mt-8">More about me</Link>
      </section>

      <section className="relative left-1/2 mt-32 w-screen -translate-x-1/2 bg-berry px-5 pb-20 pt-24 text-center text-cream">
        <Melody src="/flower.png" float rotate={-6} className="absolute -top-24 left-1/2 w-32 -translate-x-[120%] sm:-top-32 sm:w-44" />
        <h2 data-reveal className="mx-auto m-0 max-w-3xl text-4xl sm:text-6xl">Let's make something sweet together</h2>
        <p data-reveal className="mx-auto mt-4 max-w-md text-lg">Have a project, role, or idea? I'd love to hear about it.</p>
        <Link
          data-reveal
          to="/contact"
          className="btn mt-8 border-cream bg-cream !text-berry shadow-[0_14px_22px_-10px_rgb(0_0_0/0.35)]"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}
