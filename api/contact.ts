import type { VercelRequest, VercelResponse } from "@vercel/node"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) return res.status(500).json({ error: "Telegram is not configured" })

  const { name, company, email, industry, phone, message } = (req.body || {}) as Record<
    string,
    unknown
  >

  const safe = (v: unknown) => (typeof v === "string" ? v.trim() : "")

  const lines = [
    "🔔 Новая заявка с сайта ITMM!",
    "",
    `👤 Имя: ${safe(name)}`,
    safe(phone) ? `📱 Телефон: ${safe(phone)}` : "",
    safe(company) ? `🏢 Компания: ${safe(company)}` : "",
    safe(email) ? `📧 Email: ${safe(email)}` : "",
    safe(industry) ? `🏭 Отрасль: ${safe(industry)}` : "",
    `💬 Сообщение: ${safe(message)}`,
  ].filter(Boolean)

  const text = lines.join("\n")

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    })

    if (!tgRes.ok) return res.status(502).json({ error: "Telegram unavailable" })

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: "Telegram unavailable" })
  }
}
