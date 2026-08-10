import { Clock, MapPin, Phone } from "lucide-react";
import { LOJA, whatsLink } from "@/lib/loja";

export function Location() {
  return (
    <section id="localizacao" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Onde estamos</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Visite nossa loja</h2>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="min-w-0 text-muted-foreground">
                {LOJA.endereco}
                <br />
                {LOJA.cidade}
              </p>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="min-w-0 text-muted-foreground">
                Segunda a sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="min-w-0 text-muted-foreground">{LOJA.telefone}</p>
            </li>
          </ul>

          <a
            className="btn-base btn-whats mt-8"
            href={whatsLink(`Olá, ${LOJA.nome}! Gostaria de saber como chegar até a loja.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border/70 shadow-soft">
          <iframe
            title="Mapa da localização da Pequetitas Moda Menina"
            src="https://www.google.com/maps?q=Av.%20das%20Ac%C3%A1cias%2C%20608%20W%2C%20Bandeirantes%2C%20Lucas%20do%20Rio%20Verde%20-%20MT%2C%2078460-518&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full border-0 md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
