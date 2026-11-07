import { useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Melody } from '../components/Melody'
import { PageMeta } from '../components/PageMeta'

const field =
  'w-full rounded-2xl border-2 border-petal bg-white px-4 py-3 text-plum placeholder:text-plum/50 focus:border-berry'

// TODO: replace with your real details
const EMAIL = 'your-email@example.com'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(String(data.get('subject') ?? ''))
    const body = encodeURIComponent(`${data.get('message') ?? ''}\n\n— ${data.get('name')} (${data.get('email')})`)
    // No backend yet: open the visitor's mail app with the message prefilled.
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div ref={ref} className="mx-auto grid max-w-5xl gap-10 px-5 pt-16 sm:grid-cols-[1.3fr_1fr]">
      <PageMeta title="Contact" path="/contact" description="Placeholder: get in touch with Leighmarie." />
      <div>
        <h1 data-reveal className="m-0 text-6xl sm:text-8xl"><mark className="hl">Contact</mark></h1>
        <p data-reveal className="mt-3 text-lg">Send me a note — I read everything</p>

        <form data-reveal onSubmit={onSubmit} className="card mt-8 grid gap-5 p-6">
          <label className="grid gap-1 font-bold">
            Name
            <input className={field} name="name" type="text" autoComplete="name" required />
          </label>
          <label className="grid gap-1 font-bold">
            Email
            <input className={field} name="email" type="email" autoComplete="email" required />
          </label>
          <label className="grid gap-1 font-bold">
            Subject
            <input className={field} name="subject" type="text" required />
          </label>
          <label className="grid gap-1 font-bold">
            Message
            <textarea className={field} name="message" rows={5} required />
          </label>
          <button type="submit" className="btn w-fit">Send message</button>
          {sent && <p role="status" className="m-0 font-bold text-berry">Opening your email app…</p>}
        </form>
      </div>

      <aside className="grid content-start gap-6 sm:pt-24">
        <section data-reveal className="card p-6" aria-labelledby="direct">
          <h2 id="direct" className="m-0 mb-3 text-2xl text-berry">Direct</h2>
          <p className="m-0">Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p className="m-0">City: Update me</p>
          <p className="m-0">Timezone: Update me</p>
        </section>
        <section data-reveal className="card p-6" aria-labelledby="profiles">
          <h2 id="profiles" className="m-0 mb-3 text-2xl text-berry">Profiles</h2>
          <p className="m-0"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p className="m-0"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></p>
        </section>
        <Melody float rotate={4} className="mx-auto w-28 sm:w-36" />
      </aside>
    </div>
  )
}
