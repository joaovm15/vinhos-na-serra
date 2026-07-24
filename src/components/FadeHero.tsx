"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FadeHero({
  bgImageSrc,
  title,
  eyebrow,
  children,
}: {
  bgImageSrc: string;
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollFade, setScrollFade] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);

    const handleScroll = () => {
      const height = sectionRef.current?.offsetHeight ?? window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / (height * 0.7), 0), 1);
      setScrollFade(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = mounted ? 1 - scrollFade : 0;

  return (
    <section ref={sectionRef} className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src={bgImageSrc}
        alt=""
        fill
        sizes="100vw"
        quality={90}
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-verde-serra/40" />

      <div
        className="relative z-10 flex flex-col items-center gap-6 px-6 text-center transition-opacity duration-700 ease-out"
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * -24}px)`,
        }}
      >
        {eyebrow && (
          <p className="text-sm tracking-[0.3em] text-areia uppercase">{eyebrow}</p>
        )}
        <h1 className="text-h1 max-w-4xl font-serif text-off-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        {children}
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.2em] text-areia uppercase transition-opacity duration-700"
        style={{ opacity }}
      >
        Role para descobrir
      </div>
    </section>
  );
}
