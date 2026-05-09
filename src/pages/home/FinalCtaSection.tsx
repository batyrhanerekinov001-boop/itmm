import { useLanguage } from "../../hooks/useLanguage"

type Props = {
  onNavigate: (page: "contact") => void
}

export function FinalCtaSection({ onNavigate }: Props) {
  const { t } = useLanguage()
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

