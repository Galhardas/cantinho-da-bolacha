interface MapEmbedProps {
  query: string
  title: string
  directionsLabel: string
}

/** Mapa do Google Maps (sem chave de API) + ligação "Como chegar". */
export default function MapEmbed({ query, title, directionsLabel }: MapEmbedProps) {
  const q = encodeURIComponent(query)

  return (
    <div className="map">
      <div className="map__frame">
        <iframe
          title={title}
          src={`https://www.google.com/maps?q=${q}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        className="map__link"
        href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {directionsLabel} →
      </a>
    </div>
  )
}
