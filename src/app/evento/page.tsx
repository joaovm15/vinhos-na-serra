import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import VineCorner from "@/components/VineCorner";
import EventVideoPlayer from "@/components/EventVideoPlayer";
import SectionTexture from "@/components/SectionTexture";
import { fourthEditionWineries } from "@/data/wineries";
import { INGRESSOS_URL } from "@/lib/evento";
import { pageMetadata } from "@/lib/seo";
import JsonLd, { breadcrumbSchema, eventoSchema } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "4º Encontro de Vinhos Brasileiros — 29 de agosto, Teresópolis",
  description:
    "A 4ª edição do Vinhos na Serra traz o Vale dos Vinhedos ao Rio de Janeiro: 15 vinícolas e mais de 130 rótulos, dia 29 de agosto de 2026, em Teresópolis.",
  path: "/evento",
});

const oferece = [
  "Degustação de rótulos selecionados de vinícolas brasileiras",
  "Experiência gastronômica premium",
  "Espaço sofisticado imerso à Mata Atlântica",
  "Público altamente qualificado",
  "Ambiente exclusivo para promover conexões, relacionamentos e bons negócios",
  "Ativações estratégicas para marcas e consumidores",
  "Música ao vivo e ambientação sensorial",
];

const trechoUm = (
  <>
    Com a pretensão de se tornar{" "}
    <strong className="font-bold text-dourado-claro">
      a referência de maior destaque da cultura do vinho brasileiro fora da Serra Gaúcha
    </strong>
    , as três últimas edições do evento foram dedicadas exclusivamente aos produtores da Região de
    Altos Montes, localizada entre os municípios de Flores da Cunha e Nova Pádua.
  </>
);

const trechoDois = (
  <>
    Agora, pela primeira vez, o público poderá conhecer os vinhos elaborados no principal destino do
    enoturismo do Brasil, o Vale dos Vinhedos, que abrange os municípios de Bento Gonçalves,
    Garibaldi e Monte Belo do Sul, na Serra Gaúcha. De forma inédita, uma das regiões mais
    tradicionais e reconhecidas da vitivinicultura brasileira desembarca na Serra fluminense, em
    Teresópolis.
  </>
);

export default function EventoPage() {
  return (
    <div className="bg-off-white">
      <JsonLd data={breadcrumbSchema([{ name: "Evento", path: "/evento" }])} />
      <JsonLd data={eventoSchema()} />
      <section className="relative overflow-hidden bg-verde-serra px-6 py-24 text-center">
        <SectionTexture tone="dark" />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="top-right" tone="dark" />
        <Reveal className="relative mx-auto max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-areia uppercase">Evento</p>
          <h1 className="text-h1 mt-4 font-serif text-balance text-off-white">
            4º Encontro de Vinhos Brasileiros
          </h1>
          <p className="mt-6 text-lg text-pretty text-off-white">
            Dia 29 de agosto de 2026, das 12h às 21h, no Espaço Ville Verte, em Teresópolis.
          </p>
          <p className="mt-8 font-serif text-xl text-pretty text-dourado-claro md:text-2xl">
            Pela primeira vez, o Vale dos Vinhedos desembarca no estado do{" "}
            <span className="whitespace-nowrap">Rio de Janeiro</span>.
          </p>
          <p className="mt-6 text-pretty text-areia">
            A Adega e Confraria Vinhos na Serra, em parceria com a APROVALE (Associação dos
            Produtores de Vinhos Finos do Vale dos Vinhedos), apresenta a quarta edição do Vinhos
            na Serra fortalecendo a valorização do produto nacional reunindo mais de 130 rótulos
            de vinhos brasileiros e 15 vinícolas da região.
          </p>
        </Reveal>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <SectionTexture tone="light" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
          <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
            <EventVideoPlayer
              src="/videos/evento-pagina.mp4"
              poster="/images/evento/poster-evento-pagina.jpg"
              label="Assistir ao vídeo do 4º Encontro de Vinhos Brasileiros"
              className="aspect-[9/16] w-full"
            />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-h3 font-serif text-verde-serra">O evento contará com:</h2>
            <ul className="mt-6 space-y-4">
              {oferece.map((item) => (
                <li key={item} className="flex items-start gap-3 text-verde-serra/80">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-dourado" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href={INGRESSOS_URL} variant="editorial" tone="bordo" className="mt-8">
              Quero participar
            </Button>
          </Reveal>
        </div>
      </section>

      <div className="relative overflow-hidden bg-verde-oliva px-6 py-24">
        <SectionTexture tone="dark" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-h3 mb-8 text-center font-serif text-balance text-off-white">
              O Vale dos Vinhedos chega à Serra fluminense.
            </h2>
            {/* desktop: um único parágrafo corrido */}
            <p className="hidden text-lg leading-relaxed text-justify text-areia hyphens-auto sm:block">
              {trechoUm} {trechoDois}
            </p>

            {/* mobile: o mesmo texto em duas caixas */}
            <div className="grid gap-5 sm:hidden">
              {[trechoUm, trechoDois].map((trecho, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-off-white/15 bg-off-white/[0.045] p-6"
                >
                  <p className="leading-relaxed text-pretty text-areia hyphens-auto">{trecho}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 py-24">
        <SectionTexture tone="light" />
        <div className="relative mx-auto max-w-4xl">
          <Reveal className="text-center">
            <p className="text-sm tracking-[0.3em] text-dourado uppercase">Vinícolas confirmadas</p>
            <h2 className="text-h3 mt-4 font-serif text-verde-serra">
              Os produtores desta edição.
            </h2>
          </Reveal>

          <Reveal delay={150} className="mt-14 border-t border-dourado/30">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 pt-10 sm:grid-cols-3">
              {fourthEditionWineries.map((winery) => (
                <li key={winery} className="font-serif text-lg text-verde-serra sm:text-xl">
                  {winery}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
