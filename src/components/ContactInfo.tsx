import { useSite } from '../SiteContext'
import MapEmbed from './MapEmbed'
import SocialLinks from './SocialLinks'

export default function ContactInfo({ showMap = true }: { showMap?: boolean }) {
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

      {showMap && (
        <MapEmbed
          query={contact.mapQuery ?? contact.address}
          title={contact.mapTitle}
          directionsLabel={contact.directionsLabel}
        />
      )}

      <h4>{contact.socialsTitle}</h4>
      <SocialLinks socials={socials} />
    </div>
  )
}
