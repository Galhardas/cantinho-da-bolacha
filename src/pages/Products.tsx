import { useSite } from '../SiteContext'
import Section from '../components/Section'
import CardGrid from '../components/CardGrid'

export default function Products() {
  const { products } = useSite()

  return (
    <Section title={products.title} intro={products.intro}>
      <CardGrid items={products.items} />
    </Section>
  )
}
