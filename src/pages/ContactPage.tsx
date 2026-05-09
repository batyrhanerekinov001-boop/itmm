import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"
import type { FormEvent } from "react"
import { useState } from "react"
import { Footer } from "../components/Footer"
import type { LeadPayload } from "../types"

const initialForm: LeadPayload = {
  name: "",
  company: "",
  email: "",
  industry: "",
  message: "",
}

export function ContactPage() {
  const [form, setForm] = useState<LeadPayload>(initialForm)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )
  const [error, setError] = useState<string>("")

  async function submitLead(e: FormEvent) {
    e.preventDefault()
    setError("")
    setStatus("loading")

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "itmm-landing" }),
      })

      const data = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setStatus("error")
        setError(data.error || "Не удалось отправить заявку.")
        return
      }

      setStatus("success")
      setForm(initialForm)
    } catch {
      setStatus("error")
      setError("Не удалось отправить заявку. Проверьте соединение.")
    }
  }

  return (
    <>
      <div className="contact-page">
        <div className="contact-left">
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 32,
            }}
          >
            Контакты
          </div>
          <h1>
            Давайте
            <br />
            <span>познакомимся.</span>
          </h1>
          <p>
            Расскажите о вашем бизнесе — и мы вместе придумаем, как сделать его
            круче. Мы всегда на связи.
          </p>
          <a href="tel:+77018771414" className="phone-link">
            +7 701 877 1414
          </a>

          <div className="social-list">
            <a
              href="https://www.instagram.com/itmm.kz"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <div className="social-icon si-ig">
                <Instagram size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                  Instagram
                </div>
                <div>@itmm.kz</div>
              </div>
              <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
            </a>

            <a
              href="https://wa.me/77018771414"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <div className="social-icon si-wa">
                <MessageCircle size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                  WhatsApp
                </div>
                <div>+7 701 877 1414</div>
              </div>
              <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
            </a>

            <a
              href="https://t.me/itmm_kz"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <div className="social-icon si-tg">
                <Send size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                  Telegram
                </div>
                <div>@itmm_kz</div>
              </div>
              <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
            </a>

            <a
              href="https://www.linkedin.com/company/itmm-kz"
              target="_blank"
              rel="noreferrer"
              className="social-item"
            >
              <div className="social-icon si-li">
                <Linkedin size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                  LinkedIn
                </div>
                <div>ITMM Kazakhstan</div>
              </div>
              <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <h2>Расскажите о проекте</h2>

          <form onSubmit={submitLead}>
            <div className="form-2col">
              <div className="form-group">
                <label>Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  required
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label>Компания</label>
                <input
                  type="text"
                  placeholder="Название компании"
                  value={form.company}
                  required
                  onChange={(e) =>
                    setForm((s) => ({ ...s, company: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="email@company.com"
                value={form.email}
                required
                onChange={(e) =>
                  setForm((s) => ({ ...s, email: e.target.value }))
                }
              />
            </div>

            <div className="form-group">
              <label>Отрасль</label>
              <select
                value={form.industry}
                required
                onChange={(e) =>
                  setForm((s) => ({ ...s, industry: e.target.value }))
                }
              >
                <option value="">Выберите отрасль</option>
                <option>Строительство</option>
                <option>Нефтегаз</option>
                <option>Ритейл</option>
                <option>Энергетика</option>
                <option>Другое</option>
              </select>
            </div>

            <div className="form-group">
              <label>О задаче</label>
              <textarea
                placeholder="Расскажите о вашем проекте..."
                value={form.message}
                required
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
              ></textarea>
            </div>

            <button
              className="btn-primary"
              style={{ width: "100%" }}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку →"}
            </button>

            {status === "success" && (
              <p style={{ marginTop: 14, fontSize: 13, color: "var(--sub)" }}>
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            )}
            {status === "error" && (
              <p style={{ marginTop: 14, fontSize: 13, color: "#b91c1c" }}>
                {error || "Не удалось отправить заявку."}
              </p>
            )}

            <p
              style={{
                fontSize: 12,
                color: "var(--sub)",
                marginTop: 16,
                textAlign: "center",
              }}
            >
              Или напрямую:{" "}
              <a
                href="tel:+77018771414"
                style={{ color: "var(--blue)", fontWeight: 800 }}
              >
                +7 701 877 1414
              </a>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
