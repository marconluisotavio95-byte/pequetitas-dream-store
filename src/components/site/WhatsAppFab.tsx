import { MessageCircle } from "lucide-react";
import { LOJA, whatsLink } from "@/lib/loja";

export function WhatsAppFab() {
  return (
    <a
      href={whatsLink(
        `Olá! Vim pelo site da ${LOJA.nome} e gostaria de saber mais sobre as peças, tamanhos e preços.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Pequetitas no WhatsApp"
      className="btn-base btn-whats fixed bottom-5 right-5 z-50 h-14 w-14 !px-0 shadow-soft md:h-auto md:w-auto md:!px-6"
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="hidden md:inline">Fale conosco</span>
    </a>
  );
}
