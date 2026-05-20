import { useEffect, useState } from "react"
import type { Lang } from "../i18n/translations"

const STORAGE_KEY = "cookie-consent"

type Consent = "accepted" | "rejected"

type Props = {
  lang: Lang
}

export function CookieBanner({ lang }: Props) {
  const [visible, setVisible] = useState(false)
  const labels =
    lang === "KZ"
      ? { text: "Сайтты жақсарту үшін cookies қолданамыз", accept: "Қабылдау", reject: "Бас тарту" }
      : lang === "EN"
        ? { text: "We use cookies to improve the website", accept: "Accept", reject: "Reject" }
        : { text: "Мы используем cookies для улучшения сайта", accept: "Принять", reject: "Отклонить" }

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Consent | null
    if (saved === "accepted" || saved === "rejected") return
    setVisible(true)
  }, [])

  function save(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, consent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-text">{labels.text}</div>
      <div className="cookie-actions">
        <button type="button" className="btn-primary cookie-btn" onClick={() => save("accepted")}>
          {labels.accept}
        </button>
        <button type="button" className="btn-outline cookie-btn" onClick={() => save("rejected")}>
          {labels.reject}
        </button>
      </div>
    </div>
  )
}
