import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-wide">Vinhos da Serra</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-500">
            Vinhos que carregam a altitude, o clima e a história da serra em cada garrafa.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">Navegue</span>
            <Link href="/vinhos" className="text-zinc-600 dark:text-zinc-400">Vinhos</Link>
            <Link href="/a-serra" className="text-zinc-600 dark:text-zinc-400">A Serra</Link>
            <Link href="/nossa-historia" className="text-zinc-600 dark:text-zinc-400">Nossa História</Link>
            <Link href="/confraria" className="text-zinc-600 dark:text-zinc-400">Confraria</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">Contato</span>
            <Link href="/contato" className="text-zinc-600 dark:text-zinc-400">Fale conosco</Link>
            <a href="#" className="text-zinc-600 dark:text-zinc-400">Instagram</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-6 py-6 text-center text-xs text-zinc-400 dark:border-zinc-800">
        © {new Date().getFullYear()} Vinhos da Serra. Todos os direitos reservados.
      </div>
    </footer>
  );
}
