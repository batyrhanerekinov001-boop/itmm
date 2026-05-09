import { MessageCircle } from "lucide-react"
import { useLanguage } from "../hooks/useLanguage"

export function FloatingWhatsAppButton() {
  const { t } = useLanguage()

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

