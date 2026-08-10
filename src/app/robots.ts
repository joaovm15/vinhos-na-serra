import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * O site é todo público — não há área administrativa, login nem rota de API,
 * então não há o que bloquear. Os arquivos de `/_next/` ficam liberados de
 * propósito: o Google precisa deles para renderizar CSS e JS ao rastrear.
 *
 * O que não deve ser indexado (`/experiencias`, `/a-serra`) é controlado por
 * `noindex` na metadata de cada página, não aqui — página bloqueada no
 * robots.txt não pode nem ser lida para se descobrir que é `noindex`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
