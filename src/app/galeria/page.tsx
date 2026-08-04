import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import VineCorner from "@/components/VineCorner";
import SectionTexture from "@/components/SectionTexture";
import { galeriaFotos } from "@/data/galeria";
import { INSTAGRAM_URL } from "@/lib/social";

export const metadata = {
  title: "Galeria | Vinhos na Serra",
};

export default function GaleriaPage() {
  return (
    <div className="relative overflow-hidden bg-off-white px-6 py-24">
      <SectionTexture tone="light" />
      <VineCorner position="top-right" tone="light" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.3em] text-dourado uppercase">Galeria</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">
          Registros da nossa jornada.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
          Momentos da adega, dos encontros e das pessoas que fazem parte da Vinhos na Serra.
        </p>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-16 max-w-6xl">
        <div className="columns-2 gap-3 sm:columns-3 md:gap-4">
          {galeriaFotos.map((foto, i) => (
            <div
              key={foto.src}
              className="group mb-3 break-inside-avoid overflow-hidden bg-areia md:mb-4"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={600}
                height={800}
                quality={85}
                loading={i < 6 ? "eager" : "lazy"}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-16 text-center">
        <Button href={INSTAGRAM_URL} variant="editorial" tone="verde-serra">
          Seguir no Instagram
        </Button>
      </div>
    </div>
  );
}
