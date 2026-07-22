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
  }
];