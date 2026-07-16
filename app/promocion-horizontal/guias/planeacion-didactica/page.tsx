import Link from "next/link";

const ideasClave = [
  "La planeación didáctica responde a una intención educativa concreta.",
  "Parte del Programa Analítico y de los contenidos ya contextualizados.",
  "Considera las características, intereses, condiciones y saberes del grupo.",
  "Articula contenidos, metodología, recursos, tiempo, espacio y evaluación formativa.",
  "Debe ser flexible y ajustarse a lo que ocurre durante la clase.",
  "La evaluación aporta información para modificar y mejorar la enseñanza.",
];

const elementos = [
  {
    titulo: "Niñas, niños y adolescentes",
    texto:
      "La planeación considera lo que saben, lo que necesitan aprender, sus intereses, ritmos, condiciones y formas de participación.",
  },
  {
    titulo: "Contenidos",
    texto:
      "Se seleccionan a partir del Programa Analítico, donde los contenidos nacionales ya fueron contextualizados.",
  },
  {
    titulo: "Metodología",
    texto:
      "Define cómo se organizarán las experiencias de aprendizaje y qué estrategias favorecerán la participación y la comprensión.",
  },
  {
    titulo: "Recursos",
    texto:
      "Incluye materiales impresos, objetos, espacios, herramientas digitales y saberes de la comunidad.",
  },
  {
    titulo: "Tiempo y espacio",
    texto:
      "Prevé cuándo, durante cuánto tiempo y en qué espacios se desarrollarán las actividades.",
  },
  {
    titulo: "Evaluación formativa",
    texto:
      "Permite observar avances, dificultades y errores para retroalimentar y ajustar la intervención docente.",
  },
];

const decisionesCorrectas = [
  "Partir de una lectura realista de las necesidades del grupo.",
  "Relacionar los contenidos con situaciones relevantes del contexto.",
  "Definir con claridad qué se espera que aprendan las y los estudiantes.",
  "Seleccionar actividades, recursos y formas de organización congruentes con el propósito.",
  "Prever evidencias que permitan observar el proceso de aprendizaje.",
  "Modificar la planeación cuando la respuesta del grupo lo requiera.",
];

const erroresFrecuentes = [
  "Considerar la planeación como un formato administrativo que debe cumplirse sin cambios.",
  "Copiar actividades sin relacionarlas con las necesidades del grupo.",
  "Planear primero las actividades y después intentar justificar el propósito.",
  "Separar la evaluación de los procesos de enseñanza y aprendizaje.",
  "Interpretar cualquier ajuste durante la clase como falta de planeación.",
];

export default function PlaneacionDidacticaPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/promocion-horizontal/guias"
          className="font-semibold text-blue-800 hover:underline"
        >
          ← Volver a las guías
        </Link>

        <header className="mt-7 rounded-2xl bg-blue-900 p-7 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Guía de estudio
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Planeación Didáctica
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-100">
            Decisiones docentes para organizar una enseñanza contextualizada,
            flexible y vinculada con la evaluación formativa.
          </p>
        </header>

        <section className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            ¿Qué debes comprender?
          </h2>

          <div className="mt-4 space-y-4 leading-7 text-slate-700">
            <p>
              La planeación didáctica es un ejercicio profesional mediante el
              cual la o el docente anticipa, analiza y organiza su intervención
              educativa. No consiste únicamente en llenar un formato, sino en
              tomar decisiones fundamentadas sobre qué aprenderá el alumnado,
              para qué, cómo, con qué recursos, en qué tiempo y mediante qué
              evidencias se valorará el proceso.
            </p>

            <p>
              En el marco del Plan de Estudio 2022, la planeación parte del
              Programa Analítico. Esto significa que los contenidos deben
              relacionarse con las características reales de las y los
              estudiantes, la escuela y la comunidad.
            </p>

            <p>
              La planeación y la evaluación formativa integran un ciclo de
              mejora continua. La planeación orienta la intervención y la
              evaluación aporta información para ajustarla durante y después de
              la experiencia de aprendizaje.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900">Ideas clave</h2>

          <ul className="mt-4 space-y-3">
            {ideasClave.map((idea) => (
              <li
                key={idea}
                className="rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700"
              >
                <span className="mr-2 font-bold text-blue-800">✓</span>
                {idea}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Elementos de la planeación
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {elementos.map((elemento) => (
              <div
                key={elemento.titulo}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="text-lg font-bold text-blue-900">
                  {elemento.titulo}
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  {elemento.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
          <h2 className="text-2xl font-bold text-emerald-950">
            Decisiones congruentes
          </h2>

          <ul className="mt-4 space-y-3 leading-7 text-emerald-950">
            {decisionesCorrectas.map((decision) => (
              <li key={decision}>
                <span className="mr-2 font-bold">•</span>
                {decision}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-bold text-amber-950">
            Errores frecuentes en los reactivos
          </h2>

          <ul className="mt-4 space-y-3 leading-7 text-amber-950">
            {erroresFrecuentes.map((error) => (
              <li key={error}>
                <span className="mr-2 font-bold">⚠</span>
                {error}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Caso tipo USICAMM
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Una maestra planeó una actividad para analizar un problema de la
            comunidad. Durante la sesión observa que el grupo no comprende la
            información inicial y que varias alumnas y alumnos dejan de
            participar. ¿Qué acción es la más adecuada?
          </p>

          <div className="mt-5 space-y-3 text-slate-700">
            <p className="rounded-lg border border-slate-200 p-4">
              A) Continuar sin cambios para cumplir exactamente con lo escrito.
            </p>

            <p className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 font-semibold text-emerald-950">
              B) Ajustar la actividad, recuperar los saberes del grupo y ofrecer
              apoyos que permitan avanzar.
            </p>

            <p className="rounded-lg border border-slate-200 p-4">
              C) Suspender definitivamente el contenido porque el grupo no está
              preparado.
            </p>

            <p className="rounded-lg border border-slate-200 p-4">
              D) Aplicar una calificación para identificar quiénes no estudiaron.
            </p>
          </div>

          <div className="mt-5 rounded-xl bg-slate-100 p-5">
            <p className="font-bold text-slate-900">Respuesta correcta: B</p>

            <p className="mt-2 leading-7 text-slate-700">
              Una planeación es flexible. La evaluación formativa permite
              identificar lo que sucede en el momento y modificar la
              intervención para favorecer el aprendizaje y la participación.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-blue-50 p-7">
          <h2 className="text-2xl font-bold text-blue-950">Repaso rápido</h2>

          <div className="mt-4 space-y-4 leading-7 text-blue-950">
            <div>
              <p className="font-bold">
                1. ¿De qué documento parte la planeación didáctica?
              </p>
              <p>
                Del Programa Analítico, donde los contenidos han sido
                contextualizados según las necesidades del alumnado.
              </p>
            </div>

            <div>
              <p className="font-bold">
                2. ¿Por qué debe ser flexible?
              </p>
              <p>
                Porque la realidad del aula puede exigir ajustes para asegurar
                el progreso y la participación.
              </p>
            </div>

            <div>
              <p className="font-bold">
                3. ¿Qué relación tiene con la evaluación?
              </p>
              <p>
                Ambas forman un ciclo: se planea, se observan evidencias, se
                retroalimenta y se ajusta la enseñanza.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-3 border-t border-slate-300 pt-6 sm:flex-row sm:justify-between">
          <Link
            href="/promocion-horizontal/guias"
            className="rounded-lg border border-blue-800 px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            Volver a las guías
          </Link>

          <Link
            href="/promocion-horizontal/reactivos"
            className="rounded-lg bg-blue-800 px-5 py-3 text-center font-semibold text-white hover:bg-blue-900"
          >
            Practicar reactivos →
          </Link>
        </footer>
      </article>
    </main>
  );
}