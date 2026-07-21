"use client";

import { useState } from "react";
import { reactivos } from "@/data";
import ReactivoCard from "@/components/ReactivoCard";

export default function ReactivosPage() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [respondida, setRespondida] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const reactivoActual = reactivos[indiceActual];

  function siguienteReactivo() {
    const esUltimoReactivo = indiceActual === reactivos.length - 1;

    if (esUltimoReactivo) {
      setFinalizado(true);
      return;
    }

    setIndiceActual((indiceAnterior) => indiceAnterior + 1);
    setRespondida(false);
  }

  if (finalizado) {
    return (
      <main className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-blue-900">
            Práctica terminada
          </h1>

          <p className="mt-4 text-lg text-slate-700">
            Has respondido los {reactivos.length} reactivos disponibles.
          </p>

          <button
            onClick={() => {
              setIndiceActual(0);
              setRespondida(false);
              setFinalizado(false);
            }}
            className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
          >
            Volver a practicar
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-blue-900">
              Reactivos
            </h1>

            <p className="mt-2 text-slate-600">
              Pregunta {indiceActual + 1} de {reactivos.length}
            </p>
          </div>
        </div>

        <ReactivoCard
          key={reactivoActual.id}
          reactivo={reactivoActual}
          onRespondida={() => setRespondida(true)}
        />

        {respondida && (
          <button
            onClick={siguienteReactivo}
            className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
          >
            {indiceActual === reactivos.length - 1
              ? "Finalizar práctica"
              : "Siguiente pregunta →"}
          </button>
        )}
      </div>
    </main>
  );
}