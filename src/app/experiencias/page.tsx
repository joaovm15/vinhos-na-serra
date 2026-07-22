import Reveal from "@/components/Reveal";
import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Experiências | Vinhos na Serra",
};

export default function ExperienciasPage() {
  return (
    <div className="bg-off-white px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] text-dourado uppercase">Experiências</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">
          O vinho também é sobre estar junto.
        </h1>
      </Reveal>

      <div className="mx-auto mt-20 max-w-3xl space-y-10">
        {experiences.map((exp, i) => (
          <Reveal key={exp.slug} delay={i * 100}>
            <div className="border-t border-verde-serra/15 pt-6">
              <p className="font-serif text-2xl text-verde-serra">{exp.name}</p>
              <p className="mt-1 text-xs tracking-[0.15em] text-dourado uppercase">
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
