/**
 * Identidade do site para SEO — URL canônica, nome e descrição padrão.
 *
 * O domínio NÃO está fixo no código. A ordem de resolução é:
 *
 * 1. `NEXT_PUBLIC_SITE_URL` — defina no painel da Vercel (Settings →
 *    Environment Variables) com o domínio final, ex.: https://www.exemplo.com.br
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — a Vercel injeta sozinha o domínio de
 *    produção do projeto; serve de rede de segurança enquanto (1) não existir.
 * 3. localhost, em desenvolvimento.
 *
 * Enquanto (1) não for definida, canonical, sitemap e Open Graph usam a URL
 * `.vercel.app`. Funciona, mas o certo é apontar para o domínio próprio.
 */
function resolveSiteUrl(): string {
  const explicito = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicito) return explicito.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Vinhos na Serra";

export const SITE_TAGLINE = "Adega e Confraria";

export const SITE_DESCRIPTION =
  "Adega e confraria especializada em vinhos brasileiros em Teresópolis, na Serra Fluminense: mais de 1.300 rótulos de 130 vinícolas nacionais e o evento Vinhos na Serra.";

/** Imagem de compartilhamento (1200×630), gerada a partir da Hero do próprio site. */
export const OG_IMAGE = {
  url: "/images/og/vinhos-na-serra.jpg",
  width: 1200,
  height: 630,
  alt: "Vinhos na Serra — Adega e Confraria",
};

/** Caminho absoluto a partir da raiz do site. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
