"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import TacaIcon from "@/components/TacaIcon";

const NAV_ITEMS = [
  { href: "/nossa-historia", label: "Nossa História" },
  { href: "/a-serra", label: "A Serra" },
  { href: "/experiencias", label: "Experiências" },
  { href: "/confraria", label: "Confraria" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled(80);
  const solid = pathname !== "/" || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        solid ? "border-dourado/25 bg-verde-serra" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-off-white">
          <TacaIcon className="h-4 w-4 text-bordo" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-wide">Vinhos na Serra</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.25em] text-off-white/70 uppercase">
              Adega e Confraria
            </span>
          </span>
        </Link>

        <nav className="hidden gap-8 text-xs tracking-widest text-off-white/90 uppercase md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="group relative py-1 transition-colors hover:text-dourado-claro">
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-dourado-claro transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="text-off-white md:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-verde-serra md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="flex items-center gap-2.5 text-off-white">
              <TacaIcon className="h-4 w-4 text-bordo" />
              <span className="font-serif text-2xl">Vinhos na Serra</span>
            </span>
            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="text-off-white">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-off-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
