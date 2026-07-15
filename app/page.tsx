import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="text-center">

        {/* Aquí irá el logo */}
        <div className="mb-8">
          <img
            src="/logo/logo.png"
            alt="Maestros para Maestros"
            className="mx-auto h-40 w-auto"
          />
        </div>

        <h1 className="text-5xl font-bold text-blue-900">
          Maestros para Maestros
        </h1>

        <Link
          href="/dashboard"
          className="mt-12 inline-block rounded-xl bg-blue-800 px-10 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-900"
        >
          Comenzar
        </Link>

      <p
  className="mt-14 text-lg text-slate-500 tracking-wide"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
  Para María José,
  <br />
  y para quienes, desde un salón de clases,
  <br />
  construyen el México del futuro
</p>

      </div>
    </main>
  );
}