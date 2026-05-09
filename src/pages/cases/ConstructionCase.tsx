export function ConstructionCase() {
  return (
    <>
      <div className="case-two-col">
        <div>
          <div className="col-head">Задача</div>
          <p
            style={{
              color: "var(--sub)",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Коммуникации по телефону и почте — менеджеры перегружены, сроки
            затягивались, согласования терялись.
          </p>
          <ul className="ul-clean">
            <li>Централизовать взаимодействие с подрядчиками</li>
            <li>Исключить потери информации и дублирование</li>
            <li>Ускорить согласование документов и оплат</li>
            <li>Снизить нагрузку на сотрудников</li>
          </ul>
        </div>
        <div>
          <div className="col-head">Ключевые возможности</div>
          <ul className="ul-clean">
            <li>Полная синхронизация с 1С: единые данные и отчёты</li>
            <li>Цифровое согласование документов и доп. работ</li>
            <li>Чат и тикет-система для коммуникации</li>
            <li>Автоматическое отслеживание статусов договоров</li>
            <li>Корректировка смет прямо в интерфейсе ЛКП</li>
          </ul>
        </div>
      </div>

      <div className="col-head">Результаты</div>
      <ul className="ul-clean">
        <li>Согласование сокращено с 30 до 7 дней</li>
        <li>200 подрядчиков и 1000 договоров без увеличения штата</li>
        <li>Ускорение строительных процессов за счёт устранения задержек</li>
        <li>Система работает более 3 лет и продолжает развиваться</li>
        <li>Экономический эффект: 145–152 млн ₽ в год</li>
      </ul>
      <div className="tech-chips">
        <div className="tech-chip">💡 1C интеграция</div>
        <div className="tech-chip">📄 Цифровой документооборот</div>
        <div className="tech-chip">💬 Тикет-система</div>
        <div className="tech-chip">📊 Аналитика</div>
      </div>
    </>
  )
}

