import { Menu, X } from "lucide-react"
import { useState } from "react"
import type { PageId } from "../types"

type Props = {
  page: PageId
  onNavigate: (page: PageId) => void
}

export function NavBar({ page, onNavigate }: Props) {
  const [open, setOpen] = useState(false)

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
              Платформа
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate("cases")}
              className={page === "cases" ? "active" : undefined}
            >
              Кейсы
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate("contact")} className="nav-cta">
              Написать нам
            </button>
          </li>
        </ul>

        <div className="nav-right">
          <a className="nav-phone" href="tel:+77018771414">
            +7 701 877 14 14
          </a>

          <button
            className="nav-hamburger"
            aria-label="Открыть меню"
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
                aria-label="Закрыть меню"
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
                <span>Платформа</span>
                <span>→</span>
              </button>
              <button
                className="nav-mobile-link"
                onClick={() => {
                  onNavigate("cases")
                  setOpen(false)
                }}
              >
                <span>Кейсы</span>
                <span>→</span>
              </button>
              <button
                className="nav-mobile-link nav-mobile-cta"
                onClick={() => {
                  onNavigate("contact")
                  setOpen(false)
                }}
              >
                <span>Написать нам</span>
                <span>→</span>
              </button>
            </div>

            <a className="nav-phone" href="tel:+77018771414">
              +7 701 877 14 14
            </a>
          </div>
        </div>
      )}
    </>
  )
}
