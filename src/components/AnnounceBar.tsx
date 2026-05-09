import { useLanguage } from "../hooks/useLanguage"

type Props = {
  onGoHome: () => void
}

export function AnnounceBar({ onGoHome }: Props) {
  const { t } = useLanguage()

  return (
    <div className="announce-bar">
      {t.announce.text}{" "}
      <a
        onClick={onGoHome}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onGoHome()
        }}
      >
        {t.announce.link}
      </a>
    </div>
  )
}
