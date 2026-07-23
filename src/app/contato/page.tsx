import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/social";
import { ADDRESS } from "@/lib/address";

export const metadata = {
  title: "Contato | Vinhos na Serra",
};

export default function ContatoPage() {
  return (
    <div className="bg-off-white px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] text-dourado uppercase">Contato</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">Fale com a gente.</h1>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs tracking-[0.15em] text-verde-serra/60 uppercase">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border-b border-verde-serra/25 bg-transparent py-2 text-verde-serra outline-none focus:border-dourado"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs tracking-[0.15em] text-verde-serra/60 uppercase">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border-b border-verde-serra/25 bg-transparent py-2 text-verde-serra outline-none focus:border-dourado"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs tracking-[0.15em] text-verde-serra/60 uppercase">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border-b border-verde-serra/25 bg-transparent py-2 text-verde-serra outline-none focus:border-dourado"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-fit rounded-[2px] bg-bordo px-8 py-3.5 text-xs tracking-[0.2em] text-off-white uppercase transition-colors hover:bg-carvao"
          >
            Enviar
          </button>
        </form>

        <div className="space-y-8 text-verde-serra/80">
          <div>
            <p className="text-xs tracking-[0.15em] text-dourado uppercase">Endereço</p>
            <p className="mt-1">{ADDRESS}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] text-dourado uppercase">WhatsApp</p>
            <p className="mt-1">{WHATSAPP_DISPLAY}</p>
            <Button href={whatsappUrl()} variant="editorial" tone="bordo" className="mt-2">
              Falar no WhatsApp
            </Button>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] text-dourado uppercase">Redes sociais</p>
            <Button href={INSTAGRAM_URL} variant="editorial" tone="verde-serra" className="mt-1">
              {INSTAGRAM_HANDLE}
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
