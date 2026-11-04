import type { HourRow } from '../types'

interface OpeningHoursProps {
  title: string
  hours: HourRow[]
}

export default function OpeningHours({ title, hours }: OpeningHoursProps) {
  return (
    <div className="info-block">
      <h3>{title}</h3>
      <dl className="hours">
        {hours.map((row) => (
          <div className="hours__row" key={row.day}>
            <dt>{row.day}</dt>
            <dd>{row.hours}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
