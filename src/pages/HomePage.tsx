import { Footer } from "../components/Footer"
import { CounterSection } from "../components/CounterSection"
import type { Translations } from "../i18n/translations"
import type { CaseId } from "../types"
import { ApproachSection } from "./home/ApproachSection"
import { FaqSection } from "./home/FaqSection"
import { FinalCtaSection } from "./home/FinalCtaSection"
import { HeroSection } from "./home/HeroSection"
import { HighlightSplits } from "./home/HighlightSplits"
import { SectorsSection } from "./home/SectorsSection"
import { TechnologiesSection } from "./home/TechnologiesSection"
import { TopCasesSection } from "./home/TopCasesSection"

type Props = {
  t: Translations
  onNavigate: (page: "cases" | "contact") => void
  onShowCase: (id: CaseId) => void
  onOpenModal: () => void
}

export function HomePage({ t, onNavigate, onShowCase, onOpenModal }: Props) {
  return (
    <>
      <HeroSection t={t} onNavigate={onNavigate} onOpenModal={onOpenModal} />
      <CounterSection t={t} />
      <TopCasesSection t={t} onShowCase={onShowCase} />
      <ApproachSection t={t} />
      <HighlightSplits t={t} onShowCase={onShowCase} />
      <SectorsSection t={t} onShowCase={onShowCase} onNavigate={onNavigate} />
      <TechnologiesSection t={t} />
      <FaqSection t={t} />
      <FinalCtaSection t={t} onNavigate={() => onNavigate("contact")} />

      <Footer t={t} />
    </>
  )
}
