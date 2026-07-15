import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          📚 Maestros para Maestros
        </Link>

        <ul className="flex gap-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-700">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/guias" className="hover:text-blue-700">
              Guías
            </Link>
          </li>
          <li>
            <Link href="/reactivos" className="hover:text-blue-700">
              Reactivos
            </Link>
          </li>
          <li>
            <Link href="/simulador" className="hover:text-blue-700">
              Simulador
            </Link>
          </li>
          <li>
            <Link href="/progreso" className="hover:text-blue-700">
              Mi progreso
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}