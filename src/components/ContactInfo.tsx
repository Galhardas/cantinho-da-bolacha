import { useSite } from '../SiteContext'
import SocialLinks from './SocialLinks'

export default function ContactInfo() {
  const { contact, socials } = useSite()

  return (
    <div className="info-block">
      <h3>{contact.title}</h3>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
        </li>
        <li>{contact.address}</li>
      </ul>
      <h4>{contact.socialsTitle}</h4>
      <SocialLinks socials={socials} />
    </div>
  )
}
