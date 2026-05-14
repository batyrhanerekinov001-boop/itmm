import { useEffect, useState, type FormEvent } from "react"
import type { Translations } from "../i18n/translations"

type Props = {
  open: boolean
  t: Translations
  onClose: () => void
}

type Payload = {
  name: string
  phone: string
  message: string
}

const initial: Payload = { name: "", phone: "", message: "" }

export function Modal({ open, t, onClose }: Props) {
  const [form, setForm] = useState<Payload>(initial)
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  useEffect(() => {
    if (!open) return
    setStatus("idle")
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose, open])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === "loading") return

    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "itmm-modal" }),
      })

      if (!res.ok) {
        setStatus("error")
        return
      }

      setStatus("done")
      setForm(initial)
      onClose()
    } catch {
      setStatus("error")
    }
  }

  if (!open) return null

  const copy = t.modal

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal-card" onMouseDown={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label={copy.close}>
          ✕
        </button>
        <h2 className="modal-title">{copy.title}</h2>

        <form onSubmit={onSubmit} className="modal-form">
          <div className="form-group">
            <label>{copy.name}</label>
            <input
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              required
            />
          </div>
          <div className="form-group">
            <label>{copy.phone}</label>
            <input
              value={form.phone}
              onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
              required
            />
          </div>
          <div className="form-group">
            <label>{copy.message}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              required
            />
          </div>

          <button className="btn-primary" type="submit">
            {status === "loading" ? copy.sending : copy.submit}
          </button>
        </form>
      </div>
    </div>
  )
}

