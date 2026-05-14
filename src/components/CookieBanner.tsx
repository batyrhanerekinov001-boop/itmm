import { useEffect, useState } from "react"

const STORAGE_KEY = "cookie-consent"

type Consent = "accepted" | "rejected"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

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
      <div className="cookie-text">Мы используем cookies для улучшения сайта</div>
      <div className="cookie-actions">
        <button type="button" className="btn-primary cookie-btn" onClick={() => save("accepted")}>
          Принять
        </button>
        <button type="button" className="btn-outline cookie-btn" onClick={() => save("rejected")}>
          Отклонить
        </button>
      </div>
    </div>
  )
}

