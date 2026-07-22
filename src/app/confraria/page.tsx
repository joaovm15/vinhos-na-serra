export const metadata = {
  title: "Confraria | Vinhos da Serra",
};

const benefits = [
  "Acesso antecipado a novidades sobre safras limitadas",
  "Convites exclusivos para degustações e eventos",
  "Conteúdo e bastidores direto do vinicultor",
  "Uma relação mais próxima com quem faz o vinho",
];

const plans = [
  { name: "Encosta", detail: "Acompanhe as novidades e eventos abertos." },
  { name: "Vinhedo", detail: "Convites prioritários para degustações." },
  { name: "Reserva", detail: "Acesso completo, incluindo bastidores de colheita." },
];

export default function ConfrariaPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-3xl font-light">Confraria</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Um clube para quem quer estar mais perto do que fazemos — acesso a novidades e uma
        relação direta com a vinícola.
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
        <h2 className="mb-6 text-sm uppercase tracking-widest text-zinc-500">Níveis</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-zinc-200 p-6 dark:border-zinc-800">
              <p className="text-lg">{plan.name}</p>
              <p className="mt-2 text-sm text-zinc-500">{plan.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
