import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";
import { INSTAGRAM_URL } from "@/lib/social";
import { ADDRESS } from "@/lib/address";
import TacaIcon from "@/components/TacaIcon";

function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const className = "group relative inline-block w-fit py-0.5 transition-colors hover:text-dourado-claro";
  const underline = (
    <span className="absolute bottom-0 left-0 h-px w-0 bg-dourado-claro transition-all duration-300 ease-out group-hover:w-full" />
  );

  if (external) {
    return (
      <a href={href} className={className}>
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {underline}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-carvao text-areia">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="flex items-center gap-2.5 text-off-white">
            <TacaIcon className="h-4 w-4 text-bordo" />
            <span className="font-serif text-2xl">Vinhos na Serra</span>
          </p>
          <p className="mt-1 pl-[1.65rem] text-[0.6rem] tracking-[0.25em] text-areia/60 uppercase">
            Adega e Confraria
          </p>
          <p className="mt-4 text-sm text-areia/80">
            Da Serra para a taça — uma experiência construída entre a terra, o tempo e a paixão
            pelo vinho brasileiro.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-sm tracking-widest text-dourado-claro uppercase">Navegue</span>
            <FooterLink href="/nossa-historia">Nossa História</FooterLink>
            <FooterLink href="/a-serra">A Serra</FooterLink>
            <FooterLink href="/experiencias">Experiências</FooterLink>
            <FooterLink href="/confraria">Confraria</FooterLink>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm tracking-widest text-dourado-claro uppercase">Contato</span>
            <FooterLink href="/contato">Fale conosco</FooterLink>
            <FooterLink href={whatsappUrl()} external>WhatsApp</FooterLink>
            <FooterLink href={INSTAGRAM_URL} external>Instagram</FooterLink>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm tracking-widest text-dourado-claro uppercase">Endereço</span>
            <p className="max-w-[16rem] text-areia/80">{ADDRESS}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-off-white/10 px-6 py-6 text-center text-xs text-areia/60">
        © {new Date().getFullYear()} Vinhos na Serra. Todos os direitos reservados.
      </div>
    </footer>
  );
}
