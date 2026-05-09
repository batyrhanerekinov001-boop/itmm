import { useLanguage } from "../hooks/useLanguage"

export function Footer() {
  const { t } = useLanguage()

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
