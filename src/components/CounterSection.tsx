import { useMemo } from "react"
import type { Translations } from "../i18n/translations"

type Props = {
  t: Translations
}

type CounterItem = {
  value: number
  suffix: string
  label: string
}

function formatValue(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value)
}

export function CounterSection({ t }: Props) {
  const items = useMemo<CounterItem[]>(
    () => [
      { value: 20, suffix: "+", label: t.home.counters.items[0].label },
      { value: 5, suffix: "+", label: t.home.counters.items[1].label },
      { value: 80, suffix: "%", label: t.home.counters.items[2].label },
      { value: 145, suffix: "МР", label: t.home.counters.items[3].label },
    ],
    [t],
  )

  return (
    <div className="counter-section">
      <div className="counter-grid">
        {items.map((item, i) => (
          <div className="counter-item" key={item.label}>
            <div className="counter-value">
              {formatValue(item.value)}
              {item.suffix}
            </div>
            <div className="counter-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
