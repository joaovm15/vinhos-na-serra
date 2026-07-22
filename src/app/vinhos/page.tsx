import WineCarousel from "@/components/WineCarousel";
import { wines } from "@/data/wines";

export const metadata = {
  title: "Nossos Vinhos | Vinhos na Serra",
};

export default function VinhosPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] text-dourado uppercase">Nossos Vinhos</p>
        <h1 className="text-h2 mt-4 font-serif text-verde-serra">Uma curadoria para descobrir.</h1>
        <p className="mt-6 text-lg leading-relaxed text-verde-serra/80">
          Arraste, deslize ou use as setas para conhecer cada rótulo — sua história, seu terroir
          e o que o torna único.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-4xl">
        <WineCarousel wines={wines} />
      </div>
    </div>
  );
}
