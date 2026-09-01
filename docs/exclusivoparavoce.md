# Página exclusiva pós-evento

Campanha para quem esteve no 4º Vinhos na Serra. O acesso é pelo **QR Code**
entregue no evento, apontando para:

```
https://vinhosnaserra.com.br/exclusivoparavoce
```

Não há link para ela em menu, header, rodapé, home ou qualquer outra página, e
ela está marcada como `noindex` — não entra no Google nem no sitemap. Também não
há login: quem descobrir a URL consegue abrir, e isso é aceitável nesta versão.

## Ligar e desligar

`src/lib/exclusivo.ts`:

```ts
export const EXCLUSIVO_PARA_VOCE_ENABLED = true;   // false → a rota devolve 404
```

Opcionalmente, dá para limitar a janela da campanha sem mexer na chave:

```ts
export const EXCLUSIVO_START_DATE = "2026-09-01T00:00:00-03:00";
export const EXCLUSIVO_END_DATE   = "2026-10-31T23:59:59-03:00";
```

As duas estão `null` — nenhuma data foi inventada. Com elas preenchidas, a página
só responde dentro do período. Depois de qualquer mudança, **refaça o deploy**: o
valor entra em tempo de build.

Desligada, a rota responde 404 e nenhuma outra página do site é afetada.

## Conteúdo

Todo o texto variável está em `src/lib/exclusivo.ts`: percentual do cashback,
prazo, os quatro passos, o aviso de frete e a mensagem que já vai escrita no
WhatsApp. O número de WhatsApp **não** fica aqui — vem de `src/lib/whatsapp.ts`,
o mesmo do resto do site.

## Estrutura dos arquivos

| Arquivo | Papel |
| --- | --- |
| `src/lib/exclusivo.ts` | chave de publicação, janela de datas e todos os textos |
| `src/app/exclusivoparavoce/page.tsx` | a página inteira |
| `src/components/exclusivo/IconePasso.tsx` | os quatro ícones das etapas |

A página reaproveita `Button`, `Reveal`, `SectionTexture`, `VineCorner`,
`ThreeTacaIcon` e `Patrocinadores`, e a foto vem de `public/images/adega/`.
Nenhuma dependência nova.
