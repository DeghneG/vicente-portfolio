type MelodyProps = {
  /** Tailwind classes for size and position */
  className?: string
  /** Tilt in degrees */
  rotate?: number
  /** Gentle bobbing animation */
  float?: boolean
  /** Mirror horizontally */
  flip?: boolean
  /** Image file in /public */
  src?: string
}

/** Decorative My Melody cutout. Hidden from screen readers. */
export function Melody({ className = '', rotate = 0, float = false, flip = false, src = '/melody.webp' }: MelodyProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      className={`pointer-events-none select-none ${float ? 'melody-float' : ''} ${className}`}
      style={{ transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})` }}
    />
  )
}
