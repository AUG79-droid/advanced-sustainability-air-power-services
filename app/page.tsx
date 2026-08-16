"use client";
/* eslint-disable @next/next/no-img-element -- local course artwork is already optimised */
import { useEffect, useState } from "react";
import { bilingualModules } from "./course-data-expanded";
import type { LocalText } from "./course-data-bilingual";
import { extendedTheory } from "./extended-theory";
import "./visuals.css";
type Lang = "es" | "en";
type View =
  | "cover"
  | "lesson"
  | "briefing"
  | "case"
  | "activity"
  | "lab"
  | "references"
  | "quiz";
type SavedProgress = {
  done: number[];
  visited: string[];
  answers: Record<string, number>;
};
const STORAGE_KEY = "air-power-sustainability-v15";
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
    [done, setDone] = useState<number[]>([]),
    [visited, setVisited] = useState<string[]>([]),
    [ready, setReady] = useState(false);
  const m = bilingualModules[mid - 1];
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedProgress;
        setDone(parsed.done || []);
        setVisited(parsed.visited || []);
        setAnswers(parsed.answers || {});
      } else {
        const legacy = localStorage.getItem("esap-done");
        if (legacy) setDone(JSON.parse(legacy));
      }
    } finally {
      setReady(true);
    }
  }, []);
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ done, visited, answers } satisfies SavedProgress),
    );
  }, [done, visited, answers, ready]);
  const visit = (v: View, i = 0, moduleId = mid) => {
    if (v === "cover") return;
    const key = `${moduleId}:${v}:${i}`;
    setVisited((current) =>
      current.includes(key) ? current : [...current, key],
    );
  };
  const open = (id: number) => {
    setMid(id);
    setLid(0);
    setView("lesson");
    visit("lesson", 0, id);
    scrollTo(0, 0);
  };
  const go = (v: View, i = 0) => {
    setView(v);
    setLid(i);
    visit(v, i);
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const next = () => {
    if (view === "lesson" && lid < m.lessons.length - 1) go("lesson", lid + 1);
    else if (view === "lesson") go("case");
    else if (view === "case") go("activity");
    else if (view === "activity") go("lab");
    else if (view === "lab") go("references");
    else if (view === "references") go("quiz");
    else {
      const score = m.questions.filter(
        (q, i) => answers[`${mid}-${i}`] === q.answer,
      ).length;
      if (score / m.questions.length < 0.8) return;
      const d = [...new Set([...done, mid])];
      setDone(d);
      if (mid < bilingualModules.length) open(mid + 1);
      else setView("cover");
    }
  };
  const steps = [
    ...m.lessons.map((x, i) => ({
      v: "lesson" as View,
      i,
      t: tx(x.title, lang),
      d: "45–60 min",
    })),
    { v: "case" as View, i: 0, t: tx(m.caseStudy.title, lang), d: "20 min" },
    {
      v: "activity" as View,
      i: 0,
      t: tx(m.activity.title, lang),
      d: "20 min",
    },
    { v: "lab" as View, i: 0, t: tx(m.lab.title, lang), d: "30 min" },
    {
      v: "references" as View,
      i: 0,
      t: lang === "es" ? "Fuentes y límites" : "Sources and limits",
      d: "10 min",
    },
    {
      v: "quiz" as View,
      i: 0,
      t: lang === "es" ? "Evaluación del módulo" : "Module knowledge check",
      d: "15 min",
    },
  ];
  const quizScore = m.questions.filter(
    (q, i) => answers[`${mid}-${i}`] === q.answer,
  ).length;
  const quizPassed = quizScore / m.questions.length >= 0.8;
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
              {Math.round((done.length / bilingualModules.length) * 100)}%
            </small>
            <i>
              <em
                style={{ width: `${(done.length / bilingualModules.length) * 100}%` }}
              />
            </i>
          </div>
        </div>
      </header>
      {view === "cover" ? (
        <Cover
          lang={lang}
          done={done}
          visited={visited}
          open={open}
          reset={() => {
            if (
              confirm(
                lang === "es"
                  ? "¿Reiniciar todo el progreso y las respuestas?"
                  : "Reset all progress and answers?",
              )
            ) {
              setDone([]);
              setVisited([]);
              setAnswers({});
              localStorage.removeItem(STORAGE_KEY);
            }
          }}
          exportProgress={() => {
            const blob = new Blob(
              [JSON.stringify({ done, visited, answers }, null, 2)],
              { type: "application/json" },
            );
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = "air-power-sustainability-progress.json";
            anchor.click();
            URL.revokeObjectURL(url);
          }}
        />
      ) : (
        <main>
          <aside className="rail">
            <button className="back-course" onClick={() => setView("cover")}>
              ← {lang === "es" ? "Todos los módulos" : "All modules"}
            </button>
            <p className="eyebrow">
              {lang === "es"
                ? `MÓDULO ${mid} DE ${bilingualModules.length}`
                : `MODULE ${mid} OF ${bilingualModules.length}`}
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
                      : s.v === "case"
                        ? "CASE"
                        : s.v === "activity"
                          ? "ACT"
                      : s.v === "lab"
                        ? "LAB"
                        : s.v === "references"
                          ? "REF"
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
            {view === "case" && <CaseStudy mid={mid} lang={lang} />}{" "}
            {view === "activity" && <Activity mid={mid} lang={lang} />}{" "}
            {view === "lab" && <Lab mid={mid} lang={lang} />}{" "}
            {view === "references" && <References mid={mid} lang={lang} />}{" "}
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
              <button
                className="primary"
                onClick={next}
                disabled={view === "quiz" && !quizPassed}
                title={
                  view === "quiz" && !quizPassed
                    ? lang === "es"
                      ? "Necesitas al menos un 80% para completar el módulo. Puedes cambiar tus respuestas."
                      : "You need at least 80% to complete the module. You can change your answers."
                    : undefined
                }
              >
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
  visited,
  open,
  reset,
  exportProgress,
}: {
  lang: Lang;
  done: number[];
  visited: string[];
  open: (n: number) => void;
  reset: () => void;
  exportProgress: () => void;
}) {
  const nextModule =
    bilingualModules.find((module) => !done.includes(module.id))?.id || 1;
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
              onClick={() => open(nextModule)}
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
              <dt>15</dt>
              <dd>{lang === "es" ? "Módulos" : "Modules"}</dd>
            </div>
            <div>
              <dt>20–24 h</dt>
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
            <b>12–14 h</b>
            <span>
              {lang === "es"
                ? "Teoría y profundizaciones"
                : "Theory and deep briefings"}
            </span>
          </li>
          <li>
            <b>7–8 h</b>
            <span>
              {lang === "es"
                ? "Casos, actividades y 15 laboratorios"
                : "Cases, activities and 15 applied labs"}
            </span>
          </li>
          <li>
            <b>2 h</b>
            <span>
              {lang === "es"
                ? "Evaluaciones y reflexión"
                : "Assessment and reflection"}
            </span>
          </li>
        </ol>
        <div className="resource-actions">
          <button onClick={exportProgress}>
            {lang === "es" ? "Exportar progreso" : "Export progress"}
          </button>
          <button onClick={reset}>
            {lang === "es" ? "Reiniciar curso" : "Reset course"}
          </button>
          <span>
            {done.length}/15 {lang === "es" ? "módulos" : "modules"} ·{" "}
            {visited.length} {lang === "es" ? "bloques visitados" : "blocks visited"}
          </span>
        </div>
      </section>
      <section className="route-heading">
        <div>
          <p className="eyebrow">
            {lang === "es" ? "ITINERARIO COMPLETO" : "COMPLETE LEARNING ROUTE"}
          </p>
          <h2>
            {lang === "es"
              ? "Quince módulos. Una decisión integrada."
              : "Fifteen modules. One integrated decision."}
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
                  : `${m.duration} · ${m.lessons.length + extendedTheory[m.theoryIndex].sections.length} ${lang === "es" ? "BLOQUES TEÓRICOS" : "THEORY BLOCKS"}`}
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
        <section className="objectives-panel" aria-label="Learning objectives">
          <strong>
            {lang === "es" ? "RESULTADOS DE APRENDIZAJE" : "LEARNING OUTCOMES"}
          </strong>
          <ul>
            {m.objectives.map((objective, index) => (
              <li key={index}>{tx(objective, lang)}</li>
            ))}
          </ul>
        </section>
      )}
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
            <p>{tx(extendedTheory[m.theoryIndex].title, lang)}</p>
          </div>
        </div>
        {extendedTheory[m.theoryIndex].sections
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

function CaseStudy({ mid, lang }: { mid: number; lang: Lang }) {
  const x = bilingualModules[mid - 1].caseStudy;
  return (
    <article className="lesson case-study">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · CASO DE DECISIÓN`
          : `MODULE ${mid} · DECISION CASE`}
      </p>
      <h1>{tx(x.title, lang)}</h1>
      <p className="lead">{tx(x.setting, lang)}</p>
      <section className="case-evidence">
        <strong>{lang === "es" ? "EXPEDIENTE DISPONIBLE" : "AVAILABLE DOSSIER"}</strong>
        <ul>
          {x.evidence.map((item, index) => (
            <li key={index}>{tx(item, lang)}</li>
          ))}
        </ul>
      </section>
      <div className="callout gold">
        <strong>{lang === "es" ? "ENCARGO" : "ASSIGNMENT"}</strong>
        <p>{tx(x.task, lang)}</p>
      </div>
      <label className="case-response">
        <b>{lang === "es" ? "Tu recomendación" : "Your recommendation"}</b>
        <textarea
          rows={9}
          defaultValue={
            typeof window !== "undefined"
              ? localStorage.getItem(`m${mid}-case`) || ""
              : ""
          }
          placeholder={
            lang === "es"
              ? "Decisión, evidencia, limitaciones, condiciones y responsable…"
              : "Decision, evidence, limitations, conditions and owner…"
          }
          onBlur={(event) =>
            localStorage.setItem(`m${mid}-case`, event.target.value)
          }
        />
      </label>
    </article>
  );
}

function Activity({ mid, lang }: { mid: number; lang: Lang }) {
  const x = bilingualModules[mid - 1].activity;
  return (
    <article className="lesson activity-sheet">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · ACTIVIDAD GUIADA`
          : `MODULE ${mid} · GUIDED ACTIVITY`}
      </p>
      <h1>{tx(x.title, lang)}</h1>
      <p className="lead">{tx(x.brief, lang)}</p>
      <ol className="activity-steps">
        {x.steps.map((step, index) => (
          <li key={index}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{tx(step, lang)}</p>
          </li>
        ))}
      </ol>
      <div className="deliverable-strip">
        <strong>{lang === "es" ? "ENTREGABLE" : "DELIVERABLE"}</strong>
        <p>{tx(x.deliverable, lang)}</p>
      </div>
      <label className="case-response">
        <b>{lang === "es" ? "Notas de la actividad" : "Activity notes"}</b>
        <textarea
          rows={8}
          defaultValue={
            typeof window !== "undefined"
              ? localStorage.getItem(`m${mid}-activity`) || ""
              : ""
          }
          placeholder={
            lang === "es"
              ? "Registra tus hallazgos y la evidencia pendiente…"
              : "Record findings and outstanding evidence…"
          }
          onBlur={(event) =>
            localStorage.setItem(`m${mid}-activity`, event.target.value)
          }
        />
      </label>
    </article>
  );
}

function References({ mid, lang }: { mid: number; lang: Lang }) {
  const courseModule = bilingualModules[mid - 1];
  return (
    <article className="lesson references-page">
      <p className="eyebrow">
        {lang === "es"
          ? `MÓDULO ${mid} · FUENTES Y LÍMITES`
          : `MODULE ${mid} · SOURCES AND LIMITS`}
      </p>
      <h1>{lang === "es" ? "Base de evidencia" : "Evidence base"}</h1>
      <p className="lead">
        {lang === "es"
          ? "Las fuentes se usan según su función. Las normas y documentos institucionales sostienen requisitos y métodos; los manuales y estudios aportan síntesis y casos. Toda cifra o regla debe comprobar edición, jurisdicción y aplicabilidad antes de usarse en una decisión real."
          : "Sources are used according to purpose. Standards and institutional documents support requirements and methods; textbooks and studies provide synthesis and cases. Check edition, jurisdiction and applicability before using any figure or rule in a real decision."}
      </p>
      <div className="source-audit">
        <strong>
          {lang === "es" ? "CÓMO SE TRATÓ EL CORPUS" : "HOW THE CORPUS WAS USED"}
        </strong>
        <p>
          {lang === "es"
            ? "Los 15 informes temáticos adjuntos se utilizaron como mapas de contenido, no como autoridad automática. La auditoría de sus 496 referencias (464 únicas) identificó 247 fuentes de credibilidad baja o muy baja y 267 referencias que debían sustituirse, eliminarse o limitarse a contexto. Las cinco obras técnicas adicionales se analizaron por alcance, actualidad y trazabilidad; el contenido final prioriza normas, autoridades, informes técnicos revisados y literatura académica, y señala cuándo una fuente histórica necesita actualización."
            : "The 15 supplied topic reports were used as content maps, not as automatic authority. The audit of their 496 reference occurrences (464 unique sources) identified 247 low or very-low credibility sources and 267 references requiring replacement, removal or context-only use. The five additional technical works were analysed for scope, currency and traceability; the final course prioritises standards, authorities, reviewed technical reports and academic literature, and flags historical sources that require updating."}
        </p>
      </div>
      <div className="evidence-protocol">
        <strong>{lang === "es" ? "PROTOCOLO DEL CURSO" : "COURSE PROTOCOL"}</strong>
        <ul>
          <li>
            {lang === "es"
              ? "Ninguna cifra sin año, unidad, perímetro y fuente trazable."
              : "No figure without year, unit, boundary and traceable source."}
          </li>
          <li>
            {lang === "es"
              ? "Ningún requisito sin jurisdicción, edición, vigencia y aplicabilidad."
              : "No requirement without jurisdiction, edition, validity and applicability."}
          </li>
          <li>
            {lang === "es"
              ? "Ninguna afirmación sin línea base, método, limitación y responsable."
              : "No claim without baseline, method, limitation and accountable owner."}
          </li>
        </ul>
      </div>
      <div className="reference-list">
        {courseModule.references.map((item, index) => (
          <article key={index}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{tx(item.kind, lang)}</small>
              <h2>{item.title}</h2>
              <p>{tx(item.note, lang)}</p>
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {lang === "es" ? "Abrir fuente oficial ↗" : "Open official source ↗"}
                </a>
              )}
            </div>
          </article>
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
        </b>{" "}
        <span>
          · {lang === "es" ? "mínimo 80%" : "80% required"} ·{" "}
          {score / qs.length >= 0.8
            ? lang === "es"
              ? "APROBADO"
              : "PASS"
            : lang === "es"
              ? "EN CURSO"
              : "IN PROGRESS"}
        </span>
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
