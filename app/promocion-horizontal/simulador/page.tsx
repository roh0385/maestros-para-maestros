"use client";

import { useEffect, useState } from "react";
import { reactivos } from "@/data";
import type { Reactivo } from "@/data/types";
import ProgressBar from "./components/ProgressBar";

export default function SimuladorPage() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, number>>({});
  const [examenTerminado, setExamenTerminado] = useState(false);
  const [numeroIntento, setNumeroIntento] = useState(0);

  const [preguntas, setPreguntas] = useState<Reactivo[]>([]);

useEffect(() => {
  const preguntasMezcladas = [...reactivos];

  for (let i = preguntasMezcladas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [preguntasMezcladas[i], preguntasMezcladas[j]] = [
      preguntasMezcladas[j],
      preguntasMezcladas[i],
    ];
  }

  setPreguntas(preguntasMezcladas.slice(0, 90));
}, [numeroIntento]);


  const reactivoActual = preguntas[preguntaActual];
  const totalPreguntas = preguntas.length;

  const preguntasRespondidas = Object.keys(respuestas).length;

  const porcentajeAvance =
    totalPreguntas > 0
      ? Math.round(((preguntaActual + 1) / totalPreguntas) * 100)
      : 0;

 const respuestasCorrectas = preguntas.reduce((total, reactivo) => {
  const respuestaElegida = respuestas[reactivo.id];

  if (respuestaElegida === reactivo.respuestaCorrecta) {
    return total + 1;
  }

  return total;
}, 0);

const respuestasIncorrectas = Math.max(
  preguntasRespondidas - respuestasCorrectas,
  0
);

const preguntasSinResponder =
  totalPreguntas - preguntasRespondidas;

const calificacion =
  preguntasRespondidas > 0
    ? Math.round((respuestasCorrectas / preguntasRespondidas) * 100)
    : 0;
  function seleccionarRespuesta(indiceOpcion: number) {
    if (!reactivoActual) return;

    setRespuestas((respuestasAnteriores) => ({
      ...respuestasAnteriores,
      [reactivoActual.id]: indiceOpcion,
    }));
  }

  function irAAnterior() {
    if (preguntaActual > 0) {
      setPreguntaActual((actual) => actual - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function irASiguiente() {
    if (preguntaActual < totalPreguntas - 1) {
      setPreguntaActual((actual) => actual + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function terminarExamen() {
    const confirmar = window.confirm(
      `Has respondido ${preguntasRespondidas} de ${totalPreguntas} preguntas. ¿Deseas terminar el simulador?`,
    );

    if (confirmar) {
      setExamenTerminado(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function reiniciarExamen() {
  setPreguntaActual(0);
  setRespuestas({});
  setExamenTerminado(false);
  setNumeroIntento((intentoAnterior) => intentoAnterior + 1);
  window.scrollTo({ top: 0, behavior: "smooth" });
}


  
  if (totalPreguntas === 0) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-blue-950">
            Simulador de Promoción Horizontal
          </h1>

          <p className="mt-4 text-slate-700">
            Todavía no hay reactivos disponibles en el banco de preguntas.
          </p>
        </section>
      </main>
    );
  }

  if (examenTerminado) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-3xl bg-blue-950 p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Resultado del simulador
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              {respuestasCorrectas} de {totalPreguntas} correctas
            </h1>

            <p className="mt-3 text-2xl font-semibold">
              Calificación: {calificacion}%
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-blue-200">Correctas</p>
                <p className="mt-1 text-3xl font-bold">
                  {respuestasCorrectas}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-blue-200">Incorrectas</p>
                <p className="mt-1 text-3xl font-bold">
                  {respuestasIncorrectas}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-blue-200">Respondidas</p>
                <p className="mt-1 text-3xl font-bold">
                  {preguntasRespondidas}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={reiniciarExamen}
              className="mt-7 rounded-xl bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-blue-100"
            >
              Realizar otro intento
            </button>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold text-blue-950">
              Revisión de respuestas
            </h2>

            <p className="mt-2 text-slate-600">
              Revisa la respuesta correcta, la explicación y el fundamento de
              cada reactivo.
            </p>

            <div className="mt-6 space-y-6">
              {preguntas.map((reactivo, indicePregunta) => {
                const respuestaElegida = respuestas[reactivo.id];
                const esCorrecta =
                  respuestaElegida === reactivo.respuestaCorrecta;
                const sinResponder = respuestaElegida === undefined;

                return (
                  <article
                    key={reactivo.id}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-bold text-blue-950">
                        Pregunta {indicePregunta + 1}
                      </p>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-bold ${
                          esCorrecta
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {esCorrecta
                          ? "Correcta"
                          : sinResponder
                            ? "Sin responder"
                            : "Incorrecta"}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
                      {reactivo.tema}
                    </p>

                    <p className="mt-3 leading-7 text-slate-700">
                      {reactivo.caso}
                    </p>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {reactivo.pregunta}
                    </h3>

                    <div className="mt-5 space-y-3">
                      {reactivo.opciones.map((opcion, indiceOpcion) => {
                        const esRespuestaCorrecta =
                          indiceOpcion === reactivo.respuestaCorrecta;

                        const fueSeleccionada =
                          indiceOpcion === respuestaElegida;

                        return (
                          <div
                            key={`${reactivo.id}-${indiceOpcion}`}
                            className={`rounded-xl border p-4 ${
                              esRespuestaCorrecta
                                ? "border-emerald-500 bg-emerald-50"
                                : fueSeleccionada
                                  ? "border-red-400 bg-red-50"
                                  : "border-slate-200 bg-slate-50"
                            }`}
                          >
                            <p className="font-medium text-slate-800">
                              {String.fromCharCode(65 + indiceOpcion)}. {opcion}
                            </p>

                            {esRespuestaCorrecta && (
                              <p className="mt-2 text-sm font-bold text-emerald-700">
                                Respuesta correcta
                              </p>
                            )}

                            {fueSeleccionada && !esRespuestaCorrecta && (
                              <p className="mt-2 text-sm font-bold text-red-700">
                                Respuesta seleccionada
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 rounded-xl bg-blue-50 p-5">
                      <h4 className="font-bold text-blue-950">Explicación</h4>
                      <p className="mt-2 leading-7 text-slate-700">
                        {reactivo.explicacion}
                      </p>
                    </div>

                    {reactivo.porQueNo &&
                      reactivo.porQueNo.length > 0 && (
                        <div className="mt-4 rounded-xl bg-amber-50 p-5">
                          <h4 className="font-bold text-amber-900">
                            ¿Por qué no son correctas las otras opciones?
                          </h4>

                          <div className="mt-3 space-y-2">
                            {reactivo.porQueNo.map((explicacion, indice) => (
                              <p
                                key={`${reactivo.id}-porque-no-${indice}`}
                                className="leading-7 text-slate-700"
                              >
                                {explicacion}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className="mt-4 rounded-xl bg-slate-100 p-5">
                      <h4 className="font-bold text-slate-900">Fundamento</h4>
                      <p className="mt-2 leading-7 text-slate-700">
                        {reactivo.fundamento}
                      </p>

                      {reactivo.bibliografia && (
                        <>
                          <h4 className="mt-4 font-bold text-slate-900">
                            Bibliografía
                          </h4>
                          <p className="mt-2 leading-7 text-slate-700">
                            {reactivo.bibliografia}
                          </p>
                        </>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Promoción Horizontal
          </p>

          <h1 className="mt-2 text-3xl font-bold text-blue-950 sm:text-4xl">
            Simulador
          </h1>

          <p className="mt-2 text-slate-600">
            Responde cada reactivo y revisa tus resultados al finalizar.
          </p>
        </header>
<ProgressBar
  preguntaActual={preguntaActual}
  totalPreguntas={totalPreguntas}
  preguntasRespondidas={preguntasRespondidas}
/>

        <article className="rounded-3xl bg-white p-6 shadow-md sm:p-9">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
              {reactivoActual.tema}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
              {reactivoActual.subtema}
            </span>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-50 p-5">
            <p className="leading-8 text-slate-700">
              {reactivoActual.caso}
            </p>
          </div>

          <h2 className="mt-7 text-xl font-bold leading-8 text-slate-900">
            {reactivoActual.pregunta}
          </h2>

          <div className="mt-6 space-y-4">
            {reactivoActual.opciones.map((opcion, indiceOpcion) => {
              const seleccionada =
                respuestas[reactivoActual.id] === indiceOpcion;

              return (
                <button
                  key={`${reactivoActual.id}-${indiceOpcion}`}
                  type="button"
                  onClick={() => seleccionarRespuesta(indiceOpcion)}
                  className={`flex w-full items-start gap-4 rounded-2xl border-2 p-5 text-left transition ${
                    seleccionada
                      ? "border-blue-700 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold ${
                      seleccionada
                        ? "bg-blue-700 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {String.fromCharCode(65 + indiceOpcion)}
                  </span>

                  <span className="pt-1 font-medium leading-7 text-slate-800">
                    {opcion}
                  </span>
                </button>
              );
            })}
          </div>
        </article>

        <section className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={irAAnterior}
            disabled={preguntaActual === 0}
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Anterior
          </button>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={terminarExamen}
              className="rounded-xl border border-red-300 bg-white px-6 py-3 font-bold text-red-700 transition hover:bg-red-50"
            >
              Terminar examen
            </button>

            {preguntaActual < totalPreguntas - 1 ? (
              <button
                type="button"
                onClick={irASiguiente}
                className="rounded-xl bg-blue-800 px-6 py-3 font-bold text-white transition hover:bg-blue-900"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="button"
                onClick={terminarExamen}
                className="rounded-xl bg-blue-800 px-6 py-3 font-bold text-white transition hover:bg-blue-900"
              >
                Ver resultados
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}