/**
 * Monograma V\S da marca — as siglas de "Vinhos na Serra".
 * Traço leve, com a diagonal longa atravessando as duas letras,
 * como no manual da identidade.
 */
export default function MonogramaVS({
  className = "",
  strokeWidth = 2.6,
}: {
  className?: string;
  /** O SVG escala junto com a caixa, então em usos grandes vale reduzir
      para o traço não engrossar. */
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 86"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="Vinhos na Serra"
    >
      {/* V */}
      <path d="M1.4 19.3 19.3 67.8 37.9 17.9" />
      {/* diagonal longa */}
      <path d="M28.6 2.1 85.7 83.6" />
      {/* S */}
      <path d="M95 26.5C95 19.5 88.5 15.5 81 15.5C73 15.5 68 20 68 26.5C68 32.5 72.5 36 81 39.5C89.5 43 95.5 46.5 95.5 53.5C95.5 61 89 66.5 80.5 66.5C72 66.5 67 61.5 67 55" />
    </svg>
  );
}
