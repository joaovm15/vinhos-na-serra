export default function TacaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M6 4h12a6 6 0 0 1-12 0Z" fill="currentColor" />
      <line x1="12" y1="4" x2="12" y2="19" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
