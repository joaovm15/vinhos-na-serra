/**
 * Dados estruturados (schema.org) em JSON-LD.
 *
 * Regra deste arquivo: só entra informação que já existe no site. Nada de
 * preço, avaliação, horário de funcionamento ou CNPJ inventado — campo sem
 * fonte simplesmente não é declarado.
 */
import { INSTAGRAM_URL } from "@/lib/social";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/site";

/** Injeta um bloco JSON-LD. O conteúdo é estático, montado no servidor. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORGANIZATION_ID = absoluteUrl("/#organizacao");

/** Mesmo endereço de `src/lib/address.ts`, quebrado nos campos do schema.org.
    Se o endereço mudar lá, atualize aqui também. */
const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "R. Ten. Luiz Meirelles, 439 (fundos)",
  addressLocality: "Teresópolis",
  addressRegion: "RJ",
  addressCountry: "BR",
} as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Vinhos na Serra — Adega e Confraria",
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/images/og/vinhos-na-serra.jpg"),
    address: POSTAL_ADDRESS,
    sameAs: [INSTAGRAM_URL],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#site"),
    name: SITE_NAME,
    url: absoluteUrl("/"),
    inLanguage: "pt-BR",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** Trilha "Início › Página" para as páginas internas. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Evento da edição atual. Datas e local vêm do texto publicado em
 * `/evento`. Sem `offers`: o preço do ingresso não está no site — quando
 * estiver, declare aqui um `Offer` com `price`, `priceCurrency` e a URL do
 * Sympla (`INGRESSOS_URL`), que é o que gera o resultado rico de ingresso.
 */
export function eventoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "4º Encontro de Vinhos Brasileiros — Vinhos na Serra",
    startDate: "2026-08-29T12:00:00-03:00",
    endDate: "2026-08-29T21:00:00-03:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description:
      "Quarta edição do Vinhos na Serra, com mais de 130 rótulos de vinhos brasileiros e 15 vinícolas do Vale dos Vinhedos, em Teresópolis.",
    image: absoluteUrl("/images/og/vinhos-na-serra.jpg"),
    url: absoluteUrl("/evento"),
    location: {
      "@type": "Place",
      name: "Espaço Ville Verte",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Teresópolis",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
    },
    organizer: { "@id": ORGANIZATION_ID },
  };
}
