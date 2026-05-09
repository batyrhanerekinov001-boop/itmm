type Props = {
  onNavigate: (page: "contact") => void
}

export function FinalCtaSection({ onNavigate }: Props) {
  return (
    <div className="dark-cta">
      <h2>Познакомимся?</h2>
      <p>
        Расскажите о вашем бизнесе — и мы вместе придумаем, как сделать его круче.
      </p>
      <button className="btn-white" onClick={() => onNavigate("contact")}>
        Написать нам →
      </button>
    </div>
  )
}

