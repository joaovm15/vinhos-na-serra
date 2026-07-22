import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Nossa História | Vinhos na Serra",
};

const timeline = [
  { year: "1978", text: "Meu avô planta as primeiras videiras na encosta que hoje leva nosso nome." },
  { year: "1995", text: "A família constrói a primeira cave, ainda artesanal, para os vinhos de consumo próprio." },
  { year: "2010", text: "Primeira safra comercial, vendida diretamente para restaurantes da região." },
  { year: "2026", text: "Hoje, a terceira geração segue cuidando das mesmas encostas, com o mesmo cuidado." },
];

export default function NossaHistoriaPage() {
  return (
    <div className="bg-off-white px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] text-dourado uppercase">Nossa História</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">
          Uma história que começa na Serra.
        </h1>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-verde-serra/80">
          Não somos uma vinícola grande, e nunca quisemos ser. Somos uma família que, há três
          gerações, cultiva as mesmas encostas e aprende, safra após safra, a ouvir o que a serra
          tem a dizer sobre o vinho que ela é capaz de dar.
        </p>
      </Reveal>

      <div className="mx-auto mt-20 max-w-xl space-y-12 border-l border-verde-serra/15 pl-8">
        {timeline.map((item, i) => (
          <Reveal key={item.year} delay={i * 100}>
            <p className="text-xs tracking-[0.2em] text-dourado uppercase">{item.year}</p>
            <p className="mt-2 text-lg leading-relaxed text-verde-serra/80">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
