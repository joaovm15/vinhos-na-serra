import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import VineCorner from "@/components/VineCorner";
import EventVideoPlayer from "@/components/EventVideoPlayer";
import { fourthEditionWineries } from "@/data/wineries";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Evento | Vinhos na Serra",
};

const oferece = [
  "Degustação de rótulos selecionados de vinícolas brasileiras",
  "Experiência gastronômica premium",
  "Ambiente exclusivo para celebrar o vinho brasileiro",
  "Música ao vivo e ambientação sensorial",
];

const resultados = [
  { number: "20", label: "Vinícolas participantes" },
  { number: "120+", label: "Rótulos degustados" },
  { number: "400+", label: "Pessoas presentes" },
  { number: "< 1 mês", label: "Para esgotar os ingressos" },
];

export default function EventoPage() {
  return (
    <div className="bg-off-white">
      <section className="relative overflow-hidden bg-verde-serra px-6 py-24 text-center">
        <VineCorner position="top-left" tone="dark" />
        <VineCorner position="top-right" tone="dark" />
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-sm tracking-[0.3em] text-areia uppercase">Evento</p>
          <h1 className="text-h1 mt-4 font-serif text-off-white">
            4º Encontro de Vinhos Brasileiros
          </h1>
          <p className="mt-6 text-areia">
            29 de agosto de 2026, no Ville Verte, em Teresópolis — um espaço afinado com a
            proposta do evento e com o perfil de quem ama vinho brasileiro.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
          <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
            <EventVideoPlayer
              src="/videos/evento-4a-edicao.mp4"
              poster="/images/evento/evento-01.jpg"
              className="aspect-[9/16] w-full"
            />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-h3 font-serif text-verde-serra">O evento contará com</h2>
            <ul className="mt-6 space-y-4">
              {oferece.map((item) => (
                <li key={item} className="flex items-start gap-3 text-verde-serra/80">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-dourado" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href={whatsappUrl("Olá! Quero saber mais sobre o 4º Encontro de Vinhos Brasileiros.")} variant="editorial" tone="bordo" className="mt-8">
              Quero participar
            </Button>
          </Reveal>
        </div>
      </section>

      <div
        className="relative bg-verde-oliva px-6 py-24"
        style={{
          backgroundImage: "url(/patterns/vinha-textura-dark.svg)",
          backgroundSize: "480px 480px",
        }}
      >
        <div className="absolute inset-0 bg-verde-oliva/[0.86]" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-h3 mb-4 text-center font-serif text-off-white">
              A edição anterior superou as expectativas.
            </h2>
            <p className="mx-auto max-w-2xl text-center text-areia/90">
              Um marco para o mercado de vinhos brasileiros — e um recorte do que esperar da
              próxima edição.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {resultados.map((r, i) => (
              <Reveal key={r.label} delay={i * 100} className="border-t border-dourado/30 pt-6 text-center">
                <p className="font-serif text-3xl font-bold text-dourado-claro md:text-4xl">{r.number}</p>
                <p className="mt-2 text-sm text-areia/90">{r.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
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
