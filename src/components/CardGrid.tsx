import type { Category } from '../types'

interface CardGridProps {
  items: Category[]
  /** Texto junto ao preço (ex.: "un."). */
  priceUnit?: string
  /** Etiqueta sobre a foto (ex.: "Personalizável"). */
  tag?: string
  /** "square" (bolachas, doces) ou "portrait" (bolos, fotos altas). */
  variant?: 'square' | 'portrait'
}

const euro = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' })

/** Grelha de cartões com imagem, título, descrição e (opcional) preço. */
export default function CardGrid({ items, priceUnit, tag, variant = 'square' }: CardGridProps) {
  const portrait = variant === 'portrait'
  const classes = ['card-grid']
  if (portrait) classes.push('card-grid--portrait')
  if (items.length < 3) classes.push('card-grid--few')

  return (
    <div className={classes.join(' ')}>
      {items.map((item) => (
        <article className="card" key={item.title}>
          <div className="card__media">
            <img
              src={item.image}
              alt={item.title}
              width={portrait ? 900 : 720}
              height={portrait ? 1200 : 720}
              loading="lazy"
            />
            {tag && <span className="card__tag">{tag}</span>}
          </div>
          <div className="card__body">
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            {item.price !== undefined && (
              <div className="card__price">
                {euro.format(item.price)}
                {priceUnit && <span> / {priceUnit}</span>}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
