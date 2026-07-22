import { Reactivo } from "../types";

export const autoevaluacion: Reactivo[] = [
  {
    id: 1,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Básico",
    tipo: "Caso práctico",

    caso:
      "Al finalizar una actividad, la docente pide que cada estudiante revise su trabajo utilizando una lista de cotejo antes de entregarlo.",

    pregunta:
      "¿Cuál es el propósito principal de esta estrategia?",

    opciones: [
      "Que el alumnado identifique sus fortalezas y aspectos por mejorar.",
      "Reducir el tiempo que la docente dedica a revisar trabajos.",
      "Asignar automáticamente una calificación final."
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La autoevaluación favorece la reflexión del alumnado sobre su propio aprendizaje y promueve la autorregulación.",

    porQueNo: [
      "La finalidad no es disminuir el trabajo del docente.",
      "La autoevaluación no sustituye el proceso de valoración integral."
    ],

    fundamento:
      "La evaluación formativa promueve la autorregulación mediante la reflexión del alumnado.",

    bibliografia:
      "Plan de Estudio 2022."
  },

  {
    id: 2,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Intermedio",
    tipo: "Cuestionamiento directo",

    caso:
      "Después de terminar un proyecto, cada estudiante responde qué aprendió, qué dificultades encontró y qué haría diferente la próxima vez.",

    pregunta:
      "¿Qué habilidad fortalece principalmente esta actividad?",

    opciones: [
      "La memorización de contenidos.",
      "La reflexión sobre el propio proceso de aprendizaje.",
      "La comparación entre estudiantes."
    ],

    respuestaCorrecta: 1,

    explicacion:
      "La autoevaluación busca que el alumnado analice su proceso, reconozca avances y plantee acciones de mejora.",

    porQueNo: [
      "No se centra en memorizar información.",
      "No pretende comparar el desempeño entre compañeros."
    ],

    fundamento:
      "La evaluación formativa promueve la metacognición y la autorregulación.",

    bibliografia:
      "Plan de Estudio 2022."
  },
    {
    id: 3,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Antes de entregar un texto, cada estudiante compara su producción con los criterios acordados y marca cuáles logró, cuáles están en proceso y qué necesita corregir.",
    pregunta:
      "¿Qué propósito formativo cumple principalmente esta actividad?",
    opciones: [
      "Favorecer que el alumnado reconozca sus avances y tome decisiones de mejora.",
      "Sustituir completamente la valoración que realiza la docente.",
      "Obtener una calificación final sin revisar nuevamente el producto.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La autoevaluación permite analizar el propio desempeño con base en criterios y decidir qué acciones realizar para mejorar.",
    porQueNo: [
      "La autoevaluación complementa, pero no sustituye necesariamente, el acompañamiento docente.",
      "Su finalidad principal no es asignar una calificación, sino favorecer la reflexión y la mejora.",
    ],
    fundamento:
      "La evaluación formativa promueve que el alumnado participe activamente en la valoración y regulación de su aprendizaje.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 4,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Una maestra pide al grupo que se asigne una calificación del 1 al 10 al terminar un proyecto. La mayoría elige diez sin justificar su respuesta.",
    pregunta:
      "¿Qué ajuste favorecería una autoevaluación con sentido formativo?",
    opciones: [
      "Solicitar que la valoración se fundamente en criterios y evidencias del trabajo realizado.",
      "Aceptar las calificaciones porque cada estudiante conoce mejor su desempeño.",
      "Eliminar la autoevaluación y conservar únicamente la calificación docente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La autoevaluación requiere referentes claros y evidencias que permitan justificar los logros, dificultades y acciones de mejora.",
    porQueNo: [
      "Una valoración sin criterios puede convertirse en una opinión sin sustento.",
      "Eliminar la participación del alumnado limita el desarrollo de la reflexión y la autorregulación.",
    ],
    fundamento:
      "Los criterios de evaluación permiten emitir valoraciones fundamentadas sobre los procesos y productos de aprendizaje.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 5,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Al finalizar una secuencia, una alumna escribe: “Comprendí cómo identificar las ideas principales, pero todavía necesito practicar cómo explicarlas con mis propias palabras”.",
    pregunta:
      "¿Qué capacidad evidencia principalmente la alumna?",
    opciones: [
      "La reflexión metacognitiva sobre sus avances y dificultades.",
      "La memorización literal de los contenidos revisados.",
      "La comparación de su desempeño con el de sus compañeros.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La alumna identifica qué aprendió, qué dificultad conserva y qué necesita fortalecer, lo cual corresponde a un proceso metacognitivo.",
    porQueNo: [
      "La reflexión se centra en comprender y mejorar, no en repetir información de memoria.",
      "La alumna analiza su propio proceso y no lo compara con el de otras personas.",
    ],
    fundamento:
      "La autoevaluación favorece la conciencia sobre cómo se aprende y qué acciones pueden mejorar el desempeño.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 6,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Un docente entrega una lista de cotejo al terminar la actividad, pero el alumnado solo marca todas las casillas sin revisar nuevamente sus producciones.",
    pregunta:
      "¿Qué intervención ayudaría a fortalecer la autoevaluación?",
    opciones: [
      "Pedir que cada valoración se acompañe con una evidencia y una acción concreta de mejora.",
      "Recoger inmediatamente la lista para evitar que cambien sus respuestas.",
      "Convertir automáticamente todas las marcas en una calificación numérica.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Relacionar los criterios con evidencias y acciones de mejora evita que la autoevaluación sea un trámite y promueve una reflexión más profunda.",
    porQueNo: [
      "Impedir la revisión contradice el propósito de analizar y mejorar el trabajo.",
      "Transformar las marcas en una calificación no garantiza que exista reflexión sobre el aprendizaje.",
    ],
    fundamento:
      "La evaluación formativa requiere interpretar evidencias y utilizarlas para orientar decisiones de mejora.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 7,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Durante una autoevaluación, un estudiante reconoce que no cumplió uno de los criterios porque no comprendió las instrucciones iniciales.",
    pregunta:
      "¿Cuál sería la intervención docente más pertinente?",
    opciones: [
      "Dialogar con el estudiante, aclarar el criterio y permitirle revisar su trabajo.",
      "Mantener el resultado porque las instrucciones ya habían sido explicadas.",
      "Asignarle una actividad distinta para evitar que vuelva a equivocarse.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La información obtenida mediante la autoevaluación debe aprovecharse para ofrecer apoyos y generar nuevas oportunidades de aprendizaje.",
    porQueNo: [
      "Mantener el resultado sin atender la dificultad desaprovecha la evidencia obtenida.",
      "Cambiar de actividad no necesariamente permite comprender ni superar la dificultad.",
    ],
    fundamento:
      "La evaluación formativa orienta decisiones pedagógicas oportunas a partir de las necesidades identificadas.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 8,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Básico",
    tipo: "Cuestionamiento directo",
    caso:
      "Una docente desea que sus estudiantes comiencen a valorar sus propios aprendizajes.",
    pregunta:
      "¿Qué condición es indispensable para realizar una autoevaluación pertinente?",
    opciones: [
      "Contar con criterios claros y comprensibles para el alumnado.",
      "Evitar que el alumnado conozca los aprendizajes esperados.",
      "Permitir que cada estudiante utilice criterios completamente distintos.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Para valorar su propio desempeño, el alumnado necesita comprender qué se espera y con qué referentes analizará sus evidencias.",
    porQueNo: [
      "Ocultar las expectativas impide que el alumnado oriente y valore su trabajo.",
      "Los criterios comunes permiten realizar valoraciones coherentes y fundamentadas.",
    ],
    fundamento:
      "Los criterios de evaluación deben ser conocidos y comprendidos para orientar el aprendizaje y la autoevaluación.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 9,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Cada viernes, el grupo registra en un diario qué aprendió, qué estrategia le resultó útil, qué dificultad enfrentó y qué meta se propone para la siguiente semana.",
    pregunta:
      "¿Qué proceso se favorece principalmente con esta práctica?",
    opciones: [
      "La autorregulación del aprendizaje.",
      "La clasificación del alumnado por rendimiento.",
      "La sustitución de las actividades de enseñanza.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Reconocer estrategias, dificultades y metas ayuda al alumnado a planear y ajustar sus acciones para continuar aprendiendo.",
    porQueNo: [
      "La actividad se centra en el progreso personal, no en ordenar o comparar estudiantes.",
      "La reflexión complementa la enseñanza, pero no sustituye las experiencias de aprendizaje.",
    ],
    fundamento:
      "La autorregulación implica planear, supervisar y ajustar las acciones realizadas para aprender.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 10,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Un alumno considera que su exposición fue excelente porque habló durante mucho tiempo. Sin embargo, los criterios señalan que debía comunicar las ideas con claridad, utilizar evidencias y responder preguntas.",
    pregunta:
      "¿Qué debe orientar la revisión de su valoración inicial?",
    opciones: [
      "El contraste entre su percepción, los criterios y las evidencias de su desempeño.",
      "La cantidad de tiempo que permaneció frente al grupo.",
      "La opinión general de su mejor amigo sobre la exposición.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La autoevaluación debe confrontar las percepciones personales con criterios y evidencias para construir una valoración fundamentada.",
    porQueNo: [
      "La duración no demuestra por sí sola la calidad del desempeño.",
      "Una opinión aislada no sustituye el análisis basado en criterios.",
    ],
    fundamento:
      "La valoración formativa se sustenta en criterios y evidencias pertinentes, no únicamente en impresiones personales.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 11,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Después de revisar su primer borrador, una estudiante identifica que sus argumentos no incluyen ejemplos. Decide agregar evidencias antes de entregar la versión final.",
    pregunta:
      "¿Qué función de la autoevaluación se observa en el caso?",
    opciones: [
      "Utilizar la valoración propia para mejorar una producción durante el proceso.",
      "Certificar definitivamente el aprendizaje alcanzado.",
      "Determinar quién realizó el mejor trabajo del grupo.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La estudiante utiliza criterios y evidencias para identificar una necesidad y modificar su producto antes de concluirlo.",
    porQueNo: [
      "La actividad ocurre durante el proceso y busca mejorar, no certificar un resultado definitivo.",
      "La autoevaluación analiza el propio trabajo, no establece comparaciones entre estudiantes.",
    ],
    fundamento:
      "La evaluación formativa acompaña el proceso y permite realizar ajustes antes de concluir una producción.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 12,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Autoevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "La docente solicita una autoevaluación al final del trimestre, pero nunca utiliza la información que proporciona el alumnado sobre sus dificultades y necesidades.",
    pregunta:
      "¿Qué debería hacer para fortalecer el sentido formativo de la actividad?",
    opciones: [
      "Analizar las respuestas y utilizarlas para ajustar apoyos, actividades y próximas intervenciones.",
      "Archivar las autoevaluaciones únicamente como evidencia administrativa.",
      "Sustituir las respuestas del alumnado por una calificación decidida por la docente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La información de la autoevaluación debe influir en las decisiones pedagógicas y en las oportunidades de mejora que se ofrecen al alumnado.",
    porQueNo: [
      "Archivar la información sin utilizarla elimina su función pedagógica.",
      "Sustituir la reflexión del alumnado impide conocer su percepción y necesidades.",
    ],
    fundamento:
      "Las evidencias de evaluación deben interpretarse y emplearse para ajustar la enseñanza y favorecer el aprendizaje.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },
];