import { useState } from "react"
import { useLanguage } from "../../hooks/useLanguage"

export function FaqSection() {
  const { t } = useLanguage()
  const items = t.home.faq.items
  const [active, setActive] = useState(items[0]?.id ?? "")

  return (
    <div className="section-wrap faq-section">
      <div className="section-eyebrow">{t.home.faq.eyebrow}</div>
      <div className="section-title">{t.home.faq.title}</div>
      <div className="faq-list">
        {items.map((item) => (
          <div key={item.id} className={`faq-item${active === item.id ? " open" : ""}`}>
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
