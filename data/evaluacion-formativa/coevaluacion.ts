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
];