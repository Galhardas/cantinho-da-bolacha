import type { Category } from '../types'

interface CardGridProps {
  items: Category[]
}

/** Grelha de cartões com imagem, título e descrição (produtos, serviços, pratos...). */
export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article className="card" key={item.title}>
          <img src={item.image} alt={item.title} width={720} height={250} loading="lazy" />
          <div className="card__body">
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}
