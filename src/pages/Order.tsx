import { useSite } from '../SiteContext'
import Section from '../components/Section'
import OrderForm from '../components/OrderForm'

export default function Order() {
  const { order } = useSite()

  return (
    <Section title={order.title}>
      <div className="narrow">
        <OrderForm />
        <p className="center muted">{order.thanks}</p>
      </div>
    </Section>
  )
}
