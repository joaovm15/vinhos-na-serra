export const metadata = {
  title: "Nossa História | Vinhos da Serra",
};

const timeline = [
  { year: "1978", text: "Meu avô planta as primeiras videiras na encosta que hoje leva nosso nome." },
  { year: "1995", text: "A família constrói a primeira cave, ainda artesanal, para os vinhos de consumo próprio." },
  { year: "2010", text: "Primeira safra comercial, vendida diretamente para restaurantes da região." },
  { year: "2026", text: "Hoje, a terceira geração segue cuidando das mesmas encostas, com o mesmo cuidado." },
];

export default function NossaHistoriaPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-16 text-3xl font-light">Nossa História</h1>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Não somos uma vinícola grande, e nunca quisemos ser. Somos uma família que, há três
        gerações, cultiva as mesmas encostas e aprende, safra após safra, a ouvir o que a serra
        tem a dizer sobre o vinho que ela é capaz de dar.
      </p>

      <div className="mt-20 space-y-12 border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {timeline.map((item) => (
          <div key={item.year}>
            <p className="text-sm text-zinc-500">{item.year}</p>
            <p className="mt-2 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
