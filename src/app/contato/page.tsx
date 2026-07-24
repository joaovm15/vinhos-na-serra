import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
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
        <p className="text-sm tracking-[0.3em] text-dourado uppercase">Contato</p>
        <h1 className="text-h1 mt-4 font-serif text-verde-serra">Fale com a gente.</h1>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-8 text-verde-serra/80">
          <div>
            <p className="text-sm tracking-[0.15em] text-dourado uppercase">Endereço</p>
            <p className="mt-1">{ADDRESS}</p>
          </div>
          <div>
            <p className="text-sm tracking-[0.15em] text-dourado uppercase">WhatsApp</p>
            <p className="mt-1">{WHATSAPP_DISPLAY}</p>
            <Button href={whatsappUrl()} variant="editorial" tone="bordo" className="mt-2">
              Falar no WhatsApp
            </Button>
          </div>
          <div>
            <p className="text-sm tracking-[0.15em] text-dourado uppercase">Redes sociais</p>
            <Button href={INSTAGRAM_URL} variant="editorial" tone="verde-serra" className="mt-1">
              {INSTAGRAM_HANDLE}
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
