import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
  onNavigate: (page: "cases" | "contact") => void
}

export function HeroSection({ t, onNavigate }: Props) {
  const hero = t.home.hero

  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-eyebrow">{hero.eyebrow}</div>
            <h1>
              {hero.title[0]}
              <br />
              {hero.title[1]}
              <br />
              <em>{hero.title[2]}</em>
            </h1>
            <p className="hero-sub">{hero.subtitle}</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => onNavigate("cases")}>
                {hero.casesButton}
              </button>
              <button className="btn-outline" onClick={() => onNavigate("contact")}>
                {hero.discussButton}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-globe">
              <div className="globe-sphere">
                <div className="globe-lines">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="globe-line"
                      style={{ transform: `rotateY(${i * 30}deg)` }}
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="globe-lat" style={{ top: `${15 + i * 17}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="hero-card-float c1"
              style={{ top: "5%", right: "-10%", left: "auto", bottom: "auto" }}
            >
              <div className="card-icon blue">🏗️</div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#888",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {hero.cards[0].top}
                </div>
                <div>{hero.cards[0].bottom}</div>
              </div>
            </div>
            <div
              className="hero-card-float c2"
              style={{ top: "45%", left: "-15%", right: "auto", bottom: "auto" }}
            >
              <div className="card-icon orange">🎮</div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#888",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {hero.cards[2].top}
                </div>
                <div>{hero.cards[2].bottom}</div>
              </div>
            </div>
            <div
              className="hero-card-float c3"
              style={{ bottom: "5%", right: "-5%", left: "auto", top: "auto" }}
            >
              <div className="card-icon green">🛢️</div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#888",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {hero.cards[1].top}
                </div>
                <div>{hero.cards[1].bottom}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logos-section">
        <div className="logos-label">{hero.logosLabel}</div>
        <div className="logos-row">
          <div className="logo-item">TEBOIL</div>
          <div className="logo-item">TOP‑5 DEV</div>
          <div className="logo-item">ENERGY CO</div>
          <div className="logo-item">RETAIL CHAIN</div>
          <div className="logo-item">OIL &amp; GAS</div>
        </div>
      </div>
    </>
  )
}
