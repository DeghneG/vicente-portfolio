export function Bow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <path d="M32 20C22 6 4 4 4 18s18 18 28 2z" fill="#f783b0" stroke="#d94a86" strokeWidth="2" strokeLinejoin="round" />
      <path d="M32 20c10-14 28-16 28-2S42 36 32 20z" fill="#f783b0" stroke="#d94a86" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="32" cy="20" r="6" fill="#ffc4dc" stroke="#d94a86" strokeWidth="2" />
    </svg>
  )
}

export function Daisy({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <g fill="#fff8fb">
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} cx="16" cy="8" rx="5" ry="7" transform={`rotate(${r} 16 16)`} />
        ))}
      </g>
      <circle cx="16" cy="16" r="4.5" fill="#ffe9a8" />
    </svg>
  )
}

export function Star({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 3l3.6 8.2 8.9.8-6.7 5.9 2 8.7L16 22l-7.8 4.6 2-8.7-6.7-5.9 8.9-.8z"
        fill="#ffe9a8"
        stroke="#f6c85f"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MusicNote({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M12 24V7l14-3v17" fill="none" stroke="#a9d8ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="9" cy="24" rx="4.5" ry="3.5" fill="#a9d8ea" />
      <ellipse cx="23" cy="21" rx="4.5" ry="3.5" fill="#a9d8ea" />
    </svg>
  )
}

export function Heart({ className = '', color = '#ffc4dc' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 30" className={className} aria-hidden="true">
      <path d="M16 28C6 20 2 14 2 9a7 7 0 0114-2 7 7 0 0114 2c0 5-4 11-14 19z" fill={color} />
    </svg>
  )
}

export function Strawberry({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 36" className={className} aria-hidden="true">
      <path d="M16 8C6 8 2 16 6 24c3 6 7 10 10 10s7-4 10-10c4-8 0-16-10-16z" fill="#f06a8f" />
      <path d="M16 8c-3-4-7-3-8-1 3 0 5 1 8 1zm0 0c3-4 7-3 8-1-3 0-5 1-8 1z" fill="#8bc98f" />
      <g fill="#fff4f8">
        <circle cx="11" cy="16" r="1" />
        <circle cx="19" cy="15" r="1" />
        <circle cx="15" cy="21" r="1" />
        <circle cx="21" cy="22" r="1" />
        <circle cx="11" cy="25" r="1" />
      </g>
    </svg>
  )
}
