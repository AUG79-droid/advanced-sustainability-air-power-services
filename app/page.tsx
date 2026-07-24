"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";

type View = "home" | "module" | "capstone" | "exam" | "resources" | "certificate";
type Question = { id: string; prompt: string; options: string[]; correct: number; feedback: string };
type Parsed = {
  lessons: Record<number, string>;
  checks: Record<number, Question[]>;
  final: Question[];
  capstone: string;
  toolkit: string;
  references: string;
};
type Progress = {
  done: number[];
  scores: Record<string, number>;
  labs: Record<string, Record<string, string>>;
  actions: string[];
  claim: string;
  rejection: string;
  capstoneDone: boolean;
  finalScore: number;
  finalPassed: boolean;
  name: string;
};

const EMPTY: Progress = {
  done: [], scores: {}, labs: {}, actions: [], claim: "", rejection: "",
  capstoneDone: false, finalScore: 0, finalPassed: false, name: "",
};
const STORE = "aps-advanced-sustainability-v1";

const modules = [
  { id: 1, code: "SYS", time: "80 min", accent: "#72d5bf", soft: "#dff7f0",
    title: "In-Service Systems, Lifecycle Boundaries and Decision Quality",
    q: "How can we decide what matters without drawing the system boundary too narrowly?",
    intro: "Frame comparable alternatives, choose a meaningful functional unit and diagnose lifecycle hotspots before selecting a solution.",
    lab: "Orion Boundary & Hotspot Canvas",
    prompts: ["Decision and credible alternatives", "Required service and functional unit", "Boundary and material exclusions", "Three potential lifecycle hotspots", "Safety, airworthiness, security and mission gates"] },
  { id: 2, code: "OPS", time: "100 min", accent: "#f0c364", soft: "#fff2cf",
    title: "Sustainable Flight Operations and Navigation",
    q: "Which operational levers reduce avoidable impact while protecting the authorised mission?",
    intro: "Separate mission demand from avoidable inefficiency, evaluate CCO/CDO and PBN, and calculate direct fuel and CO₂ effects.",
    lab: "Orion Sortie Profile Challenge",
    prompts: ["Comparable mission class", "Approved operational measure", "Baseline and activity data", "Direct CO₂ calculation and limitations", "Operational and mission constraints"] },
  { id: 3, code: "MRO", time: "110 min", accent: "#ff8a76", soft: "#ffe3dd",
    title: "Sustainable Maintenance, MRO and Material Support",
    q: "How can maintenance reduce its footprint and improve the performance it enables?",
    intro: "Follow physical work, prevent waste and repeat defects, control hazardous flows and balance environmental KPIs with technical outcomes.",
    lab: "MRO Hotspot Walkdown",
    prompts: ["Process and approved technical outcome", "Physical inputs and outputs", "Repeat work and failure demand", "Prevention opportunity", "Environmental KPI and technical guardrail"] },
  { id: 4, code: "DATA", time: "100 min", accent: "#8eb5ff", soft: "#e4edff",
    title: "Digital Solutions and Data-Driven In-Service Sustainability",
    q: "When does a prediction or dashboard become a verified sustainability outcome?",
    intro: "Build the causal chain from data to authorised action, control model risk and quantify physical benefits against a credible counterfactual.",
    lab: "Digital Use-Case Evidence Card",
    prompts: ["Decision problem and counterfactual", "Data → model → decision → action → outcome", "Assurance and authorisation controls", "Physical benefit metric", "False-positive, false-negative and rebound risks"] },
  { id: 5, code: "LIFE", time: "110 min", accent: "#c6a3ff", soft: "#efe5ff",
    title: "Upgrades, Life Extension, Retirement and Circularity",
    q: "How do we compare retrofit, extension, replacement and retirement without assuming the answer?",
    intro: "Treat retrofit as a lifecycle investment, compare the same service over the same horizon and preserve value through controlled circular routes.",
    lab: "Lifecycle Scenario Comparator",
    prompts: ["Common service requirement", "Extend, retrofit, replace and retire scenarios", "Embodied and in-service effects", "Traceability and circular value", "Break-even and sensitivity variables"] },
  { id: 6, code: "GOV", time: "100 min", accent: "#78d0ff", soft: "#dff4ff",
    title: "Governance, Measurement and In-Service Roadmapping",
    q: "How do we know what applies, what to measure and what we can credibly claim?",
    intro: "Separate civil and state-aircraft scope, govern KPIs, repair weak claims and build an owned, evidence-based roadmap.",
    lab: "In-Service Sustainability Roadmap",
    prompts: ["Priority action and accountable owner", "Applicability and decision boundary", "Governed KPI definition", "Target, milestone and review trigger", "Precise evidence-based claim"] },
];

const actions = [
  "Standardise post-flight fuel and mission-context data; test two approved profile improvements.",
  "Install hangar sub-metering and repair compressed-air/conditioning control losses.",
  "Redesign the solvent-cleaning process after technical and environmental validation.",
  "Pilot a component-health model with authorised decision rules and benefit verification.",
  "Create a repair/return and shelf-life control loop for selected high-value spares.",
  "Run a four-scenario retrofit/life-extension assessment for six aircraft.",
  "Define an end-of-life and parts-traceability data package.",
  "Publish a campaign claiming the Orion fleet is 'green' before results are available.",
];

function range(start: Element | null, stop: (e: Element) => boolean) {
  const box = document.createElement("div");
  let el = start?.nextElementSibling || null;
  while (el && !stop(el)) { box.appendChild(el.cloneNode(true)); el = el.nextElementSibling; }
  return box.innerHTML;
}

function questions(start: Element | null, heading: "H2" | "H3", after?: (e: Element) => boolean) {
  const list: Question[] = [];
  let el = start?.nextElementSibling || null;
  let active = !after;
  while (el && el.tagName !== "H1") {
    if (after?.(el)) { active = true; el = el.nextElementSibling; continue; }
    if (active && el.tagName === heading) {
      const id = el.id || `q-${list.length}`;
      let scan = el.nextElementSibling;
      const prompt = scan?.tagName === "P" ? scan.textContent?.trim() || "" : "";
      scan = scan?.nextElementSibling || null;
      const opts = scan?.tagName === "UL"
        ? Array.from(scan.querySelectorAll(":scope > li")).map(li => (li.textContent || "").replace(/^[A-D]\.\s*/, "").trim())
        : [];
      let answer = "", feedback = "";
      scan = scan?.nextElementSibling || null;
      while (scan && scan.tagName !== heading && scan.tagName !== "H1") {
        const text = scan.textContent?.trim() || "";
        if (/^Answer\s*:/i.test(text)) answer = text.replace(/^Answer\s*:/i, "").trim()[0] || "";
        if (/^Feedback\s*:/i.test(text)) feedback = text.replace(/^Feedback\s*:/i, "").trim();
        scan = scan.nextElementSibling;
      }
      if (prompt && opts.length && answer) list.push({ id, prompt, options: opts, correct: answer.toUpperCase().charCodeAt(0) - 65, feedback });
      el = scan; continue;
    }
    el = el.nextElementSibling;
  }
  return list;
}

function parse(raw: string): Parsed {
  const doc = new DOMParser().parseFromString(raw, "text/html");
  const lessons: Record<number, string> = {}, checks: Record<number, Question[]> = {};
  modules.forEach(m => {
    const start = Array.from(doc.querySelectorAll("h1")).find(h => (h.textContent || "").trim().startsWith(`Module ${m.id} |`)) || null;
    const check = (e: Element) => e.tagName === "H2" && /Module knowledge check/i.test(e.textContent || "");
    lessons[m.id] = range(start, e => e.tagName === "H1" || check(e));
    checks[m.id] = questions(start, "H3", check);
  });
  const cap = doc.querySelector("#integrated-capstone-orion-24-month-in-service-portfolio");
  const fin = doc.querySelector("#final-assessment-bank");
  const kit = doc.querySelector("#downloadable-toolkit---master-templates");
  const gloss = doc.querySelector("#glossary");
  return {
    lessons, checks, final: questions(fin, "H2"),
    capstone: range(cap, e => e.tagName === "H1"),
    toolkit: range(kit, e => e.tagName === "H1"),
    references: range(gloss, () => false),
  };
}

function Graphic({ accent = "#72d5bf", code = "APS" }) {
  return <div className="graphic" style={{ "--accent": accent } as CSSProperties}>
    <i className="ring r1" /><i className="ring r2" /><i className="route" />
    <div className="aircraft" /><span className="data d1">12 AC / SERVICE</span>
    <span className="data d2">{code} / EVIDENCE</span><span className="data d3">MISSION READY</span>
  </div>;
}

function Quiz({ items, label, best, complete }: { items: Question[]; label: string; best?: number; complete: (n: number) => void }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sent, setSent] = useState(false);
  const score = items.length ? Math.round(items.filter(q => answers[q.id] === q.correct).length / items.length * 100) : 0;
  if (!items.length) return <div className="loading">Loading assessment content…</div>;
  return <div className="quiz">
    <div className="section-head"><div><span className="eyebrow">Auto-graded assessment</span><h2>{label}</h2></div><div className="rule"><b>80%</b><span>required</span></div></div>
    {best !== undefined && <p className="best">Best recorded score: {best}%</p>}
    <div className="questions">{items.map((q, qi) => <fieldset key={q.id}>
      <legend><b>{String(qi + 1).padStart(2, "0")}</b>{q.prompt}</legend>
      {q.options.map((o, oi) => {
        const selected = answers[q.id] === oi, correct = sent && oi === q.correct, wrong = sent && selected && !correct;
        return <label className={`${selected ? "selected " : ""}${correct ? "correct " : ""}${wrong ? "wrong" : ""}`} key={o}>
          <input type="radio" name={q.id} disabled={sent} checked={selected} onChange={() => setAnswers(a => ({ ...a, [q.id]: oi }))} />
          <i>{String.fromCharCode(65 + oi)}</i><span>{o}</span>
        </label>;
      })}
      {sent && <p className={`feedback ${answers[q.id] === q.correct ? "ok" : "no"}`}>
        <b>{answers[q.id] === q.correct ? "Correct. " : `Correct answer: ${String.fromCharCode(65 + q.correct)}. `}</b>{q.feedback}
      </p>}
    </fieldset>)}</div>
    {!sent ? <button className="primary" disabled={Object.keys(answers).length !== items.length} onClick={() => { setSent(true); complete(score); }}>Submit answers</button>
      : <div className={`result ${score >= 80 ? "pass" : "retry"}`}><div><span>{score >= 80 ? "Passed" : "Not yet passed"}</span><b>{score}%</b><p>{score >= 80 ? "Completion requirement met." : "Review the feedback and try again. Retakes are unlimited."}</p></div><button className="secondary" onClick={() => { setAnswers({}); setSent(false); }}>Retake</button></div>}
  </div>;
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [active, setActive] = useState(1);
  const [tab, setTab] = useState<"learn" | "apply" | "check">("learn");
  const [content, setContent] = useState<Parsed | null>(null);
  const [contentError, setContentError] = useState("");
  const [progress, setProgress] = useState<Progress>(() => {
    if (typeof window === "undefined") return EMPTY;
    try {
      const saved = localStorage.getItem(STORE);
      return saved ? { ...EMPTY, ...JSON.parse(saved) } : EMPTY;
    } catch {
      return EMPTY;
    }
  });
  const [resourceTab, setResourceTab] = useState<"tools" | "refs" | "files">("tools");

  useEffect(() => {
    fetch("./course-master.html")
      .then(r => {
        if (!r.ok) throw new Error(`Course content request failed (${r.status})`);
        return r.text();
      })
      .then(h => {
        const parsed = parse(h);
        if (!parsed.lessons[1]) throw new Error("Course content could not be parsed");
        setContent(parsed);
      })
      .catch(error => {
        console.error(error);
        setContentError("The course theory could not be loaded. Please refresh the page. If the problem continues, report this message to the course owner.");
      });
  }, []);
  useEffect(() => { localStorage.setItem(STORE, JSON.stringify(progress)); }, [progress]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [view, active, tab]);

  const pct = useMemo(() => Math.round((progress.done.length + (progress.capstoneDone ? 1 : 0) + (progress.finalPassed ? 1 : 0)) / 8 * 100), [progress]);
  const patch = (p: Partial<Progress>) => setProgress(x => ({ ...x, ...p }));
  const open = (id: number, t: "learn" | "apply" | "check" = "learn") => { setActive(id); setTab(t); setView("module"); };
  const certificateReady = progress.done.length === 6 && progress.capstoneDone && progress.finalPassed;

  return <div>
    <a className="skip" href="#main">Skip to course content</a>
    <header>
      <button className="brand" onClick={() => setView("home")}><b>AP</b><span><strong>Sustainable Aviation &amp; Performance</strong><small>Air Power Services learning</small></span></button>
      <nav><button onClick={() => setView("home")}>Course</button><button onClick={() => setView("capstone")}>Capstone</button><button onClick={() => setView("exam")}>Final assessment</button><button onClick={() => setView("resources")}>Toolkit</button></nav>
      <button className="head-progress" onClick={() => setView("home")}>Progress <b>{pct}%</b></button>
    </header>
    <main id="main">
      {view === "home" && <>
        <section className="hero">
          <div className="hero-copy"><div className="pills"><span>Advanced specialisation</span><span>100% online</span><span>10–12 hours</span></div>
            <span className="eyebrow light">In-service sustainability academy</span>
            <h1>Advanced Sustainability <em>in Air Power Services</em></h1>
            <p>Make evidence-based operational, maintenance, digital and lifecycle decisions that improve environmental performance and resilience without compromising safety, airworthiness, security or mission readiness.</p>
            <div className="buttons"><button className="gold" onClick={() => open(modules.find(m => !progress.done.includes(m.id))?.id || 1)}>{progress.done.length ? "Resume course" : "Start the course"} →</button><button className="ghost" onClick={() => setView("resources")}>Explore the toolkit</button></div>
            <div className="metrics"><span><b>06</b> developed modules</span><span><b>30</b> module questions</span><span><b>07</b> decision tools</span></div>
          </div>
          <div className="hero-graphic"><Graphic /><div className="sequence"><i /> <span><small>Decision sequence</small><b>Gate → Evidence → Optimise → Verify</b></span></div></div>
        </section>
        <section className="status"><div className="donut" style={{ "--p": `${pct * 3.6}deg` } as CSSProperties}><span><b>{pct}%</b><small>complete</small></span></div><div><span className="eyebrow">Your learning record</span><h2>{progress.done.length ? `${progress.done.length} of 6 modules completed` : "Your course progress starts here"}</h2><p>Progress and lab responses are saved on this device. Pass all module checks, complete the Orion capstone and score at least 80% in the final assessment.</p></div><div className="steps"><span className={progress.done.length === 6 ? "done" : ""}>1 · Modules</span><span className={progress.capstoneDone ? "done" : ""}>2 · Capstone</span><span className={progress.finalPassed ? "done" : ""}>3 · Assessment</span></div></section>
        <section className="program"><div className="section-head"><div><span className="eyebrow">High-density curriculum</span><h2>Six modules. One connected decision system.</h2></div><p>Each module combines developed theory, an Orion scenario, a saved evidence lab and an auto-graded knowledge check.</p></div>
          <div className="module-grid">{modules.map(m => <article className="module-card" key={m.id} style={{ "--accent": m.accent, "--soft": m.soft } as CSSProperties}>
            <div className="module-art"><b>{String(m.id).padStart(2, "0")}</b><span>{m.code}</span><i /></div>
            <div className="module-copy"><div className="meta"><span>{m.time}</span><span>{progress.done.includes(m.id) ? "Completed" : "Open"}</span></div><h3>{m.title}</h3><p>{m.intro}</p><div><button onClick={() => open(m.id)}>{progress.done.includes(m.id) ? "Review module" : "Open module"} →</button>{progress.scores[`m${m.id}`] !== undefined && <small>Best {progress.scores[`m${m.id}`]}%</small>}</div></div>
          </article>)}</div>
        </section>
        <section className="orion"><div><span className="eyebrow light">Recurring applied case</span><h2>The Orion Support Unit</h2><p>Follow a fictitious twelve-aircraft support unit across operations, MRO, logistics, digital maintenance, retrofit and governance. Never enter classified, export-controlled or customer-sensitive information.</p></div><button className="gold" onClick={() => setView("capstone")}>View capstone →</button></section>
      </>}

      {view === "module" && <ModuleScreen m={modules[active - 1]} content={content} contentError={contentError} progress={progress} patch={patch} tab={tab} setTab={setTab} open={open} home={() => setView("home")} />}
      {view === "capstone" && <Capstone content={content} progress={progress} patch={patch} />}
      {view === "exam" && <div className="wide"><PageHero eyebrow="Summative assessment · 30 minutes" title="Final Decision-Quality Check" copy="Eighteen questions cover boundaries, operations, MRO, digital assurance, circularity and governance. A score of 80% is required." code={`${progress.done.length}/6 modules`} />
        {progress.done.length < 6 ? <Locked title="Complete all six module checks to unlock the final assessment." /> : <><Quiz label="Final assessment" items={content?.final || []} best={progress.finalScore || undefined} complete={score => patch({ finalScore: Math.max(progress.finalScore, score), finalPassed: progress.finalPassed || score >= 80 })} />{progress.finalPassed && <section className="award"><div><span className="eyebrow light">Assessment passed</span><h2>Final knowledge requirement complete.</h2><p>Complete the Orion capstone to unlock the certificate.</p></div><button className="gold" disabled={!certificateReady} onClick={() => setView("certificate")}>Open certificate →</button></section>}</>}
      </div>}
      {view === "resources" && <div className="wide"><PageHero eyebrow="Evidence resources" title="Toolkit, glossary and source library" copy="Reuse the decision canvases, check technical definitions and trace every public source supporting the course." code="22 references" />
        <div className="tabs resource-tabs"><button className={resourceTab === "tools" ? "active" : ""} onClick={() => setResourceTab("tools")}>7 decision tools</button><button className={resourceTab === "refs" ? "active" : ""} onClick={() => setResourceTab("refs")}>Glossary & references</button><button className={resourceTab === "files" ? "active" : ""} onClick={() => setResourceTab("files")}>Downloads</button></div>
        {resourceTab !== "files" ? <article className="prose resource" dangerouslySetInnerHTML={{ __html: resourceTab === "tools" ? content?.toolkit || "" : content?.references || "" }} /> : <div className="downloads"><a href="./downloads/Learner_Workbook.docx" download><b>DOCX</b><span><strong>Learner Workbook</strong><small>Six labs, capstone and claim check.</small></span>↓</a><a href="./downloads/Course_Master.docx" download><b>DOCX</b><span><strong>Complete Course Master</strong><small>Theory, question banks, glossary and sources.</small></span>↓</a></div>}
      </div>}
      {view === "certificate" && <Certificate ready={certificateReady} progress={progress} patch={patch} back={() => setView("home")} />}
    </main>
    <footer><strong>Advanced Sustainability in Air Power Services</strong><p>Training content does not replace approved maintenance data, operational procedures, airworthiness instructions, legal registers or corporate positions.</p></footer>
  </div>;
}

function PageHero({ eyebrow, title, copy, code }: { eyebrow: string; title: string; copy: string; code: string }) {
  return <section className="page-hero"><div><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div><b>{code}</b></section>;
}

function Locked({ title }: { title: string }) {
  return <section className="locked"><b>!</b><h2>{title}</h2><p>Modules can be completed in any order. Retakes are unlimited and the best score is retained.</p></section>;
}

function ModuleScreen({ m, content, contentError, progress, patch, tab, setTab, open, home }: { m: typeof modules[number]; content: Parsed | null; contentError: string; progress: Progress; patch: (p: Partial<Progress>) => void; tab: "learn" | "apply" | "check"; setTab: (t: "learn" | "apply" | "check") => void; open: (n: number) => void; home: () => void }) {
  const lab = progress.labs[`m${m.id}`] || {};
  const labDone = m.prompts.every((_, i) => (lab[`p${i}`] || "").trim().length > 2);
  const save = (key: string, value: string) => patch({ labs: { ...progress.labs, [`m${m.id}`]: { ...lab, [key]: value } } });
  return <div className="module-page" style={{ "--accent": m.accent, "--soft": m.soft } as CSSProperties}>
    <aside><button className="back" onClick={home}>← Course overview</button><span className="eyebrow">Module {String(m.id).padStart(2, "0")}</span><h2>{m.code} · {m.title}</h2><nav><button className={tab === "learn" ? "active" : ""} onClick={() => setTab("learn")}>01 · Learn</button><button className={tab === "apply" ? "active" : ""} onClick={() => setTab("apply")}>02 · Apply {labDone && "✓"}</button><button className={tab === "check" ? "active" : ""} onClick={() => setTab("check")}>03 · Check {progress.done.includes(m.id) && "✓"}</button></nav><div className="gate"><b>Non-negotiable gates</b><p>Safety · Airworthiness · Security · Mission requirements</p></div></aside>
    <div className="module-main"><section className="module-hero"><div><div className="pills"><span>{m.code}</span><span>{m.time}</span><span>Advanced module</span></div><h1>{m.title}</h1><p>{m.q}</p></div><Graphic accent={m.accent} code={m.code} /></section>
      {tab === "learn" && <section className="panel"><div className="decision"><b>Decision rule</b><p>Define the required service and pass mandatory gates before optimising environmental performance. A preferred technology is not a starting point.</p></div>{content ? <article className="prose" dangerouslySetInnerHTML={{ __html: content.lessons[m.id] }} /> : <div className="loading">{contentError || "Loading developed course theory…"}</div>}<div className="next"><span><small>Next step</small><b>Turn the theory into an Orion evidence card.</b></span><button className="primary" onClick={() => setTab("apply")}>Open the lab →</button></div></section>}
      {tab === "apply" && <section className="panel lab"><div className="section-head"><div><span className="eyebrow">Saved evidence lab</span><h2>{m.lab}</h2></div><p>Use fictional Orion data or approved non-sensitive information only. Responses remain on this device.</p></div>{m.prompts.map((p, i) => <label key={p}><span><b>{String(i + 1).padStart(2, "0")}</b>{p}</span><textarea rows={4} value={lab[`p${i}`] || ""} placeholder="Write a concise, evidence-based response…" onChange={e => save(`p${i}`, e.target.value)} /></label>)}<div className={`lab-end ${labDone ? "done" : ""}`}><span><b>{labDone ? "Lab complete" : "Complete all five evidence fields"}</b><small>Your responses are saved automatically.</small></span><button className="primary" disabled={!labDone} onClick={() => setTab("check")}>Continue to check →</button></div></section>}
      {tab === "check" && <Quiz label={`Module ${m.id} knowledge check`} items={content?.checks[m.id] || []} best={progress.scores[`m${m.id}`]} complete={score => patch({ scores: { ...progress.scores, [`m${m.id}`]: Math.max(progress.scores[`m${m.id}`] || 0, score) }, done: score >= 80 ? Array.from(new Set([...progress.done, m.id])).sort() : progress.done })} />}
      <div className="module-nav"><button disabled={m.id === 1} onClick={() => open(m.id - 1)}>← Previous</button><span>{m.id} / 6</span><button disabled={m.id === 6} onClick={() => open(m.id + 1)}>Next →</button></div>
    </div>
  </div>;
}

function Capstone({ content, progress, patch }: { content: Parsed | null; progress: Progress; patch: (p: Partial<Progress>) => void }) {
  const valid = progress.actions.length === 4 && progress.claim.trim().length > 20 && progress.rejection.trim().length > 20;
  const toggle = (a: string) => patch({ actions: progress.actions.includes(a) ? progress.actions.filter(x => x !== a) : progress.actions.length < 4 ? [...progress.actions, a] : progress.actions, capstoneDone: false });
  return <div className="wide"><PageHero eyebrow="Integrated capstone · 60 minutes" title="Orion 24-Month In-Service Portfolio" copy="Select and defend four actions that improve environmental and resource performance while maintaining required availability." code={`${progress.actions.length}/4 actions`} /><div className="cap-layout"><article className="prose source" dangerouslySetInnerHTML={{ __html: content?.capstone || "" }} /><section className="builder"><div className="section-head"><div><span className="eyebrow">Portfolio builder</span><h2>Choose four priority actions</h2></div></div><div className="actions">{actions.map((a, i) => <label className={progress.actions.includes(a) ? "selected" : ""} key={a}><input type="checkbox" checked={progress.actions.includes(a)} disabled={!progress.actions.includes(a) && progress.actions.length === 4} onChange={() => toggle(a)} /><b>{String(i + 1).padStart(2, "0")}</b><span>{a}</span></label>)}</div><label className="field"><span>Evidence-based portfolio claim</span><small>Include boundary, baseline, method, result or target, and a material limitation.</small><textarea rows={5} value={progress.claim} onChange={e => patch({ claim: e.target.value, capstoneDone: false })} /></label><label className="field"><span>Action or statement to reject — and the gate it fails</span><textarea rows={5} value={progress.rejection} onChange={e => patch({ rejection: e.target.value, capstoneDone: false })} /></label><div className={`lab-end ${progress.capstoneDone ? "done" : ""}`}><span><b>{progress.capstoneDone ? "Capstone complete" : "Submit the self-check"}</b><small>Four actions and two evidence responses are required.</small></span><button className="primary" disabled={!valid} onClick={() => patch({ capstoneDone: true })}>Complete capstone</button></div></section></div></div>;
}

function Certificate({ ready, progress, patch, back }: { ready: boolean; progress: Progress; patch: (p: Partial<Progress>) => void; back: () => void }) {
  if (!ready) return <div className="wide"><Locked title="The certificate unlocks after all modules, the capstone and final assessment are complete." /></div>;
  const date = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(new Date());
  return <div className="certificate-page"><div className="certificate-tools"><button className="secondary" onClick={back}>← Back</button><label>Name on certificate<input value={progress.name} placeholder="Enter learner name" onChange={e => patch({ name: e.target.value })} /></label><button className="primary" disabled={!progress.name.trim()} onClick={() => window.print()}>Print / save as PDF</button></div><section className="certificate"><div><span className="logo">AP</span><p>Sustainable Aviation &amp; Performance</p><span className="eyebrow">Certificate of completion</span><h1>Advanced Sustainability in Air Power Services</h1><small>This certificate is awarded to</small><strong>{progress.name || "Learner name"}</strong><p>for successfully completing the advanced 10–12 hour digital specialisation in evidence-based in-service sustainability decisions.</p><section><span><small>Completion date</small><b>{date}</b></span><span><small>Final assessment</small><b>{progress.finalScore}%</b></span><span><small>Format</small><b>100% online</b></span></section><em>Completion confirms participation in an internal learning activity. It is not a professional licence, delegated authority or airworthiness approval.</em></div></section></div>;
}
