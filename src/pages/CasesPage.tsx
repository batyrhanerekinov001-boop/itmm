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
        {current.image && (
          <div className="split-visual" style={{ padding: 0, overflow: "hidden", height: 420 }}>
            <img
              src={current.image}
              alt={current.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

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

        <div className="case-two-col" style={{ marginTop: 40 }}>
          <div>
            <div className="col-head">Проблема</div>
            <p>{current.problem}</p>
          </div>
          <div>
            <div className="col-head">Решение</div>
            <p>{current.solution}</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <div className="col-head">Результаты</div>
          <ul className="ul-clean">
            {current.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="dark-cta">
        <h2>{t.cases.cta.title}</h2>
        <p>{t.cases.cta.text}</p>
        <button className="btn-white" onClick={onNavigateToContact}>
          {t.cases.cta.button}
        </button>
      </div>

      <Footer t={t} />
    </>
  )
}
