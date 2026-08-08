# Identidade visual

Baseada no manual da D-Olej Studio. Os valores abaixo são os que estão em
`src/app/globals.css` — mudou lá, mudou no site inteiro.

## Cores

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `verde-serra` | `#2c3117` | verde principal, o mesmo da Hero |
| `verde-oliva` | `#373d1e` | variação clara, respiro entre blocos escuros |
| `verde-profundo` | `#1e2210` | variação escura, rodapé e fechamentos |
| `bordo` | `#b10736` | cor de destaque em fundo claro |
| `dourado` | `#b10736` | apelido de `bordo` (nome herdado, mesma cor) |
| `dourado-claro` | `#f0708a` | destaque em fundo **escuro** |
| `off-white` | `#fffdeb` | fundo claro e texto sobre verde |
| `areia` | `#d8cebb` | texto de apoio sobre verde |

Os três verdes são **variações do mesmo verde**, para dar profundidade — não são
identidades de seção diferentes.

> **Regra que mais deu retrabalho:** `dourado`/`bordo` não tem contraste suficiente sobre
> verde ou bordô. Em fundo escuro, use `dourado-claro`.

## Tipografia

As fontes do manual são **Didot** (títulos) e **Big Caslon** (texto), ambas comerciais.
No site elas estão substituídas pelas equivalentes livres mais próximas, carregadas por
`next/font/google` em `src/app/layout.tsx`:

| Slot | Classe | Fonte |
| --- | --- | --- |
| Títulos | `font-serif` | Bodoni Moda |
| Texto corrido | `font-sans` | Libre Caslon Text |
| Números grandes | `font-numeros` | pilha do sistema (sem download) |

As duas famílias da identidade são serifadas; `sans`/`serif` aqui são só os slots do
Tailwind. Escalas fluidas de título: `.text-h1`, `.text-h2`, `.text-h3` em `globals.css`.

## Marcas em SVG

| Componente | O que é |
| --- | --- |
| `WordmarkVNS.tsx` | logotipo "VINHOS NA SERRA" — letreiramento vetorizado do manual, 13 paths com `fill-rule` próprio. **Não é fonte.** |
| `MonogramaVS.tsx` | monograma V\S, usado no cabeçalho |
| `ThreeTacaIcon.tsx` | as três taças, medidas a partir do logo oficial |
| `TacaIcon.tsx` | taça isolada |
| `LeafMark.tsx` | folha usada como ornamento dos botões |
| `app/icon.svg` | favicon |

Nos ícones, os traços claros são desenhados **por cima** do preenchimento de vinho — a
ordem dos elementos no SVG importa.

## Texturas

`public/patterns/vinha-{textura,canto}-{dark,light}.svg`, aplicadas por
`SectionTexture.tsx` e `VineCorner.tsx`. O sufixo nomeia o **fundo de destino**: `dark`
tem traço off-white (vai sobre verde), `light` tem traço escuro (vai sobre off-white).
Opacidade padrão: 0.10 em fundo escuro, 0.05 em fundo claro.
