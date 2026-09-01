/**
 * Página exclusiva de pós-evento — `/exclusivoparavoce`.
 *
 * Acessada pelo QR Code entregue no 4º Vinhos na Serra. Não é linkada por
 * menu, rodapé, home ou qualquer outra página, e está marcada como `noindex`.
 * Quem tiver a URL consegue abrir: não há login, e é assim de propósito.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  EXCLUSIVO_PARA_VOCE_ENABLED = true   →  a promoção está no ar       │
 * │  EXCLUSIVO_PARA_VOCE_ENABLED = false  →  a rota devolve 404          │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Trocar a chave e refazer o deploy: o valor entra em tempo de build.
 */
export const EXCLUSIVO_PARA_VOCE_ENABLED = true;

/**
 * Janela da promoção. Ficam nulas até alguém definir as datas de verdade —
 * nada aqui é inventado. Preencha no formato ISO com fuso, por exemplo
 * `"2026-09-01T00:00:00-03:00"`, e a página passa a respeitar o período.
 * Com as duas nulas, vale apenas a chave acima.
 */
export const EXCLUSIVO_START_DATE: string | null = null;
export const EXCLUSIVO_END_DATE: string | null = null;

/** A promoção está disponível agora? Considera a chave e, se houver, as datas. */
export function exclusivoDisponivel(agora: Date = new Date()): boolean {
  if (!EXCLUSIVO_PARA_VOCE_ENABLED) return false;
  if (EXCLUSIVO_START_DATE && agora < new Date(EXCLUSIVO_START_DATE)) return false;
  if (EXCLUSIVO_END_DATE && agora > new Date(EXCLUSIVO_END_DATE)) return false;
  return true;
}

/** Condição oferecida a quem esteve no evento. */
export const CASHBACK = "20%";
export const PRAZO = "60 dias";

/** Como o crédito pode ser usado, e um exemplo em números. */
export const REGRA_CASHBACK =
  "Seu crédito vale em compras a partir do dobro do valor recebido.";
export const EXEMPLO_CASHBACK =
  "Exemplo: R$ 100 de cashback → compras a partir de R$ 200.";

/** Texto que já vai escrito na conversa do WhatsApp. */
export const MENSAGEM_WHATSAPP =
  "Olá! Eu fui ao 4º Vinhos na Serra e quero continuar minha experiência. 🍷";

export const PASSOS = [
  {
    titulo: "Escolha seus vinhos",
    texto: "Fale com nossa equipe pelo WhatsApp e descubra os rótulos disponíveis.",
    icone: "garrafa",
  },
  {
    titulo: "Faça sua compra",
    texto: "Seu pedido será registrado através do nosso WhatsApp.",
    icone: "conversa",
  },
  {
    titulo: "Ganhe 20% de cashback",
    texto: "O valor será convertido em crédito para sua próxima compra.",
    icone: "retorno",
  },
  {
    titulo: "Aproveite novamente",
    texto: "Use seu cashback dentro do prazo de 60 dias.",
    icone: "brinde",
  },
] as const;

export const FRETE = {
  titulo: "Frete",
  destaque: "Frete grátis para Teresópolis.",
  complemento: "Para outras localidades, consulte nossa equipe.",
};
