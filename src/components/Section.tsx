import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  intro?: string
  /** Fundo branco alternado. */
  alt?: boolean
  /** Fundo com um toque da cor principal (para destacar uma secção). */
  accent?: boolean
  /** Âncora (ex.: "bolos" -> /produtos#bolos). */
  id?: string
  children: ReactNode
}

/** Bloco de página com título centrado. */
export default function Section({ title, intro, alt, accent, id, children }: SectionProps) {
  const classes = ['section']
  if (alt) classes.push('section--alt')
  if (accent) classes.push('section--accent')

  return (
    <section className={classes.join(' ')} id={id}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
