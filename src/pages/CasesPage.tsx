import { useEffect, useState } from "react"
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  useEffect(() => {
    if (!lightboxSrc) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightboxSrc])

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

        <div className="case-two-col" style={{ marginTop: 40 }}>
          <div>
            <div className="col-head">Проблема</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {current.problem.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--sub)",
                  }}
                >
                  <span style={{ color: "#dc2626", fontWeight: 900, lineHeight: 1.2 }}>✗</span>
                  <span style={{ color: "var(--sub)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="col-head">Решение</div>
            <p>{current.solution}</p>
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
                onClick={() => setLightboxSrc(src)}
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "contain",
                  background: "#f5f5f5",
                  borderRadius: 12,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  cursor: "pointer",
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
                <span style={{ color: "#16a34a", fontWeight: 900, lineHeight: 1.2 }}>✓</span>
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

      {lightboxSrc && (
        <div
          role="button"
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxSrc(null)
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 900,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div style={{ position: "relative", width: "min(1100px, 92vw)" }}>
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              style={{
                position: "absolute",
                right: 0,
                top: -48,
                width: 40,
                height: 40,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.35)",
                color: "#fff",
                cursor: "pointer",
                fontSize: 22,
                lineHeight: "40px",
              }}
              aria-label="Закрыть"
            >
              ×
            </button>
            <img
              src={lightboxSrc}
              alt={current.title}
              style={{
                width: "100%",
                maxHeight: "86vh",
                objectFit: "contain",
                borderRadius: 14,
                background: "#f5f5f5",
                boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
