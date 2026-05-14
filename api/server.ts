import "dotenv/config"
import cors from "cors"
import express from "express"
import path from "path"
import { fileURLToPath } from "url"

type LeadPayload = {
  name: string
  company: string
  email: string
  industry: string
  message: string
  source?: string
}

type ContactPayload = {
  name: string
  phone: string
  message: string
}

const app = express()
app.use(express.json({ limit: "256kb" }))
app.use(
  cors({
    origin: true,
  }),
)

app.get("/api/health", (_req, res) => {
  res.json({ ok: true })
})

function getTelegramConfig() {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return null
  }

  return { token, chatId }
}

async function sendTelegramMessage(text: string) {
  const config = getTelegramConfig()
  if (!config) return { ok: false as const, status: 500 as const }

  const tgUrl = `https://api.telegram.org/bot${config.token}/sendMessage`
  const tgRes = await fetch(tgUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: config.chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  })

  return { ok: tgRes.ok as boolean, status: tgRes.status }
}

app.post("/api/lead", async (req, res) => {
  if (!getTelegramConfig()) {
    res.status(500).json({ ok: false, error: "Telegram не настроен." })
    return
  }

  const body = req.body as Partial<LeadPayload>
  const name = (body.name || "").trim()
  const company = (body.company || "").trim()
  const email = (body.email || "").trim()
  const industry = (body.industry || "").trim()
  const message = (body.message || "").trim()
  const source = (body.source || "").trim()

  if (!name || !company || !email || !industry || !message) {
    res.status(400).json({ ok: false, error: "Заполните все обязательные поля." })
    return
  }

  const textLines = [
    "Новая заявка с сайта ITMM",
    "",
    `Имя: ${name}`,
    `Компания: ${company}`,
    `Email: ${email}`,
    `Отрасль: ${industry}`,
    "",
    "Сообщение:",
    message,
    source ? "" : "",
    source ? `Источник: ${source}` : "",
  ].filter(Boolean)

  try {
    const result = await sendTelegramMessage(textLines.join("\n"))
    if (!result.ok) {
      res.status(502).json({ ok: false, error: "Telegram недоступен." })
      return
    }

    res.json({ ok: true })
  } catch {
    res.status(502).json({ ok: false, error: "Telegram недоступен." })
  }
})

app.post("/api/contact", async (req, res) => {
  if (!getTelegramConfig()) {
    res.status(500).json({ ok: false, error: "Telegram не настроен." })
    return
  }

  const body = req.body as Partial<ContactPayload & LeadPayload>
  const name = (body.name || "").trim()
  const phone = (body.phone || "").trim()
  const message = (body.message || "").trim()

  const company = (body.company || "").trim()
  const email = (body.email || "").trim()
  const industry = (body.industry || "").trim()
  const source = (body.source || "").trim()

  const isContactShape = Boolean(phone) && !company && !email && !industry

  if (isContactShape) {
    if (!name || !phone || !message) {
      res.status(400).json({ ok: false, error: "Заполните все обязательные поля." })
      return
    }

    const text = `
🔔 Новая заявка с сайта ITMM!

👤 Имя: ${name}
📱 Телефон: ${phone}
💬 Сообщение: ${message}
`.trim()

    try {
      const result = await sendTelegramMessage(text)
      if (!result.ok) {
        res.status(502).json({ ok: false, error: "Telegram недоступен." })
        return
      }

      res.json({ ok: true })
    } catch {
      res.status(502).json({ ok: false, error: "Telegram недоступен." })
    }

    return
  }

  if (!name || !company || !email || !industry || !message) {
    res.status(400).json({ ok: false, error: "Заполните все обязательные поля." })
    return
  }

  const textLines = [
    "Новая заявка с сайта ITMM",
    "",
    `Имя: ${name}`,
    `Компания: ${company}`,
    `Email: ${email}`,
    `Отрасль: ${industry}`,
    "",
    "Сообщение:",
    message,
    source ? "" : "",
    source ? `Источник: ${source}` : "",
  ].filter(Boolean)

  try {
    const result = await sendTelegramMessage(textLines.join("\n"))
    if (!result.ok) {
      res.status(502).json({ ok: false, error: "Telegram недоступен." })
      return
    }

    res.json({ ok: true })
  } catch {
    res.status(502).json({ ok: false, error: "Telegram недоступен." })
  }
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, "..", "dist")

app.use(express.static(distDir))
app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"))
})

const port = Number(process.env.PORT) || 3001
app.listen(port)
