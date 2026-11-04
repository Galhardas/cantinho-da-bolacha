interface HeroProps {
  image: string
  title: string
  subtitle?: string
}

export default function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: `url("${image}")` }}>
      <div className="hero__overlay">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
