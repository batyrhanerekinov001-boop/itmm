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
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return
      sessionStorage.setItem(STORAGE_KEY, "1")
      setOpen(true)
    }

    document.addEventListener("mouseleave", onLeave)
    return () => document.removeEventListener("mouseleave", onLeave)
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

