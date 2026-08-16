import type { LocalText } from "./course-data-bilingual";

const t = (en: string, es: string): LocalText => ({ en, es });
export type TheoryBriefing = {
  title: LocalText;
  duration: string;
  sections: { heading: LocalText; paragraphs: LocalText[] }[];
};

export const extendedTheory: TheoryBriefing[] = [
  {
    title: t(
      "Advanced briefing: system boundaries and accountable decisions",
      "Profundización: límites del sistema y decisiones responsables",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t(
          "Why the boundary changes the answer",
          "Por qué el alcance cambia la respuesta",
        ),
        paragraphs: [
          t(
            "An aircraft is never an isolated environmental object. Its performance emerges from design, fuel and electricity supply, infrastructure, mission planning, maintenance condition, logistics, training and end-of-life decisions. A narrow boundary can make an option look favourable by moving energy use, emissions or waste to a supplier, another site or a later life-cycle stage. Before comparing alternatives, the analyst must state the service delivered, geography, time horizon, configurations included, upstream and downstream processes, exclusions and the reason each exclusion is not expected to change the decision.",
            "Una aeronave nunca es un objeto ambiental aislado. Su desempeño surge del diseño, el suministro de combustible y electricidad, la infraestructura, la planificación de misión, el estado de mantenimiento, la logística, la formación y el fin de vida. Un alcance estrecho puede hacer que una opción parezca favorable trasladando energía, emisiones o residuos a un proveedor, otro emplazamiento o una etapa posterior. Antes de comparar alternativas deben declararse el servicio prestado, geografía, horizonte temporal, configuraciones, procesos aguas arriba y abajo, exclusiones y por qué estas no deberían cambiar la decisión.",
          ),
          t(
            "For Air Power Services, the functional unit should preserve capability. Fuel per flight hour may be useful for trend control, but it cannot by itself compare missions with different payload, training outcome, availability contribution or threat constraints. A defensible study may use a defined training outcome, a serviceable-aircraft day, a completed maintenance package or a mission of a stated class. Absolute indicators are then reported alongside intensity indicators so that efficiency improvement cannot hide growth in total resource use.",
            "En Air Power Services, la unidad funcional debe conservar la capacidad. El combustible por hora de vuelo puede servir para tendencias, pero no compara por sí solo misiones con distinta carga, resultado formativo, contribución a disponibilidad o restricciones. Un estudio defendible puede utilizar un resultado de formación definido, un día de aeronave disponible, un paquete de mantenimiento completado o una misión de clase declarada. Los indicadores absolutos se presentan junto con los de intensidad para que la eficiencia no oculte un aumento del consumo total.",
          ),
        ],
      },
      {
        heading: t(
          "Governance and decision gates",
          "Gobernanza y barreras de decisión",
        ),
        paragraphs: [
          t(
            "Safety, airworthiness, security, legal compliance and authorised mission requirements are gates, not criteria that can be compensated by a good environmental score. Only feasible options pass into the comparison stage. The decision record identifies the accountable owner, technical authorities, data owners, consulted functions and approval route. It also separates facts, estimates, assumptions and value judgements. This distinction is essential when environmental evidence is incomplete or when civil aviation methods are adapted to military operations.",
            "Seguridad, aeronavegabilidad, seguridad física, cumplimiento legal y requisitos de misión autorizados son barreras, no criterios compensables con una buena puntuación ambiental. Solo las opciones viables pasan a comparación. El registro identifica responsable, autoridades técnicas, propietarios de datos, funciones consultadas y ruta de aprobación. También separa hechos, estimaciones, supuestos y juicios de valor, algo esencial cuando la evidencia es incompleta o se adaptan métodos civiles a operaciones militares.",
          ),
          t(
            "A mature governance process assigns review triggers. A result may need reassessment when utilisation, fuel pathway, electricity mix, fleet configuration, supplier process, legal requirement or mission profile changes. Without triggers, a conclusion that was valid for a pilot can silently become an unsupported fleet-wide claim. The aim is controlled learning: approve what evidence supports, monitor influential uncertainties and define what new evidence would change the decision.",
            "Un proceso maduro asigna umbrales de revisión. El resultado puede requerir reevaluación si cambian utilización, ruta de combustible, mix eléctrico, configuración de flota, proceso del proveedor, requisito legal o perfil de misión. Sin umbrales, una conclusión válida para un piloto puede convertirse en una afirmación injustificada para toda la flota. El objetivo es aprendizaje controlado: aprobar lo respaldado, vigilar incertidumbres influyentes y definir qué evidencia cambiaría la decisión.",
          ),
        ],
      },
      {
        heading: t(
          "Evidence quality and anti-greenwashing",
          "Calidad de evidencia y prevención del greenwashing",
        ),
        paragraphs: [
          t(
            "Evidence is graded for relevance, representativeness, completeness, consistency and uncertainty. Primary metered data may still be unrepresentative if collected during an unusual mission; a generic database factor may be precise but poorly matched to the actual supplier. Sensitivity analysis should focus on assumptions capable of changing the ranking, rather than varying every number mechanically. Results are communicated with their baseline, metric, boundary, period and limitation.",
            "La evidencia se valora por relevancia, representatividad, integridad, coherencia e incertidumbre. Un dato medido puede no ser representativo si procede de una misión atípica; un factor genérico puede ser preciso pero no corresponder al proveedor real. La sensibilidad debe centrarse en supuestos capaces de cambiar la clasificación, no variar todo mecánicamente. Los resultados se comunican con línea base, métrica, alcance, periodo y limitación.",
          ),
          t(
            "Terms such as green, clean, zero impact or climate neutral compress multiple impacts into an absolute impression. They are avoided unless every reasonable interpretation is substantiated across the relevant boundary, which is rarely possible. Stronger communication states the measured change and what it does not cover: for example, a verified reduction in ground-energy consumption at one base, with aircraft fuel, embodied impacts and total activity reported separately.",
            "Términos como verde, limpio, impacto cero o neutralidad climática comprimen múltiples impactos en una impresión absoluta. Se evitan salvo que todas las interpretaciones razonables estén demostradas en el alcance pertinente, algo poco habitual. Una comunicación sólida declara el cambio medido y lo que no cubre: por ejemplo, reducción verificada de energía en tierra en una base, presentando por separado combustible de aeronave, impactos incorporados y actividad total.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: flight mechanics, mission profiles and energy",
      "Profundización: mecánica de vuelo, perfiles de misión y energía",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t(
          "Where the mission requires energy",
          "Dónde requiere energía la misión",
        ),
        paragraphs: [
          t(
            "The useful starting point is the mission energy chain: chemical energy enters the propulsion system, only part becomes shaft or jet power, and only part of that produces useful propulsive work. Energy is required to overcome drag, gain potential energy during climb, change kinetic energy and supply onboard systems. Taxi, take-off, climb, cruise, descent, holding and ground operation have different drivers; an annual average conceals them. A segment model therefore links time, speed, altitude, mass, atmospheric state, engine setting and configuration.",
            "El punto de partida es la cadena energética: entra energía química en la propulsión, solo una parte se convierte en potencia y solo parte de esta produce trabajo propulsivo útil. Se necesita energía para vencer resistencia, ganar energía potencial, cambiar energía cinética y alimentar sistemas. Rodaje, despegue, ascenso, crucero, descenso, espera y operación en tierra tienen factores distintos; un promedio anual los oculta. Un modelo por segmentos relaciona tiempo, velocidad, altitud, masa, atmósfera, régimen y configuración.",
          ),
          t(
            "For steady level flight, lift balances weight and thrust balances drag. Drag combines parasite and induced components, producing a speed region with minimum total drag. Flying slower is not automatically more efficient because induced drag rises; flying faster raises parasite drag rapidly. The optimum depends on aircraft mass, altitude, configuration, winds, time cost and mission constraints. Operational recommendations must therefore be configuration-specific and approved, not generic advice to reduce speed or altitude.",
            "En vuelo recto y nivelado, sustentación equilibra peso y empuje equilibra resistencia. La resistencia combina componentes parásita e inducida, generando una región de mínima resistencia total. Volar más lento no siempre es más eficiente porque aumenta la resistencia inducida; volar más rápido eleva rápidamente la parásita. El óptimo depende de masa, altitud, configuración, viento, coste temporal y restricciones. Las recomendaciones deben ser específicas y aprobadas, no consejos genéricos de reducir velocidad o altitud.",
          ),
        ],
      },
      {
        heading: t(
          "Mass, drag and operational trade-offs",
          "Masa, resistencia y compensaciones operativas",
        ),
        paragraphs: [
          t(
            "Additional mass increases the lift requirement and usually induced drag, but the fuel consequence depends on when and where the mass is carried. Removing equipment may be unacceptable if it reduces resilience, redundancy or mission effectiveness. Loading, centre of gravity, external configuration, surface condition and open doors or probes can also affect drag. A credible initiative uses representative missions and separates unavoidable mission equipment from avoidable carried mass.",
            "La masa adicional aumenta la sustentación requerida y normalmente la resistencia inducida, pero la consecuencia depende de cuándo y dónde se transporta. Retirar equipos puede ser inaceptable si reduce resiliencia, redundancia o eficacia. Carga, centro de gravedad, configuración externa, estado superficial y puertas o sondas también afectan la resistencia. Una iniciativa creíble usa misiones representativas y separa equipos indispensables de masa evitable.",
          ),
          t(
            "A fuel-saving procedure can create other consequences: longer flight time, different noise exposure, altered maintenance cycles or reduced schedule margin. The correct comparison uses the same authorised mission outcome and records the complete operational effect. Trials need a baseline population, weather and payload normalisation, safety gates, statistical treatment and a rule for excluding abnormal events. One successful sortie is evidence of feasibility, not proof of a persistent fleet benefit.",
            "Un procedimiento de ahorro puede generar mayor duración, distinta exposición acústica, ciclos de mantenimiento alterados o menor margen. La comparación conserva el mismo resultado autorizado y registra el efecto completo. Los ensayos requieren población base, normalización por meteorología y carga, barreras de seguridad, tratamiento estadístico y reglas para excluir eventos anómalos. Una salida satisfactoria demuestra viabilidad, no un beneficio persistente de flota.",
          ),
        ],
      },
      {
        heading: t("Worked energy check", "Comprobación energética guiada"),
        paragraphs: [
          t(
            "Suppose a planning change reduces conventional fuel by 450 kilograms on each of 120 comparable annual missions. The direct combustion estimate is 450 × 120 × 3.16 = 170,640 kilograms of CO2 per year. This is useful but bounded: it is not a lifecycle result, does not quantify non-CO2 effects and is valid only if mission output and total activity remain comparable. The analyst should also report the annual fuel reduction of 54 tonnes and test whether weather, payload or diverted missions explain part of the observed difference.",
            "Supongamos que un cambio de planificación reduce 450 kg de combustible en 120 misiones anuales comparables. La estimación de combustión directa es 450 × 120 × 3,16 = 170.640 kg de CO2 al año. Es útil pero limitada: no es un resultado de ciclo de vida, no cuantifica efectos no CO2 y solo vale si resultado de misión y actividad total son comparables. También se informa la reducción anual de 54 toneladas de combustible y se comprueba si meteorología, carga o desvíos explican parte de la diferencia.",
          ),
          t(
            "The implementation decision then asks whether the procedure is approved, repeatable and resilient under off-nominal conditions. Leading indicators can include adoption rate and dispatch-plan compliance; outcome indicators include normalised fuel, delay, mission completion and reported exceptions. If savings disappear in winter or for a specific configuration, the rule should be conditional rather than presented as universally applicable.",
            "La implantación pregunta después si el procedimiento está aprobado, es repetible y resiliente en condiciones anómalas. Indicadores adelantados pueden ser tasa de adopción y cumplimiento del plan; los de resultado incluyen combustible normalizado, demora, misión completada y excepciones. Si el ahorro desaparece en invierno o para una configuración, la regla debe ser condicional y no presentarse como universal.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: propulsion pathways and infrastructure",
      "Profundización: rutas de propulsión e infraestructura",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t(
          "Engine performance is a map, not one efficiency",
          "El rendimiento del motor es un mapa, no una única eficiencia",
        ),
        paragraphs: [
          t(
            "Propulsion performance varies with altitude, speed, temperature, power setting, bleed demand and deterioration. Thermal efficiency describes conversion of fuel energy into useful mechanical or jet energy; propulsive efficiency describes how effectively that energy produces thrust. An improvement at one design point may create weight, cooling, noise or maintainability penalties elsewhere. In-service assessment therefore uses representative duty cycles and engine health data rather than a catalogue figure.",
            "El rendimiento propulsivo varía con altitud, velocidad, temperatura, potencia, sangrado y deterioro. La eficiencia térmica describe la conversión de energía del combustible; la propulsiva, cómo esa energía produce empuje. Una mejora en un punto puede generar penalizaciones de masa, refrigeración, ruido o mantenibilidad en otro. La evaluación en servicio usa ciclos representativos y datos de salud del motor, no una cifra de catálogo.",
          ),
          t(
            "Engine washing, compressor condition, control-system status and sensor accuracy can influence consumption, but interventions consume water, chemicals, energy and maintenance capacity. The decision threshold compares avoided operational burden with intervention inputs and risk. Condition-based action can outperform fixed frequency when diagnostics are reliable, yet an overly narrow optimisation may increase removals, logistics or no-fault-found events.",
            "Lavado de motor, estado del compresor, sistema de control y precisión de sensores pueden influir en consumo, pero las intervenciones usan agua, químicos, energía y capacidad. El umbral compara carga operativa evitada con entradas y riesgo. Una acción por condición puede superar una frecuencia fija si el diagnóstico es fiable, pero una optimización estrecha puede aumentar desmontajes, logística o eventos sin fallo encontrado.",
          ),
        ],
      },
      {
        heading: t(
          "Fuel claims require a complete pathway",
          "Las afirmaciones sobre combustible requieren una ruta completa",
        ),
        paragraphs: [
          t(
            "A fuel is characterised by feedstock or primary energy, production process, conversion yield, transport, blending, certification, storage and use. Tailpipe CO2 alone cannot establish lifecycle performance. Sustainable aviation fuel pathways vary widely, and accounting depends on counterfactuals, allocation and land-use assumptions. Drop-in compatibility reduces aircraft-change requirements but does not remove constraints on availability, quality, price, custody or credible attribution.",
            "Un combustible se caracteriza por materia prima o energía primaria, proceso, rendimiento, transporte, mezcla, certificación, almacenamiento y uso. El CO2 de escape no demuestra desempeño de ciclo de vida. Las rutas SAF varían y su contabilidad depende de contrafactuales, asignación y uso del suelo. La compatibilidad drop-in reduce cambios en aeronave, pero no elimina restricciones de disponibilidad, calidad, precio, custodia o atribución creíble.",
          ),
          t(
            "Hydrogen, batteries and hybrid systems shift architecture and infrastructure. Volumetric energy density affects tanks and payload; cryogenic storage adds thermal and venting requirements; batteries add mass, power, thermal management and ageing constraints. The electricity or hydrogen production pathway can dominate upstream results. Concepts must be evaluated at system level and by maturity: a laboratory result, demonstrator and certified in-service capability are different evidence categories.",
            "Hidrógeno, baterías e híbridos desplazan arquitectura e infraestructura. La densidad volumétrica afecta depósitos y carga; el almacenamiento criogénico añade requisitos térmicos y venteo; las baterías añaden masa, potencia, gestión térmica y envejecimiento. La ruta de electricidad o hidrógeno puede dominar resultados aguas arriba. Los conceptos se evalúan a nivel de sistema y madurez: laboratorio, demostrador y capacidad certificada son evidencias distintas.",
          ),
        ],
      },
      {
        heading: t(
          "Infrastructure and readiness",
          "Infraestructura y disponibilidad",
        ),
        paragraphs: [
          t(
            "A propulsion transition is also a base transition. It may require electrical connection capacity, storage, charging or fuelling equipment, fire protection, hazardous-area classification, metering, emergency response, training and new supply contracts. Peak demand and recovery time matter as much as annual energy. A solution that performs efficiently but cannot support surge operations, dispersal or degraded infrastructure may fail the Air Power requirement.",
            "Una transición propulsiva es también una transición de base. Puede exigir capacidad eléctrica, almacenamiento, carga o repostaje, protección contra incendios, clasificación de zonas, medición, respuesta a emergencias, formación y contratos. La demanda punta y el tiempo de recuperación importan tanto como la energía anual. Una solución eficiente que no soporte picos, dispersión o infraestructura degradada puede incumplir el requisito Air Power.",
          ),
          t(
            "The assessment records technology readiness, infrastructure readiness and operational readiness separately. A staged roadmap can begin with measurement and demand reduction, then compatible ground equipment, limited trials and only later major aircraft or fuel-system change. Each gate has evidence requirements, responsible authorities, stop criteria and a plan for lessons learned.",
            "La evaluación registra por separado madurez tecnológica, de infraestructura y operativa. Una hoja de ruta puede empezar con medición y reducción de demanda, seguir con equipos compatibles y ensayos limitados y abordar después grandes cambios. Cada puerta tiene requisitos de evidencia, autoridades responsables, criterios de parada y plan de lecciones aprendidas.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: integration, certification and rebound effects",
      "Profundización: integración, certificación y efectos rebote",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t(
          "Architecture is a network of constraints",
          "La arquitectura es una red de restricciones",
        ),
        paragraphs: [
          t(
            "A change to propulsion, power generation, cooling or materials propagates through aircraft mass, centre of gravity, volume, electrical protection, thermal rejection, structural loads, controls, software, maintainability and emergency procedures. Interface requirements can outweigh the performance of the new component itself. Systems engineering therefore traces requirements, assumptions and verification evidence across affected functions rather than evaluating a technology in isolation.",
            "Un cambio en propulsión, generación, refrigeración o materiales se propaga por masa, centro de gravedad, volumen, protección eléctrica, rechazo térmico, cargas, controles, software, mantenibilidad y emergencias. Los requisitos de interfaz pueden pesar más que el rendimiento del componente. La ingeniería de sistemas traza requisitos, supuestos y evidencias de verificación entre funciones afectadas, no evalúa la tecnología aisladamente.",
          ),
          t(
            "Integration also determines who can maintain the solution, which tools and spares are needed, how faults are isolated and how degraded modes operate. A modest efficiency gain may be erased by additional cooling equipment, protective structure, low dispatch reliability or urgent logistics. The business case and environmental case should therefore share configuration, utilisation and reliability assumptions.",
            "La integración también determina quién mantiene la solución, qué herramientas y repuestos requiere, cómo se aíslan fallos y cómo operan modos degradados. Una ganancia modesta puede desaparecer por refrigeración adicional, estructura protectora, baja fiabilidad o logística urgente. Los casos económico y ambiental deben compartir supuestos de configuración, utilización y fiabilidad.",
          ),
        ],
      },
      {
        heading: t(
          "Certification evidence and change control",
          "Evidencia de certificación y control de cambios",
        ),
        paragraphs: [
          t(
            "Environmental benefit never replaces compliance demonstration. A modification follows the applicable airworthiness and design-change process, with safety assessment, qualification, verification and approved data. Software and electronic hardware changes introduce configuration and assurance requirements; material substitution needs compatibility, durability and fire-performance evidence. The environmental team contributes requirements and lifecycle analysis but does not bypass technical authority.",
            "El beneficio ambiental nunca sustituye la demostración de cumplimiento. Una modificación sigue el proceso aplicable de aeronavegabilidad y cambio de diseño, con seguridad, cualificación, verificación y datos aprobados. Los cambios de software y hardware introducen configuración y aseguramiento; sustituir materiales exige compatibilidad, durabilidad y comportamiento al fuego. Medioambiente aporta requisitos y ciclo de vida, pero no elude la autoridad técnica.",
          ),
          t(
            "Once introduced, configuration control prevents mixed standards from corrupting performance data. The monitoring plan records tail number or configuration, software standard, engine status, mission class and relevant environment. If a benefit is observed only in one configuration, the claim and deployment plan remain limited to that population.",
            "Una vez introducido, el control de configuración evita que estándares mezclados corrompan datos. El plan registra matrícula o configuración, estándar de software, estado de motor, clase de misión y entorno. Si el beneficio aparece solo en una configuración, la afirmación y el despliegue se limitan a esa población.",
          ),
        ],
      },
      {
        heading: t(
          "Rebound and unintended consequences",
          "Rebote y consecuencias no deseadas",
        ),
        paragraphs: [
          t(
            "Efficiency can lower the resource needed per activity while total activity rises. This rebound is not proof that efficiency is useless; it means intensity and absolute outcomes must be governed together. A faster turnaround may improve readiness but enable more activity; digital monitoring may reduce inspection travel but increase data infrastructure and sensor replacement. The evaluation asks which behavioural or operational response could offset the intended gain.",
            "La eficiencia puede reducir recursos por actividad mientras aumenta la actividad total. Este rebote no hace inútil la eficiencia; exige gobernar intensidad y resultados absolutos conjuntamente. Un turnaround más rápido puede mejorar disponibilidad pero permitir más actividad; la monitorización digital puede reducir viajes y aumentar infraestructura de datos y sensores. La evaluación pregunta qué respuesta conductual u operativa podría compensar la mejora.",
          ),
          t(
            "Controls include capacity-aware targets, absolute resource budgets, review of induced activity and transparent reporting of both service and impact. When a change improves readiness, that outcome should be reported explicitly rather than being hidden inside an environmental percentage. Integrated performance means acknowledging that mission and environmental outcomes can reinforce or oppose one another.",
            "Los controles incluyen objetivos conscientes de capacidad, presupuestos absolutos, revisión de actividad inducida e información transparente de servicio e impacto. Si un cambio mejora disponibilidad, se declara expresamente en lugar de ocultarlo en un porcentaje ambiental. El desempeño integrado reconoce que resultados de misión y ambientales pueden reforzarse u oponerse.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: lifecycle hotspots and circular value",
      "Profundización: hotspots de ciclo de vida y valor circular",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t("From inventory to hotspot", "Del inventario al hotspot"),
        paragraphs: [
          t(
            "A lifecycle inventory connects material production, manufacturing yield, transport, assembly, operation, maintenance, replacement and end-of-life flows to the defined function. Data quality requirements reflect the decision: supplier-specific energy and yield may be necessary for procurement, while screening can begin with databases. Cut-off, allocation and recycled-content choices are documented because they can change the apparent advantage of a material or route.",
            "Un inventario conecta producción de materiales, rendimiento de fabricación, transporte, montaje, operación, mantenimiento, reposición y fin de vida con la función definida. La calidad refleja la decisión: energía y rendimiento específicos pueden ser necesarios en compras, mientras un cribado puede empezar con bases de datos. Corte, asignación y contenido reciclado se documentan porque pueden cambiar la ventaja aparente.",
          ),
          t(
            "Hotspot analysis identifies processes that dominate an indicator, but a hotspot is not automatically the first intervention. The team also considers influence, technical feasibility, safety, cost and risk of transfer. Climate results alone can hide toxicity, water, resource criticality or difficult composite waste. A contribution chart is therefore accompanied by data-quality flags and sensitivity to future utilisation and energy scenarios.",
            "El análisis identifica procesos dominantes, pero un hotspot no es automáticamente la primera intervención. También se consideran influencia, viabilidad, seguridad, coste y transferencia. El clima puede ocultar toxicidad, agua, criticidad o residuos compuestos. Un gráfico de contribución se acompaña de calidad de datos y sensibilidad a utilización y energía futuras.",
          ),
        ],
      },
      {
        heading: t(
          "Lightweighting break-even",
          "Punto de equilibrio del aligeramiento",
        ),
        paragraphs: [
          t(
            "A lightweight component may require more production energy but save recurring operational energy. Break-even occurs when accumulated in-service savings exceed the additional production and maintenance burden. The calculation depends on mass saved, mission sensitivity, utilisation, service life, repair rate and future fuel pathway. A component on a highly utilised aircraft can have a different result from the same component on a low-utilisation or short-life configuration.",
            "Un componente ligero puede requerir más energía de producción y ahorrar energía operativa recurrente. El equilibrio llega cuando el ahorro acumulado supera la carga adicional de producción y mantenimiento. Depende de masa ahorrada, sensibilidad de misión, utilización, vida, reparación y futura ruta de combustible. El mismo componente puede dar resultados distintos en aeronaves con utilización o vida diferentes.",
          ),
          t(
            "Material comparison preserves equivalent structural, thermal, durability and damage-tolerance function. Comparing one kilogram of aluminium with one kilogram of composite is usually weak because required quantities and lifetimes differ. Manufacturing yield, cure energy, inspection, repair, protective coatings and end-of-life route are included. The conclusion can be a range rather than a single break-even flight count.",
            "La comparación conserva función estructural, térmica, durabilidad y tolerancia al daño equivalentes. Comparar un kilogramo de aluminio con uno de composite suele ser débil porque cambian cantidades y vidas. Se incluyen rendimiento de fabricación, curado, inspección, reparación, recubrimientos y fin de vida. La conclusión puede ser un rango, no un único número de vuelos.",
          ),
        ],
      },
      {
        heading: t(
          "Circularity under airworthiness control",
          "Circularidad bajo control de aeronavegabilidad",
        ),
        paragraphs: [
          t(
            "Circularity prioritises avoided demand, life extension, repair, approved reuse, remanufacture and only then material recovery. In aerospace, retained technical value depends on identity, configuration, condition, remaining life, storage and approved release. A part without traceability may have material value but no permissible reuse route. Security, export-control and customer obligations can further constrain destinations.",
            "La circularidad prioriza evitar demanda, ampliar vida, reparar, reutilizar con aprobación, remanufacturar y después recuperar material. En aeronáutica, el valor técnico depende de identidad, configuración, estado, vida remanente, almacenamiento y liberación aprobada. Una pieza sin trazabilidad puede tener valor material pero no ruta de reutilización. Seguridad, exportación y obligaciones de cliente pueden limitar destinos.",
          ),
          t(
            "A controlled decommissioning plan inventories fuels, oils, hydraulics, batteries, pyrotechnics, hazardous substances and protected information before dismantling. Mass recycling rate is reported with destination, value retention and difficult fractions; otherwise a high rate can conceal downcycling or poorly controlled composites. Avoided-impact claims are used cautiously because displacement of virgin production must be demonstrated rather than assumed.",
            "Un plan controlado inventaría combustibles, aceites, hidráulicos, baterías, pirotecnia, sustancias peligrosas e información protegida antes del desmontaje. La tasa de reciclaje se acompaña de destino, conservación de valor y fracciones difíciles; de otro modo puede ocultar downcycling o composites mal gestionados. Los impactos evitados se usan con cautela porque desplazar producción virgen debe demostrarse.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: noise, air quality and climate interactions",
      "Profundización: interacciones entre ruido, aire y clima",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t(
          "Acoustic evidence and human response",
          "Evidencia acústica y respuesta humana",
        ),
        paragraphs: [
          t(
            "Noise evidence states the metric, frequency weighting, time weighting, integration period, event definition, microphone position and meteorology. LAmax describes a peak, SEL normalises event exposure and LAeq represents average acoustic energy over a period; none is universally best. Tonality, impulsiveness and low-frequency content can affect response even when an A-weighted level is similar. Occupational hearing protection and community annoyance are different assessment questions.",
            "La evidencia acústica declara métrica, ponderación frecuencial y temporal, periodo, definición de evento, posición y meteorología. LAmax describe pico, SEL normaliza exposición y LAeq representa energía media; ninguna es universal. Tonalidad, impulsividad y baja frecuencia afectan la respuesta incluso con nivel A similar. Protección auditiva laboral y molestia comunitaria son preguntas distintas.",
          ),
          t(
            "Source, propagation and receiver are modelled separately. Engine setting, directionality, duration and ground equipment define the source; distance, barriers, ground and atmosphere alter propagation; timing, event count and sensitivity define exposure. The Balanced Approach considers reduction at source, land-use planning, noise-abatement procedures and operating restrictions in a context-specific sequence, with safety and operational feasibility protected.",
            "Fuente, propagación y receptor se modelizan por separado. Régimen, directividad, duración y equipos definen fuente; distancia, barreras, suelo y atmósfera alteran propagación; horario, número y sensibilidad definen exposición. El Enfoque Equilibrado considera reducción en fuente, planificación del suelo, procedimientos y restricciones de forma contextual, protegiendo seguridad y viabilidad.",
          ),
        ],
      },
      {
        heading: t(
          "Local air quality from multiple sources",
          "Calidad del aire local con múltiples fuentes",
        ),
        paragraphs: [
          t(
            "Aircraft engines and APUs are only part of a base airshed. Ground power, heaters, generators, vehicles, coating and cleaning processes, fuel handling, construction dust and regional background may contribute. Emission mass is not ambient concentration: release height, wind, turbulence, chemistry and receptor position intervene. A visible plume is not a calibrated indicator, and important pollutants can be invisible.",
            "Motores y APU son solo parte del entorno atmosférico. Energía en tierra, calefactores, generadores, vehículos, pintura y limpieza, combustible, polvo de obras y fondo regional pueden contribuir. Masa emitida no es concentración: intervienen altura, viento, turbulencia, química y receptor. Una pluma visible no es indicador calibrado y contaminantes importantes pueden ser invisibles.",
          ),
          t(
            "Monitoring design starts with the decision and relevant averaging period. It specifies pollutants, detection limits, siting, calibration, quality assurance, wind data and background comparison. Low-cost sensors can support screening and spatial patterns but require co-location and performance checks before regulatory or health conclusions. Time-resolved activity logs help attribute peaks without claiming causality from coincidence alone.",
            "El diseño de monitorización parte de la decisión y periodo relevante. Define contaminantes, límites, ubicación, calibración, calidad, viento y comparación de fondo. Sensores de bajo coste apoyan cribado y patrones, pero requieren cotejo antes de conclusiones reglamentarias o de salud. Registros temporales ayudan a atribuir picos sin afirmar causalidad por coincidencia.",
          ),
        ],
      },
      {
        heading: t(
          "Climate interactions and uncertainty",
          "Interacciones climáticas e incertidumbre",
        ),
        paragraphs: [
          t(
            "Fuel carbon produces long-lived CO2, making cumulative fuel use central. Nitrogen oxides, water vapour, particles and persistent contrails can also influence climate, with effects depending on altitude, latitude, time, weather and chemistry. A single multiplier can be useful for scenarios but should not be presented as universally precise. Direct fuel reduction is robust; route or altitude measures require checking additional fuel, safety and mission result.",
            "El carbono del combustible produce CO2 de larga duración, por lo que el consumo acumulado es central. NOx, vapor, partículas y estelas persistentes también influyen según altitud, latitud, hora, meteorología y química. Un multiplicador puede servir para escenarios, no como precisión universal. Reducir combustible es robusto; cambios de ruta o altitud deben comprobar combustible adicional, seguridad y resultado.",
          ),
          t(
            "Integrated decisions expose trade-offs. A noise route may add fuel; electrification may shift emissions upstream; a fuel pathway may improve lifecycle climate performance while changing local pollutants and logistics. The decision matrix retains separate indicators and receptors before any weighting. The recommendation states which effects improve, which worsen, which remain uncertain and what operational constraints dominate.",
            "Las decisiones integradas hacen visibles compensaciones. Una ruta acústica puede añadir combustible; electrificar desplaza emisiones; un combustible puede mejorar clima y cambiar contaminantes o logística. La matriz conserva indicadores y receptores separados antes de ponderar. La recomendación declara qué mejora, empeora, queda incierto y qué restricciones dominan.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: maintenance, resources and resilient bases",
      "Profundización: mantenimiento, recursos y bases resilientes",
    ),
    duration: "55 min",
    sections: [
      {
        heading: t(
          "Maintenance condition as a performance driver",
          "El estado de mantenimiento como factor de desempeño",
        ),
        paragraphs: [
          t(
            "Aerodynamic surface condition, engine deterioration, leaks, tyre pressure, filter restriction and system faults can change fuel, noise, emissions and hazardous releases. Condition monitoring links technical parameters to environmental significance without creating unnecessary maintenance. Thresholds consider measurement confidence, failure risk, intervention burden and the operational benefit expected before the next planned opportunity.",
            "El estado superficial, deterioro de motor, fugas, presión, restricción de filtros y fallos cambian combustible, ruido, emisiones y vertidos. La monitorización conecta parámetros técnicos con importancia ambiental sin crear mantenimiento innecesario. Los umbrales consideran confianza, riesgo, carga de intervención y beneficio esperado hasta la siguiente oportunidad.",
          ),
          t(
            "Reliability creates indirect impacts through repeat defects, no-fault-found removals, urgent freight, rescue missions, cannibalisation and premature scrapping. These flows may dominate a small component's footprint. Better diagnostics, repair instructions, spares positioning and feedback to design can improve readiness and reduce lifecycle burden simultaneously, but stock and redundancy decisions still require resilience analysis.",
            "La fiabilidad genera impactos indirectos por averías repetidas, desmontajes sin fallo, transporte urgente, misiones de recuperación, canibalización y desguace prematuro. Estos flujos pueden dominar la huella de un componente. Mejores diagnósticos, reparación, repuestos y retorno a diseño mejoran disponibilidad y carga de ciclo de vida, aunque stock y redundancia requieren analizar resiliencia.",
          ),
        ],
      },
      {
        heading: t(
          "Water, chemicals and waste pathways",
          "Rutas de agua, químicos y residuos",
        ),
        paragraphs: [
          t(
            "The maintenance footprint includes wash water, solvents, coatings, oils, hydraulic fluids, absorbents, packaging and replaced parts. Controls follow a hierarchy: avoid need, reduce quantity, substitute compatible materials, close loops, contain releases, segregate streams and verify destination. Substitution is never based on an environmental label alone; airworthiness, material compatibility, occupational exposure, process quality and fire safety are checked.",
            "La huella incluye agua de lavado, disolventes, recubrimientos, aceites, hidráulicos, absorbentes, embalajes y piezas. Los controles siguen jerarquía: evitar, reducir, sustituir compatibles, cerrar circuitos, contener, segregar y verificar destino. La sustitución no se basa en una etiqueta ambiental; se comprueban aeronavegabilidad, compatibilidad, exposición, calidad y fuego.",
          ),
          t(
            "Drainage drawings, valve condition, interceptor capacity, chemical storage, firewater and emergency isolation define the pathway from release to receptor. Inspection tests this chain rather than confirming that a labelled container exists. Waste indicators include generation per relevant activity, hazardous fraction, segregation quality, verified destination and prevention; recycling percentage alone can hide increased total generation or low-value routes.",
            "Planos de drenaje, válvulas, separadores, almacenamiento, agua contra incendios y aislamiento definen la ruta hasta el receptor. La inspección prueba la cadena, no solo que exista un recipiente etiquetado. Los indicadores incluyen generación por actividad, fracción peligrosa, segregación, destino y prevención; el porcentaje de reciclaje puede ocultar más generación total o rutas de bajo valor.",
          ),
        ],
      },
      {
        heading: t(
          "Energy systems and climate resilience",
          "Sistemas energéticos y resiliencia climática",
        ),
        paragraphs: [
          t(
            "Hangars, workshops, simulators, offices, chargers, compressed air and process equipment have different load shapes and resilience requirements. Sub-metering reveals baseload, peaks, simultaneous demand and abnormal consumption hidden by an annual invoice. Demand reduction, controls and scheduling are assessed before generation or storage is sized. Energy projects report actual metered savings, operating conditions and any shifted load.",
            "Hangares, talleres, simuladores, oficinas, cargadores, aire comprimido y procesos tienen perfiles y resiliencia distintos. La submedición revela base, picos, simultaneidad y consumos anómalos ocultos en la factura anual. Reducción, control y programación se evalúan antes de dimensionar generación o almacenamiento. Los proyectos informan ahorro medido, condiciones y cargas desplazadas.",
          ),
          t(
            "Climate resilience adds heat, intense rainfall, drought, wind, wildfire smoke, supply disruption and changing design conditions. Risk assessment connects hazard, exposure, vulnerability and consequence to mission-critical assets and environmental controls. Adaptation may include drainage capacity, cooling redundancy, water planning, protected storage, backup power and revised emergency procedures. Measures are tested for maladaptation, such as increased energy demand or new hazardous materials.",
            "La resiliencia añade calor, lluvia intensa, sequía, viento, humo, interrupción de suministros y cambios de diseño. El riesgo conecta peligro, exposición, vulnerabilidad y consecuencia con activos críticos y controles. La adaptación puede incluir drenaje, refrigeración redundante, agua, almacenamiento protegido, energía de respaldo y emergencias. Se comprueba mala adaptación, como más energía o nuevos materiales peligrosos.",
          ),
        ],
      },
    ],
  },
  {
    title: t(
      "Advanced briefing: decision analysis, assurance and credible reporting",
      "Profundización: análisis de decisión, aseguramiento y comunicación creíble",
    ),
    duration: "60 min",
    sections: [
      {
        heading: t(
          "Build a decision architecture",
          "Construir una arquitectura de decisión",
        ),
        paragraphs: [
          t(
            "The final dossier starts with a precise decision: owner, deadline, function, baseline, boundary and non-negotiable gates. Options include the present baseline, demand reduction, operational change, maintenance action, infrastructure change and technology substitution. Each option records maturity, dependencies, implementation rate, rebound risk and conditions under which benefit is expected. Compatible measures can be packaged rather than forcing a choice of one flagship technology.",
            "El expediente comienza con una decisión precisa: responsable, plazo, función, línea base, alcance y barreras. Las opciones incluyen situación actual, reducción de demanda, cambio operativo, mantenimiento, infraestructura y sustitución tecnológica. Cada opción registra madurez, dependencias, grado de implantación, rebote y condiciones del beneficio. Las medidas compatibles pueden combinarse sin forzar una única tecnología emblemática.",
          ),
          t(
            "Indicators retain physical units and uncertainty before normalisation. Weighting is a documented value judgement, not a mathematical fact. Thresholds and vetoes remain visible rather than disappearing inside an average score. Sensitivity analysis varies utilisation, lifetime, energy pathway, cost, implementation rate and other influential assumptions. A conditional recommendation states the trigger that would change the selected option.",
            "Los indicadores conservan unidades e incertidumbre antes de normalizar. La ponderación es un juicio documentado, no un hecho matemático. Umbrales y vetos permanecen visibles. La sensibilidad varía utilización, vida, energía, coste, implantación y otros supuestos influyentes. Una recomendación condicional declara el umbral que cambiaría la opción.",
          ),
        ],
      },
      {
        heading: t(
          "Implement through controlled trials",
          "Implantar mediante ensayos controlados",
        ),
        paragraphs: [
          t(
            "The implementation plan assigns owners, resources, milestones, configuration changes, competence, permits, supplier actions and acceptance criteria. A trial has a representative baseline, authorised procedure, sample size, monitoring method, safety stop, rollback plan and data-quality rule. Leading indicators show whether controls are installed and used; lagging indicators show environmental, readiness, cost and safety outcomes.",
            "El plan asigna responsables, recursos, hitos, configuración, competencia, permisos, proveedores y aceptación. Un ensayo tiene línea base representativa, procedimiento autorizado, muestra, seguimiento, parada de seguridad, reversión y regla de calidad. Indicadores adelantados muestran controles instalados y usados; los de resultado muestran efectos ambientales, disponibilidad, coste y seguridad.",
          ),
          t(
            "Scale-up depends on repeatability across configurations, seasons, sites and mission classes. Exceptions are analysed rather than averaged away. If uncertainty is high but the downside is controlled, a monitored pilot may be preferable to further desktop analysis; if consequences are severe or irreversible, stronger evidence is required before exposure. This is proportionate assurance, not innovation by slogan.",
            "El escalado depende de repetibilidad entre configuraciones, estaciones, centros y misiones. Las excepciones se analizan, no se promedian. Con incertidumbre alta y consecuencias controladas puede preferirse un piloto; con consecuencias graves o irreversibles se exige mayor evidencia. Es aseguramiento proporcionado, no innovación por eslogan.",
          ),
        ],
      },
      {
        heading: t(
          "EMS, audit and management review",
          "SGA, auditoría y revisión por la dirección",
        ),
        paragraphs: [
          t(
            "An environmental management system links context and significant aspects with obligations, objectives, controls, competence, emergency readiness, monitoring, audit, corrective action and management review. Significance methodology is consistent but not mechanically objective: criteria, thresholds and professional judgement are documented. Compliance evaluation is distinct from routine monitoring and uses an up-to-date legal and permit register with accountable owners.",
            "Un sistema de gestión conecta contexto y aspectos significativos con obligaciones, objetivos, controles, competencia, emergencias, seguimiento, auditoría, acción correctiva y revisión. La significancia es coherente pero no mecánicamente objetiva: se documentan criterios, umbrales y juicio. La evaluación de cumplimiento se distingue del seguimiento y usa registro legal y permisos actualizado con responsables.",
          ),
          t(
            "Audit samples implementation and tests effectiveness; a procedure's existence is not evidence that risk is controlled. Findings identify requirement, objective evidence and gap without prescribing an unsupported solution. Root-cause analysis addresses system causes, and closure verifies both implementation and effectiveness. Management review examines trends, resources, changing context, audit and compliance results, stakeholder concerns and whether objectives remain suitable.",
            "La auditoría muestrea implantación y eficacia; que exista un procedimiento no demuestra control. Los hallazgos identifican requisito, evidencia y brecha sin imponer soluciones sin base. La causa raíz aborda causas sistémicas y el cierre verifica implantación y eficacia. La revisión examina tendencias, recursos, contexto, auditorías, cumplimiento, partes interesadas y vigencia de objetivos.",
          ),
        ],
      },
      {
        heading: t(
          "Report at the strength of the evidence",
          "Comunicar con la fuerza de la evidencia",
        ),
        paragraphs: [
          t(
            "A credible decision brief states baseline, boundary, method, result, uncertainty, trade-offs and review date. Different audiences receive different depth, but numbers and caveats remain consistent. Claims are specific and attributable: what changed, where, during which period, compared with which baseline and verified by whom. Targets are not presented as achievements and a concept is not presented as an in-service capability.",
            "Una nota creíble declara línea base, alcance, método, resultado, incertidumbre, compensaciones y revisión. Cada audiencia recibe distinto detalle, pero cifras y salvedades son coherentes. Las afirmaciones son específicas: qué cambió, dónde, periodo, comparación y verificación. Los objetivos no se presentan como logros ni un concepto como capacidad en servicio.",
          ),
          t(
            "Limitations strengthen rather than weaken a well-designed claim. Saying that a result excludes embodied impact or non-CO2 effects prevents misinterpretation and directs the next study. Visuals follow the same rule: aircraft are shown in authentic operational settings, without leaves, pristine landscapes or other imagery that implies an overall environmental virtue not demonstrated by evidence.",
            "Las limitaciones fortalecen una afirmación bien diseñada. Indicar que se excluyen impactos incorporados o no CO2 evita interpretaciones y orienta el siguiente estudio. Las imágenes siguen la misma regla: aeronaves en contextos operativos auténticos, sin hojas, paisajes prístinos u otros recursos que impliquen una virtud ambiental global no demostrada.",
          ),
        ],
      },
    ],
  },
];
