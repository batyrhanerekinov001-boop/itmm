import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
}

export function ApproachSection({ t }: Props) {
  const section = t.home.approach

  return (
    <div className="center-section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-eyebrow">{section.eyebrow}</div>
        <div
          className="section-title"
          style={{ margin: "0 auto 16px", textAlign: "center" }}
        >
          {section.title[0]}
          <br />
          {section.title[1]}
        </div>
        <p
          className="section-sub"
          style={{ margin: "0 auto 56px", textAlign: "center" }}
        >
          {section.subtitle}
        </p>
        <div className="grid3">
          <div className="feature-card">
            <div className="f-icon">🥽</div>
            <h3>{section.items[0].title}</h3>
            <p>{section.items[0].text}</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">⚡</div>
            <h3>{section.items[1].title}</h3>
            <p>{section.items[1].text}</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">🔐</div>
            <h3>{section.items[2].title}</h3>
            <p>{section.items[2].text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
