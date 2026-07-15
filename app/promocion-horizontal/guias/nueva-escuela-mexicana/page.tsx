import Link from "next/link";

const ideasClave = [
  "La educación es un derecho humano y debe respetar la dignidad de todas las personas.",
  "Niñas, niños y adolescentes se encuentran al centro de la acción educativa.",
  "La educación debe ser inclusiva, equitativa, intercultural, integral y de excelencia.",
  "La escuela y la comunidad mantienen una relación de colaboración y corresponsabilidad.",
  "El aprendizaje debe relacionarse con la realidad social, cultural y territorial del alumnado.",
  "Las maestras y los maestros ejercen autonomía profesional para contextualizar su enseñanza.",
  "La evaluación debe acompañar el aprendizaje y ayudar a mejorar la intervención docente.",
];

const principios = [
  {
    titulo: "Dignidad humana",
    texto:
      "Toda decisión educativa debe reconocer, proteger y desarrollar la dignidad de niñas, niños y adolescentes.",
  },
  {
    titulo: "Derechos humanos",
    texto:
      "La escuela debe favorecer el conocimiento, ejercicio y protección de los derechos humanos en la vida cotidiana.",
  },
  {
    titulo: "Inclusión",
    texto:
      "La educación debe eliminar las barreras que limitan el aprendizaje, la participación y la permanencia del alumnado.",
  },
  {
    titulo: "Interculturalidad crítica",
    texto:
      "Se reconoce la diversidad cultural, lingüística y social, promoviendo el diálogo respetuoso y cuestionando las desigualdades.",
  },
  {
    titulo: "Pensamiento crítico",
    texto:
      "El alumnado analiza, reflexiona, cuestiona y participa en la transformación de los problemas de su realidad.",
  },
  {
    titulo: "Comunidad",
    texto:
      "La comunidad es un espacio de aprendizaje y un núcleo integrador de los procesos educativos.",
  },
];

const decisionesCorrectas = [
  "Contextualizar las actividades considerando las características del grupo y de la comunidad.",
  "Realizar ajustes para asegurar la participación de todo el alumnado.",
  "Relacionar los contenidos escolares con situaciones y problemas reales.",
  "Promover el diálogo, la colaboración y el trabajo colectivo.",
  "Utilizar evidencias de aprendizaje para modificar y mejorar la enseñanza.",
  "Priorizar el interés superior de niñas, niños y adolescentes.",
];

const erroresFrecuentes = [
  "Confundir inclusión con tratar exactamente igual a todas y todos.",
  "Considerar que contextualizar significa eliminar los contenidos oficiales.",
  "Reducir la evaluación a asignar una calificación.",
  "Pensar que la comunidad solo participa aportando recursos materiales.",
  "Elegir respuestas autoritarias, excluyentes o centradas únicamente en el control.",
];

export default function NuevaEscuelaMexicanaPage() {
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
            Nueva Escuela Mexicana
          </h1>

          <p className="mt-4 max-w-3xl leading-7 text-blue-100">
            Fundamentos y principios que orientan las decisiones docentes,
            la organización escolar y la relación entre escuela y comunidad.
          </p>
        </header>

        <section className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            ¿Qué debes comprender?
          </h2>

          <div className="mt-4 space-y-4 leading-7 text-slate-700">
            <p>
              La Nueva Escuela Mexicana es el marco educativo que busca
              garantizar el derecho a una educación con equidad, excelencia y
              mejora continua. Coloca al centro el máximo logro de aprendizaje y
              el desarrollo humano integral de niñas, niños, adolescentes y
              jóvenes.
            </p>

            <p>
              Su fundamento parte del respeto irrestricto a la dignidad de las
              personas, los derechos humanos y la igualdad sustantiva. La
              educación no se limita a transmitir conocimientos: pretende formar
              personas capaces de participar de manera crítica, solidaria y
              responsable en la transformación de su comunidad.
            </p>

            <p>
              La escuela deja de entenderse como un espacio aislado. Los saberes,
              problemas, culturas, lenguas y experiencias de la comunidad se
              incorporan al trabajo educativo para dar sentido a los
              aprendizajes.
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
            Principios fundamentales
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {principios.map((principio) => (
              <div
                key={principio.titulo}
                className="rounded-xl border border-slate-200 p-5"
              >
                <h3 className="text-lg font-bold text-blue-900">
                  {principio.titulo}
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  {principio.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
          <h2 className="text-2xl font-bold text-emerald-950">
            ¿Cómo se aplica en la práctica?
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
            Una docente identifica que algunas alumnas y alumnos no participan
            en un proyecto porque las actividades no consideran sus ritmos,
            condiciones y formas de aprender. ¿Qué decisión es más congruente
            con la Nueva Escuela Mexicana?
          </p>

          <div className="mt-5 space-y-3 text-slate-700">
            <p className="rounded-lg border border-slate-200 p-4">
              A) Mantener las actividades porque todo el grupo debe trabajar de
              la misma manera.
            </p>

            <p className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 font-semibold text-emerald-950">
              B) Ajustar las actividades, diversificar los apoyos y favorecer la
              participación de todo el alumnado.
            </p>

            <p className="rounded-lg border border-slate-200 p-4">
              C) Separar al alumnado que requiere mayor acompañamiento.
            </p>

            <p className="rounded-lg border border-slate-200 p-4">
              D) Evaluar únicamente mediante un examen escrito.
            </p>
          </div>

          <div className="mt-5 rounded-xl bg-slate-100 p-5">
            <p className="font-bold text-slate-900">Respuesta correcta: B</p>

            <p className="mt-2 leading-7 text-slate-700">
              La inclusión exige identificar y eliminar barreras para el
              aprendizaje y la participación. La respuesta adecuada adapta la
              intervención sin excluir ni reducir las expectativas educativas.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-blue-50 p-7">
          <h2 className="text-2xl font-bold text-blue-950">
            Repaso rápido
          </h2>

          <div className="mt-4 space-y-4 leading-7 text-blue-950">
            <div>
              <p className="font-bold">
                1. ¿Qué se encuentra al centro de la acción educativa?
              </p>
              <p>
                El máximo logro de aprendizaje y el desarrollo humano integral
                de niñas, niños, adolescentes y jóvenes.
              </p>
            </div>

            <div>
              <p className="font-bold">
                2. ¿Qué papel desempeña la comunidad?
              </p>
              <p>
                Es un espacio de aprendizaje y el núcleo integrador que permite
                contextualizar los contenidos.
              </p>
            </div>

            <div>
              <p className="font-bold">
                3. ¿Qué debe hacer el docente ante la diversidad?
              </p>
              <p>
                Eliminar barreras, diversificar apoyos y garantizar la
                participación de todas y todos.
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