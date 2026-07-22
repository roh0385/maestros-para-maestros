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
    {
    id: 11,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Durante un proyecto sobre el cuidado del agua, la docente recopila fotografías del trabajo de campo, registros de observación, productos escritos y una presentación final.",
    pregunta:
      "¿Por qué es pertinente recuperar evidencias diversas?",
    opciones: [
      "Porque permiten comprender el proceso y el resultado del aprendizaje.",
      "Porque facilitan asignar una calificación sin analizar el desempeño.",
      "Porque sustituyen la observación del docente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las evidencias variadas muestran distintos momentos del aprendizaje y permiten valorar tanto el proceso como el producto.",
    porQueNo: [
      "Las evidencias requieren análisis e interpretación.",
      "La observación sigue siendo una fuente importante de información.",
    ],
    fundamento:
      "La evaluación formativa recupera evidencias suficientes y pertinentes para comprender el aprendizaje.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 12,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Una maestra únicamente conserva la calificación final de cada proyecto y desecha los borradores, notas y registros del proceso.",
    pregunta:
      "¿Qué información pierde principalmente?",
    opciones: [
      "Las evidencias que muestran cómo evolucionó el aprendizaje.",
      "La posibilidad de registrar la asistencia del grupo.",
      "Los contenidos establecidos en el programa.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los borradores y registros permiten comprender los avances, dificultades y decisiones tomadas durante el proceso.",
    porQueNo: [
      "La asistencia corresponde a otro tipo de registro.",
      "Los contenidos permanecen definidos independientemente de las evidencias.",
    ],
    fundamento:
      "Las evidencias deben documentar el proceso de aprendizaje, no únicamente el resultado final.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 13,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Durante una investigación, los estudiantes registran observaciones en un cuaderno, elaboran tablas de datos y redactan conclusiones.",
    pregunta:
      "¿Qué representan estos materiales?",
    opciones: [
      "Evidencias del aprendizaje desarrolladas durante el proceso.",
      "Únicamente actividades de práctica sin valor para evaluar.",
      "Instrumentos de evaluación elaborados por el docente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las producciones del alumnado constituyen evidencias que permiten valorar el desarrollo de los aprendizajes.",
    porQueNo: [
      "Las actividades generan información valiosa para la evaluación.",
      "Los instrumentos organizan la evaluación; las producciones son las evidencias.",
    ],
    fundamento:
      "Las evidencias pueden obtenerse de productos, desempeños y procesos observables.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 14,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Después de una actividad experimental, la docente fotografía el montaje realizado por cada equipo y registra las explicaciones que ofrecen durante la socialización.",
    pregunta:
      "¿Qué ventaja tiene combinar estas evidencias?",
    opciones: [
      "Permite valorar tanto el producto como la argumentación del alumnado.",
      "Evita observar directamente el trabajo de los estudiantes.",
      "Hace innecesario utilizar criterios de evaluación.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Cada evidencia aporta información distinta sobre el aprendizaje y, juntas, ofrecen una visión más completa.",
    porQueNo: [
      "La observación continúa siendo necesaria.",
      "Las evidencias deben interpretarse mediante criterios.",
    ],
    fundamento:
      "La diversidad de evidencias fortalece la interpretación de los aprendizajes.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 15,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Una docente selecciona únicamente los mejores trabajos del grupo para integrar el portafolio.",
    pregunta:
      "¿Qué limitación presenta esta decisión?",
    opciones: [
      "Impide apreciar el proceso completo y las áreas de mejora.",
      "Facilita interpretar todas las dificultades del alumnado.",
      "Garantiza una evaluación objetiva.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las evidencias deben mostrar avances, dificultades y progresos, no solo los productos destacados.",
    porQueNo: [
      "Las dificultades podrían quedar ocultas.",
      "La objetividad depende del análisis con criterios, no solo de la selección de trabajos.",
    ],
    fundamento:
      "La evaluación formativa requiere evidencias representativas del proceso.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 16,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Al revisar una secuencia didáctica, la docente detecta que las evidencias muestran una dificultad común para justificar respuestas.",
    pregunta:
      "¿Qué decisión pedagógica es más pertinente?",
    opciones: [
      "Diseñar nuevas actividades para fortalecer la argumentación.",
      "Conservar la planeación sin realizar cambios.",
      "Asignar automáticamente una calificación más baja.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las evidencias deben utilizarse para ajustar la enseñanza y atender las necesidades detectadas.",
    porQueNo: [
      "Ignorar la información desperdicia el potencial de la evaluación.",
      "La calificación no resuelve la dificultad identificada.",
    ],
    fundamento:
      "Las decisiones docentes deben sustentarse en las evidencias recuperadas.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 17,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Básico",
    tipo: "Cuestionamiento directo",
    caso:
      "Una docente desea seleccionar evidencias útiles para valorar el aprendizaje.",
    pregunta:
      "¿Cuál es el criterio principal para elegirlas?",
    opciones: [
      "Que sean pertinentes para los aprendizajes que se desean valorar.",
      "Que sean las más fáciles de archivar.",
      "Que siempre sean escritas.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las evidencias deben guardar relación directa con los aprendizajes y criterios establecidos.",
    porQueNo: [
      "La facilidad administrativa no determina su pertinencia.",
      "Las evidencias pueden adoptar múltiples formatos.",
    ],
    fundamento:
      "La pertinencia de la evidencia depende de su relación con el aprendizaje esperado.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 18,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Al comparar las evidencias del inicio y del final de una secuencia, la docente observa mejoras importantes en la argumentación escrita.",
    pregunta:
      "¿Qué permite identificar esta comparación?",
    opciones: [
      "El progreso del aprendizaje a lo largo del tiempo.",
      "Únicamente la calificación final.",
      "La asistencia del alumnado.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Comparar evidencias de distintos momentos permite reconocer avances y necesidades de fortalecimiento.",
    porQueNo: [
      "La finalidad va más allá de asignar una calificación.",
      "La asistencia corresponde a otro tipo de información.",
    ],
    fundamento:
      "La evaluación formativa analiza el progreso mediante evidencias obtenidas en diferentes momentos.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 19,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Intermedio",
    tipo: "Caso práctico",
    caso:
      "Una maestra organiza las evidencias por fecha y aprendizaje esperado para facilitar su análisis.",
    pregunta:
      "¿Qué beneficio obtiene con esta organización?",
    opciones: [
      "Interpretar con mayor claridad la evolución del aprendizaje.",
      "Evitar revisar nuevamente las producciones.",
      "Sustituir el uso de instrumentos de evaluación.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Organizar las evidencias facilita identificar patrones, avances y necesidades de intervención.",
    porQueNo: [
      "Las producciones siguen requiriendo revisión.",
      "Los instrumentos continúan siendo necesarios para valorar las evidencias.",
    ],
    fundamento:
      "La sistematización favorece la interpretación de la información obtenida durante la evaluación.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 20,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Evidencias",
    nivel: "Avanzado",
    tipo: "Caso práctico",
    caso:
      "Antes de planear la siguiente secuencia, la docente revisa todas las evidencias reunidas durante el proyecto anterior.",
    pregunta:
      "¿Cuál es el propósito principal de esta acción?",
    opciones: [
      "Tomar decisiones para mejorar la enseñanza a partir de la información obtenida.",
      "Conservar únicamente un registro administrativo.",
      "Asignar nuevamente las mismas calificaciones.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las evidencias permiten ajustar la planificación y responder a las necesidades reales del grupo.",
    porQueNo: [
      "Su función trasciende el aspecto administrativo.",
      "Las decisiones pedagógicas deben centrarse en el aprendizaje, no en repetir calificaciones.",
    ],
    fundamento:
      "La evaluación formativa utiliza las evidencias para orientar la planificación y la intervención docente.",
    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },
];