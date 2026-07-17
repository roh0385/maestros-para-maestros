"use client";
import { useState } from "react";
import { Reactivo } from "@/data/reactivos";

type Props = {
  reactivo: Reactivo;
};

export default function ReactivoCard({ reactivo }: Props) {
    const [seleccionada, setSeleccionada] = useState<number | null>(null);
    const [respondida, setRespondida] = useState(false);
return (
  <article className="rounded-2xl bg-white p-8 shadow-sm">

    <div className="mb-4 flex gap-3">

      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-900">
        {reactivo.tema}
      </span>

      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
        {reactivo.nivel}
      </span>

    </div>

    <p className="font-semibold text-slate-800">
      Caso
    </p>

    <p className="mt-2 leading-7 text-slate-700">
      {reactivo.caso}
    </p>

<h2 className="mt-6 text-2xl font-bold text-slate-900">
  {reactivo.pregunta}
</h2>

<div className="mt-6 space-y-3">
  {reactivo.opciones.map((opcion, index) => (
<button
  key={index}
  onClick={() => setSeleccionada(index)}
  className={`w-full rounded-lg border p-4 text-left transition ${
    seleccionada === index
      ? "border-blue-600 bg-blue-50"
      : "border-slate-200 hover:bg-slate-50"
  }`}
>
  <strong>{String.fromCharCode(65 + index)}.</strong>{" "}
  {opcion}
</button>
   ))}
</div>

<button
onClick={() => setRespondida(true)}
  disabled={seleccionada === null}
  className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
>
  Responder
</button>
{respondida && (
  <div className="mt-6 rounded-xl bg-slate-100 p-5">
    <p className="font-semibold">
      {seleccionada === reactivo.respuestaCorrecta
        ? "✅ ¡Respuesta correcta!"
        : "❌ Respuesta incorrecta"}
    </p>

    <p className="mt-3">
      <strong>Explicación:</strong>
      <br />
      {reactivo.explicacion}
    </p>

    <p className="mt-3 text-sm text-slate-600">
      <strong>Fundamento:</strong> {reactivo.fundamento}
    </p>
  </div>
)}
</article>
  
);
}

