import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Collection } from "@/components/site/Collection";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "Pequetitas Moda Menina | Moda infantil em Lucas do Rio Verde – MT";
const description =
  "Loja de moda infantil feminina em Lucas do Rio Verde – MT. Vestidos, conjuntos, blusas, shorts, saias e looks completos com qualidade, preço acessível e atendimento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: "Pequetitas Moda Menina",
          description,
          telephone: "+5565999272466",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. das Acácias, nº 608 W, sala 1 – Bandeirantes",
            addressLocality: "Lucas do Rio Verde",
            addressRegion: "MT",
            postalCode: "78460-518",
            addressCountry: "BR",
          },
          sameAs: ["https://instagram.com/Pequetitaslrv"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "59",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collection />
        <About />
        <Reviews />
        <InstagramSection />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
