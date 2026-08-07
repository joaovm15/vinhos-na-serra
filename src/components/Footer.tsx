import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";
import { INSTAGRAM_URL } from "@/lib/social";
import { ADDRESS } from "@/lib/address";
import ThreeTacaIcon from "@/components/ThreeTacaIcon";
import WordmarkVNS from "@/components/WordmarkVNS";
import SectionTexture from "@/components/SectionTexture";
import { CLICAVEL_CONTORNO } from "@/components/Button";

function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const className = `${CLICAVEL_CONTORNO} w-fit border-areia/30 text-areia hover:border-off-white hover:bg-off-white/10 hover:text-off-white`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-verde-profundo text-areia">
      <SectionTexture tone="dark" opacity={0.06} />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-xs">
          {/* mesmo lockup da Hero, em escala reduzida */}
          <div className="flex flex-col items-start">
            <ThreeTacaIcon className="h-auto w-28 text-off-white" />
            <WordmarkVNS className="mt-3 h-auto w-full max-w-[15rem] text-off-white" />
            <p className="mt-2 text-[0.6rem] tracking-[0.25em] text-areia/60 uppercase">
              Adega e Confraria
            </p>
          </div>
          <p className="mt-4 text-sm text-areia/80">
            Da Serra para a taça — uma experiência construída entre a terra, o tempo e a paixão
            pelo vinho brasileiro.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-sm tracking-widest text-dourado-claro uppercase">Navegue</span>
            <FooterLink href="/nossa-historia">Nossa História</FooterLink>
            <FooterLink href="/confraria">Confraria</FooterLink>
            <FooterLink href="/evento">Evento</FooterLink>
            <FooterLink href="/galeria">Galeria</FooterLink>
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
      <div className="relative border-t border-off-white/10 px-6 py-6 text-center text-xs text-areia/60">
        © {new Date().getFullYear()} Vinhos na Serra. Todos os direitos reservados.
      </div>
    </footer>
  );
}
