"use client";

import { usePathname } from "next/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { whatsappUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const scrolled = useScrolled(400);
  const visible = pathname !== "/" || scrolled;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-verde-serra text-off-white shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:bg-carvao ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18l-3.5 1 1-3.4A8 8 0 1 1 7 18Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 .9-.3 1-.8l.2-.9a.7.7 0 0 0-.4-.8l-1.4-.6a.7.7 0 0 0-.8.2l-.3.4a4.2 4.2 0 0 1-2.3-2.3l.4-.3a.7.7 0 0 0 .2-.8l-.6-1.4a.7.7 0 0 0-.8-.4l-.9.2c-.5.1-.8.5-.8 1Z"
      />
    </svg>
  );
}
