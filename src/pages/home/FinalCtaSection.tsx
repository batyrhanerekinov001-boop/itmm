import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
  onNavigate: (page: "contact") => void
}

export function FinalCtaSection({ t, onNavigate }: Props) {
  const cta = t.home.finalCta

  return (
    <div className="dark-cta">
      <h2>{cta.title}</h2>
      <p>{cta.text}</p>
      <button className="btn-white" onClick={() => onNavigate("contact")}>
        {cta.button}
      </button>
    </div>
  )
}
