import { Reactivo } from "../types";

export const retroalimentacion: Reactivo[] = [
  {
    id: 1,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Después de revisar los textos escritos por el grupo, una maestra observa que varias alumnas y alumnos presentan dificultades para organizar sus ideas. En lugar de colocar únicamente una calificación, escribe observaciones específicas sobre los logros y los aspectos que pueden mejorar.",

    pregunta:
      "¿Qué característica de la evaluación formativa se refleja principalmente en esta intervención?",

    opciones: [
      "La retroalimentación orientada a mejorar el proceso de aprendizaje.",
      "La asignación de una calificación para acreditar el producto final.",
      "La comparación de los resultados entre las alumnas y los alumnos.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La retroalimentación formativa ofrece información clara y específica para que el alumnado reconozca sus avances, identifique lo que necesita mejorar y tome decisiones sobre su aprendizaje.",

    porQueNo: [
      "Asignar solamente una calificación no explica al alumnado cómo puede mejorar.",
      "Comparar los resultados entre estudiantes no favorece necesariamente la reflexión sobre el propio proceso.",
    ],

    fundamento:
      "La evaluación formativa debe acompañar el proceso de aprendizaje y proporcionar orientaciones para su mejora.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 2,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Durante la resolución de un problema matemático, un alumno obtiene una respuesta incorrecta. La maestra le pregunta qué procedimiento siguió, en qué momento tuvo dudas y qué otra estrategia podría utilizar.",

    pregunta:
      "¿Cuál es el propósito principal de las preguntas realizadas por la maestra?",

    opciones: [
      "Indicar inmediatamente al alumno cuál es la respuesta correcta.",
      "Promover que el alumno analice su procedimiento y encuentre alternativas de solución.",
      "Comprobar que el alumno memorice el procedimiento utilizado por la maestra.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "Las preguntas ayudan al alumno a hacer visible su razonamiento, identificar posibles errores y buscar otras estrategias. Esto favorece la reflexión y la autorregulación del aprendizaje.",

    porQueNo: [
      "Dar inmediatamente la respuesta limita la oportunidad de que el alumno reflexione sobre su procedimiento.",
      "Memorizar un procedimiento no garantiza que el alumno comprenda cómo y por qué funciona.",
    ],

    fundamento:
      "La retroalimentación debe favorecer la reflexión del alumnado sobre sus procesos y no limitarse a señalar si una respuesta es correcta o incorrecta.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 3,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Básico",
    tipo: "Cuestionamiento directo",

    caso:
      "Una maestra desea ofrecer retroalimentación a su grupo después de una exposición oral.",

    pregunta:
      "¿Cuál de los siguientes comentarios es más congruente con la evaluación formativa?",

    opciones: [
      "Tu exposición estuvo bien; obtuviste nueve.",
      "Debes esforzarte más para que la próxima vez te salga mejor.",
      "Explicaste con claridad las ideas principales; ahora puedes mejorar el contacto visual y apoyar tus argumentos con ejemplos.",
    ],

    respuestaCorrecta: 2,

    explicacion:
      "Una retroalimentación útil reconoce los avances, señala aspectos concretos por mejorar y ofrece orientaciones que el alumnado puede utilizar en una actividad posterior.",

    porQueNo: [
      "Una calificación y un comentario general no ofrecen información suficiente para mejorar.",
      "Pedir más esfuerzo sin explicar qué debe cambiar no proporciona una orientación concreta.",
    ],

    fundamento:
      "La retroalimentación formativa debe ser específica, comprensible y vinculada con los criterios de la actividad.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 4,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Al finalizar una actividad de ciencias, la maestra entrega al grupo una lista con las respuestas correctas y pide que cada estudiante cuente sus aciertos.",

    pregunta:
      "¿Qué acción complementaria permitiría convertir esta actividad en una oportunidad de evaluación formativa?",

    opciones: [
      "Solicitar que el alumnado copie nuevamente todas las respuestas correctas.",
      "Pedir que identifique sus errores, explique sus causas y proponga cómo corregirlos.",
      "Registrar el número de aciertos de cada estudiante y ordenarlos de mayor a menor.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "La revisión se vuelve formativa cuando el alumnado analiza sus errores, comprende por qué ocurrieron y utiliza esa información para mejorar sus aprendizajes.",

    porQueNo: [
      "Copiar respuestas correctas no implica necesariamente comprender los errores cometidos.",
      "Ordenar al grupo por resultados promueve la comparación, pero no orienta la mejora del aprendizaje.",
    ],

    fundamento:
      "El error puede utilizarse como una fuente de información para comprender los procesos de aprendizaje y ajustar las estrategias.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 5,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Avanzado",
    tipo: "Caso práctico",

    caso:
      "Una maestra revisa los primeros borradores de un proyecto y detecta que la mayoría del grupo no utiliza evidencias para sustentar sus conclusiones. Decide detener temporalmente el proyecto y trabajar con ejemplos que permitan distinguir entre una opinión y una conclusión sustentada.",

    pregunta:
      "¿Por qué la decisión de la maestra es congruente con la evaluación formativa?",

    opciones: [
      "Porque modifica su intervención a partir de las evidencias de aprendizaje identificadas.",
      "Porque sustituye el proyecto por una actividad más sencilla para evitar errores.",
      "Porque impide que el alumnado entregue productos que todavía no están terminados.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La maestra analiza las evidencias obtenidas y ajusta su intervención para atender una necesidad concreta antes de que el alumnado continúe con el proyecto.",

    porQueNo: [
      "La intervención no busca evitar los errores, sino utilizarlos para orientar el aprendizaje.",
      "La finalidad no es impedir la entrega, sino ofrecer los apoyos necesarios para mejorar el producto.",
    ],

    fundamento:
      "La evaluación formativa permite tomar decisiones pedagógicas oportunas y ajustar la enseñanza de acuerdo con las necesidades del grupo.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 6,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Intermedio",
    tipo: "Cuestionamiento directo",

    caso:
      "Un docente ofrece retroalimentación a sus estudiantes una semana después de que terminaron una actividad y cuando ya comenzaron un tema distinto.",

    pregunta:
      "¿Qué aspecto debería mejorar principalmente el docente para que la retroalimentación sea más útil?",

    opciones: [
      "Entregarla oportunamente para que pueda utilizarse durante el proceso de aprendizaje.",
      "Aumentar la cantidad de comentarios escritos, aunque se entreguen al final del periodo.",
      "Utilizar solamente símbolos para reducir el tiempo destinado a revisar los trabajos.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La retroalimentación debe ser oportuna. El alumnado necesita recibirla cuando todavía tiene la posibilidad de revisar, corregir y mejorar su trabajo.",

    porQueNo: [
      "Una gran cantidad de comentarios tardíos puede resultar poco útil si ya no pueden aplicarse.",
      "Los símbolos aislados no siempre explican qué se logró, qué debe mejorarse ni cómo hacerlo.",
    ],

    fundamento:
      "La retroalimentación formativa debe proporcionarse durante el proceso y permitir que el alumnado actúe a partir de ella.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 7,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Avanzado",
    tipo: "Caso práctico",

    caso:
      "Después de una actividad, el docente comenta frente al grupo: “Algunos todavía no entienden porque no pusieron suficiente atención”. Varias alumnas y alumnos dejan de participar por temor a equivocarse.",

    pregunta:
      "¿Qué cambio debería realizar el docente para favorecer una retroalimentación formativa?",

    opciones: [
      "Señalar públicamente a quienes cometieron errores para que asuman su responsabilidad.",
      "Enfocar sus comentarios en las producciones y los procesos, utilizando un lenguaje respetuoso y orientado a la mejora.",
      "Evitar cualquier comentario sobre los errores para no afectar la confianza del alumnado.",
    ],

    respuestaCorrecta: 1,

    explicacion:
      "La retroalimentación debe centrarse en las evidencias y en las posibilidades de mejora, no en descalificar a la persona. También debe favorecer un ambiente seguro para aprender del error.",

    porQueNo: [
      "Exhibir públicamente al alumnado puede afectar su participación y no ofrece orientaciones para mejorar.",
      "Evitar hablar de los errores elimina una fuente importante de información para el aprendizaje.",
    ],

    fundamento:
      "La evaluación formativa requiere un ambiente de confianza en el que los errores se analicen como parte del proceso de aprendizaje.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 8,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Antes de iniciar un proyecto, una maestra comparte con el grupo los criterios que utilizarán para valorar el producto final. Durante el desarrollo, las alumnas y los alumnos consultan esos criterios para revisar sus avances.",

    pregunta:
      "¿Qué beneficio tiene compartir previamente los criterios de evaluación?",

    opciones: [
      "Permite que el alumnado comprenda qué se espera y pueda orientar y revisar su trabajo.",
      "Garantiza que todos los productos sean iguales y que no existan diferencias.",
      "Evita que la maestra tenga que observar el proceso de aprendizaje del grupo.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "Conocer los criterios permite que el alumnado comprenda las expectativas, valore sus avances y tome decisiones para mejorar sus producciones.",

    porQueNo: [
      "Los criterios orientan el trabajo, pero no buscan producir resultados idénticos.",
      "La observación docente sigue siendo necesaria para acompañar y ajustar la intervención.",
    ],

    fundamento:
      "Los criterios de evaluación deben ser comprensibles y utilizarse como referentes para la retroalimentación y la autorregulación.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 9,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Avanzado",
    tipo: "Caso práctico",

    caso:
      "Al revisar una actividad, una alumna recibe numerosos comentarios sobre ortografía, presentación, contenido, estructura, limpieza y extensión. No logra identificar qué debe atender primero.",

    pregunta:
      "¿Cómo podría mejorarse la retroalimentación proporcionada?",

    opciones: [
      "Priorizar los aspectos más relevantes y ofrecer indicaciones claras y realizables.",
      "Agregar más observaciones para explicar detalladamente cada uno de los errores.",
      "Eliminar todos los comentarios y comunicar únicamente la calificación obtenida.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La retroalimentación debe ser comprensible y manejable. Priorizar los aspectos centrales ayuda al alumnado a concentrar sus esfuerzos y avanzar progresivamente.",

    porQueNo: [
      "Una cantidad excesiva de observaciones puede dificultar que el alumnado identifique las acciones prioritarias.",
      "Una calificación aislada no comunica qué se aprendió ni qué puede mejorarse.",
    ],

    fundamento:
      "La retroalimentación efectiva debe seleccionar información relevante y traducirla en acciones posibles para el alumnado.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },

  {
    id: 10,
    area: "Intervención docente",
    tema: "Evaluación Formativa",
    subtema: "Retroalimentación para el aprendizaje",
    nivel: "Intermedio",
    tipo: "Caso práctico",

    caso:
      "Después de recibir comentarios sobre su trabajo, las alumnas y los alumnos guardan sus productos sin hacer ninguna modificación. La maestra considera que ya cumplió con la retroalimentación.",

    pregunta:
      "¿Qué acción falta para completar el sentido formativo de la retroalimentación?",

    opciones: [
      "Dar al alumnado oportunidad y tiempo para utilizar los comentarios y mejorar su trabajo.",
      "Registrar los comentarios en una lista para comprobar que fueron entregados.",
      "Aplicar una nueva actividad con mayor dificultad sin revisar el producto anterior.",
    ],

    respuestaCorrecta: 0,

    explicacion:
      "La retroalimentación adquiere sentido cuando el alumnado puede utilizarla. Es necesario ofrecer oportunidades para revisar, corregir o mejorar sus producciones.",

    porQueNo: [
      "Registrar que se entregaron comentarios no demuestra que hayan sido comprendidos o utilizados.",
      "Avanzar sin revisar las dificultades detectadas desaprovecha la información obtenida.",
    ],

    fundamento:
      "La evaluación formativa implica un ciclo de obtención de evidencias, retroalimentación y mejora de los aprendizajes.",

    bibliografia:
      "Plan de Estudio para la Educación Preescolar, Primaria y Secundaria 2022.",
  },
];