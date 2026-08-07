import Image from "next/image";
import Reveal from "@/components/Reveal";
import VineCorner from "@/components/VineCorner";
import SectionTexture from "@/components/SectionTexture";

export const metadata = {
  title: "Nossa História | Vinhos na Serra",
};

const stats = [
  { number: "1.300+", label: "Rótulos" },
  { number: "130+", label: "Vinícolas brasileiras" },
  { number: "2019", label: "Fundação, em Teresópolis" },
];

const pilares = [
  { label: "Vinho", text: "Curadoria, produtores, rótulos, terroirs e valorização da produção nacional." },
  { label: "Cultura", text: "Arte, música, gastronomia e território como camadas de significado." },
  { label: "Experiência", text: "Ambiência, sensorialidade, atendimento e memória afetiva." },
  { label: "Inovação", text: "Novos formatos, ativações, parcerias e expansão de mercado." },
];

const timeline = [
  {
    year: "2019",
    text: "Rafael Feital, Rodrigo Feital e Leonardo Claussen fundam a Confraria Vinhos na Serra, no centro de Teresópolis — um espaço criado para valorizar a vitivinicultura brasileira e aproximar o público dos produtores nacionais, através de degustações, harmonizações e encontros entre apreciadores.",
  },
  {
    year: "Ao longo dos anos",
    text: "A confraria cresce de forma consistente e passa a reunir mais de 1.300 rótulos de mais de 130 vinícolas brasileiras, tornando-se uma das maiores referências especializadas exclusivamente em vinhos nacionais no estado do Rio de Janeiro.",
  },
  {
    year: "2024",
    text: "A proximidade construída ao longo dos anos com produtores e enólogos dá origem ao evento Vinhos na Serra, em maio — uma celebração da cultura e da produção vinícola brasileira.",
  },
];

export default function NossaHistoriaPage() {
  return (
    <div className="relative overflow-hidden bg-off-white px-6 py-24">
      <SectionTexture tone="light" />
      <VineCorner position="top-left" tone="light" />
      <VineCorner position="top-right" tone="light" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] text-dourado uppercase">Nossa História</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">
          Uma paixão que virou a maior confraria de vinhos brasileiros do país.
        </h1>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-verde-serra/80">
          Somos a maior adega e confraria especializada em vinhos brasileiros do país. Rafael
          Feital, Rodrigo Feital e Leonardo Claussen já compartilhavam o interesse pelo universo
          do vinho quando decidiram se aprofundar na vitivinicultura brasileira. Ao descobrir a
          diversidade de terroirs, produtores, castas e a qualidade dos rótulos elaborados em
          diferentes regiões do país, fizeram uma escolha que mudaria suas trajetórias: dedicar-se
          exclusivamente aos vinhos brasileiros.
        </p>
      </Reveal>

      {/* Empilha no celular: em três colunas, "1.300+" não cabe na célula e
          transborda por cima dos números vizinhos. */}
      <Reveal delay={250} className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 border-t border-dourado/30 pt-10 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-numeros text-5xl font-medium tracking-tight text-dourado tabular-nums md:text-6xl">
              {stat.number}
            </p>
            <p className="mt-2 text-sm tracking-[0.1em] text-verde-serra/70 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-20 max-w-3xl">
        <div className="aspect-[3/2] w-full overflow-hidden bg-areia">
          <Image
            src="/images/socios-brinde.jpg"
            alt="Rafael Feital, Rodrigo Feital e Leonardo Claussen brindando na adega"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-4 text-center text-sm tracking-[0.15em] text-verde-serra/60 uppercase">
          Rafael Feital, Rodrigo Feital e Leonardo Claussen
        </p>
      </Reveal>

      <div className="mx-auto mt-20 max-w-xl space-y-12 border-l border-verde-serra/15 pl-8">
        {timeline.map((item, i) => (
          <Reveal key={item.year} delay={i * 100}>
            <p className="text-sm tracking-[0.2em] text-dourado uppercase">{item.year}</p>
            <p className="mt-2 text-lg leading-relaxed text-verde-serra/80">{item.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mx-auto mt-20 max-w-2xl text-center">
        <p className="text-lg leading-relaxed text-verde-serra/80">
          Mais do que uma adega, a Vinhos na Serra se consolidou como um espaço de experiências,
          conhecimento e valorização da produção nacional — um ponto de encontro entre quem ama
          vinho e quem o faz.
        </p>
      </Reveal>

      <div className="-mx-6 mt-32 -mb-24">
        <div className="relative overflow-hidden bg-verde-oliva px-6 py-24">
          <SectionTexture tone="dark" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-h3 mb-14 text-center font-serif text-off-white">
                Nossos pilares.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {pilares.map((pilar, i) => (
                <Reveal key={pilar.label} delay={i * 100} className="border-t border-dourado/30 pt-6">
                  <p className="font-serif text-xl text-dourado-claro">{pilar.label}</p>
                  <p className="mt-3 text-sm text-areia/90">{pilar.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
