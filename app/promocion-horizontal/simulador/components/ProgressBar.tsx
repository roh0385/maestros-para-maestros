type ProgressBarProps = {
  preguntaActual: number;
  totalPreguntas: number;
  preguntasRespondidas: number;
};

export default function ProgressBar({
  preguntaActual,
  totalPreguntas,
  preguntasRespondidas,
}: ProgressBarProps) {
  const porcentajeAvance =
    totalPreguntas > 0
      ? Math.round(((preguntaActual + 1) / totalPreguntas) * 100)
      : 0;

  return (
    <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="font-bold text-blue-950">
          Pregunta {preguntaActual + 1} de {totalPreguntas}
        </p>

        <p className="text-sm font-semibold text-slate-600">
          {preguntasRespondidas} respondidas
        </p>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-700 transition-all duration-300"
          style={{ width: `${porcentajeAvance}%` }}
        />
      </div>
    </section>
  );
}