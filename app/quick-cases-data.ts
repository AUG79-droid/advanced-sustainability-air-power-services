export type QuickCase = {title: string; context: string; facts: [string, string][]; question: string; options: string[]; correct: number; explanation: string};
export const quickCaseData: Record<number,{ es: QuickCase; en: QuickCase }> = {
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
  }
};
