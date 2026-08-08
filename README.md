# Vinhos na Serra

Site institucional da **Vinhos na Serra** — adega e confraria especializada em vinhos
brasileiros, em Teresópolis (RJ), e do evento anual de mesmo nome.

> A marca é tratada no **masculino**: "o Vinhos na Serra", "do Vinhos na Serra".

## Stack

| Item | Versão / observação |
| --- | --- |
| Next.js | 16 (App Router, sem `pages/`) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | v4 — tokens em `src/app/globals.css`, **sem `tailwind.config.js`** |
| Fontes | `next/font/google` — Bodoni Moda (títulos) + Libre Caslon Text (texto) |
| Deploy | Vercel, a partir da branch `main` |

Não há banco de dados, CMS nem API: todo o conteúdo é estático, escrito direto nos
componentes ou em `src/data/`.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm run start   # verificação final antes de publicar
```

## Estrutura

```
src/
  app/                 uma pasta por rota (App Router)
    layout.tsx         Header + Footer + botão de WhatsApp, fontes e metadata
    globals.css        tokens de cor, fonte e tipografia (Tailwind v4 @theme)
    icon.svg           favicon (monograma da marca)
    page.tsx           home
    nossa-historia/  confraria/  evento/  galeria/  contato/
    a-serra/  experiencias/      ← existem, mas não estão linkadas (ver docs/backlog.md)
  components/          componentes de UI e as marcas em SVG
  data/                listas de conteúdo (vinícolas, galeria, experiências)
  lib/                 constantes: endereço, WhatsApp, Instagram, link do Sympla
  hooks/               hooks de UI
public/
  images/              fotos por contexto (evento, adega, hero, patrocinadores)
  patterns/            texturas e ornamentos SVG da identidade
  videos/              vídeos das edições do evento
docs/                  documentação do projeto (comece por docs/README.md)
convite/               gerador do convite em PDF (não faz parte do site)
```

## Documentação

- [`AGENTS.md`](AGENTS.md) — convenções, armadilhas conhecidas e rotina de QA.
  **Leia antes de mexer no código.**
- [`docs/README.md`](docs/README.md) — índice da documentação.
- [`docs/backlog.md`](docs/backlog.md) — o que está pendente, incluindo as logos das
  patrocinadoras no rodapé.
- [`docs/assets.md`](docs/assets.md) — onde cada arquivo vai e em que formato.
- [`docs/identidade-visual.md`](docs/identidade-visual.md) — paleta, tipografia e as
  marcas em SVG.
