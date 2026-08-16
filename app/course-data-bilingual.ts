export type LocalText = { en: string; es: string };
export type BilingualSection = {
  heading: LocalText;
  paragraphs?: LocalText[];
  body?: LocalText;
  bullets?: LocalText[];
};
export type BilingualLesson = {
  title: LocalText;
  duration: string;
  lead: LocalText;
  sections: BilingualSection[];
};
export type BilingualQuestion = {
  q: LocalText;
  options: LocalText[];
  answer: number;
  feedback: LocalText;
};
export type BilingualModule = {
  id: number;
  title: LocalText;
  shortTitle?: LocalText;
  image: string;
  imageAlt?: LocalText;
  promise?: LocalText;
  subtitle?: LocalText;
  duration?: string;
  lessons: BilingualLesson[];
  lab: { title: LocalText; brief: LocalText; fields: LocalText[] };
  questions: BilingualQuestion[];
};

const t = (en: string, es: string): LocalText => ({ en, es });

export const bilingualModules: BilingualModule[] = [
  {
    id: 1,
    title: t(
      "The aviation system and the engineering challenge",
      "El sistema aeronáutico y el reto de la ingeniería",
    ),
    shortTitle: t("System challenge", "Reto sistémico"),
    image: "/course/unique/module1-a400m-systems-team.png",
    imageAlt: t(
      "A400M maintenance team reviewing operational and environmental performance evidence in a hangar",
      "Equipo de mantenimiento de A400M revisando evidencias de desempeño operativo y ambiental en un hangar",
    ),
    promise: t(
      "Frame environmental performance as a system outcome before selecting a technology or metric.",
      "Interpretar el desempeño ambiental como el resultado de un sistema antes de seleccionar una tecnología o un indicador.",
    ),
    lessons: [
      {
        title: t(
          "Aviation provides services and creates pressures",
          "La aviación presta servicios y genera presiones",
        ),
        duration: "30 min",
        lead: t(
          "Engineering Sustainable Air Power begins with the service required, not with a preferred technology or a green label.",
          "Engineering Sustainable Air Power comienza por el servicio que debe prestarse, no por una tecnología preferida ni por una etiqueta ambiental.",
        ),
        sections: [
          {
            heading: t("Start with the service", "Empezar por el servicio"),
            paragraphs: [
              t(
                "Aviation connects people, transports critical material, supports security and provides time-sensitive capability. Air Power adds mission readiness, sovereignty, humanitarian support and operational resilience. These outcomes matter, but they do not remove the physical pressures created by fuel production and combustion, high-altitude emissions, noise, land occupation, energy demand, maintenance, water use, hazardous substances and material consumption.",
                "La aviación conecta personas, transporta material crítico, contribuye a la seguridad y proporciona capacidades sujetas a plazos exigentes. Air Power añade disponibilidad para la misión, soberanía, apoyo humanitario y resiliencia operativa. Estos resultados son importantes, pero no eliminan las presiones físicas asociadas a la producción y combustión de combustible, las emisiones en altitud, el ruido, la ocupación del suelo, la demanda energética, el mantenimiento, el consumo de agua, las sustancias peligrosas y el uso de materiales.",
              ),
              t(
                "A meaningful assessment therefore defines the service before comparing alternatives. A flight, an aircraft or a litre of fuel is not always an adequate functional unit. Depending on the decision, the unit may be a completed mission of a defined class, a tonne-kilometre of payload, an available aircraft-hour, a training outcome or a supported fleet over a specified period. The unit must preserve the purpose of the activity and prevent an apparently efficient option from succeeding only because it provides less service.",
                "Por ello, una evaluación rigurosa define el servicio antes de comparar alternativas. Un vuelo, una aeronave o un litro de combustible no siempre constituyen una unidad funcional adecuada. Según la decisión, la unidad puede ser una misión completada de una categoría definida, una tonelada-kilómetro de carga útil, una hora de aeronave disponible, un resultado formativo o una flota respaldada durante un periodo concreto. La unidad debe conservar la finalidad de la actividad y evitar que una opción parezca eficiente únicamente porque proporciona menos servicio.",
              ),
            ],
            bullets: [
              t(
                "Define the required outcome.",
                "Definir el resultado requerido.",
              ),
              t(
                "Set the mission and time boundary.",
                "Establecer el alcance de la misión y el horizonte temporal.",
              ),
              t(
                "Identify mandatory safety, security and readiness gates.",
                "Identificar los requisitos obligatorios de seguridad, protección y disponibilidad.",
              ),
              t(
                "Select absolute and intensity indicators together.",
                "Seleccionar conjuntamente indicadores absolutos y de intensidad.",
              ),
            ],
          },
          {
            heading: t(
              "One activity, several mechanisms",
              "Una actividad, varios mecanismos",
            ),
            paragraphs: [
              t(
                "Fuel burn produces carbon dioxide in proportion to the carbon oxidised. It also produces water vapour, nitrogen oxides and particles, while flight conditions can enable contrails and induced cloudiness. Near a base, engines, auxiliary power units, ground vehicles, heating plant and road traffic contribute to a shared airshed. Propulsion, aerodynamic flow, landing gear, ground running and support equipment contribute to the acoustic environment. These mechanisms differ in location, persistence and the people or ecosystems exposed.",
                "La combustión de combustible produce dióxido de carbono en proporción al carbono oxidado. También genera vapor de agua, óxidos de nitrógeno y partículas, mientras que determinadas condiciones de vuelo pueden favorecer la formación de estelas y nubosidad inducida. En el entorno de una base, los motores, las unidades de potencia auxiliar, los vehículos terrestres, las instalaciones térmicas y el tráfico viario contribuyen a una misma cuenca atmosférica. La propulsión, el flujo aerodinámico, el tren de aterrizaje, las pruebas en tierra y los equipos de apoyo forman parte del entorno acústico. Estos mecanismos difieren en su localización, persistencia y en las personas o ecosistemas expuestos.",
              ),
              t(
                "Combining all effects into one score can support screening, but it can also hide trade-offs. A lighter component may reduce operational fuel while requiring energy-intensive production. A noise procedure may redistribute exposure or add track miles. A longer component life can prevent material demand but may require additional inspection. Good engineering keeps the mechanisms visible long enough to understand causality before aggregation.",
                "Combinar todos los efectos en una única puntuación puede servir para una evaluación preliminar, pero también puede ocultar compensaciones. Un componente más ligero puede reducir el combustible en operación y, al mismo tiempo, requerir una fabricación intensiva en energía. Un procedimiento acústico puede redistribuir la exposición o añadir distancia de vuelo. Una vida útil más larga puede evitar el consumo de materiales, aunque exija inspecciones adicionales. Una buena práctica de ingeniería mantiene visibles los mecanismos hasta comprender su causalidad antes de agregarlos.",
              ),
            ],
          },
          {
            heading: t(
              "Efficiency is not the same as total impact",
              "La eficiencia no equivale al impacto total",
            ),
            paragraphs: [
              t(
                "An aircraft or operation can use less fuel per unit of service while total fuel use increases because activity, payload, distance or readiness requirements grow. Intensity answers how efficiently a service is delivered; absolute indicators describe the total pressure within the defined boundary. Both are necessary. Reporting only the improving indicator creates an incomplete impression and can become greenwashing even when the number itself is correct.",
                "Una aeronave o una operación pueden consumir menos combustible por unidad de servicio mientras el consumo total aumenta debido al crecimiento de la actividad, la carga útil, la distancia o las necesidades de disponibilidad. La intensidad indica con qué eficiencia se presta el servicio; los indicadores absolutos describen la presión total dentro del alcance definido. Ambos son necesarios. Comunicar únicamente el indicador que mejora genera una impresión incompleta y puede constituir greenwashing, aunque el dato aislado sea correcto.",
              ),
              t(
                "The same discipline applies to targets. A percentage reduction needs a baseline year, organisational and life-cycle boundary, calculation method, treatment of changes in activity and explanation of excluded effects. A technical improvement is evidence of progress within its scope, not proof that an aircraft, mission or organisation is sustainable as a whole.",
                "La misma disciplina se aplica a los objetivos. Una reducción porcentual necesita un año base, un alcance organizativo y de ciclo de vida, un método de cálculo, un tratamiento de los cambios de actividad y una explicación de los efectos excluidos. Una mejora técnica demuestra progreso dentro de su alcance; no prueba que una aeronave, una misión o una organización sean sostenibles en su conjunto.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Build a causal environmental model",
          "Construir un modelo causal ambiental",
        ),
        duration: "35 min",
        lead: t(
          "A defensible decision connects an intervention to physical changes, operational conditions and measured outcomes.",
          "Una decisión defendible conecta la intervención con los cambios físicos, las condiciones operativas y los resultados medidos.",
        ),
        sections: [
          {
            heading: t(
              "Activity, aspect, pathway and receptor",
              "Actividad, aspecto, vía y receptor",
            ),
            paragraphs: [
              t(
                "A causal model begins with the activity: for example an A400M engine ground run, component repair or mission sortie. The environmental aspect is the element that interacts with the environment, such as fuel combustion, sound energy, solvent use or wastewater discharge. The pathway explains how the pressure moves or transforms. The receptor may be the climate system, a worker, a neighbouring community, surface water, soil or a protected habitat.",
                "Un modelo causal comienza con la actividad: por ejemplo, una prueba de motores de un A400M, la reparación de un componente o una salida operativa. El aspecto ambiental es el elemento que interactúa con el medio, como la combustión de combustible, la energía acústica, el uso de disolventes o el vertido de aguas residuales. La vía explica cómo se desplaza o transforma la presión. El receptor puede ser el sistema climático, una persona trabajadora, una comunidad próxima, las aguas superficiales, el suelo o un hábitat protegido.",
              ),
              t(
                "This structure prevents category errors. Fuel consumed is an activity input, not a climate outcome. Nitrogen oxides are emissions, while ambient nitrogen dioxide concentration is affected by chemistry and dispersion. Sound power at source differs from the level experienced at a school or dwelling. A recycling rate does not by itself describe avoided virgin material, residual hazards or the destination of composite fractions.",
                "Esta estructura evita errores de categoría. El combustible consumido es una entrada de la actividad, no un resultado climático. Los óxidos de nitrógeno son emisiones, mientras que la concentración ambiental de dióxido de nitrógeno depende también de la química atmosférica y la dispersión. La potencia acústica de una fuente no equivale al nivel experimentado en una escuela o una vivienda. Una tasa de reciclaje no describe por sí sola el material virgen evitado, los peligros residuales ni el destino de las fracciones de composite.",
              ),
            ],
          },
          {
            heading: t(
              "Use a credible counterfactual",
              "Utilizar un contrafactual creíble",
            ),
            paragraphs: [
              t(
                "Improvement means a difference from what would otherwise have happened. The comparison may be a validated baseline, a matched set of missions, an approved standard process or a model calibrated with operational data. It must account for material confounders such as payload, route, weather, aircraft configuration, engine condition, queueing, training objective and reserve policy.",
                "Una mejora representa la diferencia respecto a lo que habría ocurrido sin la intervención. La comparación puede utilizar una línea base validada, un conjunto de misiones emparejadas, un proceso estándar aprobado o un modelo calibrado con datos operativos. Debe considerar variables de confusión relevantes como la carga útil, la ruta, la meteorología, la configuración de la aeronave, el estado del motor, las esperas, el objetivo formativo y la política de reservas.",
              ),
              t(
                "Before-and-after charts are weak when operating conditions changed at the same time. Stronger designs use matched cases, normalisation, sensitivity analysis and independent review of data quality. The objective is not to create false laboratory precision, but to expose what the evidence can and cannot support.",
                "Las comparaciones simples antes-después son débiles cuando las condiciones operativas también han cambiado. Los diseños más robustos emplean casos emparejados, normalización, análisis de sensibilidad y revisión independiente de la calidad de los datos. El objetivo no es crear una falsa precisión de laboratorio, sino mostrar qué puede y qué no puede respaldar la evidencia.",
              ),
            ],
            bullets: [
              t(
                "State the intervention and expected mechanism.",
                "Definir la intervención y el mecanismo esperado.",
              ),
              t("Define the reference case.", "Definir el caso de referencia."),
              t(
                "Control or disclose confounding variables.",
                "Controlar o declarar las variables de confusión.",
              ),
              t(
                "Measure implementation as well as outcome.",
                "Medir tanto la implantación como el resultado.",
              ),
              t(
                "Test for displacement and rebound.",
                "Comprobar el desplazamiento de impactos y el efecto rebote.",
              ),
            ],
          },
          {
            heading: t(
              "Interdependencies are engineering information",
              "Las interdependencias son información de ingeniería",
            ),
            paragraphs: [
              t(
                "A trade-off is not an excuse for inaction. It is information needed to design a better option. The decision record should show which impacts improve, which may worsen, who experiences the change, the time horizon and whether mandatory constraints have been met. Multi-criteria analysis can make these dimensions explicit without pretending they are perfectly interchangeable.",
                "Una compensación no es una excusa para no actuar, sino información necesaria para diseñar una opción mejor. El registro de decisión debe mostrar qué impactos mejoran, cuáles pueden empeorar, quién experimenta el cambio, cuál es el horizonte temporal y si se cumplen las restricciones obligatorias. El análisis multicriterio permite hacer explícitas estas dimensiones sin fingir que son perfectamente intercambiables.",
              ),
              t(
                "For Air Power, safety, security, airworthiness and mission capability are decision gates rather than environmental weights that can simply be traded away. Once feasible alternatives pass those gates, environmental performance, cost, resilience and implementation risk can be compared transparently.",
                "En Air Power, la seguridad, la protección, la aeronavegabilidad y la capacidad de misión son requisitos de viabilidad, no ponderaciones ambientales que puedan compensarse sin más. Una vez que las alternativas viables superan esos requisitos, pueden compararse de forma transparente el desempeño ambiental, el coste, la resiliencia y el riesgo de implantación.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Evidence, uncertainty and responsible claims",
          "Evidencia, incertidumbre y afirmaciones responsables",
        ),
        duration: "30 min",
        lead: t(
          "Engineering evidence becomes useful only when its boundary and uncertainty survive the journey into a decision or public statement.",
          "La evidencia de ingeniería solo resulta útil cuando su alcance y su incertidumbre se mantienen intactos al trasladarse a una decisión o comunicación.",
        ),
        sections: [
          {
            heading: t(
              "Create an evidence chain",
              "Crear una cadena de evidencias",
            ),
            paragraphs: [
              t(
                "A robust evidence chain links the original data, ownership, units, quality controls, calculation method, assumptions, result, review and approved statement. Each transformation should be reproducible. Automated dashboards do not remove the need to understand sensor calibration, missing data, conversion factors, model versions or manual adjustments.",
                "Una cadena de evidencias robusta conecta los datos originales, su responsable, las unidades, los controles de calidad, el método de cálculo, los supuestos, el resultado, la revisión y la afirmación aprobada. Cada transformación debe ser reproducible. Los paneles automatizados no eliminan la necesidad de comprender la calibración de sensores, los datos ausentes, los factores de conversión, las versiones de los modelos o los ajustes manuales.",
              ),
              t(
                "Uncertainty can arise from measurement, sampling, model structure, future scenarios and incomplete knowledge. It should influence both the decision and the language used to describe it. A result can remain decision-useful without being exact, provided the uncertainty range cannot plausibly reverse the conclusion or the residual risk is managed.",
                "La incertidumbre puede proceder de la medición, el muestreo, la estructura del modelo, los escenarios futuros y el conocimiento incompleto. Debe influir tanto en la decisión como en el lenguaje utilizado para describirla. Un resultado puede seguir siendo útil sin ser exacto, siempre que el rango de incertidumbre no pueda invertir razonablemente la conclusión o que el riesgo residual esté gestionado.",
              ),
            ],
          },
          {
            heading: t(
              "Separate reduction, avoidance and compensation",
              "Diferenciar reducción, evitación y compensación",
            ),
            paragraphs: [
              t(
                "A reduction lowers an impact inside the stated boundary relative to a reference. Avoidance describes a scenario that did not occur and depends heavily on the counterfactual. Compensation uses an action outside the source activity and does not erase the original emission or exposure. These terms should not be used interchangeably.",
                "Una reducción disminuye un impacto dentro del alcance declarado respecto a una referencia. La evitación describe un escenario que no llegó a producirse y depende en gran medida del contrafactual. La compensación utiliza una actuación ajena a la actividad de origen y no elimina la emisión o exposición original. Estos términos no deben utilizarse como sinónimos.",
              ),
              t(
                "Likewise, direct combustion emissions, well-to-tank effects, full life-cycle results and non-CO₂ mechanisms are different boundaries. A claim about one must not imply conclusions about all. Statements such as green flight, clean aircraft or zero-impact maintenance are too broad unless every reasonable interpretation is substantiated—which is rarely possible.",
                "Del mismo modo, las emisiones directas de combustión, los efectos desde la producción hasta el suministro del combustible, los resultados de ciclo de vida completo y los mecanismos distintos del CO₂ corresponden a alcances diferentes. Una afirmación sobre uno de ellos no debe sugerir conclusiones sobre todos. Expresiones como vuelo verde, aeronave limpia o mantenimiento sin impacto son demasiado amplias salvo que pueda demostrarse cada interpretación razonable, algo muy poco habitual.",
              ),
            ],
          },
          {
            heading: t(
              "The reasonable-audience test",
              "La prueba de la audiencia razonable",
            ),
            paragraphs: [
              t(
                "Before release, ask what a reasonable non-specialist would understand from the whole communication, including imagery, colours, headings and omissions. Then compare that impression with the evidence. A technically true footnote does not repair a misleading headline. A positive percentage should not conceal an adverse absolute trend or a material limitation.",
                "Antes de publicar, hay que preguntarse qué entendería una persona razonable no especialista de la comunicación completa, incluidas las imágenes, los colores, los titulares y las omisiones. Después debe compararse esa impresión con la evidencia. Una nota técnicamente correcta no corrige un titular engañoso. Un porcentaje favorable no debe ocultar una evolución absoluta adversa ni una limitación material.",
              ),
              t(
                "A defensible statement names the intervention, metric, boundary, baseline, period, verified result and relevant limitation. It is narrower than marketing language, but far more useful for engineering governance and organisational learning.",
                "Una afirmación defendible identifica la intervención, el indicador, el alcance, la línea base, el periodo, el resultado verificado y la limitación relevante. Es más concreta que el lenguaje promocional, pero resulta mucho más útil para la gobernanza de ingeniería y el aprendizaje organizativo.",
              ),
            ],
          },
        ],
      },
    ],
    lab: {
      title: t("Mission system map", "Mapa sistémico de la misión"),
      brief: t(
        "Map one A400M or Eurofighter service activity from required outcome to environmental mechanisms, receptors, evidence and decision gates.",
        "Representar una actividad de servicio del A400M o Eurofighter desde el resultado requerido hasta los mecanismos ambientales, los receptores, las evidencias y los requisitos de decisión.",
      ),
      fields: [
        t(
          "Required service and mission class",
          "Servicio requerido y categoría de misión",
        ),
        t(
          "System and life-cycle boundary",
          "Alcance del sistema y del ciclo de vida",
        ),
        t(
          "Activities and material inputs",
          "Actividades y entradas materiales",
        ),
        t(
          "Environmental aspects and physical pathways",
          "Aspectos ambientales y vías físicas",
        ),
        t(
          "Receptors and distribution of impact",
          "Receptores y distribución del impacto",
        ),
        t(
          "Absolute and intensity indicators",
          "Indicadores absolutos y de intensidad",
        ),
        t(
          "Reference case and confounders",
          "Caso de referencia y variables de confusión",
        ),
        t(
          "Safety, airworthiness, security and readiness gates",
          "Requisitos de seguridad, aeronavegabilidad, protección y disponibilidad",
        ),
        t(
          "Potential trade-offs or rebound",
          "Posibles compensaciones o efecto rebote",
        ),
        t(
          "Evidence-bounded conclusion",
          "Conclusión limitada por la evidencia",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "Why can environmental intensity improve while total impact increases?",
          "¿Por qué puede mejorar la intensidad ambiental mientras aumenta el impacto total?",
        ),
        options: [
          t(
            "The units are always wrong",
            "Las unidades siempre son incorrectas",
          ),
          t(
            "Activity can grow faster than efficiency improves",
            "La actividad puede crecer más rápido de lo que mejora la eficiencia",
          ),
          t(
            "Only indirect impacts change",
            "Solo cambian los impactos indirectos",
          ),
          t(
            "Intensity already includes every life-cycle effect",
            "La intensidad ya incluye todos los efectos del ciclo de vida",
          ),
        ],
        answer: 1,
        feedback: t(
          "Intensity describes impact per unit of service. Total pressure can still rise when activity grows faster than unit efficiency improves.",
          "La intensidad describe el impacto por unidad de servicio. La presión total puede aumentar si la actividad crece más rápido que la mejora de la eficiencia unitaria.",
        ),
      },
      {
        q: t(
          "Which is the strongest functional unit for comparing two mission alternatives?",
          "¿Cuál es la unidad funcional más sólida para comparar dos alternativas de misión?",
        ),
        options: [
          t("One aircraft", "Una aeronave"),
          t("One litre of fuel", "Un litro de combustible"),
          t(
            "A completed, defined mission outcome",
            "Un resultado de misión completado y definido",
          ),
          t("One maintenance invoice", "Una factura de mantenimiento"),
        ],
        answer: 2,
        feedback: t(
          "The functional unit should preserve the service being compared and define its operational conditions.",
          "La unidad funcional debe conservar el servicio comparado y definir sus condiciones operativas.",
        ),
      },
      {
        q: t("What is a counterfactual?", "¿Qué es un contrafactual?"),
        options: [
          t("A future target", "Un objetivo futuro"),
          t(
            "What would probably have happened without the intervention",
            "Lo que probablemente habría ocurrido sin la intervención",
          ),
          t("A legal threshold", "Un límite legal"),
          t("A communication channel", "Un canal de comunicación"),
        ],
        answer: 1,
        feedback: t(
          "Causal improvement is estimated against a credible reference scenario, not simply the previous calendar period.",
          "La mejora causal se estima respecto a un escenario de referencia creíble, no simplemente frente al periodo anterior.",
        ),
      },
      {
        q: t(
          "Which statement is most defensible?",
          "¿Qué afirmación es más defendible?",
        ),
        options: [
          t("This is a green mission", "Esta es una misión verde"),
          t("The aircraft is sustainable", "La aeronave es sostenible"),
          t(
            "Matched missions used 3.8% less fuel within the stated boundary; non-CO₂ effects were not quantified",
            "Las misiones emparejadas consumieron un 3,8 % menos de combustible dentro del alcance declarado; no se cuantificaron los efectos distintos del CO₂",
          ),
          t(
            "The operation has zero environmental impact",
            "La operación tiene impacto ambiental cero",
          ),
        ],
        answer: 2,
        feedback: t(
          "It specifies the comparison, metric and limitation without generalising the result.",
          "Especifica la comparación, el indicador y la limitación sin generalizar el resultado.",
        ),
      },
      {
        q: t(
          "How should mandatory mission and safety requirements be treated?",
          "¿Cómo deben tratarse los requisitos obligatorios de misión y seguridad?",
        ),
        options: [
          t(
            "As optional environmental weights",
            "Como ponderaciones ambientales opcionales",
          ),
          t(
            "As decision gates before feasible alternatives are compared",
            "Como requisitos de viabilidad antes de comparar las alternativas",
          ),
          t("As impacts to be ignored", "Como impactos que deben ignorarse"),
          t(
            "As proof that no environmental improvement is possible",
            "Como prueba de que no es posible ninguna mejora ambiental",
          ),
        ],
        answer: 1,
        feedback: t(
          "Mandatory requirements define feasibility. Environmental comparison then distinguishes the viable alternatives.",
          "Los requisitos obligatorios determinan la viabilidad. La comparación ambiental permite después distinguir entre las alternativas viables.",
        ),
      },
    ],
  },
  {
    id: 2,
    title: t(
      "Flight physics and energy-efficient performance",
      "Física del vuelo y rendimiento energéticamente eficiente",
    ),
    shortTitle: t("Flight performance", "Rendimiento de vuelo"),
    image: "/course/unique/module2-a400m-flight-efficiency.png",
    imageAlt: t(
      "A400M in flight illustrating mission planning, altitude, routing and atmospheric conditions",
      "A400M en vuelo que ilustra la planificación de la misión, la altitud, la ruta y las condiciones atmosféricas",
    ),
    promise: t(
      "Connect lift, drag, thrust, mass and speed to fuel use without turning an aerodynamic optimum into an unsafe operating instruction.",
      "Relacionar sustentación, resistencia, empuje, masa y velocidad con el consumo de combustible sin convertir un óptimo aerodinámico en una instrucción operativa insegura.",
    ),
    lessons: [
      {
        title: t(
          "Lift, weight and the cost of carrying mass",
          "Sustentación, peso y coste de transportar masa",
        ),
        duration: "40 min",
        lead: t(
          "An aircraft remains airborne by generating aerodynamic force; the energy required depends on how that force is produced across the mission.",
          "Una aeronave se mantiene en vuelo generando fuerza aerodinámica; la energía necesaria depende de cómo se produce esa fuerza durante toda la misión.",
        ),
        sections: [
          {
            heading: t(
              "Lift is a pressure outcome",
              "La sustentación es el resultado de una distribución de presiones",
            ),
            paragraphs: [
              t(
                "Lift results from the integrated pressure and shear distribution around the aircraft. In steady level flight it balances weight, but manoeuvre, climb and acceleration change the required force. The lift equation links air density, true airspeed, wing area and lift coefficient. It is a model, not a statement that one variable can be changed independently of the others.",
                "La sustentación resulta de integrar la distribución de presiones y esfuerzos cortantes alrededor de la aeronave. En vuelo recto y nivelado estabilizado equilibra el peso, pero las maniobras, el ascenso y la aceleración modifican la fuerza necesaria. La ecuación de sustentación relaciona la densidad del aire, la velocidad verdadera, la superficie alar y el coeficiente de sustentación. Es un modelo, no una indicación de que una variable pueda modificarse independientemente de las demás.",
              ),
              t(
                "Angle of attack changes lift coefficient until flow separation reduces lift and increases drag. Operational margins, gusts, icing, configuration and control requirements therefore matter. An environmental recommendation that targets a theoretical coefficient without respecting approved envelopes is not an operational measure.",
                "El ángulo de ataque modifica el coeficiente de sustentación hasta que la separación del flujo reduce la sustentación y aumenta la resistencia. Por ello son importantes los márgenes operativos, las ráfagas, la formación de hielo, la configuración y las necesidades de control. Una recomendación ambiental que persigue un coeficiente teórico sin respetar las envolventes aprobadas no constituye una medida operativa válida.",
              ),
            ],
          },
          {
            heading: t(
              "Mass affects more than one phase",
              "La masa afecta a más de una fase",
            ),
            paragraphs: [
              t(
                "Additional mass increases the lift required, normally raising induced drag and fuel burn. It can also influence take-off distance, climb, altitude capability, reserve requirements and landing constraints. Avoided mass may create recurring operational savings, but the engineering case must include the function, reliability and life-cycle consequences of the removed or redesigned item.",
                "Una masa adicional incrementa la sustentación requerida y normalmente eleva la resistencia inducida y el consumo de combustible. También puede influir en la distancia de despegue, el ascenso, la capacidad de alcanzar altitud, las necesidades de reserva y las limitaciones de aterrizaje. La masa evitada puede generar ahorros operativos recurrentes, pero el análisis de ingeniería debe incluir la función, la fiabilidad y las consecuencias de ciclo de vida del elemento eliminado o rediseñado.",
              ),
              t(
                "Payload is the service in many missions and must not be treated as avoidable inefficiency. The correct question is which non-value-adding mass, contingency or process choice can be changed while preserving the defined mission and approved safety margin.",
                "En muchas misiones, la carga útil constituye el propio servicio y no debe tratarse como una ineficiencia evitable. La pregunta correcta es qué masa sin valor añadido, contingencia o elección de proceso puede modificarse manteniendo la misión definida y el margen de seguridad aprobado.",
              ),
            ],
          },
          {
            heading: t(
              "Altitude changes the operating point",
              "La altitud modifica el punto de operación",
            ),
            paragraphs: [
              t(
                "Air density decreases with altitude. To generate the same lift, an aircraft must change true airspeed, lift coefficient or both. Engine performance, compressibility, weather, contrail conditions and airspace constraints also change. The most fuel-efficient altitude is therefore mission-specific and evolves as mass decreases during flight.",
                "La densidad del aire disminuye con la altitud. Para generar la misma sustentación, la aeronave debe modificar la velocidad verdadera, el coeficiente de sustentación o ambos. También cambian el rendimiento del motor, los efectos de compresibilidad, la meteorología, las condiciones de formación de estelas y las restricciones del espacio aéreo. Por tanto, la altitud de mayor eficiencia de combustible depende de la misión y evoluciona a medida que disminuye la masa durante el vuelo.",
              ),
              t(
                "Step climbs and flight-level selection illustrate the gap between an unconstrained optimum and an achievable trajectory. Air traffic restrictions, threat environment, turbulence, training requirements and diversion capability can dominate the theoretical solution.",
                "Los ascensos escalonados y la selección del nivel de vuelo ilustran la diferencia entre un óptimo sin restricciones y una trayectoria realizable. Las limitaciones del tráfico aéreo, el entorno de amenaza, la turbulencia, los requisitos de entrenamiento y la capacidad de desvío pueden prevalecer sobre la solución teórica.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Drag, thrust and aerodynamic efficiency",
          "Resistencia, empuje y eficiencia aerodinámica",
        ),
        duration: "45 min",
        lead: t(
          "Drag is not one phenomenon: its components respond differently to speed, lift, configuration and surface condition.",
          "La resistencia no es un fenómeno único: sus componentes responden de manera diferente a la velocidad, la sustentación, la configuración y el estado de las superficies.",
        ),
        sections: [
          {
            heading: t(
              "Parasite and induced drag",
              "Resistencia parásita y resistencia inducida",
            ),
            paragraphs: [
              t(
                "Parasite drag includes form, skin-friction and interference effects and generally grows strongly with speed. Induced drag is the aerodynamic cost of generating lift with a finite wing and is most important at high lift coefficient. Their combination creates a minimum-drag condition and a maximum lift-to-drag ratio.",
                "La resistencia parásita comprende los efectos de forma, fricción superficial e interferencia y, por lo general, aumenta intensamente con la velocidad. La resistencia inducida es el coste aerodinámico de generar sustentación con un ala finita y adquiere especial importancia cuando el coeficiente de sustentación es elevado. La combinación de ambas produce una condición de resistencia mínima y una relación sustentación-resistencia máxima.",
              ),
              t(
                "The drag polar provides a compact engineering representation, often expressed as a zero-lift term plus a lift-dependent term. Real aircraft depart from the simplest curve through compressibility, configuration changes, external stores, damage, contamination and Reynolds-number effects. Data provenance matters before a theoretical relationship is used for an operational estimate.",
                "La polar de resistencia proporciona una representación compacta de ingeniería que suele expresarse mediante un término de resistencia a sustentación nula y otro dependiente de la sustentación. Las aeronaves reales se apartan de la curva más sencilla debido a la compresibilidad, los cambios de configuración, las cargas externas, los daños, la contaminación de superficies y los efectos del número de Reynolds. Es necesario conocer la procedencia de los datos antes de utilizar una relación teórica para realizar una estimación operativa.",
              ),
            ],
          },
          {
            heading: t(
              "Configuration is an environmental variable",
              "La configuración es una variable ambiental",
            ),
            paragraphs: [
              t(
                "Flaps, slats, landing gear, open doors and external equipment enable essential functions but increase drag and often noise. Delaying or advancing configuration can change fuel and acoustic exposure, yet procedures must remain compatible with stabilised-approach criteria, workload, terrain, weather and approved flight manuals.",
                "Los flaps, slats, el tren de aterrizaje, las puertas abiertas y los equipos externos permiten realizar funciones esenciales, pero incrementan la resistencia y, con frecuencia, el ruido. Adelantar o retrasar la configuración puede modificar el consumo y la exposición acústica, aunque los procedimientos deben seguir siendo compatibles con los criterios de aproximación estabilizada, la carga de trabajo, el terreno, la meteorología y los manuales de vuelo aprobados.",
              ),
              t(
                "Surface finish, seal condition, alignment and repairs can also affect aerodynamic performance. Maintenance quality is therefore linked to energy performance, but claimed savings require evidence at fleet scale and must not encourage deferral of safety-related work.",
                "El acabado superficial, el estado de los sellados, la alineación y las reparaciones también pueden afectar al rendimiento aerodinámico. Por tanto, la calidad del mantenimiento está relacionada con el desempeño energético, pero cualquier ahorro declarado requiere evidencias a escala de flota y nunca debe incentivar el aplazamiento de trabajos vinculados con la seguridad.",
              ),
            ],
          },
          {
            heading: t(
              "Thrust meets drag through efficiency",
              "El empuje equilibra la resistencia mediante la eficiencia",
            ),
            paragraphs: [
              t(
                "In steady flight thrust balances drag; during acceleration or climb it must also provide excess force or power. Propulsive efficiency describes how effectively input energy becomes useful aircraft motion. A high component efficiency at one design point does not guarantee low mission fuel when installation losses, off-design operation, mass and thermal constraints are included.",
                "En vuelo estabilizado, el empuje equilibra la resistencia; durante la aceleración o el ascenso también debe proporcionar fuerza o potencia excedente. La eficiencia propulsiva describe con qué eficacia la energía de entrada se convierte en movimiento útil de la aeronave. Una elevada eficiencia de un componente en un punto de diseño no garantiza un bajo consumo de misión cuando se incluyen las pérdidas de instalación, la operación fuera de diseño, la masa y las restricciones térmicas.",
              ),
              t(
                "The engineering objective is mission energy, not the isolated peak efficiency of a wing, propulsor or engine. Integration and operating schedule determine whether component gains survive at aircraft level.",
                "El objetivo de ingeniería es la energía consumida por la misión, no la eficiencia máxima aislada de un ala, un propulsor o un motor. La integración y el régimen de operación determinan si las mejoras de los componentes se mantienen a escala de aeronave.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Best performance versus feasible performance",
          "Rendimiento óptimo frente a rendimiento viable",
        ),
        duration: "45 min",
        lead: t(
          "Maximum range, endurance, climb and low noise occur at different operating points and answer different mission questions.",
          "El alcance máximo, la autonomía, el ascenso y el menor ruido se producen en puntos de operación diferentes y responden a necesidades de misión distintas.",
        ),
        sections: [
          {
            heading: t(
              "There is no single best speed",
              "No existe una única velocidad óptima",
            ),
            paragraphs: [
              t(
                "Maximum lift-to-drag ratio identifies an aerodynamic condition, but propeller and jet aircraft translate it differently into range and endurance performance. Wind, altitude, reserve policy and mission task alter the result. A speed that maximises still-air range may not minimise time, exposure, cost or total mission fuel.",
                "La relación máxima entre sustentación y resistencia identifica una condición aerodinámica, pero las aeronaves de hélice y las de reacción la convierten de forma diferente en prestaciones de alcance y autonomía. El viento, la altitud, la política de reservas y la tarea de la misión modifican el resultado. Una velocidad que maximiza el alcance en aire en calma puede no minimizar el tiempo, la exposición, el coste o el combustible total de la misión.",
              ),
              t(
                "Operational documentation already embeds airworthiness analysis and margins. Sustainability work should identify avoidable deviation and support authorised optimisation, not invent cockpit guidance from simplified equations.",
                "La documentación operativa ya incorpora los análisis y márgenes de aeronavegabilidad. El trabajo de sostenibilidad debe identificar desviaciones evitables y apoyar una optimización autorizada, no inventar instrucciones de cabina a partir de ecuaciones simplificadas.",
              ),
            ],
          },
          {
            heading: t(
              "Normalise mission comparisons",
              "Normalizar las comparaciones entre misiones",
            ),
            paragraphs: [
              t(
                "Fuel per sortie is meaningful only when missions are sufficiently comparable. Payload, external configuration, route, altitude, temperature, wind, holding, training events, engine condition and fuel policy can dominate the difference. Matched cohorts and regression models can improve attribution, provided assumptions and data quality are transparent.",
                "El combustible por salida solo resulta significativo cuando las misiones son suficientemente comparables. La carga útil, la configuración externa, la ruta, la altitud, la temperatura, el viento, las esperas, los ejercicios de entrenamiento, el estado del motor y la política de combustible pueden dominar la diferencia. Las cohortes emparejadas y los modelos de regresión pueden mejorar la atribución siempre que los supuestos y la calidad de los datos sean transparentes.",
              ),
              t(
                "A useful dashboard shows both actual fuel and modelled expectation, together with the reasons for operational deviation. It supports learning rather than ranking crews for conditions they do not control.",
                "Un panel útil muestra tanto el combustible real como el valor esperado por el modelo, junto con las causas de la desviación operativa. Su finalidad es favorecer el aprendizaje, no clasificar a las tripulaciones por condiciones que no controlan.",
              ),
            ],
          },
          {
            heading: t("From optimum to decision", "Del óptimo a la decisión"),
            paragraphs: [
              t(
                "The workflow is to define the required mission, construct the feasible envelope, model candidate changes, test sensitivity, conduct safety and operational review, trial under controlled conditions and monitor physical outcomes. A benefit that disappears under representative conditions should not be scaled or claimed.",
                "El proceso consiste en definir la misión requerida, construir la envolvente viable, modelizar los posibles cambios, analizar la sensibilidad, realizar la revisión operativa y de seguridad, probar la medida en condiciones controladas y supervisar los resultados físicos. Un beneficio que desaparece en condiciones representativas no debe ampliarse ni comunicarse como logro.",
              ),
              t(
                "Rebound must also be considered. Time saved may enable additional activity; fuel saved may be absorbed by higher payload or readiness. Those outcomes may be legitimate, but they change the environmental conclusion and must be reported.",
                "También debe considerarse el efecto rebote. El tiempo ahorrado puede permitir realizar más actividad; el combustible ahorrado puede utilizarse para incrementar la carga útil o la disponibilidad. Estos resultados pueden ser legítimos, pero modifican la conclusión ambiental y deben comunicarse.",
              ),
            ],
          },
        ],
      },
    ],
    lab: {
      title: t(
        "Matched-mission performance lab",
        "Laboratorio de rendimiento de misiones emparejadas",
      ),
      brief: t(
        "Develop a defensible comparison of two mission profiles without issuing unapproved flight guidance.",
        "Desarrollar una comparación defendible de dos perfiles de misión sin emitir instrucciones de vuelo no aprobadas.",
      ),
      fields: [
        t(
          "Mission outcome and comparison unit",
          "Resultado de la misión y unidad de comparación",
        ),
        t("Aircraft configuration", "Configuración de la aeronave"),
        t("Payload and mass", "Carga útil y masa"),
        t("Route, altitude and weather", "Ruta, altitud y meteorología"),
        t(
          "Operational and safety constraints",
          "Restricciones operativas y de seguridad",
        ),
        t(
          "Expected lift/drag mechanism",
          "Mecanismo esperado de sustentación y resistencia",
        ),
        t("Fuel and time indicators", "Indicadores de combustible y tiempo"),
        t(
          "Matching or normalisation method",
          "Método de emparejamiento o normalización",
        ),
        t("Sensitivity and uncertainty", "Sensibilidad e incertidumbre"),
        t(
          "Authorised trial and monitoring plan",
          "Prueba autorizada y plan de seguimiento",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "Why is payload not automatically avoidable mass?",
          "¿Por qué la carga útil no es automáticamente masa evitable?",
        ),
        options: [
          t("It never changes drag", "Nunca modifica la resistencia"),
          t(
            "It may be the service the mission exists to deliver",
            "Puede ser el servicio que justifica la misión",
          ),
          t("It has no effect on performance", "No afecta al rendimiento"),
          t(
            "It is excluded from aircraft weight",
            "Se excluye del peso de la aeronave",
          ),
        ],
        answer: 1,
        feedback: t(
          "The functional unit must preserve the mission service. Only non-value-adding mass can be assessed as avoidable without changing the task.",
          "La unidad funcional debe conservar el servicio de la misión. Solo puede considerarse evitable la masa que no aporta valor sin modificar la tarea.",
        ),
      },
      {
        q: t(
          "At low speed and high lift coefficient, which drag component is especially important?",
          "A baja velocidad y con un coeficiente de sustentación elevado, ¿qué componente de la resistencia adquiere especial importancia?",
        ),
        options: [
          t("Induced drag", "Resistencia inducida"),
          t("Wave drag only", "Únicamente la resistencia de onda"),
          t("Cooling drag only", "Únicamente la resistencia de refrigeración"),
          t("No drag is produced", "No se produce resistencia"),
        ],
        answer: 0,
        feedback: t(
          "Induced drag is the lift-related cost of a finite wing and increases strongly at high lift coefficient.",
          "La resistencia inducida es el coste asociado a generar sustentación con un ala finita y aumenta intensamente cuando el coeficiente de sustentación es elevado.",
        ),
      },
      {
        q: t(
          "Why is maximum lift-to-drag ratio not a universal operating instruction?",
          "¿Por qué la relación máxima sustentación-resistencia no constituye una instrucción operativa universal?",
        ),
        options: [
          t(
            "It has no mathematical meaning",
            "No tiene significado matemático",
          ),
          t(
            "Different missions, propulsion types and constraints require different optima",
            "Las distintas misiones, formas de propulsión y restricciones requieren óptimos diferentes",
          ),
          t(
            "Pilots cannot control speed",
            "Las tripulaciones no pueden controlar la velocidad",
          ),
          t("It applies only on the ground", "Solo se aplica en tierra"),
        ],
        answer: 1,
        feedback: t(
          "Range, endurance, climb, time, noise and mission constraints lead to different feasible operating points.",
          "El alcance, la autonomía, el ascenso, el tiempo, el ruido y las restricciones de misión conducen a puntos de operación viables diferentes.",
        ),
      },
      {
        q: t(
          "What makes two mission fuel records comparable?",
          "¿Qué hace comparables dos registros de combustible de misión?",
        ),
        options: [
          t("They occurred in the same month", "Se produjeron en el mismo mes"),
          t(
            "They used the same colour aircraft",
            "Las aeronaves tenían el mismo color",
          ),
          t(
            "Material variables such as payload, route, weather and configuration are matched or normalised",
            "Las variables relevantes, como carga útil, ruta, meteorología y configuración, están emparejadas o normalizadas",
          ),
          t(
            "Their fuel totals are similar",
            "Sus consumos totales son similares",
          ),
        ],
        answer: 2,
        feedback: t(
          "Comparable conditions and transparent normalisation are essential for causal interpretation.",
          "Unas condiciones comparables y una normalización transparente son esenciales para la interpretación causal.",
        ),
      },
      {
        q: t(
          "What is the correct role of sustainability analysis in flight optimisation?",
          "¿Cuál es el papel correcto del análisis de sostenibilidad en la optimización del vuelo?",
        ),
        options: [
          t("Create new cockpit limits", "Crear nuevos límites de cabina"),
          t("Replace approved manuals", "Sustituir los manuales aprobados"),
          t(
            "Identify and verify feasible improvements through authorised governance",
            "Identificar y verificar mejoras viables mediante una gobernanza autorizada",
          ),
          t(
            "Ignore operational constraints",
            "Ignorar las restricciones operativas",
          ),
        ],
        answer: 2,
        feedback: t(
          "Environmental analysis supports governed optimisation; it does not replace airworthiness or operational authority.",
          "El análisis ambiental respalda una optimización sometida a gobernanza; no sustituye a la autoridad operativa ni de aeronavegabilidad.",
        ),
      },
    ],
  },
  {
    id: 3,
    title: t(
      "Propulsion and energy carriers",
      "Propulsión y vectores energéticos",
    ),
    shortTitle: t("Propulsion and energy", "Propulsión y energía"),
    image: "/course/unique/module3-eurofighter-propulsion-test.png",
    imageAlt: t(
      "A400M and Eurofighter representing different propulsion, mission and energy requirements",
      "A400M y Eurofighter como representación de diferentes necesidades de propulsión, misión y energía",
    ),
    promise: t(
      "Evaluate turbines, propellers, SAF, hydrogen and electrification as system options rather than environmental adjectives.",
      "Evaluar turbinas, hélices, SAF, hidrógeno y electrificación como alternativas de sistema y no como adjetivos ambientales.",
    ),
    lessons: [
      {
        title: t(
          "How propulsion turns energy into motion",
          "Cómo transforma la propulsión la energía en movimiento",
        ),
        duration: "40 min",
        lead: t(
          "Every propulsion architecture exchanges momentum with the surrounding air, but it does so with different losses, speeds and installation consequences.",
          "Toda arquitectura propulsiva intercambia cantidad de movimiento con el aire circundante, pero lo hace con pérdidas, velocidades y consecuencias de instalación diferentes.",
        ),
        sections: [
          {
            heading: t(
              "Thrust is a momentum balance",
              "El empuje es un balance de cantidad de movimiento",
            ),
            paragraphs: [
              t(
                "A propulsor creates thrust by changing the momentum of a mass flow. For a given thrust, accelerating a larger mass of air by a smaller velocity increment can improve propulsive efficiency. This helps explain the efficiency of large propellers and high-bypass fans at suitable flight speeds, while compact high-specific-thrust systems serve different performance and installation needs.",
                "Un propulsor genera empuje modificando la cantidad de movimiento de un caudal másico. Para un empuje determinado, acelerar una masa de aire mayor mediante un incremento de velocidad menor puede mejorar la eficiencia propulsiva. Esto ayuda a explicar la eficiencia de las hélices de gran diámetro y los turbofanes de alta relación de derivación a velocidades de vuelo adecuadas, mientras que los sistemas compactos de elevado empuje específico responden a otras necesidades de prestaciones e instalación.",
              ),
              t(
                "Useful propulsion work sits inside a longer energy chain. Chemical energy becomes heat, pressure and shaft or jet power before producing aircraft motion. Thermal, mechanical, propulsive and installation losses all matter. Comparing only headline engine efficiency can misrepresent mission performance.",
                "El trabajo propulsivo útil forma parte de una cadena energética más extensa. La energía química se convierte en calor, presión y potencia en el eje o en el chorro antes de producir el movimiento de la aeronave. Son relevantes las pérdidas térmicas, mecánicas, propulsivas y de instalación. Comparar únicamente la eficiencia nominal del motor puede distorsionar el rendimiento de la misión.",
              ),
            ],
          },
          {
            heading: t(
              "Gas turbines are off-design machines",
              "Las turbinas de gas funcionan también fuera de su punto de diseño",
            ),
            paragraphs: [
              t(
                "Compressors, combustors and turbines are matched for a range of operating points. Efficiency, temperature margin, emissions and component life change with power setting, altitude, inlet distortion and deterioration. Engine washing, borescope findings, control schedules and repair quality can influence performance, but interventions also consume water, chemicals, parts and labour.",
                "Compresores, cámaras de combustión y turbinas se acoplan para cubrir un intervalo de puntos de operación. La eficiencia, el margen térmico, las emisiones y la vida de los componentes varían con el régimen de potencia, la altitud, la distorsión de entrada y el deterioro. El lavado de motores, los hallazgos de boroscopia, las leyes de control y la calidad de las reparaciones pueden influir en el rendimiento, pero las intervenciones también consumen agua, productos químicos, piezas y horas de trabajo.",
              ),
              t(
                "A credible improvement case measures net outcomes over an appropriate interval. Restored fuel efficiency should be balanced against maintenance inputs, avoided deterioration, reliability and the risk of moving work to another process.",
                "Un caso de mejora creíble mide el resultado neto durante un intervalo adecuado. La recuperación de la eficiencia de combustible debe contrastarse con los recursos empleados en mantenimiento, el deterioro evitado, la fiabilidad y el riesgo de desplazar trabajo o impacto hacia otro proceso.",
              ),
            ],
          },
          {
            heading: t("Propellers and integration", "Hélices e integración"),
            paragraphs: [
              t(
                "Propellers can achieve high efficiency at lower flight speeds because they act on a large air mass. Diameter, tip Mach number, blade loading, swirl, installation and acoustic constraints shape the result. Counter-rotation and advanced blade design can recover losses but add mechanical, structural and maintenance complexity.",
                "Las hélices pueden alcanzar una elevada eficiencia a velocidades de vuelo moderadas porque actúan sobre una gran masa de aire. El diámetro, el número de Mach en la punta, la carga de pala, la rotación residual del flujo, la instalación y las restricciones acústicas condicionan el resultado. La contrarrotación y el diseño avanzado de palas pueden recuperar pérdidas, pero añaden complejidad mecánica, estructural y de mantenimiento.",
              ),
              t(
                "The A400M illustrates that propeller-airframe interaction is part of the aircraft architecture. Slipstream affects wings and control surfaces; rotation direction and synchronisation influence loads, handling, noise and efficiency. The propulsor cannot be evaluated as an isolated catalogue item.",
                "El A400M ilustra que la interacción entre hélice y célula forma parte de la arquitectura de la aeronave. La estela de la hélice afecta a las alas y a las superficies de control; el sentido de giro y la sincronización influyen en las cargas, las cualidades de vuelo, el ruido y la eficiencia. El propulsor no puede evaluarse como un elemento aislado de catálogo.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "SAF, hydrogen and electricity",
          "SAF, hidrógeno y electricidad",
        ),
        duration: "50 min",
        lead: t(
          "An energy carrier must be assessed through production, logistics, aircraft integration, operational use and scarce-resource allocation.",
          "Un vector energético debe evaluarse considerando su producción, logística, integración en la aeronave, uso operativo y asignación de recursos escasos.",
        ),
        sections: [
          {
            heading: t(
              "SAF is a family of pathways",
              "SAF es una familia de rutas de producción",
            ),
            paragraphs: [
              t(
                "Sustainable aviation fuel is not a single substance or a guarantee of a fixed climate benefit. Feedstock, conversion route, process energy, co-products, land-use effects, transport, blending and chain of custody determine the life-cycle result. Approved drop-in fuels can reduce some integration barriers, but availability, price and access remain material constraints.",
                "El combustible sostenible de aviación no es una única sustancia ni garantiza un beneficio climático fijo. La materia prima, la ruta de conversión, la energía del proceso, los coproductos, los efectos sobre el uso del suelo, el transporte, la mezcla y la cadena de custodia determinan el resultado de ciclo de vida. Los combustibles drop-in aprobados pueden reducir determinadas barreras de integración, pero la disponibilidad, el precio y el acceso siguen siendo restricciones relevantes.",
              ),
              t(
                "Combustion still produces carbon dioxide at the aircraft. The claimed benefit normally concerns net life-cycle emissions relative to a defined fossil comparator and accounting method. Non-CO₂ effects are not automatically eliminated. Statements must specify pathway, percentage, boundary, certificate treatment and whether physical fuel or book-and-claim accounting is involved.",
                "La combustión sigue produciendo dióxido de carbono en la aeronave. El beneficio declarado se refiere normalmente a las emisiones netas de ciclo de vida respecto a un combustible fósil de referencia y a un método contable definidos. Los efectos distintos del CO₂ no desaparecen automáticamente. Las afirmaciones deben especificar la ruta, el porcentaje, el alcance, el tratamiento de los certificados y si se utiliza combustible físico o un mecanismo contable book-and-claim.",
              ),
            ],
          },
          {
            heading: t(
              "Hydrogen changes the aircraft and the system",
              "El hidrógeno modifica la aeronave y el sistema",
            ),
            paragraphs: [
              t(
                "Hydrogen has high energy per unit mass but very low volumetric density. Even as a cryogenic liquid it requires large insulated tanks, new distribution systems, ventilation, detection and operating procedures. Tank volume and shape affect aerodynamic layout, payload, range and turnaround. Boil-off and upstream production also matter.",
                "El hidrógeno tiene una elevada energía por unidad de masa, pero una densidad energética volumétrica muy baja. Incluso en estado líquido criogénico requiere depósitos aislados de gran volumen, nuevos sistemas de distribución, ventilación, detección y procedimientos operativos. El volumen y la forma de los depósitos afectan a la configuración aerodinámica, la carga útil, el alcance y el tiempo de escala. También son relevantes la evaporación y la producción previa.",
              ),
              t(
                "Climate performance depends strongly on how hydrogen is produced and on future electricity systems. Combustion avoids carbon dioxide at the engine but can produce nitrogen oxides and water vapour; fuel cells introduce different efficiency, thermal and power-density constraints. The correct conclusion is conditional, not simply clean or zero emission.",
                "El desempeño climático depende en gran medida de cómo se produzca el hidrógeno y de los sistemas eléctricos futuros. Su combustión evita el dióxido de carbono en el motor, pero puede producir óxidos de nitrógeno y vapor de agua; las pilas de combustible introducen otras restricciones de eficiencia, gestión térmica y densidad de potencia. La conclusión correcta es condicional, no una simple etiqueta de limpio o cero emisiones.",
              ),
            ],
          },
          {
            heading: t(
              "Electrification meets energy density",
              "La electrificación se enfrenta a la densidad energética",
            ),
            paragraphs: [
              t(
                "Electric motors can be efficient and enable distributed propulsion, but batteries store far less usable energy per kilogram than liquid hydrocarbon fuel. Required mass rises rapidly with range, reserve and power demand. Thermal management, high-voltage safety, degradation, charging infrastructure and material supply become aircraft-level design drivers.",
                "Los motores eléctricos pueden ser eficientes y facilitar la propulsión distribuida, pero las baterías almacenan mucha menos energía útil por kilogramo que un combustible líquido de hidrocarburos. La masa necesaria aumenta rápidamente con el alcance, las reservas y la demanda de potencia. La gestión térmica, la seguridad de alta tensión, la degradación, la infraestructura de recarga y el suministro de materiales se convierten en condicionantes del diseño de la aeronave.",
              ),
              t(
                "Hybridisation can decouple component operating points or support selected phases, yet carrying multiple energy systems adds mass and complexity. Electrifying ground support may be much nearer-term and easier to verify than electrifying a large mission aircraft. Opportunity should be matched to scale and duty cycle.",
                "La hibridación puede desacoplar los puntos de operación de los componentes o apoyar determinadas fases, pero transportar varios sistemas energéticos añade masa y complejidad. Electrificar los equipos de apoyo en tierra puede ser una opción mucho más cercana y fácil de verificar que electrificar una aeronave de misión de gran tamaño. La oportunidad debe corresponderse con la escala y el ciclo de trabajo.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Technology readiness and honest transition decisions",
          "Madurez tecnológica y decisiones de transición honestas",
        ),
        duration: "35 min",
        lead: t(
          "A technology portfolio needs evidence about maturity, infrastructure, scalability and timing—not only theoretical potential.",
          "Una cartera tecnológica necesita evidencias sobre madurez, infraestructura, escalabilidad y plazos, no solo sobre potencial teórico.",
        ),
        sections: [
          {
            heading: t(
              "Separate feasibility, maturity and deployment",
              "Diferenciar viabilidad, madurez y despliegue",
            ),
            paragraphs: [
              t(
                "Physical feasibility asks whether an architecture can work. Technology readiness asks whether critical functions have been demonstrated in relevant conditions. Industrial readiness covers repeatable manufacture and supply. Operational readiness includes training, maintenance, infrastructure and emergency response. Deployment also depends on certification, investment, fleet replacement and energy availability.",
                "La viabilidad física analiza si una arquitectura puede funcionar. La madurez tecnológica determina si las funciones críticas se han demostrado en condiciones relevantes. La madurez industrial comprende la fabricación repetible y el suministro. La madurez operativa incluye formación, mantenimiento, infraestructura y respuesta ante emergencias. El despliegue también depende de la certificación, la inversión, la renovación de flota y la disponibilidad energética.",
              ),
              t(
                "A concept can be scientifically credible and still make little contribution within a target period. Conversely, incremental operational and maintenance measures can act earlier but cannot replace deep technology change. Portfolio planning must display both scale and timing.",
                "Un concepto puede ser científicamente creíble y, aun así, aportar muy poco dentro del periodo objetivo. A la inversa, las medidas operativas y de mantenimiento incrementales pueden actuar antes, pero no sustituyen a un cambio tecnológico profundo. La planificación de la cartera debe mostrar tanto la escala como los plazos.",
              ),
            ],
          },
          {
            heading: t(
              "Scarce resources have opportunity costs",
              "Los recursos escasos tienen costes de oportunidad",
            ),
            paragraphs: [
              t(
                "Renewable electricity, sustainable biomass, low-carbon hydrogen and capital are limited during transition. Using them in one pathway can displace another use. A local procurement decision should therefore avoid claiming economy-wide benefit unless allocation, additionality and market effects are understood.",
                "La electricidad renovable, la biomasa sostenible, el hidrógeno de bajas emisiones de carbono y el capital son recursos limitados durante la transición. Utilizarlos en una ruta puede desplazar otros usos. Por ello, una decisión local de compra debe evitar atribuirse un beneficio para toda la economía salvo que se comprendan la asignación, la adicionalidad y los efectos de mercado.",
              ),
              t(
                "Resilience also matters for Air Power. Energy security, storage, quality assurance, geographic access and surge capability can affect feasibility. These factors belong in the decision model, not as late objections after a preferred solution has been announced.",
                "La resiliencia también es importante para Air Power. La seguridad energética, el almacenamiento, el aseguramiento de la calidad, el acceso geográfico y la capacidad de respuesta ante picos de demanda pueden afectar a la viabilidad. Estos factores deben formar parte del modelo de decisión y no aparecer como objeciones tardías después de anunciar una solución preferida.",
              ),
            ],
          },
          {
            heading: t(
              "Build a technology claim that can survive review",
              "Construir una afirmación tecnológica que resista la revisión",
            ),
            paragraphs: [
              t(
                "Describe what has been demonstrated, at what scale, under which conditions and what remains unresolved. Do not present a concept image as an in-service capability or a target as an achieved reduction. Avoid zero-emission language when upstream, infrastructure or non-CO₂ effects remain outside the boundary.",
                "Debe describirse qué se ha demostrado, a qué escala, en qué condiciones y qué cuestiones permanecen sin resolver. Una imagen conceptual no debe presentarse como una capacidad en servicio, ni un objetivo como una reducción ya alcanzada. Debe evitarse el lenguaje de cero emisiones cuando queden fuera del alcance los efectos previos, de infraestructura o distintos del CO₂.",
              ),
              t(
                "A strong transition statement combines a present-tense fact, a future objective, the dependency chain and a review point. It allows ambition without converting uncertainty into certainty.",
                "Una afirmación sólida sobre la transición combina un hecho presente, un objetivo futuro, la cadena de dependencias y un punto de revisión. Permite expresar ambición sin transformar la incertidumbre en certeza.",
              ),
            ],
          },
        ],
      },
    ],
    lab: {
      title: t(
        "Energy-carrier decision matrix",
        "Matriz de decisión de vectores energéticos",
      ),
      brief: t(
        "Compare SAF, hydrogen, battery-electric, hybrid and conventional improvement for one defined Air Power use case.",
        "Comparar SAF, hidrógeno, soluciones eléctricas con batería, sistemas híbridos y mejoras convencionales para un caso de uso definido de Air Power.",
      ),
      fields: [
        t(
          "Use case, range and duty cycle",
          "Caso de uso, alcance y ciclo de trabajo",
        ),
        t(
          "Required power and usable energy",
          "Potencia requerida y energía utilizable",
        ),
        t(
          "Aircraft integration implications",
          "Implicaciones para la integración en la aeronave",
        ),
        t("Upstream production pathway", "Ruta de producción previa"),
        t(
          "Infrastructure and safety changes",
          "Cambios de infraestructura y seguridad",
        ),
        t("Life-cycle boundary", "Alcance del ciclo de vida"),
        t(
          "Technology and industrial readiness",
          "Madurez tecnológica e industrial",
        ),
        t(
          "Operational readiness and resilience",
          "Madurez operativa y resiliencia",
        ),
        t("2030/2040 scalability", "Escalabilidad en 2030/2040"),
        t(
          "Claim permitted by current evidence",
          "Afirmación permitida por la evidencia actual",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "Why can accelerating a larger mass of air by a smaller amount improve propulsive efficiency?",
          "¿Por qué acelerar una masa de aire mayor mediante un incremento de velocidad menor puede mejorar la eficiencia propulsiva?",
        ),
        options: [
          t("It avoids all drag", "Evita toda la resistencia"),
          t(
            "It can provide the required momentum change with less wasted kinetic energy",
            "Puede proporcionar el cambio necesario de cantidad de movimiento con menos energía cinética desperdiciada",
          ),
          t("It removes engine heat", "Elimina el calor del motor"),
          t(
            "It makes aircraft mass irrelevant",
            "Hace irrelevante la masa de la aeronave",
          ),
        ],
        answer: 1,
        feedback: t(
          "For a given thrust, distributing momentum change over a larger mass flow can reduce kinetic-energy loss.",
          "Para un empuje determinado, distribuir el cambio de cantidad de movimiento sobre un caudal másico mayor puede reducir la pérdida de energía cinética.",
        ),
      },
      {
        q: t(
          "What does a SAF life-cycle claim require?",
          "¿Qué requiere una afirmación de ciclo de vida sobre SAF?",
        ),
        options: [
          t("Only the word renewable", "Únicamente la palabra renovable"),
          t(
            "Pathway, comparator, boundary and chain-of-custody evidence",
            "Evidencias sobre la ruta, el combustible de referencia, el alcance y la cadena de custodia",
          ),
          t("Aircraft paint colour", "El color de la pintura de la aeronave"),
          t(
            "Proof that combustion emits no CO₂",
            "Demostrar que la combustión no emite CO₂",
          ),
        ],
        answer: 1,
        feedback: t(
          "SAF performance varies by pathway and accounting boundary; aircraft combustion still releases CO₂.",
          "El desempeño del SAF varía según la ruta y el alcance contable; su combustión en la aeronave sigue liberando CO₂.",
        ),
      },
      {
        q: t(
          "What is a principal aircraft integration challenge for liquid hydrogen?",
          "¿Cuál es uno de los principales retos de integración del hidrógeno líquido en una aeronave?",
        ),
        options: [
          t("It is too dense", "Es demasiado denso"),
          t(
            "It requires large cryogenic tank volume and new systems",
            "Requiere depósitos criogénicos de gran volumen y nuevos sistemas",
          ),
          t("It cannot contain energy", "No puede contener energía"),
          t("It eliminates water vapour", "Elimina el vapor de agua"),
        ],
        answer: 1,
        feedback: t(
          "Hydrogen's low volumetric density and cryogenic storage reshape aircraft and infrastructure.",
          "La baja densidad volumétrica del hidrógeno y su almacenamiento criogénico modifican la aeronave y la infraestructura.",
        ),
      },
      {
        q: t(
          "Why are batteries difficult for large long-range aircraft?",
          "¿Por qué presentan dificultades las baterías en aeronaves grandes de largo alcance?",
        ),
        options: [
          t(
            "Electric motors are inefficient",
            "Los motores eléctricos son ineficientes",
          ),
          t(
            "Usable energy per unit mass is far below liquid fuel",
            "La energía utilizable por unidad de masa es muy inferior a la de los combustibles líquidos",
          ),
          t(
            "They cannot power ground equipment",
            "No pueden alimentar equipos de tierra",
          ),
          t("They have no thermal effects", "No tienen efectos térmicos"),
        ],
        answer: 1,
        feedback: t(
          "System mass, reserve, thermal management and degradation scale with the energy requirement.",
          "La masa del sistema, las reservas, la gestión térmica y la degradación aumentan con las necesidades de energía.",
        ),
      },
      {
        q: t(
          "Which statement correctly distinguishes readiness?",
          "¿Qué afirmación distingue correctamente los tipos de madurez?",
        ),
        options: [
          t(
            "A laboratory result proves fleet deployment",
            "Un resultado de laboratorio demuestra el despliegue en flota",
          ),
          t(
            "Physical feasibility, technology maturity, industrialisation and operational readiness are different",
            "La viabilidad física, la madurez tecnológica, la industrialización y la madurez operativa son dimensiones diferentes",
          ),
          t(
            "Targets are achieved results",
            "Los objetivos son resultados ya alcanzados",
          ),
          t(
            "Infrastructure is outside the technology system",
            "La infraestructura queda fuera del sistema tecnológico",
          ),
        ],
        answer: 1,
        feedback: t(
          "A technology must progress through multiple readiness dimensions before meaningful deployment.",
          "Una tecnología debe avanzar en múltiples dimensiones de madurez antes de alcanzar un despliegue significativo.",
        ),
      },
    ],
  },
  {
    id: 4,
    title: t(
      "Aircraft architecture and propulsion integration",
      "Arquitectura de aeronaves e integración propulsiva",
    ),
    shortTitle: t("Aircraft architecture", "Arquitectura de aeronaves"),
    image: "/course/unique/module4-a400m-integration-bay.png",
    imageAlt: t(
      "A400M engineering scene illustrating aircraft architecture, propulsion and integrated systems",
      "Escena de ingeniería del A400M que ilustra la arquitectura, la propulsión y los sistemas integrados de la aeronave",
    ),
    promise: t(
      "Test novel configurations against whole-mission performance, certification, maintainability and service reality.",
      "Evaluar las configuraciones novedosas frente al rendimiento de la misión completa, la certificación, la mantenibilidad y la realidad en servicio.",
    ),
    lessons: [
      {
        title: t(
          "Why conventional architecture persists",
          "Por qué perdura la arquitectura convencional",
        ),
        duration: "35 min",
        lead: t(
          "Tube-and-wing aircraft are not the only aerodynamic possibility, but they represent a mature compromise across many requirements.",
          "Las aeronaves de fuselaje tubular y ala no son la única posibilidad aerodinámica, pero representan un compromiso maduro entre numerosos requisitos.",
        ),
        sections: [
          {
            heading: t(
              "Architecture is a negotiated solution",
              "La arquitectura es una solución de compromiso",
            ),
            paragraphs: [
              t(
                "Aircraft layout balances aerodynamic efficiency, structural load paths, stability and control, payload volume, propulsion, landing gear, systems, emergency access, manufacturing and maintenance. Improving one variable changes others. A configuration that reduces induced drag may introduce structural mass, control complexity or integration risk.",
                "La configuración de una aeronave equilibra eficiencia aerodinámica, rutas de carga estructural, estabilidad y control, volumen de carga útil, propulsión, tren de aterrizaje, sistemas, acceso de emergencia, fabricación y mantenimiento. Mejorar una variable modifica otras. Una configuración que reduzca la resistencia inducida puede añadir masa estructural, complejidad de control o riesgo de integración.",
              ),
              t(
                "Mature architectures also benefit from certification evidence, compatible infrastructure, trained personnel and established supply chains. A novel concept must create enough system value to justify replacing that ecosystem, not merely outperform one aerodynamic metric.",
                "Las arquitecturas maduras también se benefician de evidencias de certificación, infraestructuras compatibles, personal formado y cadenas de suministro establecidas. Un concepto novedoso debe generar suficiente valor sistémico para justificar la sustitución de ese ecosistema, no limitarse a superar un indicador aerodinámico.",
              ),
            ],
          },
          {
            heading: t(
              "Wing efficiency and structural mass",
              "Eficiencia alar y masa estructural",
            ),
            paragraphs: [
              t(
                "Increasing span can reduce induced drag but raises bending moment and may conflict with gates, hangars or ground operations. Strut-braced, joined-wing and box-wing concepts change load paths and can increase effective aspect ratio. They also create junction flows, aeroelastic questions, control interactions and new inspection areas.",
                "Aumentar la envergadura puede reducir la resistencia inducida, pero incrementa el momento flector y puede generar incompatibilidades con puertas, hangares u operaciones terrestres. Las alas arriostradas, unidas o en caja modifican las rutas de carga y pueden aumentar el alargamiento efectivo. También crean flujos de unión, cuestiones aeroelásticas, interacciones de control y nuevas zonas de inspección.",
              ),
              t(
                "The result must be evaluated at mission level using realistic structural sizing. Empty mass, payload-range performance, gust loads and reserve fuel can reverse an apparent advantage from an idealised aerodynamic comparison.",
                "El resultado debe evaluarse a escala de misión mediante un dimensionado estructural realista. La masa en vacío, las prestaciones de carga útil y alcance, las cargas de ráfaga y el combustible de reserva pueden invertir una ventaja aparente obtenida de una comparación aerodinámica idealizada.",
              ),
            ],
          },
          {
            heading: t(
              "Volume and distributed functions",
              "Volumen y funciones distribuidas",
            ),
            paragraphs: [
              t(
                "Blended or lifting-body configurations can use more of the airframe to produce lift and provide internal volume. They alter pressurisation, evacuation, payload handling, stability, infrastructure compatibility and structural design. Distributed propulsion can influence boundary layers, lift and control, but introduces power distribution, failure management and maintenance demands.",
                "Las configuraciones de ala-cuerpo integrada o cuerpo sustentador pueden utilizar una mayor parte de la célula para producir sustentación y proporcionar volumen interno. Modifican la presurización, la evacuación, la manipulación de carga, la estabilidad, la compatibilidad con infraestructuras y el diseño estructural. La propulsión distribuida puede influir en la capa límite, la sustentación y el control, pero introduce necesidades de distribución de potencia, gestión de fallos y mantenimiento.",
              ),
              t(
                "Novel architecture is therefore a system hypothesis. Its value depends on whether coupled benefits remain after the full set of requirements is applied.",
                "Por tanto, una arquitectura novedosa es una hipótesis de sistema. Su valor depende de que los beneficios acoplados se mantengan después de aplicar el conjunto completo de requisitos.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Propulsion-airframe integration",
          "Integración entre propulsión y célula",
        ),
        duration: "40 min",
        lead: t(
          "Where and how thrust is produced changes the flow field, loads, noise, control and maintainability of the entire aircraft.",
          "El lugar y la forma en que se produce el empuje modifican el campo de flujo, las cargas, el ruido, el control y la mantenibilidad de toda la aeronave.",
        ),
        sections: [
          {
            heading: t(
              "Installation losses and opportunities",
              "Pérdidas y oportunidades de instalación",
            ),
            paragraphs: [
              t(
                "Inlets, nacelles, pylons and exhaust interact with the airframe. Distortion can reduce compressor margin; nacelles and pylons add drag; hot flows affect structures. Integration can also recover energy or reduce drag through boundary-layer ingestion, wake filling, tip-mounted propulsion or propeller slipstream effects.",
                "Las tomas de aire, góndolas, pilones y escapes interactúan con la célula. La distorsión puede reducir el margen del compresor; las góndolas y pilones añaden resistencia; los flujos calientes afectan a las estructuras. La integración también puede recuperar energía o reducir resistencia mediante ingestión de capa límite, relleno de estela, propulsión en punta alar o aprovechamiento de la corriente de las hélices.",
              ),
              t(
                "Benefit estimates must include off-design behaviour and failure cases. Recovering an aerodynamic loss is not free when fans, ducts, electrical equipment, thermal systems and reinforcement are added.",
                "Las estimaciones de beneficio deben incluir el comportamiento fuera del punto de diseño y los casos de fallo. Recuperar una pérdida aerodinámica no es gratuito cuando es necesario añadir ventiladores, conductos, equipos eléctricos, sistemas térmicos y refuerzos.",
              ),
            ],
          },
          {
            heading: t("Distributed propulsion", "Propulsión distribuida"),
            paragraphs: [
              t(
                "Multiple smaller propulsors can reshape lift distribution, provide control authority or enable redundancy. Yet unit count multiplies components, wiring, protection, inspection and fault-isolation tasks. Common-mode failures and degraded configurations must be understood.",
                "Varios propulsores pequeños pueden modificar la distribución de sustentación, aportar autoridad de control o proporcionar redundancia. Sin embargo, el número de unidades multiplica componentes, cableado, protecciones, inspecciones y tareas de aislamiento de fallos. Es necesario comprender los fallos de modo común y las configuraciones degradadas.",
              ),
              t(
                "Maintenance accessibility is an environmental variable because difficult systems can drive longer downtime, more removals, additional spares and transport. Design for inspection and modular replacement helps performance survive through life.",
                "La accesibilidad para mantenimiento es una variable ambiental porque los sistemas difíciles de intervenir pueden generar más tiempo de indisponibilidad, desmontajes, repuestos y transporte. Diseñar para facilitar la inspección y la sustitución modular ayuda a conservar las prestaciones durante la vida útil.",
              ),
            ],
          },
          {
            heading: t(
              "Noise belongs in integration",
              "El ruido forma parte de la integración",
            ),
            paragraphs: [
              t(
                "Blade loading, tip speed, inflow distortion, shielding and phase relationship affect tonal and broadband noise. Moving a propulsor may reduce exposure in one direction while increasing cabin noise, structural excitation or another community receptor.",
                "La carga de pala, la velocidad de punta, la distorsión del flujo de entrada, el apantallamiento y la relación de fase afectan al ruido tonal y de banda ancha. Trasladar un propulsor puede reducir la exposición en una dirección y, al mismo tiempo, aumentar el ruido en cabina, la excitación estructural o la exposición de otro receptor comunitario.",
              ),
              t(
                "Synchronisation or active control may improve selected conditions but requires robust sensing and control across the operating envelope. Claimed reductions should specify configuration, power setting, metric and observer location.",
                "La sincronización o el control activo pueden mejorar condiciones concretas, pero exigen detección y control robustos en toda la envolvente operativa. Las reducciones declaradas deben especificar configuración, régimen de potencia, indicador y ubicación del observador.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Design for certification and in-service performance",
          "Diseñar para la certificación y el rendimiento en servicio",
        ),
        duration: "40 min",
        lead: t(
          "A design is not environmentally successful if its benefit cannot be manufactured, maintained and retained safely through service.",
          "Un diseño no tiene éxito ambiental si su beneficio no puede fabricarse, mantenerse y conservarse con seguridad durante el servicio.",
        ),
        sections: [
          {
            heading: t(
              "Certification shapes the solution",
              "La certificación condiciona la solución",
            ),
            paragraphs: [
              t(
                "Novel structures, energy systems and distributed propulsion create new failure modes and means-of-compliance questions. Fire, crashworthiness, lightning, high voltage, cryogenic storage, software assurance and evacuation may become architecture drivers. Environmental promise cannot bypass the evidence required for safe operation.",
                "Las estructuras novedosas, los sistemas energéticos y la propulsión distribuida crean nuevos modos de fallo y cuestiones sobre medios de cumplimiento. El fuego, la resistencia al impacto, el rayo, la alta tensión, el almacenamiento criogénico, el aseguramiento del software y la evacuación pueden convertirse en condicionantes de la arquitectura. La promesa ambiental no puede eludir las evidencias necesarias para una operación segura.",
              ),
              t(
                "Certification effort also affects development time and the date at which fleet-level benefit can occur. Transition planning should distinguish prototype performance from certifiable, producible capability.",
                "El esfuerzo de certificación también afecta al tiempo de desarrollo y a la fecha en la que puede materializarse un beneficio a escala de flota. La planificación de la transición debe distinguir entre el rendimiento de un prototipo y una capacidad certificable y fabricable.",
              ),
            ],
          },
          {
            heading: t(
              "Performance deteriorates without support",
              "Las prestaciones se degradan sin un soporte adecuado",
            ),
            paragraphs: [
              t(
                "Surface damage, contamination, seal wear, engine deterioration and control-system faults can erode efficiency. The support concept determines how rapidly performance is detected and restored. Sensors and digital models can help, but false positives, data gaps and cybersecurity affect value.",
                "Los daños superficiales, la contaminación, el desgaste de sellados, el deterioro del motor y los fallos del sistema de control pueden erosionar la eficiencia. El concepto de soporte determina con qué rapidez se detecta y recupera el rendimiento. Los sensores y modelos digitales pueden ayudar, pero los falsos positivos, las lagunas de datos y la ciberseguridad condicionan su valor.",
              ),
              t(
                "Design targets should include maintainability, inspection burden, repair quality and expected in-service condition—not only delivery performance. A small robust gain across thousands of operating hours may outperform a fragile peak benefit.",
                "Los objetivos de diseño deben incluir mantenibilidad, carga de inspección, calidad de reparación y estado esperado en servicio, no solo las prestaciones en el momento de la entrega. Una mejora pequeña y robusta durante miles de horas de operación puede superar un beneficio máximo pero frágil.",
              ),
            ],
          },
          {
            heading: t(
              "Use a life-cycle design scorecard",
              "Utilizar un cuadro de decisión de diseño de ciclo de vida",
            ),
            paragraphs: [
              t(
                "A scorecard should cover mission energy, noise, local emissions, embodied impacts, materials, reliability, maintainability, infrastructure, safety, industrial maturity and end-of-life options. Weighting can support discussion, but decision gates and distributional effects should remain visible.",
                "El cuadro debe cubrir energía de misión, ruido, emisiones locales, impactos incorporados, materiales, fiabilidad, mantenibilidad, infraestructura, seguridad, madurez industrial y opciones de fin de vida. La ponderación puede apoyar el debate, pero los requisitos obligatorios y los efectos distributivos deben permanecer visibles.",
              ),
              t(
                "The output is not a universal winner. It is a documented choice for a defined mission set, technology horizon and evidence base, with conditions that trigger review.",
                "El resultado no es un ganador universal, sino una elección documentada para un conjunto definido de misiones, un horizonte tecnológico y una base de evidencias, con condiciones que activan su revisión.",
              ),
            ],
          },
        ],
      },
    ],
    lab: {
      title: t(
        "Novel-architecture design review",
        "Revisión de diseño de una arquitectura novedosa",
      ),
      brief: t(
        "Evaluate one unconventional configuration for a defined Air Power service without assuming that aerodynamic efficiency equals system sustainability.",
        "Evaluar una configuración no convencional para un servicio definido de Air Power sin asumir que la eficiencia aerodinámica equivale a sostenibilidad del sistema.",
      ),
      fields: [
        t(
          "Mission set and payload-range requirement",
          "Conjunto de misiones y requisito de carga útil-alcance",
        ),
        t(
          "Proposed architectural mechanism",
          "Mecanismo arquitectónico propuesto",
        ),
        t("Aerodynamic benefit", "Beneficio aerodinámico"),
        t(
          "Structural and mass consequences",
          "Consecuencias estructurales y de masa",
        ),
        t(
          "Propulsion and systems integration",
          "Integración de propulsión y sistemas",
        ),
        t("Noise and local emissions", "Ruido y emisiones locales"),
        t("Certification and failure modes", "Certificación y modos de fallo"),
        t("Manufacturing and infrastructure", "Fabricación e infraestructura"),
        t(
          "Maintainability and fleet support",
          "Mantenibilidad y soporte de flota",
        ),
        t(
          "Evidence gaps and recommendation",
          "Lagunas de evidencia y recomendación",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "Why does tube-and-wing architecture persist?",
          "¿Por qué perdura la arquitectura de fuselaje tubular y ala?",
        ),
        options: [
          t("No other shape can fly", "Ninguna otra forma puede volar"),
          t(
            "It is a mature compromise across many requirements and an established ecosystem",
            "Es un compromiso maduro entre numerosos requisitos y cuenta con un ecosistema establecido",
          ),
          t("It has zero induced drag", "No tiene resistencia inducida"),
          t("It requires no certification", "No requiere certificación"),
        ],
        answer: 1,
        feedback: t(
          "Architecture value includes certification, operations, infrastructure and support as well as aerodynamics.",
          "El valor de una arquitectura incluye certificación, operación, infraestructura y soporte, además de aerodinámica.",
        ),
      },
      {
        q: t(
          "What can offset the induced-drag benefit of a higher aspect ratio?",
          "¿Qué puede contrarrestar el beneficio de resistencia inducida de un mayor alargamiento?",
        ),
        options: [
          t(
            "Structural mass and bending loads",
            "La masa estructural y las cargas de flexión",
          ),
          t("Lower lift", "Una menor sustentación"),
          t("The absence of air", "La ausencia de aire"),
          t("Paint colour", "El color de la pintura"),
        ],
        answer: 0,
        feedback: t(
          "Greater span changes loads, mass, aeroelasticity and infrastructure compatibility.",
          "Una mayor envergadura modifica cargas, masa, aeroelasticidad y compatibilidad con infraestructuras.",
        ),
      },
      {
        q: t(
          "What is an integration loss?",
          "¿Qué es una pérdida de integración?",
        ),
        options: [
          t("A laboratory measurement", "Una medición de laboratorio"),
          t(
            "A penalty created when a component interacts with the airframe and systems",
            "Una penalización creada cuando un componente interactúa con la célula y los sistemas",
          ),
          t("A recycled component", "Un componente reciclado"),
          t("A legal target", "Un objetivo legal"),
        ],
        answer: 1,
        feedback: t(
          "Installed performance includes inlet, nacelle, pylon, thermal, structural and flow-interaction effects.",
          "Las prestaciones instaladas incluyen los efectos de toma, góndola, pilón, sistemas térmicos, estructura e interacción de flujos.",
        ),
      },
      {
        q: t(
          "Why can distributed propulsion increase maintenance burden?",
          "¿Por qué puede aumentar la carga de mantenimiento la propulsión distribuida?",
        ),
        options: [
          t("It removes all components", "Elimina todos los componentes"),
          t(
            "More units, wiring and fault modes require access and diagnosis",
            "Más unidades, cableado y modos de fallo exigen acceso y diagnóstico",
          ),
          t("It cannot produce thrust", "No puede producir empuje"),
          t("It always uses hydrogen", "Siempre utiliza hidrógeno"),
        ],
        answer: 1,
        feedback: t(
          "Unit count and integration can multiply inspection, protection and fault-isolation tasks.",
          "El número de unidades y su integración pueden multiplicar las tareas de inspección, protección y aislamiento de fallos.",
        ),
      },
      {
        q: t("Which result is strongest?", "¿Qué resultado es más sólido?"),
        options: [
          t(
            "The concept has a green shape",
            "El concepto tiene una forma verde",
          ),
          t(
            "A component simulation shows one benefit",
            "Una simulación de componente muestra un beneficio",
          ),
          t(
            "A whole-mission, certifiable and maintainable design retains benefit under representative conditions",
            "Un diseño certificable y mantenible conserva el beneficio durante la misión completa en condiciones representativas",
          ),
          t(
            "The aircraft is unconventional",
            "La aeronave es poco convencional",
          ),
        ],
        answer: 2,
        feedback: t(
          "System benefit must survive sizing, integration, certification, manufacture and service.",
          "El beneficio de sistema debe mantenerse tras el dimensionado, la integración, la certificación, la fabricación y el servicio.",
        ),
      },
    ],
  },
  {
    id: 5,
    title: t(
      "Life cycle, materials and circularity",
      "Ciclo de vida, materiales y circularidad",
    ),
    shortTitle: t("Life cycle", "Ciclo de vida"),
    image: "/course/unique/module5-a400m-circularity-workshop.png",
    imageAlt: t(
      "A400M life-cycle sequence from materials and maintenance to component recovery",
      "Secuencia de ciclo de vida del A400M desde los materiales y el mantenimiento hasta la recuperación de componentes",
    ),
    promise: t(
      "Prevent operational efficiency from shifting impact into materials, manufacturing, maintenance or end-of-life.",
      "Evitar que la eficiencia operativa desplace el impacto hacia los materiales, la fabricación, el mantenimiento o el fin de vida.",
    ),
    lessons: [
      {
        title: t(
          "Life-cycle thinking and functional comparison",
          "Pensamiento de ciclo de vida y comparación funcional",
        ),
        duration: "40 min",
        lead: t(
          "Life-cycle assessment expands the boundary without pretending that every study answers every decision.",
          "El análisis de ciclo de vida amplía el alcance sin suponer que todos los estudios responden a cualquier decisión.",
        ),
        sections: [
          {
            heading: t(
              "Goal and scope control the answer",
              "El objetivo y el alcance condicionan la respuesta",
            ),
            paragraphs: [
              t(
                "ISO 14040 and ISO 14044 structure life-cycle assessment around goal and scope, inventory, impact assessment and interpretation. The goal identifies the intended use and audience. Scope defines the product system, functional unit, system boundary, allocation, data quality and impact methods. These choices can materially change the result.",
                "Las normas ISO 14040 e ISO 14044 estructuran el análisis de ciclo de vida en objetivo y alcance, inventario, evaluación de impactos e interpretación. El objetivo identifica el uso previsto y la audiencia. El alcance define el sistema de producto, la unidad funcional, los límites, la asignación, la calidad de los datos y los métodos de impacto. Estas elecciones pueden modificar sustancialmente el resultado.",
              ),
              t(
                "A comparative study should deliver equivalent function. Comparing one kilogram of materials can be misleading when stiffness, lifetime, repairability or required quantity differ. For an aircraft decision, the functional unit may be a component performing a defined load-bearing function over a specified service life and mission profile.",
                "Un estudio comparativo debe proporcionar una función equivalente. Comparar un kilogramo de materiales puede ser engañoso cuando difieren la rigidez, la vida útil, la reparabilidad o la cantidad necesaria. En una decisión aeronáutica, la unidad funcional puede ser un componente que desempeña una función estructural definida durante una vida útil y un perfil de misión especificados.",
              ),
            ],
          },
          {
            heading: t(
              "Inventory is a model of flows",
              "El inventario es un modelo de flujos",
            ),
            paragraphs: [
              t(
                "The inventory records energy, materials, transport, emissions and waste across included processes. Primary supplier data may be limited, while databases use regional or technological averages. Cut-off rules, allocation and recycled-content assumptions should be visible. Precision in a spreadsheet does not remove representativeness uncertainty.",
                "El inventario registra energía, materiales, transporte, emisiones y residuos de los procesos incluidos. Los datos primarios de proveedores pueden ser limitados, mientras que las bases de datos utilizan promedios regionales o tecnológicos. Deben hacerse visibles las reglas de corte, la asignación y los supuestos sobre contenido reciclado. La precisión de una hoja de cálculo no elimina la incertidumbre de representatividad.",
              ),
              t(
                "For long-lived aircraft, future electricity, fuels, utilisation and maintenance introduce scenario uncertainty. Results should be tested across plausible conditions rather than presented as one timeless number.",
                "En aeronaves de larga vida, la electricidad, los combustibles, la utilización y el mantenimiento futuros introducen incertidumbre de escenario. Los resultados deben probarse en condiciones plausibles y no presentarse como una cifra válida para cualquier momento.",
              ),
            ],
          },
          {
            heading: t(
              "Interpretation needs contribution and sensitivity",
              "La interpretación requiere análisis de contribución y sensibilidad",
            ),
            paragraphs: [
              t(
                "Contribution analysis shows which processes drive each impact category. Sensitivity analysis tests assumptions such as lifetime, fuel pathway, recycling credit or electricity mix. Completeness and consistency checks determine whether conclusions match the goal.",
                "El análisis de contribución muestra qué procesos dominan cada categoría de impacto. El análisis de sensibilidad prueba supuestos como la vida útil, la ruta del combustible, el crédito de reciclaje o el mix eléctrico. Las comprobaciones de integridad y coherencia determinan si las conclusiones se ajustan al objetivo.",
              ),
              t(
                "A climate result alone is not a complete environmental assessment. Resource depletion, toxicity, particulate formation, water and land effects may alter the choice. Impact categories should be selected for materiality, not to maximise a preferred story.",
                "Un resultado climático aislado no constituye una evaluación ambiental completa. El agotamiento de recursos, la toxicidad, la formación de partículas y los efectos sobre el agua y el suelo pueden modificar la elección. Las categorías deben seleccionarse por su materialidad, no para maximizar una narrativa preferida.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Materials, manufacturing and in-service trade-offs",
          "Materiales, fabricación y compensaciones en servicio",
        ),
        duration: "45 min",
        lead: t(
          "Lightweight materials can save recurring operational energy while increasing production, repair and end-of-life challenges.",
          "Los materiales ligeros pueden ahorrar energía de forma recurrente en operación y, al mismo tiempo, aumentar los retos de producción, reparación y fin de vida.",
        ),
        sections: [
          {
            heading: t(
              "Compare materials through function",
              "Comparar materiales a través de su función",
            ),
            paragraphs: [
              t(
                "Aluminium alloys offer established forming, inspection, repair and recycling routes. Titanium provides strength, temperature and corrosion performance but can be energy-intensive to produce and machine. Carbon-fibre composites provide high specific properties and design freedom, while fibre manufacture, resin systems, cure, inspection, repair and recycling create different burdens.",
                "Las aleaciones de aluminio cuentan con rutas consolidadas de conformado, inspección, reparación y reciclaje. El titanio ofrece resistencia mecánica, térmica y a la corrosión, pero su producción y mecanizado pueden ser intensivos en energía. Los composites de fibra de carbono proporcionan elevadas propiedades específicas y libertad de diseño, mientras que la fabricación de la fibra, las resinas, el curado, la inspección, la reparación y el reciclaje generan otras cargas.",
              ),
              t(
                "A mass reduction should be evaluated over expected utilisation. High operational fuel savings may dominate for some applications, while a low-utilisation part or short remaining service life may not repay a production-intensive change. The result is conditional on mission, lifetime and energy scenario.",
                "Una reducción de masa debe evaluarse a lo largo de la utilización prevista. En algunas aplicaciones pueden dominar los ahorros operativos de combustible, mientras que una pieza de escasa utilización o con poca vida restante puede no compensar un cambio intensivo en producción. El resultado depende de la misión, la vida útil y el escenario energético.",
              ),
            ],
          },
          {
            heading: t(
              "Manufacturing yield and process energy",
              "Rendimiento de fabricación y energía de proceso",
            ),
            paragraphs: [
              t(
                "Buy-to-fly ratio, scrap quality, cure cycles, autoclave use, machining, surface treatment and rework influence embodied impact. A nominally advanced material can perform poorly when yield is low or rejected parts lose high-value processing. Process control and right-first-time performance therefore have environmental value.",
                "La relación buy-to-fly, la calidad de la chatarra, los ciclos de curado, el uso de autoclave, el mecanizado, los tratamientos superficiales y el retrabajo influyen en el impacto incorporado. Un material nominalmente avanzado puede ofrecer un mal resultado cuando el rendimiento es bajo o se rechazan piezas con mucho procesamiento acumulado. El control de proceso y el right first time tienen, por tanto, valor ambiental.",
              ),
              t(
                "Substitution must also consider hazardous substances and worker exposure. Removing one regulated substance may increase energy, water, rework or another hazard. Alternatives require technical qualification and life-cycle review, not a simple safer or greener label.",
                "La sustitución también debe considerar las sustancias peligrosas y la exposición laboral. Eliminar una sustancia regulada puede aumentar la energía, el agua, el retrabajo u otro peligro. Las alternativas requieren cualificación técnica y revisión de ciclo de vida, no una simple etiqueta de más seguro o más verde.",
              ),
            ],
          },
          {
            heading: t(
              "Maintenance can preserve or consume value",
              "El mantenimiento puede conservar o consumir valor",
            ),
            paragraphs: [
              t(
                "Inspection, repair and life extension can avoid premature replacement, but they use energy, chemicals, consumables and transport. The environmental case depends on the avoided component, remaining life, reliability and repair inputs. Condition-based maintenance can reduce unnecessary interventions when sensors and decision thresholds are trustworthy.",
                "La inspección, la reparación y la extensión de vida pueden evitar sustituciones prematuras, pero utilizan energía, productos químicos, consumibles y transporte. El balance ambiental depende del componente evitado, la vida restante, la fiabilidad y los recursos de reparación. El mantenimiento basado en condición puede reducir intervenciones innecesarias cuando los sensores y umbrales de decisión son fiables.",
              ),
              t(
                "Urgent logistics, redundant stock and cannibalisation can protect readiness while increasing material and transport pressure. These are real trade-offs to optimise through planning, repair turnaround and data quality rather than moral judgements about individual actions.",
                "La logística urgente, el stock redundante y la canibalización pueden proteger la disponibilidad y, a la vez, aumentar la presión material y de transporte. Son compensaciones reales que deben optimizarse mediante planificación, tiempos de reparación y calidad de datos, no mediante juicios sobre acciones individuales.",
              ),
            ],
          },
        ],
      },
      {
        title: t(
          "Designing circularity and controlled end-of-life",
          "Diseñar la circularidad y un fin de vida controlado",
        ),
        duration: "40 min",
        lead: t(
          "Circularity begins with retained technical value and safe traceability, not with a recycling percentage at disposal.",
          "La circularidad comienza por conservar valor técnico y trazabilidad segura, no por un porcentaje de reciclaje al final del proceso.",
        ),
        sections: [
          {
            heading: t(
              "Value-retention hierarchy",
              "Jerarquía de conservación del valor",
            ),
            paragraphs: [
              t(
                "Avoided demand and longer useful life generally retain more embedded value than material recycling. Reuse, repair, refurbishment and remanufacture preserve different amounts of component function. Aerospace parts require configuration control, airworthiness status, records and approved release; an apparently reusable item without evidence may have no safe technical value.",
                "La demanda evitada y una vida útil más larga suelen conservar más valor incorporado que el reciclaje de materiales. Reutilización, reparación, reacondicionamiento y remanufactura preservan cantidades diferentes de la función del componente. Las piezas aeroespaciales necesitan control de configuración, estado de aeronavegabilidad, registros y liberación aprobada; un elemento aparentemente reutilizable sin evidencias puede carecer de valor técnico seguro.",
              ),
              t(
                "Design choices can enable access, disassembly, identification and separation. Fasteners, adhesives, mixed materials, coatings and embedded systems influence whether future recovery is practical.",
                "Las decisiones de diseño pueden facilitar el acceso, el desmontaje, la identificación y la separación. Los elementos de unión, adhesivos, materiales mixtos, recubrimientos y sistemas integrados influyen en que la recuperación futura sea viable.",
              ),
            ],
          },
          {
            heading: t(
              "Decommissioning is a controlled project",
              "El desmantelamiento es un proyecto controlado",
            ),
            paragraphs: [
              t(
                "The aircraft must be made safe by managing fuel, oils, hydraulic fluids, batteries, pressurised systems, pyrotechnics and other hazards. Components are assessed for reuse, repair, training or material recovery. Security, export control and sensitive equipment require defined routes. Residual structures are dismantled with worker and environmental controls.",
                "La aeronave debe ponerse en condición segura gestionando combustible, aceites, fluidos hidráulicos, baterías, sistemas presurizados, elementos pirotécnicos y otros peligros. Los componentes se evalúan para reutilización, reparación, formación o recuperación de materiales. La protección, el control de exportaciones y los equipos sensibles requieren rutas definidas. Las estructuras residuales se desmontan con controles laborales y ambientales.",
              ),
              t(
                "Storage before dismantling also matters. Leaks, weather exposure, fire risk and loss of records can destroy value and contaminate soil or water. Planning should begin before withdrawal, while technical knowledge and documentation remain available.",
                "El almacenamiento previo al desmontaje también importa. Las fugas, la exposición meteorológica, el riesgo de incendio y la pérdida de registros pueden destruir valor y contaminar suelo o agua. La planificación debe comenzar antes de la retirada, mientras siguen disponibles el conocimiento técnico y la documentación.",
              ),
            ],
          },
          {
            heading: t(
              "Measure more than diversion",
              "Medir más que el desvío de vertedero",
            ),
            paragraphs: [
              t(
                "A high mass recycling rate can be dominated by readily recovered metal while composite, hazardous or high-impact fractions follow poor routes. Useful indicators include components returned to service, value retained, virgin material displaced, hazardous material controlled, verified destinations and residual treatment.",
                "Una tasa elevada de reciclaje en masa puede estar dominada por metales fácilmente recuperables mientras composites, fracciones peligrosas o de alto impacto siguen rutas deficientes. Entre los indicadores útiles se encuentran los componentes devueltos al servicio, el valor conservado, el material virgen desplazado, el material peligroso controlado, los destinos verificados y el tratamiento residual.",
              ),
              t(
                "Avoided-impact claims require evidence that recovered outputs actually displace a reference product. Open-loop downcycling is not equivalent to closed-loop aircraft material recovery. Report the route and limitation rather than using one circularity label.",
                "Las afirmaciones de impacto evitado requieren evidencias de que los materiales recuperados desplazan realmente un producto de referencia. El downcycling en ciclo abierto no equivale a recuperar material aeronáutico en ciclo cerrado. Deben comunicarse la ruta y sus limitaciones en lugar de utilizar una única etiqueta de circularidad.",
              ),
            ],
          },
        ],
      },
    ],
    lab: {
      title: t(
        "Component life-cycle passport",
        "Pasaporte de ciclo de vida de un componente",
      ),
      brief: t(
        "Create a decision passport for one component from material production through maintenance and end-of-life.",
        "Crear un pasaporte de decisión para un componente desde la producción del material hasta el mantenimiento y el fin de vida.",
      ),
      fields: [
        t(
          "Component function and functional unit",
          "Función del componente y unidad funcional",
        ),
        t("Material and manufacturing route", "Material y ruta de fabricación"),
        t(
          "Production yield and significant inputs",
          "Rendimiento de producción y entradas significativas",
        ),
        t(
          "Operational mass or efficiency effect",
          "Efecto operativo sobre masa o eficiencia",
        ),
        t(
          "Inspection and maintenance plan",
          "Plan de inspección y mantenimiento",
        ),
        t(
          "Repairability and remaining-life rules",
          "Reparabilidad y reglas de vida remanente",
        ),
        t(
          "Hazardous substances and controls",
          "Sustancias peligrosas y controles",
        ),
        t(
          "Traceability required for reuse",
          "Trazabilidad necesaria para la reutilización",
        ),
        t(
          "End-of-life hierarchy and destinations",
          "Jerarquía de fin de vida y destinos",
        ),
        t(
          "Indicators and evidence-bounded conclusion",
          "Indicadores y conclusión limitada por la evidencia",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "What determines an LCA result before calculation begins?",
          "¿Qué condiciona el resultado de un ACV antes de comenzar el cálculo?",
        ),
        options: [
          t("Only the software colour", "Solo el color del software"),
          t(
            "Goal, functional unit, boundary and methodological choices",
            "Objetivo, unidad funcional, límites y elecciones metodológicas",
          ),
          t("The aircraft operator's name", "El nombre del operador"),
          t("One recycling rate", "Una tasa de reciclaje"),
        ],
        answer: 1,
        feedback: t(
          "Goal and scope define what is compared and which flows and methods are included.",
          "El objetivo y el alcance definen qué se compara y qué flujos y métodos se incluyen.",
        ),
      },
      {
        q: t(
          "Why can one kilogram be a weak basis for comparing materials?",
          "¿Por qué un kilogramo puede ser una base débil para comparar materiales?",
        ),
        options: [
          t("Mass cannot be measured", "La masa no puede medirse"),
          t(
            "Materials may deliver different function, lifetime and required quantity",
            "Los materiales pueden proporcionar funciones, vidas útiles y cantidades necesarias diferentes",
          ),
          t(
            "All materials are identical",
            "Todos los materiales son idénticos",
          ),
          t("Manufacturing has no impact", "La fabricación no tiene impacto"),
        ],
        answer: 1,
        feedback: t(
          "Comparative assessment must preserve equivalent technical function.",
          "La evaluación comparativa debe conservar una función técnica equivalente.",
        ),
      },
      {
        q: t(
          "When is a production-intensive lightweight material most likely to create a net benefit?",
          "¿Cuándo es más probable que un material ligero intensivo en producción genere un beneficio neto?",
        ),
        options: [
          t("When it has no function", "Cuando no tiene función"),
          t(
            "When recurring in-service savings over representative utilisation outweigh added production burden",
            "Cuando los ahorros recurrentes en servicio durante una utilización representativa superan la carga adicional de producción",
          ),
          t(
            "Whenever it is called advanced",
            "Siempre que se denomine avanzado",
          ),
          t(
            "Only when it cannot be repaired",
            "Solo cuando no puede repararse",
          ),
        ],
        answer: 1,
        feedback: t(
          "Break-even depends on mass saving, utilisation, lifetime and energy scenarios.",
          "El punto de equilibrio depende del ahorro de masa, la utilización, la vida útil y los escenarios energéticos.",
        ),
      },
      {
        q: t(
          "What is necessary before an aerospace component can be safely reused?",
          "¿Qué se necesita antes de reutilizar con seguridad un componente aeroespacial?",
        ),
        options: [
          t("Appearance alone", "Solo su apariencia"),
          t(
            "Configuration, condition, traceability and approved status",
            "Configuración, estado, trazabilidad y condición aprobada",
          ),
          t("A high scrap price", "Un precio elevado de chatarra"),
          t("Removal of its serial number", "Eliminar su número de serie"),
        ],
        answer: 1,
        feedback: t(
          "Technical value depends on evidence and airworthiness governance.",
          "El valor técnico depende de las evidencias y de la gobernanza de aeronavegabilidad.",
        ),
      },
      {
        q: t(
          "Why is mass recycling rate incomplete?",
          "¿Por qué es incompleta la tasa de reciclaje en masa?",
        ),
        options: [
          t("Mass is never relevant", "La masa nunca es relevante"),
          t(
            "It can hide low-value routes and difficult high-impact fractions",
            "Puede ocultar rutas de bajo valor y fracciones difíciles de alto impacto",
          ),
          t("Metals cannot be recycled", "Los metales no pueden reciclarse"),
          t("It measures fuel burn", "Mide el consumo de combustible"),
        ],
        answer: 1,
        feedback: t(
          "Value retention, verified destination, hazard control and displaced virgin production add essential context.",
          "La conservación del valor, el destino verificado, el control de peligros y la producción virgen desplazada aportan contexto esencial.",
        ),
      },
    ],
  },
  {
    id: 6,
    title: t(
      "Noise, emissions and atmospheric effects",
      "Ruido, emisiones y efectos atmosféricos",
    ),
    subtitle: t(
      "Connect physical sources with exposure, evidence and proportionate mitigation.",
      "Conectar las fuentes físicas con la exposición, la evidencia y una mitigación proporcionada.",
    ),
    duration: "95 min",
    image: "/course/unique/module6-eurofighter-acoustic-test.png",
    imageAlt: t(
      "Eurofighter on a military platform during a controlled acoustic monitoring activity",
      "Eurofighter en una plataforma militar durante una actividad controlada de monitorización acústica",
    ),
    lessons: [
      {
        title: t(
          "From acoustic source to affected receiver",
          "De la fuente acústica al receptor afectado",
        ),
        duration: "35 min",
        lead: t(
          "Noise management starts by separating source, propagation and receiver instead of treating decibels as a single universal quantity.",
          "La gestión del ruido comienza separando fuente, propagación y receptor, en lugar de tratar los decibelios como una única magnitud universal.",
        ),
        sections: [
          {
            heading: t(
              "Acoustic quantities answer different questions",
              "Las magnitudes acústicas responden a preguntas diferentes",
            ),
            body: t(
              "Sound pressure level describes an instant or interval at a point; sound exposure level normalises an event; equivalent continuous level represents energy over time; maximum level captures a peak. A-weighting approximates part of human hearing but does not erase tonal, impulsive or low-frequency character. Any figure must therefore state metric, weighting, integration time and measurement position.",
              "El nivel de presión sonora describe un instante o intervalo en un punto; el nivel de exposición sonora normaliza un suceso; el nivel continuo equivalente representa la energía a lo largo del tiempo; y el nivel máximo recoge un pico. La ponderación A aproxima parte de la audición humana, pero no elimina el carácter tonal, impulsivo o de baja frecuencia. Toda cifra debe indicar métrica, ponderación, tiempo de integración y posición de medida.",
            ),
          },
          {
            heading: t(
              "Propagation changes the source signature",
              "La propagación modifica la firma de la fuente",
            ),
            body: t(
              "Distance, atmospheric absorption, wind, temperature gradients, ground impedance, barriers and building geometry alter what reaches a receiver. Engine run-ups, taxiing, overflight and ground-support equipment have different directivity and duration. A credible model uses operating modes and meteorology that represent the decision, then validates critical assumptions with measurements.",
              "La distancia, la absorción atmosférica, el viento, los gradientes de temperatura, la impedancia del terreno, las barreras y la geometría de los edificios modifican lo que llega al receptor. Las pruebas de motor, el rodaje, los sobrevuelos y los equipos de apoyo tienen directividad y duración diferentes. Un modelo creíble utiliza modos operativos y meteorología representativos de la decisión y valida los supuestos críticos mediante mediciones.",
            ),
          },
          {
            heading: t(
              "Exposure is operational as well as physical",
              "La exposición es operativa además de física",
            ),
            body: t(
              "Community and occupational effects depend on level, event count, timing, predictability and receptor sensitivity. A school, night-time dwelling and protected habitat cannot be represented by one generic receiver. Mitigation can act on quieter equipment, maintenance condition, routing, power setting, duration, scheduling, barriers and communication; the best package is usually layered.",
              "Los efectos comunitarios y laborales dependen del nivel, el número de sucesos, el horario, la previsibilidad y la sensibilidad del receptor. Una escuela, una vivienda nocturna y un hábitat protegido no pueden representarse mediante un receptor genérico. La mitigación puede actuar sobre equipos más silenciosos, estado de mantenimiento, rutas, potencia, duración, horarios, barreras y comunicación; la mejor solución suele combinar varias capas.",
            ),
          },
        ],
      },
      {
        title: t(
          "Local air quality around aircraft support",
          "Calidad del aire local en el soporte aeronáutico",
        ),
        duration: "30 min",
        lead: t(
          "Local air quality requires a source-to-concentration-to-exposure chain, not a photograph of visible exhaust.",
          "La calidad del aire local exige una cadena fuente–concentración–exposición, no una fotografía del escape visible.",
        ),
        sections: [
          {
            heading: t(
              "Build a complete source inventory",
              "Construir un inventario completo de fuentes",
            ),
            body: t(
              "Relevant sources may include aircraft engines and APUs, ground power, heaters, generators, vehicles, painting, cleaning products, fuel handling and fugitive dust. Emission mass depends on activity and emission factor; concentration also depends on release height, dispersion, chemistry and background conditions. Visible haze is not a calibrated measurement and invisible pollutants can still matter.",
              "Las fuentes relevantes pueden incluir motores y APU, energía en tierra, calefactores, generadores, vehículos, pintura, productos de limpieza, manipulación de combustible y polvo fugitivo. La masa emitida depende de la actividad y del factor de emisión; la concentración también depende de la altura de liberación, la dispersión, la química y las condiciones de fondo. La neblina visible no es una medida calibrada y los contaminantes invisibles también pueden ser relevantes.",
            ),
          },
          {
            heading: t(
              "Match monitoring to the question",
              "Ajustar la monitorización a la pregunta",
            ),
            body: t(
              "A monitoring plan defines pollutants, averaging periods, detection limits, calibration, siting, wind data and quality assurance. Upwind and downwind observations can help distinguish base contribution from background, while time-resolved data can link peaks to activities. Sensors useful for screening may not provide regulatory-grade evidence unless performance and uncertainty are demonstrated.",
              "Un plan de monitorización define contaminantes, periodos de promedio, límites de detección, calibración, ubicación, datos de viento y aseguramiento de la calidad. Las observaciones a barlovento y sotavento ayudan a distinguir la contribución de la base del fondo, y los datos temporales pueden vincular picos con actividades. Los sensores útiles para cribado no aportan necesariamente evidencia reglamentaria si no se demuestra su rendimiento e incertidumbre.",
            ),
          },
          {
            heading: t(
              "Control through the operational hierarchy",
              "Control mediante la jerarquía operativa",
            ),
            body: t(
              "Avoid unnecessary running first, substitute cleaner electrical or fuel options where compatible, engineer capture or separation, then apply procedures and PPE for residual occupational risk. Electrifying ground support can reduce point-of-use emissions but the wider energy source and battery lifecycle remain relevant. Controls must be checked against readiness, safety and real utilisation.",
              "Primero se evita el funcionamiento innecesario; después se sustituyen opciones por alternativas eléctricas o combustibles más limpias cuando sean compatibles; se aplican medidas técnicas de captación o separación; y finalmente procedimientos y EPI para el riesgo laboral residual. Electrificar el apoyo en tierra puede reducir emisiones locales, pero siguen siendo relevantes el origen de la energía y el ciclo de vida de las baterías. Los controles deben contrastarse con la disponibilidad operativa, la seguridad y el uso real.",
            ),
          },
        ],
      },
      {
        title: t(
          "Climate effects beyond the exhaust inventory",
          "Efectos climáticos más allá del inventario de escape",
        ),
        duration: "30 min",
        lead: t(
          "Climate assessment combines carbon dioxide with shorter-lived effects while keeping uncertainty visible.",
          "La evaluación climática combina el dióxido de carbono con efectos de vida más corta manteniendo visible la incertidumbre.",
        ),
        sections: [
          {
            heading: t(
              "CO2 is cumulative; other effects are context-dependent",
              "El CO2 es acumulativo; otros efectos dependen del contexto",
            ),
            body: t(
              "Fuel carbon produces long-lived CO2, so cumulative consumption is central. Nitrogen oxides, water vapour, particles and persistent contrails can also influence climate, but magnitude and sign depend on altitude, latitude, time, weather and background chemistry. Collapsing every effect into one precise multiplier can conceal the uncertainty needed for sound decisions.",
              "El carbono del combustible produce CO2 de larga duración, por lo que el consumo acumulado es central. Los óxidos de nitrógeno, el vapor de agua, las partículas y las estelas persistentes también pueden influir en el clima, pero su magnitud y signo dependen de altitud, latitud, hora, meteorología y química de fondo. Reducir todos los efectos a un multiplicador preciso puede ocultar la incertidumbre necesaria para decidir bien.",
            ),
          },
          {
            heading: t(
              "Use scenario ranges, not false precision",
              "Usar rangos de escenarios, no falsa precisión",
            ),
            body: t(
              "Operational climate studies should disclose fuel basis, energy pathway, mission profile, atmospheric method and time horizon. Scenario ranges show whether a conclusion survives different electricity, fuel-production and atmospheric assumptions. Direct fuel reduction remains a robust lever, while route or altitude changes require checking safety, mission outcome and any additional fuel.",
              "Los estudios climáticos operativos deben declarar la base del combustible, la ruta energética, el perfil de misión, el método atmosférico y el horizonte temporal. Los rangos de escenarios muestran si una conclusión resiste distintos supuestos sobre electricidad, producción de combustible y atmósfera. Reducir directamente el combustible es una palanca robusta; los cambios de ruta o altitud deben comprobar seguridad, resultado de misión y combustible adicional.",
            ),
          },
          {
            heading: t(
              "Integrate rather than transfer impacts",
              "Integrar en lugar de trasladar impactos",
            ),
            body: t(
              "A quieter route may burn more fuel; electrification may shift emissions upstream; a new fuel may improve lifecycle carbon while changing local pollutants or logistics. Decision records should show the affected indicators, receptors, time horizon and constraints. The aim is not a claim of zero impact but a transparent improvement without hidden burden shifting.",
              "Una ruta más silenciosa puede consumir más combustible; la electrificación puede desplazar emisiones aguas arriba; y un nuevo combustible puede mejorar el carbono de ciclo de vida mientras cambia contaminantes locales o logística. Los registros de decisión deben mostrar indicadores afectados, receptores, horizonte temporal y restricciones. El objetivo no es afirmar impacto cero, sino lograr una mejora transparente sin trasladar cargas de forma oculta.",
            ),
          },
        ],
      },
    ],
    lab: {
      title: t(
        "Base environmental evidence plan",
        "Plan de evidencias ambientales de base",
      ),
      brief: t(
        "Design an evidence plan for a recurring engine-run and taxi scenario near sensitive receptors.",
        "Diseñar un plan de evidencias para un escenario recurrente de prueba de motor y rodaje próximo a receptores sensibles.",
      ),
      fields: [
        t(
          "Operational scenario and decision",
          "Escenario operativo y decisión",
        ),
        t("Acoustic and emission sources", "Fuentes acústicas y de emisión"),
        t(
          "Sensitive receptors and exposure windows",
          "Receptores sensibles y ventanas de exposición",
        ),
        t("Noise metrics and locations", "Métricas y ubicaciones de ruido"),
        t(
          "Air pollutants and averaging periods",
          "Contaminantes y periodos de promedio",
        ),
        t(
          "Meteorological and background data",
          "Datos meteorológicos y de fondo",
        ),
        t(
          "Instrument quality and calibration",
          "Calidad y calibración de instrumentos",
        ),
        t("Mitigation hierarchy", "Jerarquía de mitigación"),
        t(
          "Operational and safety constraints",
          "Restricciones operativas y de seguridad",
        ),
        t(
          "Review trigger and communication",
          "Umbral de revisión y comunicación",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "Why is one decibel value insufficient?",
          "¿Por qué no basta un único valor en decibelios?",
        ),
        options: [
          t("Noise cannot be measured", "El ruido no puede medirse"),
          t(
            "Metric, weighting, duration and location determine its meaning",
            "La métrica, ponderación, duración y ubicación determinan su significado",
          ),
          t("All receivers are equal", "Todos los receptores son iguales"),
          t("Weather never matters", "La meteorología nunca importa"),
        ],
        answer: 1,
        feedback: t(
          "Acoustic evidence is interpretable only with its measurement definition and context.",
          "La evidencia acústica solo es interpretable con su definición de medida y contexto.",
        ),
      },
      {
        q: t(
          "What connects emissions to local exposure?",
          "¿Qué conecta las emisiones con la exposición local?",
        ),
        options: [
          t("Aircraft colour", "El color de la aeronave"),
          t(
            "Dispersion, chemistry, background and receptor location",
            "La dispersión, química, fondo y ubicación del receptor",
          ),
          t("A visible photograph only", "Solo una fotografía visible"),
          t("Mission name", "El nombre de la misión"),
        ],
        answer: 1,
        feedback: t(
          "Emission mass and ambient concentration are related but not interchangeable.",
          "La masa emitida y la concentración ambiente están relacionadas, pero no son intercambiables.",
        ),
      },
      {
        q: t(
          "Which noise control is normally most robust?",
          "¿Qué control de ruido suele ser más robusto?",
        ),
        options: [
          t(
            "A layered source, path and scheduling package",
            "Un paquete combinado sobre fuente, propagación y horarios",
          ),
          t("Ignoring event count", "Ignorar el número de sucesos"),
          t("Moving every receiver", "Trasladar todos los receptores"),
          t("Using an unspecified average", "Usar un promedio no especificado"),
        ],
        answer: 0,
        feedback: t(
          "Layered controls reduce dependence on one assumption or behaviour.",
          "Los controles en capas reducen la dependencia de un único supuesto o comportamiento.",
        ),
      },
      {
        q: t(
          "Why should non-CO2 climate effects be presented as scenarios?",
          "¿Por qué deben presentarse como escenarios los efectos climáticos distintos del CO2?",
        ),
        options: [
          t("They never occur", "Nunca ocurren"),
          t(
            "They depend strongly on atmospheric context and method",
            "Dependen mucho del contexto atmosférico y del método",
          ),
          t("Fuel use is unknown", "Se desconoce el uso de combustible"),
          t("CO2 has no effect", "El CO2 no tiene efecto"),
        ],
        answer: 1,
        feedback: t(
          "Ranges preserve decision-relevant uncertainty instead of implying false precision.",
          "Los rangos conservan la incertidumbre relevante sin dar falsa precisión.",
        ),
      },
      {
        q: t("What is burden shifting?", "¿Qué es trasladar cargas?"),
        options: [
          t(
            "Improving one indicator while worsening another place or stage without disclosure",
            "Mejorar un indicador mientras se empeora otro lugar o etapa sin hacerlo visible",
          ),
          t(
            "Reducing fuel and noise together",
            "Reducir a la vez combustible y ruido",
          ),
          t("Calibrating a sensor", "Calibrar un sensor"),
          t("Recording uncertainty", "Registrar incertidumbre"),
        ],
        answer: 0,
        feedback: t(
          "Integrated assessment makes transferred impacts and trade-offs explicit.",
          "La evaluación integrada hace explícitos los impactos transferidos y las compensaciones.",
        ),
      },
    ],
  },
  {
    id: 7,
    title: t(
      "Operations, maintenance and Air Power bases",
      "Operaciones, mantenimiento y bases de Air Power",
    ),
    subtitle: t(
      "Turn engineering potential into repeatable in-service performance.",
      "Convertir el potencial de ingeniería en rendimiento repetible en servicio.",
    ),
    duration: "100 min",
    image: "/course/unique/module7-a400m-base-operations.png",
    lessons: [
      {
        title: t(
          "Operational efficiency with mission constraints",
          "Eficiencia operativa con restricciones de misión",
        ),
        duration: "35 min",
        lead: t(
          "Operational sustainability is a disciplined search for avoidable consumption without weakening safety, readiness or mission effect.",
          "La sostenibilidad operativa es una búsqueda disciplinada del consumo evitable sin debilitar seguridad, disponibilidad ni efecto de misión.",
        ),
        sections: [
          {
            heading: t(
              "Define the service delivered",
              "Definir el servicio prestado",
            ),
            body: t(
              "Fuel per flight hour is easy to calculate but can reward longer or less useful activity. Depending on the decision, better denominators may include trained crew outcome, serviceable-aircraft day, payload-distance, completed maintenance event or mission capability delivered. The indicator must discourage gaming and retain the operational result that society or the customer actually requires.",
              "El combustible por hora de vuelo es fácil de calcular, pero puede premiar una actividad más larga o menos útil. Según la decisión, pueden ser mejores denominadores el resultado de formación de tripulación, el día de aeronave disponible, la carga-distancia, la tarea de mantenimiento completada o la capacidad de misión proporcionada. El indicador debe evitar incentivos perversos y conservar el resultado operativo realmente requerido.",
            ),
          },
          {
            heading: t(
              "Plan, execute and learn",
              "Planificar, ejecutar y aprender",
            ),
            body: t(
              "A useful improvement loop compares a representative baseline with dispatch planning, routing, loading, ground time, auxiliary power, weather, alternates and actual execution. Variance is classified rather than blamed: safety, mission change, technical defect, weather, congestion or avoidable practice. This makes lessons transferable without asking crews to optimise against conditions they cannot control.",
              "Un ciclo de mejora útil compara una línea base representativa con planificación de despacho, ruta, carga, tiempo en tierra, potencia auxiliar, meteorología, alternativos y ejecución real. La desviación se clasifica en lugar de atribuir culpas: seguridad, cambio de misión, defecto técnico, meteorología, congestión o práctica evitable. Así las lecciones pueden transferirse sin pedir a las tripulaciones que optimicen condiciones que no controlan.",
            ),
          },
          {
            heading: t(
              "Standardise only after proving the control",
              "Estandarizar solo después de demostrar el control",
            ),
            body: t(
              "Trials should specify scope, safety gates, comparison basis and success criteria. A locally successful procedure may fail elsewhere because infrastructure, climate, fleet standard or mission pattern differs. Scale-up therefore needs configuration control, training, accountable ownership, exception rules and monitoring for unintended effects.",
              "Los ensayos deben definir alcance, barreras de seguridad, base de comparación y criterios de éxito. Un procedimiento eficaz localmente puede fallar en otro lugar por diferencias de infraestructura, clima, estándar de flota o patrón de misión. Escalar exige control de configuración, formación, responsable definido, reglas de excepción y vigilancia de efectos no deseados.",
            ),
          },
        ],
      },
      {
        title: t(
          "Maintenance as an environmental control",
          "El mantenimiento como control ambiental",
        ),
        duration: "35 min",
        lead: t(
          "Maintenance protects efficiency, containment and asset life, but its own resource use must also be engineered.",
          "El mantenimiento protege eficiencia, contención y vida del activo, pero su propio uso de recursos también debe diseñarse.",
        ),
        sections: [
          {
            heading: t(
              "Technical condition changes environmental performance",
              "El estado técnico cambia el comportamiento ambiental",
            ),
            body: t(
              "Deteriorated aerodynamic surfaces, engine condition, tyre pressure, leaks, filter restriction and system faults can increase fuel, noise, emissions or hazardous releases. Condition monitoring should connect technical parameters with environmental significance and operational risk. The objective is not extra maintenance by default, but the right intervention at the right threshold.",
              "El deterioro de superficies aerodinámicas, el estado del motor, la presión de neumáticos, las fugas, la restricción de filtros y los fallos de sistemas pueden aumentar combustible, ruido, emisiones o vertidos peligrosos. La monitorización de condición debe conectar parámetros técnicos con importancia ambiental y riesgo operativo. El objetivo no es añadir mantenimiento por defecto, sino intervenir en el umbral adecuado.",
            ),
          },
          {
            heading: t(
              "Engineer the maintenance process",
              "Diseñar el proceso de mantenimiento",
            ),
            body: t(
              "Wash water, solvents, coatings, oils, hydraulic fluids, consumables, energy, packaging and replaced parts form the maintenance footprint. Controls follow a hierarchy: avoid or reduce need, substitute compatible materials, close loops, contain releases, segregate streams and verify destination. Changes require airworthiness, material-compatibility, human-factors and occupational-safety review.",
              "El agua de lavado, disolventes, recubrimientos, aceites, fluidos hidráulicos, consumibles, energía, embalajes y piezas sustituidas forman la huella del mantenimiento. Los controles siguen una jerarquía: evitar o reducir, sustituir materiales compatibles, cerrar circuitos, contener liberaciones, segregar corrientes y verificar destino. Los cambios requieren revisión de aeronavegabilidad, compatibilidad, factores humanos y seguridad laboral.",
            ),
          },
          {
            heading: t(
              "Reliability can avoid hidden impacts",
              "La fiabilidad puede evitar impactos ocultos",
            ),
            body: t(
              "Repeat defects, no-fault-found removals, urgent freight, rescue missions and premature scrapping can dominate the footprint of a nominally small component. Reliability analysis should therefore include environmental consequence alongside cost and availability. Better diagnostics, repair instructions, spares positioning and feedback to design can prevent both downtime and lifecycle burden.",
              "Las averías repetidas, desmontajes sin fallo encontrado, transporte urgente, misiones de recuperación y desguace prematuro pueden dominar la huella de un componente aparentemente menor. El análisis de fiabilidad debe incluir consecuencias ambientales junto a coste y disponibilidad. Mejores diagnósticos, instrucciones de reparación, ubicación de repuestos y retorno a diseño pueden evitar indisponibilidad y carga de ciclo de vida.",
            ),
          },
        ],
      },
      {
        title: t(
          "Base infrastructure and environmental control",
          "Infraestructura de base y control ambiental",
        ),
        duration: "30 min",
        lead: t(
          "The base is an interconnected energy, water, material and risk system supporting the aircraft system.",
          "La base es un sistema interconectado de energía, agua, materiales y riesgos que sostiene al sistema aeronáutico.",
        ),
        sections: [
          {
            heading: t(
              "Map loads before selecting technology",
              "Mapear cargas antes de seleccionar tecnología",
            ),
            body: t(
              "Hangars, workshops, simulators, offices, chargers, compressed air, lighting and process equipment have different load profiles and resilience needs. Sub-metering and time profiles reveal baseload, peaks and waste that an annual bill hides. Efficiency and operational scheduling should be assessed before generation and storage are sized.",
              "Hangares, talleres, simuladores, oficinas, cargadores, aire comprimido, iluminación y equipos de proceso tienen perfiles de carga y necesidades de resiliencia diferentes. La submedición y los perfiles temporales revelan cargas base, picos y desperdicios que oculta una factura anual. La eficiencia y la programación operativa deben evaluarse antes de dimensionar generación y almacenamiento.",
            ),
          },
          {
            heading: t(
              "Water and pollution controls need pathways",
              "El agua y la contaminación requieren rutas de control",
            ),
            body: t(
              "Drainage drawings, valve status, interceptor capacity, chemical storage, firewater, wash areas and emergency isolation determine whether a release reaches soil or water. Routine inspection must test the complete pathway, not just the presence of a labelled container. Climate resilience adds intense rainfall, heat, drought and supply interruption to the design basis.",
              "Los planos de drenaje, estado de válvulas, capacidad de separadores, almacenamiento químico, agua contra incendios, zonas de lavado y aislamiento de emergencia determinan si una liberación alcanza suelo o agua. La inspección debe comprobar la ruta completa, no solo la presencia de un recipiente etiquetado. La resiliencia climática añade lluvia intensa, calor, sequía e interrupción de suministros a la base de diseño.",
            ),
          },
          {
            heading: t(
              "Govern interfaces and emergency readiness",
              "Gobernar interfaces y preparación ante emergencias",
            ),
            body: t(
              "Operators, maintainers, facilities teams, contractors and emergency services share controls. Responsibilities, permits, competence, handovers and evidence must be explicit. Drills should test realistic environmental scenarios, communication and recovery, then close corrective actions to verified effectiveness rather than merely recording completion.",
              "Operadores, mantenimiento, instalaciones, contratistas y emergencias comparten controles. Responsabilidades, permisos, competencia, relevos y evidencias deben ser explícitos. Los simulacros deben probar escenarios ambientales realistas, comunicación y recuperación, y cerrar acciones correctivas comprobando su eficacia, no solo registrando su finalización.",
            ),
          },
        ],
      },
    ],
    lab: {
      title: t(
        "Sustainable sortie and support plan",
        "Plan sostenible de salida y soporte",
      ),
      brief: t(
        "Redesign one representative sortie and its ground-support chain while preserving safety and mission outcome.",
        "Rediseñar una salida representativa y su cadena de apoyo en tierra conservando seguridad y resultado de misión.",
      ),
      fields: [
        t(
          "Mission output and non-negotiable constraints",
          "Resultado de misión y restricciones no negociables",
        ),
        t("Representative baseline", "Línea base representativa"),
        t(
          "Flight and ground energy drivers",
          "Factores de energía en vuelo y tierra",
        ),
        t(
          "Maintenance-condition influences",
          "Influencias del estado de mantenimiento",
        ),
        t(
          "Water, waste and hazardous-material controls",
          "Controles de agua, residuos y materiales peligrosos",
        ),
        t(
          "Infrastructure load and resilience",
          "Carga y resiliencia de infraestructura",
        ),
        t(
          "Improvement options and dependencies",
          "Opciones de mejora y dependencias",
        ),
        t(
          "Trial design and safety gates",
          "Diseño del ensayo y barreras de seguridad",
        ),
        t(
          "Performance indicators and data owner",
          "Indicadores y propietario del dato",
        ),
        t("Scale-up and review decision", "Decisión de escalado y revisión"),
      ],
    },
    questions: [
      {
        q: t(
          "What makes an operational efficiency indicator useful?",
          "¿Qué hace útil un indicador de eficiencia operativa?",
        ),
        options: [
          t(
            "It preserves the required mission or service output",
            "Conserva la misión o servicio requerido",
          ),
          t("It always uses flight hours", "Siempre usa horas de vuelo"),
          t("It excludes constraints", "Excluye restricciones"),
          t("It rewards longer activity", "Premia actividad más larga"),
        ],
        answer: 0,
        feedback: t(
          "Efficiency must relate resources to a meaningful delivered function.",
          "La eficiencia debe relacionar recursos con una función entregada significativa.",
        ),
      },
      {
        q: t(
          "Why classify operational variance?",
          "¿Por qué clasificar la desviación operativa?",
        ),
        options: [
          t("To assign blame", "Para culpar"),
          t(
            "To separate controllable learning from safety, weather and mission changes",
            "Para separar aprendizaje controlable de seguridad, meteorología y cambios de misión",
          ),
          t("To hide fuel", "Para ocultar combustible"),
          t("To avoid baselines", "Para evitar líneas base"),
        ],
        answer: 1,
        feedback: t(
          "Classification makes improvement fair and transferable.",
          "La clasificación hace que la mejora sea justa y transferible.",
        ),
      },
      {
        q: t(
          "Which maintenance effect is often hidden?",
          "¿Qué efecto del mantenimiento suele quedar oculto?",
        ),
        options: [
          t(
            "Urgent logistics and repeat removals",
            "Logística urgente y desmontajes repetidos",
          ),
          t("Aircraft colour", "Color de aeronave"),
          t("Runway length only", "Solo longitud de pista"),
          t("Weather forecasts", "Previsiones meteorológicas"),
        ],
        answer: 0,
        feedback: t(
          "Reliability failures can trigger large indirect lifecycle burdens.",
          "Los fallos de fiabilidad pueden provocar grandes cargas indirectas de ciclo de vida.",
        ),
      },
      {
        q: t(
          "What should precede sizing base generation and storage?",
          "¿Qué debe preceder al dimensionado de generación y almacenamiento?",
        ),
        options: [
          t(
            "Load mapping, efficiency and scheduling",
            "Mapa de cargas, eficiencia y programación",
          ),
          t("A logo campaign", "Una campaña de logotipo"),
          t("Ignoring peaks", "Ignorar picos"),
          t("Buying the largest battery", "Comprar la batería más grande"),
        ],
        answer: 0,
        feedback: t(
          "Understanding and reducing demand prevents poorly matched infrastructure.",
          "Comprender y reducir la demanda evita infraestructura mal ajustada.",
        ),
      },
      {
        q: t(
          "When is a corrective action closed?",
          "¿Cuándo se cierra una acción correctiva?",
        ),
        options: [
          t("When entered in a spreadsheet", "Cuando se registra en una hoja"),
          t(
            "When implementation and effectiveness are verified",
            "Cuando se verifican implantación y eficacia",
          ),
          t("When assigned", "Cuando se asigna"),
          t("When the drill ends", "Cuando termina el simulacro"),
        ],
        answer: 1,
        feedback: t(
          "Completion without effectiveness evidence does not demonstrate control.",
          "Completar sin evidencias de eficacia no demuestra control.",
        ),
      },
    ],
  },
  {
    id: 8,
    title: t(
      "In-Service Sustainability Decision Lab",
      "Laboratorio de decisiones de sostenibilidad en servicio",
    ),
    subtitle: t(
      "Integrate evidence, governance and implementation into one defensible decision.",
      "Integrar evidencia, gobernanza e implantación en una decisión defendible.",
    ),
    duration: "120 min",
    image: "/course/unique/module8-eurofighter-decision-audit.png",
    lessons: [
      {
        title: t(
          "Frame the decision before solving it",
          "Definir la decisión antes de resolverla",
        ),
        duration: "35 min",
        lead: t(
          "The capstone begins with a decision statement that identifies the owner, function, boundary, constraints and deadline.",
          "El proyecto final comienza con una declaración de decisión que identifica responsable, función, alcance, restricciones y plazo.",
        ),
        sections: [
          {
            heading: t(
              "Turn a broad ambition into a decision",
              "Convertir una ambición amplia en una decisión",
            ),
            body: t(
              "‘Make support sustainable’ is not actionable. A useful formulation specifies whether the team must select a technology, change a procedure, approve a trial, prioritise investment or respond to a performance gap. It defines the aircraft or base configuration, operating context, stakeholders and what remains outside scope, preventing analysis from expanding indefinitely.",
              "«Hacer sostenible el soporte» no es accionable. Una formulación útil especifica si el equipo debe seleccionar una tecnología, cambiar un procedimiento, aprobar un ensayo, priorizar inversión o responder a una desviación. Define configuración de aeronave o base, contexto operativo, partes interesadas y lo que queda fuera del alcance, evitando un análisis sin fin.",
            ),
          },
          {
            heading: t(
              "Protect non-negotiable constraints",
              "Proteger restricciones no negociables",
            ),
            body: t(
              "Safety, airworthiness, security, mission capability, legal compliance and ethical obligations are gates, not weighted preferences that can be traded away. Feasible options pass these gates before environmental, cost, schedule and resilience differences are compared. Assumptions requiring authority approval are identified rather than treated as settled facts.",
              "Seguridad, aeronavegabilidad, seguridad física, capacidad de misión, cumplimiento legal y obligaciones éticas son barreras, no preferencias ponderadas intercambiables. Las opciones viables superan estas barreras antes de comparar diferencias ambientales, económicas, temporales y de resiliencia. Los supuestos que requieren aprobación de autoridad se identifican en vez de tratarlos como hechos resueltos.",
            ),
          },
          {
            heading: t(
              "Build the stakeholder and evidence map",
              "Construir el mapa de partes interesadas y evidencias",
            ),
            body: t(
              "Operations, engineering, maintenance, facilities, procurement, environment, finance, customers, workforce and neighbours can own different evidence or experience different impacts. The map records decision rights, consultation needs and data custody. Evidence is graded by relevance, representativeness, quality and uncertainty, with gaps linked to a proportionate action.",
              "Operaciones, ingeniería, mantenimiento, instalaciones, compras, medioambiente, finanzas, clientes, plantilla y entorno pueden poseer evidencias distintas o experimentar impactos diferentes. El mapa registra derechos de decisión, necesidades de consulta y custodia de datos. La evidencia se valora por relevancia, representatividad, calidad e incertidumbre, vinculando cada carencia a una acción proporcionada.",
            ),
          },
        ],
      },
      {
        title: t(
          "Compare options without hiding trade-offs",
          "Comparar opciones sin ocultar compensaciones",
        ),
        duration: "40 min",
        lead: t(
          "A transparent comparison uses gates, indicators, scenarios and sensitivity rather than a decorative score.",
          "Una comparación transparente utiliza barreras, indicadores, escenarios y sensibilidad, no una puntuación decorativa.",
        ),
        sections: [
          {
            heading: t(
              "Use a structured option architecture",
              "Usar una arquitectura estructurada de opciones",
            ),
            body: t(
              "Include the present baseline, demand reduction, operational change, maintenance action, infrastructure change and relevant technology substitution. Combining compatible measures often performs better than searching for one flagship solution. Each option states maturity, interfaces, dependencies, rebound risk and the conditions under which its benefit is expected.",
              "Se incluyen la línea base actual, reducción de demanda, cambio operativo, acción de mantenimiento, cambio de infraestructura y sustitución tecnológica pertinente. Combinar medidas compatibles suele superar la búsqueda de una solución emblemática. Cada opción declara madurez, interfaces, dependencias, riesgo de rebote y condiciones en las que se espera el beneficio.",
            ),
          },
          {
            heading: t(
              "Keep indicators interpretable",
              "Mantener indicadores interpretables",
            ),
            body: t(
              "Energy, lifecycle climate, local air quality, noise, water, materials, waste, biodiversity, readiness, safety, cost and resilience may all matter, but not every decision needs every metric. Indicators retain units and uncertainty before any normalisation. Weighting is documented as a value judgement, and vetoes or thresholds are not disguised inside an average score.",
              "Energía, clima de ciclo de vida, calidad del aire, ruido, agua, materiales, residuos, biodiversidad, disponibilidad, seguridad, coste y resiliencia pueden ser relevantes, pero no toda decisión necesita todas las métricas. Los indicadores conservan unidades e incertidumbre antes de normalizar. La ponderación se documenta como juicio de valor, y los vetos o umbrales no se ocultan en una puntuación media.",
            ),
          },
          {
            heading: t(
              "Stress-test the recommendation",
              "Someter la recomendación a pruebas de robustez",
            ),
            body: t(
              "Sensitivity analysis varies influential assumptions such as utilisation, energy pathway, component life, fuel price, climate factor and implementation rate. Scenario analysis tests plausible operating futures. A robust recommendation survives reasonable changes; a conditional recommendation states the trigger that would change the choice. Unresolved uncertainty may justify a monitored trial rather than immediate fleet-wide deployment.",
              "El análisis de sensibilidad varía supuestos influyentes como utilización, ruta energética, vida del componente, precio de combustible, factor climático y grado de implantación. Los escenarios prueban futuros operativos plausibles. Una recomendación robusta resiste cambios razonables; una recomendación condicional declara el umbral que cambiaría la elección. La incertidumbre pendiente puede justificar un ensayo monitorizado en vez de un despliegue inmediato en toda la flota.",
            ),
          },
        ],
      },
      {
        title: t(
          "Implement, assure and communicate",
          "Implantar, asegurar y comunicar",
        ),
        duration: "45 min",
        lead: t(
          "A recommendation creates value only when ownership, controls, evidence and learning survive contact with operations.",
          "Una recomendación solo crea valor cuando responsables, controles, evidencias y aprendizaje sobreviven al contacto con la operación.",
        ),
        sections: [
          {
            heading: t(
              "Translate the choice into controlled delivery",
              "Traducir la elección en una implantación controlada",
            ),
            body: t(
              "The implementation plan names accountable owners, resources, milestones, configuration changes, training, permits, supplier actions and operational acceptance criteria. Leading indicators verify that controls exist and are used; lagging indicators show outcomes. Stop criteria and rollback arrangements protect safety and readiness during trials.",
              "El plan de implantación identifica responsables, recursos, hitos, cambios de configuración, formación, permisos, acciones de proveedores y criterios de aceptación operativa. Los indicadores adelantados verifican que los controles existen y se usan; los indicadores de resultado muestran efectos. Los criterios de parada y reversión protegen seguridad y disponibilidad durante los ensayos.",
            ),
          },
          {
            heading: t(
              "Assure through an environmental management cycle",
              "Asegurar mediante un ciclo de gestión ambiental",
            ),
            body: t(
              "A practical management system connects context and significant aspects with objectives, operational controls, competence, emergency readiness, monitoring, internal audit, corrective action and management review. Audit samples evidence and tests effectiveness; it does not merely confirm that a procedure exists. Management review reallocates resources and revises objectives when evidence or context changes.",
              "Un sistema práctico conecta contexto y aspectos significativos con objetivos, controles operativos, competencia, preparación ante emergencias, seguimiento, auditoría interna, acción correctiva y revisión por la dirección. La auditoría muestrea evidencias y comprueba eficacia; no se limita a confirmar que existe un procedimiento. La revisión reasigna recursos y revisa objetivos cuando cambian evidencia o contexto.",
            ),
          },
          {
            heading: t(
              "Communicate claims at the strength of the evidence",
              "Comunicar afirmaciones con la fuerza de la evidencia",
            ),
            body: t(
              "A credible decision brief explains baseline, boundary, method, result, uncertainty, trade-offs and next review. Absolute claims such as ‘zero impact’ are avoided unless the full relevant boundary supports them. Different audiences need different depth, but the underlying numbers and caveats remain consistent. Transparent limitations strengthen trust and direct the next measurement.",
              "Una nota de decisión creíble explica línea base, alcance, método, resultado, incertidumbre, compensaciones y siguiente revisión. Se evitan afirmaciones absolutas como «impacto cero» salvo que todo el alcance relevante las sostenga. Cada audiencia necesita distinto nivel de detalle, pero cifras y salvedades permanecen coherentes. Las limitaciones transparentes refuerzan confianza y orientan la siguiente medición.",
            ),
          },
        ],
      },
    ],
    lab: {
      title: t("Capstone decision dossier", "Expediente final de decisión"),
      brief: t(
        "Prepare a board-ready sustainability decision for an A400M, Eurofighter or Air Power base support improvement.",
        "Preparar una decisión de sostenibilidad lista para comité sobre una mejora de soporte de A400M, Eurofighter o base de Air Power.",
      ),
      fields: [
        t("Decision, owner and deadline", "Decisión, responsable y plazo"),
        t("Function, baseline and boundary", "Función, línea base y alcance"),
        t("Non-negotiable gates", "Barreras no negociables"),
        t(
          "Stakeholders and evidence quality",
          "Partes interesadas y calidad de evidencia",
        ),
        t("Option set and dependencies", "Conjunto de opciones y dependencias"),
        t(
          "Environmental and operational indicators",
          "Indicadores ambientales y operativos",
        ),
        t(
          "Lifecycle and burden-shifting check",
          "Comprobación de ciclo de vida y traslado de cargas",
        ),
        t(
          "Sensitivity, scenarios and uncertainty",
          "Sensibilidad, escenarios e incertidumbre",
        ),
        t(
          "Recommendation and implementation controls",
          "Recomendación y controles de implantación",
        ),
        t(
          "Monitoring, audit and communication plan",
          "Plan de seguimiento, auditoría y comunicación",
        ),
      ],
    },
    questions: [
      {
        q: t(
          "Which item is a decision gate rather than a weighted preference?",
          "¿Qué elemento es una barrera de decisión y no una preferencia ponderada?",
        ),
        options: [
          t("Airworthiness compliance", "Cumplimiento de aeronavegabilidad"),
          t("Presentation colour", "Color de presentación"),
          t("Optional branding", "Marca opcional"),
          t("Personal taste", "Preferencia personal"),
        ],
        answer: 0,
        feedback: t(
          "An option that fails airworthiness, safety or law is not made acceptable by benefits elsewhere.",
          "Una opción que incumple aeronavegabilidad, seguridad o ley no se vuelve aceptable por beneficios en otros ámbitos.",
        ),
      },
      {
        q: t(
          "Why include the present baseline as an option?",
          "¿Por qué incluir la línea base actual como opción?",
        ),
        options: [
          t(
            "To provide a fair reference and reveal the cost of no change",
            "Para aportar una referencia justa y revelar el coste de no cambiar",
          ),
          t("To guarantee no action", "Para garantizar que no se actúe"),
          t("To remove indicators", "Para eliminar indicadores"),
          t("To avoid evidence", "Para evitar evidencias"),
        ],
        answer: 0,
        feedback: t(
          "The baseline enables transparent comparison and may expose worsening future performance.",
          "La línea base permite comparar con transparencia y puede mostrar un deterioro futuro.",
        ),
      },
      {
        q: t(
          "What does sensitivity analysis test?",
          "¿Qué comprueba el análisis de sensibilidad?",
        ),
        options: [
          t(
            "Whether the recommendation changes when influential assumptions vary",
            "Si la recomendación cambia al variar supuestos influyentes",
          ),
          t("Only spelling", "Solo ortografía"),
          t(
            "Whether all options have equal scores",
            "Si todas las opciones tienen igual puntuación",
          ),
          t(
            "Whether uncertainty can be deleted",
            "Si puede eliminarse la incertidumbre",
          ),
        ],
        answer: 0,
        feedback: t(
          "Sensitivity identifies fragile conclusions and decision-changing assumptions.",
          "La sensibilidad identifica conclusiones frágiles y supuestos que cambian la decisión.",
        ),
      },
      {
        q: t(
          "What distinguishes an effective audit?",
          "¿Qué distingue una auditoría eficaz?",
        ),
        options: [
          t(
            "It tests sampled evidence and control effectiveness",
            "Comprueba evidencias muestreadas y eficacia de controles",
          ),
          t(
            "It only checks that documents exist",
            "Solo comprueba que existen documentos",
          ),
          t("It avoids operations", "Evita la operación"),
          t(
            "It closes every finding immediately",
            "Cierra cada hallazgo inmediatamente",
          ),
        ],
        answer: 0,
        feedback: t(
          "Assurance requires evidence that controls work in practice.",
          "El aseguramiento requiere evidencias de que los controles funcionan en la práctica.",
        ),
      },
      {
        q: t(
          "What makes a sustainability claim credible?",
          "¿Qué hace creíble una afirmación de sostenibilidad?",
        ),
        options: [
          t(
            "Clear boundary, method, evidence, uncertainty and limitations",
            "Alcance, método, evidencia, incertidumbre y limitaciones claros",
          ),
          t("An absolute slogan", "Un eslogan absoluto"),
          t("Omitting trade-offs", "Omitir compensaciones"),
          t("Using the largest percentage", "Usar el porcentaje más alto"),
        ],
        answer: 0,
        feedback: t(
          "Claims should never be stronger than the supporting evidence.",
          "Las afirmaciones nunca deben ser más fuertes que la evidencia que las sostiene.",
        ),
      },
    ],
  },
];
