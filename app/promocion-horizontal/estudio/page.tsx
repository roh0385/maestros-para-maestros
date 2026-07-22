"use client";

import { useState } from "react";
import { reactivos } from "@/data";

export default function EstudioPage() {
  const [indice, setIndice] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const reactivo = reactivos[indice];

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-4xl font-bold text-blue-900">
          Modo Estudio
        </h1>

        <div className="mb-4 flex gap-2">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-900">
            {reactivo.tema}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">
            {reactivo.subtema}
          </span>

        </div>

        <h2 className="mb-5 text-xl font-semibold">
          {reactivo.pregunta}
        </h2>

        <div className="space-y-3">

          {reactivo.opciones.map((opcion, index) => (

            <div
              key={index}
              className="rounded-xl border p-4"
            >
              <strong>
                {String.fromCharCode(65 + index)}.
              </strong>{" "}
              {opcion}
            </div>

          ))}

        </div>

        {!mostrarRespuesta ? (

          <button
            onClick={() => setMostrarRespuesta(true)}
            className="mt-8 rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Mostrar explicación
          </button>

        ) : (

          <>

            <div className="mt-8 rounded-2xl bg-green-50 p-6">

              <h3 className="mb-3 text-xl font-bold text-green-700">
                Explicación
              </h3>

              <p>{reactivo.explicacion}</p>

              <h3 className="mt-6 mb-2 font-bold">
                Fundamento
              </h3>

              <p>{reactivo.fundamento}</p>

              {reactivo.bibliografia && (
                <>
                  <h3 className="mt-6 mb-2 font-bold">
                    Bibliografía
                  </h3>

                  <p>{reactivo.bibliografia}</p>
                </>
              )}

            </div>

            <button
              onClick={() => {
                setMostrarRespuesta(false);
                setIndice((i) => (i + 1) % reactivos.length);
              }}
              className="mt-8 rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
            >
              Siguiente pregunta
            </button>

          </>

        )}

      </div>
    </main>
  );
}