export function ApproachSection() {
  return (
    <div className="center-section">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-eyebrow">Наш подход</div>
        <div
          className="section-title"
          style={{ margin: "0 auto 16px", textAlign: "center" }}
        >
          Строить цифровой бизнес
          <br />
          не должно быть сложно.
        </div>
        <p
          className="section-sub"
          style={{ margin: "0 auto 56px", textAlign: "center" }}
        >
          Наше видение — помочь бизнесу решить потребность в цифровизации быстро и
          с гарантированным результатом.
        </p>
        <div className="grid3">
          <div className="feature-card">
            <div className="f-icon">🥽</div>
            <h3>Лучше. Быстрее.</h3>
            <p>
              VR и AR для производства и обучения — ускоряем подготовку персонала
              и внедрение новых технологий на реальных объектах.
            </p>
          </div>
          <div className="feature-card">
            <div className="f-icon">⚡</div>
            <h3>Готово к будущему</h3>
            <p>
              Гибкие, надёжные решения на открытых стандартах. ИИ встраивается в
              любые процессы — от добычи до офисных задач.
            </p>
          </div>
          <div className="feature-card">
            <div className="f-icon">🔐</div>
            <h3>Непрерывная защита</h3>
            <p>
              AI-кибербезопасность: защита информации, предотвращение кибератак и
              обеспечение безопасности в цифровую эпоху.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

