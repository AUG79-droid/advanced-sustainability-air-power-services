"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";

type View = "home" | "module" | "capstone" | "exam" | "resources" | "certificate";
type Lang = "en" | "es";
type Question = { id: string; prompt: string; options: string[]; correct: number; feedback: string };
type Activity = {
  id: string; title: string; instruction: string; prompt: string;
  type: "single" | "multi" | "numeric" | "matching" | "open";
  options?: string[]; correct?: number[]; answer?: string; tolerance?: number;
  rows?: string[]; choices?: string[]; matches?: number[];
  feedback: string; model?: string;
};
type ToolField = { key: string; label: string; help: string; placeholder: string; min?: number };
type ToolConfig = {
  number: number; title: string; purpose: string; outcome: string; steps: string[];
  caseData: string[]; example: { field: string; answer: string }[]; fields: ToolField[];
};
type LessonBlock = { kind: "theory"; html: string } | { kind: "activity"; activity: Activity };
type Parsed = {
  lessons: Record<number, LessonBlock[]>;
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

const modulesEn = [
  { id: 1, code: "SYS", time: "80 min", accent: "#72d5bf", soft: "#dff7f0", image: "module-systems.webp",
    title: "In-Service Systems, Lifecycle Boundaries and Decision Quality",
    q: "How can we decide what matters without drawing the system boundary too narrowly?",
    intro: "Frame comparable alternatives, choose a meaningful functional unit and diagnose lifecycle hotspots before selecting a solution.",
    lab: "Orion Boundary & Hotspot Canvas",
    prompts: ["Decision and credible alternatives", "Required service and functional unit", "Boundary and material exclusions", "Three potential lifecycle hotspots", "Safety, airworthiness, security and mission gates"] },
  { id: 2, code: "OPS", time: "100 min", accent: "#f0c364", soft: "#fff2cf", image: "module-ops.webp",
    title: "Sustainable Flight Operations and Navigation",
    q: "Which operational levers reduce avoidable impact while protecting the authorised mission?",
    intro: "Separate mission demand from avoidable inefficiency, evaluate CCO/CDO and PBN, and calculate direct fuel and CO₂ effects.",
    lab: "Orion Sortie Profile Challenge",
    prompts: ["Comparable mission class", "Approved operational measure", "Baseline and activity data", "Direct CO₂ calculation and limitations", "Operational and mission constraints"] },
  { id: 3, code: "MRO", time: "110 min", accent: "#ff8a76", soft: "#ffe3dd", image: "module-mro.webp",
    title: "Sustainable Maintenance, MRO and Material Support",
    q: "How can maintenance reduce its footprint and improve the performance it enables?",
    intro: "Follow physical work, prevent waste and repeat defects, control hazardous flows and balance environmental KPIs with technical outcomes.",
    lab: "MRO Hotspot Walkdown",
    prompts: ["Process and approved technical outcome", "Physical inputs and outputs", "Repeat work and failure demand", "Prevention opportunity", "Environmental KPI and technical guardrail"] },
  { id: 4, code: "DATA", time: "100 min", accent: "#8eb5ff", soft: "#e4edff", image: "module-digital.webp",
    title: "Digital Solutions and Data-Driven In-Service Sustainability",
    q: "When does a prediction or dashboard become a verified sustainability outcome?",
    intro: "Build the causal chain from data to authorised action, control model risk and quantify physical benefits against a credible counterfactual.",
    lab: "Digital Use-Case Evidence Card",
    prompts: ["Decision problem and counterfactual", "Data → model → decision → action → outcome", "Assurance and authorisation controls", "Physical benefit metric", "False-positive, false-negative and rebound risks"] },
  { id: 5, code: "LIFE", time: "110 min", accent: "#c6a3ff", soft: "#efe5ff", image: "module-lifecycle.webp",
    title: "Upgrades, Life Extension, Retirement and Circularity",
    q: "How do we compare retrofit, extension, replacement and retirement without assuming the answer?",
    intro: "Treat retrofit as a lifecycle investment, compare the same service over the same horizon and preserve value through controlled circular routes.",
    lab: "Lifecycle Scenario Comparator",
    prompts: ["Common service requirement", "Extend, retrofit, replace and retire scenarios", "Embodied and in-service effects", "Traceability and circular value", "Break-even and sensitivity variables"] },
  { id: 6, code: "GOV", time: "100 min", accent: "#78d0ff", soft: "#dff4ff", image: "module-governance.webp",
    title: "Governance, Measurement and In-Service Roadmapping",
    q: "How do we know what applies, what to measure and what we can credibly claim?",
    intro: "Separate civil and state-aircraft scope, govern KPIs, repair weak claims and build an owned, evidence-based roadmap.",
    lab: "In-Service Sustainability Roadmap",
    prompts: ["Priority action and accountable owner", "Applicability and decision boundary", "Governed KPI definition", "Target, milestone and review trigger", "Precise evidence-based claim"] },
];

const modulesEs = modulesEn.map((m, index) => ({ ...m, ...[
  { title: "Sistemas en servicio, límites del ciclo de vida y calidad de decisión", q: "¿Cómo decidimos qué es material sin definir un límite demasiado estrecho?", intro: "Compara alternativas equivalentes, define una unidad funcional útil e identifica hotspots antes de seleccionar una solución.", lab: "Canvas de límites y hotspots de Orion" },
  { title: "Operaciones de vuelo y navegación sostenibles", q: "¿Qué palancas operacionales reducen impactos evitables sin comprometer la misión autorizada?", intro: "Separa la demanda de misión de la ineficiencia evitable, evalúa CCO, CDO y PBN y calcula efectos directos sobre combustible y CO₂.", lab: "Reto de perfil de vuelo Orion" },
  { title: "Mantenimiento sostenible, MRO y soporte de materiales", q: "¿Cómo puede el mantenimiento reducir su huella y mejorar el desempeño que habilita?", intro: "Sigue el trabajo físico, previene residuos y retrabajos, controla flujos peligrosos y equilibra indicadores ambientales y técnicos.", lab: "Walkdown de hotspots MRO" },
  { title: "Soluciones digitales y sostenibilidad basada en datos", q: "¿Cuándo una predicción o un panel se convierte en un resultado ambiental verificado?", intro: "Construye la cadena causal desde los datos hasta la acción autorizada y cuantifica beneficios físicos frente a un contrafactual creíble.", lab: "Ficha de evidencia del caso digital" },
  { title: "Modernización, extensión de vida, retirada y circularidad", q: "¿Cómo comparamos retrofit, extensión, sustitución y retirada sin presuponer la respuesta?", intro: "Compara el mismo servicio y horizonte, incorpora efectos de ciclo de vida y preserva valor mediante rutas circulares controladas.", lab: "Comparador de escenarios de ciclo de vida" },
  { title: "Gobernanza, medición y hoja de ruta en servicio", q: "¿Cómo sabemos qué aplica, qué debemos medir y qué podemos afirmar con rigor?", intro: "Distingue alcance civil y aeronaves de Estado, gobierna KPIs, repara afirmaciones débiles y construye una hoja de ruta basada en evidencia.", lab: "Hoja de ruta de sostenibilidad en servicio" },
][index] }));

const modules = modulesEn;

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

const toolsByModule: Record<number, ToolConfig[]> = {
  1: [{ number: 1, title: "Boundary and Hotspot Canvas", purpose: "Frame one decision before comparing environmental performance.", outcome: "A defensible comparison boundary and a prioritised hotspot hypothesis.",
    steps: ["State the decision and credible alternatives.", "Define the service both alternatives must deliver.", "Set lifecycle and organisational boundaries.", "Screen hotspots and mandatory gates."],
    caseData: ["Orion operates 12 aircraft.", "28 unscheduled component removals occurred last year; 11 showed no confirmed defect.", "Calendar-based removal is being compared with an approved condition-based decision process.", "Emergency logistics, sensor infrastructure and maintenance authorisation may change."],
    example: [{ field: "Functional unit", answer: "One mission-ready aircraft-hour delivered over a 24-month comparison period." }, { field: "Material exclusion", answer: "Unrelated office consumables, because no causal link to the maintenance decision has been identified." }],
    fields: [{ key: "decision", label: "Decision and alternatives", help: "Write a neutral question; do not assume the preferred solution.", placeholder: "Compare current calendar-based removal with…", min: 35 }, { key: "service", label: "Required service and functional unit", help: "Use the same quantified service for both alternatives.", placeholder: "One mission-ready aircraft-hour…", min: 25 }, { key: "boundary", label: "Boundary and exclusions", help: "Include changed maintenance, data, spares and logistics flows; justify exclusions.", placeholder: "Include… Exclude… because…", min: 45 }, { key: "hotspots", label: "Hotspot hypotheses", help: "Name at least three effects to test, not benefits to claim.", placeholder: "1. Premature removals… 2. Emergency freight…", min: 45 }, { key: "gates", label: "Mandatory gates", help: "State the approval or constraint that could stop the option.", placeholder: "Maintenance programme approval; airworthiness…", min: 30 }] }],
  2: [{ number: 2, title: "Operational Measure Evidence Card", purpose: "Test an operational measure against a comparable mission baseline.", outcome: "A bounded fuel/CO₂ estimate with operational limitations.",
    steps: ["Define a comparable mission class.", "Describe the approved measure and baseline.", "Calculate direct fuel and combustion CO₂.", "Record constraints and verification needs."],
    caseData: ["310 comparable annual flights.", "Approved profile trial saves an estimated 85 kg Jet-A1 per flight.", "Use 3.16 kg direct combustion CO₂ per kg fuel.", "Weather, ATC, mission and payload differences must be controlled."],
    example: [{ field: "Calculation", answer: "85 × 310 = 26,350 kg fuel; × 3.16 ÷ 1,000 = 83.3 t direct combustion CO₂/year." }],
    fields: [{ key: "mission", label: "Comparable mission class", help: "Specify route/mission, payload band and operating conditions.", placeholder: "Flights with…", min: 35 }, { key: "measure", label: "Measure and baseline", help: "Name what changes and what the counterfactual is.", placeholder: "Approved profile versus…", min: 35 }, { key: "calculation", label: "Fuel and CO₂ calculation", help: "Show formula, units and factor; label it direct combustion CO₂.", placeholder: "kg/flight × flights/year…", min: 35 }, { key: "limits", label: "Constraints and limitations", help: "Explain when the measure may be unavailable or the estimate invalid.", placeholder: "Not available when…", min: 40 }, { key: "verify", label: "Verification plan", help: "Define the data and comparison method needed after the trial.", placeholder: "Compare matched flights using…", min: 35 }] }],
  3: [{ number: 3, title: "MRO Hotspot Walkdown", purpose: "Follow a maintenance process physically and find avoidable material, energy and failure demand.", outcome: "One prioritised prevention action with an environmental KPI and technical guardrail.",
    steps: ["Choose one approved process and outcome.", "Map physical inputs and outputs.", "Identify repeat work and failure demand.", "Prioritise prevention before treatment."],
    caseData: ["Orion repeats cleaning after 8% of inspections.", "Conditioned-air doors remain open during parts movement.", "Solvent wipes enter mixed hazardous waste.", "Any process change requires material compatibility and maintenance approval."],
    example: [{ field: "Prevention action", answer: "Test a validated cleaning standard that removes the cause of repeat cleaning; do not merely change the waste container." }],
    fields: [{ key: "process", label: "Process and approved outcome", help: "Define start, finish and required technical result.", placeholder: "From… to…; acceptable outcome is…", min: 35 }, { key: "flows", label: "Physical inputs and outputs", help: "List energy, water, chemicals, parts, packaging, emissions and wastes.", placeholder: "Inputs… Outputs…", min: 45 }, { key: "failure", label: "Repeat work and failure demand", help: "Identify work created because the process did not succeed first time.", placeholder: "Repeat cleaning occurs when…", min: 35 }, { key: "prevention", label: "Prevention opportunity", help: "Address the cause before proposing recycling or treatment.", placeholder: "Prevent by… subject to…", min: 35 }, { key: "kpi", label: "KPI and technical guardrail", help: "Pair one physical-flow measure with a safety/quality measure.", placeholder: "g solvent per task; repeat-defect rate…", min: 30 }] }],
  4: [{ number: 4, title: "Digital Use-Case Evidence Card", purpose: "Prove how a digital output changes an authorised decision and a physical outcome.", outcome: "A complete causal chain with assurance controls and benefit verification.",
    steps: ["Define the decision and counterfactual.", "Build the data-to-outcome chain.", "Analyse false positives, false negatives and rebound.", "Verify a physical outcome, not dashboard activity."],
    caseData: ["A model targets 11 no-fault-found removals among 28 unscheduled removals.", "The model does not itself authorise continued operation.", "False negatives may affect reliability; false positives may create unnecessary work.", "Emergency shipments and premature removals are candidate physical outcomes."],
    example: [{ field: "Causal chain", answer: "Validated condition data → risk estimate → authorised maintainer decision → removal deferred or confirmed → fewer premature removals → reduced spares and emergency freight." }],
    fields: [{ key: "decision", label: "Decision and counterfactual", help: "Name the human/authorised decision and what happens without the tool.", placeholder: "The authorised decision is… Currently…", min: 40 }, { key: "chain", label: "Causal chain", help: "Complete: data → model → decision → action → technical outcome → environmental outcome.", placeholder: "Data… → model… → decision…", min: 60 }, { key: "controls", label: "Assurance and authorisation", help: "Include data quality, model performance, human oversight and approval.", placeholder: "Control by…", min: 40 }, { key: "risks", label: "Error and rebound risks", help: "Address false positives, false negatives and additional digital/resource demand.", placeholder: "False positive… False negative… Rebound…", min: 50 }, { key: "verify", label: "Physical benefit verification", help: "Choose baseline, outcome metric, period and attribution method.", placeholder: "Compare… using… over…", min: 45 }] }],
  5: [{ number: 5, title: "Lifecycle Scenario Comparator", purpose: "Compare extension, retrofit, replacement and retirement over the same delivered service.", outcome: "A conditional recommendation with break-even and uncertainty tests.",
    steps: ["Set one service requirement and horizon.", "Build four comparable scenarios.", "Include embodied, operational and transition effects.", "Test utilisation and break-even sensitivity."],
    caseData: ["Six aircraft may receive a retrofit and remain in service for six years.", "A replacement is estimated to use 14% less fuel but needs infrastructure and training.", "Retrofit saves 1.5% of 6,500 kg across 420 annual missions.", "Future annual utilisation is uncertain."],
    example: [{ field: "Sensitivity", answer: "At 420 missions/year the retrofit saves 40.95 t fuel/year; recalculate at low and high utilisation before comparing embodied effects." }],
    fields: [{ key: "service", label: "Common service and horizon", help: "All scenarios must provide the same mission/service over the same period.", placeholder: "Deliver… over six years…", min: 35 }, { key: "scenarios", label: "Four scenario definitions", help: "Describe extend, retrofit, replace and retire/mixed options neutrally.", placeholder: "Extend: … Retrofit: … Replace: … Mixed: …", min: 70 }, { key: "effects", label: "Lifecycle and transition effects", help: "Include fuel, maintenance, spares, embodiment, infrastructure, training and end-of-life.", placeholder: "Operational… Embodied… Transition…", min: 60 }, { key: "breakEven", label: "Break-even and sensitivity", help: "Show the key calculation and variables that could reverse the result.", placeholder: "At X missions… The result reverses if…", min: 45 }, { key: "recommendation", label: "Conditional recommendation", help: "State what evidence would support the decision and what remains unknown.", placeholder: "Prefer… provided that… Verify…", min: 45 }] }],
  6: [{ number: 6, title: "In-Service Roadmap", purpose: "Turn evidence-backed actions into an owned 24-month delivery plan.", outcome: "A governed action with baseline, KPI, milestones, risks and review trigger.",
    steps: ["Select one material action.", "Assign authority and accountability.", "Define baseline, KPI and target precisely.", "Set milestones, controls and review triggers."],
    caseData: ["Orion must select four actions for a 24-month action plan.", "Availability and mission requirements are mandatory gates.", "Every KPI needs owner, unit, boundary, frequency and source.", "A target is not a result and must not be communicated as one."],
    example: [{ field: "KPI", answer: "Emergency shipments per 100 component removals; Orion component family; monthly; logistics system; owner: Support Chain Lead." }],
    fields: [{ key: "action", label: "Priority action and owner", help: "Use a named accountable role with authority to act.", placeholder: "Action… Accountable role…", min: 35 }, { key: "baseline", label: "Baseline and applicability", help: "State period, boundary and why the method applies.", placeholder: "2025 baseline… applies because…", min: 40 }, { key: "kpi", label: "Governed KPI definition", help: "Include numerator, denominator, unit, source, frequency and owner.", placeholder: "Metric per… Source… Monthly…", min: 55 }, { key: "target", label: "Target and milestones", help: "Separate a future target from achieved performance.", placeholder: "Target by month 24… M6… M12…", min: 45 }, { key: "risk", label: "Risk, control and review trigger", help: "Define when the action must stop, change or be escalated.", placeholder: "Risk… Control… Review if…", min: 45 }] },
    { number: 7, title: "Sustainability Claim Check", purpose: "Prevent an environmental statement from exceeding its evidence.", outcome: "A precise claim with boundary, baseline, method and visible limitations.",
    steps: ["Write the proposed claim verbatim.", "Check baseline, boundary and evidence type.", "Screen attribution, trade-offs and prohibited ambiguity.", "Repair the claim before approval."],
    caseData: ["Pilot data show 25% fewer emergency shipments for one component family.", "No total fleet-emissions calculation exists.", "Associated logistics CO₂e has not yet been verified.", "The phrase ‘green fleet’ is unsupported."],
    example: [{ field: "Repaired claim", answer: "During the defined pilot, emergency shipments for the selected component family fell by 25% versus the stated baseline. This is not a total fleet-emissions result; associated logistics CO₂e remains to be verified." }],
    fields: [{ key: "original", label: "Original proposed claim", help: "Record the exact wording before editing.", placeholder: "Our digital twin…", min: 20 }, { key: "evidence", label: "Baseline, boundary and evidence", help: "Distinguish measured, modelled and assumed values.", placeholder: "Baseline… Boundary… Measured…", min: 50 }, { key: "tradeoffs", label: "Attribution and trade-off check", help: "Explain other causes, displaced effects and material limitations.", placeholder: "Cannot attribute solely because…", min: 40 }, { key: "repair", label: "Repaired claim", help: "Use precise subject, comparison, result and visible limitation; avoid green/clean/zero/sustainable unless defined.", placeholder: "During the defined pilot…", min: 60 }, { key: "approval", label: "Evidence owner and approval route", help: "Name who verifies the data and who approves communication.", placeholder: "Evidence owner… Approval by…", min: 30 }] }]
};

const toolEsCopy: Record<number, { title: string; purpose: string; outcome: string; steps: string[]; caseData: string[] }> = {
  1:{title:"Canvas de límites y hotspots",purpose:"Define una decisión antes de comparar su desempeño ambiental.",outcome:"Un límite de comparación defendible y una hipótesis priorizada de hotspots.",steps:["Formula la decisión y alternativas creíbles.","Define el servicio común.","Establece límites y exclusiones justificadas.","Identifica hotspots y condiciones obligatorias."],caseData:["Orion opera 12 aeronaves.","Hubo 28 retiradas no programadas; 11 sin defecto confirmado.","Se compara la retirada por calendario con una decisión aprobada basada en condición.","Pueden cambiar sensores, logística y autorizaciones."]},
  2:{title:"Ficha de evidencia de una medida operacional",purpose:"Contrasta una medida con una línea base de misión comparable.",outcome:"Una estimación acotada de combustible y CO₂ con limitaciones operacionales.",steps:["Define una clase de misión comparable.","Describe medida y línea base.","Calcula combustible y CO₂ directo.","Registra restricciones y verificación."],caseData:["310 vuelos comparables al año.","El perfil aprobado ahorra 85 kg de Jet-A1 por vuelo.","Usa 3,16 kg CO₂ directo por kg de combustible.","Controla meteorología, ATC, misión y carga."]},
  3:{title:"Walkdown de hotspots MRO",purpose:"Sigue físicamente un proceso e identifica pérdidas evitables.",outcome:"Una acción preventiva con KPI ambiental y salvaguarda técnica.",steps:["Elige proceso y resultado aprobado.","Mapea entradas y salidas.","Identifica retrabajo y demanda de fallo.","Prioriza prevención antes que tratamiento."],caseData:["Se repite la limpieza en el 8% de inspecciones.","Las puertas quedan abiertas con aire acondicionado activo.","Las toallitas con disolvente entran en residuo peligroso mezclado.","Todo cambio exige compatibilidad y aprobación técnica."]},
  4:{title:"Ficha de evidencia del caso digital",purpose:"Demuestra cómo una salida digital cambia una decisión autorizada y un resultado físico.",outcome:"Una cadena causal completa con controles y verificación.",steps:["Define decisión y contrafactual.","Construye la cadena datos–resultado.","Analiza errores y rebote.","Verifica un resultado físico."],caseData:["El modelo aborda 11 retiradas sin defecto confirmado.","El modelo no autoriza por sí mismo continuar la operación.","Los errores pueden afectar fiabilidad o crear trabajo innecesario.","Retiradas y envíos urgentes son resultados físicos candidatos."]},
  5:{title:"Comparador de escenarios de ciclo de vida",purpose:"Compara extensión, retrofit, sustitución y retirada con el mismo servicio.",outcome:"Una recomendación condicionada con punto de equilibrio e incertidumbre.",steps:["Fija servicio y horizonte.","Construye cuatro escenarios comparables.","Incluye efectos incorporados, operacionales y de transición.","Prueba sensibilidad y punto de equilibrio."],caseData:["Seis aeronaves podrían recibir retrofit durante seis años.","La sustitución consume un 14% menos pero necesita infraestructura y formación.","El retrofit ahorra 1,5% de 6.500 kg en 420 misiones anuales.","La utilización futura es incierta."]},
  6:{title:"Hoja de ruta en servicio",purpose:"Convierte acciones respaldadas por evidencia en un plan de 24 meses.",outcome:"Una acción gobernada con línea base, KPI, hitos, riesgos y revisión.",steps:["Selecciona una acción material.","Asigna responsabilidad y autoridad.","Define línea base, KPI y objetivo.","Establece hitos, controles y revisión."],caseData:["Orion debe seleccionar cuatro acciones.","Disponibilidad y misión son condiciones obligatorias.","Todo KPI necesita propietario, unidad, límite, frecuencia y fuente.","Un objetivo no es un resultado."]},
  7:{title:"Control de afirmaciones de sostenibilidad",purpose:"Evita que una afirmación ambiental exceda su evidencia.",outcome:"Una afirmación precisa con límite, línea base, método y limitaciones.",steps:["Escribe la afirmación literal.","Comprueba línea base, límite y evidencia.","Evalúa atribución y trade-offs.","Repara la afirmación antes de aprobarla."],caseData:["El piloto muestra un 25% menos de envíos urgentes en una familia.","No existe cálculo de emisiones de toda la flota.","El CO₂e logístico aún no está verificado.","«Flota verde» no está respaldado."]}
};
const spanishFieldLabels: Record<string,string>={decision:"Decisión y alternativas",service:"Servicio requerido y unidad funcional",boundary:"Límite y exclusiones",hotspots:"Hipótesis de hotspots",gates:"Condiciones obligatorias",mission:"Clase de misión comparable",measure:"Medida y línea base",calculation:"Cálculo de combustible y CO₂",limits:"Restricciones y limitaciones",verify:"Plan de verificación",process:"Proceso y resultado aprobado",flows:"Entradas y salidas físicas",failure:"Retrabajo y demanda de fallo",prevention:"Oportunidad de prevención",kpi:"KPI y salvaguarda técnica",chain:"Cadena causal",controls:"Aseguramiento y autorización",risks:"Riesgos de error y rebote",scenarios:"Definición de cuatro escenarios",effects:"Efectos de ciclo de vida y transición",breakEven:"Punto de equilibrio y sensibilidad",recommendation:"Recomendación condicionada",action:"Acción prioritaria y responsable",baseline:"Línea base y aplicabilidad",target:"Objetivo e hitos",risk:"Riesgo, control y revisión",original:"Afirmación original",evidence:"Línea base, límite y evidencia",tradeoffs:"Atribución y trade-offs",repair:"Afirmación reparada",approval:"Responsable de evidencia y aprobación"};
const toolsByModuleEs: Record<number,ToolConfig[]> = Object.fromEntries(Object.entries(toolsByModule).map(([moduleId, tools]) => [Number(moduleId), tools.map(tool => ({...tool,...toolEsCopy[tool.number],fields:tool.fields.map(field=>({...field,label:spanishFieldLabels[field.key]||field.label,help:"Incluye suficiente detalle, límites, unidades y evidencia para que otra persona pueda revisar la decisión.",placeholder:"Escribe aquí una respuesta concreta y verificable…"})),example:tool.example.map(row=>({field:spanishFieldLabels[row.field.toLowerCase()]||row.field,answer:row.answer}))}))]));

const learningActivities: Activity[] = [
  { id: "m1-a1-boundary-builder", title: "M1-A1 | Boundary Builder", type: "multi", instruction: "Select every item that belongs inside the first comparison.", prompt: "Orion is considering replacing a calendar-based component removal with an approved condition-based decision. Which items belong in the assessment?", options: ["Removed components and their remaining useful condition", "Sensor, data and platform requirements", "Unscheduled failure and operational disruption risk", "Emergency logistics and replacement-parts demand", "Office paper used by an unrelated department", "Safety case, maintenance approval and human decision process"], correct: [0,1,2,3,5], feedback: "A valid comparison follows the entire causal chain. Office paper is outside the decision boundary unless evidence shows a material connection." },
  { id: "m1-a2-hotspot-or-distraction", title: "M1-A2 | Hotspot or Distraction?", type: "matching", instruction: "Classify every signal before checking your answer.", prompt: "Orion reports lower fuel per flight hour but higher total fuel use. At the same time, urgent spare shipments doubled.", rows: ["Lower fuel per flight hour", "Higher annual flying activity", "Urgent spare shipments", "A new sustainability logo on the dashboard"], choices: ["Performance signal", "Activity driver", "Trade-off hotspot", "Not evidence"], matches: [0,1,2,3], feedback: "Absolute and intensity metrics answer different questions. Communications cannot substitute for operational data." },
  { id: "m2-a1-continuous-or-conventional", title: "M2-A1 | Continuous or Conventional?", type: "single", instruction: "Choose the preferred profile under the stated conditions.", prompt: "Both profiles are approved. Traffic is light and weather is stable.", options: ["Continuous descent", "Step-down descent", "Either option has identical effects"], correct: [0], feedback: "CDO is likely to reduce fuel and noise because level segments and thrust are reduced. If traffic, weather, separation or mission constraints change, it may no longer be available." },
  { id: "m2-a2-co2-calculation", title: "M2-A2 | CO₂ Calculation", type: "numeric", instruction: "Enter tonnes of direct combustion CO₂ to one decimal place.", prompt: "A route improvement saves 85 kg of Jet-A1 on each of 310 comparable flights. Use 3.16 kg CO₂ per kg fuel.", answer: "83.3", tolerance: .05, feedback: "85 × 310 × 3.16 ÷ 1,000 = 83.3 t CO₂. This is a direct combustion estimate, not a full lifecycle or total climate benefit." },
  { id: "m3-a1-find-the-hidden-hotspot", title: "M3-A1 | Find the Hidden Hotspot", type: "multi", instruction: "Select the five items that deserve first investigation.", prompt: "Which observations represent measured or observable material losses?", options: ["Open doors while conditioning", "Compressed-air leaks", "Mixed waste", "Repeated cleaning", "Unused lighting", "The recycling poster’s colour"], correct: [0,1,2,3,4], feedback: "The poster may support communication but does not itself change a material flow. Start with measured or observable losses." },
  { id: "m3-a2-better-practice-or-rebound", title: "M3-A2 | Better Practice or Rebound?", type: "single", instruction: "Choose the most defensible next step.", prompt: "A proposed solvent substitute has lower VOC content but requires twice the drying energy and has not completed material-compatibility approval.", options: ["Deploy immediately because VOC is lower", "Reject permanently", "Complete technical approval and compare total process effects before deployment", "Call the process zero-impact"], correct: [2], feedback: "One improved attribute is not enough. Technical compatibility and process-level trade-offs must be evaluated." },
  { id: "m4-a1-name-the-strategy", title: "M4-A1 | Name the Strategy", type: "matching", instruction: "Match every trigger to its maintenance approach.", prompt: "Focus on the decision trigger and how the information is used.", rows: ["Fixed cycle limit", "Vibration threshold", "Model forecasts bearing condition in 40 hours", "Optimiser recommends the lowest-risk maintenance slot"], choices: ["Preventive", "Condition-based", "Predictive", "Prescriptive"], matches: [0,1,2,3], feedback: "The data source alone does not determine the approach; the decision trigger and use of the information do." },
  { id: "m4-a2-data-vs.-decision", title: "M4-A2 | Data vs. Decision", type: "multi", instruction: "Select the measures that demonstrate a physical outcome.", prompt: "Orion’s dashboard generated 2,000 alerts, gained 70 users, reduced ten urgent removals, avoided six emergency shipments and increased data storage by 15%.", options: ["Alerts generated", "Users", "Urgent removals", "Emergency shipments", "Data storage"], correct: [2,3], feedback: "Urgent removals and emergency shipments are outcome indicators. Alerts and users show activity/adoption; storage is a digital-footprint input." },
  { id: "m5-a1-retrofit-break-even", title: "M5-A1 | Retrofit Break-Even", type: "numeric", instruction: "Calculate annual fuel saving in tonnes.", prompt: "A modification saves 1.5% of 6,500 kg on each of 420 missions per year.", answer: "40.95", tolerance: .01, feedback: "6,500 × 1.5% × 420 = 40,950 kg, or 40.95 t fuel/year. A decision must also test mission variability, embodiment and remaining utilisation." },
  { id: "m5-a2-no-automatic-answer", title: "M5-A2 | No Automatic Answer", type: "single", instruction: "Choose the correct analytical response.", prompt: "Aircraft A can fly six more years after retrofit. Replacement B is 14% more fuel-efficient but requires new infrastructure. Annual utilisation is uncertain.", options: ["Extend because reuse is always circular", "Replace because newer is always efficient", "Build comparable scenarios and test utilisation, embodiment, support and infrastructure", "Decide using aircraft age only"], correct: [2], feedback: "Utilisation uncertainty may dominate the result. Neither option can be selected credibly without comparable service scenarios." },
  { id: "m6-a1-framework-or-obligation", title: "M6-A1 | Framework or Obligation?", type: "matching", instruction: "Match every item to its correct category.", prompt: "The category determines how each item should be applied, governed and communicated.", rows: ["ICAO LTAG", "CORSIA", "NATO GHG methodology", "Site waste permit", "ISO 14001 objective"], choices: ["Global civil goal", "Civil MRV/offsetting scheme with defined scope", "Defence measurement method", "Site-specific legal control", "Management-system commitment"], matches: [0,1,2,3,4], feedback: "A framework, scoped scheme, defence method, legal control and management commitment do not carry the same authority or applicability." },
  { id: "m6-a2-claim-repair", title: "M6-A2 | Claim Repair", type: "open", instruction: "Rewrite the claim. The model answer remains hidden until you submit.", prompt: "“Our digital twin cut fleet emissions by 25%.” Pilot data only cover emergency shipments for one component family.", model: "During the defined pilot, the digital planning process reduced emergency shipments for the selected component family by 25% versus the stated baseline. The result does not represent total fleet emissions; associated logistics CO₂e will be verified using shipment data and the documented method.", feedback: "A defensible claim narrows the subject, names the pilot boundary and separates activity reduction from a still-to-be-verified emissions result." },
];

function range(start: Element | null, stop: (e: Element) => boolean) {
  const box = document.createElement("div");
  let el = start?.nextElementSibling || null;
  while (el && !stop(el)) { box.appendChild(el.cloneNode(true)); el = el.nextElementSibling; }
  return box.innerHTML;
}

function normalizedText(element: Element) {
  return (element.textContent || "").replace(/\s+/g, " ").trim();
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

function parse(raw: string, lang: Lang = "en"): Parsed {
  const doc = new DOMParser().parseFromString(raw, "text/html");
  doc.querySelectorAll<HTMLImageElement>('img[src^="/course-content/"]').forEach(image => {
    image.src = `.${image.getAttribute("src")}`;
  });
  const lessons: Record<number, LessonBlock[]> = {}, checks: Record<number, Question[]> = {};
  modulesEn.forEach(m => {
    const start = Array.from(doc.querySelectorAll("h1")).find(h => normalizedText(h).startsWith(lang === "es" ? `Módulo ${m.id} |` : `Module ${m.id} |`)) || null;
    const check = (e: Element) => e.tagName === "H2" && (lang === "es" ? /Comprobación de conocimientos del módulo/i : /Module knowledge check/i).test(normalizedText(e));
    const lesson = new DOMParser().parseFromString(range(start, e => e.tagName === "H1" || check(e)), "text/html").body;
    const blocks: LessonBlock[] = [];
    let theory = document.createElement("div");
    const flush = () => {
      if (theory.innerHTML.trim()) blocks.push({ kind: "theory", html: theory.innerHTML });
      theory = document.createElement("div");
    };
    Array.from(lesson.children).forEach(el => {
      const activity = el.tagName === "H3" ? learningActivities.find(a => a.id === el.id) : undefined;
      if (activity) {
        flush();
        blocks.push({ kind: "activity", activity });
        let next = el.nextElementSibling;
        while (next && !(next.tagName === "H2" || next.tagName === "H3")) {
          const remove = next;
          next = next.nextElementSibling;
          remove.remove();
        }
      } else if (el.parentElement) {
        theory.appendChild(el.cloneNode(true));
      }
    });
    flush();
    lessons[m.id] = blocks;
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

function LearningActivity({ activity }: { activity: Activity }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [written, setWritten] = useState("");
  const [checked, setChecked] = useState(false);
  const sorted = (values: number[]) => [...values].sort((a, b) => a - b);
  const correct = activity.type === "matching"
    ? activity.matches?.every((value, index) => matched[index] === value) || false
    : activity.type === "numeric"
      ? written.trim() !== "" && Math.abs(Number(written.replace(",", ".")) - Number(activity.answer)) <= (activity.tolerance || 0)
      : activity.type === "open"
        ? written.trim().length >= 20
        : JSON.stringify(sorted(selected)) === JSON.stringify(sorted(activity.correct || []));
  const complete = activity.type === "matching"
    ? matched.filter(value => value !== undefined).length === activity.rows?.length
    : activity.type === "numeric" ? written.trim() !== "" && Number.isFinite(Number(written.replace(",", ".")))
    : activity.type === "open" ? written.trim().length >= 20 : selected.length > 0;
  const reset = () => { setSelected([]); setMatched([]); setWritten(""); setChecked(false); };
  const toggle = (index: number) => {
    if (checked) return;
    setSelected(values => activity.type === "single" ? [index] : values.includes(index) ? values.filter(value => value !== index) : [...values, index]);
  };
  return <section className="learning-activity" aria-labelledby={`${activity.id}-title`}>
    <div className="activity-head"><span>Interactive learning check</span><b>Answer first. Feedback second.</b></div>
    <h3 id={`${activity.id}-title`}>{activity.title}</h3>
    <p className="activity-instruction">{activity.instruction}</p>
    <p className="activity-prompt">{activity.prompt}</p>
    {(activity.type === "single" || activity.type === "multi") && <fieldset>
      <legend className="sr-only">{activity.instruction}</legend>
      {activity.options?.map((option, index) => {
        const chosen = selected.includes(index);
        const isRight = checked && activity.correct?.includes(index);
        const isWrong = checked && chosen && !activity.correct?.includes(index);
        return <label key={option} className={`${chosen ? "selected " : ""}${isRight ? "correct " : ""}${isWrong ? "wrong" : ""}`}>
          <input type={activity.type === "single" ? "radio" : "checkbox"} name={activity.id} checked={chosen} disabled={checked} onChange={() => toggle(index)} />
          <i>{String.fromCharCode(65 + index)}</i><span>{option}</span>
        </label>;
      })}
    </fieldset>}
    {activity.type === "matching" && <div className="matching">
      {activity.rows?.map((row, index) => <label key={row} className={checked ? matched[index] === activity.matches?.[index] ? "correct" : "wrong" : ""}>
        <span>{row}</span>
        <select value={matched[index] ?? ""} disabled={checked} onChange={event => setMatched(values => { const next = [...values]; next[index] = Number(event.target.value); return next; })}>
          <option value="" disabled>Select a category…</option>
          {activity.choices?.map((choice, choiceIndex) => <option value={choiceIndex} key={choice}>{choice}</option>)}
        </select>
      </label>)}
    </div>}
    {activity.type === "numeric" && <label className="activity-entry"><span>Your answer</span><div><input inputMode="decimal" value={written} disabled={checked} onChange={event => setWritten(event.target.value)} /><b>tonnes</b></div></label>}
    {activity.type === "open" && <label className="activity-entry"><span>Your repaired claim</span><textarea rows={5} value={written} disabled={checked} onChange={event => setWritten(event.target.value)} placeholder="Write a bounded, evidence-based claim…" /></label>}
    {!checked ? <button className="primary" disabled={!complete} onClick={() => setChecked(true)}>Check answer</button> : <>
      <div className={`activity-feedback ${correct ? "ok" : "no"}`} role="status">
        <b>{activity.type === "open" ? "Compare your response with the model." : correct ? "Correct." : "Not quite."}</b>
        {!correct && activity.type !== "open" && <p>The correct response is now highlighted. Review the explanation, then try again.</p>}
        {activity.type === "open" && <p><strong>Model answer:</strong> {activity.model}</p>}
        <p>{activity.feedback}</p>
      </div>
      <button className="secondary" onClick={reset}>{correct && activity.type !== "open" ? "Answer again" : "Try again"}</button>
    </>}
  </section>;
}

function activitySolution(activity: Activity) {
  if (activity.type === "matching") {
    return activity.rows?.map((row, index) => `${row} → ${activity.choices?.[activity.matches?.[index] ?? -1]}`).join("; ") || "";
  }
  if (activity.type === "numeric") return `${activity.answer} tonnes`;
  if (activity.type === "open") return activity.model || "";
  return (activity.correct || []).map(index => `${String.fromCharCode(65 + index)} · ${activity.options?.[index]}`).join("; ");
}

function ExerciseSolutions({ moduleId }: { moduleId: number }) {
  const activities = learningActivities.filter(activity => activity.id.startsWith(`m${moduleId}-`));
  if (!activities.length) return null;
  return <section className="exercise-solutions" aria-labelledby={`m${moduleId}-solutions-title`}>
    <div className="solutions-intro">
      <span className="eyebrow">End-of-module answer key</span>
      <h2 id={`m${moduleId}-solutions-title`}>Solutions to this module&apos;s exercises</h2>
      <p>Try both activities before opening the solutions. Use the reasoning to check your method, not only the final answer.</p>
    </div>
    <details>
      <summary>Show exercise solutions</summary>
      <div className="solution-list">{activities.map((activity, index) => <article key={activity.id}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div><h3>{activity.title.replace(/^M\d-A\d\s*\|\s*/, "")}</h3><p className="solution-answer"><b>Solution:</b> {activitySolution(activity)}</p><p><b>Why:</b> {activity.feedback}</p></div>
      </article>)}</div>
    </details>
  </section>;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => typeof window !== "undefined" && new URLSearchParams(window.location.search).get("lang") === "es" ? "es" : "en");
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
  const [resourceTab, setResourceTab] = useState<"refs" | "files">("refs");

  useEffect(() => {
    setContent(null);
    setContentError("");
    fetch(lang === "es" ? "./course-master-es.html" : "./course-master.html")
      .then(r => {
        if (!r.ok) throw new Error(`Course content request failed (${r.status})`);
        return r.text();
      })
      .then(h => {
        const parsed = parse(h, lang);
        if (!parsed.lessons[1]) throw new Error("Course content could not be parsed");
        setContent(parsed);
      })
      .catch(error => {
        console.error(error);
        setContentError(lang === "es" ? "No se ha podido cargar la teoría del curso. Actualiza la página y, si continúa el problema, comunícalo a la persona responsable del curso." : "The course theory could not be loaded. Please refresh the page. If the problem continues, report this message to the course owner.");
      });
  }, [lang]);
  useEffect(() => {
    try { const saved = localStorage.getItem(`${STORE}-${lang}`); setProgress(saved ? { ...EMPTY, ...JSON.parse(saved) } : EMPTY); } catch { setProgress(EMPTY); }
  }, [lang]);
  useEffect(() => { localStorage.setItem(`${STORE}-${lang}`, JSON.stringify(progress)); }, [progress, lang]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [view, active, tab]);

  const pct = useMemo(() => Math.round((progress.done.length + (progress.capstoneDone ? 1 : 0) + (progress.finalPassed ? 1 : 0)) / 8 * 100), [progress]);
  const patch = (p: Partial<Progress>) => setProgress(x => ({ ...x, ...p }));
  const courseModules = lang === "es" ? modulesEs : modulesEn;
  const open = (id: number, t: "learn" | "apply" | "check" = "learn") => { setActive(id); setTab(t); setView("module"); };
  const certificateReady = progress.done.length === 6 && progress.capstoneDone && progress.finalPassed;

  return <div>
    <a className="skip" href="#main">{lang === "es" ? "Saltar al contenido" : "Skip to course content"}</a>
    <header>
      <button className="brand" onClick={() => setView("home")}><b>AP</b><span><strong>Sustainable Aviation &amp; Performance</strong><small>Air Power Services learning</small></span></button>
      <nav><button onClick={() => setView("home")}>{lang === "es" ? "Curso" : "Course"}</button><button onClick={() => setView("capstone")}>{lang === "es" ? "Proyecto final" : "Final project"}</button><button onClick={() => setView("exam")}>{lang === "es" ? "Evaluación final" : "Final assessment"}</button><button onClick={() => setView("resources")}>{lang === "es" ? "Recursos" : "Resources"}</button></nav>
      <div className="language-switch" aria-label="Language selector"><button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button><button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")}>ES</button></div>
      <button className="head-progress" onClick={() => setView("home")}>{lang === "es" ? "Progreso" : "Progress"} <b>{pct}%</b></button>
    </header>
    <main id="main">
      {view === "home" && <>
        <section className="hero">
          <div className="hero-copy"><div className="pills"><span>{lang === "es" ? "Especialización avanzada" : "Advanced specialisation"}</span><span>100% online</span><span>10–12 {lang === "es" ? "horas" : "hours"}</span></div>
            <span className="eyebrow light">{lang === "es" ? "Academia de sostenibilidad en servicio" : "In-service sustainability academy"}</span>
            <h1>{lang === "es" ? "Sostenibilidad avanzada" : "Advanced Sustainability"} <em>in Air Power Services</em></h1>
            <p>{lang === "es" ? "Toma decisiones operacionales, de mantenimiento, digitales y de ciclo de vida basadas en evidencia, mejorando el desempeño ambiental y la resiliencia sin comprometer la seguridad, la aeronavegabilidad, la protección de la información ni la disponibilidad para la misión." : "Make evidence-based operational, maintenance, digital and lifecycle decisions that improve environmental performance and resilience without compromising safety, airworthiness, security or mission readiness."}</p>
            <div className="buttons"><button className="gold" onClick={() => open(courseModules.find(m => !progress.done.includes(m.id))?.id || 1)}>{progress.done.length ? (lang === "es" ? "Continuar el curso" : "Resume course") : (lang === "es" ? "Comenzar el curso" : "Start the course")} →</button></div>
            <div className="metrics"><span><b>06</b> {lang === "es" ? "módulos desarrollados" : "developed modules"}</span><span><b>30</b> {lang === "es" ? "preguntas de módulo" : "module questions"}</span><span><b>07</b> {lang === "es" ? "aplicaciones guiadas" : "guided applications"}</span></div>
          </div>
          <div className="hero-graphic photo-frame"><img src="./images/hero-air-power.webp" alt="Air Power aircraft supported by maintenance and ground teams" /></div>
        </section>
        <section className="status"><div className="donut" style={{ "--p": `${pct * 3.6}deg` } as CSSProperties}><span><b>{pct}%</b><small>complete</small></span></div><div><span className="eyebrow">Your learning record</span><h2>{progress.done.length ? `${progress.done.length} of 6 modules completed` : "Your course progress starts here"}</h2><p>Progress and application responses are saved on this device. Pass all module checks, complete Orion’s guided final project and score at least 80% in the final assessment.</p></div><div className="steps"><span className={progress.done.length === 6 ? "done" : ""}>1 · Modules</span><span className={progress.capstoneDone ? "done" : ""}>2 · Final project</span><span className={progress.finalPassed ? "done" : ""}>3 · Assessment</span></div></section>
        <section className="program"><div className="section-head"><div><span className="eyebrow">High-density curriculum</span><h2>Six modules. One connected decision system.</h2></div><p>Each module combines developed theory, an Orion scenario, a saved evidence lab and an auto-graded knowledge check.</p></div>
          <div className="module-grid">{courseModules.map(m => <article className="module-card" key={m.id} style={{ "--accent": m.accent, "--soft": m.soft } as CSSProperties}>
            <div className="module-art"><img src={`./images/${m.image}`} alt="" /><b>{String(m.id).padStart(2, "0")}</b><span>{m.code}</span></div>
            <div className="module-copy"><div className="meta"><span>{m.time}</span><span>{progress.done.includes(m.id) ? "Completed" : "Open"}</span></div><h3>{m.title}</h3><p>{m.intro}</p><div><button onClick={() => open(m.id)}>{progress.done.includes(m.id) ? "Review module" : "Open module"} →</button></div></div>
          </article>)}</div>
        </section>
        <section className="orion"><div><span className="eyebrow light">Recurring applied case</span><h2>The Orion Support Unit</h2><p>Follow a fictitious twelve-aircraft support unit across operations, MRO, logistics, digital maintenance, retrofit and governance. Never enter classified, export-controlled or customer-sensitive information.</p></div></section>
      </>}

      {view === "module" && <ModuleScreen m={courseModules[active - 1]} content={content} contentError={contentError} progress={progress} patch={patch} tab={tab} setTab={setTab} open={open} home={() => setView("home")} lang={lang} />}
      {view === "capstone" && <Capstone content={content} progress={progress} patch={patch} lang={lang} />}
      {view === "exam" && <div className="wide"><PageHero eyebrow="Summative assessment · 30 minutes" title="Final Decision-Quality Check" copy="Eighteen questions cover boundaries, operations, MRO, digital assurance, circularity and governance. A score of 80% is required." code={`${progress.done.length}/6 modules`} />
        {progress.done.length < 6 ? <Locked title="Complete all six module checks to unlock the final assessment." /> : <><Quiz label="Final assessment" items={content?.final || []} best={progress.finalScore || undefined} complete={score => patch({ finalScore: Math.max(progress.finalScore, score), finalPassed: progress.finalPassed || score >= 80 })} />{progress.finalPassed && <section className="award"><div><span className="eyebrow light">Assessment passed</span><h2>Final knowledge requirement complete.</h2><p>Complete Orion’s final practical project to unlock the certificate.</p></div><button className="gold" disabled={!certificateReady} onClick={() => setView("certificate")}>Open certificate →</button></section>}</>}
      </div>}
      {view === "resources" && <div className="wide"><PageHero eyebrow="Evidence resources" title="Glossary, source library and workbook" copy="The seven guided applications are taught and completed inside each module. Return here to trace sources or download the reusable workbook." code="39 sources" />
        <div className="tabs resource-tabs"><button className={resourceTab === "refs" ? "active" : ""} onClick={() => setResourceTab("refs")}>Glossary & source library</button><button className={resourceTab === "files" ? "active" : ""} onClick={() => setResourceTab("files")}>Downloads</button></div>
        {resourceTab === "refs" ? <article className="prose resource" dangerouslySetInnerHTML={{ __html: content?.references || "" }} /> : <div className="downloads"><a href="./downloads/Learner_Workbook.docx" download><b>DOCX</b><span><strong>Learner Workbook</strong><small>Guided labs, reusable templates, capstone and claim check.</small></span>↓</a></div>}
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

function GuidedTool({ tool, values, save, lang }: { tool: ToolConfig; values: Record<string, string>; save: (key: string, value: string) => void; lang: Lang }) {
  const [checked, setChecked] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const complete = tool.fields.every(f => (values[f.key] || "").trim().length >= (f.min || 20));
  const incomplete = tool.fields.filter(f => (values[f.key] || "").trim().length < (f.min || 20));
  return <article className="guided-tool">
    <div className="tool-header"><span className="tool-number">{lang === "es" ? "Aplicación" : "Application"} {tool.number}</span><div><h2>{tool.title}</h2><p>{tool.purpose}</p></div></div>
    <div className="tool-outcome"><b>{lang === "es" ? "Qué vas a producir" : "What you will produce"}</b><p>{tool.outcome}</p></div>
    <div className="tool-brief">
      <section><h3>{lang === "es" ? "Cómo utilizarla" : "How to use it"}</h3><ol>{tool.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
      <section><h3>{lang === "es" ? "Datos del caso Orion" : "Orion case data"}</h3><ul>{tool.caseData.map(item => <li key={item}>{item}</li>)}</ul></section>
    </div>
    <button className="example-toggle" onClick={() => setShowExample(v => !v)} aria-expanded={showExample}>{lang === "es" ? (showExample ? "Ocultar ejemplo resuelto" : "Mostrar ejemplo resuelto") : `${showExample ? "Hide" : "Show"} a worked example`}</button>
    {showExample && <div className="worked-example">{tool.example.map(row => <div key={row.field}><b>{row.field}</b><p>{row.answer}</p></div>)}</div>}
    <div className="tool-fields">{tool.fields.map((field, index) => {
      const value = values[field.key] || "";
      const needsWork = checked && value.trim().length < (field.min || 20);
      return <label className={needsWork ? "needs-work" : ""} key={field.key}><span><b>{String(index + 1).padStart(2, "0")} · {field.label}</b><small>{field.help}</small></span><textarea rows={4} value={value} placeholder={field.placeholder} onChange={e => { save(field.key, e.target.value); setChecked(false); }} />{needsWork && <em>{lang === "es" ? "Añade detalle suficiente para que el campo pueda utilizarse en una decisión." : "Add enough detail to make this field usable in a decision. Address the guidance above."}</em>}</label>;
    })}</div>
    <div className={`tool-review ${checked && complete ? "complete" : ""}`}><div><b>{lang === "es" ? (checked ? complete ? "Aplicación completa" : `${incomplete.length} campos necesitan más evidencia` : "¿Lista para una revisión formativa?") : (checked ? complete ? "Tool complete" : `${incomplete.length} field${incomplete.length === 1 ? "" : "s"} need more evidence` : "Ready for a formative review?")}</b><p>{lang === "es" ? (checked && complete ? "La respuesta cumple las reglas de finalización. Compárala con el ejemplo y revisa los supuestos." : "La revisión comprueba integridad y calidad de decisión; no aprueba contenido técnico u operacional.") : (checked && complete ? "Your response meets the completion rules. Compare it with the worked example and refine any unsupported assumptions." : "The review checks completeness and decision quality; it does not approve technical or operational content.")}</p></div><button className="primary" onClick={() => setChecked(true)}>{lang === "es" ? "Revisar mi trabajo" : "Review my work"}</button></div>
  </article>;
}

function ModuleScreen({ m, content, contentError, progress, patch, tab, setTab, open, home, lang }: { m: typeof modules[number]; content: Parsed | null; contentError: string; progress: Progress; patch: (p: Partial<Progress>) => void; tab: "learn" | "apply" | "check"; setTab: (t: "learn" | "apply" | "check") => void; open: (n: number) => void; home: () => void; lang: Lang }) {
  const lab = progress.labs[`m${m.id}`] || {};
  const moduleTools = (lang === "es" ? toolsByModuleEs : toolsByModule)[m.id];
  const labDone = moduleTools.every(tool => tool.fields.every(field => (lab[`t${tool.number}-${field.key}`] || "").trim().length >= (field.min || 20)));
  const save = (key: string, value: string) => patch({ labs: { ...progress.labs, [`m${m.id}`]: { ...lab, [key]: value } } });
  return <div className="module-page" style={{ "--accent": m.accent, "--soft": m.soft } as CSSProperties}>
    <aside><button className="back" onClick={home}>← {lang === "es" ? "Vista general del curso" : "Course overview"}</button><span className="eyebrow">{lang === "es" ? "Módulo" : "Module"} {String(m.id).padStart(2, "0")}</span><h2>{m.code} · {m.title}</h2><p className="aside-help">{lang === "es" ? "Avanza de arriba abajo. Aparecerá una marca cuando completes cada etapa." : "Move from top to bottom. A tick appears when a stage is complete."}</p><nav><button className={tab === "learn" ? "active" : ""} onClick={() => setTab("learn")}><b>01 · {lang === "es" ? "Aprende" : "Learn"}</b><small>{lang === "es" ? "Comprende la decisión" : "Understand the decision"}</small></button><button className={tab === "apply" ? "active" : ""} onClick={() => setTab("apply")}><b>02 · {lang === "es" ? "Aplica" : "Apply"} {labDone && "✓"}</b><small>{lang === "es" ? "Construye la evidencia Orion" : "Build the Orion evidence"}</small></button><button className={tab === "check" ? "active" : ""} onClick={() => setTab("check")}><b>03 · {lang === "es" ? "Comprueba" : "Check"} {progress.done.includes(m.id) && "✓"}</b><small>{lang === "es" ? "Confirma lo aprendido" : "Confirm what you learned"}</small></button></nav><div className="gate"><b>{lang === "es" ? "Protege siempre primero" : "Always protect first"}</b><p>{lang === "es" ? "Seguridad · Aeronavegabilidad · Protección de la información · Misión" : "Safety · Airworthiness · Security · Mission requirements"}</p></div></aside>
    <div className="module-main"><section className="module-hero"><div><div className="pills"><span>{m.code}</span><span>{m.time}</span><span>Module {m.id} of 6</span></div><span className="module-question">Guiding question</span><h1>{m.title}</h1><p>{m.q}</p></div><div className="module-photo"><img src={`./images/${m.image}`} alt={`Operational context for ${m.title}`} /></div></section>
      <section className="module-compass"><div><span>You are here</span><b>{tab === "learn" ? "1 · Learn the reasoning" : tab === "apply" ? "2 · Apply it to Orion" : "3 · Check your understanding"}</b></div><p>{tab === "learn" ? "Read in order and complete the activities embedded in the lesson. Explanations appear after you answer." : tab === "apply" ? "Follow the numbered instructions. Open the worked example only if you need help, then complete every field." : "Select one answer for each question. Submit when all five are answered; 80% completes the module."}</p></section>
      {tab === "learn" && <section className="panel"><div className="lesson-welcome"><b>What you will be able to do</b><p>{m.intro}</p><span>Estimated time: {m.time}. You can leave and return at any time.</span></div><div className="decision"><b>Keep this rule in mind</b><p>Define the required service and pass mandatory gates before optimising environmental performance. A preferred technology is not a starting point.</p></div>{content ? <article className="prose">{content.lessons[m.id].map((block, index) => block.kind === "theory" ? <div key={index} dangerouslySetInnerHTML={{ __html: block.html }} /> : <LearningActivity key={block.activity.id} activity={block.activity} />)}<ExerciseSolutions moduleId={m.id} /></article> : <div className="loading">{contentError || "Loading developed course theory…"}</div>}<div className="next"><span><small>You have finished the explanation</small><b>Now turn the theory into an Orion evidence card.</b></span><button className="primary" onClick={() => setTab("apply")}>Continue to 02 · Apply →</button></div></section>}
      {tab === "apply" && <section className="panel lab"><div className="section-head"><div><span className="eyebrow">{lang === "es" ? "Aplicación guiada · guardado automático" : "Guided application · saved automatically"}</span><h2>{m.lab}</h2></div><p>{lang === "es" ? "Utiliza únicamente el caso Orion o información aprobada no sensible. Cada herramienta explica qué introducir y ofrece feedback formativo." : "Use the Orion case or approved non-sensitive information only. Each tool explains what to enter and provides formative feedback."}</p></div>{moduleTools.map(tool => <GuidedTool key={tool.number} tool={tool} lang={lang} values={Object.fromEntries(tool.fields.map(field => [field.key, lab[`t${tool.number}-${field.key}`] || ""]))} save={(key, value) => save(`t${tool.number}-${key}`, value)} />)}<div className={`lab-end ${labDone ? "done" : ""}`}><span><b>{labDone ? (lang === "es" ? "Aplicación completa" : "Application complete") : (lang === "es" ? "Completa todos los campos" : `Complete Tool ${moduleTools.map(t => t.number).join(" and Tool ")}`)}</b><small>{lang === "es" ? "Tus respuestas se guardan automáticamente en este dispositivo." : "Your responses are saved automatically on this device."}</small></span><button className="primary" disabled={!labDone} onClick={() => setTab("check")}>{lang === "es" ? "Continuar a la comprobación" : "Continue to check"} →</button></div></section>}
      {tab === "check" && <Quiz label={lang === "es" ? `Comprobación de conocimientos · Módulo ${m.id}` : `Module ${m.id} knowledge check`} items={content?.checks[m.id] || []} best={progress.scores[`m${m.id}`]} complete={score => patch({ scores: { ...progress.scores, [`m${m.id}`]: Math.max(progress.scores[`m${m.id}`] || 0, score) }, done: score >= 80 ? Array.from(new Set([...progress.done, m.id])).sort() : progress.done })} />}
      <div className="module-nav"><button disabled={m.id === 1} onClick={() => open(m.id - 1)}>← Previous</button><span>{m.id} / 6</span><button disabled={m.id === 6} onClick={() => open(m.id + 1)}>Next →</button></div>
    </div>
  </div>;
}

function Capstone({ content, progress, patch, lang }: { content: Parsed | null; progress: Progress; patch: (p: Partial<Progress>) => void; lang: Lang }) {
  const valid = progress.actions.length === 4 && progress.claim.trim().length > 20 && progress.rejection.trim().length > 20;
  const toggle = (a: string) => patch({ actions: progress.actions.includes(a) ? progress.actions.filter(x => x !== a) : progress.actions.length < 4 ? [...progress.actions, a] : progress.actions, capstoneDone: false });
  return <div className="wide"><PageHero eyebrow={lang === "es" ? "Proyecto práctico final · 60 minutos" : "Final practical project · 60 minutes"} title={lang === "es" ? "Construye el plan de acción Orion a 24 meses" : "Build Orion's 24-month action plan"} copy={lang === "es" ? "Utiliza lo aprendido en los seis módulos para elegir cuatro acciones realistas y justificar por qué son defendibles." : "Use what you learned in the six modules to choose four realistic actions and explain why they are defensible."} code={`${progress.actions.length}/4 ${lang === "es" ? "acciones seleccionadas" : "actions selected"}`} />
    <section className="project-guide"><span className="eyebrow">What you need to do</span><h2>One final exercise, completed in three steps</h2><p>This is not a professional portfolio. It is a guided course exercise based on the fictitious Orion case.</p><div><article><b>1</b><span><strong>Read the Orion scenario</strong><small>Use the baseline data on the left to understand the operational and environmental problems.</small></span></article><article><b>2</b><span><strong>Select four actions</strong><small>Choose the four measures you would prioritise. One option is deliberately unsuitable and should not be selected.</small></span></article><article><b>3</b><span><strong>Explain your decision</strong><small>Write one evidence-based statement, then identify one action or claim you would reject and explain why.</small></span></article></div></section>
    <div className="cap-layout"><article className="prose source" dangerouslySetInnerHTML={{ __html: (content?.capstone || "").replaceAll("portfolio", "action plan").replaceAll("Portfolio", "Action plan") }} /><section className="builder"><div className="section-head"><div><span className="eyebrow">Step 2 · Select priorities</span><h2>Choose four priority actions</h2></div></div><p className="builder-help">Tick exactly four options. Base your choice on the Orion data and the principles covered in the modules.</p><div className="actions">{actions.map((a, i) => <label className={progress.actions.includes(a) ? "selected" : ""} key={a}><input type="checkbox" checked={progress.actions.includes(a)} disabled={!progress.actions.includes(a) && progress.actions.length === 4} onChange={() => toggle(a)} /><b>{String(i + 1).padStart(2, "0")}</b><span>{a}</span></label>)}</div><label className="field"><span>Step 3A · Write one evidence-based statement about your action plan</span><small>State the scope, baseline, method, expected result or target, and one important limitation. Do not present a target as an achieved result.</small><textarea rows={5} value={progress.claim} placeholder="Example structure: For [scope], compared with [baseline], we will... Measurement will use... A key limitation is..." onChange={e => patch({ claim: e.target.value, capstoneDone: false })} /></label><label className="field"><span>Step 3B · Identify what you would reject</span><small>Name one proposed action or statement that should not proceed, then explain which requirement it fails: evidence, safety, airworthiness, security or mission need.</small><textarea rows={5} value={progress.rejection} placeholder="I would reject... because..." onChange={e => patch({ rejection: e.target.value, capstoneDone: false })} /></label><div className={`lab-end ${progress.capstoneDone ? "done" : ""}`}><span><b>{progress.capstoneDone ? "Final project complete" : "Finish all three steps"}</b><small>Select four actions and complete both written explanations.</small></span><button className="primary" disabled={!valid} onClick={() => patch({ capstoneDone: true })}>Complete final project</button></div></section></div></div>;
}

function Certificate({ ready, progress, patch, back }: { ready: boolean; progress: Progress; patch: (p: Partial<Progress>) => void; back: () => void }) {
  if (!ready) return <div className="wide"><Locked title="The certificate unlocks after all modules, the final practical project and final assessment are complete." /></div>;
  const date = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(new Date());
  return <div className="certificate-page"><div className="certificate-tools"><button className="secondary" onClick={back}>← Back</button><label>Name on certificate<input value={progress.name} placeholder="Enter learner name" onChange={e => patch({ name: e.target.value })} /></label><button className="primary" disabled={!progress.name.trim()} onClick={() => window.print()}>Print / save as PDF</button></div><section className="certificate"><div><span className="logo">AP</span><p>Sustainable Aviation &amp; Performance</p><span className="eyebrow">Certificate of completion</span><h1>Advanced Sustainability in Air Power Services</h1><small>This certificate is awarded to</small><strong>{progress.name || "Learner name"}</strong><p>for successfully completing the advanced 10–12 hour digital specialisation in evidence-based in-service sustainability decisions.</p><section><span><small>Completion date</small><b>{date}</b></span><span><small>Final assessment</small><b>{progress.finalScore}%</b></span><span><small>Format</small><b>100% online</b></span></section><em>Completion confirms participation in an internal learning activity. It is not a professional licence, delegated authority or airworthiness approval.</em></div></section></div>;
}
