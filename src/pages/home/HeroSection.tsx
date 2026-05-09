type Props = {
  onNavigate: (page: "cases" | "contact") => void
}

export function HeroSection({ onNavigate }: Props) {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-eyebrow">🇰🇿 Казахстанская IT-компания</div>
            <h1>
              Новый способ
              <br />
              строить
              <br />
              <em>умный бизнес.</em>
            </h1>
            <p className="hero-sub">
              ITMM внедряет ИИ и цифровые решения, чтобы средний и крупный бизнес
              выигрывал конкуренцию и рос быстрее.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => onNavigate("cases")}>
                Смотреть кейсы
              </button>
              <button className="btn-outline" onClick={() => onNavigate("contact")}>
                Обсудить проект
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob"></div>
            <div className="hero-card-float c1">
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
                  Строительство
                </div>
                <div>145М₽ экономии/год</div>
              </div>
            </div>
            <div className="hero-card-float c2">
              <div className="card-icon green">⚡</div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#888",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  Teboil · Нефтегаз
                </div>
                <div>Автоматизация 80%</div>
              </div>
            </div>
            <div className="hero-card-float c3">
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
                  Ритейл · Геймификация
                </div>
                <div>7 игр за 1 год</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logos-section">
        <div className="logos-label">Реализовано для ведущих компаний</div>
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

