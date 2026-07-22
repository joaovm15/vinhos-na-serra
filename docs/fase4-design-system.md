# Fase 4 — Design System e UI/UX Detalhada

Conceito: **"Da Serra para a Taça."** · Estética: **"Luxo discreto."**
Formaliza em tokens e regras reutilizáveis tudo o que já está implementado (Fase 3) e especifica o que falta: botões, cards, carrossel de vinhos, grid, microinterações e estados.

---

## 1. Design Tokens

### 1.1 Cor — tokens de marca (já implementados em `globals.css`)

| Token | Hex | Papel |
|---|---|---|
| `verde-serra` | `#1B2418` | Fundo escuro primário (Hero, A Serra, VSL, header scrolled) |
| `verde-oliva` | `#343B28` | Fundo escuro secundário (Curadoria) — nunca usado junto de `verde-serra` na mesma seção |
| `bordo` | `#8E2638` | Cor de destaque/ação — botão primário, Confraria, links editoriais |
| `off-white` | `#F3EFE6` | Fundo claro primário, texto sobre fundos escuros |
| `areia` | `#D8CEBB` | Fundo claro secundário, texto secundário sobre fundo escuro |
| `dourado` | `#B09A68` | Bordas, linhas, hover, detalhes — nunca como fundo grande |
| `carvao` | `#171815` | Footer, texto sobre off-white em variações escuras |

### 1.2 Tokens semânticos (a formalizar na implementação)

```
--surface-light:      var(--color-off-white)
--surface-dark:        var(--color-verde-serra)
--surface-dark-alt:    var(--color-verde-oliva)
--surface-accent:      var(--color-bordo)
--surface-neutral:     var(--color-areia)

--text-on-light:       var(--color-verde-serra)      /* 100% */
--text-on-light-muted: color-mix(verde-serra, 80%)
--text-on-dark:        var(--color-off-white)         /* 100% */
--text-on-dark-muted:  var(--color-areia)
--text-accent:         var(--color-dourado)

--border-hairline-light: color-mix(verde-serra, 15%)
--border-hairline-dark:  color-mix(off-white, 15%)
--border-accent:         color-mix(dourado, 50–70%)
```

**Regra de contraste:** nenhuma seção mistura mais de 1 cor de fundo saturada (`bordo`) com mais de 1 cor escura mineral (`verde-serra`/`verde-oliva`) — sempre uma superfície de base + no máximo 2 acentos (dourado + uma cor de texto).

---

## 2. Tipografia

| Elemento | Desktop | Mobile | Fonte | Peso | Letter-spacing |
|---|---|---|---|---|---|
| H1 (Hero/CTA Final) | 64–80px | 36–44px | Cormorant Garamond | 500 | normal |
| H2 (título de seção) | 48–60px | 30–36px | Cormorant Garamond | 500 | normal |
| H3 (subtítulo/card) | 28–36px | 22–26px | Cormorant Garamond | 500 | normal |
| Body | 16–18px | 15–16px | Manrope | 400 | normal |
| Body destacado (manifesto) | 18–20px | 16–17px | Manrope | 400 | normal |
| Label/etiqueta | 12–14px | 11–12px | Manrope | 600 | 0.2–0.3em, uppercase |
| CTA/botão | 12–13px | 12px | Manrope | 600 | 0.15–0.2em, uppercase |

Escala fluida via `clamp()` (ex.: H1 `clamp(2.25rem, 5vw + 1rem, 5rem)`) em vez de breakpoints fixos — evita "saltos" de tamanho entre telas.

Line-height: 1.1–1.2 para títulos serifados; 1.5–1.6 para corpo de texto.

---

## 3. Espaçamentos

Escala base 4px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

| Uso | Desktop | Mobile |
|---|---|---|
| Padding vertical de seção | 128px (py-32) | 64px (py-16) |
| Padding vertical seção "respiro" (Manifesto) | 160px | 80px |
| Gap entre elementos de texto (título→corpo) | 24–32px | 16–24px |
| Gap grid de cards | 40–64px | 16–24px |
| Padding horizontal container | 24px (px-6) fixo em todos os breakpoints, absorvido pelo max-width do container |

---

## 4. Grid

| Container | Max-width | Uso |
|---|---|---|
| `container-editorial` | 680px | Manifesto, Nossa História, blocos de texto centralizado |
| `container-content` | 1152px (max-w-6xl) | Grids de cards, Nossos Vinhos, Curadoria |
| `container-wide` | 1280px | Header/Footer inner |
| full-bleed | 100vw | Hero, A Serra, VSL, CTA Final (sem container) |

Grid interno: 12 colunas conceituais, mas majoritariamente usado como 2 ou 4 colunas simples (`grid-cols-2`, `grid-cols-4`) — evitar grids de 12 colunas literais, que tendem a parecer "template".

---

## 5. Breakpoints

Padrão Tailwind, sem customização: `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`

- **`md` (768px)** é o breakpoint-chave para layouts split (imagem+texto) — abaixo disso tudo empilha.
- **`lg` (1024px)** ativa grids de 4 colunas (Curadoria, Instagram desktop).
- Mobile-first: toda seção é desenhada primeiro para 375px de largura, depois expandida.

---

## 6. Botões — 3 variantes

**Primário** — ação principal (ex.: confirmar contato)
```
bg: bordo · text: off-white
padding: 14px 32px · border-radius: 2px
hover: bg escurece ~8% (color-mix com carvão)
```

**Secundário** — ação alternativa
```
bg: transparent · border: 1px solid dourado · text: cor do fundo (verde-serra ou off-white)
hover: border vira dourado 100% + bg dourado a 8%
```

**Editorial** (já em uso na Home — os links sublinhados)
```
bg: none · text: bordo (ou dourado/off-white conforme fundo)
sem borda visível em repouso; sublinhado fino (border-b) sempre visível
hover: seta "→" aparece deslizando da esquerda, texto muda para dourado
```

Nenhum botão usa `border-radius` acima de 2–4px — cantos quase retos, nunca "pílula".

---

## 7. Cards

Não usar cards genéricos (sombra + borda arredondada + padding uniforme). Padrão bespoke por contexto, mas com anatomia comum:

```
[imagem 4:3 ou 3:4, sem borda, sem sombra]
[espaço 20–24px]
[título serifado]
[texto secundário Manrope, 1–2 linhas]
[CTA editorial sublinhado]
```

- **Card de categoria de vinho** (Nossos Vinhos): imagem 4:3, hover = zoom 1.03x na imagem + CTA vira dourado.
- **Card de pilar** (Curadoria): sem imagem, separador `border-t` dourado 30% no lugar de moldura.
- **Card de experiência**: sem "card" visual — tratado como bloco de lista editorial (já implementado).

---

## 8. Header

Já implementado; formaliza o que falta:

- Estado transparente: logo/menu em `off-white`.
- Estado sólido: fundo `verde-serra`, logo/menu `off-white`, **+ linha inferior 1px `dourado` a 20–30% de opacidade** (ainda não implementada — entra nesta fase).
- Transição: `background-color` e `border-color` em 400–500ms ease-out.
- Mobile: hambúrguer minimalista → overlay fullscreen `verde-serra`, itens em **Cormorant Garamond** 28–32px (hoje já é serif, manter).

---

## 9. Footer

Já implementado (`carvao`, texto `areia`, links dourado no hover). Sem alterações estruturais nesta fase — só padronizar espaçamento conforme escala da seção 3.

---

## 10. Animações

| Elemento | Efeito | Duração | Easing |
|---|---|---|---|
| Entrada de bloco (título/texto) | fade + translateY 16–24px | 600–700ms | ease-out |
| Entrada de imagem | fade + scale de 1.02→1 | 700–900ms | ease-out |
| Texto após imagem | mesmo fade, delay +150ms sobre a imagem | — | — |
| Hero/CTA Final (imagem de fundo) | Ken Burns (scale 1→1.06) | 20–25s | linear, forwards |
| A Serra (parallax) | translateY sutil ligado ao scroll, ~10–15% da velocidade | contínuo | linear |
| Scroll reveal (geral) | IntersectionObserver, threshold 0.2, dispara 1x | — | — |

Todas as animações respeitam `prefers-reduced-motion: reduce` (já global em `globals.css`).

---

## 11. Microinterações

| Componente | Interação |
|---|---|
| Links de navegação/editorial | sublinhado **animado**: nasce do centro ou da esquerda e se expande em 250–300ms no hover (hoje é sublinhado estático — vira animado nesta fase) |
| Botões | mudança sutil de cor/fundo (~150–200ms), sem scale/bounce |
| Imagens (cards, split sections) | zoom **máximo 1.03x** no hover, 500–700ms ease-out (ajustar: hoje alguns lugares usam 1.05/1.06 — padronizar para 1.03) |
| Carrossel de vinhos | transição de troca de garrafa central: crossfade + slide horizontal, 400–500ms |
| Menu mobile | overlay entra com fade + leve slide vertical, 300ms |
| Scroll | reveal progressivo por seção (já implementado via `Reveal`) |

---

## 12–13. Estados de Hover e Foco

- **Hover**: reservado para desktop (`@media (hover: hover)` implícito via Tailwind — não aplicar hover-only feedback como única pista em touch).
- **Foco (teclado)**: todo elemento interativo (links, botões, controles do carrossel, play do vídeo) precisa de `focus-visible` com contorno **2px dourado**, offset 2px — nunca `outline: none` sem substituto. Isso ainda não está explícito no código atual e entra como padrão obrigatório desta fase.
- **Contraste**: textos `areia`/`dourado` sobre `verde-serra`/`verde-oliva` já validados visualmente; qualquer novo par de cor deve manter leitura confortável (evitar dourado sobre off-white — baixo contraste).

---

## 14. Responsividade — tratamento específico (não é "desktop encolhido")

- **Hero**: no mobile, comportamento de enquadramento de imagem muda para orientação vertical (`object-position` ajustado / crop diferente), não só reduz o texto.
- **VSL**: player ocupa 100% da largura útil com padding lateral reduzido; controles maiores para toque.
- **Carrossel de vinhos**: swipe nativo (touch), garrafa central grande + fatias das vizinhas visíveis nas bordas (preview de continuidade) — ver seção dedicada abaixo.
- **Cards**: empilhados verticalmente com espaçamento reduzido (24px em vez de 64px), nunca grid forçado em 2 colunas apertadas.
- **CTA**: área de toque mínima 44×44px em todos os botões/links de ação.
- **WhatsApp flutuante** (se implementado): botão circular pequeno, canto inferior direito, `bordo` ou `verde-serra` com ícone em traço fino — sem badge, sem animação de pulso constante (contraria "luxo discreto"); aparece só após passar o Hero (evita competir com o CTA do Hero).

---

## Carrossel de Vinhos — especificação da interação

Este é o único componente novo e complexo desta fase; especificação antes da Fase 5 (implementação):

**Anatomia:**
```
[seta ←]   [garrafa lateral, ~60% escala, opacidade 50%]   [GARRAFA CENTRAL, 100% escala]   [garrafa lateral, ~60%, opacidade 50%]   [seta →]

[nome do vinho]
[tipo · uva · região · safra]
[descrição curta]
```

**Comportamento:**
- Clique/tap numa garrafa lateral → ela se torna a central (crossfade + slide).
- Setas nas laterais (desktop) sempre visíveis, discretas (traço fino, sem fundo).
- Swipe/drag (mobile e desktop) troca a garrafa central.
- Autoplay lento (ex.: a cada 6–8s), **pausa no hover/foco/interação** e não retoma sozinho após interação manual (evita "brigar" com o usuário).
- Dados textuais (nome/tipo/uva/região/safra/descrição) trocam em sincronia com a transição da garrafa, não antes/depois.
- Sem preço, sem botão de compra — apenas um link editorial "Ver detalhes" opcional levando à página do vinho.
- Mobile: 1 garrafa principal centralizada + fatias (10–15%) das vizinhas visíveis nas bordas, sinalizando que há mais conteúdo lateral.

---

## Próximo passo

Com esta especificação aprovada, a Fase 5 implementa: ajustes de microinteração (sublinhado animado, zoom padronizado 1.03x, foco visível), linha inferior dourada no header scrolled, e o componente novo do Carrossel de Vinhos (provavelmente na página `/vinhos` e/ou substituindo a seção "Nossos Vinhos" da Home).

Aguardando aprovação antes de iniciar a implementação.
