import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import InstagramEmbed from "@/components/InstagramEmbed";
import { experiences } from "@/data/experiences";

const EVENT_REEL_URL = "https://www.instagram.com/reel/Da6dK51RFtF/";

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
];

const wineCategories = [
  {
    name: "Tintos",
    description: "Corpo firme, taninos macios, a marca da altitude na garrafa.",
  },
  {
    name: "Brancos",
    description: "Frescor mineral e acidez vibrante das encostas mais altas.",
  },
  {
    name: "Rosés",
    description: "Leveza e delicadeza das manhãs frias da serra.",
  },
  {
    name: "Espumantes",
    description: "Método tradicional, bolhas finas, para celebrar.",
  },
];

const pillars = [
  { label: "Origem", text: "Cada rótulo carrega o lugar exato de onde vem." },
  { label: "Qualidade", text: "Colheita, tempo e técnica sem atalhos." },
  { label: "Identidade", text: "Vinhos que não imitam — que têm voz própria." },
  { label: "Experiência", text: "O vinho como convite a estar presente." },
];

export default function Home() {
  const nextExperience = experiences[0];

  return (
    <div className="flex flex-col bg-off-white">
      {/* 1. HERO — IMPACTO */}
      <section className="relative -mt-20 flex min-h-screen flex-col items-center justify-end overflow-hidden pb-24 text-center">
        <div className="animate-ken-burns absolute inset-0 bg-gradient-to-br from-areia via-verde-oliva to-verde-serra" />
        <div className="absolute inset-0 bg-gradient-to-t from-verde-serra via-verde-serra/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-areia uppercase">Vinhos na Serra</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-h1 max-w-3xl font-serif text-off-white">Da Serra para a Taça.</h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="max-w-md text-sm text-areia md:text-base">
              Uma experiência construída entre a terra, o tempo e a paixão pelo vinho brasileiro.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <Button href="/nossa-historia" variant="editorial" tone="off-white" className="mt-4">
              Conheça a Vinhos na Serra
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2. MANIFESTO — IDENTIDADE */}
      <section className="px-6 py-32">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-h2 font-serif text-verde-serra">O vinho começa muito antes da taça.</h2>
          <p className="mt-8 text-lg leading-relaxed text-verde-serra/80">
            Começa na <span className="text-dourado">terra</span> que sustenta a videira, no{" "}
            <span className="text-dourado">clima</span> que impõe seu próprio ritmo, no{" "}
            <span className="text-dourado">tempo</span> que ninguém consegue apressar.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
            Começa nas pessoas que aprenderam a ouvir a serra, e nas histórias que cada colheita
            carrega até chegar à sua mesa.
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
            <h2 className="text-h3 font-serif text-verde-serra">
              Mais do que vinho. Uma forma de viver a Serra.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
              Somos uma família que aprendeu, safra após safra, a traduzir a serra em vinho — sem
              pressa, sem atalhos, sem perder o que a torna única.
            </p>
            <Button href="/nossa-historia" variant="editorial" tone="verde-serra" className="mt-6">
              Conheça nossa história
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 4. A SERRA — ORIGEM */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-verde-serra px-6 text-center">
        <div className="absolute inset-0 bg-fixed bg-gradient-to-br from-verde-oliva via-verde-serra to-carvao" />
        <div className="absolute inset-0 bg-verde-serra/30" />

        <Reveal className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-h2 font-serif text-off-white">
            Cultivados nas alturas, desenhados pelo frio, apreciados na alma.
          </h2>
          <p className="text-areia">
            A mais de 900 metros de altitude, clima e solo se combinam para dar aos nossos vinhos
            uma identidade que não se repete em nenhum outro lugar.
          </p>
          <Button href="/a-serra" variant="editorial" tone="dourado" className="mt-2">
            Descubra a Serra
          </Button>
        </Reveal>
      </section>

      {/* 4.5. 4ª EDIÇÃO — ponte entre A Serra e Nossos Vinhos */}
      <section className="bg-verde-serra px-6 py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-areia uppercase">
              4ª Edição · Vinhos na Serra
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-h2 font-serif text-off-white">
              Uma experiência que merece ser vivida.
            </h2>
            <p className="mt-4 text-areia">
              Descubra os sabores, histórias e momentos que marcaram a 4ª edição da Vinhos na
              Serra.
            </p>
          </Reveal>

          <Reveal delay={300} className="w-full">
            <InstagramEmbed url={EVENT_REEL_URL} />
          </Reveal>

          <Reveal delay={150}>
            <p className="max-w-xl text-sm text-areia/90">
              Uma celebração do vinho, da Serra e das pessoas que fazem parte dessa história.
            </p>
            <Button href="/contato" variant="editorial" tone="bordo" className="mt-4">
              Quero viver essa experiência
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 5. NOSSOS VINHOS — VINHOS */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-h2 mb-16 text-center font-serif text-verde-serra">
              Uma seleção para descobrir.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
            {wineCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 100}>
                <Link href="/vinhos" className="group block">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-areia">
                    <div className="h-full w-full bg-gradient-to-br from-verde-oliva/70 to-dourado/40 transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-5 font-serif text-2xl text-verde-serra">{cat.name}</p>
                  <p className="mt-2 text-sm text-verde-serra/70">{cat.description}</p>
                  <span className="mt-3 inline-block border-b border-verde-serra/30 pb-1 text-xs tracking-[0.2em] text-verde-serra uppercase transition-colors group-hover:border-dourado group-hover:text-dourado">
                    Conhecer seleção
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CURADORIA — VINHOS (aprofundamento) */}
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
                <p className="font-serif text-xl text-dourado">{pillar.label}</p>
                <p className="mt-3 text-sm text-areia/90">{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXPERIÊNCIAS */}
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

      {/* 8. CONFRARIA */}
      <section className="bg-bordo px-6 py-32 text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="text-h2 font-serif text-off-white">Faça parte da nossa mesa.</h2>
          <p className="mt-6 text-areia">
            A Confraria é o convite para viver a Vinhos na Serra por dentro — novidades,
            bastidores e uma relação direta com quem faz o vinho.
          </p>
          <Button href="/confraria" variant="editorial" tone="dourado" className="mt-8">
            Conhecer a Confraria
          </Button>
        </Reveal>
      </section>

      {/* 9. NOSSA HISTÓRIA — fechamento narrativo */}
      <section className="px-6 py-32">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-h2 font-serif text-verde-serra">Uma história que começa na Serra.</h2>
          <p className="mt-8 text-lg leading-relaxed text-verde-serra/80">
            Três gerações de uma mesma família, uma paixão que começou pequena e virou tradição —
            uma história que ainda está sendo escrita a cada colheita.
          </p>
          <Button href="/nossa-historia" variant="editorial" tone="verde-serra" className="mt-6">
            Ler nossa história completa
          </Button>
        </Reveal>
      </section>

      {/* 10. INSTAGRAM */}
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
              <Button href="#" variant="editorial" tone="verde-serra">
                Seguir no Instagram
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. CTA FINAL — eco do Hero */}
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
