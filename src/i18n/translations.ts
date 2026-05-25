import type { CaseId } from "../types"

export type Lang = "RU" | "KZ" | "EN"
export type Language = Lang

export type Translations = {
  announce: { text: string; link: string }
  nav: {
    platform: string
    cases: string
    contact: string
    openMenu: string
    closeMenu: string
  }
  footer: { rights: string }
  home: {
    hero: {
      eyebrow: string
      title: [string, string, string]
      subtitle: string
      casesButton: string
      discussButton: string
      cards: Array<{ top: string; bottom: string }>
      logosLabel: string
    }
    counters: {
      items: Array<{ label: string }>
    }
    topCases: {
      eyebrow: string
      title: [string, string]
      cards: Array<{ label: string; title: string; subtitle?: string }>
    }
    approach: {
      eyebrow: string
      title: [string, string]
      subtitle: string
      items: Array<{ title: string; text: string }>
    }
    highlights: {
      construction: {
        eyebrow: string
        title: string
        text: string
        chips: [string, string, string]
        button: string
        mockTitle: string
      }
      oil: {
        eyebrow: string
        title: string
        text: string
        button: string
        visualTitle: string
        visualSub: string
      }
    }
    sectors: {
      eyebrow: string
      title: [string, string]
      subtitle: string
      items: Array<{ title: string; text: string }>
      allCases: string
      discuss: string
    }
    technologies: {
      title: string
      subtitle: string
      items: Array<{ title: string; desc: string }>
    }
    faq: {
      eyebrow: string
      title: string
      items: Array<{ id: string; q: string; a: string }>
    }
    finalCta: { title: string; text: string; button: string }
  }
  cases: {
    tabs: Array<{ id: CaseId; label: string }>
    headers: Record<CaseId, { tag: string; title: string; subtitle: string }>
    metrics: Record<CaseId, Array<{ value: string; label: string }>>
    cta: { title: string; text: string; button: string }
    details: Record<
      CaseId,
      {
        leftTitle?: string
        leftText?: string
        leftItems: string[]
        rightTitle: string
        rightItems: string[]
        resultsTitle: string
        results: string[]
        tailText?: string
        chips: string[]
      }
    >
  }
  contact: {
    tag: string
    titleTop: string
    titleBottom: string
    subtitle: string
    projectTitle: string
    form: {
      name: string
      namePlaceholder: string
      company: string
      companyPlaceholder: string
      email: string
      industry: string
      industryPlaceholder: string
      industries: string[]
      message: string
      messagePlaceholder: string
      submit: string
      submitting: string
      success: string
      direct: string
      errorFallback: string
      errorConnection: string
    }
  }
  modal: {
    title: string
    name: string
    phone: string
    message: string
    submit: string
    sending: string
    close: string
  }
  exitPopup: {
    text: string
    primary: string
    secondary: string
  }
  floatingWhatsappLabel: string
}

export const translations: Record<Lang, Translations> = {
  RU: {
    announce: {
      text: "🇰🇿 Казахстан создаёт Министерство ИИ —",
      link: "Узнайте, как это влияет на ваш бизнес →",
    },
    nav: {
      platform: "Платформа",
      cases: "Кейсы",
      contact: "Написать нам",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    footer: { rights: "© 2023 – 2026 ITMM. Все права защищены." },
    home: {
      hero: {
        eyebrow: "🇰🇿 Казахстанская IT-компания",
        title: ["Новый способ", "строить", "умный бизнес."],
        subtitle:
          "ITMM внедряет ИИ и цифровые решения, чтобы средний и крупный бизнес выигрывал конкуренцию и рос быстрее.",
        casesButton: "Смотреть кейсы",
        discussButton: "Обсудить проект",
        cards: [
          { top: "Строительство", bottom: "145М₽ экономии/год" },
          { top: "Teboil · Нефтегаз", bottom: "Автоматизация 80%" },
          { top: "Ритейл · Геймификация", bottom: "7 игр за 1 год" },
        ],
        logosLabel: "Реализовано для ведущих компаний",
      },
      counters: {
        items: [
          { label: "Проектов выполнено" },
          { label: "Лет на рынке" },
          { label: "Автоматизация процессов" },
          { label: "Экономия клиентов в год" },
        ],
      },
      topCases: {
        eyebrow: "Топ кейсы",
        title: ["Строить крутые продукты", "не должно быть сложно."],
        cards: [
          {
            label: "Строительство",
            title:
              "Личный кабинет подрядчика — цифровой документооборот для топ-5 девелопера России",
            subtitle: "Ускорение согласования в 4× и экономия 145М₽ в год.",
          },
          {
            label: "Нефтегаз · Teboil",
            title: "Система учёта нефтепродуктов — соответствие нормам ЕС",
          },
          {
            label: "Ритейл",
            title: "Игровая экосистема — геймификация для сети супермаркетов",
          },
        ],
      },
      approach: {
        eyebrow: "Наш подход",
        title: ["Строить цифровой бизнес", "не должно быть сложно."],
        subtitle:
          "Наше видение — помочь бизнесу решить потребность в цифровизации быстро и с гарантированным результатом.",
        items: [
          {
            title: "Лучше. Быстрее.",
            text: "VR и AR для производства и обучения — ускоряем подготовку персонала и внедрение новых технологий на реальных объектах.",
          },
          {
            title: "Готово к будущему",
            text: "Гибкие, надёжные решения на открытых стандартах. ИИ встраивается в любые процессы — от добычи до офисных задач.",
          },
          {
            title: "Непрерывная защита",
            text: "AI-кибербезопасность: защита информации, предотвращение кибератак и обеспечение безопасности в цифровую эпоху.",
          },
        ],
      },
      highlights: {
        construction: {
          eyebrow: "Строительство · Кросс-платформенно",
          title: "Современная платформа управления подрядчиками.",
          text: "Единственная платформа, созданная специально для крупного девелопера. Полная замена бумажного документооборота, интеграция с 1С.",
          chips: ["ускорение", "актов/мес", "экономия"],
          button: "Читать кейс →",
          mockTitle: "Личный кабинет подрядчика",
        },
        oil: {
          eyebrow: "Нефтегаз · Teboil",
          title: "Учитывайте разницу между ручным и цифровым учётом.",
          text: "Узнайте, как избавиться от ручного ввода данных, обеспечить соответствие нормам ЕС и повысить прозрачность операций на всех терминалах.",
          button: "Читать кейс →",
          visualTitle: "Teboil · Учёт нефтепродуктов",
          visualSub: "Нормы ЕС · Real-time мониторинг",
        },
      },
      sectors: {
        eyebrow: "Отраслевая экспертиза",
        title: ["Управляйте и масштабируйтесь", "в любом секторе."],
        subtitle:
          "Уделяйте время тому, что важно. Запускайтесь быстро и масштабируйтесь под любые задачи бизнеса.",
        items: [
          {
            title: "Строительство",
            text: "ЛКП, учёт договоров, отслеживание платежей по объектам.",
          },
          {
            title: "Нефтегаз",
            text: "Учёт нефтепродуктов, биокомпоненты, соответствие нормам ЕС.",
          },
          {
            title: "Ритейл",
            text: "Игровые механики, программы лояльности, аналитика покупок.",
          },
          {
            title: "Энергетика",
            text: "ERP, учёт абонентов, телеметрия, мониторинг инфраструктуры.",
          },
        ],
        allCases: "Все кейсы",
        discuss: "Обсудить проект →",
      },
      technologies: {
        title: "Технологии которые мы используем",
        subtitle: "Мы работаем с передовыми технологиями настоящего и будущего",
        items: [
          {
            title: "Нейросети и ИИ",
            desc: "Разрабатываем и внедряем AI-решения для автоматизации бизнес-процессов",
          },
          {
            title: "VR/AR дизайн",
            desc: "Создаём интерактивные интерфейсы и обучающие симуляции",
          },
          {
            title: "Кибербезопасность",
            desc: "Защищаем данные и системы от современных угроз",
          },
          {
            title: "Цифровые экосистемы",
            desc: "Проектируем сложные цифровые среды и платформы",
          },
          {
            title: "Возобновляемая энергетика",
            desc: "Цифровизация энергосистем и климатических решений",
          },
          {
            title: "Робототехника",
            desc: "Интеграция роботизированных систем в производство и логистику",
          },
          {
            title: "Этика ИИ",
            desc: "Аудит и разработка стандартов для AI-систем",
          },
          {
            title: "Цифровые двойники",
            desc: "Создаём виртуальные копии объектов для оптимизации",
          },
          {
            title: "Video Analytics Pipeline",
            desc: "Автоматический анализ видеопотоков с применением компьютерного зрения и ИИ",
          },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Часто задаваемые вопросы",
        items: [
          {
            id: "price",
            q: "Сколько стоит проект?",
            a: "Стоимость зависит от задачи. Свяжитесь с нами — сделаем оценку бесплатно.",
          },
          {
            id: "timeline",
            q: "Какие сроки разработки?",
            a: "MVP — от 4 недель. Крупные системы — от 3 месяцев. Всегда фиксируем сроки в договоре.",
          },
          {
            id: "small-business",
            q: "Работаете ли вы с малым бизнесом?",
            a: "Наш основной профиль — средний и крупный бизнес, но готовы обсудить любую задачу.",
          },
          {
            id: "geography",
            q: "Вы работаете только в Казахстане?",
            a: "Казахстан — приоритет, но есть опыт с российскими и международными компаниями (Teboil).",
          },
          {
            id: "start",
            q: "Как начать сотрудничество?",
            a: "Заполните форму на странице Контакты или напишите в WhatsApp — ответим в течение часа.",
          },
        ],
      },
      finalCta: {
        title: "Познакомимся?",
        text: "Расскажите о вашем бизнесе — и мы вместе придумаем, как сделать его круче.",
        button: "Написать нам →",
      },
    },
    cases: {
      tabs: [
        { id: "construction", label: "🏗️ Строительство" },
        { id: "retail", label: "🛒 Ритейл" },
        { id: "oil", label: "🛢️ Нефтегаз" },
        { id: "energy", label: "⚡ Энергетика" },
      ],
      headers: {
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
      },
      metrics: {
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
      },
      cta: {
        title: "Похожая задача?",
        text: "Обсудим ваш проект и предложим подходящее решение.",
        button: "Написать нам →",
      },
      details: {
        construction: {
          leftTitle: "Задача",
          leftText:
            "Коммуникации по телефону и почте — менеджеры перегружены, сроки затягивались, согласования терялись.",
          leftItems: [
            "Централизовать взаимодействие с подрядчиками",
            "Исключить потери информации и дублирование",
            "Ускорить согласование документов и оплат",
            "Снизить нагрузку на сотрудников",
          ],
          rightTitle: "Ключевые возможности",
          rightItems: [
            "Полная синхронизация с 1С: единые данные и отчёты",
            "Цифровое согласование документов и доп. работ",
            "Чат и тикет-система для коммуникации",
            "Автоматическое отслеживание статусов договоров",
            "Корректировка смет прямо в интерфейсе ЛКП",
          ],
          resultsTitle: "Результаты",
          results: [
            "Согласование сокращено с 30 до 7 дней",
            "200 подрядчиков и 1000 договоров без увеличения штата",
            "Ускорение строительных процессов за счёт устранения задержек",
            "Система работает более 3 лет и продолжает развиваться",
            "Экономический эффект: 145–152 млн ₽ в год",
          ],
          chips: ["💡 1C интеграция", "📄 Цифровой документооборот", "💬 Тикет-система", "📊 Аналитика"],
        },
        retail: {
          leftTitle: "Задача",
          leftText:
            "Создать интерактивный инструмент для повышения лояльности через геймификацию покупок.",
          leftItems: [
            "Вовлечь покупателей в программу лояльности",
            "Стимулировать повторные покупки",
            "Выдавать реальные купоны за достижения",
          ],
          rightTitle: "Решение",
          rightItems: [
            "7 мобильных игр в единой экосистеме",
            "Игровая карта с локациями и уровнями",
            "Интеграция с программой лояльности",
            "Прямое отслеживание эффективности",
            "Постоянная аналитика активности",
          ],
          resultsTitle: "Результаты",
          results: [
            "Рост числа активных участников программы лояльности",
            "Увеличение среднего чека и частоты покупок",
            "Новый эмоциональный канал взаимодействия с брендом",
            "Превращение в постоянный инструмент клиентского маркетинга",
          ],
          chips: ["🎮 Геймификация", "📱 Мобильные игры", "🎁 Программа лояльности", "📈 Аналитика"],
        },
        oil: {
          leftTitle: "Задача",
          leftItems: [
            "Централизовать учёт нефтепродуктов на всех терминалах",
            "Контролировать биокомпоненты для норм ЕС",
            "Сократить ручной ввод и ошибки",
            "Повысить прозрачность производственного учёта",
          ],
          rightTitle: "Функциональные возможности",
          rightItems: [
            "Учёт состава нефтепродуктов в реальном времени",
            "Справочники: нефтепродукты, танки, терминалы",
            "Автоматический расчёт биокомпонентов",
            "Импорт/экспорт данных из сторонних систем",
            "Система уведомлений и алертов",
          ],
          resultsTitle: "Результаты",
          results: [
            "Централизованный контроль по всем объектам",
            "Снижение ручных операций и ошибок учёта",
            "Полное соответствие требованиям ЕС по биотопливу",
            "Решение стало ядром цифровой трансформации Teboil",
          ],
          chips: ["⚗️ Биокомпоненты", "🔗 ERP-интеграция", "📡 Real-time", "📋 Нормы ЕС"],
        },
        energy: {
          leftTitle: "Основной функционал",
          leftItems: [
            "Управление базой абонентов и договорами",
            "Автоматизация документооборота с бухгалтерией",
            "Детализированные отчёты по объектам",
            "Подключение к телеметрии и приборам учёта",
            "Контроль инцидентов и уведомления",
          ],
          rightTitle: "Результаты",
          rightItems: [
            "Полная прозрачность по потреблению и расчётам",
            "Сокращение времени обработки документов",
            "Централизованный контроль станций и сетей",
            "Улучшение прогнозирования нагрузок",
          ],
          resultsTitle: "Результаты",
          results: [],
          tailText:
            "ERP стала основой цифровой трансформации. Решение масштабируемо и готово к интеграции с ИИ-модулями для прогнозирования энергопотребления.",
          chips: ["📟 Телеметрия", "🏭 ERP", "📊 Аналитика", "🤖 ИИ-ready"],
        },
      },
    },
    contact: {
      tag: "Контакты",
      titleTop: "Давайте",
      titleBottom: "познакомимся.",
      subtitle:
        "Расскажите о вашем бизнесе — и мы вместе придумаем, как сделать его круче. Мы всегда на связи.",
      projectTitle: "Расскажите о проекте",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        company: "Компания",
        companyPlaceholder: "Название компании",
        email: "Email",
        industry: "Отрасль",
        industryPlaceholder: "Выберите отрасль",
        industries: ["Строительство", "Нефтегаз", "Ритейл", "Энергетика", "Другое"],
        message: "О задаче",
        messagePlaceholder: "Расскажите о вашем проекте...",
        submit: "Отправить заявку →",
        submitting: "Отправляем...",
        success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
        direct: "Или напрямую:",
        errorFallback: "Не удалось отправить заявку.",
        errorConnection: "Не удалось отправить заявку. Проверьте соединение.",
      },
    },
    modal: {
      title: "Обсудить проект",
      name: "Имя",
      phone: "Телефон",
      message: "Сообщение",
      submit: "Отправить заявку →",
      sending: "Отправляем...",
      close: "Закрыть",
    },
    exitPopup: {
      text: "Подождите! Получите бесплатный аудит вашего бизнеса",
      primary: "Получить аудит",
      secondary: "Нет, спасибо",
    },
    floatingWhatsappLabel: "Написать в WhatsApp",
  },
  KZ: {} as Translations,
  EN: {} as Translations,
}

translations.KZ = {
  ...translations.RU,
  announce: {
    text: "🇰🇿 Қазақстан ЖИ министрлігін құрып жатыр —",
    link: "Бұл сіздің бизнесіңізге қалай әсер ететінін біліңіз →",
  },
  nav: {
    platform: "Платформа",
    cases: "Кейстер",
    contact: "Бізге жазыңыз",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
  },
  footer: { rights: "© 2023 – 2026 ITMM. Барлық құқықтар қорғалған." },
  home: {
    ...translations.RU.home,
    hero: {
      ...translations.RU.home.hero,
      eyebrow: "🇰🇿 Қазақстандық IT компания",
      title: ["Жаңа тәсіл", "құруға", "ақылды бизнес."],
      subtitle:
        "ITMM орта және ірі бизнеске бәсекеде жеңуге және тезірек өсуге көмектесу үшін ЖИ мен цифрлық шешімдерді енгізеді.",
      casesButton: "Кейстерді көру",
      discussButton: "Жобаны талқылау",
      cards: [
        { top: "Құрылыс", bottom: "жылына 145 млн ₸ үнем" },
        { top: "Teboil · Мұнай-газ", bottom: "80% автоматтандыру" },
        { top: "Ритейл · Геймификация", bottom: "1 жылда 7 ойын" },
      ],
      logosLabel: "Сала көшбасшылары үшін жүзеге асырылған",
    },
    counters: {
      items: [
        { label: "Жобалар орындалды" },
        { label: "Нарықтағы жыл" },
        { label: "Процестерді автоматтандыру" },
        { label: "Клиенттердің жылдық үнемі" },
      ],
    },
    topCases: {
      ...translations.RU.home.topCases,
      eyebrow: "Үздік кейстер",
      title: ["Күшті өнімдер жасау", "күрделі болмауы тиіс."],
      cards: [
        {
          label: "Құрылыс",
          title: "Мердігер кабинеті — Ресейдің топ-5 девелопері үшін цифрлық құжат айналымы",
          subtitle: "Келісу 4 есе жылдамдап, жылына 145 млн үнем әкелді.",
        },
        {
          label: "Мұнай-газ · Teboil",
          title: "Мұнай өнімдерін есепке алу жүйесі — ЕО нормаларына сәйкестік",
        },
        {
          label: "Ритейл",
          title: "Ойын экожүйесі — супермаркет желісіне арналған геймификация",
        },
      ],
    },
    approach: {
      ...translations.RU.home.approach,
      eyebrow: "Біздің тәсіл",
      title: ["Цифрлық бизнесті құру", "күрделі болмауы тиіс."],
      subtitle:
        "Біздің көзқарасымыз — бизнеске цифрландыру қажеттілігін жылдам және кепілденген нәтижемен шешуге көмектесу.",
      items: [
        {
          title: "Жақсырақ. Жылдамырақ.",
          text: "Өндіріс пен оқытуға арналған VR/AR: қызметкерлерді дайындауды және жаңа технологияларды енгізуді жеделдетеміз.",
        },
        {
          title: "Болашаққа дайын",
          text: "Ашық стандарттарға негізделген икемді әрі сенімді шешімдер. ЖИ өндіріске де, кеңсе процестеріне де оңай енеді.",
        },
        {
          title: "Үздіксіз қорғаныс",
          text: "AI-киберқауіпсіздік: деректерді қорғау, шабуылдардың алдын алу және цифрлық дәуірдегі тұрақты қауіпсіздік.",
        },
      ],
    },
    highlights: {
      construction: {
        eyebrow: "Құрылыс · Кросс-платформа",
        title: "Мердігерлерді басқарудың заманауи платформасы.",
        text: "Ірі девелопер үшін арнайы жасалған бірегей платформа. Қағаз құжат айналымын толық алмастырады, 1С-пен біріктірілген.",
        chips: ["жеделдеу", "акт/ай", "үнем"],
        button: "Кейсті оқу →",
        mockTitle: "Мердігердің жеке кабинеті",
      },
      oil: {
        eyebrow: "Мұнай-газ · Teboil",
        title: "Қолмен және цифрлық есептің айырмасын нақты көріңіз.",
        text: "Қолмен енгізуді жойып, ЕО талаптарына сәйкестікті қамтамасыз ету және барлық терминалдардағы ашықтықты арттыру жолын қараңыз.",
        button: "Кейсті оқу →",
        visualTitle: "Teboil · Мұнай өнімдерін есепке алу",
        visualSub: "ЕО нормалары · Real-time мониторинг",
      },
    },
    sectors: {
      ...translations.RU.home.sectors,
      eyebrow: "Салалық сараптама",
      title: ["Кез келген салада", "басқарыңыз және өсіңіз."],
      subtitle:
        "Маңыздысына уақыт бөліңіз. Жылдам іске қосылып, бизнес міндеттеріне сай кеңейіңіз.",
      items: [
        {
          title: "Құрылыс",
          text: "Мердігер кабинеті, келісімшарт есебі, объектілер бойынша төлемдерді бақылау.",
        },
        {
          title: "Мұнай-газ",
          text: "Мұнай өнімдерін есепке алу, биокомпоненттер, ЕО нормаларына сәйкестік.",
        },
        {
          title: "Ритейл",
          text: "Ойын механикалары, лоялдылық бағдарламалары, сатып алу аналитикасы.",
        },
        {
          title: "Энергетика",
          text: "ERP, абоненттер есебі, телеметрия, инфрақұрылымды мониторинг.",
        },
      ],
      allCases: "Барлық кейстер",
      discuss: "Жобаны талқылау →",
    },
    technologies: {
      title: "Біз қолданатын технологиялар",
      subtitle: "Біз бүгінгі және болашақтың озық технологияларымен жұмыс істейміз",
      items: [
        {
          title: "Нейрондық желілер және ЖИ",
          desc: "Бизнес-процестерді автоматтандыру үшін AI шешімдерін әзірлейміз және енгіземіз",
        },
        {
          title: "VR/AR дизайн",
          desc: "Интерактивті интерфейстер мен оқыту симуляцияларын жасаймыз",
        },
        {
          title: "Киберқауіпсіздік",
          desc: "Деректер мен жүйелерді заманауи қауіптерден қорғаймыз",
        },
        {
          title: "Цифрлық экожүйелер",
          desc: "Күрделі цифрлық орта мен платформаларды жобалаймыз",
        },
        {
          title: "Жаңартылатын энергетика",
          desc: "Энергожүйелерді және климаттық шешімдерді цифрландыру",
        },
        {
          title: "Робототехника",
          desc: "Өндіріс пен логистикаға роботтандырылған жүйелерді интеграциялау",
        },
        {
          title: "ЖИ этикасы",
          desc: "AI жүйелері үшін стандарттарды аудиттеу және әзірлеу",
        },
        {
          title: "Цифрлық егіздер",
          desc: "Оңтайландыру үшін объектілердің виртуалды көшірмелерін жасаймыз",
        },
        {
          title: "Video Analytics Pipeline",
          desc: "Компьютерлік көру және ЖИ көмегімен видеопотоктарды автоматты талдау",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Жиі қойылатын сұрақтар",
      items: [
        {
          id: "price",
          q: "Жобаның құны қанша?",
          a: "Құны міндетке байланысты. Бізбен байланысыңыз — тегін бағалап береміз.",
        },
        {
          id: "timeline",
          q: "Әзірлеу мерзімі қандай?",
          a: "MVP — 4 аптадан. Ірі жүйелер — 3 айдан. Мерзімдерді келісімшартта бекітеміз.",
        },
        {
          id: "small-business",
          q: "Шағын бизнеспен жұмыс істейсіздер ме?",
          a: "Негізгі бағытымыз — орта және ірі бизнес, бірақ кез келген міндетті талқылаймыз.",
        },
        {
          id: "geography",
          q: "Тек Қазақстанда жұмыс істейсіздер ме?",
          a: "Қазақстан басымдықта, бірақ Ресей және халықаралық компаниялармен тәжірибе бар (Teboil).",
        },
        {
          id: "start",
          q: "Серіктестікті қалай бастаймыз?",
          a: "Контактілер бетіндегі форманы толтырыңыз немесе WhatsApp-қа жазыңыз — бір сағат ішінде жауап береміз.",
        },
      ],
    },
    finalCta: {
      title: "Танысайық па?",
      text: "Бизнесіңіз туралы айтыңыз — оны одан да мықты ету жолын бірге табамыз.",
      button: "Бізге жазыңыз →",
    },
  },
  contact: {
    ...translations.RU.contact,
    tag: "Байланыс",
    titleTop: "Келіңіз,",
    titleBottom: "танысайық.",
    subtitle:
      "Бизнесіңіз туралы айтыңыз — оны қалай күшейтуге болатынын бірге ойластырамыз. Біз әрқашан байланыстамыз.",
    projectTitle: "Жоба туралы айтыңыз",
    form: {
      ...translations.RU.contact.form,
      name: "Аты",
      namePlaceholder: "Атыңыз",
      company: "Компания",
      companyPlaceholder: "Компания атауы",
      industry: "Сала",
      industryPlaceholder: "Саланы таңдаңыз",
      industries: ["Құрылыс", "Мұнай-газ", "Ритейл", "Энергетика", "Басқа"],
      message: "Міндет туралы",
      messagePlaceholder: "Жобаңыз туралы жазыңыз...",
      submit: "Өтінім жіберу →",
      submitting: "Жіберіліп жатыр...",
      success: "Рақмет! Жақын уақытта сізбен байланысамыз.",
      direct: "Немесе тікелей:",
      errorFallback: "Өтінімді жіберу мүмкін болмады.",
      errorConnection: "Өтінімді жіберу мүмкін болмады. Байланысты тексеріңіз.",
    },
  },
  cases: {
    ...translations.RU.cases,
    tabs: [
      { id: "construction", label: "🏗️ Құрылыс" },
      { id: "retail", label: "🛒 Ритейл" },
      { id: "oil", label: "🛢️ Мұнай-газ" },
      { id: "energy", label: "⚡ Энергетика" },
    ],
    headers: {
      construction: {
        tag: "Құрылыс",
        title: "Құрылыс компаниясына арналған мердігердің жеке кабинеті",
        subtitle:
          "Бас мердігер мен жүздеген қосалқы мердігер арасындағы өзара әрекетке арналған веб-платформа. Қағаз құжат айналымын толық алмастырады, 1С-пен интеграция бар.",
      },
      retail: {
        tag: "Ритейл",
        title: "Супермаркет желісіне арналған ойын экожүйесі",
        subtitle:
          "Лоялдылық бағдарламасындағы 7 мобильді ойын. Геймификация сатып алушы белсенділігін арттырып, сатып алу жиілігін өсірді.",
      },
      oil: {
        tag: "Мұнай-газ",
        title: "Teboil үшін мұнай өнімдерін есепке алу жүйесі",
        subtitle:
          "Халықаралық мұнай компаниясына арналған арнайы жүйе. Отын құрамын бақылауды автоматтандырып, ЕО стандарттарына сәйкестікті қамтамасыз етеді.",
      },
      energy: {
        tag: "Энергетика",
        title: "Энергетикалық компанияға арналған ERP жүйесі",
        subtitle:
          "Абоненттер есебінен бастап жабдық мониторингіне дейінгі коммерциялық және техникалық контурларды біріктірген көпдеңгейлі ERP.",
      },
    },
    metrics: {
      construction: [
        { value: "4×", label: "келісуді жеделдету" },
        { value: "2×", label: "төлемдер жылдам" },
        { value: "1000+", label: "айына акт онлайн" },
        { value: "145М₽", label: "жылына үнем" },
      ],
      retail: [
        { value: "7", label: "1 жылда ойын" },
        { value: "↑↑", label: "тартылу" },
        { value: "↑", label: "орташа чек" },
        { value: "∞", label: "ұзақ мерзімді арна" },
      ],
      oil: [
        { value: "−30%", label: "өңдеу уақыты" },
        { value: "+20%", label: "есеп дәлдігі" },
        { value: "80%", label: "автоматтандыру" },
        { value: "100%", label: "ЕО сәйкестік" },
      ],
      energy: [
        { value: "100%", label: "деректер ашықтығы" },
        { value: "↓↓", label: "есеп беру уақыты" },
        { value: "↑", label: "тиімділік" },
        { value: "AI", label: "ЖИ дайындығы" },
      ],
    },
    cta: {
      title: "Ұқсас міндет бар ма?",
      text: "Жобаңызды талқылап, лайықты шешім ұсынамыз.",
      button: "Бізге жазыңыз →",
    },
    details: {
      construction: {
        leftTitle: "Міндет",
        leftText:
          "Телефон және пошта арқылы байланыс менеджерлерді шамадан тыс жүктеді, мерзімдер созылып, келісулер жоғалды.",
        leftItems: [
          "Мердігерлермен өзара әрекетті орталықтандыру",
          "Ақпараттың жоғалуын және қайталануын жою",
          "Құжаттар мен төлемдерді келісуді жеделдету",
          "Қызметкерлерге түсетін жүктемені азайту",
        ],
        rightTitle: "Негізгі мүмкіндіктер",
        rightItems: [
          "1С-пен толық синхрондау: бірыңғай деректер мен есептер",
          "Құжаттарды және қосымша жұмыстарды цифрлық келісу",
          "Коммуникацияға арналған чат және тикет жүйесі",
          "Шарт мәртебелерін автоматты бақылау",
          "Сметаларды интерфейсте тікелей түзету",
        ],
        resultsTitle: "Нәтижелер",
        results: [
          "Келісу уақыты 30 күннен 7 күнге қысқарды",
          "200 мердігер және 1000 келісімшарт штат өсімінсіз",
          "Кідірістерді жою арқылы құрылыс процестері жеделдеді",
          "Жүйе 3 жылдан астам уақыт бойы дамып келеді",
          "Экономикалық әсер: жылына 145-152 млн ₽",
        ],
        chips: ["💡 1C интеграциясы", "📄 Цифрлық құжат айналымы", "💬 Тикет жүйесі", "📊 Аналитика"],
      },
      retail: {
        leftTitle: "Міндет",
        leftText:
          "Сатып алу геймификациясы арқылы лоялдылықты көтеретін интерактивті құрал жасау.",
        leftItems: [
          "Сатып алушыларды лоялдылық бағдарламасына тарту",
          "Қайталама сатып алуды ынталандыру",
          "Жетістіктер үшін нақты купондар беру",
        ],
        rightTitle: "Шешім",
        rightItems: [
          "Бір экожүйедегі 7 мобильді ойын",
          "Локациялар мен деңгейлері бар ойын картасы",
          "Лоялдылық бағдарламасымен интеграция",
          "Тиімділікті тікелей бақылау",
          "Тұрақты белсенділік аналитикасы",
        ],
        resultsTitle: "Нәтижелер",
        results: [
          "Белсенді қатысушылар саны өсті",
          "Орташа чек пен сатып алу жиілігі артты",
          "Брендпен эмоциялық байланыс арнасы пайда болды",
          "Клиенттік маркетингтің тұрақты құралына айналды",
        ],
        chips: ["🎮 Геймификация", "📱 Мобильді ойындар", "🎁 Лоялдылық бағдарламасы", "📈 Аналитика"],
      },
      oil: {
        leftTitle: "Міндет",
        leftItems: [
          "Барлық терминалдарда мұнай өнімдері есебін орталықтандыру",
          "ЕО нормалары үшін биокомпоненттерді бақылау",
          "Қолмен енгізу мен қателерді азайту",
          "Өндірістік есептің ашықтығын арттыру",
        ],
        rightTitle: "Функционал",
        rightItems: [
          "Мұнай өнімдерінің құрамын real-time режимде есепке алу",
          "Анықтамалықтар: мұнай өнімдері, резервуарлар, терминалдар",
          "Биокомпоненттерді автоматты есептеу",
          "Сыртқы жүйелерден деректер импорт/экспорт",
          "Хабарламалар мен ескертулер жүйесі",
        ],
        resultsTitle: "Нәтижелер",
        results: [
          "Барлық объектілер бойынша орталық бақылау",
          "Қол операциялары мен есеп қателері азайды",
          "ЕО биоотын талаптарына толық сәйкестік",
          "Шешім Teboil цифрлық трансформациясының өзегіне айналды",
        ],
        chips: ["⚗️ Биокомпоненттер", "🔗 ERP интеграциясы", "📡 Real-time", "📋 ЕО нормалары"],
      },
      energy: {
        leftTitle: "Негізгі функционал",
        leftItems: [
          "Абоненттік база мен келісімшарттарды басқару",
          "Бухгалтериямен құжат айналымын автоматтандыру",
          "Объектілер бойынша егжей-тегжейлі есептер",
          "Телеметрия және есеп құрылғыларына қосылу",
          "Оқиғалар мен хабарламаларды бақылау",
        ],
        rightTitle: "Нәтижелер",
        rightItems: [
          "Тұтыну мен есеп айырысу бойынша толық ашықтық",
          "Құжат өңдеу уақытының қысқаруы",
          "Станциялар мен желілерді орталықтандырылған бақылау",
          "Жүктемені болжау сапасының жақсаруы",
        ],
        resultsTitle: "Нәтижелер",
        results: [],
        tailText:
          "ERP цифрлық трансформацияның негізіне айналды. Шешім масштабталады және энергия тұтынуды болжауға арналған ЖИ модульдерімен интеграцияға дайын.",
        chips: ["📟 Телеметрия", "🏭 ERP", "📊 Аналитика", "🤖 ЖИ-ready"],
      },
    },
  },
  modal: {
    title: "Жобаны талқылау",
    name: "Аты-жөні",
    phone: "Телефон",
    message: "Хабарлама",
    submit: "Өтінімді жіберу →",
    sending: "Жіберілуде...",
    close: "Жабу",
  },
  exitPopup: {
    text: "Тоқтаңыз! Бизнесіңізге тегін аудит алыңыз",
    primary: "Аудит алу",
    secondary: "Жоқ, рахмет",
  },
  floatingWhatsappLabel: "WhatsApp-қа жазу",
}

translations.EN = {
  ...translations.RU,
  announce: {
    text: "🇰🇿 Kazakhstan is launching an AI Ministry —",
    link: "See how this impacts your business →",
  },
  nav: {
    platform: "Platform",
    cases: "Cases",
    contact: "Contact us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: { rights: "© 2023 – 2026 ITMM. All rights reserved." },
  home: {
    ...translations.RU.home,
    hero: {
      ...translations.RU.home.hero,
      eyebrow: "🇰🇿 Kazakhstan IT company",
      title: ["A new way", "to build", "smart business."],
      subtitle:
        "ITMM implements AI and digital solutions so mid-size and enterprise companies grow faster and stay ahead.",
      casesButton: "View cases",
      discussButton: "Discuss project",
      cards: [
        { top: "Construction", bottom: "145M KZT saved/year" },
        { top: "Teboil · Oil & Gas", bottom: "80% automation" },
        { top: "Retail · Gamification", bottom: "7 games in year one" },
      ],
      logosLabel: "Delivered for leading companies",
    },
    counters: {
      items: [
        { label: "Projects delivered" },
        { label: "Years on the market" },
        { label: "Process automation" },
        { label: "Client savings per year" },
      ],
    },
    topCases: {
      ...translations.RU.home.topCases,
      eyebrow: "Top cases",
      title: ["Building great products", "should not be hard."],
      cards: [
        {
          label: "Construction",
          title:
            "Contractor portal — digital document flow for a top-5 Russian developer",
          subtitle: "4x faster approvals and 145M saved per year.",
        },
        {
          label: "Oil & Gas · Teboil",
          title: "Fuel accounting system — compliant with EU standards",
        },
        {
          label: "Retail",
          title: "Gaming ecosystem — gamification for a supermarket chain",
        },
      ],
    },
    approach: {
      ...translations.RU.home.approach,
      eyebrow: "Our approach",
      title: ["Building digital business", "should not be hard."],
      subtitle:
        "Our vision is to help businesses solve digitalization needs quickly with guaranteed outcomes.",
      items: [
        {
          title: "Better. Faster.",
          text: "VR and AR for operations and training help teams adopt technologies faster on real sites.",
        },
        {
          title: "Future-ready",
          text: "Flexible, reliable solutions built on open standards. AI integrates into processes from production to office workflows.",
        },
        {
          title: "Continuous protection",
          text: "AI cybersecurity protects data, prevents attacks, and keeps operations secure in the digital era.",
        },
      ],
    },
    highlights: {
      construction: {
        eyebrow: "Construction · Cross-platform",
        title: "A modern contractor management platform.",
        text: "A dedicated platform built for a large developer. Full replacement of paper workflows with 1C integration.",
        chips: ["faster", "acts/month", "savings"],
        button: "Read case →",
        mockTitle: "Contractor portal",
      },
      oil: {
        eyebrow: "Oil & Gas · Teboil",
        title: "See the difference between manual and digital accounting.",
        text: "Learn how to remove manual data entry, ensure EU compliance, and improve transparency across all terminals.",
        button: "Read case →",
        visualTitle: "Teboil · Fuel accounting",
        visualSub: "EU standards · Real-time monitoring",
      },
    },
    sectors: {
      ...translations.RU.home.sectors,
      eyebrow: "Industry expertise",
      title: ["Operate and scale", "in any sector."],
      subtitle:
        "Focus on what matters. Launch fast and scale to any business challenge.",
      items: [
        {
          title: "Construction",
          text: "Contractor portal, contract accounting, and payment tracking by site.",
        },
        {
          title: "Oil & Gas",
          text: "Fuel accounting, bio-components, and EU compliance.",
        },
        {
          title: "Retail",
          text: "Game mechanics, loyalty programs, and shopper analytics.",
        },
        {
          title: "Energy",
          text: "ERP, subscriber accounting, telemetry, and infrastructure monitoring.",
        },
      ],
      allCases: "All cases",
      discuss: "Discuss project →",
    },
    technologies: {
      title: "Technologies we use",
      subtitle: "We work with cutting-edge technologies of today and tomorrow",
      items: [
        {
          title: "Neural networks & AI",
          desc: "We design and implement AI solutions to automate business processes",
        },
        {
          title: "VR/AR design",
          desc: "We create interactive interfaces and training simulations",
        },
        {
          title: "Cybersecurity",
          desc: "We protect data and systems from modern threats",
        },
        {
          title: "Digital ecosystems",
          desc: "We architect complex digital environments and platforms",
        },
        {
          title: "Renewable energy",
          desc: "Digitalization of energy systems and climate solutions",
        },
        {
          title: "Robotics",
          desc: "Integrating robotic systems into production and logistics",
        },
        {
          title: "AI ethics",
          desc: "Auditing and developing standards for AI systems",
        },
        {
          title: "Digital twins",
          desc: "Building virtual replicas of assets to optimize operations",
        },
        {
          title: "Video Analytics Pipeline",
          desc: "Automated video stream analysis using computer vision and AI",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          id: "price",
          q: "How much does a project cost?",
          a: "Cost depends on your scope. Contact us and we will provide a free estimate.",
        },
        {
          id: "timeline",
          q: "What are the delivery timelines?",
          a: "MVP starts from 4 weeks. Enterprise systems start from 3 months. Timelines are fixed in the contract.",
        },
        {
          id: "small-business",
          q: "Do you work with small businesses?",
          a: "Our core focus is mid-size and enterprise, but we are open to discuss any project.",
        },
        {
          id: "geography",
          q: "Do you only operate in Kazakhstan?",
          a: "Kazakhstan is our priority, but we have experience with Russian and international companies (Teboil).",
        },
        {
          id: "start",
          q: "How do we get started?",
          a: "Fill in the Contacts form or message us on WhatsApp — we respond within one hour.",
        },
      ],
    },
    finalCta: {
      title: "Shall we connect?",
      text: "Tell us about your business and we will shape a stronger digital path together.",
      button: "Contact us →",
    },
  },
  contact: {
    ...translations.RU.contact,
    tag: "Contacts",
    titleTop: "Let's",
    titleBottom: "connect.",
    subtitle:
      "Tell us about your business and we will shape a stronger solution together. We are always available.",
    projectTitle: "Tell us about your project",
    form: {
      ...translations.RU.contact.form,
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Company name",
      industry: "Industry",
      industryPlaceholder: "Select industry",
      industries: ["Construction", "Oil & Gas", "Retail", "Energy", "Other"],
      message: "Project details",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send request →",
      submitting: "Sending...",
      success: "Thank you! We will contact you shortly.",
      direct: "Or directly:",
      errorFallback: "Failed to submit request.",
      errorConnection: "Failed to submit request. Check your connection.",
    },
  },
  cases: {
    ...translations.RU.cases,
    tabs: [
      { id: "construction", label: "🏗️ Construction" },
      { id: "retail", label: "🛒 Retail" },
      { id: "oil", label: "🛢️ Oil & Gas" },
      { id: "energy", label: "⚡ Energy" },
    ],
    headers: {
      construction: {
        tag: "Construction",
        title: "Contractor portal for a construction company",
        subtitle:
          "A web platform for communication between a general contractor and hundreds of subcontractors. Full replacement of paper workflow with 1C integration.",
      },
      retail: {
        tag: "Retail",
        title: "Gaming ecosystem for a supermarket chain",
        subtitle:
          "A set of 7 mobile games in a loyalty program. Gamification increased engagement and purchase frequency.",
      },
      oil: {
        tag: "Oil & Gas",
        title: "Fuel accounting system for Teboil",
        subtitle:
          "A specialized platform for an international oil company. It automates fuel composition control and ensures EU compliance.",
      },
      energy: {
        tag: "Energy",
        title: "ERP system for an energy company",
        subtitle:
          "A multi-level ERP connecting commercial and technical processes from subscriber accounting to real-time equipment monitoring.",
      },
    },
    metrics: {
      construction: [
        { value: "4×", label: "faster approvals" },
        { value: "2×", label: "faster payments" },
        { value: "1000+", label: "acts monthly online" },
        { value: "145M₽", label: "saved per year" },
      ],
      retail: [
        { value: "7", label: "games in year one" },
        { value: "↑↑", label: "engagement" },
        { value: "↑", label: "average basket" },
        { value: "∞", label: "long-term channel" },
      ],
      oil: [
        { value: "−30%", label: "processing time" },
        { value: "+20%", label: "accounting accuracy" },
        { value: "80%", label: "automation" },
        { value: "100%", label: "EU compliance" },
      ],
      energy: [
        { value: "100%", label: "data transparency" },
        { value: "↓↓", label: "reporting time" },
        { value: "↑", label: "efficiency" },
        { value: "AI", label: "AI readiness" },
      ],
    },
    cta: {
      title: "Have a similar challenge?",
      text: "Let's discuss your project and suggest the right solution.",
      button: "Contact us →",
    },
    details: {
      construction: {
        leftTitle: "Challenge",
        leftText:
          "Phone and email communication overloaded managers, delayed timelines, and lost approvals.",
        leftItems: [
          "Centralize communication with contractors",
          "Eliminate data loss and duplication",
          "Speed up document approvals and payments",
          "Reduce internal workload",
        ],
        rightTitle: "Key capabilities",
        rightItems: [
          "Full 1C sync: unified data and reporting",
          "Digital approvals for documents and extra work",
          "Chat and ticketing for communication",
          "Automatic contract status tracking",
          "Estimate adjustments directly in the portal",
        ],
        resultsTitle: "Results",
        results: [
          "Approval cycle reduced from 30 to 7 days",
          "200 contractors and 1000 contracts without headcount growth",
          "Faster construction cycles by removing delays",
          "System has been evolving successfully for 3+ years",
          "Economic impact: 145-152M RUB per year",
        ],
        chips: ["💡 1C integration", "📄 Digital workflow", "💬 Ticketing", "📊 Analytics"],
      },
      retail: {
        leftTitle: "Challenge",
        leftText:
          "Build an interactive product to improve loyalty through purchase gamification.",
        leftItems: [
          "Increase loyalty program engagement",
          "Drive repeat purchases",
          "Reward achievements with real coupons",
        ],
        rightTitle: "Solution",
        rightItems: [
          "7 mobile games in one ecosystem",
          "Game map with locations and levels",
          "Loyalty program integration",
          "Direct performance tracking",
          "Ongoing activity analytics",
        ],
        resultsTitle: "Results",
        results: [
          "Growth of active loyalty participants",
          "Higher average basket and purchase frequency",
          "A new emotional engagement channel with the brand",
          "Turned into an ongoing customer marketing instrument",
        ],
        chips: ["🎮 Gamification", "📱 Mobile games", "🎁 Loyalty program", "📈 Analytics"],
      },
      oil: {
        leftTitle: "Challenge",
        leftItems: [
          "Centralize fuel accounting across all terminals",
          "Control bio-components for EU standards",
          "Reduce manual entry and errors",
          "Increase transparency of production accounting",
        ],
        rightTitle: "Functional capabilities",
        rightItems: [
          "Real-time fuel composition accounting",
          "Reference catalogs for fuels, tanks, and terminals",
          "Automatic bio-component calculations",
          "Import/export with external systems",
          "Notification and alerting system",
        ],
        resultsTitle: "Results",
        results: [
          "Centralized control across all sites",
          "Less manual work and fewer accounting errors",
          "Full compliance with EU biofuel requirements",
          "Became the core of Teboil's digital transformation",
        ],
        chips: ["⚗️ Bio-components", "🔗 ERP integration", "📡 Real-time", "📋 EU standards"],
      },
      energy: {
        leftTitle: "Core functionality",
        leftItems: [
          "Subscriber and contract management",
          "Automated document flow with accounting",
          "Detailed reporting by facility",
          "Telemetry and metering integration",
          "Incident control and notifications",
        ],
        rightTitle: "Results",
        rightItems: [
          "Full transparency in consumption and billing",
          "Reduced document processing time",
          "Centralized control over stations and networks",
          "Improved load forecasting quality",
        ],
        resultsTitle: "Results",
        results: [],
        tailText:
          "ERP became the foundation of digital transformation. The solution is scalable and ready for AI module integration to forecast energy consumption.",
        chips: ["📟 Telemetry", "🏭 ERP", "📊 Analytics", "🤖 AI-ready"],
      },
    },
  },
  modal: {
    title: "Discuss project",
    name: "Name",
    phone: "Phone",
    message: "Message",
    submit: "Send request →",
    sending: "Sending...",
    close: "Close",
  },
  exitPopup: {
    text: "Wait! Get a free audit of your business",
    primary: "Get audit",
    secondary: "No, thanks",
  },
  floatingWhatsappLabel: "Message on WhatsApp",
}
