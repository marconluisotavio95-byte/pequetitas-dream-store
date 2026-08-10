import { Instagram, MessageCircle } from "lucide-react";
import { LOJA, whatsLink } from "@/lib/loja";

const links = [
  { href: "#colecao", label: "Nossa Coleção" },
  { href: "#sobre", label: "Sobre a loja" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Visite nossa loja" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl">Pequetitas</p>
          <p className="eyebrow">Moda Menina</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Moda infantil feminina em Lucas do Rio Verde – MT, feita para deixar cada momento ainda
            mais especial.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Links rápidos</h2>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg">Contato</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            {LOJA.endereco}
            <br />
            {LOJA.cidade}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Seg a sex: 8h às 18h · Sáb: 8h às 12h
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="btn-base btn-whats !px-5 !py-2.5 !text-xs"
              href={whatsLink(`Olá, ${LOJA.nome}!`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {LOJA.telefone}
            </a>
            <a
              className="btn-base btn-outline !px-5 !py-2.5 !text-xs"
              href={LOJA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />@{LOJA.instagram}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} {LOJA.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
