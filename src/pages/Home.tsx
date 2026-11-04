import { Link } from 'react-router-dom'
import { useSite } from '../SiteContext'
import Hero from '../components/Hero'
import Section from '../components/Section'
import CardGrid from '../components/CardGrid'
import OpeningHours from '../components/OpeningHours'
import ContactInfo from '../components/ContactInfo'

export default function Home() {
  const { hero, home, products, hours, contact } = useSite()
  const featured = products.items.filter((item) => item.featured)

  return (
    <>
      <Hero {...hero} />

      <Section title={home.productsTitle}>
        <CardGrid items={featured.length > 0 ? featured : products.items.slice(0, 8)} />
        <p className="center">
          <Link to="/produtos" className="btn">
            {home.productsCta}
          </Link>
        </p>
      </Section>

      <Section title={home.aboutTitle} alt>
        <div className="split">
          <div>
            <p>{home.aboutSummary}</p>
            <Link to="/sobre-nos" className="btn btn--outline">
              {home.aboutCta}
            </Link>
          </div>
          <img src={home.aboutImage} alt="" loading="lazy" className="split__img" />
        </div>
      </Section>

      <Section title={home.infoTitle}>
        <div className="info-grid">
          <OpeningHours title={contact.hoursTitle} hours={hours} />
          <ContactInfo />
        </div>
      </Section>
    </>
  )
}
