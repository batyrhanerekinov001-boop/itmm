import { Footer } from "../components/Footer"
import type { Translations } from "../i18n/translations"
import type { CaseId } from "../types"
import { ApproachSection } from "./home/ApproachSection"
import { FaqSection } from "./home/FaqSection"
import { FinalCtaSection } from "./home/FinalCtaSection"
import { HeroSection } from "./home/HeroSection"
import { HighlightSplits } from "./home/HighlightSplits"
import { SectorsSection } from "./home/SectorsSection"
import { TopCasesSection } from "./home/TopCasesSection"

type Props = {
  t: Translations
  onNavigate: (page: "cases" | "contact") => void
  onShowCase: (id: CaseId) => void
}

export function HomePage({ t, onNavigate, onShowCase }: Props) {
  return (
    <>
      <HeroSection t={t} onNavigate={onNavigate} />
      <TopCasesSection t={t} onShowCase={onShowCase} />
      <ApproachSection t={t} />
      <HighlightSplits t={t} onShowCase={onShowCase} />
      <SectorsSection t={t} onShowCase={onShowCase} onNavigate={onNavigate} />
      <FaqSection t={t} />
      <FinalCtaSection t={t} onNavigate={() => onNavigate("contact")} />

      <Footer t={t} />
    </>
  )
}
