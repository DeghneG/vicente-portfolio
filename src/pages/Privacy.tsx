import { useReveal } from '../hooks/useReveal'
import { Melody } from '../components/Melody'
import { PageMeta } from '../components/PageMeta'

export default function Privacy() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="relative mx-auto max-w-2xl px-5 pt-16">
      <PageMeta title="Privacy Policy" path="/privacy" description="Placeholder: how this site handles your data." />
      <Melody float className="absolute right-4 top-6 w-16 sm:w-24" />
      <h1 data-reveal className="m-0 text-5xl">Privacy Policy</h1>
      <p data-reveal className="mt-4 text-lg">
        This site doesn't use cookies or analytics. The contact form opens your own email app, so nothing you
        type is stored on this site. Placeholder text — review and update before publishing.
      </p>
    </div>
  )
}
