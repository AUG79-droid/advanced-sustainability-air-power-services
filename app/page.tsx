"use client";
import { useEffect, useState } from "react";
import { bilingualModules, type LocalText } from "./course-data-bilingual";
import { extendedTheory } from "./extended-theory";
import "./visuals.css";
type Lang = "es" | "en";
type View = "cover" | "lesson" | "briefing" | "lab" | "quiz";
const tx = (v: LocalText | undefined, l: Lang) => v?.[l] || "";
const short = (m: (typeof bilingualModules)[number]) => m.shortTitle || m.title;
const promise = (m: (typeof bilingualModules)[number]) =>
  m.promise || m.subtitle || m.title;

export default function Home() {
  const [lang, setLang] = useState<Lang>("es"),
    [mid, setMid] = useState(1),
    [view, setView] = useState<View>("cover"),
    [lid, setLid] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({}),
    [done, setDone] = useState<number[]>([]);
  const m = bilingualModules[mid - 1];
  useEffect(() => {
    const x = localStorage.getItem("esap-done");
    if (x) setDone(JSON.parse(x));
  }, []);
  const open = (id: number) => {
    setMid(id);
    setLid(0);
    setView("lesson");
    scrollTo(0, 0);
  };
  const go = (v: View, i = 0) => {
    setView(v);
    setLid(i);
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const next = () => {
    if (view === "lesson" && lid < m.lessons.length - 1) go("lesson", lid + 1);
    else if (view === "lesson") go("lab");
    else if (view === "lab") go("quiz");
    else {
      const d = [...new Set([...done, mid])];
      setDone(d);
      localStorage.setItem("esap-done", JSON.stringify(d));
      mid < 8 ? open(mid + 1) : setView("cover");
    }
  };
  const steps = [
    ...m.lessons.map((x, i) => ({
      v: "lesson" as View,
      i,
      t: tx(x.title, lang),
      d: "45–60 min",
    })),
    { v: "lab" as View, i: 0, t: tx(m.lab.title, lang), d: "30 min" },
    {
      v: "quiz" as View,
      i: 0,
      t: lang === "es" ? "Evaluación del módulo" : "Module knowledge check",
      d: "15 min",
    },
  ];
  return (
    <div className="app digital-course">
      <header>
        <button className="brand" onClick={() => setView("cover")}>
          <span>AP</span>
          <b>Engineering Sustainable Air Power</b>
        </button>
        <div className="header-tools">
          <div className="language">
            <button
              className={lang === "es" ? "on" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <div className="header-progress">
            <small>
              {lang === "es" ? "PROGRESO" : "PROGRESS"}{" "}
              {Math.round((done.length / 8) * 100)}%
            </small>
            <i>
              <em style={{ width: `${(done.length / 8) * 100}%` }} />
            </i>
          </div>
        </div>
      </header>
      {view === "cover" ? (
        <Cover lang={lang} done={done} open={open} />
      ) : (
        <main>
          <aside className="rail">
            <button className="back-course" onClick={() => setView("cover")}>
              ← {lang === "es" ? "Todos los módulos" : "All modules"}
            </button>
            <p className="eyebrow">
              {lang === "es" ? `MÓDULO ${mid} DE 8` : `MODULE ${mid} OF 8`}
            </p>
            <h2>{tx(short(m), lang)}</h2>
            <nav>
              {steps.map((s, k) => (
                <button
                  key={k}
                  className={
                    view === s.v && (s.v !== "lesson" || lid === s.i)
                      ? "active"
                      : ""
                  }
                  onClick={() => go(s.v, s.i)}
                >
                  <span>
                    {s.v === "lesson"
                      ? `${mid}.${s.i + 1}`
                      : s.v === "lab"
                        ? "LAB"
                        : "QUIZ"}
                  </span>
                  <div>
                    <b>{s.t}</b>
                    <small>{s.d}</small>
                  </div>
                </button>
              ))}
            </nav>
          </aside>
          <section className="content">
            {view === "lesson" && <Lesson mid={mid} lid={lid} lang={lang} />}{" "}
            {view === "lab" && <Lab mid={mid} lang={lang} />}{" "}
            {view === "quiz" && (
              <Quiz
                mid={mid}
                lang={lang}
                answers={answers}
                setAnswers={setAnswers}
              />
            )}
            <div className="lesson-footer">
              <button className="secondary" onClick={() => setView("cover")}>
                {lang === "es" ? "Volver al programa" : "Back to syllabus"}
              </button>
              <button className="primary" onClick={next}>
                {view === "quiz"
                  ? lang === "es"
                    ? "Completar y continuar"
                    : "Complete and continue"
                  : lang === "es"
                    ? "Continuar"
                    : "Continue"}{" "}
                →
              </button>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

function Cover({
  lang,
  done,
  open,
}: {
  lang: Lang;
  done: number[];
  open: (n: number) => void;
}) {
  return (
    <main className="course-cover">
      <section className="cover-hero">
        <div className="cover-copy">
          <p className="eyebrow">
            AIR POWER SERVICES · ADVANCED DIGITAL COURSE
          </p>
          <h1>
            {lang === "es" ? (
              <>
                Ingeniería para un <em>Air Power</em> sostenible
              </>
            ) : (
              <>
                Engineering <em>Sustainable</em> Air Power
              </>
            )}
          </h1>
          <p className="cover-lead">
            {lang === "es"
              ? "De la física del vuelo a las decisiones ambientales en servicio. Aplicado a A400M, Eurofighter, mantenimiento y bases operativas."
              : "From flight physics to in-service environmental decisions. Applied to A400M, Eurofighter, maintenance and operational bases."}
          </p>
          <div className="cover-actions">
            <button
              className="cover-primary"
              onClick={() => open(done.length < 8 ? done.length + 1 : 1)}
            >
              {done.length
                ? lang === "es"
                  ? "Continuar el curso"
                  : "Continue course"
                : lang === "es"
                  ? "Comenzar el curso"
                  : "Begin course"}{" "}
              <span>→</span>
            </button>
          </div>
          <dl className="course-facts">
            <div>
              <dt>8</dt>
              <dd>{lang === "es" ? "Módulos" : "Modules"}</dd>
            </div>
            <div>
              <dt>8–10 h</dt>
              <dd>{lang === "es" ? "Duración" : "Duration"}</dd>
            </div>
            <div>
              <dt>ES / EN</dt>
              <dd>{lang === "es" ? "Idiomas" : "Languages"}</dd>
            </div>
          </dl>
        </div>
        <figure className="cover-art">
          <img
            src="/course/unique/hero-a400m-evidence-hangar.png"
            alt="Equipo técnico de Air Power trabajando en un hangar"
          />
          <figcaption>
            <span>SYSTEMS · EVIDENCE · DECISIONS</span>
            <p>
              {lang === "es"
                ? "El desempeño ambiental se diseña en todo el sistema, no en una única tecnología."
                : "Environmental performance is engineered across the system, not in one technology."}
            </p>
          </figcaption>
        </figure>
      </section>
      <section className="duration-proof">
        <div>
          <p className="eyebrow">
            {lang === "es" ? "DURACIÓN VERIFICABLE" : "VERIFIABLE DURATION"}
          </p>
          <h2>
            {lang === "es"
              ? "El tiempo está ligado a trabajo real"
              : "Time is tied to real work"}
          </h2>
        </div>
        <ol>
          <li>
            <b>3–4 h</b>
            <span>
              {lang === "es"
                ? "Teoría y profundizaciones"
                : "Theory and deep briefings"}
            </span>
          </li>
          <li>
            <b>4–5 h</b>
            <span>
              {lang === "es"
                ? "Ocho laboratorios aplicados"
                : "Eight applied labs"}
            </span>
          </li>
          <li>
            <b>1 h</b>
            <span>
              {lang === "es"
                ? "Evaluaciones y reflexión"
                : "Assessment and reflection"}
            </span>
          </li>
        </ol>
        <div className="resource-actions">
          <a href="/downloads/Course_Master.docx" download>
            {lang === "es"
              ? "Descargar manual ampliado"
              : "Download extended manual"}
          </a>
          <a href="/downloads/Learner_Workbook.docx" download>
            {lang === "es" ? "Descargar workbook" : "Download workbook"}
          </a>
        </div>
      </section>
      <section className="route-heading">
        <div>
          <p className="eyebrow">
            {lang === "es" ? "ITINERARIO COMPLETO" : "COMPLETE LEARNING ROUTE"}
          </p>
          <h2>
            {lang === "es"
              ? "Ocho módulos. Una decisión integrada."
              : "Eight modules. One integrated decision."}
          </h2>
        </div>
        <p>
          {lang === "es"
            ? "Cada módulo combina teoría, aplicación práctica y evaluación. Puedes abrirlos en cualquier orden."
            : "Every module combines theory, applied practice and assessment. Open them in any order."}
        </p>
      </section>
      <section className="module-grid">
        {bilingualModules.map((m) => (
          <article
            key={m.id}
            className={`available ${done.includes(m.id) ? "completed" : ""}`}
          >
            <span>{String(m.id).padStart(2, "0")}</span>
            <div>
              <small>
                {done.includes(m.id)
                  ? lang === "es"
                    ? "COMPLETADO"
                    : "COMPLETED"
                  : `${m.lessons.length + extendedTheory[m.id - 1].sections.length} ${lang === "es" ? "BLOQUES TEÓRICOS" : "THEORY BLOCKS"}`}
              </small>
              <h3>{tx(m.title, lang)}</h3>
              <p>{tx(promise(m), lang)}</p>
            </div>
            <button onClick={() => open(m.id)}>→</button>
          </article>
        ))}
      </section>
    </main>
  );
}

function Lesson({ mid, lid, lang }: { mid: number; lid: number; lang: Lang }) {
  const m = bilingualModules[mid - 1],
    l = m.lessons[lid];
  return (
    <article className="lesson">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · LECCIÓN ${mid}.${lid + 1}`
          : `MODULE ${mid} · LESSON ${mid}.${lid + 1}`}
      </p>
      <h1>{tx(l.title, lang)}</h1>
      <p className="lead">{tx(l.lead, lang)}</p>
      {lid === 0 && (
        <figure className="learning-visual">
          <div className="visual-frame">
            <img
              src={m.image}
              alt={m.imageAlt ? tx(m.imageAlt, lang) : tx(m.title, lang)}
            />
            <span>{tx(short(m), lang).toUpperCase()}</span>
          </div>
          <figcaption>{tx(promise(m), lang)}</figcaption>
        </figure>
      )}
      <div className="prose">
        {l.sections.map((s, i) => (
          <section key={i}>
            <h2>{tx(s.heading, lang)}</h2>
            {(s.paragraphs || (s.body ? [s.body] : [])).map((p, j) => (
              <p key={j}>{tx(p, lang)}</p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map((b, j) => (
                  <li key={j}>{tx(b, lang)}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <div className="embedded-depth-marker">
          <span>+</span>
          <div>
            <b>
              {lang === "es"
                ? "TEORÍA AVANZADA INTEGRADA"
                : "INTEGRATED ADVANCED THEORY"}
            </b>
            <p>{tx(extendedTheory[mid - 1].title, lang)}</p>
          </div>
        </div>
        {extendedTheory[mid - 1].sections
          .filter((_, index) => index % m.lessons.length === lid)
          .map((section, index) => (
            <section className="embedded-depth" key={`deep-${index}`}>
              <h2>{tx(section.heading, lang)}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{tx(paragraph, lang)}</p>
              ))}
              <div className="reflection-prompt">
                <strong>
                  {lang === "es" ? "PAUSA DE ANÁLISIS" : "ANALYSIS PAUSE"}
                </strong>
                <p>
                  {lang === "es"
                    ? "¿Qué dato, restricción o supuesto de tu entorno de trabajo podría cambiar esta conclusión? Anótalo antes de continuar."
                    : "Which data point, constraint or assumption in your working environment could change this conclusion? Record it before continuing."}
                </p>
              </div>
            </section>
          ))}
      </div>
    </article>
  );
}

function Briefing({ mid, lang }: { mid: number; lang: Lang }) {
  const briefing = extendedTheory[mid - 1];
  return (
    <article className="lesson deep-briefing">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · TEORÍA AVANZADA`
          : `MODULE ${mid} · ADVANCED THEORY`}
      </p>
      <h1>{tx(briefing.title, lang)}</h1>
      <p className="lead">
        {lang === "es"
          ? `Bloque de estudio en profundidad · ${briefing.duration}. Lee con atención los límites, ejemplos y reglas de decisión antes de realizar el laboratorio.`
          : `In-depth study block · ${briefing.duration}. Read the boundaries, examples and decision rules carefully before completing the lab.`}
      </p>
      <div className="study-time">
        <span>01</span>
        {lang === "es" ? "Lectura analítica" : "Analytical reading"}
        <span>02</span>
        {lang === "es" ? "Notas y reflexión" : "Notes and reflection"}
        <span>03</span>
        {lang === "es" ? "Aplicación al caso" : "Case application"}
      </div>
      <div className="prose">
        {briefing.sections.map((section, index) => (
          <section key={index}>
            <h2>{tx(section.heading, lang)}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{tx(paragraph, lang)}</p>
            ))}
            <div className="reflection-prompt">
              <strong>
                {lang === "es" ? "PAUSA DE ANÁLISIS" : "ANALYSIS PAUSE"}
              </strong>
              <p>
                {lang === "es"
                  ? "¿Qué dato, restricción o supuesto de tu entorno de trabajo podría cambiar esta conclusión? Anótalo antes de continuar."
                  : "Which data point, constraint or assumption in your working environment could change this conclusion? Record it before continuing."}
              </p>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function Lab({ mid, lang }: { mid: number; lang: Lang }) {
  const x = bilingualModules[mid - 1].lab;
  return (
    <article className="lesson">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · LABORATORIO APLICADO`
          : `MODULE ${mid} · APPLIED LAB`}
      </p>
      <h1>{tx(x.title, lang)}</h1>
      <p className="lead">{tx(x.brief, lang)}</p>
      <div className="callout gold">
        <strong>{lang === "es" ? "INSTRUCCIONES" : "INSTRUCTIONS"}</strong>
        <p>
          {lang === "es"
            ? "Completa el expediente con datos reales o representativos. Tus respuestas se guardan en este navegador."
            : "Complete the dossier with real or representative data. Your responses are saved in this browser."}
        </p>
      </div>
      <div className="lab">
        {x.fields.map((f, i) => (
          <label key={i}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{tx(f, lang)}</b>
            <textarea
              rows={3}
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`m${mid}-lab-${i}`) || ""
                  : ""
              }
              placeholder={
                lang === "es"
                  ? "Respuesta concreta y basada en evidencias…"
                  : "Specific, evidence-based response…"
              }
              onBlur={(e) =>
                localStorage.setItem(`m${mid}-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </article>
  );
}

function Quiz({
  mid,
  lang,
  answers,
  setAnswers,
}: {
  mid: number;
  lang: Lang;
  answers: Record<string, number>;
  setAnswers: (x: Record<string, number>) => void;
}) {
  const qs = bilingualModules[mid - 1].questions,
    score = qs.filter((q, i) => answers[`${mid}-${i}`] === q.answer).length;
  return (
    <article className="lesson">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · EVALUACIÓN`
          : `MODULE ${mid} · KNOWLEDGE CHECK`}
      </p>
      <h1>
        {lang === "es" ? "Comprueba lo aprendido" : "Check your understanding"}
      </h1>
      <p className="lead">
        {lang === "es"
          ? "Selecciona una respuesta y recibirás retroalimentación inmediata."
          : "Select one answer and receive immediate feedback."}
      </p>
      <div className="score-card">
        {lang === "es" ? "Puntuación actual" : "Current score"}:{" "}
        <b>
          {score}/{qs.length}
        </b>
      </div>
      <div className="quiz">
        {qs.map((q, i) => {
          const key = `${mid}-${i}`,
            a = answers[key];
          return (
            <fieldset key={key}>
              <legend>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {tx(q.q, lang)}
              </legend>
              {q.options.map((o, j) => {
                const c =
                  a === j
                    ? j === q.answer
                      ? "selected correct"
                      : "selected wrong"
                    : a !== undefined && j === q.answer
                      ? "correct"
                      : "";
                return (
                  <label key={j} className={c}>
                    <input
                      type="radio"
                      checked={a === j}
                      onChange={() => setAnswers({ ...answers, [key]: j })}
                    />
                    <i>{String.fromCharCode(65 + j)}</i>
                    {tx(o, lang)}
                  </label>
                );
              })}
              {a !== undefined && (
                <p className="feedback">
                  <b>
                    {a === q.answer
                      ? lang === "es"
                        ? "Correcto. "
                        : "Correct. "
                      : lang === "es"
                        ? "Revisa la respuesta. "
                        : "Review the answer. "}
                  </b>
                  {tx(q.feedback, lang)}
                </p>
              )}
            </fieldset>
          );
        })}
      </div>
    </article>
  );
}
