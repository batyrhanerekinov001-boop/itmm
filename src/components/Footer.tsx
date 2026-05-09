import type { Translations } from "../i18n/translations"

type Props = {
  t: Translations
}

export function Footer({ t }: Props) {
  return (
    <footer>
      <div className="footer-logo">
        IT<span>MM</span>
      </div>
      <div>+7 701 877 1414 · itmm.kz</div>
      <div>{t.footer.rights}</div>
    </footer>
  )
}
