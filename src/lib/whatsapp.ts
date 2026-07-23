const PHONE = "5521996148671";
const DEFAULT_MESSAGE = "Olá! Gostaria de saber mais sobre a Vinhos na Serra.";

export const WHATSAPP_DISPLAY = "+55 (21) 99614-8671";

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
