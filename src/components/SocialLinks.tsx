import type { ReactNode } from 'react'
import type { Social } from '../types'

const ICONS: Record<Social['type'], ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.7V21h2.8z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
}

const LABELS: Record<Social['type'], string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
}

export default function SocialLinks({ socials }: { socials: Social[] }) {
  return (
    <ul className="socials">
      {socials.map((s) => (
        <li key={s.type}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={LABELS[s.type]}>
            {ICONS[s.type]}
          </a>
        </li>
      ))}
    </ul>
  )
}
