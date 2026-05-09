import type { Translations } from "../../i18n/translations"

type Props = {
  t: Translations
}

export function EnergyCase({ t }: Props) {
  const data = t.cases.details.energy

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

      <p
        style={{
          color: "var(--sub)",
          fontSize: 15,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {data.tailText}
      </p>
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
