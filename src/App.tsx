import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"
import type { FormEvent } from "react"
import { useMemo, useState } from "react"

type PageId = "home" | "cases" | "contact" | "404"
type CaseId = "construction" | "retail" | "oil" | "energy"
type FaqId =
  | "price"
  | "timeline"
  | "small-business"
  | "geography"
  | "start"

type LeadFormState = {
  name: string
  company: string
  email: string
  industry: string
  message: string
}

const initialLeadForm: LeadFormState = {
  name: "",
  company: "",
  email: "",
  industry: "",
  message: "",
}

const CASES: Array<{ id: CaseId; label: string }> = [
  { id: "construction", label: "🏗️ Строительство" },
  { id: "retail", label: "🛒 Ритейл" },
  { id: "oil", label: "🛢️ Нефтегаз" },
  { id: "energy", label: "⚡ Энергетика" },
]

function scrollTop() {
  window.scrollTo({ top: 0 })
}

export default function App() {
  const [page, setPage] = useState<PageId>("home")
  const [activeCase, setActiveCase] = useState<CaseId>("construction")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<FaqId>("price")

  const [form, setForm] = useState<LeadFormState>(initialLeadForm)
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [formError, setFormError] = useState<string>("")

  const caseHeader = useMemo(() => {
    const data: Record<
      CaseId,
      { tag: string; title: string; subtitle: string }
    > = {
      construction: {
        tag: "Строительство",
        title: "Личный кабинет подрядчика для строительной компании",
        subtitle:
          "Веб-платформа для взаимодействия генподрядчика (топ-5 девелоперов России) с сотнями субподрядчиков. Полная замена бумажного документооборота, интеграция с 1С.",
      },
      retail: {
        tag: "Ритейл",
        title: "Игровая экосистема для сети супермаркетов",
        subtitle:
          "Серия из 7 мобильных игр в программе лояльности крупной федеральной сети. Геймификация вовлекла покупателей и увеличила частоту покупок.",
      },
      oil: {
        tag: "Нефтегаз",
        title: "Система учёта нефтепродуктов для Teboil",
        subtitle:
          "Специализированная система для международной нефтяной компании. Автоматизирует контроль состава топлива, обеспечивает соответствие стандартам ЕС.",
      },
      energy: {
        tag: "Энергетика",
        title: "ERP-система для энергетической компании",
        subtitle:
          "Многоуровневая ERP, объединившая коммерческий и технический контуры — от учёта абонентов до мониторинга оборудования в реальном времени.",
      },
    }

    return data[activeCase]
  }, [activeCase])

  const metrics = useMemo(() => {
    const data: Record<CaseId, Array<{ value: string; label: string }>> = {
      construction: [
        { value: "4×", label: "ускорение согласований" },
        { value: "2×", label: "быстрее выплаты" },
        { value: "1000+", label: "актов в месяц онлайн" },
        { value: "145М₽", label: "экономия в год" },
      ],
      retail: [
        { value: "7", label: "игр за первый год" },
        { value: "↑↑", label: "вовлечённость" },
        { value: "↑", label: "средний чек" },
        { value: "∞", label: "постоянный инструмент" },
      ],
      oil: [
        { value: "−30%", label: "время обработки" },
        { value: "+20%", label: "точность учёта" },
        { value: "80%", label: "автоматизация" },
        { value: "100%", label: "соответствие ЕС" },
      ],
      energy: [
        { value: "100%", label: "прозрачность данных" },
        { value: "↓↓", label: "время отчётов" },
        { value: "↑", label: "эффективность" },
        { value: "AI", label: "готовность к ИИ" },
      ],
    }

    return data[activeCase]
  }, [activeCase])

  function showPage(next: PageId) {
    setPage(next)
    setMobileMenuOpen(false)
    scrollTop()
  }

  function showCase(next: CaseId) {
    setActiveCase(next)
    setPage("cases")
    setMobileMenuOpen(false)
    scrollTop()
  }

  async function submitLead(e: FormEvent) {
    e.preventDefault()
    setFormError("")
    setFormStatus("loading")

    const payload = {
      ...form,
      source: "itmm-landing",
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setFormStatus("error")
        setFormError(data.error || "Не удалось отправить заявку.")
        return
      }

      setFormStatus("success")
      setForm(initialLeadForm)
    } catch {
      setFormStatus("error")
      setFormError("Не удалось отправить заявку. Проверьте соединение.")
    }
  }

  return (
    <>
      <div className="announce-bar">
        🇰🇿 Казахстан создаёт Министерство ИИ —{" "}
        <a
          onClick={() => showPage("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") showPage("home")
          }}
        >
          Узнайте, как это влияет на ваш бизнес →
        </a>
      </div>

      <nav>
        <div className="nav-logo" onClick={() => showPage("home")}>
          IT<span>MM</span>
        </div>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => showPage("home")}
              className={page === "home" ? "active" : undefined}
            >
              Платформа
            </button>
          </li>
          <li>
            <button
              onClick={() => showPage("cases")}
              className={page === "cases" ? "active" : undefined}
            >
              Кейсы
            </button>
          </li>
          <li>
            <div className="nav-right">
              <a href="tel:+77018771414" className="nav-phone">
                +7 701 877 14 14
              </a>
              <button onClick={() => showPage("contact")} className="nav-cta">
                Написать нам
              </button>
            </div>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setMobileMenuOpen((s) => !s)}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="nav-mobile" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="nav-mobile-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="nav-mobile-head">
              <div className="nav-logo">
                IT<span>MM</span>
              </div>
              <button
                className="nav-hamburger"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Закрыть меню"
                style={{ display: "flex" }}
              >
                ✕
              </button>
            </div>
            <div className="nav-mobile-links">
              <button className="nav-mobile-link" onClick={() => showPage("home")}>
                Платформа <span>→</span>
              </button>
              <button className="nav-mobile-link" onClick={() => showPage("cases")}>
                Кейсы <span>→</span>
              </button>
              <button
                className="nav-mobile-link nav-mobile-cta"
                onClick={() => showPage("contact")}
              >
                Написать нам <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={page === "home" ? "page active" : "page"}>
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
                ITMM внедряет ИИ и цифровые решения, чтобы средний и крупный
                бизнес выигрывал конкуренцию и рос быстрее.
              </p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => showPage("cases")}>
                  Смотреть кейсы
                </button>
                <button
                  className="btn-outline"
                  onClick={() => showPage("contact")}
                >
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

        <div className="section-wrap">
          <div className="section-eyebrow">Топ кейсы</div>
          <div className="section-title">
            Строить крутые продукты
            <br />
            не должно быть сложно.
          </div>

          <div className="blog-grid">
            <div className="blog-card" onClick={() => showCase("construction")}>
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

            <div className="blog-card" onClick={() => showCase("oil")}>
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

            <div className="blog-card" onClick={() => showCase("retail")}>
              <div className="blog-card-img g3" style={{ height: 140 }}>
                <div className="big-num" style={{ fontSize: 56 }}>
                  🎮
                </div>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-label">Ритейл</div>
                <h3>
                  Игровая экосистема — геймификация для сети супермаркетов
                </h3>
              </div>
            </div>
          </div>
        </div>

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
              Наше видение — помочь бизнесу решить потребность в цифровизации
              быстро и с гарантированным результатом.
            </p>
            <div className="grid3">
              <div className="feature-card">
                <div className="f-icon">🥽</div>
                <h3>Лучше. Быстрее.</h3>
                <p>
                  VR и AR для производства и обучения — ускоряем подготовку
                  персонала и внедрение новых технологий на реальных объектах.
                </p>
              </div>
              <div className="feature-card">
                <div className="f-icon">⚡</div>
                <h3>Готово к будущему</h3>
                <p>
                  Гибкие, надёжные решения на открытых стандартах. ИИ
                  встраивается в любые процессы — от добычи до офисных задач.
                </p>
              </div>
              <div className="feature-card">
                <div className="f-icon">🔐</div>
                <h3>Непрерывная защита</h3>
                <p>
                  AI-кибербезопасность: защита информации, предотвращение кибератак
                  и обеспечение безопасности в цифровую эпоху.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="split-section">
            <div className="split-content">
              <div className="section-eyebrow">
                Строительство · Кросс-платформенно
              </div>
              <div className="section-title">
                Современная платформа управления подрядчиками.
              </div>
              <p>
                Единственная платформа, созданная специально для крупного
                девелопера. Полная замена бумажного документооборота, интеграция с
                1С.
              </p>
              <div className="results-chips">
                <div className="chip">
                  <span className="cv">4×</span> ускорение
                </div>
                <div className="chip">
                  <span className="cv">1000+</span> актов/мес
                </div>
                <div className="chip">
                  <span className="cv">145М₽</span> экономия
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <button className="btn-link" onClick={() => showCase("construction")}>
                  Читать кейс →
                </button>
              </div>
            </div>
            <div className="split-visual sv-blue">
              <div className="mock-window">
                <div className="mock-bar">
                  <div className="mock-dot r"></div>
                  <div className="mock-dot y"></div>
                  <div className="mock-dot g"></div>
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 11,
                    marginBottom: 10,
                  }}
                >
                  Личный кабинет подрядчика
                </div>
                <div className="mock-row" style={{ width: "80%" }}></div>
                <div className="mock-row" style={{ width: "60%" }}></div>
                <div className="mock-row" style={{ width: "40%" }}></div>
                <div className="mock-stat">
                  <div className="mock-badge">7 дн</div>
                  <div className="mock-badge">1000+</div>
                  <div className="mock-badge">200</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="split-section reverse">
              <div className="split-content">
                <div className="section-eyebrow">Нефтегаз · Teboil</div>
                <div className="section-title">
                  Учитывайте разницу между ручным и цифровым учётом.
                </div>
                <p>
                  Узнайте, как избавиться от ручного ввода данных, обеспечить
                  соответствие нормам ЕС и повысить прозрачность операций на всех
                  терминалах.
                </p>
                <button className="btn-link" onClick={() => showCase("oil")}>
                  Читать кейс →
                </button>
              </div>
              <div className="split-visual sv-orange">
                <div style={{ fontSize: 52 }}>🛢️</div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 800,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  Teboil · Учёт нефтепродуктов
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                  Нормы ЕС · Real-time мониторинг
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrap">
          <div className="section-eyebrow">Отраслевая экспертиза</div>
          <div className="section-title">
            Управляйте и масштабируйтесь
            <br />
            в любом секторе.
          </div>
          <p className="section-sub">
            Уделяйте время тому, что важно. Запускайтесь быстро и масштабируйтесь
            под любые задачи бизнеса.
          </p>
          <div className="sectors-grid">
            <div className="sector-card" onClick={() => showCase("construction")}>
              <div className="s-icon">🏗️</div>
              <h3>Строительство</h3>
              <p>ЛКП, учёт договоров, отслеживание платежей по объектам.</p>
            </div>
            <div className="sector-card" onClick={() => showCase("oil")}>
              <div className="s-icon">🛢️</div>
              <h3>Нефтегаз</h3>
              <p>Учёт нефтепродуктов, биокомпоненты, соответствие нормам ЕС.</p>
            </div>
            <div className="sector-card" onClick={() => showCase("retail")}>
              <div className="s-icon">🛒</div>
              <h3>Ритейл</h3>
              <p>Игровые механики, программы лояльности, аналитика покупок.</p>
            </div>
            <div className="sector-card" onClick={() => showCase("energy")}>
              <div className="s-icon">⚡</div>
              <h3>Энергетика</h3>
              <p>ERP, учёт абонентов, телеметрия, мониторинг инфраструктуры.</p>
            </div>
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
            <button className="btn-primary" onClick={() => showPage("cases")}>
              Все кейсы
            </button>
            <button className="btn-link" onClick={() => showPage("contact")}>
              Обсудить проект →
            </button>
          </div>
        </div>

        <div className="section-wrap faq-section">
          <div className="section-eyebrow">FAQ</div>
          <div className="section-title">Часто задаваемые вопросы</div>
          <div className="faq-list">
            <div className={`faq-item${activeFaq === "price" ? " open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setActiveFaq("price")}
              >
                <span>Сколько стоит проект?</span>
                <span>{activeFaq === "price" ? "−" : "+"}</span>
              </button>
              {activeFaq === "price" && (
                <p className="faq-answer">
                  Стоимость зависит от задачи. Свяжитесь с нами — сделаем оценку
                  бесплатно.
                </p>
              )}
            </div>
            <div className={`faq-item${activeFaq === "timeline" ? " open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setActiveFaq("timeline")}
              >
                <span>Какие сроки разработки?</span>
                <span>{activeFaq === "timeline" ? "−" : "+"}</span>
              </button>
              {activeFaq === "timeline" && (
                <p className="faq-answer">
                  MVP — от 4 недель. Крупные системы — от 3 месяцев. Всегда
                  фиксируем сроки в договоре.
                </p>
              )}
            </div>
            <div
              className={`faq-item${activeFaq === "small-business" ? " open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveFaq("small-business")}
              >
                <span>Работаете ли вы с малым бизнесом?</span>
                <span>{activeFaq === "small-business" ? "−" : "+"}</span>
              </button>
              {activeFaq === "small-business" && (
                <p className="faq-answer">
                  Наш основной профиль — средний и крупный бизнес, но готовы
                  обсудить любую задачу.
                </p>
              )}
            </div>
            <div className={`faq-item${activeFaq === "geography" ? " open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setActiveFaq("geography")}
              >
                <span>Вы работаете только в Казахстане?</span>
                <span>{activeFaq === "geography" ? "−" : "+"}</span>
              </button>
              {activeFaq === "geography" && (
                <p className="faq-answer">
                  Казахстан — приоритет, но есть опыт с российскими и
                  международными компаниями (Teboil).
                </p>
              )}
            </div>
            <div className={`faq-item${activeFaq === "start" ? " open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setActiveFaq("start")}
              >
                <span>Как начать сотрудничество?</span>
                <span>{activeFaq === "start" ? "−" : "+"}</span>
              </button>
              {activeFaq === "start" && (
                <p className="faq-answer">
                  Заполните форму на странице Контакты или напишите в WhatsApp —
                  ответим в течение часа.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="dark-cta">
          <h2>Познакомимся?</h2>
          <p>Расскажите о вашем бизнесе — и мы вместе придумаем, как сделать его круче.</p>
          <button className="btn-white" onClick={() => showPage("contact")}>
            Написать нам →
          </button>
        </div>

        <Footer />
      </div>

      <div className={page === "cases" ? "page active" : "page"}>
        <div className="case-page-hero">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="case-tabs">
              {CASES.map((c) => (
                <button
                  key={c.id}
                  className={`case-tab${c.id === activeCase ? " active" : ""}`}
                  onClick={() => setActiveCase(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="case-tag">{caseHeader.tag}</div>
            <h1>{caseHeader.title}</h1>
            <p>{caseHeader.subtitle}</p>
          </div>
        </div>

        <div className="metrics-row">
          {metrics.map((m) => (
            <div className="metric-box" key={m.label}>
              <div className="metric-val">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="case-body">
          {activeCase === "construction" && (
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
                    Коммуникации по телефону и почте — менеджеры перегружены,
                    сроки затягивались, согласования терялись.
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
                <li>
                  Ускорение строительных процессов за счёт устранения задержек
                </li>
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
          )}

          {activeCase === "retail" && (
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
                    Создать интерактивный инструмент для повышения лояльности
                    через геймификацию покупок.
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
                <li>
                  Превращение в постоянный инструмент клиентского маркетинга
                </li>
              </ul>
              <div className="tech-chips">
                <div className="tech-chip">🎮 Геймификация</div>
                <div className="tech-chip">📱 Мобильные игры</div>
                <div className="tech-chip">🎁 Программа лояльности</div>
                <div className="tech-chip">📈 Аналитика</div>
              </div>
            </>
          )}

          {activeCase === "oil" && (
            <>
              <div className="case-two-col">
                <div>
                  <div className="col-head">Задача</div>
                  <ul className="ul-clean">
                    <li>Централизовать учёт нефтепродуктов на всех терминалах</li>
                    <li>Контролировать биокомпоненты для норм ЕС</li>
                    <li>Сократить ручной ввод и ошибки</li>
                    <li>Повысить прозрачность производственного учёта</li>
                  </ul>
                </div>
                <div>
                  <div className="col-head">Функциональные возможности</div>
                  <ul className="ul-clean">
                    <li>Учёт состава нефтепродуктов в реальном времени</li>
                    <li>Справочники: нефтепродукты, танки, терминалы</li>
                    <li>Автоматический расчёт биокомпонентов</li>
                    <li>Импорт/экспорт данных из сторонних систем</li>
                    <li>Система уведомлений и алертов</li>
                  </ul>
                </div>
              </div>
              <div className="col-head">Результаты</div>
              <ul className="ul-clean">
                <li>Централизованный контроль по всем объектам</li>
                <li>Снижение ручных операций и ошибок учёта</li>
                <li>Полное соответствие требованиям ЕС по биотопливу</li>
                <li>Решение стало ядром цифровой трансформации Teboil</li>
              </ul>
              <div className="tech-chips">
                <div className="tech-chip">⚗️ Биокомпоненты</div>
                <div className="tech-chip">🔗 ERP-интеграция</div>
                <div className="tech-chip">📡 Real-time</div>
                <div className="tech-chip">📋 Нормы ЕС</div>
              </div>
            </>
          )}

          {activeCase === "energy" && (
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
                ERP стала основой цифровой трансформации. Решение масштабируемо и
                готово к интеграции с ИИ-модулями для прогнозирования
                энергопотребления.
              </p>
              <div className="tech-chips">
                <div className="tech-chip">📟 Телеметрия</div>
                <div className="tech-chip">🏭 ERP</div>
                <div className="tech-chip">📊 Аналитика</div>
                <div className="tech-chip">🤖 ИИ-ready</div>
              </div>
            </>
          )}
        </div>

        <div className="dark-cta">
          <h2>Похожая задача?</h2>
          <p>Обсудим ваш проект и предложим подходящее решение.</p>
          <button className="btn-white" onClick={() => showPage("contact")}>
            Написать нам →
          </button>
        </div>

        <Footer />
      </div>

      <div className={page === "contact" ? "page active" : "page"}>
        <div className="contact-page">
          <div className="contact-left">
            <div
              style={{
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 32,
              }}
            >
              Контакты
            </div>
            <h1>
              Давайте
              <br />
              <span>познакомимся.</span>
            </h1>
            <p>
              Расскажите о вашем бизнесе — и мы вместе придумаем, как сделать его
              круче. Мы всегда на связи.
            </p>
            <a href="tel:+77018771414" className="phone-link">
              +7 701 877 1414
            </a>

            <div className="social-list">
              <a
                href="https://www.instagram.com/itmm.kz"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon si-ig">
                  <Instagram size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                    Instagram
                  </div>
                  <div>@itmm.kz</div>
                </div>
                <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
              </a>

              <a
                href="https://wa.me/77018771414"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon si-wa">
                  <MessageCircle size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                    WhatsApp
                  </div>
                  <div>+7 701 877 1414</div>
                </div>
                <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
              </a>

              <a
                href="https://t.me/itmm_kz"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon si-tg">
                  <Send size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                    Telegram
                  </div>
                  <div>@itmm_kz</div>
                </div>
                <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
              </a>

              <a
                href="https://www.linkedin.com/company/itmm-kz"
                target="_blank"
                rel="noreferrer"
                className="social-item"
              >
                <div className="social-icon si-li">
                  <Linkedin size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 11, opacity: 0.45, fontWeight: 600 }}>
                    LinkedIn
                  </div>
                  <div>ITMM Kazakhstan</div>
                </div>
                <div style={{ marginLeft: "auto", opacity: 0.35 }}>→</div>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h2>Расскажите о проекте</h2>

            <form onSubmit={submitLead}>
              <div className="form-2col">
                <div className="form-group">
                  <label>Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    required
                    onChange={(e) =>
                      setForm((s) => ({ ...s, name: e.target.value }))
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Компания</label>
                  <input
                    type="text"
                    placeholder="Название компании"
                    value={form.company}
                    required
                    onChange={(e) =>
                      setForm((s) => ({ ...s, company: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  value={form.email}
                  required
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label>Отрасль</label>
                <select
                  value={form.industry}
                  required
                  onChange={(e) =>
                    setForm((s) => ({ ...s, industry: e.target.value }))
                  }
                >
                  <option value="">Выберите отрасль</option>
                  <option>Строительство</option>
                  <option>Нефтегаз</option>
                  <option>Ритейл</option>
                  <option>Энергетика</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="form-group">
                <label>О задаче</label>
                <textarea
                  placeholder="Расскажите о вашем проекте..."
                  value={form.message}
                  required
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                ></textarea>
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%" }}
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Отправляем..." : "Отправить заявку →"}
              </button>

              {formStatus === "success" && (
                <p style={{ marginTop: 14, fontSize: 13, color: "var(--sub)" }}>
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </p>
              )}
              {formStatus === "error" && (
                <p style={{ marginTop: 14, fontSize: 13, color: "#b91c1c" }}>
                  {formError || "Не удалось отправить заявку."}
                </p>
              )}

              <p
                style={{
                  fontSize: 12,
                  color: "var(--sub)",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                Или напрямую:{" "}
                <a
                  href="tel:+77018771414"
                  style={{ color: "var(--blue)", fontWeight: 800 }}
                >
                  +7 701 877 1414
                </a>
              </p>
            </form>
          </div>
        </div>

        <Footer />
      </div>
      <div className={page === "404" ? "page active" : "page"}>
        <div className="page-404">
          <div className="code">404</div>
          <h1>Страница не найдена</h1>
          <button className="btn-primary" onClick={() => showPage("home")}>
            На главную
          </button>
        </div>
      </div>
      <a
        href="https://wa.me/77018771414"
        target="_blank"
        rel="noreferrer"
        className="wa-fab"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        IT<span>MM</span>
      </div>
      <div>+7 701 877 1414 · itmm.kz</div>
      <div>© 2025 ITMM. Все права защищены.</div>
    </footer>
  )
}
