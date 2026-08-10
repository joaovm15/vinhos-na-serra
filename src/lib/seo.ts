import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/site";

/**
 * Monta a metadata de uma página interna: canonical próprio, Open Graph e
 * Twitter Card coerentes com o título e a descrição daquela página.
 *
 * `title` entra sem o sufixo da marca — o template definido no layout raiz
 * acrescenta "| Vinhos na Serra".
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [{ ...OG_IMAGE, url: absoluteUrl(OG_IMAGE.url) }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [absoluteUrl(OG_IMAGE.url)],
    },
  };
}
