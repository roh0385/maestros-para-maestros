import { Reactivo } from "../types";

export const coevaluacion: Reactivo[] = [
  {
    id: 1,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Básico",
    tipo: "Caso práctico",

    caso:
      "Después de realizar una exposición, cada equipo revisa el trabajo de otro equipo utilizando criterios previamente acordados con la docente.",

    pregunta:
      "¿Qué proceso de evaluación se desarrolla principalmente en esta actividad?",

    opciones: [
      "Autoevaluación.",
      "Coevaluación.",
      "Heteroevaluación.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "La coevaluación ocurre cuando las alumnas y los alumnos valoran el trabajo de sus compañeras y compañeros utilizando criterios definidos.",

    porQueNo: [
      "La autoevaluación consiste en valorar el propio desempeño.",
      "La heteroevaluación implica que una persona con una función distinta, generalmente la docente, valore el aprendizaje.",
    ],

    fundamento:
      "La participación del alumnado en la valoración de las producciones de sus pares favorece la reflexión, el diálogo y la comprensión de los criterios de evaluación.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 2,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Una maestra pide al grupo que intercambie sus textos y escriba comentarios para ayudar a mejorar los trabajos. Algunos estudiantes escriben únicamente frases como “está bonito” o “está mal”.",

    pregunta:
      "¿Qué intervención docente favorecería una coevaluación formativa?",

    opciones: [
      "Solicitar que cada estudiante asigne una calificación numérica al trabajo de su compañero.",
      "Proporcionar criterios claros y ejemplos de comentarios específicos, respetuosos y útiles.",
      "Suspender la revisión entre pares y dejar toda la evaluación a cargo de la maestra.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "La coevaluación requiere criterios comprensibles y orientaciones que permitan emitir comentarios específicos sobre los logros y los aspectos por mejorar.",

    porQueNo: [
      "Una calificación numérica no ofrece por sí sola información suficiente para mejorar.",
      "Eliminar la participación del alumnado impide desarrollar la capacidad de analizar producciones y ofrecer retroalimentación.",
    ],

    fundamento:
      "La evaluación formativa requiere que los criterios sean conocidos y utilizados para analizar evidencias y orientar la mejora.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 3,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Cuestionamiento directo",

    caso:
      "Antes de iniciar una actividad de revisión entre pares, la docente explica los criterios de evaluación y analiza con el grupo dos ejemplos de trabajos.",

    pregunta:
      "¿Cuál es el propósito principal de esta intervención?",

    opciones: [
      "Asegurar que el alumnado comprenda cómo valorar las producciones con base en criterios comunes.",
      "Lograr que todas las alumnas y los alumnos escriban exactamente los mismos comentarios.",
      "Evitar que la docente tenga que revisar posteriormente las producciones.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "Analizar ejemplos y criterios permite que el alumnado comprenda qué debe observar y cómo formular una valoración fundamentada.",

    porQueNo: [
      "La coevaluación no busca respuestas idénticas, sino valoraciones sustentadas en criterios.",
      "La valoración entre pares complementa, pero no elimina, el acompañamiento docente.",
    ],

    fundamento:
      "Los criterios compartidos funcionan como referentes para valorar las evidencias de aprendizaje y proporcionar retroalimentación.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 4,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",

    caso:
      "Durante una coevaluación, un estudiante se molesta al recibir observaciones de un compañero y afirma que su trabajo no debe ser cuestionado. La docente desea aprovechar la situación como una oportunidad de aprendizaje.",

    pregunta:
      "¿Qué acción es más pertinente realizar?",

    opciones: [
      "Cancelar definitivamente las actividades de coevaluación para evitar conflictos.",
      "Dialogar sobre la finalidad de la retroalimentación, revisar los criterios y establecer acuerdos para comunicar observaciones con respeto.",
      "Indicar al estudiante que debe aceptar todos los comentarios sin expresar desacuerdo.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "La coevaluación requiere un ambiente de confianza, criterios compartidos y acuerdos para comunicar observaciones de manera respetuosa y orientada a la mejora.",

    porQueNo: [
      "Cancelar la actividad elimina la posibilidad de desarrollar habilidades de reflexión y colaboración.",
      "Aceptar comentarios sin analizarlos no favorece el diálogo ni la valoración crítica de la retroalimentación.",
    ],

    fundamento:
      "La evaluación formativa se desarrolla mediante el diálogo, la participación y el análisis respetuoso de las evidencias de aprendizaje.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 5,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Al terminar la revisión entre pares, cada estudiante recibe comentarios sobre su trabajo, pero la actividad concluye inmediatamente y no se realizan cambios en las producciones.",

    pregunta:
      "¿Qué acción permitiría fortalecer el sentido formativo de la coevaluación?",

    opciones: [
      "Dar tiempo para analizar los comentarios y mejorar la producción.",
      "Guardar las observaciones únicamente como evidencia administrativa.",
      "Pedir que cada estudiante compare la cantidad de comentarios que recibió.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La retroalimentación tiene sentido formativo cuando el alumnado puede analizarla y utilizarla para revisar o mejorar su trabajo.",

    porQueNo: [
      "Guardar los comentarios sin utilizarlos no contribuye directamente a mejorar el aprendizaje.",
      "Comparar cantidades de comentarios no permite valorar su calidad ni orientar la mejora.",
    ],

    fundamento:
      "La evaluación formativa implica utilizar la información obtenida para tomar decisiones y mejorar los procesos y productos de aprendizaje.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 6,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",

    caso:
      "Un equipo evalúa el proyecto de otro y detecta que las conclusiones no se relacionan claramente con las evidencias presentadas. En lugar de señalar únicamente el error, formula preguntas para que sus compañeros revisen la relación entre ambas partes.",

    pregunta:
      "¿Por qué esta retroalimentación entre pares es pertinente?",

    opciones: [
      "Porque permite que el equipo evaluador imponga su manera de resolver la actividad.",
      "Porque orienta la reflexión sin proporcionar directamente una solución.",
      "Porque sustituye completamente la intervención de la docente.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "Las preguntas pueden ayudar a que el alumnado analice su producción, identifique inconsistencias y tome decisiones para mejorarla.",

    porQueNo: [
      "La coevaluación no busca imponer una respuesta, sino dialogar con base en criterios.",
      "La docente continúa acompañando el proceso y utilizando las evidencias para orientar el aprendizaje.",
    ],

    fundamento:
      "La retroalimentación formativa debe favorecer la reflexión y la autorregulación mediante orientaciones que permitan actuar sobre el aprendizaje.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },
    {
    id: 13,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Después de una exposición, cada equipo revisa el trabajo de otro utilizando una rúbrica previamente conocida por todo el grupo.",
    pregunta:
      "¿Qué condición fortalece el carácter formativo de esta coevaluación?",
    opciones: [
      "Que los comentarios se fundamenten en criterios y evidencias.",
      "Que cada equipo otorgue únicamente una calificación.",
      "Que solo participe el equipo con mejores resultados.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La coevaluación es útil cuando las observaciones se sustentan en criterios claros y evidencias del desempeño.",
    porQueNo: [
      "Asignar solo una calificación aporta poca información para mejorar.",
      "Todos los estudiantes deben participar en el proceso de evaluación.",
    ],
    fundamento:
      "La coevaluación promueve la reflexión compartida y la mejora del aprendizaje mediante criterios comunes.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 14,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Los estudiantes intercambian sus escritos, pero los comentarios se limitan a expresiones como 'está bien' o 'me gustó'.",
    pregunta:
      "¿Qué debe hacer la docente para fortalecer la coevaluación?",
    opciones: [
      "Proporcionar criterios específicos para orientar la retroalimentación.",
      "Eliminar la coevaluación y revisar todos los trabajos ella sola.",
      "Solicitar únicamente una calificación numérica.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los criterios ayudan a emitir observaciones útiles y centradas en el aprendizaje.",
    porQueNo: [
      "Eliminar la participación del alumnado reduce las oportunidades de reflexión.",
      "La calificación por sí sola no orienta la mejora.",
    ],
    fundamento:
      "La calidad de la retroalimentación depende de contar con referentes claros.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 15,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Durante un proyecto, cada integrante revisa la participación de sus compañeros considerando colaboración, comunicación y cumplimiento de acuerdos.",
    pregunta:
      "¿Qué ventaja ofrece esta práctica?",
    opciones: [
      "Favorece la reflexión compartida sobre el trabajo colaborativo.",
      "Permite sustituir completamente la evaluación docente.",
      "Evita que los estudiantes dialoguen entre sí.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La coevaluación fortalece la responsabilidad compartida y la mejora del trabajo en equipo.",
    porQueNo: [
      "No sustituye la valoración profesional del docente.",
      "Su propósito es promover el diálogo, no impedirlo.",
    ],
    fundamento:
      "La evaluación formativa reconoce la participación activa del alumnado en la valoración de los procesos.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 16,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "En un grupo existe la costumbre de asignar siempre la máxima valoración a todos los compañeros para evitar conflictos.",
    pregunta:
      "¿Qué consecuencia tiene esta práctica?",
    opciones: [
      "Reduce la utilidad formativa de la coevaluación.",
      "Fortalece la objetividad de las valoraciones.",
      "Garantiza una retroalimentación de calidad.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Si las valoraciones no reflejan evidencias reales, dejan de orientar la mejora.",
    porQueNo: [
      "La objetividad requiere criterios y evidencias.",
      "Sin análisis fundamentado no existe retroalimentación útil.",
    ],
    fundamento:
      "Las valoraciones deben sustentarse en evidencias observables.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 17,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Al revisar el trabajo de un compañero, un estudiante identifica fortalezas y propone una mejora específica relacionada con los criterios establecidos.",
    pregunta:
      "¿Qué característica presenta esta retroalimentación?",
    opciones: [
      "Es específica, respetuosa y orientada a la mejora.",
      "Es subjetiva porque expresa una opinión personal.",
      "Es una calificación sin fundamento.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La retroalimentación útil identifica logros y propone acciones concretas para avanzar.",
    porQueNo: [
      "No se basa únicamente en opiniones.",
      "Incluye argumentos, no solo una calificación.",
    ],
    fundamento:
      "La retroalimentación efectiva favorece el aprendizaje y la mejora continua.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 18,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Los estudiantes analizan entre pares un experimento utilizando una guía de observación elaborada por la docente.",
    pregunta:
      "¿Qué aporta el uso de la guía?",
    opciones: [
      "Centra la atención en aspectos relevantes del desempeño.",
      "Permite emitir opiniones sin necesidad de evidencias.",
      "Hace innecesaria la observación directa.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La guía orienta qué observar y cómo valorar el desempeño.",
    porQueNo: [
      "Las opiniones deben sustentarse en evidencias.",
      "La observación sigue siendo indispensable.",
    ],
    fundamento:
      "Los instrumentos organizan y sistematizan la recuperación de evidencias.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 19,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Una docente detecta que algunos comentarios entre compañeros generan incomodidad porque se expresan de manera poco respetuosa.",
    pregunta:
      "¿Cuál es la mejor intervención?",
    opciones: [
      "Establecer normas de comunicación respetuosa antes de coevaluar.",
      "Suspender definitivamente la coevaluación.",
      "Permitir comentarios libres sin intervención docente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La coevaluación requiere un ambiente de confianza y respeto para cumplir su función formativa.",
    porQueNo: [
      "Eliminar la estrategia impide desarrollar esta competencia.",
      "La ausencia de normas puede afectar la convivencia.",
    ],
    fundamento:
      "La evaluación debe desarrollarse en ambientes seguros y colaborativos.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 20,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Después de recibir observaciones de sus compañeros, un estudiante mejora la organización y claridad de su presentación.",
    pregunta:
      "¿Qué evidencia muestra este caso?",
    opciones: [
      "La coevaluación favorece la mejora durante el proceso.",
      "La coevaluación solo sirve para asignar calificaciones.",
      "La coevaluación sustituye la planeación docente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La retroalimentación entre pares puede utilizarse para mejorar antes del producto final.",
    porQueNo: [
      "Su finalidad principal no es calificar.",
      "No reemplaza la intervención del docente.",
    ],
    fundamento:
      "La evaluación formativa busca generar oportunidades de mejora continua.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 21,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Básico",
    tipo: "Cuestionamiento directo",
    caso:
      "Una docente desea iniciar actividades de coevaluación con su grupo.",
    pregunta:
      "¿Qué elemento debe establecer primero?",
    opciones: [
      "Criterios claros y conocidos por todo el alumnado.",
      "Una escala de calificaciones del 1 al 10.",
      "La comparación pública entre estudiantes.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los criterios orientan las observaciones y favorecen valoraciones objetivas.",
    porQueNo: [
      "La calificación no sustituye los criterios.",
      "Las comparaciones públicas pueden afectar el clima de aula.",
    ],
    fundamento:
      "Los criterios compartidos fortalecen la participación responsable en la evaluación.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 22,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Coevaluación",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Al finalizar una secuencia didáctica, la docente analiza las observaciones realizadas entre pares para identificar dificultades comunes del grupo.",
    pregunta:
      "¿Qué uso pedagógico está dando a la información obtenida?",
    opciones: [
      "Ajustar la enseñanza a partir de las evidencias recuperadas.",
      "Reemplazar todas las evaluaciones posteriores.",
      "Conservar los comentarios únicamente como evidencia administrativa.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las evidencias de la coevaluación también orientan decisiones sobre la enseñanza.",
    porQueNo: [
      "La coevaluación complementa otras evidencias, no las sustituye.",
      "La información debe utilizarse para mejorar el aprendizaje.",
    ],
    fundamento:
      "La evaluación formativa implica interpretar evidencias para tomar decisiones pedagógicas oportunas.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },
];