import type { LocalText } from "./course-data-bilingual";

type ExerciseExamples = {
  case: LocalText;
  activity: LocalText;
  lab: LocalText;
};

const example = (en: string, es: string): LocalText => ({ en, es });

export const exerciseExamples: ExerciseExamples[] = [
  {
    case: example(
      `Recommendation: run an eight-week trial covering at least 30 comparable A400M turnarounds. Meter diesel and electricity by task, verify turnaround, availability and contingency response, and use the declared grid factor. A defensible claim would be: “In the trial boundary, direct energy-related CO2e per turnaround fell by X–Y%; procurement, equipment manufacture and deployed operation were excluded.” Approve only if operational gates remain satisfied.`,
      `Recomendación: realizar un ensayo de ocho semanas con al menos 30 operaciones comparables del A400M. Medir diésel y electricidad por tarea, comprobar tiempos, disponibilidad y respuesta de contingencia y aplicar el factor de red declarado. Afirmación defendible: «Dentro del alcance del ensayo, el CO2e energético directo por operación disminuyó un X–Y %; se excluyeron compra, fabricación y despliegue». Aprobar solo si se mantienen las barreras operativas.`,
    ),
    activity: example(
      `Service: one completed A400M ground turnaround. Causal map: diesel tug use → fuel combustion → NOx/CO2 and worker exposure; electric tug use → electricity demand → grid emissions. Gates: safety, approved equipment and turnaround time. Owners: Ground Operations and Environment. Exclusions: equipment manufacture. Review trigger: grid factor changes by more than 10% or contingency use exceeds two events per month.`,
      `Servicio: una operación en tierra completa del A400M. Mapa causal: tractor diésel → combustión → NOx/CO2 y exposición laboral; tractor eléctrico → demanda eléctrica → emisiones de red. Barreras: seguridad, equipo aprobado y tiempo de operación. Responsables: Operaciones y Medio Ambiente. Exclusión: fabricación del equipo. Revisión: cambio del factor de red superior al 10 % o más de dos contingencias al mes.`,
    ),
    lab: example(
      `1. Service/unit: 30 representative A400M turnarounds in Q2. 2. Gates: safety approval, electrical compatibility and contingency readiness. 3. Chain: energy use → emissions/exposure; material impacts are fuel, electricity and battery replacement. 4. Owners: Operations for activity data and Environment for factors; limitation: no embodied impacts; review after three months or any mission-readiness deviation.`,
      `1. Servicio/unidad: 30 operaciones representativas del A400M durante el segundo trimestre. 2. Barreras: aprobación de seguridad, compatibilidad eléctrica y contingencia. 3. Cadena: uso energético → emisiones/exposición; impactos materiales: combustible, electricidad y sustitución de batería. 4. Responsables: Operaciones para actividad y Medio Ambiente para factores; limitación: sin impactos incorporados; revisión a los tres meses o ante una desviación de disponibilidad.`,
    ),
  },
  {
    case: example(
      `Technical finding: fuel per approved test fell, but evening exposure and complaints increased; the programme cannot be described as a complete environmental success. Public claim: “The trial reduced average fuel per completed engine test by X% during the stated period. Evening-event distribution and receptor noise did not improve and are subject to corrective action and review.” Include the complaint-channel change as a limitation.`,
      `Hallazgo técnico: disminuyó el combustible por ensayo aprobado, pero aumentaron la exposición vespertina y las quejas; no puede calificarse como éxito ambiental completo. Afirmación pública: «El ensayo redujo un X % el combustible medio por prueba completada durante el periodo indicado. La distribución de eventos vespertinos y el ruido en receptores no mejoraron y están sujetos a acción correctiva». Incluir como limitación el cambio del canal de quejas.`,
    ),
    activity: example(
      `Matrix: technicians benefit from shorter tests; nearby residents receive the evening-noise burden; management controls scheduling. Measured evidence: fuel, duration and receptor levels. Reported evidence: complaints and interviews. Inferred evidence: trust impact. Rewrite “lower-impact testing” as two bounded statements—one on verified fuel reduction and one acknowledging unchanged or increased evening exposure.`,
      `Matriz: los técnicos se benefician de pruebas más breves; la población cercana recibe la carga acústica vespertina; la dirección controla los horarios. Evidencia medida: combustible, duración y niveles. Declarada: quejas y entrevistas. Inferida: efecto en confianza. Sustituir «pruebas de menor impacto» por dos afirmaciones acotadas: una sobre combustible verificado y otra que reconozca la exposición vespertina igual o mayor.`,
    ),
    lab: example(
      `Claim: “The programme solved the base’s environmental impact”; audience: employees and local stakeholders. Evidence supports only lower fuel per completed test. Omissions: event timing, receptor noise and changed complaint access. Owner: programme manager, verified by Environment. Rewrite: “Fuel per completed test fell by X% in the pilot; noise distribution is under separate review.” Review date: end of the next representative operating quarter.`,
      `Afirmación: «El programa resolvió el impacto ambiental de la base»; audiencia: empleados y partes locales. La evidencia solo respalda menor combustible por prueba completada. Omisiones: horario, ruido en receptores y cambio de acceso a quejas. Responsable: programa, verificado por Medio Ambiente. Reformulación: «El combustible por prueba disminuyó un X % en el piloto; la distribución acústica se revisa por separado». Revisión: final del siguiente trimestre representativo.`,
    ),
  },
  {
    case: example(
      `Model one “serviceable component restored for one year of equivalent function.” Compare local repair energy, solvent, yield and residual life with exchange transport, packaging, approved-facility inputs and replacement avoidance. The decision reverses if repaired-component remaining life falls below the sensitivity threshold or repeat-failure probability rises above it. Recommend local repair only within the validated condition range and report allocation assumptions.`,
      `Modelizar «un componente recuperado para un año de función equivalente». Comparar energía, disolvente, rendimiento y vida de la reparación local con transporte, embalaje, instalación aprobada y sustitución evitada del intercambio. La decisión se invierte si la vida remanente reparada cae por debajo del umbral de sensibilidad o aumenta la repetición de fallo. Recomendar reparación local solo dentro del rango validado y declarar la asignación.`,
    ),
    activity: example(
      `Foreground processes: removal, cleaning, repair, test and return to service. Background: electricity, solvent production, transport and waste treatment. Primary metered data score high; supplier averages score medium; generic database factors score low. Sensitivity: include previously cut-off packaging and vary transport allocation from mass to dedicated shipment. Interpretation: choose only if the ranking survives both tests.`,
      `Procesos directos: desmontaje, limpieza, reparación, ensayo y retorno. Segundo plano: electricidad, producción de disolvente, transporte y tratamiento. Datos medidos: calidad alta; promedios de proveedor: media; factores genéricos: baja. Sensibilidad: incluir embalaje antes excluido y variar la asignación del transporte entre masa y envío dedicado. Interpretación: elegir solo si la clasificación resiste ambas pruebas.`,
    ),
    lab: example(
      `1. Goal/unit: compare two routes per component restored to approved function for 12 months. 2. Boundary: removal to return; exclude building capital; allocate shared transport by mass. 3. Inventory: work orders, meters, supplier route and recognised lifecycle factors, each with a quality score. 4. Sensitivity: remaining life ±30% changes the preferred option; decision therefore remains conditional pending better life data.`,
      `1. Objetivo/unidad: comparar dos rutas por componente restituido a función aprobada durante 12 meses. 2. Alcance: del desmontaje al retorno; excluir edificio; asignar transporte compartido por masa. 3. Inventario: órdenes, contadores, ruta del proveedor y factores reconocidos, todos con calidad. 4. Sensibilidad: variar la vida remanente ±30 % cambia la opción; la decisión queda condicionada a mejorar ese dato.`,
    ),
  },
  {
    case: example(
      `Trial only on missions with high-confidence meteorological forecasts and an approved alternative altitude. Record fuel increment, direct CO2, predicted contrail response, timing, airspace and noise. Go if operational gates pass and fuel penalty remains below the predefined threshold; stop after forecast failure, mission impact or repeated threshold exceedance. Report “contrail-avoidance feasibility was tested,” not a net-climate reduction.`,
      `Ensayar solo en misiones con previsión meteorológica de alta confianza y altitud alternativa aprobada. Registrar combustible incremental, CO2 directo, respuesta prevista de estelas, horario, espacio aéreo y ruido. Continuar si se superan barreras y la penalización de combustible queda bajo el umbral; detener ante fallo de previsión, impacto en misión o superación repetida. Informar «se evaluó la viabilidad de evitar estelas», no una reducción climática neta.`,
    ),
    activity: example(
      `Baseline: 100 climate-index units for the stated activity. Apply efficiency first: −5, leaving 95. Apply lower lifecycle fuel intensity to the eligible share: −8, leaving 87. Record 87 as residual physical/accounted emissions. List removals and compensation separately rather than subtracting them from operational performance. Show an uncertainty range of 82–94 and identify infrastructure and uptake dependencies.`,
      `Línea base: 100 unidades climáticas para la actividad definida. Aplicar primero eficiencia: −5, quedan 95. Aplicar menor intensidad de ciclo de vida a la fracción elegible: −8, quedan 87. Registrar 87 como residual. Mostrar remociones y compensaciones por separado, sin restarlas del desempeño operativo. Presentar rango 82–94 e identificar dependencias de infraestructura y adopción.`,
    ),
    lab: example(
      `1. Baseline: annual fuel and direct CO2, with non-CO2 reported separately over the declared horizon. 2. Lever: matched-mission fuel procedure; residuals remain and depend on adoption. 3. Hazard: heat affecting ground staff and cooling capacity; consequence is delay and exposure. 4. Decision: pilot both measures; owner: Operations; review when heat-warning days or fuel exceptions exceed the stated trigger.`,
      `1. Línea base: combustible anual y CO2 directo, con efectos no CO2 separados y horizonte declarado. 2. Palanca: procedimiento de combustible con misiones comparables; quedan emisiones residuales y depende de adopción. 3. Peligro: calor sobre personal y refrigeración; consecuencia: demora y exposición. 4. Decisión: pilotar ambas medidas; responsable: Operaciones; revisar al superar el umbral de días de alerta o excepciones.`,
    ),
  },
  {
    case: example(
      `After matching payload, route, wind, reserve and configuration, the estimated saving is 120–180 kg per eligible mission, not the raw 450 kg. With 80 eligible missions, the bounded annual effect is 9.6–14.4 t of fuel. Apply only to the approved mission/configuration set, with reserve compliance, dispatch reliability and exception logging. Review after one seasonal cycle or any safety-related deviation.`,
      `Tras emparejar carga, ruta, viento, reserva y configuración, el ahorro estimado es 120–180 kg por misión elegible, no los 450 kg brutos. Con 80 misiones elegibles, el efecto anual acotado es 9,6–14,4 t de combustible. Aplicar solo al conjunto aprobado, manteniendo reservas, fiabilidad y registro de excepciones. Revisar tras un ciclo estacional o cualquier desviación de seguridad.`,
    ),
    activity: example(
      `Measure card: mechanism—avoid unnecessary contingency uplift within approved planning rules; applicability—medium; expected magnitude—medium; persistence—dependent on planner adoption; evidence quality—currently low to medium. Confounders: payload, winds and diversions. Stop criteria: reserve breach or lower completion reliability. Recommendation: proceed to a matched-mission pilot, not fleet-wide implementation.`,
      `Ficha: mecanismo—evitar carga de contingencia innecesaria dentro de reglas aprobadas; aplicabilidad—media; magnitud esperada—media; persistencia—dependiente de adopción; calidad de evidencia—baja-media. Confusores: carga, viento y desvíos. Parada: incumplimiento de reservas o menor fiabilidad. Recomendación: ensayo con misiones comparables, no implantación en toda la flota.`,
    ),
    lab: example(
      `1. Measure: revised fuel planning for approved A400M mission profiles. 2. Baseline: previous procedure; match payload, distance, weather, reserves and configuration. 3. Results: report normalised fuel and CO2 with completion, delay and maintenance effects; no safety degradation. 4. Rule: eligible profiles only; exclude diversion-heavy missions; review if saving falls below the lower confidence bound for two consecutive months.`,
      `1. Medida: planificación revisada para perfiles A400M aprobados. 2. Línea base: procedimiento anterior; emparejar carga, distancia, meteorología, reservas y configuración. 3. Resultados: combustible y CO2 normalizados junto a cumplimiento, demora y mantenimiento; sin degradación de seguridad. 4. Regla: solo perfiles elegibles; excluir misiones con alta tasa de desvío; revisar si el ahorro cae bajo el límite de confianza dos meses.`,
    ),
  },
  {
    case: example(
      `Control: reschedule feasible ground runs outside stable evening conditions and trial a verified alternative location when operationally acceptable. Compare at least 15 matched events before and after, using upwind/downwind monitors and receptor occupancy. Success means lower short-duration receptor concentration without increased worker exposure, failed tests or displaced impact. Revert if safety, test validity or the receptor criterion is breached.`,
      `Control: reprogramar las pruebas viables fuera de condiciones vespertinas estables y ensayar una ubicación alternativa cuando sea operativamente aceptable. Comparar al menos 15 eventos equivalentes antes y después, con monitores a barlovento/sotavento y ocupación del receptor. Éxito: menor concentración de corta duración sin aumentar exposición laboral, fallos o carga desplazada. Revertir ante incumplimiento de seguridad, validez o criterio receptor.`,
    ),
    activity: example(
      `Source–receptor chain: engine run at stated power → NOx plume → stable evening dispersion → occupied downwind work area. Separate background road traffic and other base sources. Evidence plan: activity log plus inventory, dispersion model and event monitor at upwind/downwind points. Verify the control with matched weather windows and retain annual totals as context, not as the only decision metric.`,
      `Cadena fuente-receptor: prueba a potencia definida → penacho NOx → dispersión vespertina estable → zona ocupada a sotavento. Separar tráfico de fondo y otras fuentes. Evidencia: registro de actividad, inventario, modelo y monitorización por evento a barlovento/sotavento. Verificar con ventanas meteorológicas comparables y mantener totales anuales como contexto, no como único indicador.`,
    ),
    lab: example(
      `1. Pollutant/source: NO2 from Eurofighter ground runs; receptor: occupied downwind area. 2. Method: event inventory plus upwind background and short averaging periods. 3. Control: scheduling/relocation within approved test constraints; check burden at the alternative receptor. 4. Monitoring: two fixed points and one mobile point; success is a sustained event-level reduction with no operational or worker-exposure deterioration.`,
      `1. Contaminante/fuente: NO2 de pruebas Eurofighter; receptor: zona ocupada a sotavento. 2. Método: inventario por evento, fondo a barlovento y periodos cortos. 3. Control: horario/reubicación dentro de restricciones aprobadas; comprobar carga en receptor alternativo. 4. Seguimiento: dos puntos fijos y uno móvil; éxito si baja de forma sostenida sin deterioro operativo ni de exposición laboral.`,
    ),
  },
  {
    case: example(
      `Recommend a limited relocation trial across representative operating modes and weather. Measure community and worker receptors, towing time, fuel, safety events and test validity. Approve only if the community benefit persists across the defined conditions, worker exposure remains acceptable and towing creates no material new burden. Use a weather-based fallback to the original area and communicate both benefits and redistributed effects.`,
      `Recomendar un ensayo limitado de reubicación con modos y meteorología representativos. Medir receptores comunitarios y laborales, tiempo de remolque, combustible, seguridad y validez. Aprobar solo si el beneficio comunitario se mantiene, la exposición laboral es aceptable y el remolque no crea una carga material. Usar retorno meteorológico al área original y comunicar beneficios y efectos redistribuidos.`,
    ),
    activity: example(
      `Event dossier: A400M ground run, approved mode, 18 minutes, evening crosswind and reflected path. Compare SEL for the event with cumulative LAeq and receptor occupancy. Candidate controls: shorter approved sequence, acoustic shielding and schedule change. Recommend the schedule trial first because it targets the exposed period with lower implementation burden; verify worker and community receptors simultaneously.`,
      `Expediente: prueba A400M, modo aprobado, 18 minutos, viento cruzado vespertino y reflexión. Comparar SEL del evento con LAeq acumulado y ocupación. Controles: secuencia aprobada más corta, apantallamiento y cambio horario. Recomendar primero el horario porque actúa sobre el periodo expuesto con menor carga; verificar simultáneamente receptores laborales y comunitarios.`,
    ),
    lab: example(
      `1. Source/pattern: repeated evening engine runs; receptors include workers and the nearest settlement. 2. Evidence: event SEL, cumulative LAeq, validated propagation model and weather uncertainty. 3. Alternatives: source procedure, shielding, location and schedule, each with redistributed effects. 4. Trial: four representative weeks; publish the monitoring method; review after complaints, weather reversal or worker threshold exceedance.`,
      `1. Fuente/patrón: pruebas vespertinas repetidas; receptores: trabajadores y población cercana. 2. Evidencia: SEL, LAeq, modelo validado e incertidumbre meteorológica. 3. Alternativas: procedimiento, pantalla, ubicación y horario, con efectos redistribuidos. 4. Ensayo: cuatro semanas representativas; publicar método; revisar ante quejas, inversión meteorológica o superación del umbral laboral.`,
    ),
  },
  {
    case: example(
      `Go only when treated-water quality meets the approved reuse specification, storage integrity is verified and reject water has an authorised route. Stop after any exceedance, treatment failure or loss of traceability. Claim: “During the pilot, freshwater withdrawal per wash fell by X%.” Do not claim total environmental benefit until energy, chemicals, reject treatment and local scarcity effects are compared.`,
      `Continuar solo si el agua tratada cumple la especificación aprobada, se verifica el almacenamiento y el rechazo tiene ruta autorizada. Detener ante superación, fallo o pérdida de trazabilidad. Afirmación: «Durante el piloto, la captación de agua dulce por lavado disminuyó un X %». No afirmar beneficio ambiental total sin comparar energía, químicos, tratamiento del rechazo y escasez local.`,
    ),
    activity: example(
      `Flow map: cleaning agent received → diluted → used in wash → captured as wastewater → separated into reusable water, oily residue and treatment reject. Priority controls: prevent overdosing at source, reuse only after quality release, and segregate oily residue with documented custody. Data gap: downstream treatment confirmation. Owner and due date are assigned before calling the loop closed.`,
      `Flujo: limpiador recibido → diluido → usado → capturado como agua residual → separado en agua reutilizable, residuo aceitoso y rechazo. Controles prioritarios: evitar sobredosificación, reutilizar solo tras liberación de calidad y segregar residuo con custodia documentada. Brecha: confirmación del tratamiento final. Asignar responsable y fecha antes de declarar cerrado el ciclo.`,
    ),
    lab: example(
      `1. Balance: litres per completed wash and total monthly withdrawal. 2. Context: water scarcity, oil/chemical hazard and legal waste classification. 3. Hierarchy: prevent and reuse before treatment; constraint is limited deployed storage. 4. Evidence: transfer notes and analysis certificates; KPI is freshwater litres per wash; deviation response is isolate, investigate and suspend reuse until release.`,
      `1. Balance: litros por lavado completado y captación mensual. 2. Contexto: escasez, peligro por aceite/químicos y clasificación legal. 3. Jerarquía: prevenir y reutilizar antes de tratar; restricción: almacenamiento desplegado limitado. 4. Evidencia: documentos de traslado y certificados; KPI: litros de agua dulce por lavado; desviación: aislar, investigar y suspender reutilización hasta liberación.`,
    ),
  },
  {
    case: example(
      `Use avoidance first: repeat the ecological survey in the relevant season and check protected-species requirements before works. Minimise by treating only the safety-relevant standing-water area and maintaining an alternative drainage/habitat function. Monitor bird-attractant response, strike risk, runoff and target species. Proceed only after safety and legal gates; stop if the protected species is confirmed or runoff creates a new receptor impact.`,
      `Aplicar primero evitación: repetir el estudio en la estación pertinente y comprobar requisitos de especies protegidas antes de actuar. Minimizar interviniendo solo el agua estancada relevante para seguridad y manteniendo función alternativa de drenaje/hábitat. Seguir atracción de aves, riesgo de impacto, escorrentía y especie objetivo. Proceder tras barreras legales y de seguridad; detener si se confirma la especie o aparece impacto nuevo.`,
    ),
    activity: example(
      `Geospatial note: identify the affected habitat type, survey season and confidence without publishing sensitive operating coordinates. Map the pressure pathway—drainage change → habitat loss/runoff shift → species and water receptor—and the wildlife-hazard pathway separately. Compare avoidance, partial redesign and seasonal timing. Recommend the option that meets safety while retaining the greatest ecological function, with monitored residual impact.`,
      `Nota geoespacial: identificar hábitat, estación y confianza sin publicar coordenadas operativas sensibles. Mapear por separado cambio de drenaje → pérdida/escorrentía → especie/receptor y la vía de peligro de fauna. Comparar evitación, rediseño parcial y calendario estacional. Recomendar la opción que cumpla seguridad conservando mayor función ecológica, con impacto residual monitorizado.`,
    ),
    lab: example(
      `1. Element/baseline: seasonal wet area, two survey windows, medium confidence. 2. Pressure/pathway: drainage works alter habitat and runoff; wildlife hazard is assessed separately. 3. Alternatives: avoid, reduce footprint and time works outside sensitive season. 4. Residual: limited habitat loss; indicators are target-species use and strike-attractant count; stop/review at legal detection or adverse trend.`,
      `1. Elemento/línea base: zona húmeda estacional, dos ventanas de estudio, confianza media. 2. Presión/vía: el drenaje altera hábitat y escorrentía; el peligro de fauna se evalúa aparte. 3. Alternativas: evitar, reducir huella y actuar fuera de estación sensible. 4. Residual: pérdida limitada; indicadores: uso por especie y recuento de atrayentes; parar/revisar ante detección legal o tendencia adversa.`,
    ),
  },
  {
    case: example(
      `Go only if the deployed task has approved containment, ventilation, spill response, segregated waste custody and a named deviation authority. Compensating controls include portable extraction, secondary containment, limited task duration and daily inspection. Use the alternative facility if any critical control is unavailable. Close the record with consumption, waste transfer, incident, inspection and demobilisation evidence signed by the host and task owner.`,
      `Proceder solo si la tarea desplegada dispone de contención, ventilación, respuesta a derrames, custodia segregada y autoridad de desviación. Controles compensatorios: extracción portátil, cubeto, duración limitada e inspección diaria. Usar instalación alternativa si falta un control crítico. Cerrar con consumos, traslados de residuos, incidentes, inspecciones y desmovilización firmados por anfitrión y responsable.`,
    ),
    activity: example(
      `Walkdown finding: solvent-transfer control exists in the procedure but the point-of-use container lacks secondary containment and the inspection record is incomplete. Classify as a significant control deviation because loss of containment is credible. Immediate action: pause transfer and install approved containment. Corrective action: assign the MRO supervisor, verify training and close with photo, inspection and three-week effectiveness check.`,
      `Hallazgo: el control de trasvase figura en el procedimiento, pero el recipiente no tiene cubeto y el registro está incompleto. Clasificar como desviación significativa porque la pérdida es creíble. Acción inmediata: detener trasvase e instalar contención aprobada. Correctiva: responsable de MRO, verificar formación y cerrar con fotografía, inspección y comprobación de eficacia a tres semanas.`,
    ),
    lab: example(
      `1. Activity: deployed component cleaning; significant aspects are solvent air emissions, hazardous waste and spill risk. 2. Controls: normal extraction/segregation, abnormal isolation and emergency spill response. 3. Interface: host provides storage; task owner controls work; only the site lead may approve deviation. 4. Evidence: daily checks, incident log, waste documents and demobilisation reconciliation, reviewed after any deviation.`,
      `1. Actividad: limpieza desplegada de componente; aspectos: emisiones de disolvente, residuo peligroso y derrame. 2. Controles: extracción/segregación normal, aislamiento anómalo y respuesta de emergencia. 3. Interfaz: anfitrión aporta almacén; responsable controla tarea; solo líder de centro autoriza desviación. 4. Evidencia: controles diarios, incidentes, documentos y conciliación final; revisión tras cualquier desviación.`,
    ),
  },
  {
    case: example(
      `Stage 1: run the predictive model in shadow mode while retaining all approved inspections. Stage 2: allow limited substitution only for the configuration and temperature range with validated sensitivity/specificity. Stage 3: scale after reliability and approval gates. Calculate benefit only for the qualified fleet population and subtract false-alert removals, logistics and added infrastructure. Withdraw if missed detection or false-alert rate exceeds the approved threshold.`,
      `Fase 1: ejecutar el modelo en sombra manteniendo inspecciones aprobadas. Fase 2: sustitución limitada solo en configuración y temperatura con sensibilidad/especificidad validadas. Fase 3: escalar tras barreras de fiabilidad y aprobación. Calcular beneficio solo para población cualificada y descontar falsas alertas, logística e infraestructura. Retirar si la detección fallida o falsa alerta supera el umbral.`,
    ),
    activity: example(
      `Loop: monitoring threshold → alert → inspection/removal → confirmed condition → model update. Add adverse loops: false positive → unnecessary removal/logistics; missed detection → failure and availability loss. Indicators: confirmed-alert rate, no-fault-found events, inspection hours, component reliability and fleet availability. Gate progression quarterly; revert after any safety-significant miss or two periods outside the false-alert limit.`,
      `Ciclo: umbral → alerta → inspección/desmontaje → condición confirmada → actualización del modelo. Bucles adversos: falso positivo → desmontaje/logística; fallo de detección → avería y pérdida de disponibilidad. Indicadores: alertas confirmadas, no-fault-found, horas, fiabilidad y disponibilidad. Progresión trimestral; revertir ante fallo significativo o dos periodos fuera del límite de falsas alertas.`,
    ),
    lab: example(
      `1. Outcome/population: maintain component reliability across the qualified Eurofighter configuration; current policy is scheduled inspection. 2. Proposal: predictive trigger with airworthiness and configuration gates. 3. Compare reliability, availability, inspection materials, removals and logistics. 4. Pilot in shadow mode, then 10% qualified population; scale only within confidence bounds; withdraw after any missed critical indication.`,
      `1. Resultado/población: mantener fiabilidad en configuración Eurofighter cualificada; política actual: inspección programada. 2. Propuesta: disparador predictivo con barreras de aeronavegabilidad/configuración. 3. Comparar fiabilidad, disponibilidad, materiales, desmontajes y logística. 4. Piloto en sombra y luego 10 % de población; escalar dentro de límites de confianza; retirar ante indicación crítica no detectada.`,
    ),
  },
  {
    case: example(
      `Adopt a staged pathway: extend qualified assets for three years while piloting the replacement on a limited support line. Review annually against reliability, energy per service, inspection burden, obsolescence and supplier support. Trigger replacement when extension reliability falls below the approved level or cumulative support burden crosses the lifecycle threshold. Avoid two years of uncontrolled double running by defining an explicit retirement sequence.`,
      `Adoptar una ruta escalonada: extender tres años los activos cualificados mientras se pilota la sustitución en una línea limitada. Revisar anualmente fiabilidad, energía por servicio, inspección, obsolescencia y soporte. Activar sustitución cuando la fiabilidad caiga bajo el nivel aprobado o la carga acumulada cruce el umbral de ciclo de vida. Evitar doble operación sin control mediante una secuencia explícita de retirada.`,
    ),
    activity: example(
      `Component passport: approved function, serialised status, aluminium housing, serviceable after inspection, remaining-life range and documentation status. Route screen: extension retains highest value and passes approval; repair is the fallback; reuse is restricted by traceability; material recovery is last. Decision: extend for the validated interval, with condition monitoring and a recovery route reserved at withdrawal.`,
      `Pasaporte: función aprobada, estado serializado, carcasa de aluminio, apto tras inspección, rango de vida y documentación. Rutas: extensión retiene mayor valor y supera aprobación; reparación como alternativa; reutilización restringida por trazabilidad; recuperación material al final. Decisión: extender durante intervalo validado, con seguimiento y ruta de recuperación prevista al retirar.`,
    ),
    lab: example(
      `1. Population: 20 support assets with known condition and current supply route. 2. Routes: inspect/extend, repair or replace, each subject to approval and traceability. 3. Transition includes tooling, training, parallel support and stranded-spares reconciliation. 4. Gates: reliability and lifecycle burden; KPIs: energy per service, availability and retained value; exit after obsolescence or two review failures.`,
      `1. Población: 20 activos con condición conocida y suministro actual. 2. Rutas: inspeccionar/extender, reparar o sustituir, sujetas a aprobación y trazabilidad. 3. Transición: herramientas, formación, soporte paralelo y conciliación de repuestos varados. 4. Barreras: fiabilidad y carga de ciclo de vida; KPI: energía por servicio, disponibilidad y valor retenido; salida por obsolescencia o dos revisiones fallidas.`,
    ),
  },
  {
    case: example(
      `Select controlled part-out followed by authorised dismantling only after records, security status and hazardous inventory are complete. Quarantine parts without traceability; do not release them as reusable. The contract requires approved downstream facilities, monthly mass-balance reconciliation, custody records, permits and audit access. Reject the “zero landfill” claim until named destinations and residual mass are independently evidenced.`,
      `Seleccionar extracción controlada seguida de desmontaje autorizado solo tras completar registros, protección e inventario peligroso. Poner en cuarentena piezas sin trazabilidad; no liberarlas como reutilizables. El contrato exige instalaciones finales aprobadas, balance de masas mensual, custodia, permisos y auditoría. Rechazar «cero vertedero» hasta acreditar destinos y masa residual de forma independiente.`,
    ),
    activity: example(
      `Ten clauses: asset identity; authority and security; hazardous survey; parts traceability; approved route hierarchy; prohibited destinations; contractor permits; chain of custody; monthly mass balance; audit, non-conformity and final sign-off. Each clause names the evidence, owner and acceptance criterion, replacing a percentage-recovery promise with verifiable obligations.`,
      `Diez cláusulas: identidad del activo; autoridad y protección; estudio de peligrosos; trazabilidad de piezas; jerarquía aprobada; destinos prohibidos; permisos; cadena de custodia; balance mensual; auditoría, no conformidad y firma final. Cada cláusula define evidencia, responsable y aceptación, sustituyendo la promesa porcentual por obligaciones verificables.`,
    ),
    lab: example(
      `1. Options: storage, part-out and dismantling; decision authority records condition and security. 2. Inventory separates traceable parts, composites, metals and hazardous items. 3. Contractor routes identify facilities, permits, custody and protection controls. 4. Final file reconciles input mass, reused/recycled routes and residuals; claim is limited to verified destinations and signed by asset, security and environmental owners.`,
      `1. Opciones: almacenamiento, extracción y desmontaje; la autoridad registra condición y protección. 2. Inventario separa piezas trazables, composites, metales y peligrosos. 3. Rutas identifican instalaciones, permisos, custodia y controles. 4. Expediente concilia masa de entrada, reutilización/reciclaje y residuales; afirmación limitada a destinos verificados y firmada por responsables de activo, seguridad y medio ambiente.`,
    ),
  },
  {
    case: example(
      `Scenario: heat exceeds the infrastructure threshold while the approved chemical supply is interrupted, creating worker exposure, process-quality and availability consequences. Controls: prioritise critical work, use only approved substitutes, adjust shifts, verify cooling and protect stock. Residual risk is accepted only for a limited window by the named authority. Escalate when forecast duration, exposure or remaining approved stock crosses the trigger.`,
      `Escenario: el calor supera el umbral de infraestructura durante la interrupción del químico aprobado, generando consecuencias laborales, de calidad y disponibilidad. Controles: priorizar trabajo crítico, usar solo sustitutos aprobados, ajustar turnos, verificar refrigeración y proteger existencias. Riesgo residual aceptado solo por periodo limitado y autoridad designada. Escalar al cruzar duración prevista, exposición o stock restante.`,
    ),
    activity: example(
      `Bow-tie top event: loss of approved chemical availability during heat stress. Threats: supplier disruption, accelerated degradation and excess demand. Preventive barriers: dual sourcing, protected stock and forecast trigger. Consequences: unsafe substitution, delay and environmental release. Recovery barriers: approved alternative, workload prioritisation and emergency response. Add owners, proof of readiness and a common-cause test for power/cooling failure.`,
      `Evento central: pérdida de disponibilidad del químico aprobado durante estrés térmico. Amenazas: proveedor, degradación acelerada y demanda. Barreras preventivas: doble fuente, stock protegido y previsión. Consecuencias: sustitución insegura, demora y liberación. Recuperación: alternativa aprobada, priorización y emergencia. Añadir responsables, evidencia de preparación y prueba de causa común por fallo eléctrico/refrigeración.`,
    ),
    lab: example(
      `1. Cause/event/consequence: heat plus supplier loss → unavailable approved material → exposure and fleet delay; owner: site operations. 2. Inherent risk assumes five hot days and one-week resupply. 3. Controls depend on power, trained staff and alternative approval; assurance includes stock checks and drills. 4. Residual decision is time-limited; indicators are forecast, stock days and exposure; escalate at the lowest trigger.`,
      `1. Causa/evento/consecuencia: calor y fallo de proveedor → falta de material aprobado → exposición y demora; responsable: operaciones. 2. Riesgo inherente: cinco días de calor y una semana de reposición. 3. Controles dependen de energía, personal y aprobación; evidencia: stock y simulacros. 4. Decisión residual limitada; indicadores: previsión, días de stock y exposición; escalar con el primer umbral.`,
    ),
  },
  {
    case: example(
      `Publish verified site-electricity and recycling results as separate indicators with their original boundaries. Correct the untraceable estimate or remove it, and restate the comparison if the boundary changed. Limit the pilot claim to the tested service and period; do not extrapolate to all Air Power services. The combined “overall improvement” claim is withheld until a consistent materiality, baseline and aggregation method is assured.`,
      `Publicar electricidad del centro y reciclaje verificados como indicadores separados y con su alcance original. Corregir o eliminar la estimación sin trazabilidad y reexpresar la comparación si cambió el perímetro. Limitar el piloto al servicio y periodo ensayados; no extrapolar a todo Air Power. Retener «mejora global» hasta asegurar materialidad, línea base y método de agregación coherentes.`,
    ),
    activity: example(
      `Claim register row: “In-Service impacts improved by 18%.” Evidence trace: incomplete. Boundary: changed. Denominator: mixed. Attribution: pilot extrapolation. Material omission: flight fuel trend. Decision: reject and split into bounded KPI statements. Owner: Reporting; correction due before approval; assurance response records the revised wording, evidence link, limitation and signatures.`,
      `Registro: «Los impactos In-Service mejoraron un 18 %». Trazabilidad: incompleta. Alcance: cambiado. Denominador: mixto. Atribución: extrapolación de piloto. Omisión: tendencia de combustible. Decisión: rechazar y dividir en indicadores acotados. Responsable: Reporting; corrección antes de aprobar; respuesta registra redacción, evidencia, limitación y firmas.`,
    ),
    lab: example(
      `1. Material decision: four-action In-Service roadmap; define stakeholders, 2026 boundary and baseline. 2. Actions: energy, maintenance, water and reporting, each with gates, owner, cost range and readiness effect. 3. KPIs have source, calculation control, uncertainty and trade-off log. 4. Final claim reports each verified outcome separately, states exclusions and assurance findings, and sets the next formal review date.`,
      `1. Decisión material: hoja In-Service de cuatro acciones; definir partes, alcance 2026 y línea base. 2. Acciones: energía, mantenimiento, agua y reporting, cada una con barreras, responsable, coste y efecto en disponibilidad. 3. Indicadores con fuente, control de cálculo, incertidumbre y compensaciones. 4. Afirmación final separa resultados verificados, declara exclusiones y aseguramiento y fija próxima revisión formal.`,
    ),
  },
];
