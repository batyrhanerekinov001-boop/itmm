import type { CaseId } from "../../types"

type Props = {
  onShowCase: (id: CaseId) => void
}

export function TopCasesSection({ onShowCase }: Props) {
  return (
    <div className="section-wrap">
      <div className="section-eyebrow">Топ кейсы</div>
      <div className="section-title">
        Строить крутые продукты
        <br />
        не должно быть сложно.
      </div>

      <div className="blog-grid">
        <div className="blog-card" onClick={() => onShowCase("construction")}>
          <div className="blog-card-img g1">
            <span>🏗️</span>
            <div className="big-num">ЛКП</div>
          </div>
          <div className="blog-card-body">
            <div className="blog-card-label">Строительство</div>
            <h3>
              Личный кабинет подрядчика — цифровой документооборот для топ-5
              девелопера России
            </h3>
            <p>Ускорение согласования в 4× и экономия 145М₽ в год.</p>
          </div>
        </div>

        <div className="blog-card" onClick={() => onShowCase("oil")}>
          <div className="blog-card-img g2" style={{ height: 140 }}>
            <div className="big-num" style={{ fontSize: 56 }}>
              🛢️
            </div>
          </div>
          <div className="blog-card-body">
            <div className="blog-card-label">Нефтегаз · Teboil</div>
            <h3>Система учёта нефтепродуктов — соответствие нормам ЕС</h3>
          </div>
        </div>

        <div className="blog-card" onClick={() => onShowCase("retail")}>
          <div className="blog-card-img g3" style={{ height: 140 }}>
            <div className="big-num" style={{ fontSize: 56 }}>
              🎮
            </div>
          </div>
          <div className="blog-card-body">
            <div className="blog-card-label">Ритейл</div>
            <h3>Игровая экосистема — геймификация для сети супермаркетов</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

