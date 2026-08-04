export default function TacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="11" r="5" fill="currentColor" />
      <line x1="12" y1="16" x2="12" y2="21" stroke="currentColor" strokeWidth="1.3" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
