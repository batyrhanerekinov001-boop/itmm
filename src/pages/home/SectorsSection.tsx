import type { CaseId } from "../../types"

type Props = {
  onShowCase: (id: CaseId) => void
  onNavigate: (page: "cases" | "contact") => void
}

export function SectorsSection({ onShowCase, onNavigate }: Props) {
  return (
    <div className="section-wrap">
      <div className="section-eyebrow">Отраслевая экспертиза</div>
      <div className="section-title">
        Управляйте и масштабируйтесь
        <br />
        в любом секторе.
      </div>
      <p className="section-sub">
        Уделяйте время тому, что важно. Запускайтесь быстро и масштабируйтесь под
        любые задачи бизнеса.
      </p>
      <div className="sectors-grid">
        <div className="sector-card" onClick={() => onShowCase("construction")}>
          <div className="s-icon">🏗️</div>
          <h3>Строительство</h3>
          <p>ЛКП, учёт договоров, отслеживание платежей по объектам.</p>
        </div>
        <div className="sector-card" onClick={() => onShowCase("oil")}>
          <div className="s-icon">🛢️</div>
          <h3>Нефтегаз</h3>
          <p>Учёт нефтепродуктов, биокомпоненты, соответствие нормам ЕС.</p>
        </div>
        <div className="sector-card" onClick={() => onShowCase("retail")}>
          <div className="s-icon">🛒</div>
          <h3>Ритейл</h3>
          <p>Игровые механики, программы лояльности, аналитика покупок.</p>
        </div>
        <div className="sector-card" onClick={() => onShowCase("energy")}>
          <div className="s-icon">⚡</div>
          <h3>Энергетика</h3>
          <p>ERP, учёт абонентов, телеметрия, мониторинг инфраструктуры.</p>
        </div>
      </div>
      <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
        <button className="btn-primary" onClick={() => onNavigate("cases")}>
          Все кейсы
        </button>
        <button className="btn-link" onClick={() => onNavigate("contact")}>
          Обсудить проект →
        </button>
      </div>
    </div>
  )
}

