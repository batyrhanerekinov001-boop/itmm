import type { CaseId } from "../../types"
import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
  onShowCase: (id: CaseId) => void
  onNavigate: (page: "cases" | "contact") => void
}

export function SectorsSection({ t, onShowCase, onNavigate }: Props) {
  const section = t.home.sectors

  return (
    <div className="section-wrap">
      <div className="section-eyebrow">{section.eyebrow}</div>
      <div className="section-title">
        {section.title[0]}
        <br />
        {section.title[1]}
      </div>
      <p className="section-sub">{section.subtitle}</p>
      <div className="sectors-grid">
        <div className="sector-card" onClick={() => onShowCase("construction")}>
          <div className="s-icon">🏗️</div>
          <h3>{section.items[0].title}</h3>
          <p>{section.items[0].text}</p>
        </div>
        <div className="sector-card" onClick={() => onShowCase("oil")}>
          <div className="s-icon">🛢️</div>
          <h3>{section.items[1].title}</h3>
          <p>{section.items[1].text}</p>
        </div>
        <div className="sector-card" onClick={() => onShowCase("retail")}>
          <div className="s-icon">🛒</div>
          <h3>{section.items[2].title}</h3>
          <p>{section.items[2].text}</p>
        </div>
        <div className="sector-card" onClick={() => onShowCase("energy")}>
          <div className="s-icon">⚡</div>
          <h3>{section.items[3].title}</h3>
          <p>{section.items[3].text}</p>
        </div>
      </div>
      <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
        <button className="btn-primary" onClick={() => onNavigate("cases")}>
          {section.allCases}
        </button>
        <button className="btn-link" onClick={() => onNavigate("contact")}>
          {section.discuss}
        </button>
      </div>
    </div>
  )
}
