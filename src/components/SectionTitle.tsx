export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div data-reveal className="mb-8">
      <h2 className="m-0 text-4xl sm:text-5xl">
        <mark className="hl">{children}</mark>
      </h2>
    </div>
  )
}
