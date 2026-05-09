import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "../hooks/useLanguage"
import type { Language } from "../i18n/translations"
import type { PageId } from "../types"

type Props = {
  page: PageId
  onNavigate: (page: PageId) => void
}

export function NavBar({ page, onNavigate }: Props) {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages: Language[] = ["KZ", "RU", "EN"]

  function renderLanguageSwitch() {
    return (
      <div className="lang-switch" aria-label="language switcher">
        {languages.map((lang, index) => (
          <span key={lang} className="lang-switch-item">
            <button
              type="button"
              className={`lang-btn${language === lang ? " active" : ""}`}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
            {index < languages.length - 1 && <span className="lang-sep">/</span>}
          </span>
        ))}
      </div>
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
