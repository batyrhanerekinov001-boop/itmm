import { useState } from "react"
import { AnnounceBar } from "./components/AnnounceBar"
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

export default function App() {
  const [page, setPage] = useState<PageId>("home")
  const [activeCase, setActiveCase] = useState<CaseId>("construction")
  const { lang, changeLang } = useLanguage()
  const t = translations[lang]

  function showPage(next: PageId) {
    setPage(next)
    scrollTop()
  }

  function showCase(next: CaseId) {
    setActiveCase(next)
    setPage("cases")
    scrollTop()
  }

  return (
    <>
      <AnnounceBar t={t} onGoHome={() => showPage("home")} />
      <NavBar
        t={t}
        lang={lang}
        changeLang={changeLang}
        page={page}
        onNavigate={showPage}
      />

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

      <FloatingWhatsAppButton t={t} />
    </>
  )
}
