import type { Translations } from "../i18n/translations"

type Props = {
  t: Translations
  onGoHome: () => void
}

export function AnnounceBar({ t, onGoHome }: Props) {
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
