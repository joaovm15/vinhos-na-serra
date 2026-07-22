import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-carvao text-areia">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="font-serif text-2xl text-off-white">Vinhos na Serra</p>
          <p className="mt-3 text-sm text-areia/80">
            Da Serra para a taça — uma experiência construída entre a terra, o tempo e a paixão
            pelo vinho brasileiro.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-widest text-dourado uppercase">Navegue</span>
            <Link href="/nossa-historia" className="transition-colors hover:text-dourado">Nossa História</Link>
            <Link href="/a-serra" className="transition-colors hover:text-dourado">A Serra</Link>
            <Link href="/vinhos" className="transition-colors hover:text-dourado">Nossos Vinhos</Link>
            <Link href="/experiencias" className="transition-colors hover:text-dourado">Experiências</Link>
            <Link href="/confraria" className="transition-colors hover:text-dourado">Confraria</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-widest text-dourado uppercase">Contato</span>
            <Link href="/contato" className="transition-colors hover:text-dourado">Fale conosco</Link>
            <a href="#" className="transition-colors hover:text-dourado">WhatsApp</a>
            <a href="#" className="transition-colors hover:text-dourado">Instagram</a>
            <a href="#" className="transition-colors hover:text-dourado">E-mail</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-widest text-dourado uppercase">Endereço</span>
            <p className="max-w-[16rem] text-areia/80">Estrada da Serra, km 12 — Serra Gaúcha, RS</p>
          </div>
        </div>
      </div>
      <div className="border-t border-off-white/10 px-6 py-6 text-center text-xs text-areia/60">
        © {new Date().getFullYear()} Vinhos na Serra. Todos os direitos reservados.
      </div>
    </footer>
  );
}
