import type { Award } from '../types'

/** Trabalho premiado: foto do bolo e foto do prémio lado a lado, com o texto ao lado. */
export default function AwardFeature({ award }: { award: Award }) {
  return (
    <article className="award">
      <div className="award__photos">
        <img src={award.image} alt={award.imageAlt} width={900} height={1200} loading="lazy" />
        <img src={award.certificate} alt={award.certificateAlt} width={900} height={1200} loading="lazy" />
      </div>
      <div className="award__body">
        <span className="badge">★ {award.badge}</span>
        <h3>{award.title}</h3>
        <p>{award.description}</p>
      </div>
    </article>
  )
}
