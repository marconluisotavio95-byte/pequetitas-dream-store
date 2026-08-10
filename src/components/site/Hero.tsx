import { Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { LOJA, whatsLink } from "@/lib/loja";

export function Hero() {
  return (
    <section id="top" className="surface-soft relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-2 lg:gap-16">
        <div className="fade-up">
          <p className="eyebrow">Lucas do Rio Verde · MT</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.05] md:text-6xl lg:text-[4.2rem]">
            Pequetitas
            <span className="block italic text-primary">Moda Menina</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Moda infantil feita para deixar cada momento ainda mais especial.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#colecao" className="btn-base btn-primary">
              Ver coleção
            </a>
            <a
              className="btn-base btn-outline"
              href={whatsLink(
                `Olá, ${LOJA.nome}! Gostaria de comprar pelo WhatsApp. Pode me ajudar?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar pelo WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="font-semibold text-foreground">{LOJA.nota}</strong> de 5 ·{" "}
              {LOJA.avaliacoes} avaliações
            </p>
          </div>
        </div>

        <div className="fade-up relative">
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full bg-blush/60 blur-2xl lg:block" />
          <img
            src={heroImg}
            alt="Menina sorrindo com vestido rosé da Pequetitas Moda Menina"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="relative w-full rounded-[2rem] object-cover shadow-soft md:rounded-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
