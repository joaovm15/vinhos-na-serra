export const metadata = {
  title: "A Serra | Vinhos da Serra",
};

export default function ASerraPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-16 text-3xl font-light">A Serra</h1>

      <div className="space-y-24">
        <section>
          <div className="mb-8 aspect-video w-full bg-zinc-100 dark:bg-zinc-900" />
          <h2 className="mb-3 text-sm uppercase tracking-widest text-zinc-500">Altitude</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Nossos vinhedos estão plantados a mais de 900 metros acima do nível do mar. A
            altitude prolonga o ciclo de maturação das uvas, preservando acidez e complexidade
            aromática.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm uppercase tracking-widest text-zinc-500">Clima</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Invernos rigorosos e verões amenos, com grande amplitude térmica entre o dia e a
            noite — condição essencial para uvas de clima frio.
          </p>
        </section>

        <section>
          <div className="mb-8 aspect-video w-full bg-zinc-100 dark:bg-zinc-900" />
          <h2 className="mb-3 text-sm uppercase tracking-widest text-zinc-500">Solo</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Solos basálticos e pedregosos, de baixa fertilidade, forçam as raízes a buscar
            profundidade — resultando em uvas de menor volume e maior concentração.
          </p>
        </section>
      </div>
    </div>
  );
}
