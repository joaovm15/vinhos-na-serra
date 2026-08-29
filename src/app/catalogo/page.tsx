import { notFound } from "next/navigation";
import CatalogoSection from "@/components/catalogo/CatalogoSection";
import { pageMetadata } from "@/lib/seo";
import { CATALOG_ENABLED } from "@/lib/catalogo";

/* Enquanto o catálogo estiver desligado, a rota também fica `noindex` — mesmo
   que alguém descubra o endereço, o Google não deve guardá-lo. Ao publicar,
   troque por `pageMetadata(...)` puro e acrescente a rota no sitemap. */
export const metadata = CATALOG_ENABLED
  ? pageMetadata({
      title: "Catálogo",
      description:
        "Rótulos brasileiros selecionados pela adega do Vinhos na Serra, em Teresópolis. Consulte disponibilidade pelo WhatsApp.",
      path: "/catalogo",
    })
  : { title: "Catálogo", robots: { index: false, follow: false } };

export default function CatalogoPage() {
  /* Desligado: a rota responde 404, como se não existisse. Nada é renderizado,
     então não sobra espaço vazio nem meia seção em lugar nenhum. */
  if (!CATALOG_ENABLED) notFound();

  return <CatalogoSection />;
}
