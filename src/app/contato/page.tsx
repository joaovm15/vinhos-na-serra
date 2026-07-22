export const metadata = {
  title: "Contato | Vinhos da Serra",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-16 text-3xl font-light">Contato</h1>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-zinc-500">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              className="border-b border-zinc-300 bg-transparent py-2 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-zinc-500">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border-b border-zinc-300 bg-transparent py-2 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-zinc-500">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border-b border-zinc-300 bg-transparent py-2 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:focus:border-zinc-50"
            />
          </div>
          <button
            type="submit"
            className="mt-4 self-start border border-zinc-900 px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-black"
          >
            Enviar
          </button>
        </form>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
          <div>
            <p className="text-sm text-zinc-500">Endereço</p>
            <p className="mt-1">Estrada da Serra, km 12 — Serra Gaúcha, RS</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">WhatsApp</p>
            <p className="mt-1">+55 (54) 99999-0000</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">Redes sociais</p>
            <p className="mt-1">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
