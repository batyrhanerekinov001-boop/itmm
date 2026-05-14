import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"
import type { Lang, Translations } from "../i18n/translations"
import type { PageId } from "../types"

type Props = {
  t: Translations
  lang: Lang
  changeLang: (lang: Lang) => void
  page: PageId
  onNavigate: (page: PageId) => void
}

export function NavBar({ t, lang, changeLang, page, onNavigate }: Props) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark" || saved === "light") return saved
    return "light"
  })

  function renderLanguageSwitch() {
    return (
      <div className="lang-switcher">
        {(["KZ", "RU", "EN"] as Lang[]).map((l) => (
          <button
            key={l}
            type="button"
            className={lang === l ? "lang-btn active" : "lang-btn"}
            onClick={() => changeLang(l)}
          >
            {l}
          </button>
        ))}
      </div>
    )
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  function renderThemeToggle() {
    return (
      <button
        type="button"
        className="theme-btn"
        aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
        onClick={() => setTheme((s) => (s === "dark" ? "light" : "dark"))}
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    )
  }

  return (
    <>
      <nav>
        <div
          className="nav-logo"
          onClick={() => {
            onNavigate("home")
            setOpen(false)
          }}
        >
          IT<span>MM</span>
        </div>

        <ul className="nav-links">
          <li>
            <button
              onClick={() => onNavigate("home")}
              className={page === "home" ? "active" : undefined}
            >
              {t.nav.platform}
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("cases")}
              className={page === "cases" ? "active" : undefined}
            >
              {t.nav.cases}
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("contact")} className="nav-cta">
              {t.nav.contact}
            </button>
          </li>
        </ul>

        <div className="nav-right">
          <a className="nav-phone" href="tel:+77018771414">
            +7 701 877 14 14
          </a>
          {renderLanguageSwitch()}
          {renderThemeToggle()}

          <button
            className="nav-hamburger"
            aria-label={t.nav.openMenu}
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="nav-mobile"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="nav-mobile-panel" onClick={(e) => e.stopPropagation()}>
            <div className="nav-mobile-head">
              <div
                className="nav-logo"
                onClick={() => {
                  onNavigate("home")
                  setOpen(false)
                }}
              >
                IT<span>MM</span>
              </div>
              <button
                className="nav-hamburger"
                aria-label={t.nav.closeMenu}
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="nav-mobile-links">
              <button
                className="nav-mobile-link"
                onClick={() => {
                  onNavigate("home")
                  setOpen(false)
                }}
              >
                <span>{t.nav.platform}</span>
                <span>→</span>
              </button>
              <button
                className="nav-mobile-link"
                onClick={() => {
                  onNavigate("cases")
                  setOpen(false)
                }}
              >
                <span>{t.nav.cases}</span>
                <span>→</span>
              </button>
              <button
                className="nav-mobile-link nav-mobile-cta"
                onClick={() => {
                  onNavigate("contact")
                  setOpen(false)
                }}
              >
                <span>{t.nav.contact}</span>
                <span>→</span>
              </button>
            </div>

            <div className="nav-mobile-meta">
              {renderLanguageSwitch()}
              {renderThemeToggle()}
              <a className="nav-phone" href="tel:+77018771414">
                +7 701 877 14 14
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
