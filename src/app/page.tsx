import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import EventVideoPlayer from "@/components/EventVideoPlayer";
import VineCorner from "@/components/VineCorner";
import FadeHero from "@/components/FadeHero";
import PhotoDivider from "@/components/PhotoDivider";
import SectionTexture from "@/components/SectionTexture";
import InfoBox from "@/components/InfoBox";


const dadosEnoturismo = [
  {
    destaque: "40 projetos enoturísticos",
    texto:
      "entre empreendimentos em operação e em implantação, distribuídos por 12 municípios.",
  },
  {
    destaque: "70% dos entrevistados",
    texto:
      "consumiram vinho brasileiro nos últimos seis meses, enquanto 68,5% realizaram alguma compra no período.",
  },
];

const pillars = [
  { label: "Origem", text: "Cada rótulo carrega o lugar exato de onde vem." },
  { label: "Qualidade", text: "Curadoria criteriosa, sem atalhos, rótulo por rótulo." },
  { label: "Identidade", text: "Vinhos que revelam autenticidade e diversidade." },
  { label: "Experiência", text: "O vinho como convite a estar presente." },
];

export default function Home() {

  return (
    <div className="flex flex-col bg-off-white">
      {/* 1. HERO — IMPACTO */}
      <div className="-mt-20">
        <FadeHero />
      </div>

      {/* 2. NOSSA ESSÊNCIA — IDENTIDADE */}
      <section className="relative overflow-hidden px-6 py-32">
        <SectionTexture tone="light" />
        <VineCorner position="top-right" tone="light" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="group aspect-[4/3] w-full overflow-hidden bg-areia">
              <Image
                src="/images/socios.jpg"
                alt="Os sócios da Vinhos na Serra"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm tracking-[0.3em] text-dourado uppercase">A casa do vinho brasileiro</p>
            <h2 className="text-h3 mt-4 font-serif text-verde-serra">
              A maior adega e confraria especializada em vinhos brasileiros do país
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
              Desde 2019, em Teresópolis, na região serrana do Rio de Janeiro, reunimos mais de
              1.300 rótulos de 130 vinícolas brasileiras em um espaço dedicado a valorizar
              a vitivinicultura nacional e aproximar quem ama o vinho de quem o faz.
            </p>
            <Button href="/nossa-historia" variant="editorial" tone="verde-serra" className="mt-6">
              Conheça nossa história
            </Button>
          </Reveal>
        </div>
      </section>

      <PhotoDivider src="/images/evento/evento-06.jpg" alt="" />

      {/* 3. 4ª EDIÇÃO — o evento em destaque */}
      <section className="relative overflow-hidden bg-verde-serra px-6 py-32">
        <SectionTexture tone="dark" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
          <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
            <EventVideoPlayer
              src="/videos/evento-4a-edicao.mp4"
              poster="/images/evento/poster-4a-edicao.jpg"
              className="aspect-[9/16] w-full"
            />
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm tracking-[0.3em] text-areia uppercase">
              Dia 29 de agosto, vem aí:
            </p>
            <h2 className="text-h3 mt-4 font-serif text-balance text-off-white">
              4ª edição do Vinhos na Serra terá como destaque o Vale dos Vinhedos, principal
              região produtora de vinhos finos do Brasil
            </h2>
            <p className="mt-6 text-pretty text-areia">
              Um evento que reconhece o vinho brasileiro como patrimônio cultural, valoriza o
              trabalho dos produtores nacionais e promove experiências que aproximam pessoas,
              marcas e territórios. Acreditamos que cada taça carrega histórias, identidade e
              inovação.
            </p>
            <div className="mt-6">
              <Button href="/evento" variant="editorial" tone="dourado">
                Saiba mais
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. A SERRA FLUMINENSE — ORIGEM */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-off-white px-6 py-28 text-center md:py-36">
        <SectionTexture tone="light" />

        <Reveal className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
          <h2 className="text-h2 font-serif text-verde-serra">
            A força da Serra Fluminense no enoturismo brasileiro.
          </h2>
          <p className="text-lg leading-relaxed text-verde-serra/80">
            A vitivinicultura da Região Serrana do Rio de Janeiro vive uma forte expansão e
            Teresópolis se consolida como um dos principais destinos para eventos do setor,
            movimentando uma cadeia produtiva que une agricultura, gastronomia, turismo e cultura.
          </p>

          <div className="mt-6 w-full">
            <p className="text-sm tracking-[0.3em] text-dourado uppercase">
              Dados do estado do RJ
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
              {dadosEnoturismo.map((dado) => (
                <InfoBox key={dado.destaque} label={dado.destaque} tone="light">
                  {dado.texto}
                </InfoBox>
              ))}
            </div>
            <p className="mt-8 text-xs text-verde-serra/60">Fonte: SEBRAE, 2025</p>
          </div>
        </Reveal>
      </section>

      {/* 5. CURADORIA — VALORES */}
      <section className="relative overflow-hidden bg-verde-oliva px-6 py-32">
        <SectionTexture tone="dark" />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="top-right" tone="dark" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-h2 mb-16 text-center font-serif text-off-white">
              Cada vinho tem uma história.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 100}>
                <InfoBox label={pillar.label}>{pillar.text}</InfoBox>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoDivider src="/images/evento/evento-03.jpg" alt="" />

      {/* 6. DEPOIMENTO */}
      <section className="relative overflow-hidden bg-off-white px-6 py-32">
        <SectionTexture tone="light" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr]">
          <Reveal>
            <div className="group aspect-[4/3] w-full overflow-hidden rounded-xl bg-areia">
              <Image
                src="/images/evento/evento-04.jpg"
                alt="Convidados reunidos em um evento da Vinhos na Serra"
                width={900}
                height={675}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <blockquote className="font-serif text-xl leading-relaxed text-balance text-verde-serra md:text-2xl">
              “Estamos muito entusiasmados com o potencial econômico e turístico da nossa região,
              especialmente por estarmos contribuindo para que o município de Teresópolis entre
              definitivamente na rota nacional dos grandes eventos de vinhos. Nosso maior sonho é
              ver o vinho nacional fazendo parte cada vez mais da mesa e da cultura dos
              brasileiros.”
            </blockquote>
            <p className="mt-6 text-sm tracking-[0.15em] text-dourado uppercase">
              Rodrigo Feital · sócio do projeto
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. CONFRARIA */}
      <section className="relative overflow-hidden bg-bordo px-6 py-32 text-center">
        <SectionTexture tone="dark" opacity={0.1} />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="bottom-right" tone="dark" />
        <Reveal className="relative mx-auto max-w-xl">
          <h2 className="text-h2 font-serif text-off-white">Faça parte da nossa mesa.</h2>
          <p className="mt-6 text-areia">
            A Confraria é o convite para viver a Vinhos na Serra por dentro — novidades,
            bastidores e uma relação direta com quem faz o vinho.
          </p>
          <Button href="/confraria" variant="editorial" tone="off-white" className="mt-8">
            Conhecer a Confraria
          </Button>
        </Reveal>
      </section>

      {/* 9. CTA FINAL — eco do Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-verde-profundo via-verde-serra to-verde-oliva" />
        <SectionTexture tone="dark" />
        <div className="absolute inset-0 bg-verde-serra/30" />

        <Reveal className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-h1 font-serif text-balance text-off-white">
            Onde o vinho brasileiro encontra sua maior expressão
          </h2>
          <div className="mt-2 grid grid-cols-[max-content] justify-center gap-4 [&>a]:w-full sm:flex sm:flex-row sm:items-center sm:gap-8 sm:[&>a]:w-auto">
            <Button href="/contato" variant="editorial" tone="dourado">
              Fale conosco
            </Button>
            <Button href="/nossa-historia" variant="editorial" tone="off-white">
              Siga nossa história
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
