import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "A Serra | Vinhos na Serra",
};

const blocks = [
  {
    label: "Altitude",
    text: "Do Rio Grande do Sul a Minas Gerais, selecionamos rótulos nascidos em vinhedos de altitude, muitos acima de 900 metros — condição que prolonga o ciclo de maturação das uvas e preserva acidez e complexidade aromática.",
    image: "/images/evento/evento-08-adega.jpg",
    alt: "Prateleiras da adega Vinhos na Serra com centenas de rótulos brasileiros",
  },
  {
    label: "Clima",
    text: "Cada vinícola parceira enfrenta seu próprio clima — de invernos rigorosos a amplitudes térmicas marcantes entre dia e noite — e é exatamente essa diversidade de climas brasileiros que buscamos representar em nossa seleção.",
    image: null,
  },
  {
    label: "Solo",
    text: "Solos basálticos, graníticos e pedregosos: cada região do Brasil imprime sua própria assinatura nos vinhos que curamos, resultando em rótulos de personalidade e concentração únicas.",
    image: "/images/adega/detalhe-taca.jpg",
    alt: "Taça sendo servida ao lado de rótulos Vinhos na Serra",
  },
];

export default function ASerraPage() {
  return (
    <div className="bg-off-white px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] text-dourado uppercase">A Serra</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">
          Onde a diversidade do Brasil encontra o vinho.
        </h1>
      </Reveal>

      <div className="mx-auto mt-24 max-w-3xl space-y-24">
        {blocks.map((block) => (
          <Reveal key={block.label}>
            {block.image && (
              <div className="mb-8 aspect-video w-full overflow-hidden bg-areia">
                <Image
                  src={block.image}
                  alt={block.alt ?? ""}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <h2 className="text-sm tracking-[0.2em] text-dourado uppercase">{block.label}</h2>
            <p className="mt-3 text-lg leading-relaxed text-verde-serra/80">{block.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
