import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type RevealOptions = {
  /** CSS selector for elements to reveal inside the container */
  selector?: string
  /** Distance (px) elements travel upward while fading in */
  y?: number
  duration?: number
  /** Delay between each element in a group */
  stagger?: number
  /** ScrollTrigger start position */
  start?: string
}

/**
 * Fades + lifts every `[data-reveal]` child into view as it scrolls on screen.
 * Usage: const ref = useReveal<HTMLElement>(); <section ref={ref}><h2 data-reveal>…</h2></section>
 * Respects prefers-reduced-motion (elements simply stay visible).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  selector = '[data-reveal]',
  y = 28,
  duration = 0.8,
  stagger = 0.12,
  start = 'top 85%',
}: RevealOptions = {}) {
  const scope = useRef<T>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>(selector, scope.current)
        if (!items.length) return

        gsap.set(items, { opacity: 0, y })
        ScrollTrigger.batch(items, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration, stagger, ease: 'back.out(1.4)', overwrite: true }),
        })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(gsap.utils.toArray(selector, scope.current), { opacity: 1, y: 0 })
      })
    },
    { scope, dependencies: [selector, y, duration, stagger, start] },
  )

  return scope
}
