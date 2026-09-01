/**
 * Ícones das etapas da página exclusiva.
 *
 * Traço fino e desenho geométrico, na mesma linguagem das marcas da
 * identidade (`LeafMark`, `TacaIcon`) — nada de biblioteca de ícones, que
 * traria um estilo estranho ao site.
 */
type Nome = "garrafa" | "conversa" | "retorno" | "brinde" | "caminhao";

const TRACO = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function IconePasso({ nome, className = "" }: { nome: Nome; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {desenhos[nome]}
    </svg>
  );
}

const desenhos: Record<Nome, React.ReactElement> = {
  /* Garrafa de vinho */
  garrafa: (
    <g {...TRACO}>
      <path d="M10.4 3h3.2v3.4c0 .9.3 1.3.9 2 .8.9 1.2 1.7 1.2 2.9V19a2 2 0 0 1-2 2h-3.4a2 2 0 0 1-2-2v-7.7c0-1.2.4-2 1.2-2.9.6-.7.9-1.1.9-2Z" />
      <path d="M8.3 12.6h7.4" />
    </g>
  ),
  /* Balão de conversa — o pedido é fechado no WhatsApp */
  conversa: (
    <g {...TRACO}>
      <path d="M4 11.4c0-3.6 3.6-6.4 8-6.4s8 2.8 8 6.4-3.6 6.4-8 6.4c-.9 0-1.8-.1-2.6-.3L5 19.4l1.2-3A5.9 5.9 0 0 1 4 11.4Z" />
      <path d="M9 10.6h6M9 13.2h4" />
    </g>
  ),
  /* Crédito que volta — seta circular */
  retorno: (
    <g {...TRACO}>
      <path d="M19.4 12a7.4 7.4 0 1 1-2.2-5.2" />
      <path d="M17.6 3.6v3.4h-3.4" />
      <path d="M12 8.9v6.2M13.9 10.2h-2.6a1.4 1.4 0 0 0 0 2.8h1.4a1.4 1.4 0 0 1 0 2.8H10" />
    </g>
  ),
  /* Caminhão de entrega */
  caminhao: (
    <g {...TRACO}>
      <path d="M2.6 6.4h10.6v9.5H2.6z" />
      <path d="M13.2 9.4h3.9l3.3 3.3v3.2h-7.2z" />
      <circle cx="7.4" cy="17.9" r="1.9" />
      <circle cx="16.6" cy="17.9" r="1.9" />
      <path d="M9.3 15.9h5.4M2.6 15.9h2.9M18.5 15.9h1.9" />
    </g>
  ),
  /* Duas taças em brinde */
  brinde: (
    <g {...TRACO}>
      <path d="M4.6 4.2h5.2l-.7 4.3a2 2 0 0 1-4 0L4.6 4.2Z" />
      <path d="M7.1 10.6V19M5 19.4h4.2" />
      <path d="M14.2 4.2h5.2l-.7 4.3a2 2 0 0 1-4 0l-.5-4.3Z" />
      <path d="M16.7 10.6V19M14.6 19.4h4.2" />
    </g>
  ),
};
