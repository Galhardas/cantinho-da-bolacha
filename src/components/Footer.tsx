import { useSite } from '../SiteContext'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const { name, contact, socials } = useSite()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{name}</strong>
          <p>{contact.address}</p>
        </div>
        <SocialLinks socials={socials} />
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
