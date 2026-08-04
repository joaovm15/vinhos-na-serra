/**
 * Folha de videira minimalista — extraída da mesma linguagem gráfica
 * dos padrões em /public/patterns. Usada como ornamento dos elementos
 * clicáveis, no lugar da seta genérica.
 */
export default function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M2.2 13.8C2.2 8 5.6 3.2 13.4 2.4c.8 7.4-3.6 11.2-11.2 11.4Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M13.4 2.4 4.6 11.2M8.4 4.6l1 3.2M6 7l.8 2.6"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
