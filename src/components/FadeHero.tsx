"use client";

import { useEffect, useRef, useState } from "react";
import ThreeTacaIcon from "@/components/ThreeTacaIcon";

export default function FadeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollFade, setScrollFade] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const height = sectionRef.current?.offsetHeight ?? window.innerHeight;
        const progress = Math.min(Math.max(window.scrollY / (height * 0.7), 0), 1);
        setScrollFade(progress);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = mounted ? 1 - scrollFade : 0;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-verde-serra"
    >
      {/* padrão botânico — cobre o fundo inteiro, bem sutil, sem competir com o texto */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "url(/patterns/vinha-textura-dark.svg)",
          backgroundSize: "420px 420px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(44,49,23,0.85) 0%, rgba(44,49,23,0.4) 60%, rgba(44,49,23,0) 100%)",
        }}
      />

      <div
        className="relative z-10 flex w-full flex-col items-center gap-5 px-6 text-center transition-[opacity,transform] duration-150 ease-out will-change-[opacity,transform]"
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * -24}px)`,
          transitionDuration: mounted && scrollFade === 0 ? "700ms" : "150ms",
        }}
      >
        <ThreeTacaIcon className="mb-3 h-auto w-56 text-off-white sm:w-80 md:w-96" />

        <h1 className="font-titulo text-4xl font-extralight tracking-[0.16em] text-off-white uppercase sm:text-6xl sm:tracking-[0.3em] md:text-7xl">
          Vinhos na Serra
        </h1>

        <p className="text-xs tracking-[0.2em] text-off-white uppercase sm:text-sm sm:tracking-[0.35em]">
          Adega e Confraria
        </p>

        <div className="h-px w-10 bg-off-white/60" />

        <p className="text-xs font-bold tracking-[0.15em] text-off-white uppercase sm:text-sm sm:tracking-[0.25em]">
          A casa do vinho brasileiro
        </p>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.2em] text-off-white/80 uppercase transition-opacity duration-150"
        style={{ opacity }}
      >
        Role para descobrir
      </div>
    </section>
  );
}
