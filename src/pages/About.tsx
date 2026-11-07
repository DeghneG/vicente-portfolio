import { useReveal } from '../hooks/useReveal'
import { SectionTitle } from '../components/SectionTitle'
import { Melody } from '../components/Melody'
import { PageMeta } from '../components/PageMeta'
import { skillGroups } from '../data/skills'

const timeline = [
  { when: '2026', what: 'Role or school — update me', where: 'Add your experience here' },
  { when: '2025', what: 'Role or school — update me', where: 'Add your experience here' },
]


export default function About() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="relative mx-auto max-w-4xl px-5 pt-16">
      <PageMeta title="About" path="/about" description="Placeholder: background, experience, education and skills." />
      <Melody float rotate={6} className="absolute right-4 top-8 w-20 sm:w-32" />
      <h1 data-reveal className="m-0 text-6xl sm:text-8xl">About <mark className="hl">me</mark></h1>

      <section className="mt-10">
        <SectionTitle>My story</SectionTitle>
        <p data-reveal className="max-w-2xl text-lg">
          I'm Leighmarie Abigail Vicente, a developer and designer who enjoys building web apps and games.
          Replace this paragraph with your background and story.
        </p>
        <p data-reveal className="max-w-2xl text-lg">
          <strong>Design philosophy:</strong> keep it simple, keep it kind, and make every interaction feel a
          little delightful.
        </p>
      </section>

      <section className="mt-16">
        <SectionTitle>Experience &amp; education</SectionTitle>
        <ol className="m-0 grid list-none gap-4 p-0">
          {timeline.map((t) => (
            <li key={t.when} data-reveal className="card grid gap-1 p-5 sm:grid-cols-[6rem_1fr]">
              <span className="font-display text-xl text-berry">{t.when}</span>
              <span>
                <strong>{t.what}</strong>
                <br />
                {t.where}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionTitle>Skills &amp; tools</SectionTitle>
        <div data-reveal className="card overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Skills and tools matrix</caption>
            <thead>
              <tr className="bg-blush">
                <th scope="col" className="p-4 font-display text-lg text-berry">Area</th>
                <th scope="col" className="p-4 font-display text-lg text-berry">Skills &amp; tools</th>
              </tr>
            </thead>
            <tbody>
              {skillGroups.map((g) => (
                <tr key={g.name} className="border-t-2 border-petal">
                  <th scope="row" className="p-4 align-top">{g.name}</th>
                  <td className="p-4">
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                      {g.items.map((i) => (
                        <li key={i} className="chip">{i}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle>Take a copy</SectionTitle>
        <a data-reveal href="/resume.pdf" download className="btn">Download resume (PDF)</a>
      </section>
    </div>
  )
}
