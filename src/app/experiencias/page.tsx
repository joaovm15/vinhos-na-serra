import Reveal from "@/components/Reveal";
import VineCorner from "@/components/VineCorner";
import SectionTexture from "@/components/SectionTexture";
import { experiences } from "@/data/experiences";

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


export default function ExperienciasPage() {
  return (
    <div className="relative overflow-hidden bg-off-white px-6 py-24">
      <SectionTexture tone="light" />
      <VineCorner position="top-right" tone="light" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
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
    </div>
  );
}
