import type { CaseId } from "../types"
import type { Lang } from "../i18n/translations"

export type CaseData = {
  id: CaseId
  tag: string
  title: string
  subtitle: string
  metric: string
  description: string
  problem: string[]
  solution: string
  results: string[]
  images: string[]
  color: string
}

export const casesByLang: Record<Lang, CaseData[]> = {
  RU: [
    {
      id: "construction",
      tag: "Строительство",
      title: "Личный кабинет подрядчика",
      subtitle: "Цифровая платформа тендеров для крупного застройщика",
      metric: "145МР экономии/год",
      description:
        "Генподрядчик строил крупнейший торговый центр в стране. Закупки велись в Excel и почте — ручная переписка с каждым поставщиком, никакого контроля, высокий риск срыва сроков и финансовых потерь.",
      problem: [
        "Тендеры в Excel и почте — закупщик вёл переписку с каждым поставщиком вручную",
        "Невозможно контролировать закупки — риск финансовых потерь и срыва сроков",
        "Решения основывались на договорённостях без официальной фиксации",
        "Документы хранились в разных местах и форматах без единой базы",
        "Нет прозрачности выбора подрядчиков — всё зависело от человеческого фактора",
      ],
      solution:
        "Разработали единую платформу тендеров — витрину активных и завершённых закупок с личным кабинетом для поставщиков. Интеграция с 1С заказчика. Анонимность подрядчиков на этапе торгов. Простые механизмы запуска открытых и закрытых торгов.",
      results: [
        "Прозрачная логика выбора подрядчика — все предложения зафиксированы и открыты",
        "Цикл тендера сократился за счёт автоматизации решений",
        "Закупки планируются заранее и не тормозят строительство",
        "Исключено недобросовестное влияние на выбор поставщика",
        "Сохраняется полная история взаимодействий и документальная база",
      ],
      images: ["/cases/construction-1.png", "/cases/construction-2.png", "/cases/construction-3.png"],
      color: "g1",
    },
    {
      id: "oil",
      tag: "Нефтегаз",
      title: "Система учёта нефтепродуктов",
      subtitle: "Автоматизация контроля топлива для Teboil",
      metric: "Автоматизация 80%",
      description:
        "Международная нефтяная компания Teboil нуждалась в централизованном учёте нефтепродуктов на всех терминалах. Ключевое требование — соблюдение стандартов ЕС по содержанию биокомпонентов в топливе.",
      problem: [
        "Нет централизованного учёта на всех терминалах компании",
        "Невозможно контролировать объёмы биокомпонентов для соблюдения норм ЕС",
        "Большой объём ручного ввода данных и ошибки при обмене с внешними системами",
        "Низкая прозрачность производственного и отчётного учёта",
      ],
      solution:
        "Создали систему управления данными о нефтепродуктах с учётом состава в реальном времени. Автоматический расчёт биокомпонентов, управление справочниками танков и терминалов, импорт/экспорт данных, система уведомлений.",
      results: [
        "Централизованный контроль данных по всем объектам компании",
        "Снижение количества ручных операций и ошибок учёта",
        "Полное соответствие требованиям ЕС по контролю биотопливных норм",
        "Ускорение формирования отчётности и внутреннего контроля",
        "Готовность к масштабированию и интеграции с ERP системами",
      ],
      images: ["/cases/oil-1.png", "/cases/oil-2.png", "/cases/oil-3.png"],
      color: "g2",
    },
    {
      id: "retail",
      tag: "Ритейл",
      title: "Игровая экосистема",
      subtitle: "Геймификация программы лояльности для сети супермаркетов",
      metric: "7 игр за 1 год",
      description:
        "Крупная федеральная сеть супермаркетов хотела повысить лояльность покупателей и удержать их. Основная идея — сделать покупки увлекательными: пользователи играют, выигрывают реальные купоны и тратят их на товары.",
      problem: [
        "Низкая вовлечённость покупателей в программу лояльности",
        "Покупатели не возвращаются — нет эмоциональной связи с брендом",
        "Традиционные инструменты удержания не дают нужного эффекта",
      ],
      solution:
        "За год разработали 7 мобильных игр, объединённых в общую систему и встроенных в программу лояльности. Проект вырос в полноценную игровую экосистему с картой и локациями — пользователи перемещались, открывали уровни и получали бонусы.",
      results: [
        "Рост вовлечённости и числа активных участников программы лояльности",
        "Измеримое увеличение среднего чека и частоты покупок у игроков",
        "Новый эмоционально привлекательный канал взаимодействия с брендом",
        "Проект превратился из эксперимента в постоянный инструмент маркетинга",
      ],
      images: ["/cases/retail-1.png", "/cases/retail-2.png"],
      color: "g3",
    },
    {
      id: "energy",
      tag: "Энергетика",
      title: "ERP для энергетики",
      subtitle: "Цифровая трансформация крупного производителя энергии",
      metric: "100% прозрачность данных",
      description:
        "Крупный производитель тепловой и электрической энергии работал без единой системы — коммерческий и технический контуры были разрознены. Мы объединили всё в многоуровневую ERP.",
      problem: [
        "Нет единой системы учёта абонентов и договоров",
        "Ручной документооборот без интеграции с бухгалтерией",
        "Невозможно мониторить оборудование в реальном времени",
        "Нет прозрачности данных по потреблению и расчётам",
      ],
      solution:
        "Разработали ERP-систему объединившую: управление базой абонентов и договорами, автоматизацию документооборота, интеграцию с телеметрией и приборами учёта, мониторинг оборудования в реальном времени, систему уведомлений и контроль инцидентов.",
      results: [
        "Полная прозрачность данных по потреблению и расчётам",
        "Сокращение времени обработки документов и отчётов",
        "Централизованный контроль за состоянием станций и сетей",
        "Улучшение качества обслуживания и прогнозирования нагрузок",
        "Готовность к интеграции с ИИ-модулями для оптимизации энергопотребления",
      ],
      images: ["/cases/energy-1.png", "/cases/energy-2.png"],
      color: "g4",
    },
  ],
  KZ: [
    {
      id: "construction",
      tag: "Құрылыс",
      title: "Мердігердің жеке кабинеті",
      subtitle: "Ірі девелоперге арналған тендерлердің цифрлық платформасы",
      metric: "145МР үнем/жыл",
      description:
        "Бас мердігер елдегі ең ірі сауда орталығын салды. Сатып алулар Excel мен пошта арқылы жүрді — әр жеткізушімен қолмен хат алмасу, бақылаудың болмауы, мерзімнің бұзылуы мен қаржылық шығын қаупі жоғары болды.",
      problem: [
        "Тендерлер Excel мен поштада — сатып алушы әр жеткізушімен қолмен хат алысты",
        "Сатып алуды бақылау мүмкін емес — қаржылық шығын және мерзімнің бұзылу қаупі",
        "Шешімдер ресми бекітусіз ауызша келісімдерге сүйенді",
        "Құжаттар әртүрлі жерде және форматта сақталды, бірыңғай база болмады",
        "Мердігерді таңдауда ашықтық жоқ — бәрі адам факторына тәуелді болды",
      ],
      solution:
        "Бірыңғай тендер платформасын жасадық: белсенді және аяқталған сатып алулар витринасы, жеткізушілерге арналған жеке кабинет. Тапсырыс берушінің 1С жүйесімен интеграция. Сауда кезеңінде мердігерлердің анонимдігі. Ашық және жабық сауданы іске қосудың қарапайым механизмдері.",
      results: [
        "Мердігерді таңдаудың ашық логикасы — барлық ұсыныстар тіркелген және көрінеді",
        "Автоматтандыру есебінен тендер циклі қысқарды",
        "Сатып алулар алдын ала жоспарланып, құрылысқа кедергі келтірмейді",
        "Жеткізушіні таңдауға адал емес ықпал ету алынып тасталды",
        "Өзара әрекеттесулер тарихы және құжаттық база толық сақталады",
      ],
      images: ["/cases/construction-1.png", "/cases/construction-2.png", "/cases/construction-3.png"],
      color: "g1",
    },
    {
      id: "oil",
      tag: "Мұнай-газ",
      title: "Мұнай өнімдерін есепке алу жүйесі",
      subtitle: "Teboil үшін отын бақылауын автоматтандыру",
      metric: "80% автоматтандыру",
      description:
        "Teboil халықаралық мұнай компаниясына барлық терминалдар бойынша мұнай өнімдерін орталықтандырылған есепке алу қажет болды. Негізгі талап — отындағы биокомпоненттер құрамына қатысты ЕО стандарттарын сақтау.",
      problem: [
        "Компанияның барлық терминалдарында орталықтандырылған есепке алу жоқ",
        "ЕО нормаларын сақтау үшін биокомпонент көлемін бақылау мүмкін емес",
        "Деректерді қолмен енгізу көп және сыртқы жүйелермен алмасуда қателер болады",
        "Өндірістік және есептік есептің ашықтығы төмен",
      ],
      solution:
        "Құрамы нақты уақытта есептелетін мұнай өнімдері туралы деректерді басқару жүйесін жасадық. Биокомпоненттерді автоматты есептеу, резервуарлар мен терминалдар анықтамаларын басқару, импорт/экспорт, хабарландыру жүйесі.",
      results: [
        "Компанияның барлық нысандары бойынша деректерді орталықтандырылған бақылау",
        "Қолмен операциялар мен есеп қателерінің азаюы",
        "Биоотын нормаларын бақылау бойынша ЕО талаптарына толық сәйкестік",
        "Есептілікті қалыптастыру және ішкі бақылау жылдамдады",
        "Масштабтауға және ERP жүйелерімен интеграцияға дайындық",
      ],
      images: ["/cases/oil-1.png", "/cases/oil-2.png", "/cases/oil-3.png"],
      color: "g2",
    },
    {
      id: "retail",
      tag: "Бөлшек сауда",
      title: "Ойын экожүйесі",
      subtitle: "Супермаркеттер желісі үшін адалдық бағдарламасын геймификациялау",
      metric: "1 жылда 7 ойын",
      description:
        "Ірі федералды супермаркеттер желісі сатып алушылардың адалдығын арттырып, оларды ұстап қалғысы келді. Негізгі идея — сатып алуды қызықты ету: қолданушылар ойнап, нақты купондар ұтып алып, оларды тауарға жұмсайды.",
      problem: [
        "Адалдық бағдарламасына қатысу деңгейі төмен",
        "Сатып алушылар қайта келмейді — брендпен эмоционалды байланыс жоқ",
        "Дәстүрлі ұстап қалу құралдары қажетті нәтиже бермейді",
      ],
      solution:
        "Бір жыл ішінде 7 мобильді ойынды әзірледік: олар ортақ жүйеге біріктіріліп, адалдық бағдарламасына кіріктірілді. Жоба карта мен локациялары бар толық ойын экожүйесіне айналды — қолданушылар деңгейлерді ашып, бонус алды.",
      results: [
        "Адалдық бағдарламасындағы белсенді қатысушылар саны мен вовлечённость өсті",
        "Ойыншылардың орташа чегі және сатып алу жиілігі өлшенетін түрде артты",
        "Брендпен өзара әрекеттесудің жаңа эмоционалды тартымды арнасы пайда болды",
        "Жоба тәжірибеден тұрақты маркетинг құралына айналды",
      ],
      images: ["/cases/retail-1.png", "/cases/retail-2.png"],
      color: "g3",
    },
    {
      id: "energy",
      tag: "Энергетика",
      title: "Энергетикаға арналған ERP",
      subtitle: "Ірі энергия өндірушінің цифрлық трансформациясы",
      metric: "Деректердің 100% айқындығы",
      description:
        "Ірі жылу және электр энергиясын өндіруші компанияда бірыңғай жүйе болмады — коммерциялық және техникалық контурлар бөлек жұмыс істеді. Біз бәрін көпдеңгейлі ERP-ге біріктірдік.",
      problem: [
        "Абоненттер мен шарттарды есепке алудың бірыңғай жүйесі жоқ",
        "Бухгалтериямен интеграциясыз қолмен құжат айналымы",
        "Жабдықты нақты уақытта мониторингтеу мүмкін емес",
        "Тұтыну және есеп айырысу деректерінің ашықтығы жоқ",
      ],
      solution:
        "ERP жүйесін әзірледік: абонент базасы және шарттарды басқару, құжат айналымын автоматтандыру, телеметрия және есептеу құралдарымен интеграция, жабдықты нақты уақытта мониторингтеу, хабарландыру жүйесі және инциденттерді бақылау.",
      results: [
        "Тұтыну және есеп айырысу деректерінің толық айқындығы",
        "Құжаттарды өңдеу және есептілікті дайындау уақыты қысқарды",
        "Станциялар мен желілердің жағдайын орталықтандырылған бақылау",
        "Қызмет көрсету сапасы және жүктемені болжау жақсарды",
        "Энергия тұтынуды оңтайландыру үшін ИИ-модульдермен интеграцияға дайындық",
      ],
      images: ["/cases/energy-1.png", "/cases/energy-2.png"],
      color: "g4",
    },
  ],
  EN: [
    {
      id: "construction",
      tag: "Construction",
      title: "Contractor Portal",
      subtitle: "Digital tender platform for a large developer",
      metric: "145M₽ savings/year",
      description:
        "The general contractor was building the largest shopping mall in the country. Procurement ran through Excel and email: manual back-and-forth with each supplier, no control, high risk of delays and financial losses.",
      problem: [
        "Tenders were handled in Excel and email — the buyer negotiated with each supplier manually",
        "No way to control procurement — risk of financial losses and schedule slippage",
        "Decisions were based on informal agreements without formal records",
        "Documents were stored in different places and formats with no single source of truth",
        "No transparency in contractor selection — everything depended on human factors",
      ],
      solution:
        "We built a unified tender platform: a catalog of active and completed procurements with a supplier portal. Integration with the client’s 1C system. Contractor anonymity during the bidding stage. Simple flows for open and closed tenders.",
      results: [
        "Transparent contractor selection — all offers are recorded and visible",
        "Tender cycle shortened due to automated decisions",
        "Procurement is planned in advance and no longer blocks construction",
        "Unfair influence on supplier selection is eliminated",
        "Full interaction history and a complete document base are preserved",
      ],
      images: ["/cases/construction-1.png", "/cases/construction-2.png", "/cases/construction-3.png"],
      color: "g1",
    },
    {
      id: "oil",
      tag: "Oil & Gas",
      title: "Petroleum Products Accounting System",
      subtitle: "Fuel control automation for Teboil",
      metric: "80% automation",
      description:
        "International oil company Teboil needed centralized accounting of petroleum products across all terminals. A key requirement was compliance with EU standards for bio-component content in fuel.",
      problem: [
        "No centralized accounting across all company terminals",
        "No real-time control of bio-component volumes to meet EU requirements",
        "High volume of manual data entry and errors when exchanging with external systems",
        "Low transparency of production and reporting records",
      ],
      solution:
        "We built a real-time system to manage petroleum product data and composition. Automatic bio-component calculations, tank and terminal reference management, import/export, and notifications.",
      results: [
        "Centralized control of data across all company sites",
        "Fewer manual operations and accounting errors",
        "Full compliance with EU bio-fuel control requirements",
        "Faster reporting and internal control",
        "Ready for scaling and ERP integration",
      ],
      images: ["/cases/oil-1.png", "/cases/oil-2.png", "/cases/oil-3.png"],
      color: "g2",
    },
    {
      id: "retail",
      tag: "Retail",
      title: "Gaming Ecosystem",
      subtitle: "Loyalty program gamification for a supermarket chain",
      metric: "7 games in 1 year",
      description:
        "A large national supermarket chain wanted to improve customer loyalty and retention. The idea was to make shopping engaging: users play, win real coupons, and redeem them for products.",
      problem: [
        "Low engagement in the loyalty program",
        "Customers don’t return — no emotional bond with the brand",
        "Traditional retention tools didn’t deliver the required effect",
      ],
      solution:
        "In one year we delivered 7 mobile games unified into a single system and embedded into the loyalty program. The project grew into a full gaming ecosystem with a map and locations — users progressed, unlocked levels, and earned rewards.",
      results: [
        "Higher engagement and more active loyalty program participants",
        "Measurable increase in average basket size and purchase frequency among players",
        "A new emotionally attractive communication channel with the brand",
        "The project became a permanent marketing tool",
      ],
      images: ["/cases/retail-1.png", "/cases/retail-2.png"],
      color: "g3",
    },
    {
      id: "energy",
      tag: "Energy",
      title: "ERP for Energy",
      subtitle: "Digital transformation for a major energy producer",
      metric: "100% data transparency",
      description:
        "A major heat and electricity producer operated without a unified system — commercial and technical domains were disconnected. We consolidated everything into a multi-layer ERP.",
      problem: [
        "No single system for customer and contract accounting",
        "Manual document flow without accounting integration",
        "No real-time equipment monitoring",
        "No transparent data for consumption and settlements",
      ],
      solution:
        "We built an ERP that combines customer and contract management, document automation, telemetry and metering integration, real-time equipment monitoring, notifications, and incident control.",
      results: [
        "Full transparency of consumption and settlement data",
        "Reduced time for document processing and reporting",
        "Centralized monitoring of stations and networks",
        "Improved service quality and load forecasting",
        "Ready for AI-module integration to optimize energy consumption",
      ],
      images: ["/cases/energy-1.png", "/cases/energy-2.png"],
      color: "g4",
    },
  ],
}

export function getCases(lang: Lang) {
  return casesByLang[lang] ?? casesByLang.RU
}

export const caseTabsByLang: Record<Lang, Array<{ id: CaseId; label: string }>> = {
  RU: [
    { id: "construction", label: "🏗️ Строительство" },
    { id: "retail", label: "🛒 Ритейл" },
    { id: "oil", label: "🛢️ Нефтегаз" },
    { id: "energy", label: "⚡ Энергетика" },
  ],
  KZ: [
    { id: "construction", label: "🏗️ Құрылыс" },
    { id: "retail", label: "🛒 Бөлшек сауда" },
    { id: "oil", label: "🛢️ Мұнай-газ" },
    { id: "energy", label: "⚡ Энергетика" },
  ],
  EN: [
    { id: "construction", label: "🏗️ Construction" },
    { id: "retail", label: "🛒 Retail" },
    { id: "oil", label: "🛢️ Oil & Gas" },
    { id: "energy", label: "⚡ Energy" },
  ],
}

export function getCaseTabs(lang: Lang) {
  return caseTabsByLang[lang] ?? caseTabsByLang.RU
}
