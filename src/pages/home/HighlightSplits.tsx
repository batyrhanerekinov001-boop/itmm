import type { CaseId } from "../../types"
import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
  onShowCase: (id: CaseId) => void
}

export function HighlightSplits({ t, onShowCase }: Props) {
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
          <div className="split-visual sv-blue" style={{ padding: 0, overflow: "hidden" }}>
            <img
              src="/cases/construction.avif"
              alt="Личный кабинет подрядчика"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
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
            <div
              className="split-visual sv-orange"
              style={{ padding: 0, overflow: "hidden", position: "relative" }}
            >
              <img
                src="/cases/oil.avif"
                alt="Нефтегаз"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 12,
                  background: "rgba(0,0,0,0.45)",
                  padding: 32,
                }}
              >
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
      </div>
    </>
  )
}
