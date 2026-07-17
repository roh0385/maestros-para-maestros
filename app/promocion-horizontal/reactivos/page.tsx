import { reactivos } from "@/data/reactivos";
import ReactivoCard from "@/components/ReactivoCard";

export default function ReactivosPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {reactivos.map((reactivo) => (
          <ReactivoCard
            key={reactivo.id}
            reactivo={reactivo}
          />
        ))}
      </div>
    </main>
  );
}