export default function ThreeTacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 26" className={className} aria-hidden>
      {/* Os vinhos primeiro; os traços (aro, borda e reflexo) vêm por cima,
          como no manual da marca. */}
      <path d="M12 15h16a8 8 0 0 1-16 0Z" fill="var(--color-bordo)" />
      <circle cx="60" cy="15" r="8" fill="var(--color-bordo)" />
      <path d="M92 15h16a8 8 0 0 1-16 0Z" fill="var(--color-bordo)" />

      {/* esquerda: taça reta */}
      <line x1="12" y1="7" x2="28" y2="7" stroke="var(--color-off-white)" strokeWidth="1" />
      {/* centro: taça com aro — marca principal da identidade */}
      <circle cx="60" cy="9" r="6" stroke="var(--color-off-white)" strokeWidth="1" fill="none" />
      {/* direita: taça inclinada */}
      <line x1="92" y1="15" x2="106" y2="3" stroke="var(--color-off-white)" strokeWidth="1" />
    </svg>
  );
}
