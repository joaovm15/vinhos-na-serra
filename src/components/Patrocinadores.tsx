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
        <div className="rounded-[2rem] border border-off-white/20 px-8 py-10 sm:px-12 lg:px-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-center">
            {gruposDeApoio.map((grupo, i) => (
              <div
                key={grupo.titulo}
                /* As três colunas só entram a partir de `lg`: em 768px cada uma
                   ficaria com ~230px e a logo do patrocínio encostava na borda.
                   Até lá, os grupos ficam empilhados, separados por uma linha.
                   O primeiro grupo não leva separador nenhum. */
                className={`flex flex-col ${
                  i === 0
                    ? ""
                    : "border-t border-off-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
                }`}
              >
                <p className="text-sm tracking-[0.2em] text-off-white uppercase lg:text-xs">
                  {grupo.titulo}
                </p>
                <ul className="mt-6 flex flex-1 flex-wrap items-center gap-x-10 gap-y-8">
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
  /* Uma única classe de altura e uma de largura máxima por caso — duas
     competindo, o Tailwind resolve pela ordem do CSS gerado e não pela ordem
     escrita aqui.
     A largura máxima existe porque logo muito deitada (a Mérica, por exemplo)
     fica dominando a faixa quando só a altura é normalizada. */
  const tamanho = destaque
    ? "h-16 max-w-[220px] sm:h-24 sm:max-w-[280px]"
    : marca.peso === "menor"
      ? "h-9 max-w-[110px] sm:h-12 sm:max-w-[145px]"
      : "h-12 max-w-[150px] sm:h-16 sm:max-w-[190px]";
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
          /* Altura normalizada e largura livre até o limite: assim logos de
             proporções diferentes ficam com o mesmo peso visual na faixa. */
          className={`w-auto object-contain ${tamanho}`}
        />
      ) : (
        /* Sem arquivo de logo ainda: o nome segura o lugar e o link funciona. */
        <span
          className={`tracking-[0.12em] text-areia uppercase ${
            destaque ? "text-lg sm:text-xl" : "text-sm sm:text-base"
          }`}
        >
          {marca.nome}
        </span>
      )}
    </a>
  );
}
