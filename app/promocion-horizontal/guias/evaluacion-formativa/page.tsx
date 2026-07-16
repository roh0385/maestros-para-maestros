import Link from "next/link";

const ideasClave = [
  "La evaluación formativa acompaña el aprendizaje durante todo el proceso.",
  "Su propósito principal es mejorar la enseñanza y el aprendizaje, no solo asignar una calificación.",
  "La retroalimentación debe ser clara, oportuna y orientada a la mejora.",
  "Las evidencias permiten tomar decisiones pedagógicas fundamentadas.",
  "La evaluación es continua, flexible y contextualizada.",
  "El error es una oportunidad para aprender y ajustar la intervención docente.",
];

const conceptos = [
  {
    titulo: "Evaluación formativa",
    texto:
      "Proceso continuo para obtener evidencias del aprendizaje y ajustar la intervención docente con el fin de favorecer el desarrollo del alumnado.",
  },
  {
    titulo: "Retroalimentación",
    texto:
      "Información que orienta al estudiante sobre sus avances, fortalezas y aspectos por mejorar.",
  },
  {
    titulo: "Evidencias de aprendizaje",
    texto:
      "Productos, desempeños o procesos que muestran lo que el estudiante comprende y es capaz de hacer.",
  },
  {
    titulo: "Autoevaluación",
    texto:
      "El estudiante reflexiona sobre su propio aprendizaje para reconocer avances y áreas de mejora.",
  },
  {
    titulo: "Coevaluación",
    texto:
      "Los estudiantes valoran el trabajo de sus compañeros con criterios previamente establecidos.",
  },
  {
    titulo: "Heteroevaluación",
    texto:
      "La valoración realizada por el docente para orientar el proceso de aprendizaje.",
  },
];

const errores = [
  "Pensar que evaluar es únicamente poner una calificación.",
  "Retroalimentar solo al finalizar un proyecto.",
  "Usar un único instrumento para valorar todos los aprendizajes.",
  "Confundir evaluación continua con aplicar muchos exámenes.",
  "Considerar el error como motivo de castigo y no como una oportunidad de aprendizaje.",
];

export default function EvaluacionFormativaPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <article className="mx-auto max-w-4xl">

        <Link
          href="/promocion-horizontal/guias"
          className="font-semibold text-blue-800 hover:underline"
        >
          ← Volver a las guías
        </Link>

        <header className="mt-7 rounded-2xl bg-blue-900 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Guía de estudio
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Evaluación Formativa
          </h1>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Comprende cómo utilizar la evaluación para mejorar el aprendizaje y
            orientar la práctica docente.
          </p>
        </header>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Qué debes comprender?
          </h2>

          <div className="space-y-5 leading-8 text-slate-700">

            <p>
              La evaluación formativa es un proceso permanente que acompaña el
              aprendizaje. Su finalidad principal es obtener información para
              tomar decisiones que favorezcan el desarrollo del alumnado y
              mejorar la práctica docente.
            </p>

            <p>
              No busca únicamente asignar una calificación. Su verdadero valor
              consiste en ofrecer retroalimentación oportuna que permita al
              estudiante reconocer sus avances y saber qué necesita mejorar.
            </p>

            <p>
              Desde la Nueva Escuela Mexicana, evaluar significa comprender cómo
              aprende cada estudiante y utilizar las evidencias para ajustar la
              enseñanza de manera pertinente y contextualizada.
            </p>

          </div>

        </section>

        <section className="mt-8">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ideas clave
          </h2>

          <ul className="space-y-3">

            {ideasClave.map((idea) => (

              <li
                key={idea}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="mt-1 text-xl font-bold text-blue-700">
                  ✓
                </span>

                <span className="text-slate-800 leading-7 font-medium">
                  {idea}
                </span>

              </li>

            ))}

          </ul>

        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Conceptos importantes
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {conceptos.map((concepto) => (

              <div
                key={concepto.titulo}
                className="rounded-xl border border-slate-200 p-5"
              >

                <h3 className="text-xl font-bold text-blue-900">
                  {concepto.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {concepto.texto}
                </p>

              </div>

            ))}

          </div>

        </section>

        <section className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-8">

          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            Errores frecuentes
          </h2>

          <ul className="space-y-4">

            {errores.map((error) => (

              <li key={error}>
                ⚠ {error}
              </li>

            ))}

          </ul>

        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Caso tipo USICAMM
          </h2>

          <p className="leading-8 text-slate-700">

            Durante una secuencia didáctica, una docente observa que varios
            estudiantes presentan dificultades para explicar un concepto con sus
            propias palabras. Antes de continuar con el siguiente contenido,
            reorganiza equipos, recupera los errores más frecuentes y diseña una
            nueva actividad para fortalecer la comprensión.

            ¿Qué principio de la evaluación formativa orienta mejor esta
            decisión?

          </p>

          <div className="mt-6 space-y-3">

            <p className="rounded-lg border p-4">
              A) Evitar retrasar el avance del programa escolar.
            </p>

            <p className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 font-semibold">
              B) Utilizar las evidencias para retroalimentar y ajustar la
              intervención docente.
            </p>

            <p className="rounded-lg border p-4">
              C) Incrementar el número de actividades calificadas.
            </p>

            <p className="rounded-lg border p-4">
              D) Aplicar inmediatamente un examen escrito.
            </p>

          </div>

          <div className="mt-6 rounded-xl bg-slate-100 p-5">

            <p className="font-bold">
              ✅ Respuesta correcta: B
            </p>

            <p className="mt-3 leading-7 text-slate-700">

              La evaluación formativa permite identificar dificultades durante
              el proceso y ajustar la enseñanza para favorecer mejores
              aprendizajes.

            </p>

          </div>

        </section>

        <section className="mt-8 rounded-2xl bg-blue-50 p-8">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Repaso rápido
          </h2>

          <div className="space-y-5 leading-7">

            <p><strong>¿Cuál es el propósito de la evaluación formativa?</strong><br/>Mejorar el aprendizaje mediante la retroalimentación y la toma de decisiones pedagógicas.</p>

            <p><strong>¿Qué son las evidencias?</strong><br/>Productos, procesos o desempeños que muestran lo aprendido.</p>

            <p><strong>¿Qué debe hacer un docente con los resultados?</strong><br/>Analizarlos para ajustar la enseñanza y favorecer el progreso del alumnado.</p>

          </div>

        </section>

      </article>
    </main>
  );
}