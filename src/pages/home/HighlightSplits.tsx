import type { CaseId } from "../../types"
import { useLanguage } from "../../hooks/useLanguage"

type Props = {
  onShowCase: (id: CaseId) => void
}

export function HighlightSplits({ onShowCase }: Props) {
  const { t } = useLanguage()
  const section = t.home.highlights

  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="split-section">
          <div className="split-content">
            <div className="section-eyebrow">
              {section.construction.eyebrow}
            </div>
            <div className="section-title">
              {section.construction.title}
            </div>
            <p>{section.construction.text}</p>
            <div className="results-chips">
              <div className="chip">
                <span className="cv">4×</span> {section.construction.chips[0]}
              </div>
              <div className="chip">
                <span className="cv">1000+</span> {section.construction.chips[1]}
              </div>
              <div className="chip">
                <span className="cv">145М₽</span> {section.construction.chips[2]}
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <button className="btn-link" onClick={() => onShowCase("construction")}>
                {section.construction.button}
              </button>
            </div>
          </div>
          <div className="split-visual sv-blue">
            <div className="mock-window">
              <div className="mock-bar">
                <div className="mock-dot r"></div>
                <div className="mock-dot y"></div>
                <div className="mock-dot g"></div>
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 11,
                  marginBottom: 10,
                }}
              >
                {section.construction.mockTitle}
              </div>
              <div className="mock-row" style={{ width: "80%" }}></div>
              <div className="mock-row" style={{ width: "60%" }}></div>
              <div className="mock-row" style={{ width: "40%" }}></div>
              <div className="mock-stat">
                <div className="mock-badge">7 дн</div>
                <div className="mock-badge">1000+</div>
                <div className="mock-badge">200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="split-section reverse">
            <div className="split-content">
              <div className="section-eyebrow">{section.oil.eyebrow}</div>
              <div className="section-title">
                {section.oil.title}
              </div>
              <p>{section.oil.text}</p>
              <button className="btn-link" onClick={() => onShowCase("oil")}>
                {section.oil.button}
              </button>
            </div>
            <div className="split-visual sv-orange">
              <div style={{ fontSize: 52 }}>🛢️</div>
              <div
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 800,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                {section.oil.visualTitle}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                {section.oil.visualSub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

