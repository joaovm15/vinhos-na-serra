# Verificação de idade

O site trata de bebida alcoólica, então a primeira coisa que o visitante vê é a
pergunta sobre a maioridade. Quem responde que é menor de 18 vê uma tela de
bloqueio e não acessa o conteúdo.

## Como funciona

| Resposta | O que acontece | Onde fica gravado |
| --- | --- | --- |
| 18 anos ou mais | entra no site e não é perguntado de novo neste navegador | `localStorage` |
| Menor de 18 | tela de bloqueio, sem botão de volta | `sessionStorage` |

O bloqueio ficar em `sessionStorage` é proposital: ele some ao fechar o
navegador, então um clique errado não deixa um cliente real trancado para
sempre. A confirmação de maioridade, essa sim, é lembrada.

Navegador com armazenamento desativado não trava: a pergunta simplesmente
reaparece a cada visita.

## Ligar e desligar

`src/lib/idade.ts`:

```ts
export const VERIFICACAO_IDADE_ENABLED = true;   // false → o site abre direto
export const IDADE_MINIMA = 18;
```

Todos os textos (pergunta, botões, tela de bloqueio e o aviso de moderação)
estão nesse mesmo arquivo.

Para forçar a pergunta de novo em quem já respondeu — por exemplo, se o texto
mudar —, basta subir a versão das chaves:

```ts
export const CHAVE_MAIOR = "vns:maioridade:v2";
```

## SEO

A verificação roda no navegador, depois da página carregada. O HTML servido
continua completo, com todo o conteúdo e a metadata — buscadores não veem o
bloqueio e a indexação não muda. Confirmado no build: a home servida continua
trazendo o texto das seções.

## Arquivos

| Arquivo | Papel |
| --- | --- |
| `src/lib/idade.ts` | chave de publicação, idade mínima e todos os textos |
| `src/components/VerificacaoIdade.tsx` | o diálogo e a tela de bloqueio |
| `src/app/layout.tsx` | monta o componente, valendo para todas as rotas |
