import type { Translations } from "../../i18n/translations"
import { useScrollReveal } from "../../hooks/useScrollReveal"

type Props = {
  t: Translations
  onNavigate: (page: "contact") => void
}

export function FinalCtaSection({ t, onNavigate }: Props) {
  const cta = t.home.finalCta
  const revealRef = useScrollReveal()

  return (
    <div className="dark-cta" ref={revealRef}>
      <h2 className="fade-in-up">{cta.title}</h2>
      <p className="fade-in-up" style={{ transitionDelay: "100ms" }}>
        {cta.text}
      </p>
      <button
        className="btn-white fade-in-up"
        style={{ transitionDelay: "200ms" }}
        onClick={() => onNavigate("contact")}
      >
        {cta.button}
      </button>
    </div>
  )
}
