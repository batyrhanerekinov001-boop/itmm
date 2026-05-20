import { Footer } from "../components/Footer"
import { caseTabs, cases } from "../data/cases"
import type { Translations } from "../i18n/translations"
import type { CaseId } from "../types"

type Props = {
  t: Translations
  activeCase: CaseId
  onSelectCase: (id: CaseId) => void
  onNavigateToContact: () => void
}

export function CasesPage({ t, activeCase, onSelectCase, onNavigateToContact }: Props) {
  const current = cases.find((c) => c.id === activeCase) ?? cases[0]

  return (
    <>
      <div className="case-page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="case-tabs">
            {caseTabs.map((tab) => (
              <button
                key={tab.id}
                className={`case-tab${tab.id === activeCase ? " active" : ""}`}
                onClick={() => onSelectCase(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="case-tag">{current.tag}</div>
          <h1>{current.title}</h1>
          <p>{current.subtitle}</p>
        </div>
      </div>

      <div className="case-body">
        <div className="case-two-col" style={{ marginTop: 40 }}>
          <div>
            <div className="col-head">Описание</div>
            <p>{current.description}</p>
          </div>
          <div>
            <div className="col-head">Метрика</div>
            <p>{current.metric}</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <div className="col-head">Галерея</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {current.images.map((src) => (
              <img
                key={src}
                src={src}
                alt={current.title}
                style={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                  borderRadius: 12,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <div className="col-head">Результаты</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {current.results.map((r) => (
              <li
                key={r}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--sub)",
                }}
              >
                <span style={{ color: "var(--blue)", fontWeight: 900, lineHeight: 1.2 }}>✓</span>
                <span style={{ color: "var(--sub)" }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="dark-cta">
        <h2>{t.cases.cta.title}</h2>
        <p>{t.cases.cta.text}</p>
        <button className="btn-white" onClick={onNavigateToContact}>
          Обсудить похожий проект
        </button>
      </div>

      <Footer t={t} />
    </>
  )
}
