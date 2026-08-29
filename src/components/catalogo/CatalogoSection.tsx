import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import InfoBox from "@/components/InfoBox";
import VineCorner from "@/components/VineCorner";
import SectionTexture from "@/components/SectionTexture";
import CatalogoGrade from "@/components/catalogo/CatalogoGrade";
import { whatsappUrl } from "@/lib/whatsapp";
import { AVISO, PASSOS } from "@/lib/catalogo";
import { categorias, itensDoCatalogo } from "@/data/catalogo";

/* Mensagem já preenchida do CTA final — o visitante só aperta enviar. */
const MENSAGEM = "Olá! Vi o catálogo no site e gostaria de falar sobre os rótulos.";

const NUMEROS = [
  { destaque: "1.300+", texto: "rótulos brasileiros no acervo da adega." },
  { destaque: "130+", texto: "vinícolas parceiras, de norte a sul do país." },
];

/**
 * Seção completa do catálogo. Fica isolada aqui para poder ser montada em
 * qualquer rota — hoje só em `/catalogo`, que por sua vez só existe quando
 * `CATALOG_ENABLED` está ligada.
 */
export default function CatalogoSection() {
  const { lista, demonstracao } = itensDoCatalogo();

  return (
    <div className="bg-off-white">
      {/* 1. ABERTURA — título e o destaque do acervo */}
      <section className="relative overflow-hidden bg-verde-serra px-6 py-24 text-center">
        <SectionTexture tone="dark" />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="top-right" tone="dark" />

        <Reveal className="relative mx-auto max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-areia uppercase">Catálogo</p>
          <h1 className="text-h1 mt-4 font-serif text-balance text-off-white">
            Os vinhos brasileiros que vivem na nossa adega.
          </h1>
          <p className="mt-6 text-lg text-pretty text-areia">
            Uma seleção de rótulos curados um a um, de vinícolas de todo o país. Escolha o
            que quer levar e fale direto com a nossa equipe.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
            {NUMEROS.map((numero) => (
              <InfoBox key={numero.destaque} label={numero.destaque}>
                {numero.texto}
              </InfoBox>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2. GRADE — busca, categorias e cards */}
      <section className="relative overflow-hidden px-6 py-24">
        <SectionTexture tone="light" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-h3 font-serif text-verde-serra">Rótulos do acervo.</h2>
            {demonstracao && (
              <p className="mx-auto mt-4 max-w-xl rounded-xl border border-dourado/30 px-5 py-3 text-sm text-verde-serra/70">
                Conteúdo de demonstração. Os rótulos reais entram em{" "}
                <code className="font-numeros">src/data/catalogo.ts</code>.
              </p>
            )}
          </Reveal>

          <Reveal delay={150} className="mt-14">
            <CatalogoGrade itens={lista} categorias={categorias} />
          </Reveal>
        </div>
      </section>

      {/* 3. COMO FUNCIONA — os passos, e o aviso de entrega logo abaixo */}
      <section className="relative overflow-hidden bg-verde-oliva px-6 py-24">
        <SectionTexture tone="dark" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-h3 mb-14 text-center font-serif text-off-white">
              Como funciona.
            </h2>
          </Reveal>

          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((passo, i) => (
              <Reveal key={passo.titulo} delay={i * 100}>
                <li className="h-full rounded-xl border border-off-white/15 bg-off-white/[0.045] p-6 transition-colors duration-300 hover:border-off-white/30 hover:bg-off-white/[0.07]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bordo font-numeros text-sm text-off-white">
                    {i + 1}
                  </span>
                  <p className="mt-4 font-serif text-xl text-dourado-claro">{passo.titulo}</p>
                  <p className="mt-2 text-sm leading-relaxed text-areia/90">{passo.texto}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200} className="mt-10">
            <div className="rounded-xl border border-off-white/15 bg-off-white/[0.045] px-6 py-5 text-center sm:text-left">
              <p className="text-sm tracking-[0.2em] text-dourado-claro uppercase">
                {AVISO.titulo}
              </p>
              <p className="mt-2 text-areia">{AVISO.destaque}</p>
              <p className="mt-1 text-sm text-areia/80">{AVISO.complemento}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CTA — WhatsApp com a mensagem já escrita */}
      <section className="relative overflow-hidden bg-bordo px-6 py-24 text-center">
        <SectionTexture tone="dark" opacity={0.1} />
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="bottom-right" tone="dark" />

        <Reveal className="relative mx-auto max-w-xl">
          <h2 className="text-h2 font-serif text-off-white">Escolheu os seus?</h2>
          <p className="mt-6 text-areia">
            A conversa segue pelo WhatsApp, com a nossa equipe, que confere disponibilidade e
            fecha o pedido com você.
          </p>

          <Button
            href={whatsappUrl(MENSAGEM)}
            variant="editorial"
            tone="off-white"
            className="mt-8"
          >
            Falar com a nossa equipe
          </Button>

          {/* Prévia do que já vai escrito, como na referência. */}
          <p className="mt-8 text-xs tracking-[0.15em] text-areia/70 uppercase">
            A mensagem já vai preenchida:
          </p>
          <p className="mx-auto mt-3 max-w-md rounded-xl border border-off-white/25 bg-off-white/[0.08] px-5 py-3 text-sm text-areia">
            “{MENSAGEM}”
          </p>
        </Reveal>
      </section>
    </div>
  );
}
