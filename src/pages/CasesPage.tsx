import { Footer } from "../components/Footer"
import { CASE_HEADERS, CASE_METRICS, CASE_TABS } from "../data/cases"
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
  const header = CASE_HEADERS[activeCase]
  const metrics = CASE_METRICS[activeCase]

  return (
    <>
      <div className="case-page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="case-tabs">
            {CASE_TABS.map((t) => (
              <button
                key={t.id}
                className={`case-tab${t.id === activeCase ? " active" : ""}`}
                onClick={() => onSelectCase(t.id)}
              >
                {t.label}
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
        <h2>Похожая задача?</h2>
        <p>Обсудим ваш проект и предложим подходящее решение.</p>
        <button className="btn-white" onClick={onNavigateToContact}>
          Написать нам →
        </button>
      </div>

      <Footer />
    </>
  )
}

