import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { translations, type Language } from "../i18n/translations"

const STORAGE_KEY = "itmm-language"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "RU"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "RU" || stored === "KZ" || stored === "EN") return stored
  return "RU"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
