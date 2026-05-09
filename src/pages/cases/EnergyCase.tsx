export function EnergyCase() {
  return (
    <>
      <div className="case-two-col">
        <div>
          <div className="col-head">Основной функционал</div>
          <ul className="ul-clean">
            <li>Управление базой абонентов и договорами</li>
            <li>Автоматизация документооборота с бухгалтерией</li>
            <li>Детализированные отчёты по объектам</li>
            <li>Подключение к телеметрии и приборам учёта</li>
            <li>Контроль инцидентов и уведомления</li>
          </ul>
        </div>
        <div>
          <div className="col-head">Результаты</div>
          <ul className="ul-clean">
            <li>Полная прозрачность по потреблению и расчётам</li>
            <li>Сокращение времени обработки документов</li>
            <li>Централизованный контроль станций и сетей</li>
            <li>Улучшение прогнозирования нагрузок</li>
          </ul>
        </div>
      </div>

      <p
        style={{
          color: "var(--sub)",
          fontSize: 15,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        ERP стала основой цифровой трансформации. Решение масштабируемо и готово к
        интеграции с ИИ-модулями для прогнозирования энергопотребления.
      </p>
      <div className="tech-chips">
        <div className="tech-chip">📟 Телеметрия</div>
        <div className="tech-chip">🏭 ERP</div>
        <div className="tech-chip">📊 Аналитика</div>
        <div className="tech-chip">🤖 ИИ-ready</div>
      </div>
    </>
  )
}

