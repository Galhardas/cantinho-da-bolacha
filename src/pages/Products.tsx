import { useSite } from '../SiteContext'
import Section from '../components/Section'
import CardGrid from '../components/CardGrid'
import CustomCakes from '../components/CustomCakes'

export default function Products() {
  const { products } = useSite()
  const { extras, custom } = products

  return (
    <>
      <Section title={products.title} intro={products.intro}>
        <CardGrid items={products.items} priceUnit={products.priceUnit} />
      </Section>

      {extras && (
        <Section title={extras.title} intro={extras.intro} alt>
          <CardGrid items={extras.items} priceUnit={products.priceUnit} />
        </Section>
      )}

      {custom && (
        <Section id="bolos" title={custom.title} intro={custom.intro} accent>
          <CustomCakes custom={custom} />
        </Section>
      )}
    </>
  )
}
