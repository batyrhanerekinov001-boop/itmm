import { useEffect, useMemo, useRef, useState } from "react"
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

  const ref = useRef<HTMLDivElement | null>(null)
  const [started, setStarted] = useState(false)
  const [values, setValues] = useState<number[]>(() => items.map(() => 0))

  useEffect(() => {
    const el = ref.current
    if (!el || started) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true)
        }
      },
      { threshold: 0.25 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const durationMs = 2000
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs)
      setValues(items.map((item) => Math.round(item.value * progress)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [items, started])

  return (
    <div ref={ref} className="counter-section">
      <div className="counter-grid">
        {items.map((item, i) => (
          <div
            className={`counter-item fade-in-up${started ? " visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            key={item.label}
          >
            <div className="counter-value">
              {formatValue(values[i] ?? 0)}
              {item.suffix}
            </div>
            <div className="counter-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
