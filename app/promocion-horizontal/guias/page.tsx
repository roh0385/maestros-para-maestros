import Link from "next/link";

const temas = [
  {
    titulo: "Nueva Escuela Mexicana",
    descripcion: "Principios, enfoque humanista y relación escuela-comunidad.",
    href: "/promocion-horizontal/guias/nueva-escuela-mexicana",
  },
  {
    titulo: "Planeación Didáctica",
    descripcion: "Organización de actividades, propósitos y contextualización.",
    href: "/promocion-horizontal/guias/planeacion-didactica",
  },
  {
    titulo: "Evaluación Formativa",
    descripcion: "Seguimiento del aprendizaje y mejora de la intervención docente.",
    href: "/promocion-horizontal/guias/evaluacion-formativa",
  },
  {
    titulo: "Inclusión",
    descripcion: "Barreras para el aprendizaje, participación y atención a la diversidad.",
    href: "/promocion-horizontal/guias/inclusion",
  },
];

export default function GuiasPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/promocion-horizontal"
          className="font-semibold text-blue-800 hover:underline"
        >
          ← Volver a Promoción Horizontal
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-blue-900">
          Guías de estudio
        </h1>

        <p className="mt-3 text-lg text-slate-700">
          Selecciona el tema que deseas estudiar.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {temas.map((tema) => (
            <Link
              key={tema.titulo}
              href={tema.href}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-bold text-blue-900">
                {tema.titulo}
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                {tema.descripcion}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}