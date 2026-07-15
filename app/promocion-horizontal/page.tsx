import Link from "next/link";

export default function PromocionHorizontalPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Promoción Horizontal
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link
            href="/promocion-horizontal/guias"
            className="rounded-xl bg-white p-8 shadow"
          >
            <h2 className="text-2xl font-bold text-blue-900">Guía</h2>
            <p className="mt-2 text-slate-600">Resumen para estudiar.</p>
          </Link>

          <Link
            href="/promocion-horizontal/reactivos"
            className="rounded-xl bg-white p-8 shadow"
          >
            <h2 className="text-2xl font-bold text-blue-900">Reactivos</h2>
            <p className="mt-2 text-slate-600">Preguntas por tema.</p>
          </Link>

          <Link
            href="/promocion-horizontal/simulador"
            className="rounded-xl bg-white p-8 shadow"
          >
            <h2 className="text-2xl font-bold text-blue-900">Simulador</h2>
            <p className="mt-2 text-slate-600">Examen de práctica.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
