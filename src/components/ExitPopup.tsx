import { useEffect, useState } from "react"
import type { Translations } from "../i18n/translations"

type Props = {
  t: Translations
  onOpenForm: () => void
}

const STORAGE_KEY = "exit-popup-shown"

export function ExitPopup({ t, onOpenForm }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia?.("(pointer: fine)")?.matches ?? true
    if (!fine) return
    if (sessionStorage.getItem("exitPopupShown") === "true") return

    const onOut = (e: MouseEvent) => {
      if (e.clientY >= 10) return
      const next = e.relatedTarget as Node | null
      if (next) return
      sessionStorage.setItem("exitPopupShown", "true")
      setOpen(true)
    }

    document.addEventListener("mouseout", onOut)
    return () => document.removeEventListener("mouseout", onOut)
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
