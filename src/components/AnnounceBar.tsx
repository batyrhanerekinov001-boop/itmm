type Props = {
  onGoHome: () => void
}

export function AnnounceBar({ onGoHome }: Props) {
  return (
    <div className="announce-bar">
      🇰🇿 Казахстан создаёт Министерство ИИ —{" "}
      <a
        onClick={onGoHome}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onGoHome()
        }}
      >
        Узнайте, как это влияет на ваш бизнес →
      </a>
    </div>
  )
}
