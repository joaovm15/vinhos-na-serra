# SEO técnico

## O que você precisa configurar (uma vez)

| Variável | Onde | Para quê |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Vercel → Settings → Environment Variables | domínio oficial, ex.: `https://www.vinhosnaserra.com.br`. É o que alimenta canonical, sitemap, Open Graph e robots.txt |
| `GOOGLE_SITE_VERIFICATION` | idem (opcional) | conteúdo da tag HTML de verificação do Google Search Console |

Sem `NEXT_PUBLIC_SITE_URL`, o site cai no domínio `*.vercel.app` que a própria
Vercel injeta (`VERCEL_PROJECT_PRODUCTION_URL`). Funciona, mas o canonical vai
apontar para o endereço da Vercel em vez do domínio próprio — **defina a variável
antes de pedir indexação**. Toda a lógica está em `src/lib/site.ts`.

> Depois de alterar a variável é preciso **refazer o deploy**: os valores entram
> nas páginas em tempo de build.

## Onde cada coisa mora

| Item | Arquivo |
| --- | --- |
| Domínio, nome, descrição padrão, imagem de compartilhamento | `src/lib/site.ts` |
| Metadata de página interna (title, description, canonical, OG, Twitter) | `src/lib/seo.ts` → `pageMetadata()` |
| Metadata global, robots, verificação, `themeColor` | `src/app/layout.tsx` |
| Dados estruturados (JSON-LD) | `src/components/JsonLd.tsx` |
| sitemap.xml | `src/app/sitemap.ts` |
| robots.txt | `src/app/robots.ts` |
| Imagem de compartilhamento (1200×630) | `public/images/og/vinhos-na-serra.jpg` |

Para criar uma página nova já com SEO:

```tsx
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Título da página",       // sem "| Vinhos na Serra": o layout acrescenta
  description: "Uma frase natural descrevendo o conteúdo real da página.",
  path: "/rota-da-pagina",
});
```

E acrescente a rota em `src/app/sitemap.ts`.

## Dados estruturados declarados

- **Organization** e **WebSite** — em todas as páginas, pelo layout raiz.
- **BreadcrumbList** — nas páginas internas indexáveis.
- **Event** — em `/evento`, com data, horário e local da 4ª edição.

Regra do `JsonLd.tsx`: só entra dado que existe no site. O `Event` está **sem
`offers`** porque o preço do ingresso não está publicado — quando estiver, dá para
declarar `price`, `priceCurrency` e a URL do Sympla, que é o que gera o resultado
rico de ingresso na busca.

Para validar depois de publicar: [Rich Results Test](https://search.google.com/test/rich-results)
e [Schema Markup Validator](https://validator.schema.org/).

## Indexação

- No sitemap: `/`, `/evento`, `/nossa-historia`, `/confraria`, `/galeria`, `/contato`.
- Fora do sitemap e com `noindex, follow`: `/experiencias` e `/a-serra` — continuam
  no ar, mas não são linkadas por nenhum menu (ver `backlog.md`). Para indexá-las,
  remova o `robots` da metadata da página e acrescente a rota no sitemap.
- Nada é bloqueado no robots.txt, inclusive `/_next/`: o Google precisa do CSS e do
  JS para renderizar a página.

## Domínio: www × sem www, http × https

A escolha de qual versão é a oficial se faz **no painel da Vercel** (Settings →
Domains, marcando um domínio como principal e deixando o outro redirecionar). Não
há redirect no código de propósito — duplicar isso na aplicação só cria conflito.
O `NEXT_PUBLIC_SITE_URL` precisa apontar para a versão escolhida como principal.
