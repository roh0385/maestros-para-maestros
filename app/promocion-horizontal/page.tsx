import Link from "next/link";
import { reactivos } from "@/data";

export default function PromocionHorizontalPage() {
  const totalReactivos = reactivos.length;

const temasDisponibles = new Set(
  reactivos.map((reactivo) => reactivo.tema)
).size;
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Promoción Horizontal
        </h1>
        <section className="mt-8 rounded-2xl bg-blue-900 p-6 text-white shadow-lg">
  <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
    Banco de reactivos
  </p>

  <div className="mt-4 grid gap-4 sm:grid-cols-2">
    <div className="rounded-xl bg-white/10 p-4">
      <p className="text-3xl font-bold">{totalReactivos}</p>
      <p className="mt-1 text-blue-100">Reactivos disponibles</p>
    </div>

    <div className="rounded-xl bg-white/10 p-4">
      <p className="text-3xl font-bold">{temasDisponibles}</p>
      <p className="mt-1 text-blue-100">Temas disponibles</p>
    </div>
  </div>
</section>

<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">          <Link
            href="/promocion-horizontal/guias"
            className="rounded-xl bg-white p-8 shadow"
          >
            <h2 className="text-2xl font-bold text-blue-900">Guía</h2>
            <p className="mt-2 text-slate-600">Resumen para estudiar.</p>
          </Link>

          <Link
  href="/promocion-horizontal/estudio"
  className="rounded-xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
>
  <h2 className="text-2xl font-bold text-emerald-700">
    📘 Modo Estudio
  </h2>

  <p className="mt-2 text-slate-600">
    Aprende con explicación, fundamento y bibliografía.
  </p>
</Link>

<Link
  href="/promocion-horizontal/simulador"
  className="rounded-xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
>
  <h2 className="text-2xl font-bold text-red-700">
    📝 Simulador
  </h2>

  <p className="mt-2 text-slate-600">
    Resuelve un examen completo con calificación automática.
  </p>
</Link>
        </div>
      </div>
    </main>
  );
}
