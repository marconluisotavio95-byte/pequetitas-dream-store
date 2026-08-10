import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOJA, whatsLink } from "@/lib/loja";

const links = [
  { href: "#colecao", label: "Coleção" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#instagram", label: "Instagram" },
  { href: "#localizacao", label: "Loja" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="min-w-0">
          <span className="block font-display text-xl leading-tight tracking-tight md:text-2xl">
            Pequetitas
          </span>
          <span className="eyebrow block text-[0.6rem]">Moda Menina</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            className="btn-base btn-primary !py-2.5 !text-xs"
            href={whatsLink(`Olá, ${LOJA.nome}! Gostaria de fazer um pedido.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border/60 lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/40 py-3 text-sm text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
