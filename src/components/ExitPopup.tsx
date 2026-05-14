import { useEffect, useState } from "react"
import type { Translations } from "../i18n/translations"

type Props = {
  t: Translations
  onOpenForm: () => void
}

const STORAGE_KEY = "exitPopupShown"

export function ExitPopup({ t, onOpenForm }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia?.("(pointer: fine)")?.matches ?? true
    if (!fine) return
    const shown = localStorage.getItem(STORAGE_KEY)
    if (shown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setOpen(true)
        localStorage.setItem(STORAGE_KEY, "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  if (!open) return null

  const copy = t.exitPopup

  return (
    <div className="exit-overlay" onMouseDown={() => setOpen(false)}>
      <div className="exit-card" onMouseDown={(e) => e.stopPropagation()}>
        <div className="exit-text">{copy.text}</div>
        <div className="exit-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setOpen(false)
              onOpenForm()
            }}
          >
            {copy.primary}
          </button>
          <button type="button" className="btn-outline" onClick={() => setOpen(false)}>
            {copy.secondary}
          </button>
        </div>
      </div>
    </div>
  )
}
