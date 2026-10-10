"use client";

import { useState } from "react";
import { quickCaseData } from "./quick-cases-data";
import { practicePrompts } from "./quick-practice-data";

type Lang = "es" | "en";

export function QuickDecisionCase({ mid, lang, mode = "case" }: { mid: number; lang: Lang; mode?: "case" | "activity" | "lab" }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const scenario = quickCaseData[mid]?.[lang];
  const exercise = mode === "case" ? scenario : practicePrompts[mid]?.[mode]?.[lang];
  if (!exercise || !scenario) return null;

  const es = lang === "es";
  const correct = selected === exercise.correct;
  const choose = (index: number) => {
    setSelected(index);
    setChecked(false);
  };

  return (
    <article className="lesson noise-decision-case">
      <p className="eyebrow">
        {es
          ? "MÓDULO " + mid + (mode === "case" ? " · CASO DE DECISIÓN · 2 MINUTOS" : mode === "activity" ? " · ACTIVIDAD BREVE · 2 MINUTOS · OPCIONAL" : " · APLICACIÓN BREVE · 2 MINUTOS · OPCIONAL")
          : "MODULE " + mid + (mode === "case" ? " · DECISION CASE · 2 MINUTES" : mode === "activity" ? " · QUICK ACTIVITY · 2 MINUTES · OPTIONAL" : " · QUICK APPLICATION · 2 MINUTES · OPTIONAL")}
      </p>
      <h1>{exercise.title}</h1>
      <p className="lead">
        {es
          ? "Una decisión concreta con los datos del caso y corrección inmediata. Sin informes ni entregables."
          : "One clear decision using the case data, with immediate feedback. No reports or deliverables."}
      </p>
      <section className="noise-case-context" aria-label={es ? "Situación de partida" : "Background"}>
        <strong>{es ? "SITUACIÓN Y OBJETIVO" : "SITUATION AND OBJECTIVE"}</strong>
        <p>{scenario.context}</p>
      </section>

      <section className="noise-case-evidence" aria-label={es ? "Datos para decidir" : "Decision data"}>
        <strong>{es ? "DATOS DISPONIBLES" : "AVAILABLE DATA"}</strong>
        <div className="noise-case-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">{es ? "Indicador o condición" : "Indicator or condition"}</th>
                <th scope="col">{es ? "Dato" : "Evidence"}</th>
              </tr>
            </thead>
            <tbody>
              {scenario.facts.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="noise-case-note">
          {es
            ? "Escenario y cifras ficticios para practicar decisiones. No describen resultados reales de Airbus."
            : "Fictional scenario and figures for decision practice. They are not actual Airbus results."}
        </p>
      </section>

      <section className="noise-case-task">
        <p className="noise-case-prompt">
          <strong>{es ? "TU DECISIÓN" : "YOUR DECISION"}</strong>
          {exercise.question}
        </p>
        <fieldset>
          <legend>{es ? "Elige la alternativa mejor respaldada por los datos." : "Choose the alternative best supported by the data."}</legend>
          {exercise.options.map((option, index) => (
            <label
              key={index}
              className={
                "noise-case-option" +
                (selected === index ? " selected" : "") +
                (checked && index === exercise.correct ? " correct" : "") +
                (checked && selected === index && !correct ? " incorrect" : "")
              }
            >
              <input
                type="radio"
                name={"quick-" + mode + "-" + mid}
                value={index}
                checked={selected === index}
                onChange={() => choose(index)}
              />
              <span className="noise-case-option-letter">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
            </label>
          ))}
        </fieldset>

        <div className="noise-case-actions">
          <button type="button" disabled={selected === null || checked} onClick={() => setChecked(true)}>
            {es ? "Comprobar respuesta" : "Check answer"}
          </button>
          {checked && (
            <button
              type="button"
              className="noise-case-retry"
              onClick={() => { setSelected(null); setChecked(false); }}
            >
              {es ? "Volver a intentarlo" : "Try again"}
            </button>
          )}
        </div>

        {checked && (
          <div className={"noise-case-feedback " + (correct ? "is-correct" : "is-incorrect")} role="status" aria-live="polite">
            <strong>
              {correct
                ? (es ? "Correcto. Has elegido la conclusión respaldada por los datos." : "Correct. Your choice is supported by the data.")
                : (es ? "No es la opción más defendible. Respuesta de referencia: " : "Not the best-supported option. Reference answer: ") +
                  String.fromCharCode(65 + exercise.correct) + "."}
            </strong>
            <p>{exercise.explanation}</p>
            <p className="noise-case-takeaway">
              {es
                ? "Recuerda: una decisión técnica necesita evidencia suficiente y no puede comprometer la seguridad o la función operativa."
                : "Remember: technical decisions need sufficient evidence and must preserve safety and operational capability."}
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
