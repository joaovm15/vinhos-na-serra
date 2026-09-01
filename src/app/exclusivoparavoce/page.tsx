import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import VineCorner from "@/components/VineCorner";
import SectionTexture from "@/components/SectionTexture";
import ThreeTacaIcon from "@/components/ThreeTacaIcon";
import Patrocinadores from "@/components/Patrocinadores";
import IconePasso from "@/components/exclusivo/IconePasso";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  CASHBACK,
  EXEMPLO_CASHBACK,
  FRETE,
  MENSAGEM_WHATSAPP,
  PASSOS,
  PRAZO,
  REGRA_CASHBACK,
  exclusivoDisponivel,
} from "@/lib/exclusivo";

/* Página de campanha, acessada só por QR Code: canonical próprio e `noindex`,
   para não entrar na busca nem concorrer com as páginas do site. */
export const metadata = {
  ...pageMetadata({
    title: "Exclusivo para você",
    description:
      "Condição exclusiva para quem esteve no 4º Vinhos na Serra: 20% de cashback na próxima compra, para usar em até 60 dias.",
    path: "/exclusivoparavoce",
  }),
  robots: { index: false, follow: false },
};

export default function ExclusivoParaVocePage() {
  /* Fora do ar: a rota responde 404, como se não existisse. */
  if (!exclusivoDisponivel()) notFound();

  const link = whatsappUrl(MENSAGEM_WHATSAPP);

  return (
    <div className="bg-off-white">
      {/* 1. ABERTURA */}
      <section className="relative overflow-hidden bg-verde-serra px-6 py-24 md:py-32">
        <SectionTexture tone="dark" />
        <VineCorner position="top-right" tone="dark" />

        {/* Coluna de texto mais larga que a foto: é o que faz "4º Vinhos na Serra."
            caber numa linha só a partir de 1024px. */}
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <ThreeTacaIcon className="h-auto w-32 text-off-white sm:w-40" />
            <p className="mt-8 text-sm tracking-[0.3em] text-areia uppercase">
              Exclusivo para você
            </p>
            {/* O "4º" não pode terminar a linha sozinho: fica colado em
                "Vinhos", então a quebra cai antes do número. */}
            <h1 className="text-h1 mt-4 font-serif text-off-white">
              Você foi ao <span className="whitespace-nowrap">4º Vinhos</span> na Serra.
            </h1>
            <p className="mt-6 font-serif text-xl text-pretty text-dourado-claro md:text-2xl">
              E a sua experiência não termina aqui.
            </p>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-pretty text-areia">
              Preparamos uma condição exclusiva para você continuar descobrindo os melhores
              vinhos brasileiros.
            </p>
          </Reveal>

          {/* No celular a foto sai: a abertura fica curta e o cashback aparece
              quase de imediato, que é o que importa em quem chega pelo QR Code.
              Como o bloco fica `display:none` e a imagem é `lazy`, o navegador
              nem chega a baixá-la nessas telas. */}
          <Reveal delay={150} className="hidden md:block">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-verde-profundo">
              <Image
                src="/images/hero/degustacao.jpg"
                alt="Vinho tinto sendo servido em uma taça, sobre a mesa de rótulos de uma degustação do Vinhos na Serra"
                width={1066}
                height={1600}
                sizes="(min-width: 768px) 33vw, 0px"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. O BENEFÍCIO */}
      <section className="relative overflow-hidden px-6 py-24">
        <SectionTexture tone="light" />

        <Reveal className="relative mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-bordo px-8 py-12 sm:px-12 sm:py-14">
            <SectionTexture tone="dark" opacity={0.1} />

            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
              <div className="text-center md:text-left">
                <p className="font-numeros text-7xl leading-none font-medium tracking-tight text-off-white sm:text-8xl">
                  {CASHBACK}
                </p>
                <p className="mt-3 text-xl tracking-[0.22em] text-off-white uppercase sm:text-2xl">
                  de cashback
                </p>
              </div>

              <div className="md:border-l md:border-off-white/25 md:pl-14">
                <p className="text-xl leading-relaxed text-pretty text-off-white sm:text-2xl">
                  Receba {CASHBACK} da sua compra em crédito para usar na próxima.
                </p>

                {/* A regra de uso e o exemplo ficam numa caixa própria: continuam
                    abaixo da frase principal na hierarquia, mas em corpo grande o
                    suficiente para serem lidos no celular sem esforço. */}
                <div className="mt-6 rounded-xl border border-off-white/30 bg-off-white/[0.12] px-6 py-5">
                  <p className="text-xl leading-snug font-bold text-pretty text-off-white sm:text-2xl">
                    {REGRA_CASHBACK}
                  </p>
                  {/* O exemplo é apoio da regra: entra em corpo menor, para não
                      competir com ela. */}
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-areia/85">
                    {EXEMPLO_CASHBACK}
                  </p>
                </div>

                <p className="mt-6 text-base tracking-[0.15em] text-areia uppercase">
                  Válido por {PRAZO}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. COMO FUNCIONA + FRETE */}
      <section className="relative overflow-hidden bg-verde-oliva px-6 py-24">
        <SectionTexture tone="dark" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-h3 mb-14 text-center font-serif text-off-white">
              Como funciona?
            </h2>
          </Reveal>

          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((passo, i) => (
              <Reveal key={passo.titulo} delay={i * 100}>
                {/* Composição centrada: número, ícone, título e descrição, nessa
                    ordem de leitura. O número é o único elemento em bordô — com
                    os quatro títulos coloridos a hierarquia se perdia. */}
                <li className="flex h-full flex-col items-center rounded-xl border border-off-white/20 bg-off-white/[0.06] px-6 py-9 text-center transition-colors duration-300 hover:border-off-white/35 hover:bg-off-white/[0.09]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bordo font-numeros text-xs tracking-wide text-off-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IconePasso nome={passo.icone} className="mt-6 h-9 w-9 text-off-white/80" />
                  <p className="mt-6 font-serif text-xl text-balance text-off-white">
                    {passo.titulo}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-pretty text-areia/85">
                    {passo.texto}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Bloco secundário: pesa menos que o cashback de propósito. */}
          <Reveal delay={200} className="mt-10">
            <div className="flex flex-col items-center gap-3 rounded-xl border border-off-white/15 px-6 py-6 text-center sm:flex-row sm:gap-6 sm:text-left">
              <div className="flex items-center gap-3 sm:shrink-0">
                <IconePasso nome="caminhao" className="h-8 w-8 text-dourado-claro" />
                <p className="text-xs tracking-[0.25em] text-dourado-claro uppercase">
                  {FRETE.titulo}
                </p>
              </div>
              <div className="sm:border-l sm:border-off-white/15 sm:pl-6">
                <p className="text-areia">{FRETE.destaque}</p>
                <p className="mt-1 text-sm text-areia/70">{FRETE.complemento}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CONVERSÃO */}
      <section className="relative overflow-hidden bg-verde-profundo px-6 py-24 text-center">
        <SectionTexture tone="dark" />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="bottom-right" tone="dark" />

        <Reveal className="relative mx-auto max-w-xl">
          <h2 className="text-h2 font-serif text-balance text-off-white">
            Quero continuar minha experiência
          </h2>

          {/* Ação principal da página: o botão sólido da marca, que é o de
              maior peso no sistema. Em fundo bordô ele sumiria — daí o verde
              profundo nesta seção. */}
          <Button href={link} variant="primary" className="mt-10 max-w-full">
            Falar com a Vinhos na Serra pelo WhatsApp
          </Button>

          <p className="mt-8 text-xs tracking-[0.15em] text-areia/70 uppercase">
            Ao clicar, a mensagem já será preenchida:
          </p>
          <p className="mx-auto mt-3 max-w-md rounded-xl border border-off-white/25 bg-off-white/[0.08] px-5 py-3 text-sm text-areia">
            {MENSAGEM_WHATSAPP}
          </p>
        </Reveal>
      </section>

      {/* 5. ENCERRAMENTO */}
      <section className="relative overflow-hidden px-6 py-28 text-center">
        <SectionTexture tone="light" />

        <Reveal className="relative mx-auto max-w-2xl">
          <h2 className="text-h3 font-serif text-balance text-verde-serra">
            Seu passaporte abriu uma nova experiência.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-verde-serra/80">
            Agora é hora de escolher os próximos vinhos que vão para a sua adega.
          </p>

          <div className="mt-14 border-t border-dourado/30 pt-10">
            <p className="font-serif text-2xl text-verde-serra">Vinhos na Serra</p>
            <p className="mt-2 text-sm tracking-[0.15em] text-verde-serra/60 uppercase">
              Vinhos brasileiros. Experiências que continuam.
            </p>
          </div>
        </Reveal>
      </section>

      <Patrocinadores />
    </div>
  );
}
