/**
 * Verificação de idade — o site trata de bebida alcoólica, então a primeira
 * coisa que o visitante vê é a pergunta sobre a maioridade.
 *
 * Como funciona:
 *   - a pergunta aparece **a cada visita**: a resposta fica em `sessionStorage`,
 *     que o navegador apaga ao fechar. Quem confirma navega o site inteiro sem
 *     ser perguntado de novo, mas na próxima visita responde outra vez;
 *   - quem responde que é menor vê a tela de bloqueio, também pelo resto da
 *     sessão.
 *
 * O bloco é renderizado já no HTML e um script no `<head>` decide, antes da
 * primeira pintura, se ele deve sumir — assim não há piscada de conteúdo antes
 * da pergunta. Os buscadores continuam recebendo a página completa.
 */
export const VERIFICACAO_IDADE_ENABLED = true;

export const IDADE_MINIMA = 18;

/**
 * Chave única, em `sessionStorage`. Trocar a versão no fim força a pergunta de
 * novo para todo mundo — útil se o texto mudar.
 *
 * Se um dia quiserem que o site lembre a resposta por mais tempo, basta trocar
 * `sessionStorage` por `localStorage` no script do layout e no componente.
 */
export const CHAVE_RESPOSTA = "vns:idade:v2";
export const RESPOSTA_MAIOR = "maior";
export const RESPOSTA_MENOR = "menor";

/** Atributo no `<html>` que o script do `<head>` usa para esconder o bloco. */
export const ATRIBUTO_HTML = "data-idade";

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

/**
 * Script que roda no `<head>`, antes da página ser pintada: se a pessoa já
 * respondeu nesta sessão, marca o `<html>` e o CSS esconde o bloco na hora.
 * Sem isso, quem já confirmou veria a tela verde piscar a cada carregamento.
 */
export const SCRIPT_IDADE = `(function(){try{var r=sessionStorage.getItem('${CHAVE_RESPOSTA}');if(r==='${RESPOSTA_MAIOR}'){document.documentElement.setAttribute('${ATRIBUTO_HTML}','liberado')}else if(r==='${RESPOSTA_MENOR}'){document.documentElement.setAttribute('${ATRIBUTO_HTML}','bloqueado')}}catch(e){}})();`;
