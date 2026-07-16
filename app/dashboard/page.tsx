import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900">
          ¿Cuál es tu siguiente reto?
        </h1>

        <div className="mt-8 space-y-4">
          <Link
            href="/promocion-horizontal"
            className="block rounded-xl bg-blue-800 p-6 text-xl font-semibold text-white"
          >
            Promoción Horizontal
          </Link>

          {["Admisión", "ATP", "Dirección", "Supervisión"].map((opcion) => (
            <div
              key={opcion}
              className="rounded-xl border border-slate-300 bg-white p-6 text-xl text-slate-500"
            >
              {opcion} — Próximamente
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}