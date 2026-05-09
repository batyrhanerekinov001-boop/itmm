import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
}

export function OilCase({ t }: Props) {
  const data = t.cases.details.oil

  return (
    <>
      <div className="case-two-col">
        <div>
          <div className="col-head">{data.leftTitle}</div>
          <ul className="ul-clean">
            {data.leftItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="col-head">{data.rightTitle}</div>
          <ul className="ul-clean">
            {data.rightItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-head">{data.resultsTitle}</div>
      <ul className="ul-clean">
        {data.results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="tech-chips">
        {data.chips.map((chip) => (
          <div className="tech-chip" key={chip}>
            {chip}
          </div>
        ))}
      </div>
    </>
  )
}
