import Link from "next/link";

const ideasClave = [
  "La inclusión garantiza el derecho a aprender de todas y todos.",
  "La diversidad es una riqueza, no un problema.",
  "La equidad implica ofrecer apoyos diferenciados.",
  "Las barreras para el aprendizaje están en el contexto, no en las personas.",
  "Toda planeación debe considerar la participación de todas y todos.",
  "La inclusión favorece la participación, el aprendizaje y la convivencia.",
];

const conceptos = [
  {
    titulo: "Inclusión",
    texto:
      "Proceso orientado a garantizar la participación, el aprendizaje y el bienestar de todas las personas, respetando la diversidad.",
  },
  {
    titulo: "Equidad",
    texto:
      "Consiste en brindar los apoyos necesarios para que todas y todos tengan oportunidades reales de aprender.",
  },
  {
    titulo: "Barreras para el aprendizaje",
    texto:
      "Son obstáculos presentes en la escuela, el aula o el contexto que limitan la participación y el aprendizaje.",
  },
  {
    titulo: "Ajustes razonables",
    texto:
      "Adecuaciones necesarias que permiten la participación sin modificar los aprendizajes esenciales.",
  },
  {
    titulo: "Diseño Universal para el Aprendizaje",
    texto:
      "Planear desde el inicio considerando diferentes formas de aprender, participar y demostrar lo aprendido.",
  },
  {
    titulo: "Participación",
    texto:
      "No basta con asistir a la escuela; todas las personas deben involucrarse activamente en las experiencias de aprendizaje.",
  },
];

const errores = [
  "Pensar que inclusión significa hacer exactamente lo mismo para todo el grupo.",
  "Creer que únicamente aplica para estudiantes con discapacidad.",
  "Confundir igualdad con equidad.",
  "Separar permanentemente al estudiante para facilitar la enseñanza.",
  "Reducir la inclusión solamente a adaptar exámenes.",
];

export default function InclusionPage() {
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
          <p className="uppercase tracking-widest text-blue-200 text-sm font-semibold">
            Guía de estudio
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Inclusión
          </h1>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Estrategias para garantizar el aprendizaje, la participación y la
            permanencia de todas y todos los estudiantes desde una perspectiva
            de equidad y respeto a la diversidad.
          </p>
        </header>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
<h2 className="text-3xl font-bold text-slate-900 mb-6">
              ¿Qué debes comprender?
          </h2>

          <div className="mt-5 space-y-5 text-lg leading-8 text-slate-700">

            <p>
              La educación inclusiva reconoce que todas las personas tienen
              derecho a aprender y participar plenamente dentro de la escuela.
              La diversidad es una característica natural de cualquier grupo,
              por lo que las diferencias deben considerarse una oportunidad para
              enriquecer el aprendizaje.
            </p>

            <p>
              Desde la Nueva Escuela Mexicana, la inclusión implica eliminar
              barreras para el aprendizaje y la participación, ofreciendo
              apoyos diferenciados cuando sean necesarios para garantizar la
              equidad.
            </p>

            <p>
              La labor docente consiste en generar ambientes donde cada
              estudiante pueda aprender, colaborar y desarrollarse respetando
              sus características, intereses, ritmos y necesidades.
            </p>

          </div>
        </section>

        <section className="mt-8">

<h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ideas clave
          </h2>

          <ul className="mt-5 space-y-3">

            {ideasClave.map((idea) => (

           <li
  key={idea}
  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
>
  <span className="mt-1 text-xl font-bold text-blue-700">
    ✓
  </span>

  <span className="font-medium leading-7 text-slate-800">
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

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {conceptos.map((concepto)=>(

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

          <h2 className="text-3xl font-bold text-amber-900">
            Errores frecuentes
          </h2>

          <ul className="mt-5 space-y-4">

            {errores.map((error)=>(

              <li key={error}>

                ⚠ {error}

              </li>

            ))}

          </ul>

        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-3xl font-bold">
            Caso tipo USICAMM
          </h2>

          <p className="mt-5 leading-8 text-slate-700">

            Un alumno recién incorporado al grupo presenta dificultades para
            comunicarse en español y participa poco durante las actividades.
            ¿Qué decisión docente favorece una práctica inclusiva?

          </p>

          <div className="mt-6 space-y-3">

            <p className="rounded-lg border p-4">
              A) Solicitar que trabaje únicamente con materiales diferentes.
            </p>

            <p className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 font-semibold">
              B) Integrarlo al trabajo colaborativo utilizando apoyos visuales y
              estrategias diferenciadas.
            </p>

            <p className="rounded-lg border p-4">
              C) Eximirlo temporalmente de todas las actividades.
            </p>

            <p className="rounded-lg border p-4">
              D) Evaluarlo únicamente mediante exámenes escritos.
            </p>

          </div>

          <div className="mt-6 rounded-xl bg-slate-100 p-5">

            <p className="font-bold">

              Respuesta correcta: B

            </p>

            <p className="mt-3 leading-7">

              La inclusión implica eliminar barreras para el aprendizaje,
              brindar apoyos pertinentes y favorecer la participación activa de
              todas las personas.

            </p>

          </div>

        </section>

        <section className="mt-8 rounded-2xl bg-blue-50 p-8">

          <h2 className="text-3xl font-bold text-blue-900">
            Repaso rápido
          </h2>

          <div className="mt-5 space-y-4">

            <p><strong>¿Qué busca la inclusión?</strong><br/>Garantizar el aprendizaje y la participación de todas y todos.</p>

            <p><strong>¿Qué son las barreras para el aprendizaje?</strong><br/>Obstáculos presentes en el contexto que limitan aprender.</p>

            <p><strong>¿Qué significa equidad?</strong><br/>Brindar apoyos diferenciados para alcanzar igualdad de oportunidades.</p>

          </div>

        </section>

      </article>

    </main>
  );
}