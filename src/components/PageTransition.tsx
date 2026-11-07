import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { Heart } from './Bow'

/**
 * Pink curtain that wipes away on every route change, with a heart popping in the middle.
 * The curtain is placed before the new page paints, so there is no flash of the new page,
 * then it lifts to reveal it. Skipped on first load and for reduced-motion visitors.
 */
export function PageTransition() {
  const { pathname } = useLocation()
  const curtain = useRef<HTMLDivElement>(null)
  const heart = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const el = curtain.current
    const icon = heart.current
    if (!el || !icon) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tl = gsap.timeline()
    tl.set(el, { yPercent: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, visibility: 'visible' })
      .set(icon, { scale: 0, opacity: 1 })
      .to(icon, { scale: 1, duration: 0.35, ease: 'back.out(2.4)' })
      .to(icon, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.in' }, '+=0.05')
      .to(el, { yPercent: -100, borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', duration: 0.7, ease: 'expo.inOut' }, '<0.05')
      .set(el, { visibility: 'hidden' })

    return () => {
      tl.kill()
      gsap.set(el, { visibility: 'hidden' })
    }
  }, [pathname])

  return (
    <div
      ref={curtain}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-berry"
      style={{ visibility: 'hidden', transform: 'translateY(-100%)' }}
    >
      <div ref={heart} className="w-24 opacity-0">
        <Heart color="#ffc4dc" />
      </div>
    </div>
  )
}
