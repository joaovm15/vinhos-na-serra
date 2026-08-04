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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.66 1.45 5.25L2 22l4.99-1.31a9.87 9.87 0 0 0 5.05 1.38h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.13c-.25.7-1.24 1.29-1.99 1.44-.53.11-1.22.19-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.32.4-.45.53-.15.15-.31.32-.13.62.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  );
}
