const PHONE = "5554999990000";
const DEFAULT_MESSAGE = "Olá! Gostaria de saber mais sobre a Vinhos na Serra.";

export const WHATSAPP_DISPLAY = "+55 (54) 99999-0000";

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
