import Reveal from "@/components/Reveal";
import VineCorner from "@/components/VineCorner";
import { experiences } from "@/data/experiences";
import { fourthEditionWineries } from "@/data/wineries";

export const metadata = {
  title: "Experiências | Vinhos na Serra",
};

const diferenciais = [
  "Descubra histórias por trás de cada rótulo.",
  "Conheça as famílias produtoras.",
  "Converse com quem faz o vinho.",
  "Contemple arte e sinta a música.",
  "Obtenha conhecimento com quem entende do assunto.",
  "Deseje voltar.",
];

const pilares = [
  { label: "Vinho", text: "Curadoria, produtores, rótulos, terroirs e valorização da produção nacional." },
  { label: "Cultura", text: "Arte, música, gastronomia e território como camadas de significado." },
  { label: "Experiência", text: "Ambiência, sensorialidade, atendimento e memória afetiva." },
  { label: "Inovação", text: "Novos formatos, ativações, parcerias e expansão de mercado." },
];

export default function ExperienciasPage() {
  return (
    <div className="relative overflow-hidden bg-off-white px-6 py-24">
      <VineCorner position="top-right" tone="light" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] text-dourado uppercase">Experiências</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">
          O vinho também é sobre estar junto.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
          Não queremos que você apenas deguste vinhos. Queremos que viva uma experiência.
        </p>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-16 max-w-3xl">
        <ul className="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-dourado/30 pt-10 sm:grid-cols-2">
          {diferenciais.map((item) => (
            <li key={item} className="flex items-start gap-3 text-verde-serra/80">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-dourado" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mx-auto mt-24 max-w-3xl space-y-10">
        {experiences.map((exp, i) => (
          <Reveal key={exp.slug} delay={i * 100}>
            <div className="border-t border-verde-serra/15 pt-6">
              <p className="font-serif text-2xl text-verde-serra">{exp.name}</p>
              <p className="mt-1 text-sm tracking-[0.15em] text-dourado uppercase">
                {exp.date} · {exp.format}
              </p>
              <p className="mt-3 max-w-xl text-verde-serra/80">{exp.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="-mx-6 mt-32">
        <div className="h-20 bg-gradient-to-b from-off-white to-verde-oliva" aria-hidden />
        <div
          className="relative bg-verde-oliva px-6 py-24"
          style={{
            backgroundImage: "url(/patterns/vinha-textura-dark.svg)",
            backgroundSize: "480px 480px",
          }}
        >
          <div className="absolute inset-0 bg-verde-oliva/[0.92]" />
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
        <div className="h-20 bg-gradient-to-b from-verde-oliva to-off-white" aria-hidden />
      </div>

      <div className="mx-auto mt-32 max-w-4xl">
        <Reveal className="text-center">
          <p className="text-sm tracking-[0.3em] text-dourado uppercase">4ª Edição</p>
          <h2 className="text-h3 mt-4 font-serif text-verde-serra">Vinícolas confirmadas.</h2>
          <p className="mt-4 text-verde-serra/80">
            Os produtores brasileiros que já confirmaram presença na 4ª edição do evento
            Vinhos na Serra.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14 border-t border-dourado/30">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 pt-10 sm:grid-cols-3">
            {fourthEditionWineries.map((winery) => (
              <li
                key={winery}
                className="font-serif text-lg text-verde-serra sm:text-xl"
              >
                {winery}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
