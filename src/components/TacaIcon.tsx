export default function TacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {/* O aro vem por cima do vinho, como no manual da marca. */}
      <circle cx="12" cy="14" r="7" fill="var(--color-bordo)" />
      <circle cx="12" cy="8" r="5" stroke="var(--color-off-white)" strokeWidth="1" fill="none" />
    </svg>
  );
}
