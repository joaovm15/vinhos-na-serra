/**
 * Verificação de idade — o site trata de bebida alcoólica, então a primeira
 * coisa que o visitante vê é a pergunta sobre a maioridade.
 *
 * Como funciona:
 *   - quem confirma 18 anos ou mais fica registrado em `localStorage` e não é
 *     perguntado de novo neste navegador;
 *   - quem responde que é menor vê a tela de bloqueio; a resposta fica em
 *     `sessionStorage`, então some ao fechar o navegador — um clique errado não
 *     bloqueia a pessoa para sempre.
 *
 * A verificação é feita no navegador, depois da página carregada: o conteúdo
 * continua servido normalmente para buscadores, e o SEO não muda.
 */
export const VERIFICACAO_IDADE_ENABLED = true;

export const IDADE_MINIMA = 18;

/** Chaves de armazenamento. Trocar a versão no fim força a pergunta de novo. */
export const CHAVE_MAIOR = "vns:maioridade:v1";
export const CHAVE_BLOQUEIO = "vns:bloqueio-idade:v1";

export const TEXTO_PERGUNTA = {
  rotulo: "Antes de entrar",
  titulo: `Você tem ${IDADE_MINIMA} anos ou mais?`,
  texto:
    "Este site apresenta conteúdo sobre vinhos e bebidas alcoólicas. Confirme sua idade para continuar.",
  sim: `Sim, tenho ${IDADE_MINIMA} anos ou mais`,
  nao: `Não, sou menor de ${IDADE_MINIMA}`,
  aviso: `Aprecie com moderação. Venda proibida para menores de ${IDADE_MINIMA} anos.`,
};

export const TEXTO_BLOQUEIO = {
  rotulo: "Acesso restrito",
  titulo: "Volte quando completar a maioridade.",
  texto: `Este conteúdo é destinado a maiores de ${IDADE_MINIMA} anos. A venda e o consumo de bebidas alcoólicas são proibidos para menores de idade no Brasil.`,
  aviso: "Aprecie com moderação.",
};
