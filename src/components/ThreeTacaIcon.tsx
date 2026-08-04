export default function ThreeTacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* esquerda: taça com aro reto */}
      <line x1="8" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1" />
      <path d="M8 13h16a8 8 0 0 1-16 0Z" fill="currentColor" />

      {/* centro: taça com aro circular */}
      <circle cx="60" cy="12" r="4" stroke="currentColor" strokeWidth="1" />
      <path d="M52 13h16a8 8 0 0 1-16 0Z" fill="currentColor" />

      {/* direita: taça com reflexo inclinado */}
      <line x1="100" y1="8" x2="108" y2="13" stroke="currentColor" strokeWidth="1" />
      <path d="M96 13h16a8 8 0 0 1-16 0Z" fill="currentColor" />
    </svg>
  );
}
