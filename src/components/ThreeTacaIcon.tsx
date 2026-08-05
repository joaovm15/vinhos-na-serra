/**
 * As três taças da marca, com as proporções medidas sobre o logo oficial:
 * taças de raio 8 e centros espaçados em 35 (≈2,2× a largura da taça);
 * o traço da esquerda ocupa ~71% da largura da taça e flutua ~1,07 raio
 * acima dela; o aro do centro tem ~72% do diâmetro e sobe ~0,76 raio.
 * Os vinhos são desenhados primeiro e os traços por cima. A espessura
 * do traço (0,4 em raio 8) também vem do logo: ~4% do raio.
 */
export default function ThreeTacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 3 87 20" className={className} aria-hidden>
      {/* vinhos */}
      <path d="M0 15h16a8 8 0 0 1-16 0Z" fill="var(--color-bordo)" />
      <circle cx="43" cy="15" r="8" fill="var(--color-bordo)" />
      <path d="M70 15h16a8 8 0 0 1-16 0Z" fill="var(--color-bordo)" />

      {/* traços, por cima */}
      <line x1="2.3" y1="6.4" x2="13.7" y2="6.4" stroke="var(--color-off-white)" strokeWidth="0.4" />
      <circle cx="43" cy="8.9" r="5.8" fill="none" stroke="var(--color-off-white)" strokeWidth="0.4" />
      <line x1="81" y1="3.5" x2="86.7" y2="14" stroke="var(--color-off-white)" strokeWidth="0.4" />
    </svg>
  );
}
