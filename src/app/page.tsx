import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import EventVideoPlayer from "@/components/EventVideoPlayer";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { experiences } from "@/data/experiences";
import { INSTAGRAM_URL } from "@/lib/social";

const galleryPhotos = [
  "/images/evento/evento-01.jpg",
  "/images/evento/evento-02.jpg",
  "/images/evento/evento-03.jpg",
  "/images/evento/evento-04.jpg",
  "/images/evento/evento-05.jpg",
  "/images/evento/evento-06.jpg",
  "/images/evento/evento-07-rodrigo-feital.jpg",
  "/images/evento/evento-08-adega.jpg",
  "/images/evento/evento-09.jpg",
  "/images/evento/evento-10.jpg",
  "/images/evento/evento-11.jpg",
  "/images/evento/evento-12.jpg",
];

const pillars = [
  { label: "Origem", text: "Cada rótulo carrega o lugar exato de onde vem." },
  { label: "Qualidade", text: "Curadoria criteriosa, sem atalhos, rótulo por rótulo." },
  { label: "Identidade", text: "Vinhos que não imitam — que têm voz própria." },
  { label: "Experiência", text: "O vinho como convite a estar presente." },
];

export default function Home() {
  const nextExperience = experiences[0];

  return (
    <div className="flex flex-col bg-off-white">
      {/* 1. HERO — IMPACTO (scroll-to-expand) */}
      <div className="-mt-20">
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="/images/evento/evento-08-adega.jpg"
          bgImageSrc="/images/hero/vista-serra.jpg"
          title="Cultivados nas alturas, desenhados pelo frio, apreciados na alma."
          date="Vinhos na Serra"
          scrollToExpand="Role para expandir"
        >
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
            <p className="text-lg leading-relaxed text-verde-serra/80">
              Uma experiência construída entre a terra, o tempo e a paixão pelo vinho
              brasileiro — e vivida junto de quem faz parte da nossa Confraria.
            </p>
            <Button href="/confraria" variant="editorial" tone="bordo">
              Conheça a Confraria
            </Button>
          </div>
        </ScrollExpandMedia>
      </div>

      {/* 2. MANIFESTO — IDENTIDADE */}
      <section className="px-6 py-32">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-h2 font-serif text-verde-serra">O vinho começa muito antes da taça.</h2>
          <p className="mt-8 text-lg leading-relaxed text-verde-serra/80">
            Começa na <span className="text-dourado">terra</span> de cada vinícola parceira, no{" "}
            <span className="text-dourado">clima</span> que impõe seu próprio ritmo, no{" "}
            <span className="text-dourado">tempo</span> que ninguém consegue apressar.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
            Começa nas pessoas que aprenderam a reconhecer os melhores rótulos brasileiros, e nas
            histórias que cada garrafa carrega até chegar à sua mesa.
          </p>
        </Reveal>
      </section>

      {/* 3. NOSSA ESSÊNCIA — IDENTIDADE */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
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
              Mais do que uma adega. A maior confraria de vinhos brasileiros do país.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
              Desde 2019, em Teresópolis, reunimos mais de 1.300 rótulos de mais de 130 vinícolas
              brasileiras — um espaço dedicado a valorizar a vitivinicultura nacional e aproximar
              quem ama vinho de quem o faz.
            </p>
            <Button href="/nossa-historia" variant="editorial" tone="verde-serra" className="mt-6">
              Conheça nossa história
            </Button>
          </Reveal>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-off-white to-verde-serra" aria-hidden />

      {/* 4. A SERRA — ORIGEM */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-verde-serra px-6 text-center">
        <div className="absolute inset-0 bg-fixed bg-gradient-to-br from-verde-oliva via-verde-serra to-carvao" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "url(/patterns/vinha.svg)", backgroundSize: "420px 420px" }}
        />
        <div className="absolute inset-0 bg-verde-serra/30" />

        <Reveal className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-h2 font-serif text-off-white">
            Onde a diversidade do Brasil encontra o vinho.
          </h2>
          <p className="text-areia">
            De vinhedos de altitude a diferentes solos e climas, cada região do país imprime sua
            própria identidade nos rótulos que selecionamos para você.
          </p>
          <Button href="/a-serra" variant="editorial" tone="dourado" className="mt-2">
            Descubra a Serra
          </Button>
        </Reveal>
      </section>

      {/* 4.5. 4ª EDIÇÃO — evento */}
      <section className="bg-verde-serra px-6 py-32">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
          <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
            <EventVideoPlayer
              src="/videos/evento-4a-edicao.mp4"
              poster="/images/evento/evento-01.jpg"
              className="aspect-[9/16] w-full"
            />
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm tracking-[0.3em] text-areia uppercase">
              4ª Edição · Vinhos na Serra
            </p>
            <h2 className="text-h2 mt-4 font-serif text-off-white">
              Nascemos como um encontro. Hoje caminhamos para ser um movimento.
            </h2>
            <p className="mt-4 text-areia">
              Um movimento que valoriza o vinho brasileiro como patrimônio cultural, fortalece
              produtores nacionais e cria experiências capazes de conectar pessoas, marcas e
              territórios.
            </p>
            <p className="mt-4 text-sm text-areia/90 italic">Cultura em estado líquido.</p>
            <Button href="/contato" variant="editorial" tone="off-white" className="mt-6">
              Quero viver essa experiência
            </Button>
          </Reveal>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-verde-serra to-verde-oliva" aria-hidden />

      {/* 5. CURADORIA — VALORES */}
      <section className="bg-verde-oliva px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-h2 mb-16 text-center font-serif text-off-white">
              Cada vinho tem uma história.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 100} className="border-t border-dourado/30 pt-6">
                <p className="font-serif text-xl text-dourado-claro">{pillar.label}</p>
                <p className="mt-3 text-sm text-areia/90">{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-verde-oliva to-areia" aria-hidden />

      {/* 6. EXPERIÊNCIAS */}
      <section className="bg-areia px-6 py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr]">
          <Reveal>
            <div className="group aspect-[4/3] w-full overflow-hidden bg-verde-oliva/20">
              <div className="h-full w-full bg-gradient-to-br from-verde-serra/70 to-dourado/40 transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-h3 font-serif text-verde-serra">
              O vinho também é sobre estar junto.
            </h2>
            <p className="mt-6 text-verde-serra/80">
              Degustações, eventos e harmonizações que aproximam quem bebe de quem faz — como a
              próxima: <span className="text-dourado">{nextExperience.name}</span>.
            </p>
            <Button href="/experiencias" variant="editorial" tone="verde-serra" className="mt-6">
              Conheça nossas experiências
            </Button>
          </Reveal>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-areia to-bordo" aria-hidden />

      {/* 7. CONFRARIA */}
      <section className="bg-bordo px-6 py-32 text-center">
        <Reveal className="mx-auto max-w-xl">
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

      <div className="h-20 bg-gradient-to-b from-bordo to-off-white" aria-hidden />

      {/* 8. NOSSA HISTÓRIA — fechamento narrativo */}
      <section className="px-6 py-32">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-h2 font-serif text-verde-serra">Uma história que começou em 2019.</h2>
          <p className="mt-8 text-lg leading-relaxed text-verde-serra/80">
            De uma paixão compartilhada por três sócios ao centro de Teresópolis, construímos a
            maior confraria de vinhos brasileiros do país — uma história que ainda está sendo
            escrita a cada novo rótulo.
          </p>
          <Button href="/nossa-historia" variant="editorial" tone="verde-serra" className="mt-6">
            Ler nossa história completa
          </Button>
        </Reveal>
      </section>

      {/* 9. INSTAGRAM */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-h2 mb-10 text-center font-serif text-verde-serra">
              Acompanhe a nossa jornada.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {galleryPhotos.map((src, i) => (
                <div key={src} className="group aspect-square overflow-hidden bg-areia">
                  <Image
                    src={src}
                    alt={`Vinhos na Serra — registro do evento ${i + 1}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button href={INSTAGRAM_URL} variant="editorial" tone="verde-serra">
                Seguir no Instagram
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. CTA FINAL — eco do Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-carvao via-verde-serra to-verde-oliva" />
        <div className="absolute inset-0 bg-verde-serra/30" />

        <Reveal className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-h1 font-serif text-off-white">Da Serra para a Taça.</h2>
          <p className="text-areia">Descubra a Vinhos na Serra.</p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
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
