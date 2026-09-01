# Verificação de idade

O site trata de bebida alcoólica, então a primeira coisa que o visitante vê é a
pergunta sobre a maioridade — **em todas as rotas, a cada visita**. Quem responde
que é menor de 18 vê uma tela de bloqueio e não acessa o conteúdo.

## Como funciona

| Resposta | O que acontece | Até quando vale |
| --- | --- | --- |
| 18 anos ou mais | entra e navega o site inteiro sem ser perguntado de novo | até fechar o navegador |
| Menor de 18 | tela de bloqueio, sem botão de volta | até fechar o navegador |

A resposta fica em `sessionStorage`, que o navegador apaga ao fechar. É por isso
que a pergunta reaparece a cada nova visita — e é por isso também que um clique
errado em "sou menor" não deixa ninguém trancado para sempre.

Navegador com armazenamento desativado não trava: a pergunta simplesmente
reaparece a cada página.

## Por que não pisca

O bloco vem **no HTML servido**, e não só depois que o JavaScript carrega. Um
script curto no `<head>` (`SCRIPT_IDADE`) roda antes da primeira pintura: se a
pessoa já respondeu nesta sessão, ele marca `data-idade="liberado"` no `<html>`
e o CSS esconde o bloco na hora.

O mesmo atributo controla a rolagem: enquanto não houver resposta, o CSS trava o
`overflow` do `body`. Ou seja, mesmo antes de o React entrar em cena o conteúdo
já está coberto e sem rolagem — e quem já respondeu não vê a tela verde piscar.

## Ligar e desligar

`src/lib/idade.ts`:

```ts
export const VERIFICACAO_IDADE_ENABLED = true;   // false → o site abre direto
export const IDADE_MINIMA = 18;
```

Todos os textos (pergunta, botões, tela de bloqueio e o aviso de moderação)
estão nesse mesmo arquivo.

Para forçar a pergunta de novo em quem já respondeu — por exemplo, se o texto
mudar —, suba a versão da chave:

```ts
export const CHAVE_RESPOSTA = "vns:idade:v3";
```

**Se um dia quiserem que o site lembre a resposta por mais tempo** (e pergunte só
uma vez por navegador, não por visita), troque `sessionStorage` por
`localStorage` em dois lugares: no `SCRIPT_IDADE` e na função `lerResposta` do
componente.

## SEO

O HTML servido continua completo, com todo o conteúdo e a metadata — o bloco é
apenas um elemento a mais, sobreposto. Conferido no build: a home entregue segue
trazendo o texto das seções.

## Arquivos

| Arquivo | Papel |
| --- | --- |
| `src/lib/idade.ts` | chave de publicação, idade mínima, textos e o script do `<head>` |
| `src/components/VerificacaoIdade.tsx` | o diálogo e a tela de bloqueio |
| `src/app/layout.tsx` | injeta o script e monta o componente em todas as rotas |
| `src/app/globals.css` | as duas regras ligadas ao atributo `data-idade` |
