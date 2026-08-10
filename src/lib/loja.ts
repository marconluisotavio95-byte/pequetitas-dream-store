import vestido from "@/assets/p-vestido.jpg";
import conjunto from "@/assets/p-conjunto.jpg";
import blusa from "@/assets/p-blusa.jpg";
import short from "@/assets/p-short.jpg";
import saia from "@/assets/p-saia.jpg";
import look from "@/assets/p-look.jpg";

export const LOJA = {
  nome: "Pequetitas Moda Menina",
  telefone: "(65) 99927-2466",
  whatsapp: "5565999272466",
  instagram: "Pequetitaslrv",
  instagramUrl: "https://instagram.com/Pequetitaslrv",
  endereco: "Av. das Acácias, nº 608 W, sala 1 – Bandeirantes",
  cidade: "Lucas do Rio Verde – MT, 78460-518",
  nota: "5,0",
  avaliacoes: 59,
};

export function whatsLink(mensagem: string) {
  return `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export type Produto = {
  id: string;
  nome: string;
  preco: string;
  categoria: string;
  imagem: string;
};

export const CATEGORIAS = [
  "Todos",
  "Vestidos",
  "Conjuntos",
  "Blusas",
  "Shorts",
  "Saias",
  "Looks completos",
] as const;

export const PRODUTOS: Produto[] = [
  { id: "1", nome: "Vestido Floral Rosé", preco: "R$ 129,90", categoria: "Vestidos", imagem: vestido },
  { id: "2", nome: "Vestido Bailarina Tule", preco: "R$ 149,90", categoria: "Vestidos", imagem: vestido },
  { id: "3", nome: "Conjunto Verão Sage", preco: "R$ 119,90", categoria: "Conjuntos", imagem: conjunto },
  { id: "4", nome: "Conjunto Babado Cropped", preco: "R$ 109,90", categoria: "Conjuntos", imagem: conjunto },
  { id: "5", nome: "Blusa Renda Off White", preco: "R$ 79,90", categoria: "Blusas", imagem: blusa },
  { id: "6", nome: "Blusa Manga Bufante", preco: "R$ 84,90", categoria: "Blusas", imagem: blusa },
  { id: "7", nome: "Short Jeans Babado", preco: "R$ 89,90", categoria: "Shorts", imagem: short },
  { id: "8", nome: "Short Clarinho Verão", preco: "R$ 74,90", categoria: "Shorts", imagem: short },
  { id: "9", nome: "Saia Plissada Rosé", preco: "R$ 94,90", categoria: "Saias", imagem: saia },
  { id: "10", nome: "Saia Midi Delicada", preco: "R$ 99,90", categoria: "Saias", imagem: saia },
  { id: "11", nome: "Look Tricot & Terracota", preco: "R$ 189,90", categoria: "Looks completos", imagem: look },
  { id: "12", nome: "Look Camisa & Saia", preco: "R$ 179,90", categoria: "Looks completos", imagem: look },
];
