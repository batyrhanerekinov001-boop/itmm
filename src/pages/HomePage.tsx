import { Footer } from "../components/Footer"
import type { CaseId } from "../types"
import { ApproachSection } from "./home/ApproachSection"
import { FaqSection } from "./home/FaqSection"
import { FinalCtaSection } from "./home/FinalCtaSection"
import { HeroSection } from "./home/HeroSection"
import { HighlightSplits } from "./home/HighlightSplits"
import { SectorsSection } from "./home/SectorsSection"
import { TopCasesSection } from "./home/TopCasesSection"

type Props = {
  onNavigate: (page: "cases" | "contact") => void
  onShowCase: (id: CaseId) => void
}

export function HomePage({ onNavigate, onShowCase }: Props) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <TopCasesSection onShowCase={onShowCase} />
      <ApproachSection />
      <HighlightSplits onShowCase={onShowCase} />
      <SectorsSection onShowCase={onShowCase} onNavigate={onNavigate} />
      <FaqSection />
      <FinalCtaSection onNavigate={() => onNavigate("contact")} />

      <Footer />
    </>
  )
}
