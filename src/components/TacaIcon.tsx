export default function TacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="8" r="5" stroke="var(--color-off-white)" strokeWidth="1" fill="none" />
      <circle cx="12" cy="14" r="7" fill="var(--color-bordo)" />
    </svg>
  );
}
