import type { LocalText } from "./course-data-bilingual";

export type DiagramKind = "flow" | "cycle" | "balance" | "timeline" | "matrix";

export type MasterclassChapter = {
  title: LocalText;
  kicker: LocalText;
  paragraphs: LocalText[];
  keyPoints: LocalText[];
  prompt: LocalText;
};

export type MasterclassSlide = {
  eyebrow: LocalText;
  title: LocalText;
  body: LocalText[];
  diagram?: { kind: DiagramKind; nodes: LocalText[] };
  takeaways?: LocalText[];
  source?: { label: string; url: string };
};

export type ModuleMasterclass = {
  image: string;
  imageAlt: LocalText;
  chapters: MasterclassChapter[];
  slides: MasterclassSlide[];
};

type Profile = {
  name: LocalText;
  image: string;
  imageAlt: LocalText;
  system: LocalText;
  problem: LocalText;
  mechanisms: LocalText[];
  evidence: LocalText;
  metric: LocalText;
  uncertainty: LocalText;
  tradeoff: LocalText;
  intervention: LocalText;
  verification: LocalText;
  caseTitle: LocalText;
  caseFacts: LocalText[];
  caseLesson: LocalText;
  source: { label: string; url: string };
};

const t = (es: string, en: string): LocalText => ({ es, en });

const profiles: Profile[] = [
  {
    name: t("Sostenibilidad en servicio", "In-service sustainability"),
    image: "/course/unique/module1-a400m-systems-team.png",
    imageAlt: t("Equipo técnico revisando el sistema de sostenibilidad en servicio", "Technical team reviewing the in-service sustainability system"),
    system: t("la capacidad de misión, la aeronave, la base, la cadena de suministro, el mantenimiento y las personas que toman decisiones", "mission capability, aircraft, base, supply chain, maintenance and the people making decisions"),
    problem: t("optimizar un indicador ambiental aislado puede desplazar carga hacia seguridad, disponibilidad, coste, proveedores u otra etapa del ciclo de vida", "optimising one environmental indicator can shift burdens to safety, availability, cost, suppliers or another lifecycle stage"),
    mechanisms: [t("demanda operativa y perfil de misión", "operational demand and mission profile"), t("configuración, fiabilidad y mantenibilidad", "configuration, reliability and maintainability"), t("energía, materiales y logística", "energy, materials and logistics"), t("gobernanza, autoridad y aprendizaje", "governance, authority and learning")],
    evidence: t("una línea base por familia de misión, configuración y emplazamiento, junto con registros de consumo, disponibilidad, incidencias y cambios", "a baseline by mission family, configuration and location, paired with consumption, availability, incident and change records"),
    metric: t("impacto por resultado de misión autorizado, acompañado del resultado absoluto de flota y de una medida de disponibilidad", "impact per authorised mission outcome, accompanied by the absolute fleet result and an availability measure"),
    uncertainty: t("el perímetro organizativo, los datos de proveedores, las operaciones no representativas y la atribución entre misión y entrenamiento", "organisational boundary, supplier data, non-representative operations and allocation between mission and training"),
    tradeoff: t("reducir recursos sin degradar aeronavegabilidad, preparación, resiliencia ni condiciones de trabajo", "reducing resources without degrading airworthiness, readiness, resilience or working conditions"),
    intervention: t("crear un cuadro de mando integrado y puertas de decisión que obliguen a declarar función, perímetro, evidencia, riesgos y responsable", "creating an integrated dashboard and decision gates that require function, boundary, evidence, risks and owner to be declared"),
    verification: t("comparar poblaciones equivalentes antes y después, revisar efectos desplazados y documentar condiciones de validez", "comparing equivalent populations before and after, reviewing displaced effects and documenting validity conditions"),
    caseTitle: t("El European Aviation Environmental Report como cuadro sistémico", "The European Aviation Environmental Report as a systems dashboard"),
    caseFacts: [t("EASA reúne clima, ruido y calidad del aire en un mismo marco de desempeño europeo.", "EASA brings climate, noise and local air quality into one European performance framework."), t("El informe separa tendencias observadas, escenarios y medidas, evitando tratar una proyección como un resultado logrado.", "The report separates observed trends, scenarios and measures, avoiding treatment of a projection as an achieved result."), t("Su alcance es aviación civil europea; transferirlo a Air Power exige recalificar función, datos y autoridad.", "Its scope is European civil aviation; transfer to Air Power requires re-qualifying function, data and authority.")],
    caseLesson: t("Un cuadro de mando útil no produce una nota verde única: conserva varios resultados y muestra dónde una mejora crea tensión.", "A useful dashboard does not produce a single green score: it preserves multiple outcomes and reveals where an improvement creates tension."),
    source: { label: "EASA · European Aviation Environmental Report 2025", url: "https://www.easa.europa.eu/en/domains/environment/eaer" },
  },
  {
    name: t("Percepción e impacto", "Perception and impact"),
    image: "/course/unique/module8-eurofighter-decision-audit.png",
    imageAlt: t("Equipo contrastando evidencia y percepción pública", "Team contrasting evidence and public perception"),
    system: t("la experiencia de comunidades, personal, operadores y autoridades, más la medición física de emisiones, ruido y actividad", "the experience of communities, staff, operators and authorities, together with physical measurement of emissions, noise and activity"),
    problem: t("percepción y medida describen dimensiones distintas: un promedio acústico correcto puede ocultar eventos molestos y un mensaje tranquilizador puede reducir confianza", "perception and measurement describe different dimensions: a correct noise average can hide disturbing events and a reassuring message can reduce trust"),
    mechanisms: [t("visibilidad, frecuencia y control percibido", "visibility, frequency and perceived control"), t("distribución desigual de beneficios y cargas", "unequal distribution of benefits and burdens"), t("confianza en la fuente y transparencia", "trust in the source and transparency"), t("memoria de incidentes y expectativas", "incident memory and expectations")],
    evidence: t("combinar series instrumentales, geografía de exposición, quejas clasificadas, entrevistas y registro de compromisos", "combining instrumental series, exposure geography, classified complaints, interviews and a commitment log"),
    metric: t("exposición y número de eventos por población o función, junto con confianza, respuesta y cumplimiento de compromisos", "exposure and number of events by population or function, paired with trust, response and commitment fulfilment"),
    uncertainty: t("sesgo de selección, cambios de sensibilidad, estacionalidad, efecto de campañas y diferencias entre exposición calculada y vivida", "selection bias, sensitivity changes, seasonality, campaign effects and differences between calculated and experienced exposure"),
    tradeoff: t("concentrar rutas y proteger a más población puede aumentar la carga repetida sobre un grupo reducido", "concentrating routes and protecting more people may increase repeated burden on a smaller group"),
    intervention: t("integrar participación temprana, mapas de distribución, lenguaje calibrado y un registro público de decisiones y límites", "integrating early engagement, distribution maps, calibrated language and a public record of decisions and limits"),
    verification: t("comprobar simultáneamente cambio físico, distribución, respuesta percibida y cumplimiento del proceso acordado", "checking physical change, distribution, perceived response and fulfilment of the agreed process at the same time"),
    caseTitle: t("Participación comunitaria en cambios de navegación PBN", "Community engagement in PBN navigation changes"),
    caseFacts: [t("La guía de ICAO analiza por qué una ruta más precisa puede concentrar eventos sobre comunidades concretas.", "ICAO guidance examines why a more precise route can concentrate events over particular communities."), t("Propone involucrar a los afectados antes de fijar la solución, no únicamente comunicar después.", "It proposes engaging affected parties before fixing the solution, not merely communicating afterwards."), t("El caso muestra que la legitimidad depende tanto de la distribución y el proceso como del promedio técnico.", "The case shows that legitimacy depends on distribution and process as much as on the technical average.")],
    caseLesson: t("La percepción no se corrige con más relaciones públicas; se gestiona con datos comprensibles, opciones explícitas y trazabilidad de compromisos.", "Perception is not corrected with more public relations; it is managed through intelligible data, explicit options and traceable commitments."),
    source: { label: "ICAO · Community Engagement for PBN", url: "https://www.icao.int/sites/default/files/environmental-protection/Documents/Community-Engagement-for-PBN.pdf" },
  },
  {
    name: t("Huella ambiental y ACV", "Environmental footprint and LCA"),
    image: "/course/lifecycle-visual.png",
    imageAlt: t("Diagrama técnico de ciclo de vida aeronáutico", "Technical aviation lifecycle diagram"),
    system: t("materiales, fabricación, transporte, operación, mantenimiento, sustituciones y fin de vida conectados a una función definida", "materials, manufacturing, transport, operation, maintenance, replacements and end of life connected to a defined function"),
    problem: t("una huella sin unidad funcional, perímetro y reglas de asignación puede parecer exacta y ser inútil para decidir", "a footprint without a functional unit, boundary and allocation rules can look exact while being useless for decisions"),
    mechanisms: [t("flujos de energía y materiales", "energy and material flows"), t("rendimiento de procesos y desperdicio", "process yield and waste"), t("reposición y vida útil", "replacement and service life"), t("asignación, reciclaje y escenarios", "allocation, recycling and scenarios")],
    evidence: t("inventario trazable con fuente, año, geografía, tecnología, calidad, exclusiones y tratamiento de datos ausentes", "a traceable inventory with source, year, geography, technology, quality, exclusions and treatment of missing data"),
    metric: t("varios indicadores por unidad funcional, con contribución por etapa y resultado absoluto para el volumen real de actividad", "multiple indicators per functional unit, with contribution by stage and an absolute result for actual activity volume"),
    uncertainty: t("datos secundarios, vida futura, mezcla eléctrica, tasa de reciclaje, asignación de coproductos y comportamiento en fin de vida", "secondary data, future life, electricity mix, recycling rate, co-product allocation and end-of-life behaviour"),
    tradeoff: t("un material ligero puede ahorrar combustible y a la vez aumentar carga de fabricación, toxicidad o dificultad de reciclaje", "a light material may save fuel while increasing manufacturing burden, toxicity or recycling difficulty"),
    intervention: t("empezar por una pregunta de decisión, modelar alternativas coherentes y concentrar mejora de datos en los hotspots que pueden cambiar la elección", "starting with a decision question, modelling coherent alternatives and focusing data improvement on hotspots that can change the choice"),
    verification: t("realizar sensibilidad y escenarios, comprobar balance de masa y energía y someter supuestos críticos a revisión independiente", "performing sensitivity and scenarios, checking mass and energy balance and subjecting critical assumptions to independent review"),
    caseTitle: t("La arquitectura metodológica ISO 14040/14044", "The ISO 14040/14044 methodological architecture"),
    caseFacts: [t("El método separa objetivo y alcance, inventario, evaluación de impactos e interpretación.", "The method separates goal and scope, inventory, impact assessment and interpretation."), t("La revisión no se deja para el final: cada fase puede obligar a redefinir datos y supuestos anteriores.", "Review is not left to the end: each phase can force earlier data and assumptions to be redefined."), t("Una comparación pública exige cautelas adicionales porque puede orientar decisiones fuera del contexto original.", "A public comparison requires additional safeguards because it may steer decisions outside the original context.")],
    caseLesson: t("El ACV no es una calculadora de carbono; es un proceso iterativo para mantener coherencia entre pregunta, modelo y conclusión.", "LCA is not a carbon calculator; it is an iterative process that keeps question, model and conclusion coherent."),
    source: { label: "ISO · Life cycle assessment principles", url: "https://www.iso.org/standard/37456.html" },
  },
  {
    name: t("Aviación y cambio climático", "Aviation and climate change"),
    image: "/course/a400m-climate-system.png",
    imageAlt: t("Sistema climático y operación de una aeronave de transporte", "Climate system and transport aircraft operation"),
    system: t("CO₂ acumulativo, NOx, vapor de agua, partículas, estelas y nubosidad inducida, todos dependientes de altitud, tiempo y meteorología", "cumulative CO₂, NOx, water vapour, particles, contrails and induced cloudiness, all dependent on altitude, time and meteorology"),
    problem: t("tratar el combustible como sustituto de todo el impacto climático ignora mecanismos no CO₂ con escalas temporales y certidumbre diferentes", "treating fuel as a proxy for all climate impact ignores non-CO₂ mechanisms with different timescales and certainty"),
    mechanisms: [t("forzamiento acumulativo del CO₂", "cumulative CO₂ forcing"), t("química atmosférica asociada a NOx", "NOx-related atmospheric chemistry"), t("formación de estelas persistentes", "persistent contrail formation"), t("carbono del ciclo de vida del combustible", "fuel lifecycle carbon")],
    evidence: t("combustible y trayectoria por vuelo, tipo y estado de motor, meteorología, propiedades del combustible y supuestos del modelo climático", "fuel and trajectory by flight, engine type and state, weather, fuel properties and climate-model assumptions"),
    metric: t("CO₂ de combustión y de ciclo de vida por separado, más una métrica no CO₂ elegida conforme al horizonte y a la decisión", "combustion and lifecycle CO₂ separately, plus a non-CO₂ metric selected for the time horizon and decision"),
    uncertainty: t("respuesta de la atmósfera, pronóstico de regiones formadoras de estelas, equivalencias entre efectos y atribución de SAF", "atmospheric response, prediction of contrail-forming regions, equivalence between effects and SAF attribution"),
    tradeoff: t("desviar una trayectoria puede evitar una estela pero consumir más combustible o alterar capacidad, ruido y carga de trabajo", "diverting a trajectory may avoid a contrail but burn more fuel or alter capacity, noise and workload"),
    intervention: t("aplicar una jerarquía: evitar demanda innecesaria, mejorar eficiencia, reducir carbono del combustible y ensayar mitigación no CO₂ con límites", "applying a hierarchy: avoid unnecessary demand, improve efficiency, reduce fuel carbon and trial bounded non-CO₂ mitigation"),
    verification: t("reportar CO₂ y no CO₂ sin sumarlos de forma opaca, probar sensibilidad a horizonte temporal y vigilar penalización de combustible", "reporting CO₂ and non-CO₂ without opaque aggregation, testing time-horizon sensitivity and monitoring fuel penalty"),
    caseTitle: t("El marco europeo de seguimiento de efectos no CO₂", "The European non-CO₂ monitoring framework"),
    caseFacts: [t("Desde 2025 existe un marco europeo de monitorización, notificación y verificación de emisiones no CO₂.", "A European monitoring, reporting and verification framework for non-CO₂ emissions has operated since 2025."), t("Su finalidad incluye generar datos que mejoren conocimiento científico, no declarar resuelto el problema.", "Its purpose includes generating data to improve scientific knowledge, not declaring the problem solved."), t("EASA distingue explícitamente entre CO₂ y otros impactos atmosféricos.", "EASA explicitly distinguishes CO₂ from other atmospheric impacts.")],
    caseLesson: t("Cuando la ciencia conserva incertidumbre, la respuesta profesional es mejorar medición y usar decisiones reversibles, no esconder el efecto ni presentar una cifra única.", "Where science retains uncertainty, the professional response is better measurement and reversible decisions, not hiding the effect or presenting one number."),
    source: { label: "EASA · Aviation environmental impacts", url: "https://www.easa.europa.eu/en/domains/environment/eaer/aviation-environmental-impacts" },
  },
  {
    name: t("Energía y reducción de CO₂", "Energy and CO₂ reduction"),
    image: "/course/unique/module2-a400m-flight-efficiency.png",
    imageAlt: t("Análisis técnico de eficiencia de una aeronave A400M", "Technical efficiency analysis of an A400M aircraft"),
    system: t("aerodinámica, propulsión, masa, configuración, planificación, infraestructura energética y capacidad operacional", "aerodynamics, propulsion, mass, configuration, planning, energy infrastructure and operational capability"),
    problem: t("un porcentaje de ahorro obtenido en una salida no demuestra una reducción persistente de flota ni mantiene necesariamente el mismo resultado de misión", "a saving percentage obtained on one sortie does not demonstrate a persistent fleet reduction or necessarily preserve the same mission outcome"),
    mechanisms: [t("resistencia y masa", "drag and mass"), t("eficiencia propulsiva y deterioro", "propulsive efficiency and deterioration"), t("trayectoria, velocidad y esperas", "trajectory, speed and holding"), t("energía de base y equipos de tierra", "base energy and ground equipment")],
    evidence: t("misiones comparables normalizadas por carga, meteorología, configuración y resultado, con combustible medido y registro de excepciones", "comparable missions normalised for payload, weather, configuration and outcome, with measured fuel and an exception log"),
    metric: t("combustible y CO₂ por unidad de capacidad entregada, tasa de adopción, disponibilidad y ahorro absoluto anual", "fuel and CO₂ per unit of delivered capability, adoption rate, availability and absolute annual saving"),
    uncertainty: t("variabilidad meteorológica, sesgo de selección de misiones, degradación de motor, disponibilidad de datos y rebote de actividad", "weather variability, mission-selection bias, engine deterioration, data availability and activity rebound"),
    tradeoff: t("ahorrar combustible puede aumentar tiempo, exposición acústica, desgaste, complejidad de planificación o riesgo de contingencia", "saving fuel can increase time, noise exposure, wear, planning complexity or contingency risk"),
    intervention: t("priorizar medidas maduras y reversibles, probarlas con protocolo y escalar solo cuando el intervalo de resultados supera el umbral", "prioritising mature reversible measures, testing them with a protocol and scaling only when the result interval clears the threshold"),
    verification: t("usar grupo o periodo de control, normalizar covariables y vigilar tanto indicadores adelantados como resultados de misión", "using a control group or period, normalising covariates and monitoring both leading indicators and mission outcomes"),
    caseTitle: t("Catálogo NLR de medidas operativas", "NLR catalogue of operational measures"),
    caseFacts: [t("El informe compila medidas por fase de operación y distingue potencial teórico de aplicabilidad.", "The report compiles measures by operational phase and distinguishes theoretical potential from applicability."), t("Cada medida depende de restricciones de seguridad, capacidad, meteorología, aeronave y organización.", "Each measure depends on safety, capacity, weather, aircraft and organisational constraints."), t("No se pueden sumar ahorros de forma directa porque existen interacciones y bases diferentes.", "Savings cannot be added directly because interactions and baselines differ.")],
    caseLesson: t("Un catálogo genera hipótesis; el beneficio defendible aparece después de seleccionar, autorizar, ensayar, normalizar y verificar.", "A catalogue generates hypotheses; a defensible benefit emerges after selection, authorisation, trial, normalisation and verification."),
    source: { label: "NLR · Climate-neutral aviation research", url: "https://www.nlr.org/focus-areas/programmes/climate-neutral-aviation/" },
  },
  {
    name: t("Calidad del aire local", "Local air quality"),
    image: "/course/laq-a400m.png",
    imageAlt: t("Mapa técnico de fuentes de emisiones en plataforma", "Technical map of apron emission sources"),
    system: t("motores principales y auxiliares, equipos de tierra, vehículos, calefacción, pruebas, evaporación y fondo regional", "main and auxiliary engines, ground equipment, vehicles, heating, testing, evaporation and the regional background"),
    problem: t("un inventario de emisiones no es una concentración respirada y una estación mal situada puede atribuir a la base contaminación transportada desde fuera", "an emissions inventory is not an inhaled concentration and a poorly located station may attribute transported pollution to the base"),
    mechanisms: [t("emisión por fuente y modo", "emission by source and mode"), t("dispersión meteorológica", "meteorological dispersion"), t("química secundaria", "secondary chemistry"), t("exposición de trabajadores y receptores", "worker and receptor exposure")],
    evidence: t("actividad por fuente, factores de emisión aplicables, combustible, tiempos de operación, meteorología, fondo y puntos de exposición", "activity by source, applicable emission factors, fuel, operating times, weather, background and exposure points"),
    metric: t("masa emitida por contaminante, concentración temporal y espacial, excedencias, población o tareas expuestas y contribución por fuente", "emitted mass by pollutant, temporal and spatial concentration, exceedances, exposed population or tasks and source contribution"),
    uncertainty: t("factores de emisión, actividad no registrada, representatividad del monitor, viento, química y separación del fondo", "emission factors, unrecorded activity, monitor representativeness, wind, chemistry and background separation"),
    tradeoff: t("electrificar equipos reduce emisiones locales pero puede transferir impacto a electricidad, baterías, picos de demanda y resiliencia", "electrifying equipment reduces local emissions but may transfer impact to electricity, batteries, peak demand and resilience"),
    intervention: t("jerarquizar eliminación, sustitución, control operativo y protección, empezando por fuentes y microentornos de mayor contribución", "using a hierarchy of elimination, substitution, operational control and protection, starting with the highest-contributing sources and microenvironments"),
    verification: t("combinar inventario y medición, usar ubicaciones de fondo y sotavento y comprobar condiciones meteorológicas antes de atribuir cambios", "combining inventory and measurement, using background and downwind locations and checking weather before attributing changes"),
    caseTitle: t("El inventario europeo de ruido y emisiones aeroportuarias", "European airport noise and emissions evidence"),
    caseFacts: [t("EAER integra tendencias de NOx, partículas y actividad con políticas de calidad del aire.", "EAER integrates NOx, particulate and activity trends with air-quality policy."), t("El crecimiento de NOx puede diferir del de CO₂; no todos los contaminantes siguen el combustible de la misma forma.", "NOx growth can differ from CO₂ growth; not all pollutants track fuel in the same way."), t("La evidencia europea es contexto; una base necesita inventario y meteorología propios.", "European evidence is context; a base needs its own inventory and weather data.")],
    caseLesson: t("Gestionar aire local exige conectar fuente, dispersión y receptor; actuar solo sobre el total de combustible puede omitir el hotspot real.", "Managing local air requires connecting source, dispersion and receptor; acting only on total fuel can miss the real hotspot."),
    source: { label: "EASA · European Aviation Environmental Report 2025", url: "https://www.easa.europa.eu/en/domains/environment/eaer" },
  },
  {
    name: t("Ruido aeronáutico", "Aircraft noise"),
    image: "/course/noise-a400m-balanced.png",
    imageAlt: t("Diagrama del enfoque equilibrado de gestión del ruido", "Diagram of the balanced approach to noise management"),
    system: t("fuente sonora, configuración y procedimiento, propagación, receptor, distribución temporal y respuesta comunitaria", "sound source, configuration and procedure, propagation, receptor, temporal distribution and community response"),
    problem: t("reducir una media anual puede no reducir picos, eventos nocturnos ni desigualdad de exposición", "reducing an annual average may not reduce peaks, night events or exposure inequality"),
    mechanisms: [t("potencia, velocidad y configuración", "power, speed and configuration"), t("trayectoria y número de eventos", "trajectory and number of events"), t("meteorología y terreno", "weather and terrain"), t("hora, expectativa y sensibilidad", "time, expectation and sensitivity")],
    evidence: t("monitores calibrados, trazas de vuelo, configuración, meteorología, calendario de eventos, mapa de receptores y registro de quejas", "calibrated monitors, flight tracks, configuration, weather, event calendar, receptor map and complaint log"),
    metric: t("métrica energética de periodo más indicadores de evento, noche, frecuencia, distribución y población afectada", "a period energy metric plus event, night, frequency, distribution and affected-population indicators"),
    uncertainty: t("clasificación de eventos, ruido de fondo, propagación, comportamiento futuro y relación entre exposición y molestia", "event classification, background noise, propagation, future behaviour and the exposure-annoyance relationship"),
    tradeoff: t("una ruta que reduce población total expuesta puede concentrar tráfico; un procedimiento más silencioso puede consumir más", "a route reducing total exposed population may concentrate traffic; a quieter procedure may consume more"),
    intervention: t("evaluar reducción en fuente, planificación territorial, procedimientos y restricciones en ese orden contextual, con participación", "evaluating source reduction, land-use planning, procedures and restrictions in a contextual sequence, with engagement"),
    verification: t("medir antes y después con meteorología comparable y comprobar medias, eventos, distribución, quejas y consecuencias operativas", "measuring before and after in comparable weather and checking averages, events, distribution, complaints and operational consequences"),
    caseTitle: t("El Enfoque Equilibrado de ICAO", "ICAO's Balanced Approach"),
    caseFacts: [t("ICAO estructura la gestión en reducción en fuente, ordenación del suelo, procedimientos y restricciones operativas.", "ICAO structures management around source reduction, land-use planning, procedures and operating restrictions."), t("Las opciones se analizan para un problema acústico definido en un aeropuerto concreto.", "Options are analysed for a defined noise problem at a specific airport."), t("La combinación coste-eficaz evita convertir una única medida en respuesta universal.", "The cost-effective combination prevents a single measure becoming a universal answer.")],
    caseLesson: t("El ruido es un problema de sistema y distribución. La respuesta defendible conserva métricas físicas y experiencia de quienes reciben los eventos.", "Noise is a system and distribution problem. A defensible response preserves physical metrics and the experience of those receiving events."),
    source: { label: "ICAO · Guidance on Environmental Assessment", url: "https://www.icao.int/sites/default/files/2025-04/10031_en_0.pdf" },
  },
  {
    name: t("Agua y residuos", "Water and waste"),
    image: "/course/m5-water-waste.png",
    imageAlt: t("Flujos técnicos de agua y residuos de mantenimiento", "Technical water and maintenance waste flows"),
    system: t("captación, uso, contaminación, tratamiento y vertido de agua junto con prevención, segregación, valorización y eliminación de residuos", "water abstraction, use, contamination, treatment and discharge together with waste prevention, segregation, recovery and disposal"),
    problem: t("pesar residuos al final oculta dónde se generan, su peligrosidad y la pérdida de valor causada por mezclar corrientes", "weighing waste at the end hides where it arises, its hazard and the loss of value caused by mixing streams"),
    mechanisms: [t("lavado, limpieza y procesos húmedos", "washing, cleaning and wet processes"), t("derrames y aguas pluviales", "spills and stormwater"), t("consumibles, envases y piezas", "consumables, packaging and parts"), t("segregación, almacenamiento y contratistas", "segregation, storage and contractors")],
    evidence: t("balance hídrico por proceso, puntos de vertido, analíticas, masa por código de residuo, destino, documentos de traslado e incidentes", "a water balance by process, discharge points, analyses, mass by waste code, destination, transfer documents and incidents"),
    metric: t("agua por tarea, carga contaminante, residuos totales y peligrosos por orden, tasa de segregación y destino verificado", "water per task, pollutant load, total and hazardous waste per work order, segregation rate and verified destination"),
    uncertainty: t("medidores compartidos, densidades, residuos almacenados, clasificación incorrecta y trazabilidad más allá del primer gestor", "shared meters, densities, stored waste, incorrect classification and traceability beyond the first contractor"),
    tradeoff: t("reusar agua o disolventes reduce consumo, pero una calidad insuficiente puede comprometer proceso, corrosión, salud o aeronavegabilidad", "reusing water or solvents reduces consumption, but insufficient quality may compromise process, corrosion, health or airworthiness"),
    intervention: t("prevenir en origen, controlar compras y dosificación, segregar en el punto de generación y cerrar contratos con evidencia de destino", "preventing at source, controlling purchasing and dosing, segregating at the point of generation and contracting for destination evidence"),
    verification: t("conciliar compras, inventario, uso y residuos; inspeccionar áreas y revisar certificados, analíticas e incidencias por tendencia", "reconciling purchases, inventory, use and waste; inspecting areas and trending certificates, analyses and incidents"),
    caseTitle: t("Diagnóstico ambiental de organizaciones de mantenimiento", "Environmental diagnosis of maintenance organisations"),
    caseFacts: [t("El estudio MP Doma mapea prácticas de agua, residuos, energía, químicos y circularidad en mantenimiento y producción.", "The MP Doma study maps water, waste, energy, chemical and circularity practices in maintenance and production."), t("Distingue la existencia de prácticas de su madurez y extensión organizativa.", "It distinguishes the existence of practices from their maturity and organisational reach."), t("La variabilidad sectorial impide asumir que una buena práctica está implantada o produce el mismo resultado en todas partes.", "Sector variability prevents assuming that a good practice is implemented or delivers the same result everywhere.")],
    caseLesson: t("Un programa serio empieza por el mapa de procesos y sustancias, no por una campaña genérica de reciclaje.", "A serious programme starts with the process and substance map, not with a generic recycling campaign."),
    source: { label: "EASA · Environment and maintenance organisations", url: "https://www.easa.europa.eu/en/domains/environment" },
  },
  {
    name: t("Biodiversidad y fauna", "Biodiversity and wildlife"),
    image: "/course/unique/module7-a400m-base-operations.png",
    imageAlt: t("Análisis operacional de una base aérea", "Operational analysis of an air base"),
    system: t("hábitat, especies, movimientos de fauna, uso del suelo, agua, iluminación y operaciones aéreas y terrestres", "habitat, species, wildlife movement, land use, water, lighting and air and ground operations"),
    problem: t("proteger biodiversidad y reducir riesgo de impacto con fauna pueden entrar en tensión si una actuación crea hábitat atractivo junto al área operativa", "protecting biodiversity and reducing wildlife-strike risk can conflict if an action creates attractive habitat beside the operating area"),
    mechanisms: [t("atractores de alimento, agua y refugio", "food, water and shelter attractants"), t("movimientos estacionales y horarios", "seasonal and daily movements"), t("fragmentación, iluminación y ruido", "fragmentation, lighting and noise"), t("interacción entre hábitat y seguridad de vuelo", "interaction between habitat and flight safety")],
    evidence: t("inventario de hábitats, observaciones estandarizadas, eventos y casi eventos, restos identificados, uso del suelo y calendario operacional", "habitat inventory, standardised observations, events and near-events, identified remains, land use and operational calendar"),
    metric: t("riesgo por especie y zona, actividad de fauna, eventos normalizados por movimiento, estado de hábitat y efectividad del control", "risk by species and zone, wildlife activity, events normalised per movement, habitat condition and control effectiveness"),
    uncertainty: t("detectabilidad, identificación de especie, movilidad, cambio climático, obras próximas y respuesta adaptativa de la fauna", "detectability, species identification, mobility, climate change, nearby works and adaptive wildlife response"),
    tradeoff: t("eliminar vegetación indiscriminadamente puede degradar hábitat y favorecer especies de mayor riesgo; restaurar sin diseño puede atraer fauna", "indiscriminate vegetation removal can degrade habitat and favour higher-risk species; undesigned restoration can attract wildlife"),
    intervention: t("zonificar, eliminar atractores críticos, gestionar hábitat por especie objetivo, coordinar usos externos y usar disuasión como capa controlada", "zoning, removing critical attractants, managing habitat by target species, coordinating external land use and using deterrence as a controlled layer"),
    verification: t("medir tendencia por especie, hora y zona, evaluar consecuencias imprevistas y revisar el riesgo después de cada cambio de hábitat", "measuring trends by species, time and zone, evaluating unintended consequences and reviewing risk after every habitat change"),
    caseTitle: t("Gestión integrada del riesgo de fauna en aeródromos", "Integrated aerodrome wildlife-risk management"),
    caseFacts: [t("La práctica aeronáutica combina identificación de peligros, evaluación de riesgo, gestión de hábitat y respuesta operacional.", "Aviation practice combines hazard identification, risk assessment, habitat management and operational response."), t("El número bruto de aves no equivale al riesgo: importan especie, masa, comportamiento, ubicación y fase de vuelo.", "Raw bird count is not risk: species, mass, behaviour, location and flight phase matter."), t("La coordinación con vertederos, cultivos, humedales y municipios amplía el perímetro más allá de la valla.", "Coordination with landfill, agriculture, wetlands and municipalities expands the boundary beyond the fence.")],
    caseLesson: t("La biodiversidad se gobierna con conocimiento ecológico y seguridad operacional conjunta; no con objetivos independientes que compiten tarde.", "Biodiversity is governed with ecological knowledge and operational safety together, not with independent targets that compete late."),
    source: { label: "ICAO · Environment publications", url: "https://www.icao.int/environmental-protection/environment-publications" },
  },
  {
    name: t("Gestión ambiental en MRO y despliegues", "Environmental management in MRO and deployments"),
    image: "/course/unique/module7-a400m-base-operations.png",
    imageAlt: t("Operaciones de mantenimiento y apoyo en base", "Maintenance and support operations at a base"),
    system: t("tareas, sustancias, equipos, instalaciones, contratistas, emergencias y condiciones variables de base principal o despliegue", "tasks, substances, equipment, facilities, contractors, emergencies and variable home-base or deployed conditions"),
    problem: t("un sistema documental puede cumplir en papel y fallar en el punto de trabajo si aspectos, controles y responsabilidades no siguen a la tarea", "a documentary system may comply on paper and fail at the point of work if aspects, controls and responsibilities do not follow the task"),
    mechanisms: [t("aspectos ambientales de tarea", "task environmental aspects"), t("cumplimiento y control operacional", "compliance and operational control"), t("preparación y respuesta ante incidentes", "incident preparedness and response"), t("competencia, contratistas y cambio", "competence, contractors and change")],
    evidence: t("registro legal aplicable, mapa aspecto-tarea, inspecciones, consumos, residuos, incidentes, competencias, acciones y eficacia", "applicable legal register, aspect-to-task map, inspections, consumption, waste, incidents, competence, actions and effectiveness"),
    metric: t("controles críticos verificados, desviaciones por tarea, cierre eficaz de acciones, derrames, uso de sustancias y desempeño de contratistas", "verified critical controls, deviations by task, effective action closure, spills, substance use and contractor performance"),
    uncertainty: t("cambios rápidos, datos de destacamentos, infraestructura anfitriona, responsabilidades compartidas y emergencia real frente a simulacro", "rapid change, detachment data, host infrastructure, shared responsibilities and real emergency versus drill"),
    tradeoff: t("un control diseñado para la base principal puede reducir flexibilidad o ser inviable en despliegue; flexibilizarlo sin evaluación aumenta riesgo", "a control designed for the main base can reduce flexibility or be infeasible when deployed; relaxing it without assessment raises risk"),
    intervention: t("diseñar controles mínimos portátiles, paquetes de despliegue, criterios de aceptación del emplazamiento y escalado de desviaciones", "designing portable minimum controls, deployment packs, site-acceptance criteria and deviation escalation"),
    verification: t("observar tareas reales, ensayar emergencias, muestrear registros y comprobar que las acciones eliminan causa y no solo cierran plazos", "observing real tasks, exercising emergencies, sampling records and checking that actions remove causes rather than merely close deadlines"),
    caseTitle: t("ISO 14001 como ciclo de gestión", "ISO 14001 as a management cycle"),
    caseFacts: [t("El sistema conecta contexto, liderazgo, planificación, apoyo, operación, evaluación y mejora.", "The system connects context, leadership, planning, support, operation, evaluation and improvement."), t("La significancia de un aspecto no sustituye las obligaciones de cumplimiento ni el control del riesgo.", "Aspect significance does not replace compliance obligations or risk control."), t("La auditoría evalúa evidencia de funcionamiento y eficacia, no la cantidad de procedimientos.", "Audit evaluates evidence of operation and effectiveness, not the number of procedures.")],
    caseLesson: t("En MRO, el sistema debe poder seguir una orden de trabajo desde el requisito hasta la evidencia de control y el resultado observado.", "In MRO, the system must follow a work order from requirement to control evidence and observed result."),
    source: { label: "ISO · Environmental management systems", url: "https://www.iso.org/iso-14001-environmental-management.html" },
  },
  {
    name: t("Mantenimiento sostenible y eficiencia de flota", "Sustainable maintenance and fleet efficiency"),
    image: "/course/unique/module2-a400m-flight-efficiency.png",
    imageAlt: t("Equipo de mantenimiento analizando eficiencia de flota", "Maintenance team analysing fleet efficiency"),
    system: t("estado técnico, programa de mantenimiento, fiabilidad, repuestos, logística, configuración y forma en que la flota entrega disponibilidad", "technical condition, maintenance programme, reliability, spares, logistics, configuration and how the fleet delivers availability"),
    problem: t("reducir tareas o alargar intervalos puede ahorrar recursos, pero solo es sostenible si el riesgo, la degradación y los eventos no programados permanecen controlados", "reducing tasks or extending intervals may save resources, but is sustainable only if risk, deterioration and unscheduled events remain controlled"),
    mechanisms: [t("deterioro aerodinámico y propulsivo", "aerodynamic and propulsion deterioration"), t("diagnóstico y mantenimiento por condición", "diagnostics and condition-based maintenance"), t("reparación, canibalización y logística", "repair, cannibalisation and logistics"), t("fiabilidad, disponibilidad y uso", "reliability, availability and utilisation")],
    evidence: t("datos de salud y fallos por configuración, horas y ciclos, consumo normalizado, órdenes, desmontajes, no-fault-found, repuestos y demoras", "health and failure data by configuration, hours and cycles, normalised consumption, work orders, removals, no-fault-found, spares and delays"),
    metric: t("disponibilidad y fiabilidad junto con combustible normalizado, horas de trabajo, piezas, residuos, logística urgente y coste de ciclo de vida", "availability and reliability alongside normalised fuel, labour hours, parts, waste, urgent logistics and lifecycle cost"),
    uncertainty: t("censura de datos, flotas pequeñas, cambios de configuración, misiones diferentes, sensores y causalidad entre tarea y resultado", "data censoring, small fleets, configuration changes, different missions, sensors and causality between task and result"),
    tradeoff: t("una intervención frecuente puede conservar eficiencia pero consumir piezas y capacidad; una intervención tardía puede aumentar combustible y riesgo de indisponibilidad", "frequent intervention may preserve efficiency but consume parts and capacity; late intervention may increase fuel and unavailability risk"),
    intervention: t("usar umbrales por condición, pilotos A/B cuando proceda, revisión de tareas de bajo valor y un modelo conjunto de disponibilidad e impacto", "using condition thresholds, A/B pilots where appropriate, reviewing low-value tasks and a joint availability-impact model"),
    verification: t("separar correlación de causalidad, usar ventanas suficientes, controlar configuración y vigilar efectos adversos y mantenimiento inducido", "separating correlation from causality, using adequate windows, controlling configuration and monitoring adverse effects and induced maintenance"),
    caseTitle: t("Medidas operativas y técnicas como cartera, no suma", "Operational and technical measures as a portfolio, not a sum"),
    caseFacts: [t("El catálogo NLR muestra dependencias entre peso, condición, procedimiento, trayectoria y utilización.", "The NLR catalogue shows dependencies between weight, condition, procedure, trajectory and utilisation."), t("Algunas medidas se solapan; el potencial de cada una cambia al implantar otra.", "Some measures overlap; each measure's potential changes when another is implemented."), t("La implantación requiere datos, autoridad, formación y seguimiento, no solo cálculo técnico.", "Implementation requires data, authority, training and monitoring, not only technical calculation.")],
    caseLesson: t("La unidad de mejora es la cartera de flota: se priorizan intervenciones por beneficio adicional, evidencia y capacidad de ejecución.", "The improvement unit is the fleet portfolio: interventions are prioritised by incremental benefit, evidence and execution capacity."),
    source: { label: "NLR · Climate-neutral aviation research", url: "https://www.nlr.org/focus-areas/programmes/climate-neutral-aviation/" },
  },
  {
    name: t("MRO circular y transición tecnológica", "Circular MRO and technology transition"),
    image: "/course/unique/module5-a400m-circularity-workshop.png",
    imageAlt: t("Taller de circularidad y reparación aeronáutica", "Aviation circularity and repair workshop"),
    system: t("diseño, propiedad, mantenimiento, reparación, actualización, repuestos, obsolescencia y recuperación de valor", "design, ownership, maintenance, repair, upgrade, spares, obsolescence and value recovery"),
    problem: t("reciclar al final no compensa automáticamente vida corta, sobreconsumo de repuestos o una transición que desecha capacidad útil antes de tiempo", "recycling at the end does not automatically compensate for short life, excess spares consumption or a transition discarding useful capability too early"),
    mechanisms: [t("durabilidad y extensión de vida", "durability and life extension"), t("reparación, reutilización y remanufactura", "repair, reuse and remanufacture"), t("obsolescencia y transición", "obsolescence and transition"), t("recuperación de piezas y materiales", "parts and material recovery")],
    evidence: t("historial de pieza y configuración, vida consumida, criterios de reparación, ensayos, cadena de custodia, demanda futura y escenarios de transición", "part and configuration history, consumed life, repair criteria, tests, chain of custody, future demand and transition scenarios"),
    metric: t("función entregada por material virgen, tasa de reparación y reutilización, vida extendida, inventario evitado y carga de transición", "function delivered per virgin material, repair and reuse rate, extended life, avoided inventory and transition burden"),
    uncertainty: t("demanda futura, soporte del fabricante, hallazgos de inspección, certificación, valor residual y compatibilidad de tecnología", "future demand, manufacturer support, inspection findings, certification, residual value and technology compatibility"),
    tradeoff: t("extender vida evita fabricación pero puede mantener equipos menos eficientes o aumentar inspecciones; renovar mejora desempeño y crea carga incorporada", "extending life avoids manufacturing but may retain less efficient equipment or increase inspections; renewal improves performance and creates embodied burden"),
    intervention: t("comparar escenarios de mantener, actualizar, canibalizar, transferir y retirar con la misma función y un calendario explícito", "comparing keep, upgrade, cannibalise, transfer and retire scenarios with the same function and an explicit timeline"),
    verification: t("validar aeronavegabilidad, trazabilidad y desempeño después de reparación, y actualizar el caso cuando cambien demanda o tecnología", "validating airworthiness, traceability and post-repair performance, and updating the case when demand or technology changes"),
    caseTitle: t("PAMELA y el origen de Tarmac Aerosave", "PAMELA and the origins of Tarmac Aerosave"),
    caseFacts: [t("El proyecto PAMELA coordinado por Airbus desarrolló procesos de gestión avanzada del fin de vida de aeronaves.", "The Airbus-coordinated PAMELA project developed advanced aircraft end-of-life management processes."), t("La experiencia contribuyó a la creación de una actividad industrial de almacenamiento, mantenimiento y desmantelamiento.", "The experience helped create an industrial activity for storage, maintenance and dismantling."), t("El caso conecta diseño del proceso, seguridad, trazabilidad, reutilización de componentes y recuperación de materiales.", "The case connects process design, safety, traceability, component reuse and material recovery.")],
    caseLesson: t("La circularidad aeronáutica necesita un sistema industrial y documental; no se reduce a declarar un porcentaje reciclable.", "Aviation circularity needs an industrial and documentary system; it cannot be reduced to declaring a recyclable percentage."),
    source: { label: "Airbus · End-of-life: reusing, recycling, rethinking", url: "https://www.aircraft.airbus.com/en/newsroom/news/2022-11-end-of-life-reusing-recycling-rethinking" },
  },
  {
    name: t("Fin de vida y desmantelamiento", "End of life and decommissioning"),
    image: "/course/m5-endoflife.png",
    imageAlt: t("Secuencia técnica de retirada y desmantelamiento", "Technical retirement and dismantling sequence"),
    system: t("decisión de retirada, desmilitarización, descontaminación, documentación, desmontaje, piezas, materiales, residuos y emplazamiento", "retirement decision, demilitarisation, depollution, documentation, dismantling, parts, materials, waste and site"),
    problem: t("el valor residual y la recuperación material pueden entrar en conflicto con seguridad, información sensible, aeronavegabilidad y responsabilidad ambiental", "residual value and material recovery may conflict with safety, sensitive information, airworthiness and environmental liability"),
    mechanisms: [t("planificación temprana y preservación", "early planning and preservation"), t("descontaminación y sustancias peligrosas", "depollution and hazardous substances"), t("recuperación de componentes", "component recovery"), t("separación material y destino", "material separation and destination")],
    evidence: t("configuración y propiedad, sustancias, registros de mantenimiento, estado de piezas, autorizaciones, pesos, destinos, certificados y cierre del emplazamiento", "configuration and ownership, substances, maintenance records, part condition, approvals, weights, destinations, certificates and site closure"),
    metric: t("masa y valor recuperados por vía verificada, residuos peligrosos, incidentes, piezas con trazabilidad y pasivo remanente", "mass and value recovered by verified route, hazardous waste, incidents, traceable parts and remaining liability"),
    uncertainty: t("documentación histórica, composición de materiales, mercado, condición de piezas, contaminación oculta y capacidad del gestor", "historical documentation, material composition, markets, part condition, hidden contamination and contractor capability"),
    tradeoff: t("desmontar con más detalle puede mejorar recuperación pero aumentar exposición, coste y tiempo; preservar demasiado puede consumir suelo y mantenimiento", "more detailed dismantling may improve recovery while increasing exposure, cost and time; excessive preservation may consume land and maintenance"),
    intervention: t("establecer una puerta de retirada, plan de desmilitarización y descontaminación, jerarquía de destino y expediente de cierre", "establishing a retirement gate, demilitarisation and depollution plan, destination hierarchy and closure dossier"),
    verification: t("auditar masas y cadena de custodia, validar elegibilidad de piezas, inspeccionar el emplazamiento y conservar evidencia de destino final", "auditing mass and chain of custody, validating part eligibility, inspecting the site and retaining final-destination evidence"),
    caseTitle: t("Industrialización de lecciones PAMELA", "Industrialisation of PAMELA lessons"),
    caseFacts: [t("Airbus describe PAMELA como antecedente de procesos responsables de retirada.", "Airbus describes PAMELA as a precursor to responsible retirement processes."), t("Tarmac Aerosave convirtió el aprendizaje experimental en operaciones industriales.", "Tarmac Aerosave turned experimental learning into industrial operations."), t("El caso civil no autoriza extrapolar porcentajes a una flota militar con materiales, equipos y controles distintos.", "The civil case does not authorise extrapolating percentages to a military fleet with different materials, equipment and controls.")],
    caseLesson: t("El dato transferible es el proceso: caracterizar, asegurar, descontaminar, desmontar, verificar y cerrar; los rendimientos deben medirse para cada población.", "The transferable result is the process: characterise, secure, depollute, dismantle, verify and close; yields must be measured for each population."),
    source: { label: "Airbus · End-of-life: reusing, recycling, rethinking", url: "https://www.aircraft.airbus.com/en/newsroom/news/2022-11-end-of-life-reusing-recycling-rethinking" },
  },
  {
    name: t("Gestión de riesgos mayores", "Management of major risks"),
    image: "/course/unique/module8-eurofighter-decision-audit.png",
    imageAlt: t("Sala de decisión y análisis de riesgos", "Decision room and risk analysis"),
    system: t("peligro, barreras preventivas, evento central, mitigación, consecuencias ambientales, misión, personas y recuperación", "hazard, preventive barriers, top event, mitigation, environmental consequences, mission, people and recovery"),
    problem: t("la baja frecuencia puede generar complacencia, mientras la severidad, los efectos en cascada y la pérdida simultánea de barreras permanecen altos", "low frequency can create complacency while severity, cascading effects and simultaneous barrier loss remain high"),
    mechanisms: [t("pérdida de contención o control", "loss of containment or control"), t("fallo común y degradación de barreras", "common-cause failure and barrier degradation"), t("propagación y exposición", "propagation and exposure"), t("respuesta, continuidad y recuperación", "response, continuity and recovery")],
    evidence: t("escenarios, inventarios, mapas de sensibilidad, estado de barreras, inspecciones, simulacros, incidentes, cambios y recursos de respuesta", "scenarios, inventories, sensitivity maps, barrier state, inspections, drills, incidents, changes and response resources"),
    metric: t("riesgo por escenario y receptor, salud de barreras críticas, tiempo de detección y respuesta, capacidad de contención y riesgo residual", "risk by scenario and receptor, critical-barrier health, detection and response time, containment capacity and residual risk"),
    uncertainty: t("frecuencias escasas, dependencia entre barreras, severidad extrema, meteorología, contratistas y condiciones degradadas", "sparse frequencies, barrier dependency, extreme severity, weather, contractors and degraded conditions"),
    tradeoff: t("añadir redundancia puede aumentar complejidad y mantenimiento; simplificar puede crear puntos únicos de fallo", "adding redundancy may increase complexity and maintenance; simplifying may create single points of failure"),
    intervention: t("usar análisis bow-tie, estándares de desempeño de barrera, gestión del cambio, simulacros adversos y autoridad de parada", "using bow-tie analysis, barrier performance standards, management of change, adverse drills and stop authority"),
    verification: t("probar barreras de forma independiente y combinada, introducir fallos en ejercicios y cerrar las brechas por causa, no por documentación", "testing barriers independently and in combination, injecting failures into exercises and closing gaps by cause rather than paperwork"),
    caseTitle: t("Evaluación ambiental de proyectos aeroportuarios", "Environmental assessment of airport projects"),
    caseFacts: [t("La guía ICAO exige construir alternativas, línea base, impactos, mitigación y seguimiento.", "ICAO guidance requires alternatives, baseline, impacts, mitigation and monitoring."), t("Los efectos acumulativos y las interacciones impiden tratar cada peligro como expediente aislado.", "Cumulative effects and interactions prevent treating each hazard as an isolated file."), t("El seguimiento comprueba si la mitigación real coincide con la predicción y permite corregir.", "Monitoring checks whether real mitigation matches the prediction and allows correction.")],
    caseLesson: t("Un caso de riesgo mayor no termina al aprobar el diseño: necesita barreras observables, criterios de escalado y aprendizaje durante toda la operación.", "A major-risk case does not end at design approval: it needs observable barriers, escalation criteria and learning throughout operation."),
    source: { label: "ICAO · Guidance on Environmental Assessment", url: "https://www.icao.int/sites/default/files/2025-04/10031_en_0.pdf" },
  },
  {
    name: t("Responsabilidad corporativa y reporting", "Corporate responsibility and reporting"),
    image: "/course/m6-reporting.png",
    imageAlt: t("Cadena de datos, control y reporte corporativo", "Corporate data, control and reporting chain"),
    system: t("estrategia, impactos, riesgos, oportunidades, políticas, objetivos, operaciones, cadena de valor, datos, controles y supervisión", "strategy, impacts, risks, opportunities, policies, targets, operations, value chain, data, controls and oversight"),
    problem: t("un informe puede ser visualmente convincente y no permitir reconstruir perímetro, definición, fuente, cambio metodológico o responsabilidad", "a report can be visually convincing while failing to reconstruct boundary, definition, source, methodological change or accountability"),
    mechanisms: [t("materialidad de impactos y financiera", "impact and financial materiality"), t("cadena de valor y perímetros", "value chain and boundaries"), t("métricas, objetivos y planes", "metrics, targets and plans"), t("control interno, revisión y aseguramiento", "internal control, review and assurance")],
    evidence: t("diccionario de datos, propietarios, sistemas fuente, conciliaciones, estimaciones, cambios, controles, aprobaciones y pista de auditoría", "data dictionary, owners, source systems, reconciliations, estimates, changes, controls, approvals and audit trail"),
    metric: t("resultado absoluto e intensidad con base, perímetro y objetivo; avance de acciones, cobertura de datos, incertidumbre y desviaciones de control", "absolute and intensity results with baseline, boundary and target; action progress, data coverage, uncertainty and control deviations"),
    uncertainty: t("estimaciones de cadena de valor, cambios organizativos, factores, doble conteo, información clasificada y objetivos futuros", "value-chain estimates, organisational change, factors, double counting, classified information and future targets"),
    tradeoff: t("transparencia y verificabilidad deben convivir con seguridad, confidencialidad y comunicación comprensible", "transparency and verifiability must coexist with security, confidentiality and intelligible communication"),
    intervention: t("diseñar el informe desde los controles: definir cada KPI, asignar propietario, conservar evidencia y someter afirmaciones a un comité de reto", "designing the report from controls: defining each KPI, assigning an owner, retaining evidence and subjecting claims to a challenge committee"),
    verification: t("recalcular muestras, conciliar totales, rastrear desde afirmación a registro, revisar límites y exigir corrección visible de errores", "recalculating samples, reconciling totals, tracing claim to record, reviewing boundaries and requiring visible correction of errors"),
    caseTitle: t("El EAER como informe con separación de evidencia", "EAER as a report that separates evidence"),
    caseFacts: [t("El informe distingue datos históricos, previsiones, objetivos políticos y recomendaciones.", "The report distinguishes historical data, forecasts, policy targets and recommendations."), t("Incluye metodología y fuentes, permitiendo revisar qué representa cada tendencia.", "It includes methodology and sources, allowing review of what each trend represents."), t("La publicación institucional no elimina incertidumbre: la declara y actualiza con nuevas ediciones.", "Institutional publication does not eliminate uncertainty: it declares it and updates it through new editions.")],
    caseLesson: t("La credibilidad nace de poder reconstruir una cifra y comprender su límite, no de acumular compromisos sin mecanismo de ejecución.", "Credibility comes from reconstructing a number and understanding its limit, not from accumulating commitments without an execution mechanism."),
    source: { label: "EASA · European Aviation Environmental Report 2025", url: "https://www.easa.europa.eu/en/domains/environment/eaer" },
  },
];

const chapterTitles = [
  t("Comprender el sistema y la causalidad", "Understand the system and causality"),
  t("Construir evidencia que resista una revisión", "Build evidence that survives review"),
  t("Decidir, implantar y aprender", "Decide, implement and learn"),
];

function chapters(p: Profile): MasterclassChapter[] {
  return [
    {
      title: chapterTitles[0],
      kicker: t("MODELO MENTAL", "MENTAL MODEL"),
      paragraphs: [
        t(`El objeto de análisis no es una tecnología aislada, sino ${p.system.es}. La primera tarea consiste en formular la función que debe preservarse y dibujar las relaciones de causa y efecto. En ${p.name.es}, el error más frecuente aparece cuando ${p.problem.es}. Por eso el análisis conserva simultáneamente resultado operacional, impacto ambiental, seguridad, coste y horizonte temporal.`, `The object of analysis is not an isolated technology but ${p.system.en}. The first task is to formulate the function that must be preserved and map cause and effect. In ${p.name.en}, the most common error occurs when ${p.problem.en}. The analysis therefore preserves operational outcome, environmental impact, safety, cost and time horizon simultaneously.`),
        t(`El mecanismo se descompone en cuatro familias: ${p.mechanisms.map((x) => x.es).join("; ")}. Esta descomposición evita confundir correlación con causalidad. Un cambio observado en un indicador puede proceder de la intervención, de la meteorología, de la mezcla de misiones, de una configuración distinta o de una regla contable. El mapa causal identifica qué variable cambia primero, cuál es el resultado esperado y qué efecto adverso debe vigilarse.`, `The mechanism is decomposed into four families: ${p.mechanisms.map((x) => x.en).join("; ")}. This prevents correlation being confused with causality. A change in an indicator may come from the intervention, weather, mission mix, another configuration or an accounting rule. The causal map identifies which variable changes first, the expected outcome and the adverse effect that must be monitored.`),
        t(`Trabajar a nivel de sistema obliga a declarar interfaces y autoridad. El equipo ambiental no decide sobre aeronavegabilidad; operaciones no redefine por sí sola una métrica; compras no puede asumir que una declaración del proveedor equivale a evidencia de uso real. La decisión se vuelve defendible cuando cada disciplina aporta su condición de aceptación y existe un responsable que integra las tensiones sin ocultarlas.`, `Systems-level work requires interfaces and authority to be declared. The environmental team does not decide airworthiness; operations does not redefine a metric alone; procurement cannot assume a supplier statement equals evidence of actual use. The decision becomes defensible when each discipline contributes its acceptance condition and an owner integrates tensions without hiding them.`),
      ],
      keyPoints: p.mechanisms,
      prompt: t(`Dibuja el límite de ${p.name.es} en tu organización. ¿Qué proceso o actor relevante queda fuera de los datos actuales?`, `Draw the boundary of ${p.name.en} in your organisation. Which relevant process or actor falls outside current data?`),
    },
    {
      title: chapterTitles[1],
      kicker: t("MÉTODO Y DATOS", "METHOD AND DATA"),
      paragraphs: [
        t(`La base mínima de evidencia es ${p.evidence.es}. Cada dato debe conservar unidad, periodo, fuente, población, transformación y propietario. Si procede de una estimación, se documentan fórmula, factor y condición de uso. Los valores faltantes no se convierten silenciosamente en cero: se muestran, se estiman mediante una regla aprobada o se limita la conclusión.`, `The minimum evidence base is ${p.evidence.en}. Each data point retains unit, period, source, population, transformation and owner. If estimated, its formula, factor and condition of use are documented. Missing values are not silently converted to zero: they are shown, estimated under an approved rule or the conclusion is limited.`),
        t(`La métrica principal propuesta es ${p.metric.es}. No basta con una intensidad: si aumenta la actividad, una mejora relativa puede coexistir con mayor impacto absoluto. Tampoco basta el total: la intensidad permite comparar configuraciones o periodos cuando la función es equivalente. Ambos resultados se presentan juntos y se acompañan de un indicador operacional que impida declarar éxito a costa de la misión.`, `The proposed main metric is ${p.metric.en}. Intensity alone is insufficient: if activity grows, a relative improvement can coexist with a higher absolute impact. The total alone is also insufficient: intensity allows comparison of configurations or periods where function is equivalent. Both are presented together with an operational indicator that prevents success being claimed at mission expense.`),
        t(`La incertidumbre dominante procede de ${p.uncertainty.es}. En lugar de esconderla tras decimales, se analiza mediante rangos, escenarios y pruebas de sensibilidad. La pregunta útil no es «¿cuál es el número exacto?», sino «¿qué supuesto tendría que cambiar para invertir la decisión?». Ese umbral determina dónde merece la pena invertir en mejor medición y dónde una aproximación conservadora es suficiente.`, `Dominant uncertainty comes from ${p.uncertainty.en}. Rather than hiding it behind decimals, it is analysed through ranges, scenarios and sensitivity tests. The useful question is not “what is the exact number?” but “which assumption would have to change to reverse the decision?” That threshold determines where better measurement is worthwhile and where a conservative approximation is enough.`),
      ],
      keyPoints: [t("Trazabilidad de dato a decisión", "Traceability from data to decision"), t("Resultados absolutos e intensidades", "Absolute results and intensities"), t("Escenarios comparables", "Comparable scenarios"), t("Incertidumbre visible y accionable", "Visible, actionable uncertainty")],
      prompt: t(`Identifica el supuesto más débil de tu cálculo actual. ¿Qué ensayo o dato reduciría de verdad la incertidumbre de decisión?`, `Identify the weakest assumption in your current calculation. Which trial or data point would genuinely reduce decision uncertainty?`),
    },
    {
      title: chapterTitles[2],
      kicker: t("DECISIÓN Y CONTROL", "DECISION AND CONTROL"),
      paragraphs: [
        t(`La tensión central es ${p.tradeoff.es}. La respuesta no es sumar todos los resultados en una puntuación opaca. Se establecen primero barreras no negociables —seguridad, cumplimiento, autoridad técnica y capacidad mínima— y después se comparan las alternativas que las superan. Los criterios restantes conservan su unidad y peso explícito para que el decisor pueda explicar qué sacrificio acepta y por qué.`, `The central tension is ${p.tradeoff.en}. The answer is not to add all results into an opaque score. Non-negotiable gates—safety, compliance, technical authority and minimum capability—are established first, and alternatives that pass them are compared. Remaining criteria retain explicit units and weights so the decision maker can explain which sacrifice is accepted and why.`),
        t(`La intervención prioritaria es ${p.intervention.es}. El despliegue comienza en un perímetro controlado con línea base, criterio de parada, responsable y fecha de revisión. Se diferencia una señal temprana —por ejemplo adopción o estado de un control— del resultado final. Esa distinción permite corregir ejecución antes de concluir erróneamente que el mecanismo técnico no funciona.`, `The priority intervention is ${p.intervention.en}. Deployment begins in a controlled boundary with a baseline, stop criterion, owner and review date. An early signal—such as adoption or control state—is distinguished from the final outcome. This allows implementation to be corrected before incorrectly concluding that the technical mechanism does not work.`),
        t(`La verificación consiste en ${p.verification.es}. Una mejora se mantiene como afirmación provisional hasta superar el periodo y la población acordados. Si el resultado solo aparece en una estación, configuración o tipo de misión, la regla de operación conserva esa condición. El aprendizaje se incorpora a procedimientos, formación, configuración y siguiente ciclo de decisión; no queda encerrado en la presentación final del proyecto.`, `Verification consists of ${p.verification.en}. An improvement remains a provisional claim until it passes the agreed period and population. If the result appears only in one season, configuration or mission type, the operating rule preserves that condition. Learning is incorporated into procedures, training, configuration and the next decision cycle; it is not trapped in the project's final presentation.`),
      ],
      keyPoints: [t("Barreras antes que puntuaciones", "Gates before scores"), t("Piloto con criterio de parada", "Pilot with stop criterion"), t("Indicadores adelantados y finales", "Leading and outcome indicators"), t("Aprendizaje incorporado al sistema", "Learning embedded in the system")],
      prompt: t(`Redacta una regla de aprobación para ${p.name.es}: umbral, condición operacional, efecto adverso, responsable y fecha de revisión.`, `Write an approval rule for ${p.name.en}: threshold, operational condition, adverse effect, owner and review date.`),
    },
  ];
}

function slides(p: Profile): MasterclassSlide[] {
  return [
    {
      eyebrow: t("01 · MAPA DEL MÓDULO", "01 · MODULE MAP"),
      title: p.name,
      body: [t(`La pregunta guía es cómo mejorar ${p.name.es} sin perder de vista la función: ${p.system.es}.`, `The guiding question is how to improve ${p.name.en} without losing sight of the function: ${p.system.en}.`), t(`Al terminar podrás construir una línea base, detectar transferencias, evaluar evidencia y formular una decisión verificable.`, `By the end you can build a baseline, identify burden shifts, assess evidence and formulate a verifiable decision.`)],
      takeaways: [t("Sistema", "System"), t("Evidencia", "Evidence"), t("Decisión", "Decision"), t("Verificación", "Verification")],
    },
    {
      eyebrow: t("02 · MODELO CAUSAL", "02 · CAUSAL MODEL"),
      title: t("Del mecanismo al resultado", "From mechanism to outcome"),
      body: [t("El diagrama separa palancas, cambios observables y resultados. Cada flecha es una hipótesis que necesita datos.", "The diagram separates levers, observable changes and outcomes. Each arrow is a hypothesis requiring data.")],
      diagram: { kind: "flow", nodes: [p.mechanisms[0], p.mechanisms[1], p.metric, p.verification] },
    },
    {
      eyebrow: t("03 · PERÍMETRO", "03 · BOUNDARY"),
      title: t("Lo que entra, lo que queda fuera", "What is in and what is out"),
      body: [t(`El análisis incluye ${p.system.es}. La exclusión de una etapa o actor solo es aceptable si no puede cambiar la decisión y queda declarada.`, `The analysis includes ${p.system.en}. Excluding a stage or actor is acceptable only when it cannot change the decision and is declared.`)],
      diagram: { kind: "cycle", nodes: p.mechanisms },
    },
    {
      eyebrow: t("04 · CUADRO DE MANDO", "04 · DASHBOARD"),
      title: t("Medir sin fabricar una falsa certeza", "Measure without manufacturing false certainty"),
      body: [t(`Indicador central: ${p.metric.es}.`, `Core indicator: ${p.metric.en}.`), t(`Incertidumbre crítica: ${p.uncertainty.es}.`, `Critical uncertainty: ${p.uncertainty.en}.`)],
      diagram: { kind: "balance", nodes: [t("Impacto", "Impact"), t("Misión", "Mission"), t("Riesgo", "Risk"), t("Coste", "Cost")] },
    },
    {
      eyebrow: t("05 · CASO REAL DOCUMENTADO", "05 · DOCUMENTED REAL CASE"),
      title: p.caseTitle,
      body: p.caseFacts,
      takeaways: [p.caseLesson],
      source: p.source,
    },
    {
      eyebrow: t("06 · DECISIÓN", "06 · DECISION"),
      title: t("Una recomendación con condiciones", "A recommendation with conditions"),
      body: [t(`Tensión: ${p.tradeoff.es}.`, `Tension: ${p.tradeoff.en}.`), t(`Intervención: ${p.intervention.es}.`, `Intervention: ${p.intervention.en}.`), t(`Prueba: ${p.verification.es}.`, `Test: ${p.verification.en}.`)],
      diagram: { kind: "timeline", nodes: [t("Línea base", "Baseline"), t("Piloto", "Pilot"), t("Revisión", "Review"), t("Escala o parada", "Scale or stop")] },
    },
    {
      eyebrow: t("07 · SÍNTESIS ACTIVA", "07 · ACTIVE SYNTHESIS"),
      title: t("Antes de continuar, decide", "Decide before continuing"),
      body: [t(`Formula en una frase qué aprobarías, con qué límite y qué dato podría hacerte cambiar de decisión en ${p.name.es}.`, `State in one sentence what you would approve, with which limit and which data could change your decision in ${p.name.en}.`)],
      takeaways: [t("Función preservada", "Function preserved"), t("Fuente trazable", "Traceable source"), t("Incertidumbre declarada", "Uncertainty declared"), t("Responsable y revisión", "Owner and review")],
    },
  ];
}

export const masterclasses: ModuleMasterclass[] = profiles.map((profile) => ({
  image: profile.image,
  imageAlt: profile.imageAlt,
  chapters: chapters(profile),
  slides: slides(profile),
}));
