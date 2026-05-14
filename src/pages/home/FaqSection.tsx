import { useState } from "react"
import type { Translations } from "../../i18n/translations"
import { useScrollReveal } from "../../hooks/useScrollReveal"

type Props = {
  t: Translations
}

export function FaqSection({ t }: Props) {
  const items = t.home.faq.items
  const [active, setActive] = useState(items[0]?.id ?? "")
  const revealRef = useScrollReveal()

  return (
    <div className="section-wrap faq-section" ref={revealRef}>
      <div className="section-eyebrow">{t.home.faq.eyebrow}</div>
      <div className="section-title">{t.home.faq.title}</div>
      <div className="faq-list">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`faq-item fade-in-up${active === item.id ? " open" : ""}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <button className="faq-question" onClick={() => setActive(item.id)}>
              <span>{item.q}</span>
              <span>{active === item.id ? "−" : "+"}</span>
            </button>
            {active === item.id && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
