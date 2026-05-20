import { useEffect, useMemo, useState } from "react"
import { AnnounceBar } from "./components/AnnounceBar"
import { CookieBanner } from "./components/CookieBanner"
import { CustomCursor } from "./components/CustomCursor"
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton"
import { Modal } from "./components/Modal"
import { NavBar } from "./components/NavBar"
import { useLanguage } from "./hooks/useLanguage"
import { translations } from "./i18n/translations"
import { CasesPage } from "./pages/CasesPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import type { CaseId, PageId } from "./types"

function scrollTop() {
  window.scrollTo({ top: 0 })
}

function pageFromPath(pathname: string): PageId {
  if (pathname === "/" || pathname === "") return "home"
  if (pathname === "/cases") return "cases"
  if (pathname === "/contact") return "contact"
  return "notFound"
}

function pathFromPage(page: PageId): string {
  if (page === "home") return "/"
  if (page === "cases") return "/cases"
  if (page === "contact") return "/contact"
  return "/404"
}

export default function App() {
  const [page, setPage] = useState<PageId>(() => pageFromPath(window.location.pathname))
  const [activeCase, setActiveCase] = useState<CaseId>("construction")
  const [modalOpen, setModalOpen] = useState(false)
  const { lang, changeLang } = useLanguage()
  const t = translations[lang]
  const notFoundText =
    lang === "KZ"
      ? { title: "Бет табылмады", button: "Басты бетке" }
      : lang === "EN"
        ? { title: "Page not found", button: "Back to home" }
        : { title: "Страница не найдена", button: "На главную" }

  const isKnownPage = useMemo(() => page !== "notFound", [page])

  useEffect(() => {
    function onPopState() {
      setPage(pageFromPath(window.location.pathname))
      scrollTop()
    }

    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  function showPage(next: PageId) {
    setPage(next)
    if (next !== "notFound") {
      window.history.pushState({}, "", pathFromPage(next))
    } else {
      window.history.pushState({}, "", pathFromPage("notFound"))
    }
    scrollTop()
  }

  function showCase(next: CaseId) {
    setActiveCase(next)
    showPage("cases")
  }

  function openModal() {
    setModalOpen(true)
  }

  return (
    <>
      <CustomCursor />
      {isKnownPage && <AnnounceBar t={t} onGoHome={() => showPage("home")} />}
      {isKnownPage && (
        <NavBar
          t={t}
          lang={lang}
          changeLang={changeLang}
          page={page}
          onNavigate={showPage}
        />
      )}

      <div className={page === "home" ? "page active" : "page"}>
        <HomePage t={t} onNavigate={showPage} onShowCase={showCase} onOpenModal={openModal} />
      </div>
      <div className={page === "cases" ? "page active" : "page"}>
        <CasesPage
          t={t}
          lang={lang}
          activeCase={activeCase}
          onSelectCase={setActiveCase}
          onNavigateToContact={() => showPage("contact")}
        />
      </div>
      <div className={page === "contact" ? "page active" : "page"}>
        <ContactPage t={t} />
      </div>
      <div className={page === "notFound" ? "page active" : "page"}>
        <div className="page-404" style={{ minHeight: "100vh" }}>
          <div className="code">404</div>
          <h1>{notFoundText.title}</h1>
          <button className="btn-primary" onClick={() => showPage("home")}>
            {notFoundText.button}
          </button>
        </div>
      </div>

      <FloatingWhatsAppButton t={t} />
      <CookieBanner lang={lang} />
      <Modal open={modalOpen} t={t} onClose={() => setModalOpen(false)} />
    </>
  )
}
