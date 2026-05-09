import { MessageCircle } from "lucide-react"
import type { Translations } from "../i18n/translations"

type Props = {
  t: Translations
}

export function FloatingWhatsAppButton({ t }: Props) {
  return (
    <a
      href="https://wa.me/77018771414"
      target="_blank"
      rel="noreferrer"
      className="wa-fab"
      aria-label={t.floatingWhatsappLabel}
    >
      <MessageCircle size={22} />
    </a>
  )
}
