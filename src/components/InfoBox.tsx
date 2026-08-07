/**
 * Caixa de informação sobre fundo escuro — o tratamento usado nos blocos
 * de pilares e de dados. Cantos arredondados, contorno discreto e um
 * preenchimento levemente mais claro que a seção, na paleta da marca.
 */
export default function InfoBox({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-full rounded-xl border border-off-white/15 bg-off-white/[0.045] p-6 transition-colors duration-300 hover:border-off-white/30 hover:bg-off-white/[0.07] ${className}`}
    >
      <p className="font-serif text-xl text-dourado-claro">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-areia/90">{children}</p>
    </div>
  );
}
