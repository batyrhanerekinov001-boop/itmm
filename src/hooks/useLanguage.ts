import { useState } from "react"
import type { Lang } from "../i18n/translations"

export function useLanguage() {
  const saved = localStorage.getItem("lang") as Lang | null
  const [lang, setLang] = useState<Lang>(saved || "RU")

  function changeLang(l: Lang) {
    setLang(l)
    localStorage.setItem("lang", l)
  }

  return { lang, changeLang }
}
