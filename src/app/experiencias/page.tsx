import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Experiências | Vinhos da Serra",
};

export default function ExperienciasPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-16 text-3xl font-light">Experiências</h1>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div
            key={exp.slug}
            className="flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-lg">{exp.name}</p>
              <p className="mt-1 text-sm text-zinc-500">
                {exp.date} · {exp.format}
              </p>
              <p className="mt-2 max-w-xl text-zinc-700 dark:text-zinc-300">{exp.description}</p>
            </div>
            <button className="whitespace-nowrap border border-zinc-900 px-6 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black">
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
