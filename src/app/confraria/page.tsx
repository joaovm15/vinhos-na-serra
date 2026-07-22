export const metadata = {
  title: "Confraria | Vinhos da Serra",
};

const benefits = [
  "Acesso antecipado a safras limitadas",
  "Convites exclusivos para degustações e eventos",
  "Descontos progressivos em todas as compras",
  "Uma garrafa surpresa selecionada pelo enólogo a cada trimestre",
];

const plans = [
  { name: "Encosta", price: "R$ 149/mês", detail: "2 garrafas por trimestre" },
  { name: "Vinhedo", price: "R$ 269/mês", detail: "4 garrafas por trimestre" },
  { name: "Reserva", price: "R$ 449/mês", detail: "6 garrafas por trimestre + eventos" },
];

export default function ConfrariaPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-3xl font-light">Confraria</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Um clube para quem quer estar mais perto do que fazemos — acesso a safras que não
        chegam às lojas e uma relação direta com a vinícola.
      </p>

      <div className="mt-16">
        <h2 className="mb-6 text-sm uppercase tracking-widest text-zinc-500">Benefícios</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="border-t border-zinc-200 pt-4 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-sm uppercase tracking-widest text-zinc-500">Planos</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-zinc-200 p-6 dark:border-zinc-800">
              <p className="text-lg">{plan.name}</p>
              <p className="mt-2 text-2xl font-light">{plan.price}</p>
              <p className="mt-2 text-sm text-zinc-500">{plan.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="border border-zinc-900 px-10 py-4 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black">
          Associe-se à Confraria
        </button>
      </div>
    </div>
  );
}
