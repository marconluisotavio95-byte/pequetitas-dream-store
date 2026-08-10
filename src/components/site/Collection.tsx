import { useState } from "react";
import { CATEGORIAS, LOJA, PRODUTOS, whatsLink } from "@/lib/loja";

export function Collection() {
  const [ativa, setAtiva] = useState<string>("Todos");
  const lista = ativa === "Todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === ativa);

  return (
    <section id="colecao" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-xl">
        <p className="eyebrow">Novidades da estação</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Nossa Coleção</h2>
        <p className="mt-4 text-muted-foreground">
          Peças selecionadas com carinho, tecidos confortáveis e acabamento impecável para as
          pequenas.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Categorias">
        {CATEGORIAS.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={ativa === c}
            onClick={() => setAtiva(c)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all md:text-sm ${
              ativa === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-7 lg:grid-cols-4">
        {lista.map((p) => (
          <li
            key={p.id}
            className="group overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={p.imagem}
                alt={p.nome}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="eyebrow text-[0.58rem]">{p.categoria}</p>
              <h3 className="mt-2 text-lg leading-snug">{p.nome}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{p.preco}</p>
              <a
                className="btn-base btn-outline mt-4 w-full !px-3 !py-2.5 !text-xs"
                href={whatsLink(
                  `Olá, ${LOJA.nome}! Tenho interesse na peça "${p.nome}" (${p.preco}). Está disponível?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
