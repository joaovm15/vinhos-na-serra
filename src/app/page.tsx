import Link from "next/link";
import { wines } from "@/data/wines";
import { experiences } from "@/data/experiences";

export default function Home() {
  const featured = wines.filter((w) => w.featured).slice(0, 4);
  const nextExperience = experiences[0];

  return (
    <div className="flex flex-col">
      {/* 1. Hero cinematográfico */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 border-b border-zinc-200 bg-gradient-to-b from-zinc-100 to-white px-6 text-center dark:border-zinc-800 dark:from-zinc-950 dark:to-black">
        <h1 className="max-w-2xl text-4xl font-light tracking-tight md:text-6xl">
          Da altitude da serra para a sua taça.
        </h1>
        <Link
          href="/vinhos"
          className="mt-4 border border-zinc-900 px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black"
        >
          Conheça os vinhos
        </Link>
      </section>

      {/* 2. Manifesto da marca */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
          Acreditamos que um vinho carrega o lugar de onde vem. O clima frio, a altitude e a
          paciência da serra estão em cada garrafa que produzimos.
        </p>
      </section>

      {/* 3. Seleção de vinhos em destaque */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-sm uppercase tracking-widest text-zinc-500">
            Seleção em destaque
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((wine) => (
              <Link key={wine.slug} href={`/vinhos/${wine.slug}`} className="group">
                <div className="aspect-[3/4] w-full bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-800" />
                <p className="mt-4 text-base">{wine.name}</p>
                <p className="text-sm text-zinc-500">{wine.type} · {wine.vintage}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A Serra e o terroir */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900" />
          <div>
            <h2 className="mb-4 text-sm uppercase tracking-widest text-zinc-500">A Serra</h2>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              A mais de 900 metros de altitude, nossos vinhedos vivem invernos rigorosos e verões
              amenos — a base de tudo que engarrafamos.
            </p>
            <Link href="/a-serra" className="mt-4 inline-block text-sm underline underline-offset-4">
              Conheça o terroir
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Nossa História */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-4 text-sm uppercase tracking-widest text-zinc-500">Nossa História</h2>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              Três gerações de uma mesma família, uma paixão que começou pequena e virou tradição
              na serra.
            </p>
            <Link href="/nossa-historia" className="mt-4 inline-block text-sm underline underline-offset-4">
              Ler nossa história
            </Link>
          </div>
          <div className="order-1 aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 md:order-2" />
        </div>
      </section>

      {/* 6. Confraria */}
      <section className="border-t border-zinc-200 bg-zinc-950 px-6 py-24 text-center text-white dark:border-zinc-800">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-sm uppercase tracking-widest text-zinc-400">Confraria</h2>
          <p className="text-2xl font-light leading-relaxed">
            Acesso a safras limitadas, eventos exclusivos e uma relação mais próxima com quem faz
            o vinho.
          </p>
          <Link
            href="/confraria"
            className="mt-8 inline-block text-sm underline underline-offset-4"
          >
            Conheça a Confraria
          </Link>
        </div>
      </section>

      {/* 7. Experiências */}
      <section className="border-t border-zinc-200 px-6 py-24 dark:border-zinc-800">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-sm uppercase tracking-widest text-zinc-500">Próxima experiência</h2>
          <p className="text-xl">{nextExperience.name}</p>
          <p className="mt-2 text-sm text-zinc-500">
            {nextExperience.date} · {nextExperience.format}
          </p>
          <Link href="/experiencias" className="mt-6 inline-block text-sm underline underline-offset-4">
            Ver todas as experiências
          </Link>
        </div>
      </section>

      {/* 9. CTA final */}
      <section className="border-t border-zinc-200 px-6 py-24 text-center dark:border-zinc-800">
        <h2 className="text-2xl font-light">Conheça a seleção completa</h2>
        <Link
          href="/vinhos"
          className="mt-6 inline-block border border-zinc-900 px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black"
        >
          Ver vinhos
        </Link>
      </section>
    </div>
  );
}
