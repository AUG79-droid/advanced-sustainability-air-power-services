export type QuickCase = {title: string; context: string; facts: [string, string][]; question: string; options: string[]; correct: number; explanation: string};
export const quickCaseData: Record<number,{ es: QuickCase; en: QuickCase }> = {
  "2": {
  "es": {
    "title": "¿Qué conclusiones permite el ensayo de motor?",
    "context": "Caso ficticio. Una instalación de Eurofighter realiza 40 pruebas equivalentes en cada uno de dos periodos consecutivos de cuatro semanas. Un cambio reduce tiempo de funcionamiento, pero aumenta las pruebas por la tarde, cerca de viviendas. Todavía no se ha medido el nivel de ruido en estas viviendas.",
    "facts": [
      [
        "Combustible antes / después",
        "250 / 230 litros por prueba"
      ],
      [
        "Pruebas después de las 19:00",
        "6 / 18"
      ],
      [
        "Quejas registradas por periodo",
        "3 / 14"
      ],
      [
        "Viviendas cercanas",
        "20; exposición sin medir"
      ]
    ],
    "question": "¿Puede declararse una mejora ambiental global?",
    "options": [
      "Sí, ha bajado el combustible.",
      "No: comunicar el ahorro medido e investigar la exposición acústica.",
      "No existe ninguna mejora."
    ],
    "correct": 1,
    "explanation": "Hay un ahorro del 8 % de combustible por prueba, pero no se conocen las consecuencias acústicas sobre las viviendas."
  },
  "en": {
    "title": "What can be concluded from the engine-test trial?",
    "context": "Fictional case. A Eurofighter facility conducts 40 comparable tests in each of two successive four-week periods. A revised procedure cuts unnecessary engine running but shifts more tests into the evening near homes. Noise exposure at those homes has not yet been measured.",
    "facts": [
      [
        "Fuel before / after",
        "250 / 230 litres per test"
      ],
      [
        "Tests after 19:00",
        "6 / 18"
      ],
      [
        "Complaints per period",
        "3 / 14"
      ],
      [
        "Nearby homes",
        "20; exposure not measured"
      ]
    ],
    "question": "Can an overall environmental improvement be claimed?",
    "options": [
      "Yes: fuel use is lower.",
      "Not yet: report measured fuel saving and investigate local noise exposure.",
      "No improvement of any kind has occurred."
    ],
    "correct": 1,
    "explanation": "Fuel per test is 8% lower, but noise effects at nearby homes have not been established."
  }
},
  "1": {
    "es": {
      "title": "¿Podemos aprobar la electrificación del equipo de tierra?",
      "context": "Caso ficticio. Una base prueba equipos eléctricos de apoyo al A400M durante 30 operaciones de preparación del avión, comparables con 30 operaciones anteriores con equipos diésel. La reducción de consumo es prometedora, pero un equipo eléctrico no estuvo disponible en tres turnos. La base exige completar al menos 29 de 30 operaciones sin retrasos atribuibles al equipo.",
      "facts": [
        [
          "Consumo antes",
          "30 L de diésel por operación"
        ],
        [
          "Consumo después",
          "8 L de diésel + 90 kWh de electricidad"
        ],
        [
          "Disponibilidad antes / después",
          "29/30 frente a 27/30 operaciones"
        ],
        [
          "Alcance de la evaluación",
          "Aún faltan fabricación, batería y despliegues"
        ]
      ],
      "question": "El equipo quiere declarar una reducción ambiental total y sustituir ya todos los equipos diésel. ¿Qué decides?",
      "options": [
        "Aprobar la sustitución total: se ha reducido el diésel.",
        "Rechazar cualquier electrificación, aunque el consumo mejore.",
        "Mantener un piloto acotado: incluir electricidad y ciclo de vida, y resolver primero el incumplimiento de disponibilidad."
      ],
      "correct": 2,
      "explanation": "El nuevo sistema consume menos diésel, pero también electricidad, cuya procedencia y factor de emisión deben incluirse. Además, 27/30 está por debajo de las 29/30 operaciones exigidas. No se puede aprobar el despliegue general ni afirmar un beneficio ambiental total sin verificar ambos aspectos."
    },
    "en": {
      "title": "Can we approve electrifying ground-support equipment?",
      "context": "Fictional case. A base tests electric support equipment for 30 comparable A400M aircraft turnarounds, against 30 earlier turnarounds with diesel equipment. Fuel use looks promising, but an electric unit was unavailable for three turnarounds. The base requires at least 29 out of 30 turnarounds to finish without equipment-related delays.",
      "facts": [
        [
          "Before",
          "30 L diesel per turnaround"
        ],
        [
          "After",
          "8 L diesel + 90 kWh electricity"
        ],
        [
          "Before / after availability",
          "29/30 versus 27/30 turnarounds"
        ],
        [
          "Assessment boundary",
          "Manufacture, battery and deployments not yet included"
        ]
      ],
      "question": "The team proposes claiming a total environmental reduction and replacing every diesel unit immediately. What should happen?",
      "options": [
        "Approve fleet-wide replacement because diesel use is lower.",
        "Reject all electrification, even if energy performance improves.",
        "Keep a bounded trial: include electricity and lifecycle effects and resolve the availability shortfall first."
      ],
      "correct": 2,
      "explanation": "Diesel use falls but electricity and its emission factor must also be included. Moreover, 27/30 is below the required 29/30 operational threshold. Neither a full rollout nor a total environmental claim is justified without further evidence."
    }
  },
  "3": {
    "es": {
      "title": "¿Reparar localmente o intercambiar el componente?",
      "context": "Caso ficticio. Una unidad reparable puede pasar por un taller local autorizado o sustituirse por una unidad intercambiable de un centro homologado. Ambas opciones permiten devolver el avión al servicio, pero proporcionan distinta vida útil restante; la comparación ambiental debe referirse al mismo periodo de servicio, no solo a una reparación aislada.",
      "facts": [
        [
          "Reparación local",
          "90 kWh y 2 L de disolvente; 300 h de vida estimada"
        ],
        [
          "Intercambio",
          "Transporte de 900 km; 600 h de vida verificada"
        ],
        [
          "Comparación necesaria",
          "Servicio equivalente de 600 h"
        ],
        [
          "Dato pendiente",
          "Impactos de transporte, residuos, fabricación y tasa de fallo"
        ]
      ],
      "question": "Con estos datos, ¿puedes afirmar que la reparación local es la opción más sostenible?",
      "options": [
        "Sí, porque evita un transporte de 900 km.",
        "No todavía: comparar dos reparaciones locales frente a un intercambio para 600 h y completar los impactos y riesgos.",
        "Sí, porque siempre es mejor conservar la pieza original."
      ],
      "correct": 1,
      "explanation": "La unidad funcional correcta son 600 h de servicio. La opción local podría requerir dos reparaciones frente a un intercambio. Sin impactos comparables y probabilidad de fallo no existe base para elegir. Deben mantenerse seguridad y aprobación técnica."
    },
    "en": {
      "title": "Repair locally or exchange the component?",
      "context": "Fictional case. An authorised local workshop can repair a component, or an approved remote facility can supply an exchange unit. Both options restore the aircraft, but their remaining service lives differ; the environmental comparison must cover equivalent service, not just one repair transaction.",
      "facts": [
        [
          "Local repair",
          "90 kWh and 2 L solvent; estimated 300 h service"
        ],
        [
          "Exchange",
          "900 km transport; verified 600 h service"
        ],
        [
          "Comparable functional unit",
          "600 h service"
        ],
        [
          "Missing evidence",
          "Transport, waste, manufacture and failure rates"
        ]
      ],
      "question": "Can you conclude that local repair is the more sustainable choice?",
      "options": [
        "Yes, because it avoids 900 km of transport.",
        "Not yet: compare two local repairs with one exchange over 600 h and account for impacts and risks.",
        "Yes, because retaining the original part is always preferable."
      ],
      "correct": 1,
      "explanation": "The comparison requires 600 h of equivalent service. Local repair might need two repairs versus one exchange. Missing comparable impact and failure data prevents a defensible choice; technical approval and safety remain mandatory."
    }
  },
  "4": {
    "es": {
      "title": "¿Se puede afirmar que cambiar la altitud reduce el impacto climático?",
      "context": "Caso ficticio. Un planificador ensaya cambios de altitud en diez trayectorias de entrenamiento que podrían atravesar regiones favorables a estelas persistentes. El nuevo perfil debe cumplir restricciones de espacio aéreo, combustible de reserva y misión. La predicción meteorológica todavía tiene incertidumbre importante.",
      "facts": [
        [
          "Vuelos evaluados",
          "10 perfiles"
        ],
        [
          "Cambio de combustible estimado",
          "+3 % al variar altitud"
        ],
        [
          "Confianza en predicción de estelas",
          "Moderada; no hay medición posterior"
        ],
        [
          "Balance climático total",
          "No calculado ni validado"
        ]
      ],
      "question": "¿Qué autorización y comunicación serían defendibles?",
      "options": [
        "Afirmar una mejora climática neta porque se espera evitar estelas.",
        "Descartar definitivamente cualquier investigación sobre estelas.",
        "Permitir solo un ensayo autorizado y controlado, documentar el combustible adicional y no afirmar beneficio climático neto sin evidencia."
      ],
      "correct": 2,
      "explanation": "Evitar una estela prevista no demuestra por sí solo una mejora climática neta. El mayor consumo implica más CO₂ y la predicción de estelas es incierta. La seguridad, la misión y la cuantificación de ambos efectos son condiciones previas a cualquier conclusión."
    },
    "en": {
      "title": "Does a change in altitude reduce overall climate impact?",
      "context": "Fictional case. A planner examines altitude changes on ten training trajectories that may encounter conditions favourable to persistent contrails. The new profile must still meet airspace, fuel-reserve and mission requirements. Weather forecasts remain substantially uncertain.",
      "facts": [
        [
          "Flights considered",
          "10 profiles"
        ],
        [
          "Estimated fuel change",
          "+3% after changing altitude"
        ],
        [
          "Contrail forecast confidence",
          "Moderate; no post-flight verification"
        ],
        [
          "Total climate balance",
          "Not modelled or validated"
        ]
      ],
      "question": "What approval and communication are defensible?",
      "options": [
        "Claim a net climate benefit because contrails may be avoided.",
        "Reject any further contrail research permanently.",
        "Allow only a controlled, authorised trial, record extra fuel, and avoid net-climate claims until supported."
      ],
      "correct": 2,
      "explanation": "Avoiding a predicted contrail does not establish a net climate benefit. Extra fuel increases CO₂, while contrail predictions remain uncertain. Operational clearance and evidence of both effects are required before drawing a conclusion."
    }
  },
  "5": {
    "es": {
      "title": "¿El cambio de planificación ahorra realmente 450 kg por misión?",
      "context": "Caso ficticio. En un ensayo de planificación del A400M se comparan 20 misiones anteriores con 20 posteriores. El consumo medio aparente baja 450 kg, pero en el segundo periodo los aviones llevan menos carga y encuentran vientos más favorables. No se han reducido los requisitos de reservas.",
      "facts": [
        [
          "Misiones por periodo",
          "20 antes y 20 después"
        ],
        [
          "Ahorro aparente",
          "450 kg por misión"
        ],
        [
          "Diferencia de carga",
          "Las misiones posteriores llevan 1 t menos de media"
        ],
        [
          "Meteorología",
          "Viento más favorable después"
        ],
        [
          "Reservas y seguridad",
          "Requisitos sin cambios; deben comprobarse"
        ]
      ],
      "question": "¿Se puede aplicar el ahorro de 450 kg a todas las misiones del año?",
      "options": [
        "No. Hay que comparar misiones equivalentes en carga, ruta y viento, y verificar reservas y puntualidad.",
        "Sí. Basta multiplicar 450 kg por el número anual de misiones.",
        "Sí, si se excluyen del informe las misiones que consumieron más."
      ],
      "correct": 0,
      "explanation": "La diferencia de consumo puede deberse parcialmente a menor carga o vientos favorables. Antes de atribuirla a la nueva planificación se necesitan comparaciones ajustadas y comprobaciones de misión, despacho y reservas. Multiplicar el ahorro aparente produciría una estimación engañosa."
    },
    "en": {
      "title": "Does the planning change really save 450 kg per mission?",
      "context": "Fictional case. An A400M planning trial compares 20 missions before a change and 20 afterwards. Average fuel use seems 450 kg lower, but post-change flights carry lighter payloads and experience more favourable winds. Fuel-reserve requirements remain unchanged.",
      "facts": [
        [
          "Missions per period",
          "20 before and 20 after"
        ],
        [
          "Apparent saving",
          "450 kg per mission"
        ],
        [
          "Payload difference",
          "After group carries 1 tonne less on average"
        ],
        [
          "Weather",
          "More favourable winds after"
        ],
        [
          "Fuel reserves",
          "Same mandatory requirements"
        ]
      ],
      "question": "Can the 450 kg apparent saving be applied to all annual missions?",
      "options": [
        "No. Match missions for payload, route and wind, and check reserves and operational outcomes.",
        "Yes. Simply multiply 450 kg by annual missions.",
        "Yes, if higher-consumption missions are excluded from the report."
      ],
      "correct": 0,
      "explanation": "The fuel difference may partly result from lighter payloads or favourable winds. Attribution requires matched comparisons and checks on mission completion and reserves. Multiplying the unadjusted figure would mislead."
    }
  },
  "6": {
    "es": {
      "title": "¿Qué hacemos con un aumento de NO₂ cerca de un área ocupada?",
      "context": "Caso ficticio. Una zona de pruebas de motor mantiene el mismo consumo anual, pero las pruebas vespertinas coinciden con viento débil y una dirección que lleva los gases hacia una zona de trabajo ocupada. Se comparan medidas en un punto a barlovento y otro a sotavento durante pruebas equivalentes.",
      "facts": [
        [
          "NO₂ a barlovento",
          "28 → 30 µg/m³ (ejemplo horario)"
        ],
        [
          "NO₂ a sotavento",
          "55 → 85 µg/m³ (ejemplo horario)"
        ],
        [
          "Emisiones anuales estimadas",
          "Sin cambio significativo"
        ],
        [
          "Condición coincidente",
          "Viento débil y zona de trabajo ocupada"
        ]
      ],
      "question": "¿Qué medida es más razonable antes de repetir estas pruebas?",
      "options": [
        "No intervenir: el total anual de emisiones no ha aumentado.",
        "Afirmar que se ha incumplido un límite legal solo por esas dos medidas.",
        "Revisar horario o ubicación de las pruebas y medir nuevamente, con meteorología comparable, la exposición de la zona ocupada."
      ],
      "correct": 2,
      "explanation": "Un inventario anual estable no garantiza una exposición local estable. Las mediciones horarias ilustrativas no bastan por sí solas para declarar incumplimiento de un valor legal: hay que identificar el contaminante, método, tiempo de promedio y norma aplicable. Sí justifican investigar y controlar la exposición."
    },
    "en": {
      "title": "What should we do about increased NO₂ near occupied areas?",
      "context": "Fictional case. An engine-test area retains roughly the same annual fuel use, but evening tests coincide with low winds directing emissions towards an occupied work area. Upwind and downwind monitoring points are compared during similar test operations.",
      "facts": [
        [
          "Upwind NO₂",
          "28 → 30 µg/m³ (illustrative hourly reading)"
        ],
        [
          "Downwind NO₂",
          "55 → 85 µg/m³ (illustrative hourly reading)"
        ],
        [
          "Estimated annual emissions",
          "No material change"
        ],
        [
          "Coincident condition",
          "Low wind and an occupied work area"
        ]
      ],
      "question": "What should happen before these tests continue unchanged?",
      "options": [
        "Take no action: annual emissions have not increased.",
        "Claim a statutory breach from the two readings alone.",
        "Review test times or location and remeasure exposure at the occupied area under comparable weather conditions."
      ],
      "correct": 2,
      "explanation": "A stable annual inventory does not ensure stable local exposure. Illustrative hourly readings alone cannot establish legal exceedance without the relevant averaging period, method and standard. They do justify investigation and exposure controls."
    }
  },
  "7": {
    "es": {
      "title": "¿Mover las pruebas de A400M beneficia a todo el entorno?",
      "context": "Caso ficticio. Se propone trasladar un punto de pruebas de motor del A400M. Un modelo prevé menos ruido en el núcleo residencial más próximo, pero la nueva ubicación está cerca de un hangar ocupado y exige remolcar el avión más distancia. Los datos acústicos son previsiones, no medidas verificadas.",
      "facts": [
        [
          "Nivel previsto en viviendas",
          "80 → 73 dB durante el evento"
        ],
        [
          "Nivel previsto junto al hangar",
          "88 → 96 dB durante el evento"
        ],
        [
          "Remolque hasta el punto de prueba",
          "12 → 24 minutos"
        ],
        [
          "Medidas laborales y de seguridad",
          "Aún no verificadas"
        ]
      ],
      "question": "¿Se debe aprobar de inmediato el traslado?",
      "options": [
        "Sí. Basta con reducir el ruido modelizado en las viviendas.",
        "No aún. Validar los niveles en viviendas y puestos de trabajo, revisar exposición y seguridad del remolque y ensayar una ubicación viable.",
        "Sí, porque los efectos sobre los trabajadores no forman parte del análisis acústico."
      ],
      "correct": 1,
      "explanation": "La disminución prevista en viviendas podría trasladar exposición a trabajadores y exigir más remolque. Un cambio debe considerar ambos grupos afectados, seguridad, operación y meteorología antes de aprobarse. Los dB son valores ilustrativos y no sustituyen las evaluaciones reglamentarias."
    },
    "en": {
      "title": "Does moving the A400M engine-test area benefit everyone?",
      "context": "Fictional case. A base proposes moving an A400M engine-test position. A model predicts lower noise at a nearby residential settlement, but the new site is near an occupied hangar and requires longer aircraft towing. Noise figures are predictions, not validated measurements.",
      "facts": [
        [
          "Predicted sound at homes",
          "80 → 73 dB during the event"
        ],
        [
          "Predicted sound near hangar",
          "88 → 96 dB during the event"
        ],
        [
          "Tow time to test position",
          "12 → 24 minutes"
        ],
        [
          "Worker and towing safety controls",
          "Not yet validated"
        ]
      ],
      "question": "Should the relocation be approved immediately?",
      "options": [
        "Yes, because modelled residential noise is lower.",
        "Not yet. Validate sound at homes and workplaces, assess exposure and towing safety, and trial a feasible location.",
        "Yes, because employee exposure does not belong in a noise study."
      ],
      "correct": 1,
      "explanation": "A predicted reduction at homes may shift exposure to workers and increase towing. Approval must account for both receptor groups, safety, operations and weather. Illustrative dB figures do not replace statutory assessments."
    }
  },
  "8": {
    "es": {
      "title": "¿Podemos reutilizar el agua de lavado en un despliegue?",
      "context": "Caso ficticio. Una unidad móvil de tratamiento se prueba en una zona de despliegue con suministro de agua limitado. Se pretende reutilizar el agua de lavado de aeronaves, pero las muestras tratadas no alcanzan el criterio interno fijado para el proceso y no se ha confirmado el destino del rechazo.",
      "facts": [
        [
          "Agua dulce actual por lavado",
          "1.000 L"
        ],
        [
          "Reutilización propuesta",
          "600 L por lavado"
        ],
        [
          "Turbidez del agua tratada",
          "5 NTU"
        ],
        [
          "Límite interno validado para ese uso",
          "2 NTU máximo"
        ],
        [
          "Gestión del rechazo",
          "Destino pendiente de confirmación"
        ]
      ],
      "question": "¿Autorizarías ya la reutilización del agua en el lavado?",
      "options": [
        "Sí. Ahorrar 600 L es suficiente para aprobar.",
        "No aún. Ajustar y verificar el tratamiento, cumplir el criterio de calidad y asegurar el destino del rechazo.",
        "Sí, si el agua parece visualmente limpia."
      ],
      "correct": 1,
      "explanation": "La turbidez de 5 NTU supera el umbral interno del ejemplo (2 NTU); el proceso no está validado para esa reutilización. También falta una ruta autorizada para el agua rechazada. El ahorro de agua es potencial, no una autorización para ignorar calidad y residuos."
    },
    "en": {
      "title": "Can wash water be reused during a deployment?",
      "context": "Fictional case. A mobile treatment unit is tested at a water-constrained deployed site. It is intended to reuse aircraft wash water, but treated samples do not meet the process-specific internal quality criterion and the destination of rejected water is not confirmed.",
      "facts": [
        [
          "Current fresh water per wash",
          "1,000 L"
        ],
        [
          "Proposed reuse",
          "600 L per wash"
        ],
        [
          "Treated water turbidity",
          "5 NTU"
        ],
        [
          "Validated internal criterion for that use",
          "Maximum 2 NTU"
        ],
        [
          "Reject-water route",
          "Not confirmed"
        ]
      ],
      "question": "Would you authorise this water reuse now?",
      "options": [
        "Yes. Saving 600 L is enough.",
        "Not yet. Improve and verify treatment, meet the quality criterion and confirm a suitable reject-water route.",
        "Yes, if the water looks clean."
      ],
      "correct": 1,
      "explanation": "Turbidity of 5 NTU fails the illustrative internal limit of 2 NTU, so reuse is not validated. The rejected water also needs an appropriate approved route. Potential savings cannot override process quality and waste controls."
    }
  },
  "9": {
  "es": {
    "title": "¿Podemos modificar el drenaje junto al área operativa?",
    "context": "Caso ficticio. En una zona próxima a operaciones del A400M se plantea drenar una charca temporal que puede atraer aves. Las obras reducirían el agua estancada en ese punto, pero desplazarían la escorrentía a una parcela de hábitat estacional. El inventario ecológico solo cubre una visita en época seca.",
    "facts": [
      [
        "Zona donde se eliminaría agua estancada",
        "0,6 ha"
      ],
      [
        "Área receptora de escorrentía",
        "0,4 ha de hábitat estacional"
      ],
      [
        "Estudios de fauna",
        "Una visita en época seca"
      ],
      [
        "Hidrología y estatus de especies",
        "Sin verificación suficiente"
      ]
    ],
    "question": "¿Aprobarías las obras de drenaje tal como están proyectadas?",
    "options": [
      "Sí, porque cualquier reducción de agua es positiva cerca de aeronaves.",
      "No por ahora: evaluar alternativas, hidrología y fauna estacional, manteniendo controles temporales de riesgo de aves.",
      "Sí, porque una sola visita demuestra que no hay especies sensibles."
    ],
    "correct": 1,
    "explanation": "Reducir un atrayente de aves puede ser necesario para la seguridad, pero desplazar la escorrentía sin evaluación podría crear otro problema ecológico o de operación. Deben revisarse alternativas y requisitos legales sin desatender el control inmediato del peligro de fauna."
  },
  "en": {
    "title": "Should drainage works near an operating area be approved?",
    "context": "Fictional case. Near A400M operations, a team proposes draining a temporary pool that may attract birds. The works would reduce standing water at that location but redirect runoff towards seasonal habitat. Ecological evidence consists of one dry-season visit only.",
    "facts": [
      [
        "Area of standing water to remove",
        "0.6 ha"
      ],
      [
        "Runoff receiving area",
        "0.4 ha seasonal habitat"
      ],
      [
        "Wildlife survey",
        "One dry-season visit"
      ],
      [
        "Hydrology and protected species",
        "Insufficiently checked"
      ]
    ],
    "question": "Would you approve the proposed drainage works as designed?",
    "options": [
      "Yes. Eliminating water is always environmentally positive near aircraft.",
      "Not yet. Assess alternatives, hydrology and seasonal wildlife while maintaining interim bird-risk controls.",
      "Yes. One site visit establishes that no sensitive species exist."
    ],
    "correct": 1,
    "explanation": "Reducing bird attractants can be important for safety, but redirecting runoff without assessment may shift risks to habitat or operations. Alternatives and legal requirements need review while immediate wildlife hazards remain controlled."
  }
},
  "10": {
  "es": {
    "title": "¿Puede empezar esta reparación de composite en despliegue?",
    "context": "Caso ficticio. Una reparación autorizada de un panel requiere lijado de composite, aplicación de resina y curado. El equipo está desplazado y trabaja en un refugio provisional. El procedimiento aprobado exige extracción localizada durante el lijado; en el emplazamiento no se alcanza el caudal de extracción establecido.",
    "facts": [
      [
        "Extracción exigida por el procedimiento del supuesto",
        "500 m³/h"
      ],
      [
        "Extracción disponible",
        "200 m³/h"
      ],
      [
        "Residuos de polvo y resina",
        "Almacenamiento específico aún no preparado"
      ],
      [
        "Alternativa",
        "Taller aprobado disponible con mayor tiempo de traslado"
      ]
    ],
    "question": "¿Qué decisión tomarías antes de iniciar el lijado?",
    "options": [
      "Iniciar el trabajo con una mascarilla como único control alternativo.",
      "Empezar solo la mitad del trabajo para cumplir el plazo.",
      "No iniciar el lijado en ese refugio: habilitar controles aprobados o trasladar la reparación a una instalación adecuada."
    ],
    "correct": 2,
    "explanation": "La extracción disponible no cumple el requisito supuesto del procedimiento y falta almacenamiento seguro de residuos. El equipo no debe improvisar una modificación del proceso por presión de plazo; los responsables técnicos y de seguridad deben aprobar cualquier alternativa."
  },
  "en": {
    "title": "Can this deployed composite repair begin?",
    "context": "Fictional case. An approved panel repair requires composite sanding, resin application and curing. The team is deployed in a temporary shelter. Its approved procedure requires local extraction during sanding, but the site cannot meet the specified extraction rate.",
    "facts": [
      [
        "Extraction required by the assumed procedure",
        "500 m³/h"
      ],
      [
        "Available extraction",
        "200 m³/h"
      ],
      [
        "Dust and resin waste",
        "Dedicated storage not prepared"
      ],
      [
        "Alternative",
        "Approved workshop available with longer transport time"
      ]
    ],
    "question": "What should the team do before sanding starts?",
    "options": [
      "Start work with a respirator as the only alternative control.",
      "Start half the work to meet the deadline.",
      "Do not sand in that shelter: establish approved controls or move the repair to a suitable facility."
    ],
    "correct": 2,
    "explanation": "Available extraction fails the assumed approved requirement and waste storage is not ready. Schedule pressure cannot justify an unapproved process change; technical and safety authorities must approve any equivalent control."
  }
},
  "11": {
  "es": {
    "title": "¿Puede un algoritmo sustituir ya las inspecciones del Eurofighter?",
    "context": "Caso ficticio. Un equipo propone reducir inspecciones programadas de un componente mediante diagnóstico predictivo. El algoritmo se ha probado principalmente con temperaturas moderadas. En condiciones frías genera muchas más falsas alarmas y todavía no tiene aprobación para sustituir la inspección física exigida.",
    "facts": [
      [
        "Sensibilidad en datos de validación",
        "94 %"
      ],
      [
        "Falsas alarmas con temperatura moderada",
        "4 %"
      ],
      [
        "Falsas alarmas con frío",
        "28 %"
      ],
      [
        "Autorización para eliminar inspecciones",
        "No concedida"
      ]
    ],
    "question": "¿Qué implantación sería aceptable en este momento?",
    "options": [
      "Suprimir las inspecciones físicas porque la sensibilidad alcanza el 94 %.",
      "Usar el modelo en paralelo, medir errores por configuración y temperatura y mantener inspecciones hasta la aprobación competente.",
      "Desactivar permanentemente toda monitorización predictiva."
    ],
    "correct": 1,
    "explanation": "La sensibilidad por sí sola no demuestra seguridad en todas las condiciones. El 28 % de falsas alarmas en frío señala un problema de aplicabilidad y no existe autorización para retirar una tarea exigida. Un ensayo en paralelo puede generar evidencia sin comprometer el control aprobado."
  },
  "en": {
    "title": "Can an algorithm replace Eurofighter inspections now?",
    "context": "Fictional case. A team proposes reducing scheduled component inspections using predictive diagnostics. The model was mainly evaluated at moderate temperatures. In cold conditions it generates many more false alerts and has not been approved to replace the mandated physical inspection.",
    "facts": [
      [
        "Sensitivity on validation data",
        "94%"
      ],
      [
        "False alarms in moderate conditions",
        "4%"
      ],
      [
        "False alarms in cold conditions",
        "28%"
      ],
      [
        "Approval to remove required inspections",
        "Not granted"
      ]
    ],
    "question": "What implementation is acceptable now?",
    "options": [
      "Remove physical inspections because sensitivity is 94%.",
      "Use the model in parallel, measure performance across conditions and retain inspections pending competent approval.",
      "Permanently ban any predictive monitoring."
    ],
    "correct": 1,
    "explanation": "Sensitivity alone does not establish safe performance across operating conditions. A 28% cold-weather false-alert rate highlights applicability issues, and removal of mandatory inspections is not authorised. Parallel monitoring builds evidence without bypassing approved controls."
  }
},
  "12": {
  "es": {
    "title": "¿Sustituir ahora el equipo de apoyo del A400M?",
    "context": "Caso ficticio. Un equipo de apoyo operativo puede seguir usándose cinco años más con mantenimiento aprobado. Un sustituto consumiría menos electricidad anual, pero fabricarlo tiene un consumo incorporado considerable y requiere dos años de soporte paralelo. Ambos cumplen la función; la decisión debe incluir las etapas del ciclo de vida.",
    "facts": [
      [
        "Consumo eléctrico anual actual",
        "12 MWh"
      ],
      [
        "Consumo anual del nuevo equipo",
        "8 MWh"
      ],
      [
        "Energía incorporada de fabricación del sustituto",
        "40 MWh"
      ],
      [
        "Vida remanente del equipo actual",
        "5 años"
      ],
      [
        "Soporte paralelo de transición",
        "Energía adicional, aún sin cuantificar"
      ]
    ],
    "question": "¿Demuestran estos datos que sustituir ahora es mejor en términos energéticos?",
    "options": [
      "No. El ahorro operativo de cinco años sería 20 MWh, inferior a los 40 MWh de fabricación, incluso antes de incluir la transición.",
      "Sí. La cifra anual de 8 MWh es menor y eso siempre decide.",
      "Sí. La fabricación no forma parte de la comparación porque ocurre fuera de la base."
    ],
    "correct": 0,
    "explanation": "Ahorro anual: 12 − 8 = 4 MWh. En cinco años: 20 MWh, frente a 40 MWh incorporados al sustituto; aún falta contabilizar el soporte paralelo. Esta comparación energética orientativa no sustituye el análisis completo de seguridad, fiabilidad, fin de vida o coste."
  },
  "en": {
    "title": "Should the A400M support equipment be replaced now?",
    "context": "Fictional case. An operating support asset can remain in approved service for five more years. A replacement uses less electricity each year but has substantial manufacturing energy and needs two years of parallel support. Both meet the required function; lifecycle stages matter.",
    "facts": [
      [
        "Current annual electricity",
        "12 MWh"
      ],
      [
        "Replacement annual electricity",
        "8 MWh"
      ],
      [
        "Manufacturing energy embodied in replacement",
        "40 MWh"
      ],
      [
        "Remaining life of current asset",
        "5 years"
      ],
      [
        "Parallel transition support",
        "Extra energy, not yet quantified"
      ]
    ],
    "question": "Do these data prove that immediate replacement is better in energy terms?",
    "options": [
      "No. Five-year operational saving is 20 MWh, below the 40 MWh manufacturing energy, before transition energy.",
      "Yes. The 8 MWh annual figure is lower and always decides.",
      "Yes. Manufacturing is outside the base and can be excluded."
    ],
    "correct": 0,
    "explanation": "Annual saving is 12 − 8 = 4 MWh; over five years, 20 MWh against 40 MWh of embodied manufacturing energy, before transition energy. This illustrative energy check does not replace the broader safety, reliability, end-of-life or cost assessment."
  }
},
  "13": {
  "es": {
    "title": "¿Se puede autorizar el desmantelamiento y declarar «cero vertedero»?",
    "context": "Caso ficticio. Se prepara la retirada de una aeronave de transporte militar. El licitador ofrece recuperar componentes y promete enviar cero residuos a vertedero, pero no proporciona instalaciones de destino. Parte de los componentes carece de trazabilidad y sigue pendiente la identificación de determinados residuos peligrosos.",
    "facts": [
      [
        "Componentes propuestos para reutilización",
        "120"
      ],
      [
        "Componentes sin trazabilidad completa",
        "35"
      ],
      [
        "Instalaciones finales de tratamiento",
        "No identificadas"
      ],
      [
        "Estudio de sustancias y residuos peligrosos",
        "Incompleto"
      ]
    ],
    "question": "¿Qué se puede aprobar o comunicar en este momento?",
    "options": [
      "Publicar «cero vertedero» y liberar los 120 componentes.",
      "Aprobar la reutilización de las 35 piezas sin registros porque parecen válidas.",
      "Exigir inventario, trazabilidad, desmilitarización y destinos autorizados antes de liberar piezas o verificar la promesa del licitador."
    ],
    "correct": 2,
    "explanation": "Sin registros completos no puede liberarse una pieza para reutilización aeronáutica, y «cero vertedero» no está demostrado sin destinos verificables. Los residuos peligrosos y las exigencias de seguridad y desmilitarización también requieren un proceso documentado."
  },
  "en": {
    "title": "Can dismantling and a ‘zero landfill’ claim be approved?",
    "context": "Fictional case. A military transport aircraft is being retired. A bidder proposes recovering components and promises zero landfill, but does not name downstream treatment facilities. Some parts have incomplete traceability and the hazardous-material survey remains unfinished.",
    "facts": [
      [
        "Components proposed for reuse",
        "120"
      ],
      [
        "Components without complete records",
        "35"
      ],
      [
        "Final waste-treatment facilities",
        "Not identified"
      ],
      [
        "Hazardous-material and waste survey",
        "Incomplete"
      ]
    ],
    "question": "What can be approved or claimed at this stage?",
    "options": [
      "Publish ‘zero landfill’ and release all 120 parts.",
      "Approve reuse of the 35 unrecorded parts because they look serviceable.",
      "Require inventory, traceability, demilitarisation and authorised waste destinations before parts are released or the bidder claim is verified."
    ],
    "correct": 2,
    "explanation": "Parts lacking records cannot simply be released for aviation reuse, and zero landfill is unproven without traceable downstream routes. Hazardous waste, security and demilitarisation controls also need documented evidence."
  }
},
  "14": {
  "es": {
    "title": "¿Cómo gestionar una avería de suministro durante una ola de calor?",
    "context": "Caso ficticio. Durante una ola de calor, una base pierde el suministro habitual de un producto químico aprobado para una operación de mantenimiento. Un proveedor ofrece una alternativa todavía no cualificada. En un área de trabajo se supera un umbral interno de temperatura que obliga a revisar las condiciones de trabajo.",
    "facts": [
      [
        "Stock del producto aprobado",
        "12 días"
      ],
      [
        "Interrupción prevista de suministro",
        "20 días"
      ],
      [
        "Sustituto ofrecido",
        "Sin cualificación ni aprobación técnica"
      ],
      [
        "Temperatura en el área afectada",
        "34 °C"
      ],
      [
        "Umbral interno de revisión de condiciones",
        "30 °C en este supuesto"
      ]
    ],
    "question": "¿Qué respuesta mantiene el control de ambos riesgos?",
    "options": [
      "Utilizar inmediatamente el sustituto y mantener todos los turnos sin cambios.",
      "Escalonar o detener las tareas afectadas según controles de calor, buscar suministro cualificado y elevar el riesgo operativo; no usar químicos sin aprobación.",
      "Ocultar la rotura de suministro hasta que se agote el stock."
    ],
    "correct": 1,
    "explanation": "El stock cubre 12 de 20 días, por lo que existe una brecha. La alternativa requiere cualificación; además, 34 °C activa la revisión interna del supuesto. La disponibilidad importa, pero no autoriza incumplir requisitos técnicos ni de prevención."
  },
  "en": {
    "title": "How should a supply failure during a heatwave be handled?",
    "context": "Fictional case. During a heatwave, a base loses access to an approved maintenance chemical. Another supplier offers an unqualified substitute. A work area also exceeds an internal heat trigger requiring working-condition review.",
    "facts": [
      [
        "Approved chemical stock",
        "12 days"
      ],
      [
        "Expected supply interruption",
        "20 days"
      ],
      [
        "Offered substitute",
        "Not technically qualified or approved"
      ],
      [
        "Temperature in affected work area",
        "34°C"
      ],
      [
        "Internal working-condition review trigger",
        "30°C in this example"
      ]
    ],
    "question": "Which response controls both risks?",
    "options": [
      "Use the offered substitute immediately and keep shifts unchanged.",
      "Reschedule or stop affected work under heat controls, seek qualified supply and escalate mission implications; do not use unapproved chemicals.",
      "Conceal the disruption until stock runs out."
    ],
    "correct": 1,
    "explanation": "Stock covers only 12 of the 20 days, leaving a supply gap. The alternative requires approval; 34°C also triggers the assumed internal heat review. Operational availability does not justify bypassing technical or worker-safety controls."
  }
},
  "15": {
  "es": {
    "title": "¿Puede publicarse una mejora ambiental global de Air Power Services?",
    "context": "Caso ficticio. El borrador anual reúne resultados de electricidad, combustible y reciclaje y concluye que todos los servicios han mejorado. Sin embargo, la superficie cubierta por el indicador de electricidad ha cambiado respecto al año anterior y un ensayo de consumo se ha extrapolado al conjunto de las operaciones.",
    "facts": [
      [
        "Electricidad del centro",
        "−12 %, pero cambia el perímetro medido"
      ],
      [
        "Ensayo de combustible",
        "12 operaciones comparables"
      ],
      [
        "Población a la que se extrapola el ensayo",
        "180 operaciones de otro alcance"
      ],
      [
        "Datos de reciclaje",
        "Sin trazabilidad suficiente del tratamiento final"
      ]
    ],
    "question": "¿Firmarías la afirmación «Air Power Services ha mejorado globalmente su sostenibilidad»?",
    "options": [
      "Sí: basta con que los tres indicadores parezcan positivos.",
      "No como afirmación global: corregir comparabilidad y trazabilidad, delimitar cada resultado y no extrapolar el piloto sin evidencia.",
      "Sí, siempre que se añada una imagen ambiental convincente."
    ],
    "correct": 1,
    "explanation": "La variación de perímetro invalida una comparación directa del −12 %. Doce operaciones no prueban el resultado de otras 180, y el destino final del reciclaje no está verificado. Solo deben publicarse resultados específicos con alcance, metodología, limitaciones y trazabilidad."
  },
  "en": {
    "title": "Can an overall Air Power Services sustainability improvement be claimed?",
    "context": "Fictional case. The annual draft combines electricity, fuel and recycling and claims that all services have improved. However, the electricity reporting boundary changed from the previous year, and one fuel trial has been extrapolated across a much larger operation.",
    "facts": [
      [
        "Site electricity",
        "−12%, but the measured boundary changed"
      ],
      [
        "Fuel trial",
        "12 comparable operations"
      ],
      [
        "Population to which the trial was extrapolated",
        "180 operations in a different scope"
      ],
      [
        "Recycling data",
        "Insufficient final-treatment traceability"
      ]
    ],
    "question": "Would you sign the statement ‘Air Power Services has improved overall sustainability’?",
    "options": [
      "Yes: three positive-looking indicators are sufficient.",
      "Not as an overall claim: correct comparability and traceability, limit each result and avoid extrapolating the pilot without evidence.",
      "Yes, provided it has convincing environmental imagery."
    ],
    "correct": 1,
    "explanation": "Changed boundaries invalidate direct comparison of the 12% figure. Twelve operations do not establish results for another 180, and recycling outcomes are unverified. Publish only specific, traceable claims with declared scope, method and limitations."
  }
}
};
