import Link from "next/link";
import { notFound } from "next/navigation";
import { wines } from "@/data/wines";

export function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export default async function WinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wine = wines.find((w) => w.slug === slug);

  if (!wine) notFound();

  const related = wines.filter((w) => w.slug !== wine.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* 1. Foto grande do rótulo */}
        <div className="aspect-[3/4] w-full bg-zinc-100 dark:bg-zinc-900" />

        <div>
          {/* 2. Nome, tipo, uva, região, safra */}
          <h1 className="text-3xl font-light">{wine.name}</h1>
          <p className="mt-2 text-sm text-zinc-500">
            {wine.type} · {wine.grape} · {wine.region} · {wine.vintage}
          </p>

          {/* 3. Texto de apresentação */}
          <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {wine.description}
          </p>

          {/* 4. Ficha técnica */}
          <dl className="mt-10 space-y-3 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
            <div className="flex justify-between">
              <dt className="text-zinc-500">Notas de degustação</dt>
              <dd className="max-w-[60%] text-right">{wine.tastingNotes}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-zinc-500">Harmonização</dt>
              <dd className="max-w-[60%] text-right">{wine.pairing}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-zinc-500">Temperatura de serviço</dt>
              <dd>{wine.servingTemp}</dd>
            </div>
          </dl>

          {/* 5. Preço + CTA de compra */}
          <div className="mt-10 flex items-center gap-6 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <p className="text-2xl">R$ {wine.price.toFixed(2)}</p>
            <button className="border border-zinc-900 px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>

      {/* 6. Vinhos relacionados */}
      <div className="mt-24 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="mb-8 text-sm uppercase tracking-widest text-zinc-500">
          Vinhos relacionados
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {related.map((r) => (
            <Link key={r.slug} href={`/vinhos/${r.slug}`} className="group">
              <div className="aspect-[3/4] w-full bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-800" />
              <p className="mt-4 text-base">{r.name}</p>
              <p className="text-sm text-zinc-500">{r.type} · {r.vintage}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
