import { Reactivo } from "../types";

export const evidencias: Reactivo[] = [
  {
    id: 1,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Uso pedagógico de las evidencias",
    nivel: "Intermedio",
    tipo: "Cuestionamiento directo",

    caso:
      "Durante una secuencia didáctica, una maestra identifica que varias alumnas y alumnos pueden resolver las actividades, pero tienen dificultades para explicar el procedimiento que utilizaron.",

    pregunta:
      "¿Qué intervención docente es más congruente con la evaluación formativa?",

    opciones: [
      "Asignar ejercicios adicionales para practicar el mismo procedimiento.",
      "Registrar únicamente los resultados obtenidos y continuar con el siguiente contenido.",
      "Analizar las explicaciones del alumnado y ofrecer retroalimentación para mejorar sus procedimientos.",
    ],

    respuestaCorrecta: 2,

    explicacion:
      "La evaluación formativa utiliza las evidencias para comprender cómo aprende el alumnado y orientar la intervención docente.",

    porQueNo: [
      "Practicar más no garantiza comprender el error.",
      "Registrar resultados sin analizarlos impide retroalimentar el aprendizaje.",
    ],

    fundamento:
      "Plan de Estudio 2022. Evaluación Formativa.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },
];