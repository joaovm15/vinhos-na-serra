import Link from "next/link";
import LeafMark from "@/components/LeafMark";

type Variant = "primary" | "secondary" | "editorial";
type Tone = "bordo" | "dourado" | "verde-serra" | "off-white";

/* ——— Linguagem compartilhada por TODOS os elementos clicáveis do site ———
   mesma tipografia, mesmo tracking, mesmo raio, mesma duração de animação.
   Header, Footer, CTAs e formulário derivam daqui. */
/* Sem `gap` aqui de propósito: o espaçamento do ornamento é feito por
   margem dentro do próprio wrapper que colapsa, para que a pílula em
   repouso acompanhe exatamente a largura do texto. */
export const CLICAVEL_BASE =
  "group inline-flex w-fit items-center justify-center rounded-full text-xs tracking-[0.18em] uppercase transition-all duration-300 ease-out";

/** Preenchimento sólido — ação principal. */
export const CLICAVEL_SOLIDO = `${CLICAVEL_BASE} bg-bordo px-7 py-3 text-off-white hover:bg-verde-profundo active:scale-[0.98]`;

/** Contorno — navegação e ações secundárias (header, footer, menu). */
export const CLICAVEL_CONTORNO = `${CLICAVEL_BASE} border px-4 py-1.5 active:scale-[0.98]`;

const outlineToneClasses: Record<Tone, string> = {
  bordo: "border-bordo/40 text-bordo hover:border-bordo hover:bg-bordo/[0.06]",
  dourado: "border-dourado-claro/45 text-dourado-claro hover:border-dourado-claro hover:bg-dourado-claro/10",
  "verde-serra": "border-verde-serra/30 text-verde-serra hover:border-verde-serra hover:bg-verde-serra/[0.06]",
  "off-white": "border-off-white/30 text-off-white hover:border-off-white hover:bg-off-white/10",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "editorial",
  tone = "bordo",
  className = "",
}: Props) {
  const external = href.startsWith("http");
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  /* Botão editorial — o CTA padrão do site. Pílula contornada, na mesma
     linguagem do header e do rodapé. Em repouso a pílula acompanha exatamente
     a largura do texto; no hover ela se expande para acolher a folha de
     videira da marca, que entra deslizando. */
  if (variant === "editorial") {
    return (
      <Link
        href={href}
        className={`${CLICAVEL_CONTORNO} px-6 py-2.5 ${outlineToneClasses[tone]} ${className}`}
        {...externalProps}
      >
        <span>{children}</span>
        <span
          aria-hidden
          className="inline-flex max-w-0 items-center overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-w-5 group-hover:opacity-100"
        >
          <LeafMark className="ml-2 h-3 w-3 shrink-0" />
        </span>
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`${CLICAVEL_CONTORNO} px-7 py-3 ${outlineToneClasses[tone]} ${className}`}
        {...externalProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${CLICAVEL_SOLIDO} ${className}`} {...externalProps}>
      {children}
    </Link>
  );
}
