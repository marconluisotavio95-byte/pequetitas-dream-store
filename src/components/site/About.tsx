import lojaImg from "@/assets/loja.jpg";
import { Heart, Sparkles, Tag } from "lucide-react";

const pilares = [
  { icon: Sparkles, titulo: "Qualidade", texto: "Tecidos macios e acabamento cuidadoso em cada peça." },
  { icon: Tag, titulo: "Preço acessível", texto: "Moda bonita que cabe no orçamento da família." },
  { icon: Heart, titulo: "Atendimento", texto: "Consultoria personalizada de tamanhos e combinações." },
];

export function About() {
  return (
    <section id="sobre" className="surface-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <img
          src={lojaImg}
          alt="Interior da loja Pequetitas Moda Menina com araras de roupas infantis"
          loading="lazy"
          width={1200}
          height={1000}
          className="w-full rounded-[2rem] object-cover shadow-soft"
        />
        <div>
          <p className="eyebrow">Sobre a loja</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Delicadeza em cada detalhe</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A Pequetitas Moda Menina é uma loja especializada em moda infantil feminina em Lucas do
            Rio Verde. Selecionamos peças que unem conforto, elegância e durabilidade — do look do
            dia a dia às ocasiões mais especiais.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Aqui cada cliente é atendida de forma próxima e personalizada, com ajuda para escolher
            tamanhos, montar looks e receber tudo com praticidade pelo WhatsApp.
          </p>

          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {pilares.map((p) => (
              <li key={p.titulo} className="rounded-2xl border border-border/70 bg-card p-5 shadow-card">
                <p.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-lg">{p.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
