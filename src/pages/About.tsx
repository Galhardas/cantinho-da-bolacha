import { useSite } from '../SiteContext'
import Section from '../components/Section'
import ContactInfo from '../components/ContactInfo'

export default function About() {
  const { about } = useSite()

  return (
    <>
      <Section title={about.title}>
        <div className="narrow prose">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="gallery">
          {about.gallery.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </div>
      </Section>

      <Section>
        <div className="split">
          <ContactInfo />
          {about.portrait && <img src={about.portrait} alt="" loading="lazy" className="split__img" />}
        </div>
      </Section>
    </>
  )
}
