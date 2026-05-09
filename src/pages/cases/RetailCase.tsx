export function RetailCase() {
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
            Создать интерактивный инструмент для повышения лояльности через
            геймификацию покупок.
          </p>
          <ul className="ul-clean">
            <li>Вовлечь покупателей в программу лояльности</li>
            <li>Стимулировать повторные покупки</li>
            <li>Выдавать реальные купоны за достижения</li>
          </ul>
        </div>
        <div>
          <div className="col-head">Решение</div>
          <ul className="ul-clean">
            <li>7 мобильных игр в единой экосистеме</li>
            <li>Игровая карта с локациями и уровнями</li>
            <li>Интеграция с программой лояльности</li>
            <li>Прямое отслеживание эффективности</li>
            <li>Постоянная аналитика активности</li>
          </ul>
        </div>
      </div>

      <div className="col-head">Результаты</div>
      <ul className="ul-clean">
        <li>Рост числа активных участников программы лояльности</li>
        <li>Увеличение среднего чека и частоты покупок</li>
        <li>Новый эмоциональный канал взаимодействия с брендом</li>
        <li>Превращение в постоянный инструмент клиентского маркетинга</li>
      </ul>
      <div className="tech-chips">
        <div className="tech-chip">🎮 Геймификация</div>
        <div className="tech-chip">📱 Мобильные игры</div>
        <div className="tech-chip">🎁 Программа лояльности</div>
        <div className="tech-chip">📈 Аналитика</div>
      </div>
    </>
  )
}

