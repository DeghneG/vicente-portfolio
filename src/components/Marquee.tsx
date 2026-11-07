import type { ReactNode } from 'react'
import { Bow, Daisy, Heart, MusicNote, Star, Strawberry } from './Bow'

const img = (src: string) => <img src={src} alt="" draggable={false} className="h-20 w-auto" />

const stickers: ReactNode[] = [
  img('/melody.png'),
  <Strawberry key="s" className="h-12" />,
  <Heart key="h" className="h-11" />,
  img('/cute.png'),
  <Star key="st" className="h-12" />,
  <Bow key="b" className="h-10" />,
  img('/flower.png'),
  <MusicNote key="m" className="h-12" />,
  <Daisy key="d" className="h-12" />,
]

/** Tilted pink ribbon of cute stickers, scrolling slowly. Decorative, so hidden from screen readers. */
export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {stickers.map((s, i) => (
        <span key={i} className="grid shrink-0 place-items-center">
          {s}
        </span>
      ))}
    </div>
  )
  return (
    <div
      aria-hidden="true"
      className="relative left-1/2 my-16 w-[110vw] -translate-x-1/2 -rotate-2 overflow-hidden bg-berry py-5 shadow-[0_18px_30px_-16px_rgb(196_54_111/0.55)] sm:my-24"
    >
      <div className="marquee-track">
        {/* Six copies: the loop shifts by half the track, so each half must be wider than the screen */}
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="flex shrink-0">
            {row}
          </div>
        ))}
      </div>
    </div>
  )
}
