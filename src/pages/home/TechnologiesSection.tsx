import { Brain, Cog, Copy, Glasses, Globe, Scale, Shield, Zap } from "lucide-react"
import type { Translations } from "../../i18n/translations"
import { useScrollReveal } from "../../hooks/useScrollReveal"

type Props = {
  t: Translations
}

const icons = [Brain, Glasses, Shield, Globe, Zap, Cog, Scale, Copy] as const

export function TechnologiesSection({ t }: Props) {
  const section = t.home.technologies
  const revealRef = useScrollReveal()

  return (
    <div className="section-wrap" ref={revealRef}>
      <div className="section-title">{section.title}</div>
      <p className="section-sub">{section.subtitle}</p>

      <div className="grid3">
        {section.items.map((item, index) => {
          const Icon = icons[index] ?? Brain
          return (
            <div
              className="sector-card tech-card fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
              key={item.title}
            >
              <div className="tech-icon">
                <Icon size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

