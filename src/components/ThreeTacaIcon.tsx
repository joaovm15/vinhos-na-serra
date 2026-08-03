export default function ThreeTacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* esquerda: taça achatada */}
      <line x1="8" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1" />
      <path d="M8 15h16a8 8 0 0 1-16 0Z" fill="currentColor" />

      {/* centro: taça com aro */}
      <circle cx="60" cy="12" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="16" r="7" fill="currentColor" />

      {/* direita: taça inclinada */}
      <line x1="104" y1="6" x2="90" y2="18" stroke="currentColor" strokeWidth="1" />
      <path d="M84 15h16a8 8 0 0 1-16 0Z" fill="currentColor" />
    </svg>
  );
}
