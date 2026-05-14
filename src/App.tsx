import { useEffect, useMemo, useState } from "react"
import { AnnounceBar } from "./components/AnnounceBar"
import { CookieBanner } from "./components/CookieBanner"
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton"
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
  const { lang, changeLang } = useLanguage()
  const t = translations[lang]

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

  return (
    <>
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
        <HomePage t={t} onNavigate={showPage} onShowCase={showCase} />
      </div>
      <div className={page === "cases" ? "page active" : "page"}>
        <CasesPage
          t={t}
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
          <h1>Страница не найдена</h1>
          <button className="btn-primary" onClick={() => showPage("home")}>
            На главную
          </button>
        </div>
      </div>

      <FloatingWhatsAppButton t={t} />
      <CookieBanner />
    </>
  )
}
