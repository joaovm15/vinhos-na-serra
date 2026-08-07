import Reveal from "@/components/Reveal";
import VineCorner from "@/components/VineCorner";
import SectionTexture from "@/components/SectionTexture";
import InfoBox from "@/components/InfoBox";

export const metadata = {
  title: "Confraria | Vinhos na Serra",
};

const valores = ["Pertencimento", "Memória", "Tradição"];

const marcas = [
  "Maior adega especializada em vinhos brasileiros do país",
  "Mais de 1.300 rótulos",
  "Mais de 130 vinícolas parceiras",
  "Uma comunidade que reúne pessoas, histórias e experiências",
  "Referência para quem valoriza a cultura do vinho nacional",
];

export default function ConfrariaPage() {
  return (
    <div className="bg-off-white">
      <section className="relative overflow-hidden bg-bordo px-6 py-24 text-center">
        <SectionTexture tone="dark" opacity={0.1} />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="top-right" tone="dark" />
        <Reveal className="relative mx-auto max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-areia uppercase">Confraria</p>
          <h1 className="text-h1 mt-4 font-serif text-balance text-off-white">
            A casa do vinho brasileiro.
          </h1>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {valores.map((valor, i) => (
              <Reveal key={valor} delay={i * 100}>
                <InfoBox label={valor} tone="bordo" className="text-center" />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <SectionTexture tone="light" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-h3 text-center font-serif text-verde-serra">
              Uma confraria criada por apaixonados pelos vinhos produzidos no Brasil.
            </h2>
          </Reveal>

          <Reveal delay={150} className="mt-14 border-t border-dourado/30 pt-10">
            <ul className="space-y-5">
              {marcas.map((marca) => (
                <li
                  key={marca}
                  className="flex items-start gap-4 text-lg leading-relaxed text-verde-serra/80"
                >
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-dourado" />
                  {marca}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
