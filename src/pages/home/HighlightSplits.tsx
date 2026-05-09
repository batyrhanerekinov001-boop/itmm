import type { CaseId } from "../../types"

type Props = {
  onShowCase: (id: CaseId) => void
}

export function HighlightSplits({ onShowCase }: Props) {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="split-section">
          <div className="split-content">
            <div className="section-eyebrow">
              Строительство · Кросс-платформенно
            </div>
            <div className="section-title">
              Современная платформа управления подрядчиками.
            </div>
            <p>
              Единственная платформа, созданная специально для крупного
              девелопера. Полная замена бумажного документооборота, интеграция с
              1С.
            </p>
            <div className="results-chips">
              <div className="chip">
                <span className="cv">4×</span> ускорение
              </div>
              <div className="chip">
                <span className="cv">1000+</span> актов/мес
              </div>
              <div className="chip">
                <span className="cv">145М₽</span> экономия
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <button className="btn-link" onClick={() => onShowCase("construction")}>
                Читать кейс →
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
                Личный кабинет подрядчика
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
              <div className="section-eyebrow">Нефтегаз · Teboil</div>
              <div className="section-title">
                Учитывайте разницу между ручным и цифровым учётом.
              </div>
              <p>
                Узнайте, как избавиться от ручного ввода данных, обеспечить
                соответствие нормам ЕС и повысить прозрачность операций на всех
                терминалах.
              </p>
              <button className="btn-link" onClick={() => onShowCase("oil")}>
                Читать кейс →
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
                Teboil · Учёт нефтепродуктов
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                Нормы ЕС · Real-time мониторинг
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

