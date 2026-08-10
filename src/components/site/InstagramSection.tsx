import { Instagram } from "lucide-react";
import { LOJA } from "@/lib/loja";
import vestido from "@/assets/p-vestido.jpg";
import conjunto from "@/assets/p-conjunto.jpg";
import blusa from "@/assets/p-blusa.jpg";
import look from "@/assets/p-look.jpg";

const fotos = [
  { src: vestido, alt: "Vestido floral rosé infantil" },
  { src: conjunto, alt: "Conjunto verde sage infantil" },
  { src: blusa, alt: "Blusa off white com renda" },
  { src: look, alt: "Look completo com tricot e saia terracota" },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="surface-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Acompanhe o dia a dia</p>
          <h2 className="mt-4 text-4xl md:text-5xl">@{LOJA.instagram}</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Novidades, lançamentos e inspirações de looks publicados toda semana.
          </p>
          <a
            className="btn-base btn-primary mt-7"
            href={LOJA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Seguir no Instagram
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {fotos.map((f) => (
            <li key={f.alt}>
              <a href={LOJA.instagramUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full rounded-2xl object-cover shadow-card transition-transform duration-300 hover:-translate-y-1"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
