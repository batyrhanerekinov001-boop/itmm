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

app.post("/api/lead", async (req, res) => {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
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

  const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`

  try {
    const tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: textLines.join("\n"),
        disable_web_page_preview: true,
      }),
    })

    if (!tgRes.ok) {
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

