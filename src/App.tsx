import { useState } from "react"
import { AnnounceBar } from "./components/AnnounceBar"
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton"
import { NavBar } from "./components/NavBar"
import { LanguageProvider } from "./hooks/useLanguage"
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
    <LanguageProvider>
      <AnnounceBar onGoHome={() => showPage("home")} />
      <NavBar page={page} onNavigate={showPage} />

      <div className={page === "home" ? "page active" : "page"}>
        <HomePage onNavigate={showPage} onShowCase={showCase} />
      </div>
      <div className={page === "cases" ? "page active" : "page"}>
        <CasesPage
          activeCase={activeCase}
          onSelectCase={setActiveCase}
          onNavigateToContact={() => showPage("contact")}
        />
      </div>
      <div className={page === "contact" ? "page active" : "page"}>
        <ContactPage />
      </div>

      <FloatingWhatsAppButton />
    </LanguageProvider>
  )
}
