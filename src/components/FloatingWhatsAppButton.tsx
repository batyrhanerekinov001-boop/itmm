import { MessageCircle } from "lucide-react"

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/77018771414"
      target="_blank"
      rel="noreferrer"
      className="wa-fab"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  )
}

