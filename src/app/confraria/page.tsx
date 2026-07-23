import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Confraria | Vinhos na Serra",
};

const benefits = [
  "Acesso antecipado a rótulos e safras limitadas",
  "Convites exclusivos para degustações e eventos",
  "Conteúdo e bastidores direto dos produtores parceiros",
  "Uma relação mais próxima com quem faz o vinho brasileiro",
];

const plans = [
  { name: "Encosta", detail: "Acompanhe as novidades e eventos abertos." },
  { name: "Terroir", detail: "Convites prioritários para degustações." },
  { name: "Reserva", detail: "Acesso completo, incluindo bastidores da curadoria." },
];

export default function ConfrariaPage() {
  return (
    <div className="bg-off-white">
      <section className="bg-bordo px-6 py-24 text-center">
        <Reveal className="mx-auto max-w-xl">
          <p className="text-xs tracking-[0.3em] text-areia uppercase">Confraria</p>
          <h1 className="text-h1 mt-4 font-serif text-off-white">Faça parte da nossa mesa.</h1>
          <p className="mt-6 text-areia">
            Um clube para quem quer estar mais perto do universo do vinho brasileiro — acesso a
            novidades e uma relação direta com os produtores que selecionamos.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-xs tracking-[0.2em] text-dourado uppercase">Benefícios</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="border-t border-verde-serra/15 pt-4 text-verde-serra/80">
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="mt-20">
            <h2 className="text-xs tracking-[0.2em] text-dourado uppercase">Níveis</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {plans.map((plan) => (
                <div key={plan.name} className="border-t border-dourado/30 pt-6">
                  <p className="font-serif text-xl text-verde-serra">{plan.name}</p>
                  <p className="mt-2 text-sm text-verde-serra/70">{plan.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
