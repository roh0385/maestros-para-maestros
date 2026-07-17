export type Reactivo = {
  id: number;
  tema:
    | "Nueva Escuela Mexicana"
    | "Planeación Didáctica"
    | "Inclusión"
    | "Evaluación Formativa";
  subtema: string;
  nivel: "Básico" | "Intermedio" | "Avanzado";
  caso: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
  fundamento: string;
};

export const reactivos: Reactivo[] = [
  {
    id: 1,
    tema: "Evaluación Formativa",
    subtema: "Uso pedagógico de las evidencias",
    nivel: "Intermedio",
    caso:
      "Durante una secuencia didáctica, una maestra identifica que varias alumnas y alumnos pueden resolver las actividades, pero tienen dificultades para explicar el procedimiento que utilizaron.",
    pregunta:
      "¿Qué intervención docente es más congruente con la evaluación formativa?",
    opciones: [
      "Asignar ejercicios adicionales para que el grupo practique el mismo procedimiento.",
      "Registrar los resultados obtenidos y continuar con el siguiente contenido.",
      "Analizar las explicaciones del alumnado y ofrecer retroalimentación que le permita reconocer y mejorar sus procedimientos.",
      "Aplicar una prueba escrita para determinar quiénes alcanzaron el aprendizaje esperado.",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La evaluación formativa utiliza las evidencias para comprender los procesos de aprendizaje, retroalimentar al alumnado y ajustar la intervención docente.",
    fundamento: "Plan de Estudio 2022 — Evaluación formativa.",
  },
  {
    id: 2,
    tema: "Inclusión",
    subtema: "Barreras para el aprendizaje y la participación",
    nivel: "Intermedio",
    caso:
      "En un grupo de primaria, una alumna con discapacidad motriz tiene dificultades para participar en una actividad porque los materiales están colocados fuera de su alcance y la dinámica exige desplazarse constantemente por el aula.",
    pregunta:
      "¿Qué acción debe realizar inicialmente la docente para favorecer la inclusión?",
    opciones: [
      "Asignar a una compañera para que realice las actividades en nombre de la alumna.",
      "Modificar la organización del espacio y los materiales para garantizar su participación autónoma.",
      "Preparar una actividad distinta que pueda resolver sin desplazarse.",
      "Solicitar que la familia proporcione apoyo durante las sesiones.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La barrera se encuentra en la organización del entorno. La respuesta inclusiva consiste en transformar las condiciones del aula para favorecer la participación autónoma.",
    fundamento:
      "Estrategia Nacional de Educación Inclusiva — Eliminación de barreras.",
  },
  {
    id: 3,
    tema: "Planeación Didáctica",
    subtema: "Flexibilidad de la planeación",
    nivel: "Intermedio",
    caso:
      "Una docente planeó trabajar un contenido mediante la lectura individual de un texto. Durante la sesión observa que gran parte del grupo no comprende algunos conceptos indispensables para continuar.",
    pregunta:
      "¿Qué decisión es más pertinente para favorecer el aprendizaje?",
    opciones: [
      "Mantener la actividad porque modificarla impediría cumplir la planeación.",
      "Suspender el contenido y asignarlo como tarea para trabajarlo en casa.",
      "Recuperar los saberes del grupo, incorporar apoyos y ajustar la actividad prevista.",
      "Aplicar una evaluación para identificar a quienes no estudiaron previamente.",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La planeación didáctica es flexible y debe ajustarse con base en las necesidades, evidencias y respuestas reales del grupo.",
    fundamento: "Plan de Estudio 2022 — Autonomía profesional docente.",
  },
];