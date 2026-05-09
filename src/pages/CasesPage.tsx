import { Footer } from "../components/Footer"
import { useLanguage } from "../hooks/useLanguage"
import type { CaseId } from "../types"
import { ConstructionCase } from "./cases/ConstructionCase"
import { EnergyCase } from "./cases/EnergyCase"
import { OilCase } from "./cases/OilCase"
import { RetailCase } from "./cases/RetailCase"

type Props = {
  activeCase: CaseId
  onSelectCase: (id: CaseId) => void
  onNavigateToContact: () => void
}

export function CasesPage({ activeCase, onSelectCase, onNavigateToContact }: Props) {
  const { t } = useLanguage()
  const header = t.cases.headers[activeCase]
  const metrics = t.cases.metrics[activeCase]

  return (
    <>
      <div className="case-page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="case-tabs">
            {t.cases.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`case-tab${tab.id === activeCase ? " active" : ""}`}
                onClick={() => onSelectCase(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="case-tag">{header.tag}</div>
          <h1>{header.title}</h1>
          <p>{header.subtitle}</p>
        </div>
      </div>

      <div className="metrics-row">
        {metrics.map((m) => (
          <div className="metric-box" key={m.label}>
            <div className="metric-val">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="case-body">
        {activeCase === "construction" && <ConstructionCase />}
        {activeCase === "retail" && <RetailCase />}
        {activeCase === "oil" && <OilCase />}
        {activeCase === "energy" && <EnergyCase />}
      </div>

      <div className="dark-cta">
        <h2>{t.cases.cta.title}</h2>
        <p>{t.cases.cta.text}</p>
        <button className="btn-white" onClick={onNavigateToContact}>
          {t.cases.cta.button}
        </button>
      </div>

      <Footer />
    </>
  )
}

