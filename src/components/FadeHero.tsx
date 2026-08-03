"use client";

import { useEffect, useRef, useState } from "react";
import ThreeTacaIcon from "@/components/ThreeTacaIcon";

export default function FadeHero({ children }: { children?: React.ReactNode }) {
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
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#2c3117]"
    >
      {/* padrão botânico — só nas laterais, nunca no centro */}
      <div
        className="absolute inset-y-0 left-0 hidden w-40 opacity-[0.1] sm:block md:w-64"
        style={{
          backgroundImage: "url(/patterns/vinha-textura-light.svg)",
          backgroundSize: "420px 420px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-40 -scale-x-100 opacity-[0.1] sm:block md:w-64"
        style={{
          backgroundImage: "url(/patterns/vinha-textura-light.svg)",
          backgroundSize: "420px 420px",
          backgroundRepeat: "repeat",
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
        <ThreeTacaIcon className="h-6 w-auto text-off-white sm:h-8" />

        <h1 className="font-serif text-3xl font-light tracking-[0.12em] text-off-white uppercase sm:text-5xl sm:tracking-[0.25em] md:text-6xl">
          Vinhos na Serra
        </h1>

        <p className="text-xs tracking-[0.2em] text-off-white uppercase sm:text-sm sm:tracking-[0.35em]">
          Adega e Confraria
        </p>

        <div className="h-px w-10 bg-off-white/60" />

        <p className="text-xs font-bold tracking-[0.15em] text-off-white uppercase sm:text-sm sm:tracking-[0.25em]">
          A casa do vinho brasileiro
        </p>

        <div className="h-px w-16 bg-off-white/60" />

        <p className="max-w-md text-sm text-off-white sm:text-base">
          Onde o vinho brasileiro encontra sua maior expressão
        </p>

        {children}
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
