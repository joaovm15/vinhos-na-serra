import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Páginas públicas e indexáveis.
 *
 * Fora daqui de propósito: `/experiencias` e `/a-serra`, que continuam no ar
 * mas não são linkadas por nenhum menu e estão marcadas como `noindex`
 * (ver `docs/backlog.md`). Se voltarem à navegação, basta acrescentá-las
 * aqui e remover o `robots` da metadata de cada uma.
 *
 * `/exclusivoparavoce` também não entra, e não deve entrar: é a página de
 * campanha acessada por QR Code, marcada como `noindex`.
 */
const ROTAS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/evento", priority: 0.9, changeFrequency: "weekly" },
  { path: "/nossa-historia", priority: 0.8, changeFrequency: "yearly" },
  { path: "/confraria", priority: 0.8, changeFrequency: "yearly" },
  { path: "/galeria", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contato", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROTAS.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
