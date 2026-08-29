# Catálogo

Seção de catálogo de rótulos, **desligada por padrão**. Ela existe inteira no
código, mas não aparece para o visitante enquanto a chave estiver em `false`.

## Ligar e desligar

`src/lib/catalogo.ts`:

```ts
export const CATALOG_ENABLED = false;   // troque para true quando for publicar
```

| | `false` (hoje) | `true` |
| --- | --- | --- |
| `/catalogo` | responde **404** | responde 200 |
| Sitemap | fora | acrescente a rota em `src/app/sitemap.ts` |
| Metadata | `noindex, nofollow` | title, description, canonical e Open Graph normais |
| Menu / rodapé | nenhum link | acrescente em `Header.tsx` se quiser |
| Resto do site | intocado — nada é renderizado, então não sobra espaço vazio | intocado |

Depois de trocar a chave é preciso **refazer o deploy**: o valor entra em tempo
de build.

## Conteúdo

Tudo em `src/data/catalogo.ts`. Categorias:

```ts
export const categorias: CategoriaCatalogo[] = [
  { slug: "tintos", nome: "Tintos" },
  // …
];
```

Rótulos:

```ts
export const itens: ItemCatalogo[] = [
  {
    slug: "nome-do-rotulo",           // único, minúsculo, com hífen
    nome: "Nome do rótulo",
    categoria: "tintos",              // slug de uma categoria acima
    descricao: "Uma ou duas frases.",
    tags: ["Merlot", "Serra Gaúcha", "2021"],
    imagem: "/images/catalogo/nome-do-rotulo.jpg",   // opcional
    imagemAlt: "Garrafa do rótulo …",                // obrigatório se houver imagem
    acao: "Consultar disponibilidade",               // opcional
  },
];
```

Detalhes que o layout resolve sozinho:

- **Sem imagem**, o card mostra o monograma da marca — não fica buraco.
- Uma categoria **sem nenhum rótulo** não aparece no filtro.
- Enquanto `itens` estiver vazia, a página mostra os `exemplos` com um aviso de
  demonstração. O aviso some sozinho quando o primeiro rótulo real entrar.
- A cada 9 cards aparece o botão "Ver mais rótulos" (`ITENS_POR_PAGINA`).
- O botão de cada card abre o WhatsApp com a mensagem já escrita, citando o
  rótulo pelo nome.

As fotos vão em `public/images/catalogo/` — especificação em [`assets.md`](assets.md).

## Estrutura dos arquivos

| Arquivo | Papel |
| --- | --- |
| `src/lib/catalogo.ts` | chave de publicação, passos do "como funciona", aviso de entrega, itens por página |
| `src/data/catalogo.ts` | categorias e rótulos |
| `src/components/catalogo/CatalogoSection.tsx` | a seção inteira (abertura, grade, passos, CTA) |
| `src/components/catalogo/CatalogoGrade.tsx` | busca, filtros, cards e paginação (client component) |
| `src/app/catalogo/page.tsx` | a rota, com o 404 quando desligado |

A seção é um componente isolado de propósito: se um dia fizer sentido colocar um
recorte do catálogo dentro da home, basta montar `<CatalogoSection />` lá — sem
reconstruir nada.

## Identidade

Nada de novo foi inventado no visual: as pílulas de filtro e os botões usam
`CLICAVEL_CONTORNO` de `components/Button.tsx`, os cards repetem a moldura de
`InfoBox`, o campo de busca é o mesmo do formulário de contato, os fundos
alternam `verde-serra` / `off-white` / `verde-oliva` / `bordo` como no resto do
site, e a entrada dos blocos usa `Reveal`.
