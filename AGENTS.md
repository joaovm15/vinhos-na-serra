<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Vinhos na Serra — guia do projeto

Site institucional estático (Next.js 16 + Tailwind v4). Sem banco, sem CMS, sem API:
todo texto está no código. Visão geral e comandos no [`README.md`](README.md).

## Onde mexer (mapa rápido)

| Preciso mudar… | Arquivo |
| --- | --- |
| Texto de uma página | `src/app/<rota>/page.tsx` — as strings ficam no JSX ou em `const` no topo do arquivo |
| Texto da home | `src/app/page.tsx` (as seções estão numeradas em comentários) |
| Cor, fonte, escala de título | `src/app/globals.css` |
| Endereço, WhatsApp, Instagram, link do Sympla | `src/lib/` |
| Lista de vinícolas / fotos da galeria / experiências | `src/data/` |
| Menu, rodapé, botão de WhatsApp | `src/components/Header.tsx`, `Footer.tsx`, `WhatsAppButton.tsx` |
| Logo, monograma, taças, folha | `src/components/WordmarkVNS.tsx`, `MonogramaVS.tsx`, `ThreeTacaIcon.tsx`, `TacaIcon.tsx`, `LeafMark.tsx` |

## Convenções

- **Nome da marca no masculino**: "o Vinhos na Serra", "do Vinhos na Serra". Nunca "a".
- **Textos em português**, com acentuação correta. Comentários de código também em português.
- **Botões e links** usam sempre `components/Button.tsx` (ou as constantes
  `CLICAVEL_SOLIDO` / `CLICAVEL_CONTORNO` exportadas por ele). Não criar um estilo novo
  de elemento clicável.
- **Caixas de destaque** (pilares, números, dados) usam `components/InfoBox.tsx`, com
  `tone="dark" | "bordo" | "light"` conforme o fundo.
- **Textura de fundo**: `components/SectionTexture.tsx`. O sufixo `dark`/`light` nomeia o
  **fundo** em que a textura vai ser aplicada, não a cor do traço.
- **Cantos arredondados**: fotos e caixas usam `rounded-xl`/`rounded-2xl`. Não deixar
  mídia com canto reto no meio de blocos arredondados.
- **Animação de entrada**: envolver o bloco em `components/Reveal.tsx` (`delay` em ms).

## Armadilhas já pagas (não repetir)

1. **`text-dourado` / `text-bordo` (#b10736) é ilegível em fundo escuro.** Em fundo verde
   ou bordô use `text-dourado-claro` (#f0708a). Esse erro já voltou várias vezes.
2. **Tailwind resolve conflito pela ordem do CSS gerado, não pela ordem das classes no
   atributo.** `gap-2` numa constante base venceu `gap-0` no local de uso, e `w-fit`
   venceu `w-full`. Se duas classes mexem na mesma propriedade, remova uma — não
   confie na ordem em que você escreveu.
3. **`text-pretty` pode piorar a última linha**: ele evita a palavra órfã puxando a
   palavra anterior para baixo. Para título curto que ficou com linha final feia, use
   `text-balance`.
4. **Safari não recorta mídia pelo `overflow: hidden` do pai.** O `border-radius` do
   vídeo precisa estar também no elemento `<video>` (ver `EventVideoPlayer.tsx`).
5. **Grid de números em 3 colunas quebra no celular** — "1.300+" não cabe e invade a
   célula vizinha. Sempre `grid-cols-1 ... sm:grid-cols-3`.
6. **Expressão que não pode quebrar** (ex.: "Serra Fluminense", "Rio de Janeiro") vai
   dentro de `<span className="whitespace-nowrap">`.
7. **O wordmark "VINHOS NA SERRA" não é fonte** — é letreiramento vetorizado do manual
   da marca, já convertido em paths (`WordmarkVNS.tsx`). Não procurar fonte equivalente;
   as fontes reais da identidade (Didot e Big Caslon) são comerciais e estão
   substituídas por Bodoni Moda e Libre Caslon Text.

## Rotina de QA antes de publicar

```bash
npm run lint
npm run build
npm run start -- -p 4000     # o dev server não hidrata bem neste sandbox; valide no build
```

Para conferir visualmente, o Chromium do ambiente já está instalado — use
`playwright-core` **a partir da raiz do projeto** (senão o import não resolve):

```js
chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});
```

Checar sempre, em 320 / 390 / 768 / 1440:

- transbordo horizontal: `document.documentElement.scrollWidth - clientWidth` deve ser `0`
  em todas as rotas;
- quebras de linha de títulos alterados (palavra órfã, expressão partida ao meio);
- contraste de qualquer texto novo sobre fundo escuro (ver armadilha 1).

## Publicação

Commits vão para `main`; a Vercel publica a partir dela. Mensagem de commit em
português, no imperativo, descrevendo o efeito no site.
