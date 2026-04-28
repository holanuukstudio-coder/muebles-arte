export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  materials: string[];
  dimensions: string;
};

export const products: Product[] = [
  {
    slug: "mesa-centro-nuuk",
    name: "Mesa Centro Nuuk",
    category: "Mesas de centro",
    image: "/images/header/nuukheader1.png",
    shortDescription: "Una mesa baja de lineas limpias para salas serenas.",
    description:
      "Pieza central para espacios donde el silencio visual importa. Su proporcion baja y su presencia ligera permiten que conviva con arte, textiles y materiales naturales.",
    materials: ["Madera solida", "Acabado mate", "Proteccion natural"],
    dimensions: "120 x 70 x 34 cm",
  },
  {
    slug: "lampara-linea",
    name: "Lampara Linea",
    category: "Lamparas",
    image: "/images/header/nuukestudio2.png",
    shortDescription: "Luz calida con una silueta discreta y escultorica.",
    description:
      "Disenada para acompanar una lectura, una mesa lateral o un rincon de contemplacion. La pieza busca iluminar sin imponerse.",
    materials: ["Metal pintado", "Pantalla textil", "Luz calida"],
    dimensions: "38 x 38 x 62 cm",
  },
  {
    slug: "cuadro-relieve-arena",
    name: "Cuadro Relieve Arena",
    category: "Cuadros",
    image: "/images/header/nuukestudio3.png",
    shortDescription: "Textura y profundidad para muros minimalistas.",
    description:
      "Obra decorativa de bajo contraste pensada para sumar textura, sombra y ritmo a un muro sin saturar la composicion del interior.",
    materials: ["Bastidor de madera", "Pasta mineral", "Sellador mate"],
    dimensions: "90 x 120 cm",
  },
  {
    slug: "mesa-comedor-bruma",
    name: "Mesa Comedor Bruma",
    category: "Mesas",
    image: "/images/header/nuukestudioheader1.jpg",
    shortDescription: "Mesa de comedor sobria para reuniones largas.",
    description:
      "Una mesa amplia y silenciosa, con bordes suaves y una lectura contemporanea. Pensada para integrarse a casas, estudios y proyectos de interiorismo.",
    materials: ["Madera enchapada", "Base estructural", "Acabado satinado"],
    dimensions: "220 x 100 x 75 cm",
  },
  {
    slug: "consola-piedra",
    name: "Consola Piedra",
    category: "Consolas",
    image: "/images/header/header1.png",
    shortDescription: "Una pieza de entrada con caracter arquitectonico.",
    description:
      "Consola de apoyo para recibidores, pasillos o salas. Su geometria contenida ayuda a ordenar objetos, arte y luz en una sola escena.",
    materials: ["Madera solida", "Cubierta mineral", "Acabado natural"],
    dimensions: "160 x 40 x 82 cm",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
