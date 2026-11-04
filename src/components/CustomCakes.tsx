import { Link } from 'react-router-dom'
import type { CustomSection } from '../types'
import AwardFeature from './AwardFeature'
import CardGrid from './CardGrid'

/** Trabalhos feitos à medida: destaque premiado + cartões com a etiqueta "Personalizável" + pedido de orçamento. */
export default function CustomCakes({ custom }: { custom: CustomSection }) {
  return (
    <>
      {custom.award && <AwardFeature award={custom.award} />}
      <CardGrid items={custom.items} tag={custom.tag} variant="portrait" />
      <div className="custom__cta">
        <p className="muted">{custom.note}</p>
        <Link to="/encomendas?tipo=bolo" className="btn">
          {custom.cta}
        </Link>
      </div>
    </>
  )
}
