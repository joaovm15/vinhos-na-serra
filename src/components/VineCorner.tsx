import Image from "next/image";

const POSITION_CLASSES = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0 -scale-x-100",
  "bottom-left": "bottom-0 left-0 -scale-y-100",
  "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100",
} as const;

export default function VineCorner({
  position,
  tone = "dark",
  opacity = 0.12,
  className = "",
}: {
  position: keyof typeof POSITION_CLASSES;
  tone?: "dark" | "light";
  opacity?: number;
  className?: string;
}) {
  return (
    <Image
      src={`/patterns/vinha-canto-${tone}.svg`}
      alt=""
      aria-hidden
      width={260}
      height={230}
      className={`pointer-events-none absolute h-auto w-40 sm:w-56 md:w-64 ${POSITION_CLASSES[position]} ${className}`}
      style={{ opacity }}
    />
  );
}
