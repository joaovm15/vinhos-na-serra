"use client";

import { useEffect, useRef, useState } from "react";
import type { Wine } from "@/data/wines";
import Button from "@/components/Button";

const AUTOPLAY_MS = 7000;
const DRAG_THRESHOLD = 40;

export default function WineCarousel({ wines }: { wines: Wine[] }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const active = wines[index];
  const prevIndex = (index - 1 + wines.length) % wines.length;
  const nextIndex = (index + 1) % wines.length;

  useEffect(() => {
    if (hovering || userInteracted || wines.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % wines.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovering, userInteracted, wines.length]);

  const goTo = (i: number) => {
    setUserInteracted(true);
    setIndex(((i % wines.length) + wines.length) % wines.length);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(delta) < DRAG_THRESHOLD) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      <div
        className="flex touch-pan-y items-center justify-center gap-3 select-none sm:gap-6"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <button
          type="button"
          aria-label="Vinho anterior"
          onClick={() => goTo(index - 1)}
          className="hidden shrink-0 text-verde-serra/40 transition-colors hover:text-dourado md:block"
        >
          <ArrowIcon direction="left" />
        </button>

        <button
          type="button"
          aria-label={`Ver ${wines[prevIndex].name}`}
          onClick={() => goTo(prevIndex)}
          className="w-12 shrink-0 opacity-50 transition-opacity hover:opacity-80 sm:w-20 md:w-24"
        >
          <BottlePlaceholder />
        </button>

        <div className="w-36 shrink-0 sm:w-48 md:w-56">
          <BottlePlaceholder active />
        </div>

        <button
          type="button"
          aria-label={`Ver ${wines[nextIndex].name}`}
          onClick={() => goTo(nextIndex)}
          className="w-12 shrink-0 opacity-50 transition-opacity hover:opacity-80 sm:w-20 md:w-24"
        >
          <BottlePlaceholder />
        </button>

        <button
          type="button"
          aria-label="Próximo vinho"
          onClick={() => goTo(index + 1)}
          className="hidden shrink-0 text-verde-serra/40 transition-colors hover:text-dourado md:block"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div key={active.slug} className="animate-fade-in mx-auto mt-10 max-w-lg text-center">
        <p className="font-serif text-2xl text-verde-serra sm:text-3xl">{active.name}</p>
        <p className="mt-2 text-sm text-verde-serra/60">
          {active.type} · {active.grape} · {active.region} · {active.vintage}
        </p>
        <p className="mt-4 text-verde-serra/80">{active.description}</p>
        <Button href={`/vinhos/${active.slug}`} variant="editorial" tone="verde-serra" className="mt-5">
          Ver detalhes
        </Button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {wines.map((w, i) => (
          <button
            key={w.slug}
            type="button"
            aria-label={`Ir para ${w.name}`}
            onClick={() => goTo(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-dourado" : "bg-verde-serra/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function BottlePlaceholder({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`aspect-[3/8] w-full bg-gradient-to-b from-verde-oliva/70 via-verde-serra to-carvao transition-transform duration-500 ease-out ${
        active ? "" : "scale-95"
      }`}
    />
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {direction === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}
