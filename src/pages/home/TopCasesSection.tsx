import type { CaseId } from "../../types"
import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
  onShowCase: (id: CaseId) => void
}

export function TopCasesSection({ t, onShowCase }: Props) {
  const section = t.home.topCases

  return (
    <div className="section-wrap">
      <div className="section-eyebrow">{section.eyebrow}</div>
      <div className="section-title">
        {section.title[0]}
        <br />
        {section.title[1]}
      </div>

      <div className="blog-grid">
        <div className="blog-card" onClick={() => onShowCase("construction")}>
          <div className="blog-card-img g1">
            <span>🏗️</span>
            <div className="big-num">B2B</div>
          </div>
          <div className="blog-card-body">
            <div className="blog-card-label">{section.cards[0].label}</div>
            <h3>{section.cards[0].title}</h3>
            <p>{section.cards[0].subtitle}</p>
          </div>
        </div>

        <div className="blog-card" onClick={() => onShowCase("oil")}>
          <div className="blog-card-img g2" style={{ height: 140 }}>
            <div className="big-num" style={{ fontSize: 56 }}>
              🛢️
            </div>
          </div>
          <div className="blog-card-body">
            <div className="blog-card-label">{section.cards[1].label}</div>
            <h3>{section.cards[1].title}</h3>
          </div>
        </div>

        <div className="blog-card" onClick={() => onShowCase("retail")}>
          <div className="blog-card-img g3" style={{ height: 140 }}>
            <div className="big-num" style={{ fontSize: 56 }}>
              🎮
            </div>
          </div>
          <div className="blog-card-body">
            <div className="blog-card-label">{section.cards[2].label}</div>
            <h3>{section.cards[2].title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
