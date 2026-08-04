/**
 * Camada de textura botânica das seções — a mesma linguagem visual da Hero.
 * Centraliza escala e opacidade para que nenhuma seção fique com uma
 * densidade de padrão diferente das outras.
 *
 * `tone` indica o FUNDO sobre o qual a textura vai ser aplicada:
 *   "dark"  → traço off-white, para fundos verdes/bordô
 *   "light" → traço verde, para fundos off-white
 */
export default function SectionTexture({
  tone = "dark",
  opacity,
  size = 480,
}: {
  tone?: "dark" | "light";
  opacity?: number;
  size?: number;
}) {
  // Fundos claros precisam de bem menos opacidade para o traço não pesar.
  const finalOpacity = opacity ?? (tone === "dark" ? 0.14 : 0.05);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `url(/patterns/vinha-textura-${tone}.svg)`,
        backgroundSize: `${size}px ${size}px`,
        backgroundRepeat: "repeat",
        opacity: finalOpacity,
      }}
    />
  );
}
