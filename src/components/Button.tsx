import Link from "next/link";

type Variant = "primary" | "secondary" | "editorial";
type Tone = "bordo" | "dourado" | "verde-serra" | "off-white";

const toneClasses: Record<Tone, string> = {
  bordo: "text-bordo border-bordo/70 hover:text-dourado hover:border-dourado",
  dourado: "text-dourado-claro border-dourado-claro/60 hover:border-dourado-claro",
  "verde-serra": "text-verde-serra border-verde-serra/40 hover:text-dourado hover:border-dourado",
  "off-white": "text-off-white border-off-white/40 hover:border-off-white",
};

const base = "inline-flex items-center justify-center text-sm tracking-[0.2em] uppercase transition-colors";

const variantClasses: Record<Variant, string> = {
  primary: `${base} rounded-[2px] bg-bordo px-8 py-3.5 text-off-white hover:bg-carvao`,
  secondary: `${base} rounded-[2px] border border-dourado px-8 py-3.5 hover:bg-dourado/10`,
  editorial: `${base} group gap-1 border-b pb-1`,
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
};

export default function Button({ href, children, variant = "editorial", tone = "bordo", className = "" }: Props) {
  const external = href.startsWith("http");
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (variant === "editorial") {
    return (
      <Link href={href} className={`${variantClasses.editorial} ${toneClasses[tone]} ${className}`} {...externalProps}>
        <span>{children}</span>
        <span
          aria-hidden
          className="inline-block max-w-0 -translate-x-1 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-w-[1em] group-hover:translate-x-0 group-hover:opacity-100"
        >
          →
        </span>
      </Link>
    );
  }

  const toneText = variant === "secondary" ? toneClasses[tone].split(" ")[0] : "";

  return (
    <Link href={href} className={`${variantClasses[variant]} ${toneText} ${className}`} {...externalProps}>
      {children}
    </Link>
  );
}
