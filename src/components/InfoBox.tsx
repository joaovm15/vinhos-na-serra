/**
 * Caixa de informação — o tratamento usado nos blocos de pilares e de
 * dados. Cantos arredondados, contorno discreto e um preenchimento
 * levemente destacado da seção, na paleta da marca.
 *
 * `tone` indica o FUNDO sobre o qual a caixa vai ficar:
 *   "dark"  → seções verdes
 *   "bordo" → seções vermelhas, onde o rosé do rótulo não teria contraste
 *   "light" → seções off-white
 */
export default function InfoBox({
  label,
  children,
  tone = "dark",
  className = "",
}: {
  label: string;
  children?: React.ReactNode;
  tone?: "dark" | "bordo" | "light";
  className?: string;
}) {
  const caixa = {
    dark: "border-off-white/15 bg-off-white/[0.045] hover:border-off-white/30 hover:bg-off-white/[0.07]",
    bordo: "border-off-white/25 bg-off-white/[0.08] hover:border-off-white/45 hover:bg-off-white/[0.12]",
    light: "border-verde-serra/15 bg-verde-serra/[0.035] hover:border-verde-serra/30 hover:bg-verde-serra/[0.06]",
  }[tone];

  const corRotulo = {
    dark: "text-dourado-claro",
    bordo: "text-off-white",
    light: "text-dourado",
  }[tone];

  const corTexto = {
    dark: "text-areia/90",
    bordo: "text-areia",
    light: "text-verde-serra/80",
  }[tone];

  return (
    <div
      className={`h-full rounded-xl border p-6 transition-colors duration-300 ${caixa} ${className}`}
    >
      <p className={`font-serif text-xl ${corRotulo}`}>{label}</p>
      {children && (
        <p className={`mt-3 text-sm leading-relaxed ${corTexto}`}>{children}</p>
      )}
    </div>
  );
}
