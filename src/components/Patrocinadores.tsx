import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTexture from "@/components/SectionTexture";
import { gruposDeApoio, type Apoiador } from "@/data/patrocinadores";

/**
 * Faixa de patrocínio e apoio do evento: uma moldura arredondada sobre o verde
 * da marca, com os grupos lado a lado no desktop, separados por filete, e
 * empilhados no celular.
 *
 * Fica fora do rodapé global de propósito — é uma faixa das páginas do evento,
 * não do site inteiro.
 */
export default function Patrocinadores() {
  return (
    <section className="relative overflow-hidden bg-verde-serra px-6 py-16">
      <SectionTexture tone="dark" />

      <Reveal className="relative mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-off-white/20 px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:justify-center">
            {gruposDeApoio.map((grupo, i) => (
              <div
                key={grupo.titulo}
                /* No desktop o filete separa os grupos; no celular, uma linha
                   no topo faz o mesmo papel. O primeiro grupo não leva nenhum. */
                className={`flex flex-col ${
                  i === 0
                    ? ""
                    : "border-t border-off-white/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10"
                }`}
              >
                <p className="text-sm tracking-[0.2em] text-off-white uppercase md:text-xs">
                  {grupo.titulo}
                </p>
                <ul className="mt-6 flex flex-1 flex-wrap items-center gap-x-8 gap-y-6">
                  {grupo.marcas.map((marca) => (
                    <li key={marca.nome}>
                      <LogoApoiador marca={marca} destaque={grupo.destaque} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function LogoApoiador({ marca, destaque = false }: { marca: Apoiador; destaque?: boolean }) {
  /* Uma única classe de altura por caso — duas competindo, o Tailwind resolve
     pela ordem do CSS gerado e não pela ordem escrita aqui. */
  const altura = destaque ? "h-11 sm:h-14" : "h-8 sm:h-10";
  return (
    <a
      href={marca.url}
      target="_blank"
      rel="noopener noreferrer"
      title={marca.nome}
      className="inline-flex items-center opacity-90 transition-opacity duration-300 hover:opacity-100"
    >
      {marca.logo ? (
        <Image
          src={marca.logo}
          alt={marca.nome}
          width={320}
          height={120}
          /* Altura fixa e largura livre: assim logos de proporções diferentes
             ficam com o mesmo peso visual na faixa. */
          className={`w-auto object-contain ${altura}`}
        />
      ) : (
        /* Sem arquivo de logo ainda: o nome segura o lugar e o link funciona. */
        <span
          className={`tracking-[0.12em] text-areia uppercase ${
            destaque ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {marca.nome}
        </span>
      )}
    </a>
  );
}
