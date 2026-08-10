import { Star } from "lucide-react";
import { LOJA } from "@/lib/loja";

const depoimentos = [
  {
    texto:
      "Ótimo atendimento, fui respondida rápida no WhatsApp da loja todas as vezes.",
    autora: "Cliente Pequetitas",
  },
  {
    texto: "As roupas são lindas, de excelente qualidade e com preços muito bons.",
    autora: "Cliente Pequetitas",
  },
  {
    texto:
      "Atendimento maravilhoso, peças são lindas, produto de qualidade. Super recomendo!",
    autora: "Cliente Pequetitas",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Depoimentos</p>
        <h2 className="mt-4 text-4xl md:text-5xl">O que nossas clientes dizem</h2>
        <div className="mt-7 inline-flex items-center gap-4 rounded-full border border-border bg-card px-6 py-3 shadow-card">
          <span className="font-display text-3xl text-primary">{LOJA.nota}</span>
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </span>
          <span className="text-sm text-muted-foreground">{LOJA.avaliacoes} avaliações</span>
        </div>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {depoimentos.map((d) => (
          <li
            key={d.texto}
            className="rounded-3xl border border-border/70 bg-card p-7 shadow-card"
          >
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </span>
            <blockquote className="mt-4 font-display text-xl italic leading-snug">
              “{d.texto}”
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              {d.autora}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
