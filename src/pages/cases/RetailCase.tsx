import { useLanguage } from "../../hooks/useLanguage"

export function RetailCase() {
  const { t } = useLanguage()
  const data = t.cases.details.retail

  return (
    <>
      <div className="case-two-col">
        <div>
          <div className="col-head">{data.leftTitle}</div>
          <p
            style={{
              color: "var(--sub)",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {data.leftText}
          </p>
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

