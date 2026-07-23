"use client";

import { FormEvent } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString().trim() ?? "";
    const email = form.get("email")?.toString().trim() ?? "";
    const message = form.get("message")?.toString().trim() ?? "";

    const text = [
      `Olá! Meu nome é ${name || "—"}.`,
      email && `Meu e-mail: ${email}.`,
      message,
    ]
      .filter(Boolean)
      .join("\n\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs tracking-[0.15em] text-verde-serra/60 uppercase">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
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
          required
          className="border-b border-verde-serra/25 bg-transparent py-2 text-verde-serra outline-none focus:border-dourado"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-fit rounded-[2px] bg-bordo px-8 py-3.5 text-xs tracking-[0.2em] text-off-white uppercase transition-colors hover:bg-carvao"
      >
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
