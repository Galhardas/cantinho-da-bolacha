import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  intro?: string
  alt?: boolean
  children: ReactNode
}

/** Bloco de página com título centrado. `alt` alterna o fundo. */
export default function Section({ title, intro, alt, children }: SectionProps) {
  return (
    <section className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
