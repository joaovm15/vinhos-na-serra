import Link from "next/link";

export const metadata = {
  title: "Carrinho | Vinhos da Serra",
};

export default function CarrinhoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-4 text-3xl font-light">Carrinho</h1>

      <div className="mb-16 flex gap-6 text-sm text-zinc-500">
        <span className="text-zinc-900 dark:text-zinc-50">Carrinho</span>
        <span>Entrega</span>
        <span>Pagamento</span>
        <span>Confirmação</span>
      </div>

      <div className="border-t border-zinc-200 py-16 text-center dark:border-zinc-800">
        <p className="text-zinc-500">Seu carrinho está vazio.</p>
        <Link
          href="/vinhos"
          className="mt-6 inline-block border border-zinc-900 px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black"
        >
          Ver vinhos
        </Link>
      </div>
    </div>
  );
}
