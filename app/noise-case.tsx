"use client";

import { useState } from "react";

type Lang = "es" | "en";

export function NoiseDecisionCase({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const rows: Array<[string, string, string]> = es
    ? [
        ["Pruebas de motor equivalentes", "40", "40"],
        ["Combustible medio por prueba", "250 litros", "230 litros"],
        ["Pruebas realizadas después de las 19:00", "6", "18"],
        ["Quejas registradas por ruido", "3", "14"],
      ]
    : [
        ["Comparable engine tests", "40", "40"],
        ["Average fuel used per test", "250 litres", "230 litres"],
        ["Tests carried out after 19:00", "6", "18"],
        ["Recorded noise complaints", "3", "14"],
      ];

  const options = es
    ? [
        "Sí. Decir que el programa es un éxito ambiental completo porque el combustible por prueba ha disminuido.",
        "No. Afirmar que no existe ninguna mejora porque las quejas han aumentado.",
        "No en esos términos. Comunicar únicamente el ahorro de combustible medido e investigar las pruebas vespertinas y las molestias antes de valorar el resultado global.",
      ]
    : [
        "Yes. Call the programme a complete environmental success because fuel use per test has fallen.",
        "No. State that there is no improvement at all because complaints have increased.",
        "Not as written. Report the measured fuel saving only and investigate evening testing and disturbance before assessing the overall outcome.",
      ];

  const changeAnswer = (index: number) => {
    setSelected(index);
    setChecked(false);
  };

  return (
    <article className="lesson noise-decision-case">
      <p className="eyebrow">
        {es ? "MÓDULO 2 · CASO DE DECISIÓN · 2 MINUTOS" : "MODULE 2 · DECISION CASE · 2 MINUTES"}
      </p>
      <h1>{es ? "¿Podemos decir que las pruebas de motor son ahora más sostenibles?" : "Can we say engine testing is now more sustainable?"}</h1>
      <p className="lead">
        {es
          ? "Un resultado positivo en consumo no basta para afirmar que el conjunto de la operación ha mejorado. Decide qué conclusión permiten los datos."
          : "A positive fuel result alone does not establish that the whole operation has improved. Decide which conclusion the evidence supports."}
      </p>

      <section className="noise-case-context" aria-label={es ? "Contexto del caso" : "Case context"}>
        <strong>{es ? "SITUACIÓN" : "SITUATION"}</strong>
        <p>
          {es
            ? "Caso ficticio. En una instalación de mantenimiento de Eurofighter se comparan dos periodos consecutivos de cuatro semanas. En cada periodo se han realizado 40 pruebas de motor equivalentes, con las mismas comprobaciones técnicas y requisitos de seguridad. El nuevo procedimiento elimina tiempo innecesario de funcionamiento del motor. Al mismo tiempo, por un cambio en la planificación del taller, aumentan las pruebas programadas después de las 19:00."
            : "Fictional case. At a Eurofighter maintenance facility, two consecutive four-week periods are compared. Each period includes 40 comparable engine tests, with the same technical checks and safety requirements. A revised procedure removes unnecessary engine-running time. At the same time, a workshop scheduling change increases the number of tests after 19:00."}
        </p>
        <p>
          {es
            ? "Un grupo de 20 viviendas está próximo a la zona de pruebas. El centro dispone de registros de consumo, horarios y quejas, pero todavía no ha medido cómo ha cambiado la exposición acústica en esas viviendas."
            : "Twenty homes are located near the test area. The facility has fuel, schedule and complaint records, but has not yet measured how noise exposure has changed at those homes."}
        </p>
      </section>

      <section className="noise-case-evidence" aria-label={es ? "Datos comparables" : "Comparable data"}>
        <strong>{es ? "LOS DATOS · MISMO NÚMERO DE PRUEBAS, CUATRO SEMANAS POR PERIODO" : "THE DATA · SAME TEST COUNT, FOUR WEEKS PER PERIOD"}</strong>
        <div className="noise-case-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">{es ? "Indicador" : "Indicator"}</th>
                <th scope="col">{es ? "Antes" : "Before"}</th>
                <th scope="col">{es ? "Después" : "After"}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, before, after]) => (
                <tr key={name}>
                  <th scope="row">{name}</th>
                  <td>{before}</td>
                  <td>{after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="noise-case-note">
          {es
            ? "Las 14 quejas son comunicaciones registradas, no necesariamente 14 vecinos distintos. El aumento no demuestra por sí solo cuál fue su causa."
            : "The 14 complaints are recorded reports, not necessarily 14 different residents. Their increase does not by itself establish the cause."}
        </p>
      </section>

      <section className="noise-case-task">
        <p className="noise-case-prompt">
          <strong>{es ? "TU DECISIÓN" : "YOUR DECISION"}</strong>
          {es
            ? " El equipo propone publicar: «El nuevo programa de pruebas de motor es un éxito ambiental completo». ¿Aprobarías esta afirmación?"
            : " The team proposes to publish: “The new engine-testing programme is a complete environmental success.” Would you approve this statement?"}
        </p>
        <fieldset>
          <legend>{es ? "Selecciona una opción." : "Select one option."}</legend>
          {options.map((option, i) => (
            <label
              key={i}
              className={
                "noise-case-option" +
                (selected === i ? " selected" : "") +
                (checked && i === 2 ? " correct" : "") +
                (checked && selected === i && i !== 2 ? " incorrect" : "")
              }
            >
              <input
                type="radio"
                name="module-2-noise-decision"
                value={i}
                checked={selected === i}
                onChange={() => changeAnswer(i)}
              />
              <span className="noise-case-option-letter">{String.fromCharCode(65 + i)}</span>
              <span>{option}</span>
            </label>
          ))}
        </fieldset>
        <div className="noise-case-actions">
          <button type="button" disabled={selected === null} onClick={() => setChecked(true)}>
            {es ? "Comprobar respuesta" : "Check answer"}
          </button>
          {checked && (
            <button type="button" className="noise-case-retry" onClick={() => { setSelected(null); setChecked(false); }}>
              {es ? "Volver a intentarlo" : "Try again"}
            </button>
          )}
        </div>
        {checked && (
          <div className={"noise-case-feedback " + (selected === 2 ? "is-correct" : "is-incorrect")} role="status" aria-live="polite">
            <strong>
              {selected === 2
                ? (es ? "Correcto. La opción C es la única respaldada por todos los datos." : "Correct. Option C is the only one supported by all the evidence.")
                : (es ? "Esta conclusión no está suficientemente justificada. La respuesta de referencia es la C." : "That conclusion is not sufficiently supported. The reference answer is C.")}
            </strong>
            <p>
              {es
                ? "Consumo: (250 − 230) ÷ 250 = 8 % menos por prueba; en 40 pruebas equivalentes supone 800 litros menos durante cuatro semanas. Sin embargo, las pruebas después de las 19:00 se han triplicado (de 6 a 18) y las quejas han pasado de 3 a 14. Por tanto, podemos informar del ahorro de combustible, pero no afirmar que ha mejorado el impacto global. Antes hay que revisar horarios, medir el ruido en las viviendas y analizar las quejas."
                : "Fuel: (250 − 230) ÷ 250 = 8% less per test; across 40 comparable tests, that is 800 fewer litres in four weeks. However, tests after 19:00 have tripled (from 6 to 18), and complaints have risen from 3 to 14. The fuel saving can be reported, but an overall improvement cannot yet be claimed. First review the schedule, measure noise at homes and investigate the complaints."}
            </p>
            <p className="noise-case-takeaway">
              {es
                ? "Idea clave: comunica lo que has medido; no amplíes la conclusión a impactos que todavía no has comprobado."
                : "Key takeaway: report what you measured; do not extend the claim to effects you have not yet verified."}
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
