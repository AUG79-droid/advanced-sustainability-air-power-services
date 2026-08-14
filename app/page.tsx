"use client";

import { useState } from "react";
import "./visuals.css";

const lessons = [
  { id: 1, code: "1.1", title: "The aviation system today", time: "20 min" },
  {
    id: 2,
    code: "1.2",
    title: "Environmental impacts and performance",
    time: "30 min",
  },
  { id: 3, code: "1.3", title: "The SDGs and aviation", time: "20 min" },
  {
    id: 4,
    code: "1.4",
    title: "Legal framework and institutions",
    time: "30 min",
  },
  {
    id: 5,
    code: "1.5",
    title: "Aviation Sustainability Impact Map",
    time: "20 min",
  },
  { id: 6, code: "1.6", title: "Module knowledge check", time: "10 min" },
];

const questions = [
  {
    q: "Why can fuel efficiency improve while aviation’s total fuel use still rises?",
    options: [
      "Efficiency data are always unreliable",
      "Traffic growth can outpace efficiency gains",
      "Only airports use fuel",
      "CO₂ is unrelated to fuel",
    ],
    a: 1,
    why: "Intensity and absolute impact answer different questions. If activity grows faster than fuel use per unit of service falls, total fuel and emissions can still increase.",
  },
  {
    q: "Which is the best functional unit for comparing two passenger transport alternatives?",
    options: [
      "One aircraft",
      "One litre of fuel",
      "One passenger transported one kilometre",
      "One airport",
    ],
    a: 2,
    why: "A passenger-kilometre expresses the service delivered and allows alternatives with different capacity and distance to be compared more fairly.",
  },
  {
    q: "Which statement best describes an environmental interdependency?",
    options: [
      "Every measure improves every impact",
      "A decision can improve one impact while worsening another",
      "Noise and emissions never interact",
      "Only climate effects matter",
    ],
    a: 1,
    why: "Measures can create synergies or trade-offs. A procedure may reduce fuel and noise in one context, while a design choice may reduce noise but add mass and fuel burn.",
  },
  {
    q: "What is ICAO’s primary role?",
    options: [
      "Operating all airports",
      "Creating the international civil-aviation standards and cooperation framework",
      "Manufacturing aircraft",
      "Writing each company’s environmental policy",
    ],
    a: 1,
    why: "ICAO develops international Standards and Recommended Practices and coordinates States. States transpose and enforce applicable requirements through their own systems.",
  },
  {
    q: "Which claim is most defensible?",
    options: [
      "This is a green flight",
      "Aviation is now sustainable",
      "Fuel burn per flight fell 4% against the stated 2025 baseline; total annual fuel rose 2% as activity increased",
      "This aircraft has no environmental impact",
    ],
    a: 2,
    why: "It identifies the metric, boundary, baseline and countervailing absolute trend. It does not turn a limited improvement into an overall sustainability claim.",
  },
];

const climateLessons = [
  { id: 1, code: "2.1", title: "Climate change fundamentals", time: "25 min" },
  {
    id: 2,
    code: "2.2",
    title: "Aviation’s climate contribution",
    time: "35 min",
  },
  {
    id: 3,
    code: "2.3",
    title: "Goals and the four-pillar strategy",
    time: "30 min",
  },
  {
    id: 4,
    code: "2.4",
    title: "Operational measures and limits",
    time: "35 min",
  },
  {
    id: 5,
    code: "2.5",
    title: "Measurement, CORSIA and claims",
    time: "30 min",
  },
  {
    id: 6,
    code: "2.6",
    title: "Air Power Climate Decision Lab",
    time: "25 min",
  },
  { id: 7, code: "2.7", title: "Module knowledge check", time: "15 min" },
];

const climateQuestions = [
  {
    q: "Why is aviation CO₂ described as a stock pollutant?",
    options: [
      "It disappears after each flight",
      "Its warming effect depends only on airport location",
      "A substantial fraction accumulates and influences climate over long timescales",
      "It is stored inside the aircraft",
    ],
    a: 2,
    why: "CO₂ adds to the atmospheric stock. Climate outcome therefore depends on cumulative emissions, not only the rate in one year or the efficiency of one flight.",
  },
  {
    q: "Which statement about aviation’s non-CO₂ effects is most accurate?",
    options: [
      "They are identical to CO₂ and persist for the same duration",
      "They include effects involving NOₓ, water vapour, particles and contrail-cirrus, with strong dependence on location and atmospheric conditions",
      "They occur only during taxi",
      "They can be ignored whenever fuel burn falls",
    ],
    a: 1,
    why: "Non-CO₂ effects arise through several mechanisms and are more spatially and temporally variable than CO₂. Fuel reduction often helps, but it does not fully describe them.",
  },
  {
    q: "What is the relationship between the three sector goals and the four-pillar strategy?",
    options: [
      "The goals describe desired outcomes; the pillars describe families of measures used to pursue them",
      "They are two names for exactly the same list",
      "The pillars apply only to airports",
      "The goals guarantee that absolute emissions already decline",
    ],
    a: 0,
    why: "Goals express intended performance or trajectory. Technology, operations, infrastructure and fuels/market-based measures are implementation levers, whose realised contribution must be measured.",
  },
  {
    q: "A route optimisation saves 600 kg of fuel on a comparable mission. Using 3.16 kg CO₂ per kg of conventional jet fuel, what is the direct combustion CO₂ reduction?",
    options: ["190 kg", "600 kg", "1,896 kg", "3,160 kg"],
    a: 2,
    why: "600 × 3.16 = 1,896 kg CO₂. This is a direct combustion estimate; it is not a complete lifecycle or non-CO₂ result.",
  },
  {
    q: "Which is the strongest evidence that an operational measure caused a reduction?",
    options: [
      "A pilot says the flight felt efficient",
      "One flight used less fuel than the annual average",
      "Comparable baseline and post-intervention missions, controlled for material drivers, with approved procedures and uncertainty stated",
      "The measure appears in an industry roadmap",
    ],
    a: 2,
    why: "Causal attribution needs a credible counterfactual, comparable activity, controlled confounders, authorised implementation and transparent limitations.",
  },
  {
    q: "What does CORSIA primarily address?",
    options: [
      "All lifecycle environmental impacts of every aircraft",
      "International aviation CO₂ emissions within a defined monitoring and offsetting framework",
      "Airport noise certification",
      "Military mission fuel planning",
    ],
    a: 1,
    why: "CORSIA has a specific scope and accounting architecture for international aviation CO₂. It is not a complete climate strategy, lifecycle assessment or automatic framework for State aircraft.",
  },
  {
    q: "Which statement avoids greenwashing?",
    options: [
      "This is a climate-neutral mission",
      "Our A400M operations are green",
      "For the defined training mission class, verified fuel intensity fell 5% versus the 2025 baseline; total fuel and non-CO₂ effects are reported separately",
      "Using SAF makes the flight zero-emission",
    ],
    a: 2,
    why: "The statement defines scope, metric, baseline and limitations. It does not convert a bounded efficiency result into an overall or zero-impact claim.",
  },
  {
    q: "Why must a SAF claim use lifecycle accounting?",
    options: [
      "Because combustion produces no CO₂",
      "Because climate performance depends on feedstock, production energy, land-use effects, transport and the accounting method as well as use",
      "Because all SAF pathways have the same result",
      "Because lifecycle boundaries are optional in fuel comparison",
    ],
    a: 1,
    why: "Aircraft still emit CO₂ at combustion. The claimed benefit is assessed across a defined lifecycle pathway and varies by pathway, counterfactual and methodology.",
  },
  {
    q: "Which action should come first when assessing a climate lever for an Air Power mission?",
    options: [
      "Choose the technology with the strongest marketing claim",
      "Define the authorised mission service, comparable baseline and non-negotiable safety, airworthiness, security and mission constraints",
      "Apply an airline average",
      "Assume civil-market mechanisms apply",
    ],
    a: 1,
    why: "Decision quality starts with the service and mandatory gates. Only then can feasible alternatives and environmental consequences be compared.",
  },
  {
    q: "Why can fuel intensity fall while total CO₂ rises?",
    options: [
      "CO₂ is not linked to fuel",
      "Activity can grow faster than intensity improves",
      "Intensity always measures noise",
      "Only upstream emissions increase",
    ],
    a: 1,
    why: "Total impact equals activity multiplied by impact per unit. Both absolute and intensity indicators are needed to interpret progress.",
  },
];

const noiseLessons = [
  {
    id: 1,
    code: "3.1",
    title: "Sound, noise and human response",
    time: "30 min",
  },
  {
    id: 2,
    code: "3.2",
    title: "Aircraft and airbase noise sources",
    time: "30 min",
  },
  {
    id: 3,
    code: "3.3",
    title: "Measuring exposure and impact",
    time: "35 min",
  },
  {
    id: 4,
    code: "3.4",
    title: "Progress and the Balanced Approach",
    time: "35 min",
  },
  {
    id: 5,
    code: "3.5",
    title: "Interdependencies and Air Power decisions",
    time: "30 min",
  },
  { id: 6, code: "3.6", title: "Air Power Noise Decision Lab", time: "25 min" },
  { id: 7, code: "3.7", title: "Module knowledge check", time: "15 min" },
];

const noiseQuestions = [
  {
    q: "Why is a 10 dB increase not interpreted as merely ‘ten units louder’ by a listener?",
    options: [
      "Decibels are a logarithmic scale and perceived loudness is not linear",
      "All aircraft sounds have the same frequency",
      "Duration never affects perception",
      "Decibels measure fuel",
    ],
    a: 0,
    why: "The decibel scale is logarithmic. Sound energy and perceived loudness do not rise in a simple one-to-one way with the displayed number.",
  },
  {
    q: "Which metric is designed to describe the sound exposure of one discrete aircraft event?",
    options: ["Annual fuel intensity", "SEL", "CO₂e", "Waste recovery rate"],
    a: 1,
    why: "Sound Exposure Level compresses the acoustic energy of an event into a standardised one-second reference. It captures level and duration, but does not alone describe long-term community exposure.",
  },
  {
    q: "Why can two locations with the same annual average indicator experience aviation noise differently?",
    options: [
      "Annual indicators contain every detail",
      "The number, timing, maximum level and distribution of events may differ",
      "Only aircraft colour matters",
      "Background sound is legally irrelevant",
    ],
    a: 1,
    why: "An aggregate exposure value can conceal event pattern, respite, night events and peak levels. Distribution and context affect disturbance and interpretation.",
  },
  {
    q: "Which sequence correctly represents ICAO’s Balanced Approach?",
    options: [
      "Compensation, publicity, certification, recycling",
      "Reduce noise at source; land-use planning; noise-abatement operational procedures; operating restrictions",
      "Only curfews and bans",
      "Fuel efficiency, SAF, offsets, recycling",
    ],
    a: 1,
    why: "The four principal elements must be assessed in a balanced, airport-specific way. Restrictions are considered only after examining the other elements and cost-effectiveness.",
  },
  {
    q: "What is the best first step in a noise assessment?",
    options: [
      "Choose an operating restriction",
      "Define the affected system, sources, receptors, period, baseline and decision question",
      "Report one certification value",
      "Assume every complaint maps directly to one aircraft",
    ],
    a: 1,
    why: "A credible assessment begins with scope and baseline. Only then can appropriate event and exposure metrics, monitoring and management measures be selected.",
  },
  {
    q: "Which statement about aircraft noise certification is correct?",
    options: [
      "It proves nobody will be annoyed",
      "It provides standardised source-performance information but does not replace local exposure assessment",
      "It measures every ground source at every base",
      "It automatically authorises night operations",
    ],
    a: 1,
    why: "Certification enables consistent aircraft comparison under prescribed conditions. Community exposure also depends on traffic, paths, operations, terrain, buildings and time.",
  },
  {
    q: "Why might a noise-abatement procedure create an environmental trade-off?",
    options: [
      "Noise and fuel can never interact",
      "Changing thrust, speed or trajectory can redistribute noise and may change fuel burn and emissions",
      "Only maintenance affects noise",
      "Trade-offs exist only in civil aviation",
    ],
    a: 1,
    why: "Trajectory and power-setting choices can move exposure between areas or alter fuel and emissions. Safety and operational constraints remain mandatory.",
  },
  {
    q: "What is ‘respite’ in noise management?",
    options: [
      "Eliminating every sound event",
      "Predictable periods or areas of relative relief from aircraft noise",
      "A type of carbon offset",
      "A quieter engine certificate",
    ],
    a: 1,
    why: "Respite manages the temporal or spatial distribution of events so communities receive meaningful relief, although it may concentrate exposure elsewhere and must be evaluated fairly.",
  },
  {
    q: "Which claim is most defensible?",
    options: [
      "The base is noise-free",
      "This is a silent aircraft",
      "For the defined training period, monitored night events above the stated threshold fell 18% versus the matched baseline; daytime exposure and route redistribution are reported separately",
      "The A400M is environmentally harmless",
    ],
    a: 2,
    why: "It defines the indicator, period and baseline and acknowledges remaining dimensions. It does not turn a bounded improvement into an absolute claim.",
  },
  {
    q: "For a State-aircraft operation, what must happen before importing a civil airport measure?",
    options: [
      "Nothing; all measures transfer automatically",
      "Check legal applicability and test safety, security, airworthiness and mission constraints in the local context",
      "Use airline passenger-kilometres",
      "Ignore exposed communities",
    ],
    a: 1,
    why: "Civil frameworks provide useful principles, but legal applicability and operational feasibility cannot be assumed for State aircraft.",
  },
];

const airLessons = [
  { id: 1, code: "4.1", title: "Air pollution and health", time: "30 min" },
  { id: 2, code: "4.2", title: "Sources across the airfield", time: "35 min" },
  {
    id: 3,
    code: "4.3",
    title: "Inventories, dispersion and exposure",
    time: "35 min",
  },
  { id: 4, code: "4.4", title: "Controls and joint action", time: "35 min" },
  {
    id: 5,
    code: "4.5",
    title: "Charges, trade-offs and Air Power",
    time: "30 min",
  },
  { id: 6, code: "4.6", title: "Air Power Air Quality Lab", time: "25 min" },
  { id: 7, code: "4.7", title: "Module knowledge check", time: "15 min" },
];
const airQuestions = [
  {
    q: "Which statement correctly distinguishes emissions from concentration?",
    options: [
      "They are the same quantity",
      "Emissions describe pollutant released; concentration describes pollutant present in ambient air at a place and time",
      "Concentration is only fuel use",
      "Emissions measure human exposure directly",
    ],
    a: 1,
    why: "An inventory quantifies releases. Ambient concentration results from those releases plus dispersion, chemistry, background sources and meteorology.",
  },
  {
    q: "Which group contains important aviation-related local air pollutants?",
    options: [
      "NOₓ, particulate matter, CO, SOₓ and unburned hydrocarbons",
      "Only CO₂",
      "Only water vapour",
      "Noise and waste",
    ],
    a: 0,
    why: "Combustion and ground activities emit several pollutants. CO₂ is central to climate accounting but is not normally the principal local toxic air pollutant.",
  },
  {
    q: "What does the ICAO LTO cycle represent?",
    options: [
      "Every real mission exactly",
      "A standardised certification cycle below 3,000 feet using defined operating modes and times",
      "Aircraft manufacturing",
      "Annual community exposure",
    ],
    a: 1,
    why: "The LTO cycle supports standardised engine-emissions certification and inventory methods; actual operations can differ from its assumptions.",
  },
  {
    q: "Why is source apportionment difficult around an airfield?",
    options: [
      "Only aircraft emit pollutants",
      "Aircraft, APUs, GSE, road traffic, heating and regional background overlap",
      "Wind has no effect",
      "Monitoring identifies every source automatically",
    ],
    a: 1,
    why: "Multiple sources contribute to the same pollutants, and their plumes mix. Temporal, spatial and chemical evidence is needed.",
  },
  {
    q: "Which is a secondary pollutant?",
    options: [
      "NO emitted directly from combustion",
      "Ozone formed through atmospheric reactions involving precursors",
      "Fuel loaded into an aircraft",
      "Engine noise",
    ],
    a: 1,
    why: "Ground-level ozone is formed in the atmosphere from precursor pollutants under suitable conditions; it is not simply emitted from one exhaust.",
  },
  {
    q: "Why are ultrafine particles important near aviation sources?",
    options: [
      "They are fully represented by mass alone",
      "Their high number concentration and small size can matter even when total particle mass is modest",
      "They occur only in offices",
      "They are identical to CO₂",
    ],
    a: 1,
    why: "Particle mass, number and size distribution describe different properties. Ultrafine particles can be numerous while contributing little mass.",
  },
  {
    q: "Which control follows the strongest hierarchy?",
    options: [
      "Measure only after complaints",
      "Avoid or reduce activity and emissions at source, then apply operational and exposure controls",
      "Use a fee as the only measure",
      "Move every source to night-time",
    ],
    a: 1,
    why: "Prevention and source reduction generally provide more reliable physical benefit than relying only on administrative or economic instruments.",
  },
  {
    q: "What must an environmental charge demonstrate?",
    options: [
      "A green label",
      "A defined objective, pollutant basis, incentive mechanism, legal basis and evaluation of actual response",
      "Only revenue collected",
      "Automatic applicability to State aircraft",
    ],
    a: 1,
    why: "A charge is a policy instrument, not a physical reduction. Its design and behavioural effect must be evidenced.",
  },
  {
    q: "Which claim is most defensible?",
    options: [
      "The base has clean air",
      "A400M operations are emission-free",
      "Measured annual mean NO₂ at the stated boundary monitor fell 9% versus the comparable baseline; source attribution and meteorological uncertainty are reported separately",
      "Electric GSE has zero lifecycle impact",
    ],
    a: 2,
    why: "It defines pollutant, metric, location, baseline and limitations without claiming a total or causal result beyond the evidence.",
  },
  {
    q: "What is the correct approach for an Air Power measure?",
    options: [
      "Copy a civil-airport measure automatically",
      "Define mission and legal constraints, establish the airshed baseline, compare feasible controls and verify the outcome",
      "Ignore non-aircraft sources",
      "Use certification data as community monitoring",
    ],
    a: 1,
    why: "Air Power decisions require explicit applicability and operational gates plus an evidence-based local assessment.",
  },
];

const localLessons = [
  {
    id: 1,
    code: "5.1",
    title: "Water, wastewater and contamination",
    time: "35 min",
  },
  {
    id: 2,
    code: "5.2",
    title: "Waste prevention and circularity",
    time: "35 min",
  },
  {
    id: 3,
    code: "5.3",
    title: "Wildlife, biodiversity and land use",
    time: "35 min",
  },
  {
    id: 4,
    code: "5.4",
    title: "Energy and major environmental risks",
    time: "30 min",
  },
  {
    id: 5,
    code: "5.5",
    title: "Aircraft end-of-life and decommissioning",
    time: "35 min",
  },
  { id: 6, code: "5.6", title: "Local Impact Control Plan", time: "25 min" },
  { id: 7, code: "5.7", title: "Module knowledge check", time: "15 min" },
];
const localQuestions = [
  {
    q: "What should come before treating contaminated wastewater?",
    options: [
      "Dilution",
      "Preventing or separating contamination at source",
      "Sending every flow to one drain",
      "A sustainability claim",
    ],
    a: 1,
    why: "Prevention, substitution, dry methods and segregation reduce both risk and treatment demand before end-of-pipe controls.",
  },
  {
    q: "Which is the strongest waste hierarchy outcome?",
    options: [
      "Disposal with documentation",
      "Recycling a material after use",
      "Avoiding the waste while delivering the same authorised service",
      "Energy recovery",
    ],
    a: 2,
    why: "Prevention retains the greatest value and avoids upstream impacts. Recycling remains important for material that cannot be prevented or reused.",
  },
  {
    q: "Why can a high recycling rate be misleading?",
    options: [
      "Recycling has no value",
      "Total waste may increase, hazardous fractions may be omitted, or mass-heavy streams may dominate the percentage",
      "Percentages are illegal",
      "Only cost matters",
    ],
    a: 1,
    why: "Report absolute waste, intensity, hazardous streams and treatment route alongside the headline rate.",
  },
  {
    q: "What is the first principle of airfield wildlife management?",
    options: [
      "Maximise all species next to runways",
      "Protect flight safety while managing habitat and biodiversity with site-specific ecological evidence",
      "Remove every habitat from the region",
      "Feed wildlife away from the runway",
    ],
    a: 1,
    why: "Airfield biodiversity decisions must integrate collision risk, legal protection and landscape ecology rather than pursue a simple species-count target.",
  },
  {
    q: "Which indicator is strongest for an energy project?",
    options: [
      "Number of posters",
      "Verified kWh avoided against a normalised baseline, plus peak demand and operational guardrails",
      "Installed equipment count only",
      "Green energy claim",
    ],
    a: 1,
    why: "Physical energy outcome, baseline and relevant drivers are required; activity counts do not demonstrate performance.",
  },
  {
    q: "Why are environmental emergency controls layered?",
    options: [
      "One barrier always works",
      "Prevention, detection, containment, response and learning reduce different parts of likelihood and consequence",
      "Audits replace equipment",
      "Only insurers require them",
    ],
    a: 1,
    why: "Major risk management assumes individual controls can fail and uses independent or complementary layers.",
  },
  {
    q: "When does aircraft end-of-life planning ideally begin?",
    options: [
      "After uncontrolled dismantling",
      "During design and through asset/material information management",
      "Only when scrap prices rise",
      "After all records are lost",
    ],
    a: 1,
    why: "Design choices, material traceability, hazardous-substance information and disassembly planning shape later recovery options.",
  },
  {
    q: "What must be checked before reusing an aircraft component?",
    options: [
      "Colour only",
      "Airworthiness, traceability, approved condition and applicable release/documentation",
      "Recycling rate",
      "Marketing value",
    ],
    a: 1,
    why: "Circularity cannot override safety, configuration control or regulatory evidence.",
  },
  {
    q: "Which claim is defensible?",
    options: [
      "Zero-waste maintenance",
      "The base is biodiversity-positive",
      "Non-hazardous waste per comparable maintenance event fell 12% versus baseline; total and hazardous waste are reported separately",
      "The retired aircraft is 100% recyclable",
    ],
    a: 2,
    why: "It defines scope, metric and baseline and discloses important excluded dimensions.",
  },
  {
    q: "What is a sound local-impact decision sequence?",
    options: [
      "Choose the most visible initiative",
      "Define service and legal gates, map aspects and receptors, prioritise controls, verify outcomes and review trade-offs",
      "Count activities only",
      "Apply civil examples automatically to State aircraft",
    ],
    a: 1,
    why: "A structured, evidence-based sequence prevents symbolic action and hidden burden shifting.",
  },
];

const managementLessons = [
  {
    id: 1,
    code: "6.1",
    title: "Management systems and the PDCA cycle",
    time: "35 min",
  },
  {
    id: 2,
    code: "6.2",
    title: "Context, aspects, compliance and risk",
    time: "40 min",
  },
  {
    id: 3,
    code: "6.3",
    title: "Objectives, controls and performance",
    time: "40 min",
  },
  {
    id: 4,
    code: "6.4",
    title: "Audit, incidents and improvement",
    time: "35 min",
  },
  {
    id: 5,
    code: "6.5",
    title: "Governance, responsibility and reporting",
    time: "40 min",
  },
  { id: 6, code: "6.6", title: "EMS Control Architecture Lab", time: "30 min" },
  { id: 7, code: "6.7", title: "Module knowledge check", time: "15 min" },
];
const managementQuestions = [
  {
    q: "What does ISO 14001 certification demonstrate?",
    options: [
      "Zero environmental impact",
      "Conformity of a defined management system with the standard, subject to audit scope",
      "Automatic legal compliance",
      "That every target has been achieved",
    ],
    a: 1,
    why: "Certification concerns the management system within a defined scope. It does not guarantee compliance at every moment or a particular performance level.",
  },
  {
    q: "Why must an aspect register connect to operational controls?",
    options: [
      "To make the register longer",
      "Because significance analysis has value only when it drives ownership, controls, monitoring and action",
      "Auditors require colours",
      "Aspects replace legal requirements",
    ],
    a: 1,
    why: "An isolated list does not manage impact. Significant aspects must be translated into effective controls and performance evaluation.",
  },
  {
    q: "Which is the strongest compliance-evaluation method?",
    options: [
      "Assume a permit is followed",
      "Map each obligation to evidence, sample implementation and record a conclusion",
      "Count legal documents",
      "Rely only on external audits",
    ],
    a: 1,
    why: "Compliance evaluation tests applicable requirements against current, objective evidence and records the result.",
  },
  {
    q: "Which objective is best designed?",
    options: [
      "Be greener",
      "Improve awareness",
      "Reduce verified hazardous solvent use per comparable maintenance event by 12% from the stated baseline by year-end, without process or airworthiness degradation",
      "Run four campaigns",
    ],
    a: 2,
    why: "It defines outcome, metric, baseline, deadline and guardrail rather than only activity.",
  },
  {
    q: "What is process adherence?",
    options: [
      "Having a procedure",
      "Evidence that the approved process is understood, feasible and performed as designed",
      "Passing one audit",
      "Completing training only",
    ],
    a: 1,
    why: "Adherence requires actual execution and evidence; repeated deviations can indicate behaviour, design, resource or competence problems.",
  },
  {
    q: "What is the difference between correction and corrective action?",
    options: [
      "None",
      "Correction addresses the detected problem; corrective action removes or controls its cause to prevent recurrence",
      "Corrective action hides evidence",
      "Correction changes a target",
    ],
    a: 1,
    why: "Containment or correction restores control now, while causal action addresses recurrence risk.",
  },
  {
    q: "Why is audit independence important?",
    options: [
      "Auditors know nothing",
      "It supports objective evaluation free from responsibility for the activity audited",
      "It removes the need for competence",
      "It guarantees no findings",
    ],
    a: 1,
    why: "Independence reduces self-review bias, while auditors still need relevant technical and audit competence.",
  },
  {
    q: "Which reporting statement is defensible?",
    options: [
      "Our certified EMS proves sustainability",
      "All data are accurate because they are in a dashboard",
      "Scope 1 and 2 emissions for the stated entities fell 8% versus baseline; methodology, restatement and assurance status are disclosed",
      "The site is planet-positive",
    ],
    a: 2,
    why: "It defines scope and evidence and discloses methodological status instead of turning management activity into an absolute claim.",
  },
  {
    q: "What is management review for?",
    options: [
      "Reading every procedure aloud",
      "Senior evaluation of system suitability, adequacy, effectiveness, performance, change and resource needs",
      "Replacing audits",
      "Approving marketing",
    ],
    a: 1,
    why: "Management review uses evidence to make decisions about direction, priorities, resources and improvement.",
  },
  {
    q: "What should happen when a KPI improves but physical impact rises?",
    options: [
      "Publish the KPI alone",
      "Examine activity, boundaries and absolute results, then revise decisions or communication",
      "Delete the baseline",
      "Call it sustainable",
    ],
    a: 1,
    why: "Intensity and absolute impact answer different questions; governance must address both and prevent selective reporting.",
  },
];

const communicationLessons = [
  {
    id: 1,
    code: "7.1",
    title: "Communication as a controlled process",
    time: "30 min",
  },
  {
    id: 2,
    code: "7.2",
    title: "Stakeholders, audiences and materiality",
    time: "35 min",
  },
  {
    id: 3,
    code: "7.3",
    title: "Claims and greenwashing prevention",
    time: "40 min",
  },
  {
    id: 4,
    code: "7.4",
    title: "Internal engagement and behaviour",
    time: "35 min",
  },
  {
    id: 5,
    code: "7.5",
    title: "Reporting, incidents and public response",
    time: "40 min",
  },
  { id: 6, code: "7.6", title: "Evidence-to-Message Lab", time: "30 min" },
  { id: 7, code: "7.7", title: "Final module knowledge check", time: "15 min" },
];
const communicationQuestions = [
  {
    q: "What should determine an environmental message before wording is drafted?",
    options: [
      "The most attractive image",
      "Purpose, audience, decision, evidence boundary and approval route",
      "A green colour palette",
      "The longest report",
    ],
    a: 1,
    why: "Communication design begins with purpose, audience and evidence. Wording cannot repair an undefined boundary or unsupported conclusion.",
  },
  {
    q: "Why can the same evidence require different messages for different audiences?",
    options: [
      "Facts may be changed",
      "Audience decisions, prior knowledge and required detail differ, while the underlying facts must remain consistent",
      "Executives need no limitations",
      "Communities need only slogans",
    ],
    a: 1,
    why: "Adapt structure, language and depth—not the evidence, material caveats or meaning.",
  },
  {
    q: "Which claim is most defensible?",
    options: [
      "A sustainable A400M mission",
      "Zero-impact maintenance",
      "Fuel intensity for the defined training-mission class fell 6% versus the matched baseline; absolute fuel and non-CO₂ effects are disclosed separately",
      "Green Air Power",
    ],
    a: 2,
    why: "It identifies scope, metric, baseline and important limitations without converting a bounded result into an overall label.",
  },
  {
    q: "What is the problem with an unqualified ‘carbon neutral’ claim?",
    options: [
      "It is always too short",
      "It can hide the emissions boundary, residual emissions, external units, period and methodology",
      "It uses English",
      "It contains a number",
    ],
    a: 1,
    why: "Neutrality language can imply no climate impact unless scope, reductions, residuals and compensation are made explicit.",
  },
  {
    q: "Which engagement measure best tests effectiveness?",
    options: [
      "Number of posters",
      "Email opens only",
      "Observed control behaviour and verified environmental outcome, supported by reach and comprehension data",
      "Training invitations",
    ],
    a: 2,
    why: "Reach and awareness are intermediate measures; the management objective is competent action and physical performance.",
  },
  {
    q: "How should uncertainty be communicated?",
    options: [
      "Hide it to avoid confusion",
      "State material assumptions, range or confidence and how it affects the decision",
      "Replace data with adjectives",
      "Publish every raw record without explanation",
    ],
    a: 1,
    why: "Proportionate uncertainty disclosure improves decision quality and prevents false precision.",
  },
  {
    q: "What is the first communication priority during an environmental incident?",
    options: [
      "Protect reputation",
      "Support safety and response with verified facts, clear responsibilities and timely updates",
      "Assign blame publicly",
      "Publish a sustainability campaign",
    ],
    a: 1,
    why: "Incident communication must support response and affected people; accuracy, timeliness and correction are essential.",
  },
  {
    q: "What should happen if previously published data are materially wrong?",
    options: [
      "Leave them unchanged",
      "Correct transparently, explain the nature and effect of the error, and strengthen controls",
      "Delete the whole report silently",
      "Change the baseline without notice",
    ],
    a: 1,
    why: "Transparent correction and control improvement protect the integrity of the evidence chain.",
  },
  {
    q: "Which visual practice risks greenwashing?",
    options: [
      "A labelled process diagram",
      "Using pristine nature imagery to imply overall environmental benefit where the evidence covers only a narrow efficiency result",
      "A table with a source",
      "Showing absolute and intensity trends",
    ],
    a: 1,
    why: "Visuals shape interpretation and must not imply a wider benefit than the substantiated claim.",
  },
  {
    q: "What is the final approval question for a claim?",
    options: [
      "Does it sound ambitious?",
      "Would a reasonable audience understand a broader benefit than the evidence supports?",
      "Is it short?",
      "Does it mention innovation?",
    ],
    a: 1,
    why: "Claims should be tested against likely audience interpretation, not only literal wording or internal intent.",
  },
];

function Callout({
  title,
  children,
  tone = "blue",
}: {
  title: string;
  children: React.ReactNode;
  tone?: string;
}) {
  return (
    <aside className={`callout ${tone}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export default function Home() {
  const stored = (key: string) => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
      return [];
    }
  };
  const [active, setActive] = useState(-1);
  const [module, setModule] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const [done, setDone] = useState<number[]>(() =>
    stored("aviation-sustainability-m1"),
  );
  const [done2, setDone2] = useState<number[]>(() =>
    stored("aviation-sustainability-m2"),
  );
  const [done3, setDone3] = useState<number[]>(() =>
    stored("aviation-sustainability-m3"),
  );
  const [done4, setDone4] = useState<number[]>(() =>
    stored("aviation-sustainability-m4"),
  );
  const [done5, setDone5] = useState<number[]>(() =>
    stored("aviation-sustainability-m5"),
  );
  const [done6, setDone6] = useState<number[]>(() =>
    stored("aviation-sustainability-m6"),
  );
  const [done7, setDone7] = useState<number[]>(() =>
    stored("aviation-sustainability-m7"),
  );
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const mark = (n: number) => {
    const next = [...new Set([...done, n])];
    setDone(next);
    localStorage.setItem("aviation-sustainability-m1", JSON.stringify(next));
  };
  const mark2 = (n: number) => {
    const next = [...new Set([...done2, n])];
    setDone2(next);
    localStorage.setItem("aviation-sustainability-m2", JSON.stringify(next));
  };
  const mark3 = (n: number) => {
    const next = [...new Set([...done3, n])];
    setDone3(next);
    localStorage.setItem("aviation-sustainability-m3", JSON.stringify(next));
  };
  const mark4 = (n: number) => {
    const next = [...new Set([...done4, n])];
    setDone4(next);
    localStorage.setItem("aviation-sustainability-m4", JSON.stringify(next));
  };
  const mark5 = (n: number) => {
    const next = [...new Set([...done5, n])];
    setDone5(next);
    localStorage.setItem("aviation-sustainability-m5", JSON.stringify(next));
  };
  const mark6 = (n: number) => {
    const next = [...new Set([...done6, n])];
    setDone6(next);
    localStorage.setItem("aviation-sustainability-m6", JSON.stringify(next));
  };
  const mark7 = (n: number) => {
    const next = [...new Set([...done7, n])];
    setDone7(next);
    localStorage.setItem("aviation-sustainability-m7", JSON.stringify(next));
  };
  const currentDone =
    module === 1
      ? done
      : module === 2
        ? done2
        : module === 3
          ? done3
          : module === 4
            ? done4
            : module === 5
              ? done5
              : module === 6
                ? done6
                : done7;
  const currentLessons =
    module === 1
      ? lessons
      : module === 2
        ? climateLessons
        : module === 3
          ? noiseLessons
          : module === 4
            ? airLessons
            : module === 5
              ? localLessons
              : module === 6
                ? managementLessons
                : communicationLessons;
  const currentQuestions =
    module === 1
      ? questions
      : module === 2
        ? climateQuestions
        : module === 3
          ? noiseQuestions
          : module === 4
            ? airQuestions
            : module === 5
              ? localQuestions
              : module === 6
                ? managementQuestions
                : communicationQuestions;
  const score = currentQuestions.filter((q, i) => answers[i] === q.a).length;
  const openModule = (m: 1 | 2 | 3 | 4 | 5 | 6 | 7, n = 0) => {
    setModule(m);
    setActive(n);
    setAnswers({});
    setChecked(false);
    scrollTo(0, 0);
  };
  return (
    <div className="app">
      <header>
        <button
          className="brand"
          onClick={() => {
            setActive(-1);
            scrollTo(0, 0);
          }}
        >
          <span>AS</span>
          <b>Aviation &amp; Sustainability</b>
        </button>
        {active >= 0 && (
          <div className="header-progress">
            <small>MODULE {module} PROGRESS</small>
            <i>
              <em
                style={{
                  width: `${(currentDone.length / currentLessons.length) * 100}%`,
                }}
              />
            </i>
            <b>
              {currentDone.length}/{currentLessons.length}
            </b>
          </div>
        )}
      </header>
      {active === -1 ? (
        <CourseCover
          done={done}
          done2={done2}
          done3={done3}
          done4={done4}
          done5={done5}
          done6={done6}
          done7={done7}
          onStart={() =>
            openModule(1, done.length ? Math.min(done.length, 5) : 0)
          }
          onStart2={() =>
            openModule(2, done2.length ? Math.min(done2.length, 6) : 0)
          }
          onStart3={() =>
            openModule(3, done3.length ? Math.min(done3.length, 6) : 0)
          }
          onStart4={() =>
            openModule(4, done4.length ? Math.min(done4.length, 6) : 0)
          }
          onStart5={() =>
            openModule(5, done5.length ? Math.min(done5.length, 6) : 0)
          }
          onStart6={() =>
            openModule(6, done6.length ? Math.min(done6.length, 6) : 0)
          }
          onStart7={() =>
            openModule(7, done7.length ? Math.min(done7.length, 6) : 0)
          }
        />
      ) : (
        <main>
          <aside className="rail">
            <p className="eyebrow">MODULE {module}</p>
            <h2>
              {module === 1
                ? "Introduction and overview"
                : module === 2
                  ? "Climate change"
                  : module === 3
                    ? "Noise disturbance"
                    : module === 4
                      ? "Local air quality"
                      : module === 5
                        ? "Other local environmental challenges"
                        : module === 6
                          ? "Environmental and sustainability management"
                          : "Communication"}
            </h2>
            <nav>
              {currentLessons.map((l, i) => (
                <button
                  key={l.code}
                  className={active === i ? "active" : ""}
                  onClick={() => {
                    setActive(i);
                    setAnswers({});
                    setChecked(false);
                    scrollTo(0, 0);
                  }}
                >
                  <span>{currentDone.includes(i) ? "✓" : l.code}</span>
                  <div>
                    <b>{l.title}</b>
                    <small>{l.time}</small>
                  </div>
                </button>
              ))}
            </nav>
            <div className="locked">
              <b>
                {module < 7 ? `Module ${module + 1} available` : "Final module"}
              </b>
              <p>
                {module < 7
                  ? "The next completed module is available."
                  : "Complete the assessment to finish the course."}
              </p>
              {module < 7 && (
                <button
                  className="secondary switch-module"
                  onClick={() =>
                    openModule((module + 1) as 2 | 3 | 4 | 5 | 6 | 7)
                  }
                >
                  Open Module {module + 1} →
                </button>
              )}
            </div>
          </aside>
          <section className="content">
            {module === 2 && (
              <ClimateModule
                active={active}
                answers={answers}
                setAnswers={setAnswers}
                checked={checked}
                setChecked={setChecked}
                score={score}
                mark={mark2}
              />
            )}
            {module === 3 && (
              <NoiseModule
                active={active}
                answers={answers}
                setAnswers={setAnswers}
                checked={checked}
                setChecked={setChecked}
                score={score}
                mark={mark3}
              />
            )}
            {module === 4 && (
              <AirModule
                active={active}
                answers={answers}
                setAnswers={setAnswers}
                checked={checked}
                setChecked={setChecked}
                score={score}
                mark={mark4}
              />
            )}
            {module === 5 && (
              <LocalModule
                active={active}
                answers={answers}
                setAnswers={setAnswers}
                checked={checked}
                setChecked={setChecked}
                score={score}
                mark={mark5}
              />
            )}
            {module === 6 && (
              <ManagementModule
                active={active}
                answers={answers}
                setAnswers={setAnswers}
                checked={checked}
                setChecked={setChecked}
                score={score}
                mark={mark6}
              />
            )}
            {module === 7 && (
              <CommunicationModule
                active={active}
                answers={answers}
                setAnswers={setAnswers}
                checked={checked}
                setChecked={setChecked}
                score={score}
                mark={mark7}
              />
            )}
            {module === 1 && (
              <>
                {active === 0 && (
                  <Lesson
                    n="01"
                    title="The aviation system today"
                    lead="Sustainability in aviation begins with a system, not with a single aircraft or a single environmental metric."
                  >
                    <h2>Aviation delivers a service—and creates pressures</h2>
                    <p>
                      Air transport connects people, markets and essential
                      services across distances that other modes cannot always
                      cover in equivalent time. Its value includes passenger
                      mobility, time-sensitive freight, tourism, skilled
                      employment, regional accessibility, disaster response and
                      medical transport. These benefits are real, but they do
                      not cancel the environmental consequences of delivering
                      them. A sound sustainability assessment holds both sides
                      of the picture at once.
                    </p>
                    <p>
                      The sector is not simply “aircraft in flight”. It is a
                      network of aircraft manufacturers, engine and equipment
                      suppliers, energy producers, airlines and other operators,
                      airports, air navigation service providers, maintenance
                      organisations, ground handlers, regulators, financiers,
                      customers and communities. Decisions taken by one actor
                      alter the options available to others. Aircraft design
                      influences fuel demand and noise for decades; airspace
                      design affects the routes that operators can fly;
                      maintenance protects safety and performance; airport
                      infrastructure shapes local energy, water, waste, noise
                      and air-quality impacts.
                    </p>
                    <VisualFigure
                      src="/course/eurofighter-interdependencies.png"
                      alt="Eurofighter Typhoon in an operational setting connecting flight, airbase, maintenance and environmental interdependencies"
                      label="SEE THE SYSTEM"
                      caption="Air Power environmental performance emerges from a connected system. The Eurofighter’s operation links mission planning, airbase infrastructure, maintenance, energy, territory and multiple decision-makers."
                    />
                    <Callout title="The central question">
                      <p>
                        Not “Is aviation sustainable?” as a yes/no label, but:{" "}
                        <b>
                          what service is being delivered, which impacts arise,
                          who can influence them, what evidence shows
                          improvement, and what trade-offs remain?
                        </b>
                      </p>
                    </Callout>
                    <h2>The three dimensions are interdependent</h2>
                    <p>
                      <b>Environmental sustainability</b> concerns the capacity
                      of natural systems to support human activity: climate
                      stability, air and water quality, ecosystems, materials
                      and energy resources. <b>Social sustainability</b>{" "}
                      includes safety, accessibility, employment quality,
                      health, community exposure and fairness between groups and
                      generations. <b>Economic sustainability</b> concerns
                      long-term viability, productive capacity, resilience,
                      affordability and the ability to invest.
                    </p>
                    <p>
                      These are not three independent checkboxes. A route may
                      strengthen regional connectivity while increasing noise
                      exposure. A quieter aircraft may improve community health
                      but require a technically and economically viable fleet
                      transition. An environmental measure that weakens safety
                      or airworthiness is not acceptable; equally, using safety
                      as a vague reason to avoid examining preventable waste is
                      not rigorous. The task is to respect non-negotiable
                      constraints and improve the remaining decision space.
                    </p>
                    <h2>Growth changes the meaning of progress</h2>
                    <p>
                      Aviation performance is often expressed as an intensity:
                      fuel per passenger-kilometre, emissions per flight, energy
                      per maintenance event or waste per production hour.
                      Intensity is useful because it relates impact to activity.
                      But it does not show the total burden. If traffic grows
                      faster than intensity improves, absolute fuel use,
                      emissions or resource demand may rise.
                    </p>
                    <div className="equation">
                      <span>Total impact</span>
                      <b>=</b>
                      <span>Activity</span>
                      <b>×</b>
                      <span>Impact per unit of activity</span>
                    </div>
                    <p>
                      This simple relationship prevents a common communication
                      error. A 10% improvement in fuel per passenger-kilometre
                      is not a 10% reduction in total fuel if
                      passenger-kilometres rise by 20%. Both indicators should
                      be reported because they answer different management
                      questions.
                    </p>
                    <details>
                      <summary>
                        Worked example · efficiency versus absolute impact
                      </summary>
                      <p>
                        An operator delivered 1.0 million passenger-kilometres
                        at 0.030 kg fuel per passenger-kilometre: 30 tonnes of
                        fuel. The next year intensity improved to 0.027 kg, but
                        activity rose to 1.2 million passenger-kilometres. Total
                        fuel became 32.4 tonnes. Efficiency improved 10%, while
                        absolute fuel increased 8%.
                      </p>
                    </details>
                    <Sources
                      items={[
                        "Maleviti, Fundamentals of Sustainable Aviation, Chs. 1, 3 and 4.",
                        "Daley, Air Transport and the Environment, Chs. 1 and 6.",
                      ]}
                    />
                  </Lesson>
                )}
                {active === 1 && (
                  <Lesson
                    n="02"
                    title="Environmental impacts and performance"
                    lead="Aviation has multiple impacts across different places, times and lifecycle stages. Managing one indicator in isolation can hide the real outcome."
                  >
                    <h2>From activities to aspects and impacts</h2>
                    <p>
                      An <b>activity</b> is what the organisation does: flying,
                      taxiing, painting, cleaning, maintaining, heating a hangar
                      or transporting a spare. An <b>environmental aspect</b> is
                      the element of that activity that interacts with the
                      environment: fuel consumption, combustion emissions,
                      electricity use, solvent release, water withdrawal, waste
                      generation or noise. An <b>impact</b> is the resulting
                      change: climate forcing, degraded local air quality,
                      resource depletion, nuisance, health effects,
                      contamination or ecological disturbance.
                    </p>
                    <div className="flow">
                      <span>
                        Activity
                        <br />
                        <b>engine ground run</b>
                      </span>
                      <i>→</i>
                      <span>
                        Aspect
                        <br />
                        <b>fuel, NOₓ, noise</b>
                      </span>
                      <i>→</i>
                      <span>
                        Impact
                        <br />
                        <b>climate, air quality, disturbance</b>
                      </span>
                    </div>
                    <h2>A map of aviation’s environmental pressures</h2>
                    <div className="cards">
                      <article>
                        <b>Climate</b>
                        <p>
                          CO₂ from fuel combustion accumulates in the
                          atmosphere. Aviation also produces non-CO₂ effects at
                          altitude, including effects associated with NOₓ, water
                          vapour, particles and contrail-cirrus formation. CO₂
                          alone is therefore not a complete description of
                          aviation’s climate effect.
                        </p>
                      </article>
                      <article>
                        <b>Noise</b>
                        <p>
                          Aircraft, ground operations and supporting equipment
                          expose communities and workers to sound. The effect
                          depends on level, duration, frequency, timing,
                          background conditions and the number of people
                          exposed—not merely on a single aircraft certification
                          value.
                        </p>
                      </article>
                      <article>
                        <b>Local air quality</b>
                        <p>
                          NOₓ, particulate matter, sulphur compounds, carbon
                          monoxide and unburned hydrocarbons can arise from
                          aircraft engines, auxiliary power units, road traffic,
                          ground support equipment and stationary sources.
                          Attribution requires an airshed view.
                        </p>
                      </article>
                      <article>
                        <b>Resources and local impacts</b>
                        <p>
                          Manufacturing, airports and MRO use energy, water,
                          metals, composites, chemicals and land; they generate
                          wastewater, hazardous and non-hazardous waste, and may
                          affect habitats and wildlife. These flows may be
                          smaller than operational fuel in a climate inventory
                          yet locally material and legally significant.
                        </p>
                      </article>
                    </div>
                    <h2>Direct, indirect and lifecycle effects</h2>
                    <p>
                      A direct operational inventory may count fuel burned by an
                      aircraft. A lifecycle view also examines extraction and
                      processing of feedstocks, fuel production and
                      distribution, aircraft and infrastructure manufacture,
                      maintenance and replacement parts, and end-of-life
                      treatment. The appropriate boundary depends on the
                      decision. A fleet operations team needs direct fuel
                      information; a comparison between fuels or aircraft
                      technologies requires upstream and embodied effects as
                      well.
                    </p>
                    <p>
                      Life-cycle assessment formalises this thinking through
                      four linked phases: <b>goal and scope definition</b>,{" "}
                      <b>inventory analysis</b>, <b>impact assessment</b>, and{" "}
                      <b>interpretation</b>. The goal defines the decision and
                      intended audience. The scope defines the product system,
                      functional unit, boundary, assumptions and exclusions. The
                      inventory quantifies inputs and outputs. Impact assessment
                      translates flows into potential impact categories.
                      Interpretation tests completeness, consistency,
                      uncertainty and sensitivity.
                    </p>
                    <VisualFigure
                      src="/course/a400m-lifecycle.png"
                      alt="Airbus A400M in heavy maintenance with component refurbishment and segregated material recovery flows"
                      label="FOLLOW THE LIFECYCLE"
                      caption="An A400M lifecycle view follows inputs, outputs and possible burden shifts beyond the flight itself—from production and material support to maintenance, component recovery and end-of-life treatment."
                    />
                    <Callout title="Functional unit" tone="gold">
                      <p>
                        A functional unit describes the service being
                        compared—for example one passenger transported one
                        kilometre, one tonne of payload transported over a
                        defined mission, or one component maintained to an
                        approved service condition. Comparing “one aircraft”
                        with “one aircraft” can be misleading if capacity,
                        utilisation or service life differ.
                      </p>
                    </Callout>
                    <h2>
                      Interdependencies: synergy, trade-off and burden shifting
                    </h2>
                    <p>
                      ICAO/CAEP uses interdependencies to examine how action on
                      one environmental objective can affect another. Some
                      measures create synergies: reduced fuel burn can lower CO₂
                      and some pollutants. Others create trade-offs:
                      noise-reduction choices may affect weight, thrust setting,
                      flight path or fuel; a lower-VOC process may demand more
                      energy or generate a different hazardous waste; lighter
                      materials can reduce use-phase fuel but complicate repair
                      and recycling.
                    </p>
                    <p>
                      <b>Burden shifting</b> occurs when an apparent improvement
                      moves impact between lifecycle stages, locations or
                      categories rather than reducing it overall. Electrifying
                      ground equipment may remove tailpipe emissions at the
                      airport, but the climate result depends on electricity
                      generation and battery production. This does not make
                      electrification wrong; it defines what must be measured.
                    </p>
                    <h2>Measuring environmental performance</h2>
                    <p>
                      A credible indicator specifies its definition, unit,
                      boundary, data source, calculation method, baseline,
                      frequency and owner. It should be paired with an
                      operational guardrail when necessary. Fuel per flight hour
                      without mission class can be distorted by changes in
                      activity. Waste recycling rate can improve while total
                      waste increases. The number of environmental initiatives
                      measures activity, not physical outcome.
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Question</th>
                          <th>Weak indicator</th>
                          <th>Stronger evidence</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Did operations improve?</td>
                          <td>Total fuel only</td>
                          <td>
                            Absolute fuel plus intensity by comparable mission
                            class
                          </td>
                        </tr>
                        <tr>
                          <td>Did waste prevention work?</td>
                          <td>Recycling rate</td>
                          <td>
                            Total waste, waste per activity and treatment route
                          </td>
                        </tr>
                        <tr>
                          <td>Did a digital tool reduce impact?</td>
                          <td>Users or alerts</td>
                          <td>
                            Authorised action and verified physical outcome
                            versus counterfactual
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Sources
                      items={[
                        "NLR/DLR, Life Cycle Assessment in the Air Transport System.",
                        "ICAO/CAEP, Report on Environmental Interdependencies.",
                        "EASA, Assessment of Environmental Sustainability in Aviation Maintenance and Production Organisations.",
                        "Daley, Air Transport and the Environment, Ch. 2.",
                      ]}
                    />
                  </Lesson>
                )}
                {active === 2 && (
                  <Lesson
                    n="03"
                    title="The SDGs and aviation"
                    lead="The Sustainable Development Goals are a shared policy framework—not a sustainability scorecard or a licence to claim positive impact."
                  >
                    <h2>From sustainable development to Agenda 2030</h2>
                    <p>
                      The Brundtland formulation describes sustainable
                      development as meeting present needs without compromising
                      the ability of future generations to meet their own needs.
                      Agenda 2030 translates this broad principle into 17
                      Sustainable Development Goals and 169 targets. The goals
                      are universal and interconnected: progress in one area can
                      support or undermine another.
                    </p>
                    <p>
                      Aviation contributes to connectivity, trade, employment,
                      innovation and emergency access, but it also consumes
                      resources and generates climate, health and local
                      environmental pressures. Mapping only positive
                      contributions is selective. A rigorous SDG analysis asks
                      where the activity makes a material contribution, where it
                      creates adverse impacts, and which targets—not just
                      colourful goal icons—are relevant.
                    </p>
                    <div className="sdgs">
                      <article>
                        <span>09</span>
                        <b>Industry, innovation &amp; infrastructure</b>
                        <p>
                          Resilient infrastructure, technology development and
                          access. Relevance does not mean every aviation
                          innovation is automatically sustainable.
                        </p>
                      </article>
                      <article>
                        <span>12</span>
                        <b>Responsible consumption &amp; production</b>
                        <p>
                          Materials, chemicals, waste prevention, circularity
                          and transparent information across manufacture,
                          operation, maintenance and end of life.
                        </p>
                      </article>
                      <article>
                        <span>13</span>
                        <b>Climate action</b>
                        <p>
                          Mitigation, adaptation, risk planning and measurement.
                          Efficiency gains should be presented alongside
                          absolute emissions and activity.
                        </p>
                      </article>
                      <article>
                        <span>03</span>
                        <b>Good health &amp; well-being</b>
                        <p>
                          Noise, air quality and occupational exposure matter
                          alongside aviation’s role in access to medical
                          services and emergency response.
                        </p>
                      </article>
                    </div>
                    <h2>How to use the SDGs responsibly</h2>
                    <ol>
                      <li>
                        <b>Start with the activity and value chain.</b> Do not
                        begin by selecting attractive goals.
                      </li>
                      <li>
                        <b>Identify material positive and negative impacts.</b>{" "}
                        Include affected workers, communities and future
                        generations.
                      </li>
                      <li>
                        <b>Map impacts to specific SDG targets.</b> Goal-level
                        mapping is too broad for most decisions.
                      </li>
                      <li>
                        <b>Define evidence and influence.</b> Separate what the
                        organisation controls, influences and merely supports.
                      </li>
                      <li>
                        <b>Disclose tensions.</b> A contribution to connectivity
                        does not neutralise climate or noise impacts.
                      </li>
                    </ol>
                    <Callout title="Anti-greenwashing check">
                      <p>
                        “This project supports six SDGs” says almost nothing. A
                        better statement names the intervention, target,
                        baseline, measured result, boundary and limitations—for
                        example, a verified reduction in hazardous solvent use
                        per maintenance event, with total use also reported.
                      </p>
                    </Callout>
                    <Sources
                      items={[
                        "United Nations, Transforming our world: the 2030 Agenda for Sustainable Development.",
                        "ICAO, contribution to the UN Sustainable Development Goals.",
                        "Maleviti, Fundamentals of Sustainable Aviation, Ch. 1.",
                      ]}
                    />
                  </Lesson>
                )}
                {active === 3 && (
                  <Lesson
                    n="04"
                    title="Legal framework and institutions"
                    lead="Aviation environmental governance is layered. A global goal, a technical standard, regional legislation and a site permit do not have the same legal effect."
                  >
                    <h2>Why aviation governance is international</h2>
                    <p>
                      Aircraft cross borders, operators serve multiple States
                      and technical interoperability is essential. The 1944
                      Chicago Convention established ICAO as the specialised UN
                      agency for international civil aviation. ICAO develops
                      Standards and Recommended Practices through Annexes to the
                      Convention and provides a forum for cooperation. States
                      remain responsible for implementing applicable obligations
                      in their legal and administrative systems.
                    </p>
                    <h2>ICAO and Annex 16</h2>
                    <p>
                      Environmental protection is principally addressed through
                      Annex 16. Its volumes cover aircraft noise,
                      aircraft-engine emissions, aeroplane CO₂ emissions
                      certification and CORSIA. These instruments have defined
                      scopes. A certification standard assesses a product
                      against a prescribed technical procedure; it is not the
                      same as an operator’s annual emissions inventory or proof
                      that a flight is “sustainable”.
                    </p>
                    <p>
                      The Committee on Aviation Environmental Protection (CAEP)
                      provides technical analysis and recommendations on noise,
                      emissions, operational measures and interdependencies.
                      ICAO Assembly resolutions can establish shared policy
                      directions, such as a long-term aspirational goal, while
                      detailed applicability and implementation depend on the
                      instrument concerned.
                    </p>
                    <h2>Regional, national and local layers</h2>
                    <p>
                      In Europe, environmental governance may involve EU
                      legislation, EASA technical responsibilities, national
                      aviation and environmental authorities, regional bodies
                      and local permitting authorities. Organisations may
                      simultaneously face aircraft-related rules, emissions
                      reporting, chemicals legislation, industrial emissions
                      controls, waste and water requirements, nature protection,
                      occupational exposure controls and environmental
                      permitting.
                    </p>
                    <VisualFigure
                      src="/course/a400m-hero.png"
                      alt="Airbus A400M at an operational airbase illustrating the link between aircraft, infrastructure and site-level controls"
                      label="READ THE LAYERS"
                      caption="For an A400M operation, international frameworks, regional rules, national law and site-level controls interact—but they are not interchangeable and do not all create the same kind of obligation."
                    />
                    <p>
                      The correct sequence is therefore: identify the activity
                      and jurisdiction; determine aircraft and operation
                      category; consult the organisation’s verified legal
                      register and competent specialists; define the applicable
                      requirement; translate it into an owned operational
                      control; retain evidence; and review changes. Training
                      content cannot replace this applicability assessment.
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Instrument</th>
                          <th>What it does</th>
                          <th>What it does not prove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ICAO standard or scheme</td>
                          <td>
                            Creates a defined international technical or policy
                            framework
                          </td>
                          <td>
                            That every activity or State aircraft falls within
                            its scope
                          </td>
                        </tr>
                        <tr>
                          <td>EU/national law</td>
                          <td>
                            Creates enforceable obligations within its
                            jurisdiction
                          </td>
                          <td>
                            That one generic rule applies identically at every
                            site
                          </td>
                        </tr>
                        <tr>
                          <td>ISO 14001 EMS</td>
                          <td>Provides a management-system framework</td>
                          <td>Automatic compliance or superior performance</td>
                        </tr>
                        <tr>
                          <td>Corporate target</td>
                          <td>Directs internal ambition and accountability</td>
                          <td>
                            A legal obligation unless separately incorporated
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>Actors and their spheres of influence</h2>
                    <p>
                      Manufacturers influence design, materials, certification
                      evidence and support information. Operators influence
                      fleet deployment and operational practice within approved
                      constraints. Airports control infrastructure and many
                      local sources. Air navigation service providers influence
                      routing and traffic management. MRO organisations
                      influence process energy, materials, waste and the
                      continued technical condition of assets. Fuel and energy
                      suppliers influence upstream pathways. Regulators define
                      and enforce requirements. Communities provide essential
                      evidence about exposure and acceptability.
                    </p>
                    <Callout title="State aircraft boundary" tone="gold">
                      <p>
                        Do not assume that a civil aviation mechanism
                        automatically applies to military, customs or police
                        aircraft. State-aircraft activities still face
                        environmental responsibilities, but the governing
                        instruments, exemptions, national rules and internal
                        commitments must be checked explicitly.
                      </p>
                    </Callout>
                    <Sources
                      items={[
                        "Convention on International Civil Aviation and ICAO Annex 16 structure.",
                        "ICAO/CAEP, Report on Environmental Interdependencies.",
                        "Maleviti, Fundamentals of Sustainable Aviation, Ch. 2.",
                        "EASA study on maintenance and production organisations.",
                      ]}
                    />
                  </Lesson>
                )}
                {active === 4 && <Lab />}
                {active === 5 && (
                  <Assessment
                    module={1}
                    questions={questions}
                    answers={answers}
                    setAnswers={setAnswers}
                    checked={checked}
                    setChecked={setChecked}
                    score={score}
                    passScore={4}
                    onPass={() => mark(5)}
                  />
                )}
              </>
            )}
            <div className="lesson-footer">
              <button
                className="secondary"
                disabled={active === 0}
                onClick={() => {
                  setActive(active - 1);
                  setAnswers({});
                  setChecked(false);
                }}
              >
                ← Previous
              </button>
              <button
                className="primary"
                onClick={() => {
                  (module === 1
                    ? mark
                    : module === 2
                      ? mark2
                      : module === 3
                        ? mark3
                        : module === 4
                          ? mark4
                          : module === 5
                            ? mark5
                            : module === 6
                              ? mark6
                              : mark7)(active);
                  if (active < currentLessons.length - 1) {
                    setActive(active + 1);
                    setAnswers({});
                    setChecked(false);
                    scrollTo(0, 0);
                  }
                }}
              >
                {active < currentLessons.length - 1
                  ? "Complete and continue →"
                  : "Save result"}
              </button>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

function ClimateModule({
  active,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  mark,
}: {
  active: number;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  mark: (n: number) => void;
}) {
  return (
    <>
      {active === 0 && (
        <Lesson
          module={2}
          n="01"
          title="Climate change fundamentals"
          lead="Climate change is governed by cumulative physical processes. Understanding stocks, flows and timescales is essential before evaluating any aviation measure."
        >
          <h2>The greenhouse effect and the energy balance</h2>
          <p>
            Earth receives short-wave solar radiation and emits long-wave
            infrared radiation. Greenhouse gases absorb and re-emit part of that
            outgoing energy, making the lower atmosphere and surface warmer than
            they would otherwise be. Human activities increase concentrations of
            carbon dioxide, methane, nitrous oxide and other climate-forcing
            agents, changing the balance between incoming and outgoing energy.
            The resulting <b>radiative forcing</b> is a change in the energy
            balance; the climate system responds through warming and changes in
            circulation, precipitation, ice, sea level and extremes.
          </p>
          <p>
            Weather describes atmospheric conditions over short periods. Climate
            describes statistical patterns over decades. A cold day does not
            disprove global warming, just as one hot day cannot quantify it.
            Aviation decisions must therefore be connected to long-term climate
            indicators and credible baselines, rather than isolated events.
          </p>
          <VisualFigure
            src="/course/a400m-climate-system.png"
            alt="Airbus A400M flying through atmospheric layers used to explain aviation climate effects"
            label="READ THE ATMOSPHERE"
            caption="The A400M operates within a climate system where altitude, atmospheric composition and weather conditions influence different mechanisms. CO₂ and non-CO₂ effects must be distinguished, not collapsed into one vague label."
          />
          <h2>Stocks, flows and cumulative emissions</h2>
          <p>
            Annual CO₂ emissions are a <b>flow</b>; atmospheric CO₂
            concentration is a <b>stock</b>. Each year’s emissions add to the
            stock, while natural sinks remove only part of them. A substantial
            fraction of emitted CO₂ influences climate over very long
            timescales. This is why stabilising temperature requires global net
            CO₂ emissions to reach approximately zero: merely slowing the rate
            of growth continues to add CO₂ to the atmosphere.
          </p>
          <div className="equation">
            <span>Atmospheric CO₂ stock</span>
            <b>=</b>
            <span>Previous stock</span>
            <b>+</b>
            <span>Emissions − removals</span>
          </div>
          <p>
            This cumulative behaviour changes how targets should be interpreted.
            A future efficiency improvement does not undo earlier emissions.
            Delaying reductions increases cumulative emissions and can make
            later pathways steeper or more dependent on uncertain removals.
          </p>
          <h2>Mitigation, adaptation and resilience</h2>
          <p>
            <b>Mitigation</b> reduces emissions or enhances removals to limit
            climate change. <b>Adaptation</b> reduces vulnerability to impacts
            that occur or are expected. Aviation needs both. Mitigation includes
            aircraft and engine efficiency, operational improvements,
            lower-lifecycle-carbon energy and demand-side choices. Adaptation
            includes heat-resilient infrastructure, drainage, wildfire and storm
            planning, supply-chain resilience and revised operational
            procedures.
          </p>
          <Callout title="Decision discipline">
            <p>
              A measure can support adaptation without reducing emissions, or
              reduce emissions without addressing physical climate risk. Do not
              report one as evidence of the other.
            </p>
          </Callout>
          <Sources
            items={[
              "IPCC, AR6 Synthesis Report: climate-system, cumulative-emissions and mitigation concepts.",
              "Daley, Air Transport and the Environment, climate foundations.",
              "Maleviti, Fundamentals of Sustainable Aviation, climate and resilience chapters.",
            ]}
          />
        </Lesson>
      )}
      {active === 1 && (
        <Lesson
          module={2}
          n="02"
          title="Aviation’s climate contribution"
          lead="Fuel combustion produces CO₂, but aviation’s total climate influence also includes shorter-lived, altitude-dependent non-CO₂ mechanisms."
        >
          <h2>CO₂: directly related to fuel carbon</h2>
          <p>
            Burning conventional aviation turbine fuel converts carbon in the
            fuel into CO₂. A commonly used direct-combustion factor is
            approximately <b>3.16 kg CO₂ per kilogram of jet fuel</b>. The mass
            of CO₂ exceeds the mass of fuel because carbon combines with oxygen
            from the atmosphere. This factor supports transparent operational
            estimates, but it is not a lifecycle result: extraction, refining,
            transport, infrastructure and fuel-production pathways sit outside
            the direct combustion boundary.
          </p>
          <details>
            <summary>Worked calculation · direct combustion only</summary>
            <p>
              If an approved operational change reduces fuel by 750 kg on
              comparable missions, estimated direct CO₂ falls by 750 × 3.16 ={" "}
              <b>2,370 kg CO₂</b>. State the fuel factor, boundary, mission
              comparability and uncertainty. Do not call this a 2.37-tonne
              lifecycle reduction unless upstream effects were included.
            </p>
          </details>
          <h2>Non-CO₂ effects are not one pollutant</h2>
          <p>
            At altitude, aviation affects climate through mechanisms associated
            with nitrogen oxides, water vapour, soot and sulphate particles, and
            the formation and evolution of condensation trails and contrail
            cirrus. NOₓ changes atmospheric chemistry, influencing ozone and
            methane. Contrails form only when temperature and humidity
            conditions permit; some persist and spread, while others disappear
            quickly. The magnitude and sign of individual effects differ, and
            scientific uncertainty is larger than for direct CO₂.
          </p>
          <p>
            CO₂ and non-CO₂ effects also operate on different timescales. CO₂ is
            long-lived and cumulative. Contrail effects are short-lived but can
            be significant during the hours they persist. This means a single
            multiplier applied mechanically to every flight can hide important
            spatial and temporal variation. It also means that reducing fuel is
            necessary but not always sufficient for optimising total climate
            impact.
          </p>
          <VisualFigure
            src="/course/eurofighter-interdependencies.png"
            alt="Eurofighter in operational context illustrating connected fuel, altitude and atmospheric climate effects"
            label="SEPARATE THE MECHANISMS"
            caption="For Air Power operations, fuel, route, altitude, weather and mission constraints interact. The scientifically relevant question is which mechanisms change under the defined mission—not whether an aircraft can be labelled green."
          />
          <h2>Why route and altitude decisions can create trade-offs</h2>
          <p>
            A contrail-avoidance route may change altitude or distance and
            therefore fuel burn. In some conditions a small deviation may avoid
            a climate-sensitive region with a limited fuel penalty; in others
            the penalty may outweigh the expected benefit. The decision requires
            forecast quality, operational feasibility, safety, mission
            requirements and an agreed climate metric. It should not be
            generalised from one route or weather pattern.
          </p>
          <table>
            <thead>
              <tr>
                <th>Effect</th>
                <th>Key driver</th>
                <th>Decision implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CO₂</td>
                <td>Cumulative fuel carbon burned</td>
                <td>
                  Every avoided kilogram of conventional fuel prevents a
                  quantifiable direct CO₂ addition
                </td>
              </tr>
              <tr>
                <td>NOₓ chemistry</td>
                <td>Combustion, altitude and atmospheric state</td>
                <td>Fuel alone does not capture the complete response</td>
              </tr>
              <tr>
                <td>Contrail cirrus</td>
                <td>Ice-supersaturated atmospheric regions, time and route</td>
                <td>
                  Targeted avoidance may help, subject to forecast and fuel
                  trade-offs
                </td>
              </tr>
            </tbody>
          </table>
          <Callout title="Do not conflate">
            <p>
              <b>CO₂ emissions</b>, <b>CO₂-equivalent emissions</b>,{" "}
              <b>effective radiative forcing</b> and <b>temperature response</b>{" "}
              are related but not interchangeable indicators. Always name the
              metric and time horizon.
            </p>
          </Callout>
          <Sources
            items={[
              "IPCC AR6 Working Group I, aviation-relevant forcing and climate response.",
              "ICAO Environmental Report and CAEP scientific assessments.",
              "Daley, Air Transport and the Environment, aviation climate impacts.",
            ]}
          />
        </Lesson>
      )}
      {active === 2 && (
        <Lesson
          module={2}
          n="03"
          title="Goals and the four-pillar strategy"
          lead="Sector goals describe a direction of travel. Technologies, operations, infrastructure, fuels and economic measures determine whether the direction becomes a verified outcome."
        >
          <h2>Three historical sector goals</h2>
          <p>
            Industry roadmaps have commonly expressed three goals: continued
            improvement in fuel efficiency; carbon-neutral growth from a stated
            date or baseline; and a long-term reduction in net aviation CO₂.
            Their wording, baseline and institutional status must be checked in
            the source concerned. They are not proof that the associated result
            has already been achieved, and they do not by themselves resolve
            non-CO₂ effects.
          </p>
          <p>
            ICAO Member States adopted a{" "}
            <b>long-term global aspirational goal</b> for international aviation
            of net-zero carbon emissions by 2050. “Aspirational” and “global”
            are material qualifiers. The goal guides collective action but does
            not allocate identical obligations to every operator, flight or
            State. Separate industry organisations publish their own roadmaps
            and commitments.
          </p>
          <h2>The four pillars are a portfolio</h2>
          <div className="cards">
            <article>
              <b>1 · Technology</b>
              <p>
                Aircraft, propulsion, aerodynamics, lightweighting and systems.
                Benefits depend on entry into service, fleet turnover,
                utilisation and lifecycle consequences.
              </p>
            </article>
            <article>
              <b>2 · Operations</b>
              <p>
                Flight planning, speed, altitude, payload, ground operations,
                maintenance of performance and tactical measures within approved
                constraints.
              </p>
            </article>
            <article>
              <b>3 · Infrastructure</b>
              <p>
                Airspace and air-traffic management, airport energy and ground
                systems, charging or fuel infrastructure, and collaborative
                decision-making.
              </p>
            </article>
            <article>
              <b>4 · Fuels and economic measures</b>
              <p>
                SAF and other energy pathways, supported where applicable by
                policy, finance and market-based mechanisms. Accounting quality
                is decisive.
              </p>
            </article>
          </div>
          <VisualFigure
            src="/course/eurofighter-a400m-climate-levers.png"
            alt="Eurofighter and A400M in Air Power support context illustrating a portfolio of climate measures"
            label="USE A PORTFOLIO"
            caption="No single lever decarbonises Air Power Services. Technology, operations, infrastructure, energy and governance act on different timescales and must remain compatible with safety, airworthiness, security and mission readiness."
          />
          <h2>SAF: pathway, not adjective</h2>
          <p>
            Sustainable aviation fuel is a category of certified aviation fuels
            produced through eligible pathways and feedstocks. It is generally
            used as a blend and releases CO₂ when burned. Potential climate
            benefit is assessed on a lifecycle basis against a defined fossil
            comparator. Results vary with feedstock, production energy,
            conversion yield, transport, co-products, land-use effects and the
            accounting system.
          </p>
          <p>
            Credible communication therefore reports the actual quantity or
            blend used, the certification or scheme, the lifecycle methodology
            and reduction value, the allocation method and whether environmental
            attributes were physically used, booked or claimed through another
            chain-of-custody model. “Zero-emission flight” is not an accurate
            description of a flight using SAF.
          </p>
          <h2>Deployment timing matters</h2>
          <p>
            Fleet technology changes slowly because aircraft are long-lived,
            while operational and maintenance measures can sometimes be deployed
            sooner. Fuels can address existing fleets but face availability,
            cost, feedstock, infrastructure and sustainability constraints.
            Infrastructure enables other measures but often requires
            coordination beyond one organisation. A robust roadmap sequences
            measures by readiness, scale, dependency and verified physical
            effect rather than adding optimistic potentials together.
          </p>
          <Callout title="Avoid double counting" tone="gold">
            <p>
              If technology, operations and fuels are estimated from different
              studies, their potentials may overlap. Apply them to a common
              baseline, define interaction rules and distinguish technical
              potential from realistically deployable contribution.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO LTAG Report and Appendix M4 on operational contributions.",
              "IATA, Net Zero CO₂ Emissions Roadmap.",
              "ATAG sector climate-goal and four-pillar materials.",
              "IATA, Climate Action from Airlines.",
            ]}
          />
        </Lesson>
      )}
      {active === 3 && (
        <Lesson
          module={2}
          n="04"
          title="Operational measures and limits"
          lead="Operations can reduce avoidable fuel and emissions now, but savings must be normalised for mission, authorised and verified against a credible counterfactual."
        >
          <h2>Separate mission demand from avoidable inefficiency</h2>
          <p>
            An Air Power sortie consumes fuel because a mission service is
            required. The relevant improvement question is not how to remove the
            mission from the dataset, but how to deliver the authorised service
            with less avoidable impact. Comparison therefore needs a meaningful
            mission class: payload, distance, training objective, reserve
            policy, configuration, weather, airspace constraints and operational
            outcome.
          </p>
          <p>
            Potential levers include flight-planning accuracy, payload and
            centre-of-gravity management, reduced unnecessary auxiliary power
            use, efficient taxi where authorised, optimised climb/cruise/descent
            profiles, continuous climb or descent where feasible, performance
            restoration through maintenance, and collaborative airspace
            management. Each lever has a domain of applicability; none overrides
            flight safety, tactical requirements or approved procedures.
          </p>
          <VisualFigure
            src="/course/a400m-operations-climate.png"
            alt="Airbus A400M mission planning and flight operations with route, altitude and weather information"
            label="COMPARE LIKE WITH LIKE"
            caption="Operational savings are credible only when the mission service and material drivers are comparable. Route, altitude, weather, payload, reserves and airspace constraints belong in the evidence record."
          />
          <h2>Continuous descent operations as an example</h2>
          <p>
            A continuous descent operation allows an aircraft to remain higher
            for longer and descend with lower thrust than a stepped profile,
            where airspace, traffic, weather and procedure permit. It can reduce
            fuel and noise in certain phases. The result is not universal:
            vectoring, congestion, runway change, aircraft type, starting point
            and local constraints affect the outcome. A study result is an
            estimate for its assessed context, not a guaranteed saving for every
            operation.
          </p>
          <h2>Build the causal chain</h2>
          <div className="flow">
            <span>
              Approved measure
              <br />
              <b>route/profile change</b>
            </span>
            <i>→</i>
            <span>
              Operational response
              <br />
              <b>time, thrust, distance</b>
            </span>
            <i>→</i>
            <span>
              Physical outcome
              <br />
              <b>fuel and CO₂</b>
            </span>
          </div>
          <p>
            Measurement should document the baseline, intervention, comparable
            population, exclusions and uncertainty. Weather, payload, mission
            mix, holdings and maintenance condition can confound results. Where
            randomisation is impossible, matched flights or a regression model
            may improve the counterfactual—but model sophistication cannot
            compensate for weak data definitions.
          </p>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Useful for</th>
                <th>Main caution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total fuel</td>
                <td>Absolute climate inventory and budgeting</td>
                <td>Changes with activity and mission mix</td>
              </tr>
              <tr>
                <td>Fuel per flight hour</td>
                <td>Comparable operating segments</td>
                <td>
                  Can penalise efficient ground/route changes or hide mission
                  differences
                </td>
              </tr>
              <tr>
                <td>Fuel per tonne-kilometre or mission service</td>
                <td>Service-normalised comparison</td>
                <td>Requires a defensible definition for Air Power missions</td>
              </tr>
              <tr>
                <td>Fuel saved per intervention</td>
                <td>Action verification</td>
                <td>Depends on counterfactual and persistence</td>
              </tr>
            </tbody>
          </table>
          <Callout title="Rebound and take-back">
            <p>
              An efficiency gain reduces impact per unit, but the absolute
              benefit may be partly taken back if activity, payload or
              discretionary use increases. Report both the realised saving and
              relevant activity trend.
            </p>
          </Callout>
          <Sources
            items={[
              "NLR, Compilation of Operational Measures to Reduce Fuel Burn and CO₂ Emissions.",
              "ICAO LTAG Report, operational measures appendix.",
              "Low-carbon Benefits of Continuous Descent Operations study.",
            ]}
          />
        </Lesson>
      )}
      {active === 4 && (
        <Lesson
          module={2}
          n="05"
          title="Measurement, CORSIA and claims"
          lead="A climate claim is only as strong as its boundary, baseline, data chain and treatment of what remains outside scope."
        >
          <h2>Build an auditable inventory</h2>
          <p>
            A greenhouse-gas inventory specifies the reporting entity,
            organisational and operational boundaries, gases included,
            consolidation approach, data sources, emission factors, calculation
            method, controls and uncertainty. Scope 1 generally includes direct
            emissions from owned or controlled sources; Scope 2 addresses
            purchased energy; Scope 3 covers defined upstream and downstream
            value-chain categories. These scopes prevent omission and double
            counting inside an inventory architecture, but they are not measures
            of importance by themselves.
          </p>
          <p>
            For aviation fuel, primary quantity data should be reconciled where
            feasible across uplift, tank, flight and financial systems. Emission
            factors need version control and provenance. Biogenic or
            alternative-fuel treatment must follow the relevant standard rather
            than subtracting tailpipe CO₂ informally.
          </p>
          <h2>What CORSIA does—and does not do</h2>
          <p>
            ICAO’s Carbon Offsetting and Reduction Scheme for International
            Aviation establishes monitoring, reporting and verification
            requirements and an offsetting framework for CO₂ from covered
            international routes, with defined phases, baselines, eligible fuels
            and emissions units. Applicability depends on States, operators,
            routes, exemptions and period. It should never be assumed from the
            mere fact that an aircraft crosses a border.
          </p>
          <p>
            CORSIA is one instrument within a broader strategy. Compliance does
            not mean that a flight has no emissions, that all non-CO₂ effects
            are addressed, or that lifecycle impacts outside the scheme
            disappear. State aircraft require an explicit applicability check;
            civil mechanisms cannot simply be copied into a military context.
          </p>
          <h2>Reduction, avoidance and compensation are different</h2>
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Meaning</th>
                <th>Evidence needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reduction</td>
                <td>
                  Lower emissions within the stated inventory or activity
                  boundary
                </td>
                <td>Baseline, measured change and causal link</td>
              </tr>
              <tr>
                <td>Avoided emissions</td>
                <td>Difference against a counterfactual that did not occur</td>
                <td>Transparent scenario, assumptions and sensitivity</td>
              </tr>
              <tr>
                <td>Lifecycle fuel benefit</td>
                <td>Difference between defined fuel pathways</td>
                <td>Certified methodology, pathway data and allocation</td>
              </tr>
              <tr>
                <td>Compensation/offset</td>
                <td>Use of an external emissions unit</td>
                <td>
                  Eligibility, quality, retirement, ownership and no double
                  claim
                </td>
              </tr>
            </tbody>
          </table>
          <Callout title="Claim repair" tone="gold">
            <p>
              Replace “climate-neutral A400M mission” with: “For the defined
              mission, direct fuel burn was 4.8% below the matched 2025 baseline
              after weather and payload adjustment. The estimate covers direct
              CO₂ only; upstream fuel emissions, non-CO₂ effects and any
              external units are reported separately.”
            </p>
          </Callout>
          <h2>A minimum claim checklist</h2>
          <ol>
            <li>What exact activity, organisation and period are covered?</li>
            <li>Is the result absolute, intensity-based or counterfactual?</li>
            <li>Which gases, lifecycle stages and scopes are included?</li>
            <li>What baseline, factor and methodology were used?</li>
            <li>
              Was the result measured, modelled, forecast or externally
              verified?
            </li>
            <li>What trade-offs, uncertainty and residual impacts remain?</li>
          </ol>
          <Sources
            items={[
              "ICAO, CORSIA Standards and Recommended Practices and implementation materials.",
              "GHG Protocol corporate and Scope 3 accounting frameworks.",
              "IATA, Net Zero CO₂ Emissions Roadmap and airline climate-action materials.",
            ]}
          />
        </Lesson>
      )}
      {active === 5 && <ClimateLab />}
      {active === 6 && (
        <Assessment
          module={2}
          questions={climateQuestions}
          answers={answers}
          setAnswers={setAnswers}
          checked={checked}
          setChecked={setChecked}
          score={score}
          passScore={8}
          onPass={() => mark(6)}
        />
      )}
    </>
  );
}

function NoiseModule({
  active,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  mark,
}: {
  active: number;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  mark: (n: number) => void;
}) {
  return (
    <>
      {active === 0 && (
        <Lesson
          module={3}
          n="01"
          title="Sound, noise and human response"
          lead="Noise is not simply a decibel value. It is sound interpreted through level, frequency, duration, timing, context and human response."
        >
          <h2>From physical sound to environmental noise</h2>
          <p>
            Sound begins with a source that creates pressure fluctuations, a
            propagation path through the atmosphere and a receiver.{" "}
            <b>Sound pressure level</b> is expressed in decibels (dB), a
            logarithmic scale. A 3 dB increase represents roughly twice the
            acoustic energy for otherwise comparable signals; it does not mean
            that a listener experiences a simple three-unit increase. Perceived
            loudness is influenced by frequency content, duration,
            intermittency, expectation and the listener’s situation.
          </p>
          <p>
            Environmental noise is unwanted or harmful outdoor sound. The same
            measured level can generate different responses depending on whether
            it occurs once or repeatedly, during daytime or sleep hours, against
            a quiet or busy background, and whether the affected person has
            information, predictability and trust in the management process.
            Acoustic measurement and community response are related, but they
            are not interchangeable.
          </p>
          <VisualFigure
            src="/course/noise-a400m-propagation.png"
            alt="A400M approaching an Air Power base with conceptual sound propagation toward the airfield boundary"
            label="SOURCE · PATH · RECEIVER"
            caption="Aircraft noise assessment follows the complete chain: the A400M and its operating state create sound; atmosphere, terrain and buildings affect propagation; people and sensitive sites receive the resulting exposure."
          />
          <h2>Frequency, weighting and time</h2>
          <p>
            Human hearing does not respond equally to every frequency.
            A-weighted decibels, written dB(A), approximate the frequency
            sensitivity of hearing at common environmental levels and are widely
            used in aviation-noise assessment. C-weighting retains more
            low-frequency content and can be relevant where low-frequency sound
            matters. Weighting is a measurement convention, not proof that
            excluded characteristics are unimportant.
          </p>
          <p>
            Time treatment matters too.{" "}
            <b>
              L<sub>Amax</sub>
            </b>{" "}
            reports the highest A-weighted level during an event. <b>SEL</b>{" "}
            integrates the acoustic energy of a complete event and normalises it
            to one second.{" "}
            <b>
              L<sub>Aeq,T</sub>
            </b>{" "}
            represents the equivalent continuous energy-average level over a
            period T. Day-evening-night indicators such as{" "}
            <b>
              L<sub>den</sub>
            </b>{" "}
            apply penalties to evening and night exposure. Each answers a
            different question.
          </p>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>What it represents</th>
                <th>What it can hide</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  L<sub>Amax</sub>
                </td>
                <td>Peak level in one event</td>
                <td>Duration and number of events</td>
              </tr>
              <tr>
                <td>SEL</td>
                <td>Total acoustic energy of one event</td>
                <td>Long-term distribution and respite</td>
              </tr>
              <tr>
                <td>
                  L<sub>Aeq,T</sub>
                </td>
                <td>Energy-average over a stated period</td>
                <td>Individual peaks and event pattern</td>
              </tr>
              <tr>
                <td>
                  L<sub>den</sub>
                </td>
                <td>Long-period exposure with evening/night penalties</td>
                <td>Exact event sequence and local experience</td>
              </tr>
            </tbody>
          </table>
          <Callout title="Interpretation rule" tone="gold">
            <p>
              Never report an aviation-noise value without the metric,
              weighting, averaging or event period, measurement or model
              location, operating conditions and uncertainty.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO Annex 16, Volume I — Aircraft Noise.",
              "ICAO Environmental Report, aircraft-noise chapters.",
              "Daley, Air Transport and the Environment, noise and community-impact chapters.",
            ]}
          />
        </Lesson>
      )}
      {active === 1 && (
        <Lesson
          module={3}
          n="02"
          title="Aircraft and airbase noise sources"
          lead="An Air Power acoustic environment combines airborne, ground and supporting sources. Correct attribution is essential before choosing a measure."
        >
          <h2>Noise changes across the mission profile</h2>
          <p>
            Jet and turboprop aircraft generate sound through propulsion and
            aerodynamic mechanisms. Propulsion noise varies with engine
            architecture, rotational speed, thrust and installation. Aerodynamic
            noise arises as air flows around the airframe, landing gear,
            high-lift devices and cavities; it becomes particularly relevant
            during approach when thrust is lower but the aircraft is configured
            for landing. Propeller and rotor systems add tonal and broadband
            components linked to blade passage and loading.
          </p>
          <p>
            Source dominance therefore changes between take-off, climb, cruise,
            approach, landing, taxi and ground activity. Distance alone is not
            enough: thrust, configuration, speed, trajectory, atmospheric
            absorption, wind gradients, temperature, terrain and shielding
            affect the level at the receiver.
          </p>
          <h2>The base is a multi-source system</h2>
          <p>
            Airbase sound may include engine starts, auxiliary power units,
            taxiing, engine ground runs, maintenance testing, ground support
            equipment, road vehicles, alarms and construction. Workers near
            sources face an occupational-noise question governed by workplace
            exposure controls; residents outside the boundary face an
            environmental-noise question. The datasets, receptors and management
            responsibilities overlap but are not identical.
          </p>
          <VisualFigure
            src="/course/noise-eurofighter-ground.png"
            alt="Eurofighter during controlled ground operations with hearing protection and acoustic monitoring"
            label="TRACE EACH SOURCE"
            caption="A Eurofighter ground event must be separated from taxi, support equipment and other base sources. Source identification supports engineering controls, scheduling, shielding, monitoring and worker protection."
          />
          <h2>Certification, operational data and local monitoring</h2>
          <p>
            Aircraft noise certification uses prescribed reference procedures
            and measurement points to provide comparable source-performance
            information. It supports technology standards and fleet comparison,
            but it is not a forecast of what every community will experience.
            Local exposure also depends on the number and mix of movements,
            actual flight tracks, operating mass, thrust management, weather,
            runway use and ground operations.
          </p>
          <p>
            Useful evidence may combine certified noise data, radar or
            flight-track data, operational configuration, weather, permanent or
            mobile noise monitors, source logs, complaints and land-use
            information. Complaints are important social evidence, but they are
            not a calibrated acoustic measurement; monitoring values without
            operational attribution can also mislead.
          </p>
          <details>
            <summary>Diagnostic exercise · a night-time peak</summary>
            <p>
              A monitor records a high event at 23:18. Before attributing it to
              an aircraft, align the calibrated acoustic trace with
              time-synchronised flight track, transponder or operations log,
              weather and other base activity. Confirm monitor health and
              exclude contamination such as road, emergency or construction
              noise.
            </p>
          </details>
          <Sources
            items={[
              "ICAO Annex 16, Volume I — certification framework.",
              "ICAO Doc 9829, Guidance on the Balanced Approach to Aircraft Noise Management.",
              "ICAO/CAEP, Report on Environmental Interdependencies.",
            ]}
          />
        </Lesson>
      )}
      {active === 2 && (
        <Lesson
          module={3}
          n="03"
          title="Measuring exposure and impact"
          lead="A credible noise picture combines event metrics, long-term exposure, population data and the distribution of operations in space and time."
        >
          <h2>Measurement and modelling serve different roles</h2>
          <p>
            Monitoring describes sound at particular locations and times. It is
            indispensable for verification, trend analysis, event investigation
            and model calibration. A noise model estimates exposure across a
            wider area by combining aircraft types, movements, tracks,
            performance, terrain and propagation assumptions. Models support
            contours, scenarios and planning, but their validity depends on
            input quality and calibration.
          </p>
          <p>
            A <b>noise contour</b> connects locations with the same modelled
            exposure indicator. Overlaying contours with population and
            sensitive receptors—homes, schools, hospitals or protected
            spaces—helps estimate exposure. A contour is not a wall: people
            immediately outside it are not unexposed, and people inside it do
            not all experience identical response.
          </p>
          <h2>Exposure, annoyance and sleep disturbance</h2>
          <p>
            Long-term aircraft-noise exposure is associated with annoyance and
            sleep disturbance, and evidence also links chronic transport-noise
            exposure to broader health outcomes. Exposure-response relationships
            estimate the proportion of a population that may be highly annoyed
            or highly sleep-disturbed at a given indicator value. They describe
            population risk, not a deterministic diagnosis for each individual.
          </p>
          <p>
            Night noise deserves distinct treatment because a long-period
            average can mask a small number of events capable of interrupting
            sleep. Decision-makers may therefore need an exposure indicator
            together with number-above-threshold metrics, event times and
            maximum levels. Daytime learning, communication and outdoor amenity
            may involve different receptors and thresholds.
          </p>
          <div className="cards">
            <article>
              <b>Acoustic layer</b>
              <p>
                Level, frequency, duration, event count, timing, tracks and
                background.
              </p>
            </article>
            <article>
              <b>Population layer</b>
              <p>
                Residents, workers, sensitive buildings, vulnerability and time
                spent at location.
              </p>
            </article>
            <article>
              <b>Operational layer</b>
              <p>
                Aircraft mix, mission need, runway, route, power setting, ground
                activity and weather.
              </p>
            </article>
            <article>
              <b>Response layer</b>
              <p>
                Annoyance, sleep disturbance, complaints, health evidence, trust
                and perceived fairness.
              </p>
            </article>
          </div>
          <h2>Baseline and change assessment</h2>
          <p>
            A fair comparison controls material changes in traffic volume,
            aircraft mix, runway direction, weather, measurement availability
            and land use. Report absolute exposure and distributional change: a
            lower total exposed population can coexist with a substantial
            increase for one neighbourhood. Separate modelled results from
            monitored results and predictions from verified outcomes.
          </p>
          <Callout title="Minimum evidence pack">
            <p>
              State the metric and period; source data and quality checks; model
              version and assumptions; monitor locations and calibration;
              movement and track data; population dataset; uncertainty; and who
              gains or loses exposure under the scenario.
            </p>
          </Callout>
          <Sources
            items={[
              "European Commission Environmental Noise Directive 2002/49/EC and common assessment methods.",
              "WHO Environmental Noise Guidelines for the European Region.",
              "ICAO Environmental Report, community noise assessment sections.",
            ]}
          />
        </Lesson>
      )}
      {active === 3 && (
        <Lesson
          module={3}
          n="04"
          title="Progress and the Balanced Approach"
          lead="Aircraft have become quieter through technology and operating practice, but growth, fleet mix and community expectations mean that noise remains a local challenge."
        >
          <h2>Progress at source</h2>
          <p>
            Successive aircraft generations have reduced certified noise through
            higher-bypass engines, acoustic liners, improved nacelles, quieter
            fans and turbines, aerodynamic refinement and redesigned high-lift
            systems. Certification standards have become more stringent through
            ICAO Annex 16. Fleet renewal can therefore reduce source noise, but
            realised community benefit depends on which aircraft operate, how
            often, when and where.
          </p>
          <p>
            Further improvement is technically demanding. Noise sources
            interact, and reducing one can reveal another. Added acoustic
            treatment may introduce mass, cost or maintenance effects. New
            propulsion architectures alter spectral character as well as level.
            Progress should be described against a defined certification
            chapter, margin, fleet composition or exposure outcome—not as
            “silent” or “noise-free” aviation.
          </p>
          <h2>ICAO’s four-element Balanced Approach</h2>
          <p>
            The Balanced Approach provides a structured method for addressing
            aircraft noise on an airport-by-airport basis. It is not a menu from
            which the most visible measure is chosen first. Authorities define
            the noise problem and objective, evaluate available measures and
            select a cost-effective combination while respecting safety and
            capacity.
          </p>
          <ol className="balanced-steps">
            <li>
              <b>Reduction of noise at source</b>
              <span>
                Technology standards, aircraft and engine design, fleet
                composition.
              </span>
            </li>
            <li>
              <b>Land-use planning and management</b>
              <span>
                Compatible development, zoning, insulation and protection of
                sensitive receptors.
              </span>
            </li>
            <li>
              <b>Noise-abatement operational procedures</b>
              <span>
                Safe route, altitude, thrust and configuration practices suited
                to the site.
              </span>
            </li>
            <li>
              <b>Operating restrictions</b>
              <span>
                Restrictions are assessed after the other elements, with
                proportionality and cost-effectiveness.
              </span>
            </li>
          </ol>
          <VisualFigure
            src="/course/noise-a400m-balanced.png"
            alt="A400M airfield context combining operational planning, monitoring, land use and community receptors"
            label="BALANCE THE SYSTEM"
            caption="The Balanced Approach is site-specific. For Air Power, its principles can inform decisions, while legal applicability and mission, security, airworthiness and safety constraints must be checked explicitly."
          />
          <h2>Land-use compatibility is a long-term control</h2>
          <p>
            Preventing new noise-sensitive development in highly exposed areas
            can be more durable than attempting to solve incompatible land use
            after construction. Measures include planning controls, disclosure,
            property or building standards and sound insulation. They require
            coordination beyond the operator and must avoid inequitable outcomes
            or the assumption that indoor insulation resolves outdoor amenity.
          </p>
          <Callout title="State-aircraft boundary" tone="gold">
            <p>
              ICAO’s framework is written for international civil aviation.
              Apply its analytical logic to an Air Power base only after
              checking national law, competent authority, security, mission
              necessity and local governance. Do not claim automatic legal
              applicability.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO Doc 9829, Guidance on the Balanced Approach to Aircraft Noise Management.",
              "ICAO Annex 16, Volume I — Aircraft Noise.",
              "European Regulation (EU) No 598/2014 on noise-related operating restrictions at Union airports.",
            ]}
          />
        </Lesson>
      )}
      {active === 4 && (
        <Lesson
          module={3}
          n="05"
          title="Interdependencies and Air Power decisions"
          lead="A quieter outcome at one receptor can shift noise elsewhere or alter fuel, emissions, capacity and mission delivery. The decision must expose those effects."
        >
          <h2>Noise is spatially distributed</h2>
          <p>
            Changing a flight path can reduce exposure over one community while
            increasing it over another. Concentrating tracks may protect a
            larger population but intensify experience below the route;
            dispersal can share events while exposing more people. Alternating
            routes or runway use may create respite, but predictability, weather
            and operational feasibility matter. Population totals alone cannot
            decide what is fair.
          </p>
          <h2>Noise, fuel and local air quality interact</h2>
          <p>
            Operational changes affect thrust, altitude, speed, distance and
            time. A steeper climb may reduce exposure close to the runway in
            some directions but require different thrust management. A displaced
            threshold or altered approach can redistribute noise and change taxi
            or flight distance. Ground restrictions may shift engine testing
            into another time window. The result must therefore be evaluated
            across noise, fuel/CO₂, local emissions and operational performance.
          </p>
          <table>
            <thead>
              <tr>
                <th>Possible measure</th>
                <th>Potential benefit</th>
                <th>Questions before implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Route adjustment</td>
                <td>Reduce exposure over a sensitive area</td>
                <td>
                  Who receives transferred exposure? Extra distance/fuel?
                  Airspace and safety?
                </td>
              </tr>
              <tr>
                <td>Ground-run enclosure or barrier</td>
                <td>Reduce propagation beyond the test area</td>
                <td>
                  Worker exposure, ventilation, jet blast, maintenance and
                  emergency access?
                </td>
              </tr>
              <tr>
                <td>Scheduling/respite</td>
                <td>Protect sleep or create predictable relief</td>
                <td>
                  Mission readiness, weather, displaced events, equity and
                  compliance?
                </td>
              </tr>
              <tr>
                <td>Fleet/technology change</td>
                <td>Lower source noise</td>
                <td>
                  Availability, lifecycle, cost, airworthiness and real local
                  utilisation?
                </td>
              </tr>
            </tbody>
          </table>
          <h2>A decision hierarchy for Air Power</h2>
          <ol>
            <li>
              Define the authorised mission outcome and non-negotiable safety,
              security and airworthiness gates.
            </li>
            <li>
              Characterise sources, flight and ground operations, receptors and
              the baseline.
            </li>
            <li>
              Develop feasible source, land-use, operational and scheduling
              options with responsible stakeholders.
            </li>
            <li>
              Model and, where possible, test acoustic and non-acoustic effects.
            </li>
            <li>
              Compare population distribution, worker exposure, fuel, emissions,
              cost, capacity and resilience.
            </li>
            <li>
              Implement with monitoring, feedback, change control and a precise
              public claim.
            </li>
          </ol>
          <Callout title="No-greenwashing claim">
            <p>
              “Modelled L<sub>den</sub> exposure above the stated contour is
              projected to fall for 620 residents under Scenario B, while 85
              residents east of the base receive an increase. Fuel is estimated
              to rise 0.6%. Results are scenario estimates pending operational
              trial and monitoring.”
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO/CAEP, Report on Environmental Interdependencies.",
              "ICAO Doc 9829, Balanced Approach guidance.",
              "Daley, Air Transport and the Environment, policy and interdependency analysis.",
            ]}
          />
        </Lesson>
      )}
      {active === 5 && <NoiseLab />}
      {active === 6 && (
        <Assessment
          module={3}
          questions={noiseQuestions}
          answers={answers}
          setAnswers={setAnswers}
          checked={checked}
          setChecked={setChecked}
          score={score}
          passScore={8}
          onPass={() => mark(6)}
        />
      )}
    </>
  );
}

function NoiseLab() {
  const fields = [
    "Operational activity and authorised outcome",
    "Noise sources and operating states",
    "Receptors, sensitive periods and assessment boundary",
    "Baseline metrics: event, exposure and distribution",
    "Monitoring, model and operational data required",
    "Source-reduction and ground-control options",
    "Land-use, procedure, scheduling or respite options",
    "Safety, security, airworthiness and mission gates",
    "Fuel, emissions, capacity and exposure-transfer trade-offs",
    "Monitoring plan and precise evidence-based claim",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 3 · APPLIED LAB</p>
      <h1>Air Power Noise Decision Lab</h1>
      <p className="lead">
        Build a balanced noise-management case for one A400M or Eurofighter
        activity without transferring impacts invisibly or weakening operational
        requirements.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Activity:</b> recurring Eurofighter engine ground run.{" "}
          <b>Baseline:</b> event SEL and L<sub>Amax</sub> at worker, boundary
          and community receptors, with time and weather. <b>Options:</b> source
          condition, enclosure/barrier, test orientation and scheduling.{" "}
          <b>Decision:</b> compare external exposure, worker risk, ventilation,
          jet blast, test validity, cost and readiness before selecting
          controls.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`noise-lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) =>
                localStorage.setItem(`noise-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

function AirModule({
  active,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  mark,
}: {
  active: number;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  mark: (n: number) => void;
}) {
  return (
    <>
      {active === 0 && (
        <Lesson
          module={4}
          n="01"
          title="Air pollution and health"
          lead="Local air quality concerns the pollutants people and ecosystems breathe—not the climate inventory viewed through another name."
        >
          <h2>Climate and air quality are connected but distinct</h2>
          <p>
            Carbon dioxide is the dominant long-lived product of aviation fuel
            combustion for climate accounting, but local health risk is driven
            primarily by pollutants such as nitrogen oxides (NOₓ), particulate
            matter (PM), sulphur oxides (SOₓ), carbon monoxide (CO), volatile
            and unburned hydrocarbons. A measure can benefit both agendas, but a
            CO₂ reduction cannot be presented automatically as the same
            percentage improvement in local air quality.
          </p>
          <h2>Primary and secondary pollutants</h2>
          <p>
            Primary pollutants are emitted directly. Secondary pollutants form
            after atmospheric reactions: nitrogen dioxide can be emitted and
            formed from nitric oxide; ground-level ozone forms through
            photochemistry involving NOₓ and volatile organic compounds;
            secondary particles form from gaseous precursors. Chemistry means
            that the relationship between an emitted kilogram and ambient
            concentration is neither fixed nor necessarily local.
          </p>
          <div className="cards">
            <article>
              <b>NOₓ / NO₂</b>
              <p>
                Produced at high combustion temperatures. NO₂ is associated with
                respiratory effects and contributes to ozone and secondary
                particles.
              </p>
            </article>
            <article>
              <b>Particulate matter</b>
              <p>
                Solid and liquid particles described by mass, size and number.
                PM₂.₅ penetrates deeply; ultrafine particles can be numerous
                despite low mass.
              </p>
            </article>
            <article>
              <b>CO and hydrocarbons</b>
              <p>
                Incomplete-combustion products, often more relevant at low-power
                conditions. Some hydrocarbons are toxic and contribute to ozone
                chemistry.
              </p>
            </article>
            <article>
              <b>SOₓ</b>
              <p>
                Linked to fuel sulphur and capable of contributing to secondary
                particulate matter.
              </p>
            </article>
          </div>
          <h2>Hazard, exposure and health risk</h2>
          <p>
            A hazardous pollutant does not produce the same risk everywhere.
            Exposure depends on concentration, duration, location, activity and
            susceptibility. Workers close to exhaust or process sources and
            communities near transport corridors can experience different
            mixtures. Children, older people and those with respiratory or
            cardiovascular conditions may be more vulnerable.
          </p>
          <Callout title="Interpretation rule" tone="gold">
            <p>
              Do not infer a health outcome from an emissions inventory alone.
              Connect source emissions to dispersion, ambient concentration,
              population exposure and the relevant evidence base.
            </p>
          </Callout>
          <Sources
            items={[
              "WHO Global Air Quality Guidelines.",
              "ICAO Airport Air Quality Manual, Doc 9889.",
              "Daley, Air Transport and the Environment, local air-quality chapters.",
            ]}
          />
        </Lesson>
      )}
      {active === 1 && (
        <Lesson
          module={4}
          n="02"
          title="Sources across the airfield"
          lead="Aircraft are important sources, but an airport or Air Power base is an airshed containing many overlapping activities."
        >
          <h2>Aircraft engine emissions and the LTO cycle</h2>
          <p>
            ICAO engine certification uses a standard landing-and-take-off cycle
            below 3,000 feet with defined modes—taxi/idle, take-off, climb-out
            and approach—and prescribed time-in-mode assumptions. It provides
            comparable certification data for relevant engine pollutants. It
            does not reproduce every real flight, military profile, taxi
            duration, thrust setting or meteorological condition.
          </p>
          <p>
            Actual local emissions depend on engine type and condition, fuel,
            power setting, ambient conditions, taxi and queue time, use of
            auxiliary power, mission configuration and maintenance.
            Certification emission indices can support inventories when used
            within their stated scope; operational measurements or refined
            models may be needed for site-specific questions.
          </p>
          <VisualFigure
            src="/course/laq-a400m.png"
            alt="A400M taxiing at an Air Power base with ground support and ambient air monitoring"
            label="MAP THE AIRSHED"
            caption="An A400M movement is one part of a shared airshed. Aircraft exhaust, auxiliary power, ground equipment, road traffic and stationary sources mix with regional background pollution."
          />
          <h2>Ground and stationary sources</h2>
          <p>
            Relevant sources include APUs, diesel or petrol ground-support
            equipment, power units, tugs, buses, employee and freight traffic,
            boilers, generators, painting and solvent processes, fuel storage
            and handling, construction dust and maintenance testing. Off-site
            roads, industry, domestic heating, agriculture and regional
            transport can contribute strongly to the same monitors.
          </p>
          <h2>Particle number and mass tell different stories</h2>
          <p>
            Combustion sources can generate ultrafine particles. Because these
            particles contribute little mass individually, PM₂.₅ mass alone may
            not reveal a near-source particle-number signal. Measurement must
            match the question: mass concentration, particle number, black
            carbon and chemical composition are not interchangeable.
          </p>
          <details>
            <summary>Source-apportionment check</summary>
            <p>
              A boundary NO₂ peak coincides with calm weather and morning
              traffic. Before assigning it to aircraft, compare wind, flight and
              taxi logs, road counts, boiler operation, NO/NO₂ ratio and
              upwind/background monitors. Correlation with base activity is
              evidence to investigate, not proof of causation.
            </p>
          </details>
          <Sources
            items={[
              "ICAO Annex 16, Volume II — Aircraft Engine Emissions.",
              "ICAO Doc 9889, Airport Air Quality Manual.",
              "EASA, European Aviation Environmental Report.",
            ]}
          />
        </Lesson>
      )}
      {active === 2 && (
        <Lesson
          module={4}
          n="03"
          title="Inventories, dispersion and exposure"
          lead="Emissions quantify releases; monitoring and modelling explain what reaches receptors. Credible management needs all three."
        >
          <h2>Build an inventory with explicit boundaries</h2>
          <p>
            An inventory states pollutant, source category, period, spatial
            boundary, activity data, emission factor and uncertainty. Aircraft
            estimates may combine movements or time-in-mode with fuel flow and
            emission indices. Ground sources use operating hours, distance, fuel
            or energy data and technology-specific factors. Avoid double
            counting between operator, base and regional inventories.
          </p>
          <div className="equation">
            <span>Emissions</span>
            <b>=</b>
            <span>Activity</span>
            <b>×</b>
            <span>Emission factor</span>
          </div>
          <p>
            This equation is useful but only as good as its inputs. A generic
            LTO assumption can distort a base with long taxi times or unusual
            profiles. Factors also change with engine condition, power and
            technology. Record factor provenance and version.
          </p>
          <h2>Dispersion determines concentration</h2>
          <p>
            After release, plume height, exhaust temperature and momentum, wind,
            atmospheric stability, mixing height, terrain, buildings and
            chemical transformation shape ambient concentration. Low wind can
            increase accumulation; strong wind can dilute locally while
            transporting pollution elsewhere. Annual means, hourly peaks and
            short event signatures answer different questions.
          </p>
          <table>
            <thead>
              <tr>
                <th>Evidence</th>
                <th>Strength</th>
                <th>Limitation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inventory</td>
                <td>Attributes quantities to source categories</td>
                <td>Does not directly measure ambient exposure</td>
              </tr>
              <tr>
                <td>Fixed monitoring</td>
                <td>Real concentration at a location over time</td>
                <td>Limited spatial coverage and mixed sources</td>
              </tr>
              <tr>
                <td>Mobile/targeted campaign</td>
                <td>Maps gradients and investigates hotspots</td>
                <td>Short periods may not represent the year</td>
              </tr>
              <tr>
                <td>Dispersion model</td>
                <td>Tests scenarios across the airshed</td>
                <td>Depends on emissions, meteorology and validation</td>
              </tr>
            </tbody>
          </table>
          <h2>Design monitoring around the question</h2>
          <p>
            Locate monitors using prevailing winds, source geometry, population
            and background sites—not convenience alone. Define data capture,
            calibration, quality assurance and treatment of missing values
            before interpretation. Co-locating meteorology and
            time-synchronising operational logs strengthens attribution.
          </p>
          <Callout title="Baseline discipline">
            <p>
              Compare like with like: pollutant, averaging time, season,
              monitor, method, traffic and meteorology. Label modelled, measured
              and forecast results explicitly.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO Doc 9889, inventory and dispersion guidance.",
              "EU Ambient Air Quality framework and monitoring principles.",
              "WHO Global Air Quality Guidelines.",
            ]}
          />
        </Lesson>
      )}
      {active === 3 && (
        <Lesson
          module={4}
          n="04"
          title="Controls and joint action"
          lead="No single actor controls the whole airshed. Effective action combines source prevention, cleaner energy, operational coordination and verified exposure reduction."
        >
          <h2>Use a control hierarchy</h2>
          <ol>
            <li>
              <b>Avoid unnecessary activity and emissions.</b> Remove avoidable
              idling, duplicate trips and preventable ground runs within
              authorised constraints.
            </li>
            <li>
              <b>Reduce at source.</b> Cleaner engines and equipment,
              lower-sulphur fuels, process substitution, capture or containment.
            </li>
            <li>
              <b>Substitute energy or mode.</b> Fixed electrical ground power,
              electrified GSE and coordinated transport—assessed across
              lifecycle and grid conditions.
            </li>
            <li>
              <b>Optimise operation.</b> Taxi, queue, APU and logistics
              management, provided safety and mission outcomes are preserved.
            </li>
            <li>
              <b>Protect receptors and verify.</b> Separation, ventilation,
              scheduling, occupational controls, monitoring and corrective
              action.
            </li>
          </ol>
          <VisualFigure
            src="/course/laq-eurofighter.png"
            alt="Eurofighter on an Air Power apron with ground equipment and air quality monitoring"
            label="CONTROL EVERY SOURCE"
            caption="Local air-quality improvement can require coordinated control of the Eurofighter activity, auxiliary power, support equipment, vehicles and worker exposure—not one aircraft-only measure."
          />
          <h2>Joint action and governance</h2>
          <p>
            Operators hold aircraft and mission data; the base controls
            infrastructure and many stationary activities; air-navigation actors
            affect movement; road authorities and logistics providers influence
            access traffic; environmental and health authorities manage ambient
            standards; communities identify exposure experience. A shared
            airshed plan needs named owners, compatible datasets and an
            escalation route.
          </p>
          <h2>
            Electrification is a local-air-quality lever—not a zero-impact label
          </h2>
          <p>
            Electric GSE removes tailpipe combustion at point of use and can
            reduce worker exposure and noise. Its climate and lifecycle outcomes
            depend on electricity, battery manufacture, durability and end of
            life. Charging capacity, fire safety, duty cycle and resilience must
            be assessed. Report the local benefit separately from wider impacts.
          </p>
          <Callout title="Worked comparison" tone="gold">
            <p>
              Replacing a diesel GPU with fixed electrical ground power may
              remove local NOₓ and particle exhaust during connection. Quantify
              operating hours and avoided fuel, confirm that the aircraft’s
              technical requirements are met, measure electricity, and disclose
              upstream and infrastructure boundaries.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO Doc 9889, Airport Air Quality Manual.",
              "EASA, European Aviation Environmental Report.",
              "ICAO/CAEP, Report on Environmental Interdependencies.",
            ]}
          />
        </Lesson>
      )}
      {active === 4 && (
        <Lesson
          module={4}
          n="05"
          title="Charges, trade-offs and Air Power"
          lead="Economic instruments may influence behaviour, but they do not clean the air by themselves—and civil mechanisms do not automatically transfer to State aircraft."
        >
          <h2>The potential role of environmental charges</h2>
          <p>
            A charge can differentiate aircraft or activities using a defined
            emissions parameter, internalise part of a cost, fund measures or
            encourage technology and operational change. Its effectiveness
            depends on legal authority, the strength and predictability of the
            price signal, feasible alternatives and whether behaviour actually
            changes. Revenue is not evidence of lower concentration.
          </p>
          <p>
            Design risks include using certification values that poorly reflect
            local conditions, double charging, incentives too weak to alter
            decisions, perverse traffic shifts and inequitable use of funds.
            Evaluation should track the causal chain: charge → decision response
            → changed activity/emissions → changed ambient exposure.
          </p>
          <h2>Interdependencies require a decision table</h2>
          <table>
            <thead>
              <tr>
                <th>Measure</th>
                <th>Potential LAQ benefit</th>
                <th>Check also</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reduced taxi/APU use</td>
                <td>Lower local combustion emissions</td>
                <td>Safety, delay, ground-power emissions, resilience</td>
              </tr>
              <tr>
                <td>Alternative fuel pathway</td>
                <td>May change sulphur and particle emissions</td>
                <td>
                  Lifecycle climate result, certification and availability
                </td>
              </tr>
              <tr>
                <td>Route or runway change</td>
                <td>Moves the plume relative to receptors</td>
                <td>Noise distribution, fuel, airspace and mission</td>
              </tr>
              <tr>
                <td>Later scheduling</td>
                <td>May avoid meteorological peak</td>
                <td>Noise/sleep, staff and readiness</td>
              </tr>
            </tbody>
          </table>
          <h2>Air Power applicability</h2>
          <p>
            For A400M or Eurofighter activities, define the authorised service
            and non-negotiable gates before selecting an environmental lever.
            Check national law, permits and internal controls rather than
            assuming airline or civil-airport charging schemes apply. Sensitive
            operational data may require protected aggregation, but security
            does not justify unsupported environmental claims.
          </p>
          <Callout title="Claim repair">
            <p>
              Replace “clean-air A400M operation” with: “For the defined
              ground-operation class, calculated NOₓ emissions fell 11% against
              the matched baseline after reduced APU time. This is an inventory
              result; ambient concentration, background sources and meteorology
              are assessed separately.”
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO Doc 9889, Airport Air Quality Manual.",
              "European aviation environmental charging and air-quality policy materials.",
              "ICAO/CAEP, environmental interdependencies report.",
            ]}
          />
        </Lesson>
      )}
      {active === 5 && <AirLab />}
      {active === 6 && (
        <Assessment
          module={4}
          questions={airQuestions}
          answers={answers}
          setAnswers={setAnswers}
          checked={checked}
          setChecked={setChecked}
          score={score}
          passScore={8}
          onPass={() => mark(6)}
        />
      )}
    </>
  );
}

function AirLab() {
  const fields = [
    "Air Power activity and authorised outcome",
    "Spatial and temporal airshed boundary",
    "Aircraft, ground, stationary and background sources",
    "Priority pollutants and relevant averaging periods",
    "Inventory activity data and emission factors",
    "Monitoring, meteorology and modelling evidence",
    "Exposed workers, communities and sensitive receptors",
    "Source-prevention and reduction options",
    "Climate, noise, safety, security and mission trade-offs",
    "Verification plan and precise evidence-based claim",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 4 · APPLIED LAB</p>
      <h1>Air Power Air Quality Lab</h1>
      <p className="lead">
        Develop an evidence-based local air-quality decision for an A400M or
        Eurofighter activity, from source inventory to receptor exposure.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Activity:</b> A400M turnaround. <b>Question:</b> replace selected
          APU time with fixed electrical ground power. <b>Evidence:</b> APU
          fuel/time and emission indices, electrical load and generation, worker
          and boundary monitoring, meteorology and matched operational data.{" "}
          <b>Claim:</b> report verified source-emission change separately from
          ambient concentration and lifecycle effects.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`air-lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) =>
                localStorage.setItem(`air-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

function LocalModule({
  active,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  mark,
}: {
  active: number;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  mark: (n: number) => void;
}) {
  return (
    <>
      {active === 0 && (
        <Lesson
          module={5}
          n="01"
          title="Water, wastewater and contamination"
          lead="Water management begins with the service that requires water, the quality it needs and the contamination pathways it may create."
        >
          <h2>Map quantity and quality together</h2>
          <p>
            Air Power sites use water for sanitation, cooling, component
            cleaning, aircraft washing, surface preparation, testing, fire
            protection and landscape management. A total cubic-metre figure is
            not enough: source, season, process, required quality, discharge
            route and receiving environment determine materiality. A
            water-stressed catchment changes the significance of the same
            withdrawal.
          </p>
          <p>
            A practical balance follows abstraction or purchase, storage, use,
            recirculation, evaporation, incorporation into product, leakage and
            discharge. Meter hierarchy should connect the site total to major
            processes. Normalised indicators—per maintenance event, operating
            hour or occupied area—support diagnosis, but absolute withdrawal
            remains essential.
          </p>
          <h2>Prevent contamination before treatment</h2>
          <p>
            Wastewater may contain oils, fuels, detergents, metals, suspended
            solids, paint residues, PFAS or other firefighting-agent residues,
            depending on the process and history. Clean stormwater, sanitary
            water and industrial effluent should not be assumed equivalent.
            Mixing streams can increase treatment volume and obscure
            responsibility.
          </p>
          <ol>
            <li>
              Eliminate or substitute hazardous inputs where technically
              authorised.
            </li>
            <li>Use dry or low-water methods and maintain equipment.</li>
            <li>Segregate clean water from contaminated flows.</li>
            <li>Capture spills and process residues at source.</li>
            <li>Treat to the defined discharge or reuse requirement.</li>
            <li>Monitor, retain evidence and investigate abnormal results.</li>
          </ol>
          <VisualFigure
            src="/course/m5-water-waste.png"
            alt="A400M maintenance context with controlled water capture, protected drainage and segregated waste"
            label="CONTROL THE FLOW"
            caption="For A400M support activities, water efficiency and pollution prevention must be designed together: source control, drainage segregation, capture, treatment and verified discharge."
          />
          <Callout title="Claim discipline" tone="gold">
            <p>
              “Water use per comparable wash fell 18% versus the 2025 baseline;
              total site withdrawal, water-stress context and effluent quality
              are reported separately.”
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001 operational control and lifecycle perspective.",
              "EASA environmental sustainability study for maintenance and production organisations.",
              "Fundamentals of Sustainable Aviation, facilities and resource-management chapters.",
            ]}
          />
        </Lesson>
      )}
      {active === 1 && (
        <Lesson
          module={5}
          n="02"
          title="Waste prevention and circularity"
          lead="Waste management is not a bin-colour exercise. It begins with purchasing, process design, material control and the preservation of technical value."
        >
          <h2>Apply the hierarchy to the real decision</h2>
          <p>
            The preferred sequence is prevention, preparation for reuse,
            recycling, other recovery and disposal. Prevention includes longer
            life, accurate purchasing, process yield, repair and avoidance of
            single-use inputs where airworthiness and safety allow. Reuse
            requires defined condition and traceability. Recycling recovers
            material but often loses embedded energy, geometry, certification
            status and economic value.
          </p>
          <h2>Hazard determines control—not appearance</h2>
          <p>
            Aerospace waste can include oils, solvents, paints, sealants,
            contaminated absorbents, batteries, electronic equipment, metals and
            composites. Classification must use composition, contamination,
            legal criteria and process knowledge. Mixing hazardous and
            non-hazardous streams can increase risk and cost. Containers,
            labelling, compatibility, secondary containment, storage time,
            documentation and authorised treatment routes are operational
            controls.
          </p>
          <table>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Use</th>
                <th>Risk of misuse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total waste</td>
                <td>Shows absolute burden</td>
                <td>Activity changes can distort comparison</td>
              </tr>
              <tr>
                <td>Waste per service unit</td>
                <td>Shows process intensity</td>
                <td>Can improve while total rises</td>
              </tr>
              <tr>
                <td>Recycling rate</td>
                <td>Shows treatment distribution</td>
                <td>Can hide prevention and hazardous streams</td>
              </tr>
              <tr>
                <td>Material yield</td>
                <td>Connects input to useful output</td>
                <td>Requires reliable process boundary</td>
              </tr>
            </tbody>
          </table>
          <h2>Circularity in maintenance</h2>
          <p>
            Repair, overhaul, approved parts harvesting, remanufacture and
            exchange pools can retain more value than material recycling. The
            environmental case must include inspection, transport, energy,
            replacement avoidance and service life. Safety, configuration
            control, export rules and airworthiness documentation are gates, not
            tradeable sustainability variables.
          </p>
          <Callout title="Anti-greenwashing check">
            <p>
              “Zero waste” is rarely supportable. State the stream, boundary,
              period and route, and distinguish prevented, reused, recycled,
              recovered and disposed quantities.
            </p>
          </Callout>
          <Sources
            items={[
              "EASA, Assessment of Environmental Sustainability in Aviation Maintenance and Production.",
              "Aircraft cabin-interior recycling decision-tree research.",
              "ICAO, The Aircraft Life-cycle: Reduce, Re-use, Recycle.",
            ]}
          />
        </Lesson>
      )}
      {active === 2 && (
        <Lesson
          module={5}
          n="03"
          title="Wildlife, biodiversity and land use"
          lead="At an airfield, biodiversity management must protect ecosystems while controlling wildlife hazards to aircraft and people."
        >
          <h2>
            Airfields are ecological systems and safety-critical infrastructure
          </h2>
          <p>
            Large grasslands, drainage features, buildings and perimeter land
            can support plants and animals. Some habitats may hold conservation
            value; some combinations of food, water, shelter and flight paths
            can attract hazardous wildlife. The aim is not to maximise the
            number of species beside a runway, nor to remove nature
            indiscriminately, but to manage habitat based on collision risk,
            legal duties and landscape ecology.
          </p>
          <VisualFigure
            src="/course/m5-biodiversity.png"
            alt="Eurofighter at an Air Power base with managed grassland and ecological survey staff at safe distance"
            label="MANAGE HABITAT AND RISK"
            caption="Airfield biodiversity planning integrates protected species, habitat condition, land use and wildlife-strike risk. Safety and conservation evidence must be considered together."
          />
          <h2>A risk-based wildlife programme</h2>
          <ol>
            <li>
              Record strikes, sightings, species, abundance, location, time and
              operational conditions.
            </li>
            <li>
              Identify attractants: food, standing water, nesting, roosting,
              waste and surrounding land use.
            </li>
            <li>
              Assess species-specific likelihood and consequence, not abundance
              alone.
            </li>
            <li>
              Prioritise habitat modification and source control before
              repetitive dispersal.
            </li>
            <li>
              Coordinate with landowners and authorities beyond the fence.
            </li>
            <li>
              Monitor effectiveness, non-target effects and legal compliance.
            </li>
          </ol>
          <h2>Biodiversity needs a baseline and additionality</h2>
          <p>
            A biodiversity claim should define habitat extent, condition,
            species or ecological function, reference condition, pressures,
            management action and monitoring period. Planting flowers is not
            automatically a net gain. Actions must be additional to mandatory
            restoration, suitable for the site, maintained over time and checked
            against wildlife hazard.
          </p>
          <Callout title="Decision boundary" tone="gold">
            <p>
              A pollinator measure suitable for an office courtyard may be
              unsuitable near movement areas. Location, species choice,
              flowering period and attraction risk require ecological and
              aviation-safety review.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO Airport Services Manual, wildlife hazard management guidance.",
              "EASA wildlife-strike risk-management materials.",
              "Fundamentals of Sustainable Aviation, airport land and ecosystem management.",
            ]}
          />
        </Lesson>
      )}
      {active === 3 && (
        <Lesson
          module={5}
          n="04"
          title="Energy and major environmental risks"
          lead="Efficiency reduces routine resource demand; major-risk management prevents low-frequency events with potentially severe consequences."
        >
          <h2>Build energy performance from significant uses</h2>
          <p>
            Hangars, HVAC, compressed air, lighting, test equipment, paint
            processes, data systems and charging infrastructure create different
            load profiles. An energy review identifies significant uses,
            relevant variables and people who influence them. Baselines may need
            normalisation for weather, operating hours, occupancy or workload.
          </p>
          <p>
            Use the sequence: avoid demand, optimise control, maintain systems,
            recover energy, improve equipment, then supply remaining demand with
            an evidenced energy pathway. Peak demand, resilience and operational
            continuity matter alongside annual kWh. A renewable certificate
            changes an accounting attribute; it does not eliminate the need for
            efficiency or describe every lifecycle impact.
          </p>
          <h2>Major environmental risks require barriers</h2>
          <p>
            Fuel or chemical releases, firewater, storage failure, drainage
            contamination and loss of containment can create rapid off-site
            consequences. A source–pathway–receptor model connects the hazardous
            inventory to soil, drains, groundwater, surface water, workers,
            communities and habitats. Risk assessment considers likelihood,
            consequence and control reliability.
          </p>
          <div className="flow">
            <span>
              Prevent
              <br />
              <b>design &amp; procedure</b>
            </span>
            <i>→</i>
            <span>
              Detect
              <br />
              <b>inspection &amp; alarms</b>
            </span>
            <i>→</i>
            <span>
              Contain
              <br />
              <b>bunds &amp; isolation</b>
            </span>
          </div>
          <p>
            Preparedness then adds competent response, accessible equipment,
            drain plans, escalation, external coordination, exercises, recovery
            and investigation. A written plan without maintained physical
            controls or drills is weak evidence.
          </p>
          <table>
            <thead>
              <tr>
                <th>Leading indicator</th>
                <th>Lagging indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Overdue barrier inspections; alarm tests; drill actions;
                  containment defects
                </td>
                <td>
                  Spill volume; permit exceedance; affected area; recovery time
                </td>
              </tr>
            </tbody>
          </table>
          <Sources
            items={[
              "ISO 14001 emergency preparedness and response.",
              "ISO 50001 energy performance principles.",
              "EASA maintenance and production environmental sustainability study.",
            ]}
          />
        </Lesson>
      )}
      {active === 4 && (
        <Lesson
          module={5}
          n="05"
          title="Aircraft end-of-life and decommissioning"
          lead="End-of-life is a controlled aerospace project: make safe, preserve traceability, recover technical value and manage residual materials responsibly."
        >
          <h2>The hierarchy starts before retirement</h2>
          <p>
            Design materials, joining methods, repairability,
            hazardous-substance information and digital records shape recovery
            decades later. During service, maintenance and modification records
            preserve knowledge. At retirement, the first decision may be
            continued service, sale, part-out, training use, conversion or
            dismantling—not immediate shredding.
          </p>
          <VisualFigure
            src="/course/m5-endoflife.png"
            alt="Retired A400M type military transport in a controlled decommissioning facility with component recovery"
            label="RETAIN VALUE SAFELY"
            caption="Controlled decommissioning prioritises safe depollution, traceable component recovery and segregated materials before residual treatment."
          />
          <h2>A controlled decommissioning sequence</h2>
          <ol>
            <li>
              Confirm ownership, configuration, records, security and legal
              requirements.
            </li>
            <li>
              Plan occupational, environmental, fire and emergency controls.
            </li>
            <li>
              Depollute: fuels, oils, hydraulic fluids, batteries, gases and
              hazardous devices.
            </li>
            <li>
              Remove serviceable components under approved traceability and
              release conditions.
            </li>
            <li>Separate high-value assemblies and material fractions.</li>
            <li>
              Characterise composites and mixed materials; select authorised
              routes.
            </li>
            <li>
              Document mass balance, destinations, residual waste and lessons
              for design.
            </li>
          </ol>
          <h2>Recycling percentage is not the whole result</h2>
          <p>
            Mass-based recovery can be dominated by metals while small hazardous
            fractions or difficult composites drive risk. Reuse of a traceable
            component may retain far more value than recycling its alloy, but
            only when airworthiness and security gates are satisfied. Transport,
            dismantling energy, substitution credit and allocation assumptions
            affect lifecycle comparisons.
          </p>
          <Callout title="Claim discipline" tone="gold">
            <p>
              Avoid “100% recyclable aircraft”. Report the defined mass,
              component reuse, material recycling, other recovery, disposal,
              excluded items, destination evidence and whether the result is
              measured or forecast.
            </p>
          </Callout>
          <Sources
            items={[
              "ICAO, The Aircraft Life-cycle: Reduce, Re-use, Recycle.",
              "Aircraft end-of-life and cabin-interior recycling decision frameworks.",
              "Life Cycle Assessment in the Air Transport System, NLR/DLR.",
            ]}
          />
        </Lesson>
      )}
      {active === 5 && <LocalLab />}
      {active === 6 && (
        <Assessment
          module={5}
          questions={localQuestions}
          answers={answers}
          setAnswers={setAnswers}
          checked={checked}
          setChecked={setChecked}
          score={score}
          passScore={8}
          onPass={() => mark(6)}
        />
      )}
    </>
  );
}

function LocalLab() {
  const fields = [
    "Air Power activity and service delivered",
    "Water, energy and material inputs",
    "Wastewater, waste, emissions and land interactions",
    "Legal, safety, airworthiness and security gates",
    "Source–pathway–receptor or lifecycle boundary",
    "Absolute and intensity baseline indicators",
    "Prevention and source-reduction controls",
    "Reuse, treatment, recovery and emergency controls",
    "Biodiversity, climate, noise and operational trade-offs",
    "Verification plan and precise evidence-based claim",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 5 · APPLIED LAB</p>
      <h1>Local Impact Control Plan</h1>
      <p className="lead">
        Build a control plan for one maintenance, airbase or end-of-life
        activity, following impacts from source to receptor and from prevention
        to verification.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Activity:</b> A400M component cleaning. <b>Controls:</b> authorised
          lower-hazard chemistry, closed-loop cleaning, bath-life monitoring,
          segregated wastewater and traceable hazardous-waste route.{" "}
          <b>Evidence:</b> water and chemical input, component throughput, bath
          changes, effluent quality, waste mass and operational acceptance.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`local-lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) =>
                localStorage.setItem(`local-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

function ManagementModule({
  active,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  mark,
}: {
  active: number;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  mark: (n: number) => void;
}) {
  return (
    <>
      {active === 0 && (
        <Lesson
          module={6}
          n="01"
          title="Management systems and the PDCA cycle"
          lead="A management system is the operating architecture that turns environmental intent into repeatable decisions, controls, evidence and improvement."
        >
          <h2>What an EMS does</h2>
          <p>
            An Environmental Management System establishes policy, roles,
            processes and information needed to manage environmental aspects,
            compliance obligations, risks and performance. ISO 14001 provides a
            certifiable framework; it does not prescribe a single performance
            level or guarantee that incidents and noncompliance can never occur.
            Certification relates to a defined scope and the effectiveness of
            the audited system.
          </p>
          <p>
            A broader Sustainability Management System may connect
            environmental, social and governance topics, enterprise risk,
            product strategy, procurement and reporting. It should build on
            controlled management processes rather than create a parallel layer
            of campaigns and claims.
          </p>
          <h2>Plan–Do–Check–Act</h2>
          <div className="cards">
            <article>
              <b>PLAN</b>
              <p>
                Context, interested parties, scope, aspects, obligations, risks,
                opportunities, objectives and plans.
              </p>
            </article>
            <article>
              <b>DO</b>
              <p>
                Resources, competence, communication, documented information,
                operational controls and emergency readiness.
              </p>
            </article>
            <article>
              <b>CHECK</b>
              <p>
                Monitoring, measurement, compliance evaluation, internal audit
                and management review.
              </p>
            </article>
            <article>
              <b>ACT</b>
              <p>
                Correction, causal action, system change, learning and continual
                improvement.
              </p>
            </article>
          </div>
          <VisualFigure
            src="/course/m6-ems.png"
            alt="A400M maintenance environment with cross-functional environmental management review"
            label="MANAGE THE SYSTEM"
            caption="Environmental performance around A400M support depends on connected ownership, operational control, evidence and review—not on the environmental team acting alone."
          />
          <h2>Leadership and integration</h2>
          <p>
            Top management remains accountable for system effectiveness,
            integration into business processes, resources and strategic
            direction. Environmental specialists provide expertise and
            assurance; process owners control daily activity; employees and
            contractors execute and report; procurement, engineering, quality,
            facilities and operations influence lifecycle outcomes.
          </p>
          <Callout title="System boundary" tone="gold">
            <p>
              Define sites, activities, products, services and authority
              included in the EMS. Explain interfaces and exclusions; a narrow
              certified scope must not be communicated as evidence about the
              whole enterprise.
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001:2015, Environmental management systems — Requirements with guidance for use.",
              "ISO 14004, general implementation guidance.",
              "Fundamentals of Sustainable Aviation, sustainability-management chapters.",
            ]}
          />
        </Lesson>
      )}
      {active === 1 && (
        <Lesson
          module={6}
          n="02"
          title="Context, aspects, compliance and risk"
          lead="The planning process translates external conditions and operational reality into priorities that the organisation can control or influence."
        >
          <h2>Context and interested parties</h2>
          <p>
            Context includes mission and market conditions, environmental state,
            climate exposure, legal change, technology, resources, culture and
            organisational interfaces. Interested parties may include
            authorities, customers, workers, contractors, communities, emergency
            services, suppliers and corporate functions. Their needs become
            compliance obligations only through a legal, contractual or
            voluntary commitment route that the organisation adopts.
          </p>
          <h2>Aspects across a lifecycle perspective</h2>
          <p>
            An environmental aspect is an element of an activity, product or
            service that interacts or can interact with the environment.
            Identification covers normal operation, start-up and shutdown,
            abnormal conditions and reasonably foreseeable emergencies. A
            lifecycle perspective considers stages the organisation controls or
            influences—design, procurement, manufacture, operation, maintenance,
            transport and end-of-life—without requiring a full LCA for every
            aspect.
          </p>
          <table>
            <thead>
              <tr>
                <th>Planning object</th>
                <th>Question</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aspect</td>
                <td>How does the activity interact with the environment?</td>
                <td>Aspect–impact register and significance</td>
              </tr>
              <tr>
                <td>Obligation</td>
                <td>What exact requirement applies, where and when?</td>
                <td>Owned control and evidence</td>
              </tr>
              <tr>
                <td>Risk</td>
                <td>
                  What could prevent the EMS from achieving intended outcomes?
                </td>
                <td>Treatment and monitoring</td>
              </tr>
              <tr>
                <td>Opportunity</td>
                <td>What could improve control or performance?</td>
                <td>Evaluated action, not automatic initiative</td>
              </tr>
            </tbody>
          </table>
          <h2>Significance must be systematic</h2>
          <p>
            Criteria can include magnitude, severity, frequency, legal status,
            stakeholder concern, emergency potential, lifecycle influence and
            control effectiveness. Scores support consistency but do not replace
            judgement. A legal noncompliance risk or catastrophic spill
            potential should not disappear because frequency is low or
            arithmetic averages it away.
          </p>
          <h2>Compliance obligations and evaluation</h2>
          <p>
            A legal register must identify applicable clauses, activities,
            owners, controls, evidence and review dates. Compliance evaluation
            then tests actual evidence against each requirement; it is not the
            same as maintaining a list. Permit limits, inspections, contractor
            controls and reporting deadlines require different verification.
          </p>
          <Callout title="Air Power applicability">
            <p>
              State-aircraft status may change the applicability of specific
              civil instruments, but it does not remove the need to determine
              national, site, product, worker, chemical, waste, water and permit
              obligations explicitly.
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001:2015 clauses 4 and 6.",
              "EASA environmental sustainability study for maintenance and production organisations.",
              "ICAO/CAEP environmental interdependencies report.",
            ]}
          />
        </Lesson>
      )}
      {active === 2 && (
        <Lesson
          module={6}
          n="03"
          title="Objectives, controls and performance"
          lead="A credible system connects priority aspects to measurable objectives, feasible controls, competent execution and indicators that reveal physical outcomes."
        >
          <h2>Design objectives around outcomes</h2>
          <p>
            An objective should state the intended result, indicator, baseline,
            target, deadline, boundary, owner, resources and guardrails. “Raise
            awareness” is an activity unless linked to changed competence,
            behaviour and performance. Projects need milestones, but milestone
            completion should not be confused with environmental benefit.
          </p>
          <div className="flow">
            <span>
              Significant aspect
              <br />
              <b>solvent emissions</b>
            </span>
            <i>→</i>
            <span>
              Control
              <br />
              <b>authorised process window</b>
            </span>
            <i>→</i>
            <span>
              Evidence
              <br />
              <b>use, VOC &amp; quality</b>
            </span>
          </div>
          <h2>Operational control is a designed process</h2>
          <p>
            Controls can be engineering barriers, approved parameters,
            preventive maintenance, procurement requirements, competence,
            inspection, permits-to-work, contractor clauses or response
            arrangements. Define control owner, critical steps, acceptance
            criteria, records, deviation route and change management. A
            procedure that is inaccessible or impossible under real workload is
            not an effective control.
          </p>
          <h2>Process adherence and human performance</h2>
          <p>
            Adherence means that the approved method is understood, feasible and
            executed. A deviation may reflect intentional noncompliance, unclear
            design, conflicting priorities, missing tools, competence gaps or
            changed conditions. Observation and interviews should test
            work-as-done, not merely ask whether a document exists.
          </p>
          <VisualFigure
            src="/course/m6-audit.png"
            alt="Eurofighter maintenance process with technicians and environmental control inspection"
            label="VERIFY WORK AS DONE"
            caption="For a Eurofighter maintenance process, evidence must connect approved controls with actual materials, containment, competence, records and response to deviation."
          />
          <h2>Build a balanced indicator set</h2>
          <p>
            Use leading indicators—barrier health, overdue actions, inspections,
            competence and deviations—alongside lagging indicators such as
            emissions, waste, incidents and exceedances. Pair absolute results
            with relevant intensity metrics. Define data source, calculation,
            frequency, owner, quality checks and change control.
          </p>
          <Callout title="Performance claim">
            <p>
              “VOC intensity fell 9% per comparable maintenance event; total VOC
              fell 4%. Product-quality acceptance remained within the authorised
              criteria, and the dataset covers the stated processes and period.”
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001:2015 clauses 6–8 and 9.1.",
              "ISO 14031, Environmental performance evaluation guidance.",
              "EASA study on maintenance and production environmental performance.",
            ]}
          />
        </Lesson>
      )}
      {active === 3 && (
        <Lesson
          module={6}
          n="04"
          title="Audit, incidents and improvement"
          lead="Checking is valuable only when evidence leads to proportionate containment, causal learning and verified system change."
        >
          <h2>Monitoring, compliance evaluation and audit are different</h2>
          <p>
            Monitoring measures selected variables. Compliance evaluation
            concludes whether specific obligations are fulfilled. Internal audit
            samples whether the management system conforms to planned
            arrangements and is effectively implemented and maintained. They
            overlap in evidence but answer different questions.
          </p>
          <p>
            An audit programme is risk-based: scope, frequency and methods
            consider significance, change, previous performance and results.
            Auditor competence combines audit method with enough technical
            understanding. Independence avoids auditing one’s own work, but does
            not mean detachment from operational reality.
          </p>
          <h2>From finding to verified closure</h2>
          <ol>
            <li>Describe objective evidence and the unmet criterion.</li>
            <li>Contain immediate risk and correct the detected condition.</li>
            <li>Determine extent: where else can the same weakness exist?</li>
            <li>
              Analyse systemic causes—process, design, resources, competence,
              supervision or change.
            </li>
            <li>Select action proportional to recurrence risk.</li>
            <li>Implement with owner and due date.</li>
            <li>
              Verify effectiveness through evidence after enough operating time.
            </li>
          </ol>
          <h2>Incidents and near misses</h2>
          <p>
            Emergency response protects people and environment first.
            Investigation then reconstructs conditions and barrier performance
            without equating the last human action with the root cause. Near
            misses and weak signals can reveal barrier degradation before harm
            occurs. Lessons must be screened for relevance across sites and
            processes.
          </p>
          <table>
            <thead>
              <tr>
                <th>Weak closure</th>
                <th>Stronger closure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>“Operator retrained”</td>
                <td>
                  Cause shows competence gap; method, supervision and
                  effectiveness are verified
                </td>
              </tr>
              <tr>
                <td>“Procedure updated”</td>
                <td>
                  Users can access, understand and execute the new control under
                  real conditions
                </td>
              </tr>
              <tr>
                <td>“No repeat this month”</td>
                <td>
                  Control performance is sampled across sufficient exposure and
                  comparable scenarios
                </td>
              </tr>
            </tbody>
          </table>
          <Sources
            items={[
              "ISO 14001:2015 clauses 9.2, 9.3 and 10.",
              "ISO 19011, Guidelines for auditing management systems.",
              "ISO 14001 emergency preparedness and response requirements.",
            ]}
          />
        </Lesson>
      )}
      {active === 4 && (
        <Lesson
          module={6}
          n="05"
          title="Governance, responsibility and reporting"
          lead="Reporting is the visible end of a controlled chain: governance, materiality, boundaries, data ownership, methodology, assurance and balanced communication."
        >
          <h2>CSR, ESG and sustainability management</h2>
          <p>
            Corporate responsibility describes how an organisation understands
            and manages its impacts and relationships with society. ESG
            information often serves investors, lenders, customers and
            regulators. These perspectives overlap but are not interchangeable
            with physical sustainability. A favourable rating or policy does not
            by itself demonstrate reduced environmental impact.
          </p>
          <h2>Materiality shapes disclosure</h2>
          <p>
            Impact materiality asks how the organisation affects people and
            environment. Financial materiality asks how sustainability matters
            create risks or opportunities for enterprise value. Double
            materiality examines both. The process should use evidence and
            stakeholder input, document thresholds and avoid excluding adverse
            topics because performance is weak.
          </p>
          <Callout title="Evidence chain" tone="gold">
            <p>
              A sustainability disclosure is credible when every result can be
              traced through boundary, method, source system, owner, review,
              correction and governance decision.
            </p>
          </Callout>
          <h2>Build an auditable data chain</h2>
          <ol>
            <li>Define entity, operational and value-chain boundary.</li>
            <li>
              Specify metric, unit, period, baseline and calculation
              methodology.
            </li>
            <li>Assign data owner and approver.</li>
            <li>Retain source evidence and transformations.</li>
            <li>Apply validation, reconciliation and access controls.</li>
            <li>
              Document estimates, uncertainty, restatements and methodology
              changes.
            </li>
            <li>
              Obtain internal or external assurance appropriate to the claim.
            </li>
          </ol>
          <h2>Balanced reporting prevents greenwashing</h2>
          <p>
            Separate targets, forecasts and achieved results. Present absolute
            and intensity trends, material setbacks, scope limitations and
            residual impacts. Do not imply that an ISO certificate, investment
            amount or number of initiatives equals environmental improvement.
            Claims must match the assured evidence and the audience’s likely
            interpretation.
          </p>
          <Callout title="Management review">
            <p>
              Senior leaders should receive trends, compliance status, objective
              progress, incidents, audit results, resources, stakeholder
              changes, risks and improvement opportunities—and record decisions,
              not merely acknowledge a slide deck.
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001 management review and communication requirements.",
              "GRI Standards and European sustainability-reporting principles.",
              "GHG Protocol data-quality and inventory-boundary principles.",
            ]}
          />
        </Lesson>
      )}
      {active === 5 && <ManagementLab />}
      {active === 6 && (
        <Assessment
          module={6}
          questions={managementQuestions}
          answers={answers}
          setAnswers={setAnswers}
          checked={checked}
          setChecked={setChecked}
          score={score}
          passScore={8}
          onPass={() => mark(6)}
        />
      )}
    </>
  );
}

function ManagementLab() {
  const fields = [
    "Process, activity and EMS scope",
    "Context and interested parties",
    "Significant aspects and lifecycle influence",
    "Compliance obligations and evidence",
    "Risks, opportunities and mandatory gates",
    "Objective, baseline, target and guardrails",
    "Operational controls, owners and records",
    "Leading and lagging performance indicators",
    "Audit, deviation and corrective-action route",
    "Management review decision and defensible report statement",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 6 · APPLIED LAB</p>
      <h1>EMS Control Architecture Lab</h1>
      <p className="lead">
        Design the complete management chain for one Air Power environmental
        priority—from context and aspect to control, assurance and reporting.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Priority:</b> hazardous solvent use in a defined Eurofighter
          maintenance process. <b>Architecture:</b> legal and technical
          requirements, authorised chemistry, process window, competence,
          purchasing control, use/VOC/quality indicators, deviation response,
          audit sample and management-review decision.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`management-lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) =>
                localStorage.setItem(`management-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

function CommunicationModule({
  active,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  mark,
}: {
  active: number;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  mark: (n: number) => void;
}) {
  return (
    <>
      {active === 0 && (
        <Lesson
          module={7}
          n="01"
          title="Communication as a controlled process"
          lead="Environmental communication is a management process: define purpose, evidence, audience, owner, approval, channel and feedback before publishing."
        >
          <h2>Communication can change decisions—and create risk</h2>
          <p>
            Messages influence how employees operate, how managers allocate
            resources, how customers understand performance and how communities
            assess trust. Poor communication can weaken controls, create false
            confidence, conceal material impacts or expose the organisation to
            legal and reputational risk. Good communication supports competent
            action and an accurate understanding of progress and limitations.
          </p>
          <h2>Start with the communication brief</h2>
          <ol>
            <li>
              <b>Purpose:</b> inform, instruct, consult, warn, report or request
              a decision.
            </li>
            <li>
              <b>Audience:</b> who will use the information and what do they
              already know?
            </li>
            <li>
              <b>Evidence:</b> metric, boundary, baseline, method, uncertainty
              and assurance.
            </li>
            <li>
              <b>Meaning:</b> what conclusion does the evidence support—and not
              support?
            </li>
            <li>
              <b>Action:</b> what should the audience do, decide or understand?
            </li>
            <li>
              <b>Control:</b> owner, technical/legal review, approval, version
              and correction route.
            </li>
          </ol>
          <h2>Match channel to consequence</h2>
          <p>
            A safety-critical environmental control needs an approved procedure,
            competent briefing and confirmation of understanding—not a campaign
            poster. A management decision needs concise trends, exceptions,
            options and consequences. A public claim requires documented
            substantiation and likely-interpretation review. Urgency,
            sensitivity, accessibility, security and permanence affect channel
            choice.
          </p>
          <div className="cards">
            <article>
              <b>Instruction</b>
              <p>
                Specific authorised action, conditions, responsibilities and
                escalation.
              </p>
            </article>
            <article>
              <b>Performance update</b>
              <p>
                Metric, comparison, causes, limitations and management response.
              </p>
            </article>
            <article>
              <b>Consultation</b>
              <p>
                Question, decision space, evidence and how input will be used.
              </p>
            </article>
            <article>
              <b>Claim</b>
              <p>
                Substantiated benefit with explicit boundary and no broader
                implication.
              </p>
            </article>
          </div>
          <Callout title="Control question" tone="gold">
            <p>
              If the message is misunderstood, what environmental, operational,
              legal or trust consequence could follow—and which review prevents
              it?
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001:2015 communication requirements.",
              "GRI principles for stakeholder inclusiveness, accuracy, balance and clarity.",
              "Airbus anti-greenwashing principles supplied for the project.",
            ]}
          />
        </Lesson>
      )}
      {active === 1 && (
        <Lesson
          module={7}
          n="02"
          title="Stakeholders, audiences and materiality"
          lead="Stakeholder communication is not sending the same slide to everyone. It starts with their relationship to the impact and the decision."
        >
          <h2>Map influence and impact</h2>
          <p>
            Regulators, customers, employees, contractors, communities,
            suppliers, emergency services, investors and corporate functions
            have different rights, responsibilities and information needs. A
            stakeholder with little influence can still experience major impact;
            prioritising only powerful audiences is not responsible engagement.
          </p>
          <table>
            <thead>
              <tr>
                <th>Audience</th>
                <th>Primary need</th>
                <th>Useful evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operators and maintainers</td>
                <td>Feasible control and escalation</td>
                <td>Approved limits, task steps, deviations</td>
              </tr>
              <tr>
                <td>Management</td>
                <td>Decision, risk and resources</td>
                <td>Trend, causes, options, trade-offs</td>
              </tr>
              <tr>
                <td>Authorities</td>
                <td>Compliance and impact evidence</td>
                <td>Defined records, methods, exceedances</td>
              </tr>
              <tr>
                <td>Communities</td>
                <td>Exposure, action and accountability</td>
                <td>Local data, limitations, response route</td>
              </tr>
              <tr>
                <td>Customers</td>
                <td>Product/service boundary and evidence</td>
                <td>Comparable methodology and assurance</td>
              </tr>
            </tbody>
          </table>
          <h2>Adapt language, not facts</h2>
          <p>
            Plain language can explain uncertainty without removing it.
            Technical detail can be layered: headline, key evidence,
            interpretation, limitations and supporting methodology.
            Security-sensitive Air Power information may require aggregation or
            protected channels, but confidentiality should be specific and
            should not be used to avoid communicating environmental consequences
            that can safely be disclosed.
          </p>
          <VisualFigure
            src="/course/m7-stakeholders.png"
            alt="Air Power representatives, authority and community stakeholders reviewing environmental evidence with Eurofighter in background"
            label="LISTEN BEFORE CLAIMING"
            caption="Meaningful engagement connects the people affected by Air Power activity with the evidence, decision space, responsible owner and feedback route."
          />
          <h2>Engagement must close the loop</h2>
          <p>
            State what is open to influence, record input, assess
            representativeness, explain decisions and report what changed or why
            it did not. Attendance is not agreement. Complaints are not
            calibrated measurements, but they are evidence of experience and
            trust that should be analysed alongside operational and
            environmental data.
          </p>
          <Sources
            items={[
              "ISO 14001 context, interested parties and external communication.",
              "GRI stakeholder engagement principles.",
              "ICAO guidance on community engagement around environmental impacts.",
            ]}
          />
        </Lesson>
      )}
      {active === 2 && (
        <Lesson
          module={7}
          n="03"
          title="Claims and greenwashing prevention"
          lead="A claim is not safe because each individual word is technically true. It must be substantiated and must not create a misleading overall impression."
        >
          <h2>Greenwashing can be verbal, numerical or visual</h2>
          <p>
            Risk arises from vague terms such as “green”, “clean”,
            “sustainable”, “eco-friendly”, “zero-emission” or “carbon neutral”;
            omitted boundaries; selective indicators; future ambition presented
            as achievement; irrelevant certification; tiny improvements
            exaggerated into product-wide benefit; and nature imagery that
            implies an unsupported conclusion.
          </p>
          <h2>The claim substantiation chain</h2>
          <div className="flow">
            <span>
              Evidence
              <br />
              <b>source &amp; quality</b>
            </span>
            <i>→</i>
            <span>
              Claim
              <br />
              <b>scope &amp; wording</b>
            </span>
            <i>→</i>
            <span>
              Impression
              <br />
              <b>audience meaning</b>
            </span>
          </div>
          <ol>
            <li>
              Identify the exact product, service, activity, entity and period.
            </li>
            <li>Define impact category, metric, baseline and comparison.</li>
            <li>State lifecycle and organisational boundary.</li>
            <li>Distinguish measured, modelled, forecast and target values.</li>
            <li>
              Disclose material residual impacts, trade-offs and uncertainty.
            </li>
            <li>Test the complete visual and verbal impression.</li>
            <li>Retain evidence, approval and expiry/review date.</li>
          </ol>
          <h2>Repair the claim</h2>
          <table>
            <thead>
              <tr>
                <th>Weak</th>
                <th>Evidence-aligned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>“Green maintenance”</td>
                <td>
                  “Hazardous solvent use per defined maintenance event fell 12%
                  versus the stated baseline; total use and substituted-process
                  impacts are reported separately.”
                </td>
              </tr>
              <tr>
                <td>“Zero-emission flight”</td>
                <td>
                  State which source or phase has zero direct emissions and
                  disclose upstream and in-use emissions.
                </td>
              </tr>
              <tr>
                <td>“Carbon-neutral mission”</td>
                <td>
                  Report direct emissions, reductions, residual emissions,
                  external units and excluded non-CO₂/lifecycle effects.
                </td>
              </tr>
              <tr>
                <td>“Supports six SDGs”</td>
                <td>
                  Name the target, causal contribution, negative impacts, metric
                  and evidence.
                </td>
              </tr>
            </tbody>
          </table>
          <Callout title="Reasonable audience test" tone="gold">
            <p>
              Would a reasonable person understand a broader, more certain or
              more positive environmental benefit than the evidence actually
              supports? If yes, revise the whole presentation.
            </p>
          </Callout>
          <Sources
            items={[
              "Airbus anti-greenwashing guidance supplied for the project.",
              "EU principles on substantiating environmental claims and unfair commercial practices.",
              "ISO 14021 principles for self-declared environmental claims.",
            ]}
          />
        </Lesson>
      )}
      {active === 3 && (
        <Lesson
          module={7}
          n="04"
          title="Internal engagement and behaviour"
          lead="Awareness is not the final outcome. Internal communication succeeds when people can perform the correct control under real working conditions."
        >
          <h2>Diagnose before communicating</h2>
          <p>
            A performance gap may come from knowledge, skill, inaccessible
            information, conflicting priorities, unsuitable tools, workload,
            social norms, weak supervision or an impossible process. Training
            cannot solve a design or resource problem. Observe work, interview
            users and examine deviations before choosing a communication
            intervention.
          </p>
          <VisualFigure
            src="/course/m7-internal.png"
            alt="A400M maintenance staff participating in an environmental operational-control briefing"
            label="FROM MESSAGE TO ACTION"
            caption="Internal communication must connect the approved environmental requirement with real A400M support work, questions, practice, supervision and feedback."
          />
          <h2>Design for action</h2>
          <p>
            Use role-specific scenarios, demonstrations, practice and feedback.
            Put critical information at the point of use. Explain why the
            control matters, the acceptance criteria, common failure modes and
            escalation. Contractors and newcomers need equivalent access and
            competence checks. Translated content must preserve technical
            meaning.
          </p>
          <h2>Evaluate the whole chain</h2>
          <div className="cards">
            <article>
              <b>Reach</b>
              <p>Who received or attended?</p>
            </article>
            <article>
              <b>Comprehension</b>
              <p>Can they explain the required action?</p>
            </article>
            <article>
              <b>Capability</b>
              <p>Can they perform it correctly?</p>
            </article>
            <article>
              <b>Outcome</b>
              <p>Did control adherence and physical performance improve?</p>
            </article>
          </div>
          <p>
            Email opens, training hours and poster counts are activity metrics.
            Pair them with observation, control deviations, error rates and
            environmental indicators. Monitor unintended effects: a simplified
            message may encourage shortcuts or shift impact to another process.
          </p>
          <Callout title="Psychological safety">
            <p>
              People must be able to report weak controls, uncertainty and near
              misses without fear. Communication that celebrates only success
              suppresses evidence needed for improvement.
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001 competence, awareness and communication.",
              "ISO 19011 interview and evidence principles.",
              "Human-performance and behaviour-change principles applied to operational control.",
            ]}
          />
        </Lesson>
      )}
      {active === 4 && (
        <Lesson
          module={7}
          n="05"
          title="Reporting, incidents and public response"
          lead="External communication must be balanced in routine reporting and fast, factual and correctable when an incident occurs."
        >
          <h2>Routine reporting</h2>
          <p>
            A credible report defines entities, activities, period, methodology,
            baseline, restatements, assurance and material omissions. It shows
            favourable and adverse trends, absolute and intensity data, targets
            and actual results. A polished dashboard is not evidence unless its
            data chain is controlled.
          </p>
          <h2>Incident communication priorities</h2>
          <ol>
            <li>
              Protect people and environment and support operational response.
            </li>
            <li>
              Confirm who leads technical, regulatory and public communication.
            </li>
            <li>
              State verified facts: what happened, where, when, affected
              receptors and actions underway.
            </li>
            <li>Separate known, unknown and under investigation.</li>
            <li>
              Meet mandatory notification requirements and preserve evidence.
            </li>
            <li>Give the next update time and route for affected people.</li>
            <li>
              Correct errors transparently and communicate recovery and
              learning.
            </li>
          </ol>
          <h2>Avoid two failure modes</h2>
          <p>
            <b>Premature reassurance</b>—“there is no risk”—may be unsupported
            before monitoring or pathway assessment. <b>Speculative alarm</b>{" "}
            can also cause harm. Use calibrated language: “No off-site impact
            has been identified from the evidence available at 14:00; boundary
            monitoring continues and the next update will be issued at 17:00.”
          </p>
          <h2>Communicate uncertainty and correction</h2>
          <p>
            Explain material assumptions and ranges in decision-relevant terms.
            If data or claims are wrong, correct the accessible source, describe
            the error and effect, notify affected audiences where material, and
            strengthen the control that failed. Silent replacement undermines
            trust and traceability.
          </p>
          <Callout title="Trust is operational">
            <p>
              Consistency, competence, honesty about uncertainty, visible action
              and follow-through build trust over time. Communication cannot
              compensate for absent control or unresolved impact.
            </p>
          </Callout>
          <Sources
            items={[
              "ISO 14001 external communication and emergency preparedness.",
              "GRI accuracy, balance, timeliness and verifiability principles.",
              "Environmental incident and crisis-communication good practice.",
            ]}
          />
        </Lesson>
      )}
      {active === 5 && <CommunicationLab />}
      {active === 6 && (
        <Assessment
          module={7}
          questions={communicationQuestions}
          answers={answers}
          setAnswers={setAnswers}
          checked={checked}
          setChecked={setChecked}
          score={score}
          passScore={8}
          onPass={() => mark(6)}
        />
      )}
    </>
  );
}

function CommunicationLab() {
  const fields = [
    "Environmental result or issue",
    "Purpose and decision required",
    "Primary and secondary audiences",
    "Evidence, metric, boundary and baseline",
    "What the evidence does not demonstrate",
    "Material uncertainty, residual impact and trade-offs",
    "Draft headline claim or instruction",
    "Visual-impression and greenwashing test",
    "Technical, legal and governance approval route",
    "Feedback, correction and effectiveness measure",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 7 · APPLIED LAB</p>
      <h1>Evidence-to-Message Lab</h1>
      <p className="lead">
        Transform one environmental result into a precise internal instruction,
        management message or external claim without losing boundaries or
        overstating the evidence.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Evidence:</b> verified electricity use per comparable A400M
          maintenance event fell 7%; total site electricity rose 2% with
          workload. <b>Message:</b> report both trends, describe the defined
          process intervention and avoid “greener maintenance” or whole-site
          reduction claims.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`communication-lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) =>
                localStorage.setItem(`communication-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

function Assessment({
  module,
  questions,
  answers,
  setAnswers,
  checked,
  setChecked,
  score,
  passScore,
  onPass,
}: {
  module: number;
  questions: typeof climateQuestions;
  answers: Record<number, number>;
  setAnswers: (a: Record<number, number>) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  score: number;
  passScore: number;
  onPass: () => void;
}) {
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE {module} · ASSESSMENT</p>
      <h1>Knowledge check</h1>
      <p className="lead">
        Answer all {questions.length} questions. A score of 80% is required.
        Explanations appear only after submission.
      </p>
      <div className="quiz">
        {questions.map((q, i) => (
          <fieldset key={q.q}>
            <legend>
              <span>{i + 1}</span>
              {q.q}
            </legend>
            {q.options.map((o, j) => (
              <label
                className={
                  checked
                    ? j === q.a
                      ? "correct"
                      : answers[i] === j
                        ? "wrong"
                        : ""
                    : answers[i] === j
                      ? "selected"
                      : ""
                }
                key={o}
              >
                <input
                  type="radio"
                  name={`m${module}q${i}`}
                  checked={answers[i] === j}
                  disabled={checked}
                  onChange={() => setAnswers({ ...answers, [i]: j })}
                />
                <i>{String.fromCharCode(65 + j)}</i>
                {o}
              </label>
            ))}
            {checked && (
              <p className="feedback">
                <b>{answers[i] === q.a ? "Correct." : "Review this point."}</b>{" "}
                {q.why}
              </p>
            )}
          </fieldset>
        ))}
        <button
          className="primary"
          disabled={Object.keys(answers).length < questions.length}
          onClick={() => {
            setChecked(true);
            if (score >= passScore) onPass();
          }}
        >
          {checked ? `Score: ${score}/${questions.length}` : "Submit answers"}
        </button>
        {checked && score < passScore && (
          <button
            className="secondary"
            onClick={() => {
              setChecked(false);
              setAnswers({});
            }}
          >
            Try again
          </button>
        )}
      </div>
    </section>
  );
}

function ClimateLab() {
  const fields = [
    "Mission service and authorised operational outcome",
    "Comparable baseline mission class",
    "Direct fuel and CO₂ inventory boundary",
    "Relevant non-CO₂ mechanisms and data limitations",
    "Selected climate lever and causal chain",
    "Safety, airworthiness, security and mission gates",
    "Counterfactual and material confounding variables",
    "Absolute and intensity indicators",
    "Potential trade-off, rebound or burden shift",
    "Precise claim that the evidence would support",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 2 · APPLIED LAB</p>
      <h1>Air Power Climate Decision Lab</h1>
      <p className="lead">
        Test one climate measure against an A400M or Eurofighter mission without
        weakening mandatory operational requirements or overstating the
        evidence.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Lever:</b> revised A400M flight-planning and descent profile for a
          defined training mission class. <b>Evidence:</b> matched missions,
          payload, weather, route, reserves and fuel. <b>Calculation:</b>{" "}
          verified fuel difference × 3.16 for direct CO₂. <b>Limits:</b>{" "}
          lifecycle and non-CO₂ effects assessed separately; no claim of a
          zero-emission or climate-neutral mission.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`climate-lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) =>
                localStorage.setItem(`climate-lab-${i}`, e.target.value)
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

const courseModules = [
  ["01", "Introduction and overview", "Available now"],
  ["02", "Climate change", "Available now"],
  ["03", "Noise disturbance", "Available now"],
  ["04", "Local air quality", "Available now"],
  ["05", "Other local environmental challenges", "Available now"],
  ["06", "Environmental and sustainability management", "Available now"],
  ["07", "Communication", "Available now"],
];

function CourseCover({
  done,
  done2,
  done3,
  done4,
  done5,
  done6,
  done7,
  onStart,
  onStart2,
  onStart3,
  onStart4,
  onStart5,
  onStart6,
  onStart7,
}: {
  done: number[];
  done2: number[];
  done3: number[];
  done4: number[];
  done5: number[];
  done6: number[];
  done7: number[];
  onStart: () => void;
  onStart2: () => void;
  onStart3: () => void;
  onStart4: () => void;
  onStart5: () => void;
  onStart6: () => void;
  onStart7: () => void;
}) {
  return (
    <main className="course-cover">
      <section className="cover-hero">
        <div className="cover-copy">
          <p className="eyebrow">DIGITAL LEARNING COURSE</p>
          <h1>
            Aviation
            <br />
            <em>&amp;</em> Sustainability
          </h1>
          <p className="cover-lead">
            Understand aviation as a complete system—and learn to evaluate
            climate, noise, air quality and local environmental challenges with
            evidence, lifecycle thinking and no greenwashing.
          </p>
          <div className="cover-actions">
            <button className="cover-primary" onClick={onStart}>
              {done.length ? "Continue Module 1" : "Start Module 1"}{" "}
              <span>→</span>
            </button>
            <a href="#course-route">Explore the course</a>
          </div>
          <dl className="course-facts">
            <div>
              <dt>7</dt>
              <dd>modules</dd>
            </div>
            <div>
              <dt>Applied</dt>
              <dd>activities</dd>
            </div>
            <div>
              <dt>Evidence-led</dt>
              <dd>approach</dd>
            </div>
          </dl>
        </div>
        <figure className="cover-art">
          <img
            src="/course/a400m-hero.png"
            alt="Airbus A400M at an Air Power operational base"
          />
          <figcaption>
            <span>THE AIR POWER SYSTEM VIEW</span>
            <p>
              From A400M operations and maintenance to infrastructure, energy,
              material support and surrounding communities.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="cover-intro">
        <div>
          <p className="eyebrow">WHY THIS COURSE</p>
          <h2>Move beyond simple labels</h2>
        </div>
        <p>
          Aviation provides connectivity and essential services while creating
          environmental pressures across its lifecycle. This course gives
          learners the frameworks to recognise those pressures, understand
          interdependencies, interpret performance data and communicate progress
          precisely.
        </p>
      </section>

      <section
        className="learning-pillars"
        aria-label="Course learning outcomes"
      >
        <article>
          <span>01</span>
          <h3>See the whole system</h3>
          <p>
            Connect aircraft, operations, airports, maintenance, supply chains
            and communities.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Evaluate the evidence</h3>
          <p>
            Distinguish absolute impact from intensity, targets from results and
            claims from proof.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Navigate trade-offs</h3>
          <p>
            Identify interdependencies, lifecycle burden shifts and the limits
            of a single metric.
          </p>
        </article>
      </section>

      <section className="course-route" id="course-route">
        <div className="route-heading">
          <div>
            <p className="eyebrow">YOUR LEARNING ROUTE</p>
            <h2>Seven modules. One connected view.</h2>
          </div>
          <p>
            Each module combines grounded theory, aviation examples, checks for
            understanding and an applied activity.
          </p>
        </div>
        <div className="module-grid">
          {courseModules.map((m, i) => (
            <article key={m[0]} className="available">
              <span>{m[0]}</span>
              <div>
                <small>
                  {i === 0 && done.length
                    ? "In progress"
                    : i === 1 && done2.length
                      ? "In progress"
                      : i === 2 && done3.length
                        ? "In progress"
                        : i === 3 && done4.length
                          ? "In progress"
                          : i === 4 && done5.length
                            ? "In progress"
                            : i === 5 && done6.length
                              ? "In progress"
                              : i === 6 && done7.length
                                ? "In progress"
                                : m[2]}
                </small>
                <h3>{m[1]}</h3>
                {i === 0 && (
                  <p>
                    System overview · environmental performance · SDGs · legal
                    framework
                  </p>
                )}
                {i === 1 && (
                  <p>
                    Climate science · CO₂ and non-CO₂ · four pillars ·
                    operations · CORSIA
                  </p>
                )}
                {i === 2 && (
                  <p>
                    Sound and response · metrics · exposure · Balanced Approach
                    · trade-offs
                  </p>
                )}
                {i === 3 && (
                  <p>
                    Pollutants · LTO · airshed sources · exposure · controls ·
                    charges
                  </p>
                )}
                {i === 4 && (
                  <p>
                    Water · waste · biodiversity · energy · environmental risk ·
                    end-of-life
                  </p>
                )}
                {i === 5 && (
                  <p>
                    EMS · aspects · compliance · objectives · audits · reporting
                  </p>
                )}
                {i === 6 && (
                  <p>
                    Stakeholders · claims · greenwashing · engagement · incident
                    communication
                  </p>
                )}
              </div>
              <button
                onClick={
                  i === 0
                    ? onStart
                    : i === 1
                      ? onStart2
                      : i === 2
                        ? onStart3
                        : i === 3
                          ? onStart4
                          : i === 4
                            ? onStart5
                            : i === 5
                              ? onStart6
                              : onStart7
                }
                aria-label={`Open Module ${i + 1}`}
              >
                →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="cover-cta">
        <div>
          <p className="eyebrow">BEGIN WITH THE FOUNDATIONS</p>
          <h2>Module 1 · Introduction and overview</h2>
          <p>
            Build the shared language and systems perspective needed for every
            module that follows.
          </p>
        </div>
        <button className="cover-primary" onClick={onStart}>
          {done.length ? "Continue learning" : "Begin the course"}{" "}
          <span>→</span>
        </button>
      </section>
    </main>
  );
}

function Lesson({
  module = 1,
  n,
  title,
  lead,
  children,
}: {
  module?: number;
  n: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <article className="lesson">
      <p className="eyebrow">
        MODULE {module} · LESSON {n}
      </p>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <div className="objectives">
        <b>After this lesson, you can:</b>
        <span>explain the core concepts</span>
        <span>identify misleading simplifications</span>
        <span>apply the framework to an aviation decision</span>
      </div>
      <div className="prose">{children}</div>
    </article>
  );
}
function VisualFigure({
  src,
  alt,
  label,
  caption,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className="learning-visual">
      <div className="visual-frame">
        <img src={src} alt={alt} />
        <span>{label}</span>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
function Sources({ items }: { items: string[] }) {
  return (
    <details className="sources">
      <summary>Sources used in this lesson</summary>
      <ul>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <p>
        The lesson synthesises and paraphrases these sources; it does not
        reproduce them.
      </p>
    </details>
  );
}
function Lab() {
  const fields = [
    "Activity or decision being assessed",
    "Service delivered and stakeholders",
    "Environmental aspects (inputs and outputs)",
    "Potential impacts and scale: global, regional or local",
    "Lifecycle stages included and excluded",
    "Actors who control or influence the result",
    "Two performance indicators: one absolute and one intensity",
    "One potential interdependency or burden shift",
    "Evidence required before making a claim",
  ];
  return (
    <section className="lesson">
      <p className="eyebrow">MODULE 1 · APPLIED LAB</p>
      <h1>Aviation Sustainability Impact Map</h1>
      <p className="lead">
        Apply the complete module to one real aviation activity. Your entries
        remain on this device.
      </p>
      <Callout title="Worked example">
        <p>
          <b>Decision:</b> replace conventional ground support equipment with
          electric units. <b>Boundary:</b> equipment manufacture, battery,
          electricity, operation and end of life. <b>Potential benefit:</b>{" "}
          lower local tailpipe emissions. <b>Trade-off:</b> upstream electricity
          and battery impacts. <b>Evidence:</b> duty cycle, energy use, grid
          factor, maintenance, battery life and avoided fuel.
        </p>
      </Callout>
      <div className="lab">
        {fields.map((f, i) => (
          <label key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <b>{f}</b>
            <textarea
              rows={3}
              placeholder="Write a specific, evidence-based response…"
              defaultValue={
                typeof window !== "undefined"
                  ? localStorage.getItem(`lab-${i}`) || ""
                  : ""
              }
              onBlur={(e) => localStorage.setItem(`lab-${i}`, e.target.value)}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
