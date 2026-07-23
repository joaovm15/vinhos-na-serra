import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
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
    <div className="bg-off-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <div className="aspect-[3/4] w-full overflow-hidden bg-areia">
              <div className="h-full w-full bg-gradient-to-b from-verde-oliva/60 via-verde-serra to-carvao" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-xs tracking-[0.2em] text-dourado uppercase">{wine.type}</p>
            <h1 className="text-h2 mt-3 font-serif text-verde-serra">{wine.name}</h1>
            <p className="mt-2 text-sm text-verde-serra/60">
              {wine.grape} · {wine.region} · {wine.vintage}
            </p>

            <p className="mt-8 text-lg leading-relaxed text-verde-serra/80">{wine.description}</p>

            <dl className="mt-10 space-y-3 border-t border-verde-serra/15 pt-6 text-sm">
              <div className="flex justify-between gap-6">
                <dt className="text-verde-serra/50">Notas de degustação</dt>
                <dd className="max-w-[60%] text-right text-verde-serra/80">{wine.tastingNotes}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-verde-serra/50">Harmonização</dt>
                <dd className="max-w-[60%] text-right text-verde-serra/80">{wine.pairing}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-verde-serra/50">Temperatura de serviço</dt>
                <dd className="text-verde-serra/80">{wine.servingTemp}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="mt-24 border-t border-verde-serra/15 pt-16">
          <p className="mb-8 text-xs tracking-[0.2em] text-dourado uppercase">
            Vinhos relacionados
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <Link href={`/vinhos/${r.slug}`} className="group block">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-areia">
                    <div className="h-full w-full bg-gradient-to-b from-verde-oliva/50 via-verde-serra/90 to-carvao transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 font-serif text-xl text-verde-serra">{r.name}</p>
                  <p className="text-sm text-verde-serra/60">{r.type} · {r.vintage}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
