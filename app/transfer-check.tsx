"use client";

import { useState } from "react";
import { transferExercises } from "./masterclass-data";
import type { LocalText } from "./course-data-bilingual";

type Lang = "es" | "en";
const tx = (value: LocalText, lang: Lang) => value[lang];

export function TransferCheck({ mid, lid, lang }: { mid: number; lid: number; lang: Lang }) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const exercise = transferExercises[mid - 1]?.[lid];

  if (!exercise) return null;

  const total = exercise.questions.length;
  const completed = exercise.questions.every((_, index) => Number.isInteger(selected[index]));
  const score = exercise.questions.reduce(
    (count, question, index) => count + (selected[index] === question.correct ? 1 : 0), 0
  );

  return (
    <section className="transfer-selfcheck" aria-label={lang === "es" ? "Comprobación de aprendizaje" : "Learning self-check"}>
      <div className="transfer-selfcheck-heading">
        <strong>{lang === "es" ? "PON A PRUEBA TU DECISIÓN" : "CHECK YOUR DECISION"}</strong>
        <p>{tx(exercise.context, lang)}</p>
      </div>
      <div className="transfer-selfcheck-questions">
        {exercise.questions.map((question, questionIndex) => {
          const answer = selected[questionIndex];
          const correct = answer === question.correct;
          return (
            <fieldset className="transfer-selfcheck-question" key={questionIndex}>
              <legend>{tx(question.question, lang)}</legend>
              <div className="transfer-selfcheck-options">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className={
                    "transfer-selfcheck-option" +
                    (answer === optionIndex ? " is-selected" : "") +
                    (checked && question.correct === optionIndex ? " is-correct" : "") +
                    (checked && answer === optionIndex && !correct ? " is-incorrect" : "")
                  }>
                    <input
                      type="radio"
                      name={"transfer-" + mid + "-" + lid + "-" + questionIndex}
                      value={optionIndex}
                      checked={answer === optionIndex}
                      onChange={() => { setSelected((prev) => ({ ...prev, [questionIndex]: optionIndex })); setChecked(false); }}
                    />
                    <span className="transfer-selfcheck-letter" aria-hidden="true">{String.fromCharCode(65 + optionIndex)}</span>
                    <span>{tx(option, lang)}</span>
                  </label>
                ))}
              </div>
              {checked && (
                <div className={"transfer-selfcheck-feedback " + (correct ? "is-correct" : "is-incorrect")}>
                  <strong>
                    {correct
                      ? (lang === "es" ? "Correcto." : "Correct.")
                      : (lang === "es" ? "No es la mejor opción. Respuesta de referencia: " : "Not the best option. Reference answer: ") +
                        String.fromCharCode(65 + question.correct) + "."}
                  </strong>
                  <p>{tx(question.explanation, lang)}</p>
                </div>
              )}
            </fieldset>
          );
        })}
      </div>
      <div className="transfer-selfcheck-actions">
        <button type="button" disabled={!completed || checked} onClick={() => setChecked(true)}>
          {lang === "es" ? "Comprobar respuestas" : "Check answers"}
        </button>
        {checked && (
          <button className="transfer-selfcheck-retry" type="button" onClick={() => { setSelected({}); setChecked(false); }}>
            {lang === "es" ? "Volver a intentar" : "Try again"}
          </button>
        )}
        {!completed && (
          <small>{lang === "es" ? "Selecciona una opción en cada pregunta para comprobar tus respuestas." : "Select an option for each question before checking."}</small>
        )}
      </div>
      {checked && (
        <p className={"transfer-selfcheck-result " + (score === total ? "all-correct" : "needs-review")} role="status" aria-live="polite">
          {lang === "es"
            ? score + " de " + total + " respuestas correctas. " +
              (score === total ? "Has identificado los criterios de decisión." : "Revisa las explicaciones y vuelve a intentarlo.")
            : score + " out of " + total + " answers correct. " +
              (score === total ? "You have identified the decision criteria." : "Review the explanations and try again.")}
        </p>
      )}
    </section>
  );
}
