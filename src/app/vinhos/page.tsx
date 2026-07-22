import Link from "next/link";
import { wines } from "@/data/wines";

export const metadata = {
  title: "Vinhos | Vinhos da Serra",
};

export default function VinhosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-16 text-3xl font-light">Vinhos</h1>

      <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {wines.map((wine, i) => (
          <Link
            key={wine.slug}
            href={`/vinhos/${wine.slug}`}
            className={`group ${i % 5 === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className="aspect-[3/4] w-full bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-800" />
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="text-base">{wine.name}</p>
                <p className="text-sm text-zinc-500">
                  {wine.type} · {wine.grape} · {wine.vintage}
                </p>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                R$ {wine.price.toFixed(2)}
              </p>
            </div>
            <span className="mt-2 inline-block text-xs uppercase tracking-widest text-zinc-500 underline underline-offset-4">
              Ver detalhes
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
