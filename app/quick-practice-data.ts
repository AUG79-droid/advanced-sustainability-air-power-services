export type PracticePrompt = {title:string;question:string;options:string[];correct:number;explanation:string};
export const practicePrompts: Record<number, {activity:{es:PracticePrompt;en:PracticePrompt};lab:{es:PracticePrompt;en:PracticePrompt}}> = {
  "1": {
    "activity": {
      "es": {
        "title": "¿Qué dato impide cerrar la comparación?",
        "question": "¿Qué solicitarías antes de comparar el equipo diésel con el eléctrico?",
        "options": [
          "Solo un catálogo comercial.",
          "Consumo eléctrico medido, factor de red y efectos de fabricación y batería.",
          "Una fotografía del nuevo equipo."
        ],
        "correct": 1,
        "explanation": "Sin la electricidad consumida y los efectos de fabricación, la comparación de CO₂ está incompleta."
      },
      "en": {
        "title": "Which data are missing?",
        "question": "What would you request before comparing diesel and electric units?",
        "options": [
          "A sales brochure only.",
          "Measured electricity, grid factor and equipment/battery manufacture impacts.",
          "A photograph of the new unit."
        ],
        "correct": 1,
        "explanation": "Without electricity use and manufacturing impacts, the CO₂ comparison is incomplete."
      }
    },
    "lab": {
      "es": {
        "title": "¿Se puede extender el piloto?",
        "question": "¿Qué requisito operativo deben cumplir los equipos antes de sustituir los actuales?",
        "options": [
          "Completar al menos 29 de 30 operaciones sin retrasos atribuibles al equipo.",
          "Ahorrar combustible en al menos una operación.",
          "Que los equipos sean más silenciosos sin medir su disponibilidad."
        ],
        "correct": 0,
        "explanation": "El sistema nuevo solo alcanza 27/30; primero debe cumplir el requisito de disponibilidad."
      },
      "en": {
        "title": "Can the trial be extended?",
        "question": "Which operational gate is required before replacing current equipment?",
        "options": [
          "Complete at least 29 of 30 turnarounds without equipment-related delays.",
          "Save fuel on at least one turnaround.",
          "Be quieter without measuring availability."
        ],
        "correct": 0,
        "explanation": "The new system reaches only 27/30; it must satisfy the availability gate first."
      }
    }
  },
  "2": {
    "activity": {
      "es": {
        "title": "¿Qué falta saber sobre el ruido?",
        "question": "¿Cuál es la evidencia más importante que todavía falta para interpretar el aumento de quejas?",
        "options": [
          "La potencia máxima declarada del avión.",
          "Una estimación anual de todo el combustible.",
          "Ruido medido en las viviendas durante pruebas comparables, con horarios y meteorología."
        ],
        "correct": 2,
        "explanation": "Las quejas indican preocupación, pero la exposición física y sus causas requieren medición y contexto."
      },
      "en": {
        "title": "What noise evidence is missing?",
        "question": "Which evidence is most important for interpreting the complaint increase?",
        "options": [
          "The aircraft's declared maximum power.",
          "An annual estimate of total fuel.",
          "Noise at homes during comparable tests, with times and weather."
        ],
        "correct": 2,
        "explanation": "Complaints flag concern, but actual exposure and its causes require measurement and context."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué afirmación podría publicarse?",
        "question": "¿Qué comunicación refleja los resultados disponibles sin exagerarlos?",
        "options": [
          "«El programa no genera molestias a nadie».",
          "«El combustible por prueba bajó un 8 %; seguimos evaluando el ruido y los horarios».",
          "«Se ha logrado una mejora ambiental total». "
        ],
        "correct": 1,
        "explanation": "El ahorro se calcula con 250 y 230 litros; el efecto en las viviendas todavía no está demostrado."
      },
      "en": {
        "title": "Which statement could be published?",
        "question": "Which statement reflects the available results without exaggeration?",
        "options": [
          "“The programme disturbs nobody”.",
          "“Fuel use per test fell by 8%; noise and schedules are still being assessed”.",
          "“A total environmental improvement has been achieved”."
        ],
        "correct": 1,
        "explanation": "The fuel saving follows from 250 and 230 litres; effects at homes are not yet established."
      }
    }
  },
  "3": {
    "activity": {
      "es": {
        "title": "¿Qué hace comparable a las opciones?",
        "question": "¿Qué unidad funcional debe usarse para comparar reparación e intercambio?",
        "options": [
          "Una transacción por componente.",
          "Un traslado de 900 km.",
          "600 horas equivalentes de servicio aceptable."
        ],
        "correct": 2,
        "explanation": "La reparación local promete 300 horas y el intercambio 600: comparar una operación con otra no cubre la misma función."
      },
      "en": {
        "title": "What makes the options comparable?",
        "question": "Which functional unit should compare repair and exchange?",
        "options": [
          "One component transaction.",
          "A 900 km journey.",
          "600 equivalent hours of acceptable service."
        ],
        "correct": 2,
        "explanation": "Local repair offers 300 h and exchange 600 h; one transaction each is not comparable."
      }
    },
    "lab": {
      "es": {
        "title": "¿Cuándo elegir la reparación local?",
        "question": "¿Qué justificación sería suficiente para escoger la opción local?",
        "options": [
          "Un análisis aprobado de las dos reparaciones necesarias, sus impactos y riesgos para 600 horas.",
          "Que el taller local esté más cerca.",
          "Que la opción local use disolvente pero menos transporte."
        ],
        "correct": 0,
        "explanation": "Debe verificarse la misma función, seguridad, vida remanente e impactos del ciclo de vida."
      },
      "en": {
        "title": "When can local repair be selected?",
        "question": "Which justification could support the local option?",
        "options": [
          "An approved assessment of both local repairs, their impacts and risks over 600 hours.",
          "That the local workshop is closer.",
          "That local repair uses solvent but less transport."
        ],
        "correct": 0,
        "explanation": "Equivalent function, safety, remaining life and lifecycle impacts must be verified."
      }
    }
  },
  "4": {
    "activity": {
      "es": {
        "title": "¿Qué falta para hablar de estelas?",
        "question": "¿Qué información ayudaría a evaluar la modificación de altitud?",
        "options": [
          "Solo el número de vuelos.",
          "Evidencia de estelas y su incertidumbre, además del combustible adicional y restricciones operativas.",
          "Un mensaje publicitario sobre aviación limpia."
        ],
        "correct": 1,
        "explanation": "La predicción de estelas es incierta y el combustible aumenta un 3 %; ambos aspectos deben evaluarse."
      },
      "en": {
        "title": "What contrail evidence is needed?",
        "question": "What information would help assess an altitude modification?",
        "options": [
          "Only the flight count.",
          "Contrail evidence and uncertainty, additional fuel and operational constraints.",
          "A clean aviation advertising message."
        ],
        "correct": 1,
        "explanation": "Contrail prediction is uncertain and fuel rises 3%; both effects must be assessed."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué límite impones al ensayo?",
        "question": "¿En qué condiciones podría autorizarse una prueba de modificación de altitud?",
        "options": [
          "En cualquier misión, con independencia del espacio aéreo.",
          "Solo si el piloto declara un balance climático positivo sin medirlo.",
          "Con autorización operativa, control de reservas y medición del combustible, sin prometer beneficio climático neto."
        ],
        "correct": 2,
        "explanation": "El ensayo puede generar información, pero no debe comprometer seguridad ni anticipar una conclusión climática."
      },
      "en": {
        "title": "What trial boundary is appropriate?",
        "question": "Under what conditions might an altitude-change trial be authorised?",
        "options": [
          "On any mission, regardless of airspace.",
          "Only if a net climate improvement is claimed without measurement.",
          "With operational clearance, fuel-reserve controls and fuel measurement, without an unverified net-climate claim."
        ],
        "correct": 2,
        "explanation": "Trials can gather information but must preserve safety and avoid premature climate conclusions."
      }
    }
  },
  "5": {
    "activity": {
      "es": {
        "title": "¿Qué hace comparables dos misiones?",
        "question": "¿Qué variable del ensayo puede explicar parte de los 450 kg de diferencia?",
        "options": [
          "La carga más ligera y el viento más favorable.",
          "El color del avión.",
          "El formato del informe final."
        ],
        "correct": 0,
        "explanation": "La atribución exige comparar carga, viento, ruta, reserva y configuración similares."
      },
      "en": {
        "title": "What makes two missions comparable?",
        "question": "Which trial variable may account for part of the 450 kg difference?",
        "options": [
          "Lighter payload and more favourable wind.",
          "Aircraft colour.",
          "Final report formatting."
        ],
        "correct": 0,
        "explanation": "Attribution needs comparable payload, wind, route, reserves and configuration."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué condición permitiría extender el procedimiento?",
        "question": "¿Qué condición debe verificarse antes de aplicar el cambio a más misiones?",
        "options": [
          "Que el primer vuelo haya consumido menos.",
          "Que el ahorro ajustado se mantenga en misiones equivalentes, sin incumplir reservas o disponibilidad.",
          "Que se excluyan las misiones con mal resultado."
        ],
        "correct": 1,
        "explanation": "Los 450 kg aparentes no bastan si las misiones difieren en carga y meteorología."
      },
      "en": {
        "title": "What supports procedure rollout?",
        "question": "What must be verified before applying the change to more missions?",
        "options": [
          "That the first flight used less fuel.",
          "That adjusted savings persist on comparable missions without reserve or readiness failures.",
          "That poor-result missions are excluded."
        ],
        "correct": 1,
        "explanation": "The apparent 450 kg is insufficient when mission conditions differ."
      }
    }
  },
  "6": {
    "activity": {
      "es": {
        "title": "¿Qué deben explicar los datos locales?",
        "question": "¿Qué comparación es necesaria para identificar la exposición junto al área de trabajo?",
        "options": [
          "Solo emisiones NOx del año completo.",
          "Una medida tomada después del ensayo sin saber el viento.",
          "Mediciones a barlovento y sotavento con horarios, actividad y condiciones meteorológicas."
        ],
        "correct": 2,
        "explanation": "Las concentraciones locales dependen de actividad, dispersión y ubicación, no solo de totales anuales."
      },
      "en": {
        "title": "What should local measurements explain?",
        "question": "Which comparison is needed to assess exposure at the work area?",
        "options": [
          "Annual NOx emissions only.",
          "One post-test reading without weather.",
          "Upwind/downwind readings with operation times and comparable weather."
        ],
        "correct": 2,
        "explanation": "Local concentrations depend on activity, dispersion and location, not just annual totals."
      }
    },
    "lab": {
      "es": {
        "title": "¿Cómo reducir la exposición?",
        "question": "¿Cuál sería un siguiente paso proporcionado ante el incremento a sotavento?",
        "options": [
          "Reprogramar o trasladar el ensayo si es viable y verificar la exposición.",
          "Declarar un incumplimiento legal sin conocer el periodo reglamentario.",
          "No actuar: el inventario anual está estable."
        ],
        "correct": 0,
        "explanation": "La medición justifica evaluar controles; no demuestra por sí sola un incumplimiento legal."
      },
      "en": {
        "title": "How can exposure be reduced?",
        "question": "What is a proportionate next step after the downwind increase?",
        "options": [
          "Reschedule or move testing where feasible and verify exposure.",
          "Declare a legal exceedance without the applicable assessment basis.",
          "Do nothing: the annual inventory is stable."
        ],
        "correct": 0,
        "explanation": "Monitoring justifies control review; it does not alone establish a legal exceedance."
      }
    }
  },
  "7": {
    "activity": {
      "es": {
        "title": "¿A quién puede trasladarse el ruido?",
        "question": "¿Qué grupo no puede quedar fuera al evaluar la nueva zona de pruebas?",
        "options": [
          "Solo los responsables de comunicación.",
          "Los trabajadores cercanos al hangar donde el modelo prevé 96 dB por evento.",
          "Los visitantes del museo de aviación."
        ],
        "correct": 1,
        "explanation": "Una mejora prevista en viviendas puede trasladar exposición acústica a personas que trabajan en la base."
      },
      "en": {
        "title": "To whom might noise be shifted?",
        "question": "Which group must not be omitted from the new test-site assessment?",
        "options": [
          "Only communications staff.",
          "Workers near the hangar where 96 dB per event is predicted.",
          "Aviation museum visitors."
        ],
        "correct": 1,
        "explanation": "An expected community improvement can shift noise exposure to base workers."
      }
    },
    "lab": {
      "es": {
        "title": "¿Aprobar el traslado o medir antes?",
        "question": "¿Qué condición evita desplazar el problema a otra zona?",
        "options": [
          "Que el coste del nuevo punto sea menor.",
          "Que el traslado alargue el remolque.",
          "Verificar niveles en ambos tipos de receptores y seguridad del remolque antes de aprobar."
        ],
        "correct": 2,
        "explanation": "La decisión debe proteger a viviendas y trabajadores y considerar el nuevo remolque."
      },
      "en": {
        "title": "Approve relocation or measure first?",
        "question": "Which condition prevents shifting the problem?",
        "options": [
          "That the new site is cheaper.",
          "That towing time increases.",
          "Verify sound for both receptor groups and towing safety before approval."
        ],
        "correct": 2,
        "explanation": "The decision must protect residents and workers and account for towing."
      }
    }
  },
  "8": {
    "activity": {
      "es": {
        "title": "¿Qué impide reutilizar el agua?",
        "question": "¿Qué dato demuestra que el agua tratada todavía no cumple el uso propuesto?",
        "options": [
          "La turbidez es 5 NTU y el límite interno para ese proceso es 2 NTU.",
          "La instalación tiene poco agua dulce.",
          "Se propone reutilizar 600 litros."
        ],
        "correct": 0,
        "explanation": "El agua fuera del criterio no debe reutilizarse hasta validar el tratamiento."
      },
      "en": {
        "title": "What prevents water reuse?",
        "question": "Which datum shows the treated water does not meet the proposed use?",
        "options": [
          "Turbidity is 5 NTU against a 2 NTU internal process limit.",
          "The site has limited fresh water.",
          "Reuse of 600 litres is proposed."
        ],
        "correct": 0,
        "explanation": "Water outside the defined criterion should not be reused until treatment is validated."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué condición permite poner en marcha la reutilización?",
        "question": "¿Qué debe demostrarse antes de volver a usar el agua tratada?",
        "options": [
          "Que tenga olor neutro.",
          "Que cumpla el criterio de calidad y exista un destino autorizado para el rechazo.",
          "Que el ahorro económico resulte atractivo."
        ],
        "correct": 1,
        "explanation": "La reutilización depende de calidad, seguridad del proceso y gestión correcta del rechazo."
      },
      "en": {
        "title": "What gate permits reuse?",
        "question": "What must be proven before treated water is reused?",
        "options": [
          "That it smells neutral.",
          "That quality criteria are met and reject water has an approved route.",
          "That the financial saving looks attractive."
        ],
        "correct": 1,
        "explanation": "Reuse depends on water quality, process safety and appropriate reject management."
      }
    }
  },
  "9": {
    "activity": {
      "es": {
        "title": "¿Qué evidencia ecológica falta?",
        "question": "¿Qué información falta para juzgar la obra de drenaje durante todo el año?",
        "options": [
          "Solo el coste de las obras.",
          "Un dibujo del drenaje final.",
          "Uso estacional de hábitat y especies, hidrología y efectos de la escorrentía."
        ],
        "correct": 2,
        "explanation": "Una única visita en época seca no describe la importancia del hábitat durante otras estaciones."
      },
      "en": {
        "title": "Which ecological evidence is missing?",
        "question": "What evidence is needed to assess the drainage works year-round?",
        "options": [
          "Construction costs alone.",
          "A drawing of the final drainage.",
          "Seasonal wildlife use, hydrology and runoff consequences."
        ],
        "correct": 2,
        "explanation": "One dry-season survey does not establish the habitat's value across other seasons."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué decisión protege operación y hábitat?",
        "question": "¿Cuál sería el siguiente paso más controlado?",
        "options": [
          "Mantener medidas temporales contra el riesgo de aves y evaluar alternativas antes de modificar el drenaje.",
          "Hacer las obras sin evaluar escorrentía.",
          "Retirar toda la vegetación independientemente de la especie."
        ],
        "correct": 0,
        "explanation": "Se debe gestionar el riesgo de fauna sin crear un nuevo impacto no evaluado."
      },
      "en": {
        "title": "What protects operations and habitat?",
        "question": "What is the most controlled next step?",
        "options": [
          "Maintain interim bird-risk measures and assess alternatives before changing drainage.",
          "Proceed without runoff assessment.",
          "Remove all vegetation regardless of species."
        ],
        "correct": 0,
        "explanation": "Wildlife hazards should be managed without creating an unassessed new impact."
      }
    }
  },
  "10": {
    "activity": {
      "es": {
        "title": "¿Qué control impide iniciar la reparación?",
        "question": "¿Qué requisito aprobado no se cumple en el refugio de despliegue?",
        "options": [
          "El viaje al taller alternativo es largo.",
          "La extracción disponible es 200 m³/h frente a los 500 m³/h exigidos.",
          "La reparación lleva resina."
        ],
        "correct": 1,
        "explanation": "No se puede iniciar un lijado sin cumplir los controles obligatorios o una alternativa aprobada."
      },
      "en": {
        "title": "Which control prevents starting the repair?",
        "question": "Which approved requirement is not met at the deployed shelter?",
        "options": [
          "Travel to another workshop is lengthy.",
          "Available extraction is 200 m³/h versus 500 m³/h required.",
          "The repair involves resin."
        ],
        "correct": 1,
        "explanation": "Sanding must not proceed without approved controls or an authorised equivalent."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué opción de trabajo está autorizada?",
        "question": "¿Cómo debe proceder el equipo si no se puede alcanzar la extracción exigida?",
        "options": [
          "Improvisar el lijado con ventanas abiertas.",
          "Ignorar el almacenamiento de residuos.",
          "Trasladar la reparación o implantar un control alternativo formalmente aprobado antes de trabajar."
        ],
        "correct": 2,
        "explanation": "La urgencia no modifica por sí sola los requisitos técnicos y de prevención."
      },
      "en": {
        "title": "Which work option is authorised?",
        "question": "How should the team proceed when required extraction cannot be achieved?",
        "options": [
          "Improvise sanding with the doors open.",
          "Ignore waste storage.",
          "Move the repair or implement a formally approved equivalent control before work."
        ],
        "correct": 2,
        "explanation": "Urgency does not override technical and occupational requirements."
      }
    }
  },
  "11": {
    "activity": {
      "es": {
        "title": "¿En qué condiciones falla el modelo?",
        "question": "¿Qué resultado indica que la validación no cubre bien todas las condiciones?",
        "options": [
          "Falsas alarmas del 28 % en frío frente al 4 % en temperaturas moderadas.",
          "Una sensibilidad del 94 % en los datos de validación.",
          "El ahorro potencial de inspecciones."
        ],
        "correct": 0,
        "explanation": "El comportamiento varía por temperatura; hace falta evaluación por configuración y ambiente."
      },
      "en": {
        "title": "When does the model perform poorly?",
        "question": "What indicates the model is not validated across all conditions?",
        "options": [
          "28% false alarms in cold weather versus 4% at moderate temperatures.",
          "94% sensitivity on validation data.",
          "Potential inspection savings."
        ],
        "correct": 0,
        "explanation": "Performance differs by temperature; evaluation must cover each configuration and environment."
      }
    },
    "lab": {
      "es": {
        "title": "¿Se pueden eliminar inspecciones?",
        "question": "¿Qué implantación puede realizarse mientras falta la aprobación de retirada de inspecciones?",
        "options": [
          "Sustituir todas las inspecciones desde mañana.",
          "Usar el modelo en paralelo como apoyo, manteniendo las tareas exigidas.",
          "Ignorar las alertas hasta obtener el ahorro deseado."
        ],
        "correct": 1,
        "explanation": "La autoridad técnica debe aprobar cambios en tareas obligatorias; el modelo aún no está autorizado."
      },
      "en": {
        "title": "Can inspections be removed?",
        "question": "What can be deployed before approval to remove inspections?",
        "options": [
          "Replace all inspections tomorrow.",
          "Use the model in parallel while retaining mandated checks.",
          "Ignore alerts until the desired saving appears."
        ],
        "correct": 1,
        "explanation": "Technical authority must approve changes to mandatory tasks; the model lacks that approval."
      }
    }
  },
  "12": {
    "activity": {
      "es": {
        "title": "¿Qué coste energético falta en la comparación?",
        "question": "¿Qué dato evita comparar solo el consumo anual de los dos equipos?",
        "options": [
          "La pintura del nuevo equipo.",
          "El nombre del proveedor.",
          "Los 40 MWh de fabricación y el consumo del soporte paralelo."
        ],
        "correct": 2,
        "explanation": "La fabricación y transición pueden superar el ahorro de funcionamiento dentro del horizonte de cinco años."
      },
      "en": {
        "title": "Which energy burden must be included?",
        "question": "Which datum prevents comparison of annual use only?",
        "options": [
          "Replacement paint colour.",
          "Supplier name.",
          "40 MWh of manufacturing energy and parallel-support consumption."
        ],
        "correct": 2,
        "explanation": "Manufacturing and transition can outweigh operational savings over five years."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué decisión está mejor respaldada?",
        "question": "¿Qué curso de acción es prudente ante los datos energéticos disponibles?",
        "options": [
          "Mantener por ahora la opción de extensión aprobada y completar el análisis integral antes de invertir en sustitución.",
          "Sustituir ya porque 8 es menor que 12.",
          "Excluir toda la energía de fabricación por ocurrir en otro país."
        ],
        "correct": 0,
        "explanation": "El ahorro estimado de 20 MWh en cinco años no compensa los 40 MWh de fabricación del ejemplo."
      },
      "en": {
        "title": "Which decision is better supported?",
        "question": "Which course of action is justified by available energy data?",
        "options": [
          "Retain the approved extension option for now and complete a full assessment before replacing.",
          "Replace now because 8 is less than 12.",
          "Exclude manufacturing energy because it occurs elsewhere."
        ],
        "correct": 0,
        "explanation": "The estimated 20 MWh saved in five years does not offset 40 MWh of manufacturing energy in this scenario."
      }
    }
  },
  "13": {
    "activity": {
      "es": {
        "title": "¿Qué falta para liberar piezas recuperadas?",
        "question": "¿Qué dato impide considerar reutilizables los 35 componentes sin registros?",
        "options": [
          "La marca del comprador.",
          "Trazabilidad y documentación técnica completa.",
          "La fotografía del fuselaje."
        ],
        "correct": 1,
        "explanation": "La apariencia física no demuestra elegibilidad de reutilización aeronáutica."
      },
      "en": {
        "title": "What is missing before releasing recovered parts?",
        "question": "What prevents treating the 35 unrecorded components as reusable?",
        "options": [
          "Buyer's brand.",
          "Complete traceability and technical documentation.",
          "A fuselage photograph."
        ],
        "correct": 1,
        "explanation": "Physical appearance does not establish eligibility for aviation reuse."
      }
    },
    "lab": {
      "es": {
        "title": "¿Puede aceptarse «cero vertedero»?",
        "question": "¿Qué prueba necesitarías para aceptar la afirmación del licitador?",
        "options": [
          "Que el licitador la repita en su publicidad.",
          "Que el presupuesto sea competitivo.",
          "Destinos finales identificados, permisos, trazabilidad y certificados verificables."
        ],
        "correct": 2,
        "explanation": "Sin pruebas de las rutas de tratamiento no puede afirmarse cero vertedero."
      },
      "en": {
        "title": "Can ‘zero landfill’ be accepted?",
        "question": "What would be needed to substantiate the bidder's claim?",
        "options": [
          "That the bidder repeats it in advertising.",
          "A competitive price.",
          "Identified final facilities, permits, chain of custody and verifiable certificates."
        ],
        "correct": 2,
        "explanation": "Without downstream evidence a zero-landfill claim cannot be substantiated."
      }
    }
  },
  "14": {
    "activity": {
      "es": {
        "title": "¿Cuántos días falta producto aprobado?",
        "question": "Si quedan 12 días de stock y la interrupción dura 20, ¿cuál es la brecha?",
        "options": [
          "8 días.",
          "12 días.",
          "32 días."
        ],
        "correct": 0,
        "explanation": "20 − 12 = 8 días sin cobertura prevista; el plan debe priorizar tareas y suministro cualificado."
      },
      "en": {
        "title": "How long is approved supply missing?",
        "question": "With 12 days of stock and a 20-day interruption, what is the gap?",
        "options": [
          "8 days.",
          "12 days.",
          "32 days."
        ],
        "correct": 0,
        "explanation": "20 − 12 = 8 days of uncovered demand; prioritise tasks and qualified supply."
      }
    },
    "lab": {
      "es": {
        "title": "¿Se autoriza el sustituto químico?",
        "question": "¿Qué decisión es correcta mientras la alternativa no está cualificada?",
        "options": [
          "Usarla si hace calor.",
          "No usarla; escalar la falta de stock y ajustar el trabajo según los controles aprobados.",
          "Usarla solo en el turno de tarde."
        ],
        "correct": 1,
        "explanation": "Ni la ola de calor ni la presión de disponibilidad autorizan un químico no aprobado."
      },
      "en": {
        "title": "Is chemical substitution authorised?",
        "question": "What is correct while the substitute has not been qualified?",
        "options": [
          "Use it during hot weather.",
          "Do not use it; escalate the supply gap and adjust work under approved controls.",
          "Use it only on the afternoon shift."
        ],
        "correct": 1,
        "explanation": "Heat and availability pressure do not authorise unapproved chemicals."
      }
    }
  },
  "15": {
    "activity": {
      "es": {
        "title": "¿Qué vuelve engañosa la comparación?",
        "question": "¿Por qué no basta con indicar que la electricidad ha disminuido un 12 %?",
        "options": [
          "Porque toda reducción es irrelevante.",
          "Porque solo importa el combustible.",
          "Porque cambió el perímetro y no son magnitudes directamente comparables."
        ],
        "correct": 2,
        "explanation": "Se debe reconstruir la línea base equivalente o explicar qué parte de la variación proviene del alcance."
      },
      "en": {
        "title": "What makes the comparison misleading?",
        "question": "Why is a reported 12% fall in electricity insufficient?",
        "options": [
          "Because every reduction is irrelevant.",
          "Because only fuel matters.",
          "Because the reporting boundary changed and the figures are not directly comparable."
        ],
        "correct": 2,
        "explanation": "Rebuild a comparable baseline or explain which part of the change reflects the boundary."
      }
    },
    "lab": {
      "es": {
        "title": "¿Qué afirmación puedes autorizar?",
        "question": "¿Qué forma de publicación está mejor respaldada?",
        "options": [
          "Indicadores específicos con perímetro, cálculo, limitaciones y evidencia verificable.",
          "Una mejora global de todos los servicios sin explicación.",
          "Extrapolar los 12 ensayos a 180 operaciones distintas."
        ],
        "correct": 0,
        "explanation": "Las conclusiones deben limitarse a poblaciones y datos verificados."
      },
      "en": {
        "title": "Which claim can you authorise?",
        "question": "Which publication approach is best supported?",
        "options": [
          "Specific metrics with stated boundary, calculation, limitations and verifiable evidence.",
          "A blanket improvement claim across all services.",
          "Extrapolate 12 trial cases to 180 different operations."
        ],
        "correct": 0,
        "explanation": "Conclusions must remain within verified data and populations."
      }
    }
  }
};
