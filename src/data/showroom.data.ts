export type ProductVariant = {
  name: string;
  swatch: string;
  image: string;
};

// Modelo central del showroom. Las variantes usan imagenes reales para simular
// acabados o vistas de una misma pieza sin depender de un CMS o backend.
export type ShowroomProduct = {
  slug: string;
  categorySlug: string;
  name: string;
  eyebrow: string;
  description: string;
  dimensions: string;
  materials: string[];
  variants: ProductVariant[];
};

export type ShowroomCategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

const mueblesBase = "/images/Muebles Nuuk/Muebles Nuuk";
const sillasBase = "/images/Sillas Nuuk/Sillas Nuuk";
const azulejosBase = "/images/Azulejos/Azulejos";
const pinturasBase = "/images/Pinturas/Pinturas";

// Las categorias definen las rutas estaticas /showroom/[category].
// Si se agrega una categoria, tambien debe existir al menos un producto asociado.
export const showroomCategories: ShowroomCategory[] = [
  {
    slug: "mesas",
    name: "Mesas",
    description: "Mesas escultoricas y piezas de apoyo con presencia artistica.",
    image: `${mueblesBase}/Mesa - Ciclos/NEW ChatGPT Image 16 nov 2025, 08_00_54.jpg`,
  },
  {
    slug: "sillas",
    name: "Sillas",
    description: "Asientos intervenidos como piezas funcionales de coleccion.",
    image: `${sillasBase}/Silla - Pilares de la infancia/1.jpg`,
  },
  {
    slug: "muebles",
    name: "Muebles",
    description: "Buros, sofas y muebles escultoricos para interiores singulares.",
    image: `${mueblesBase}/Burós - Aluz y Astronauta/Alux y Astro/Frente.jpg`,
  },
  {
    slug: "arte-decorativo",
    name: "Arte decorativo",
    description: "Pinturas, azulejos y obras aplicadas para completar la atmosfera.",
    image: `${azulejosBase}/azulejos 1.jpg`,
  },
];

export const showroomProducts: ShowroomProduct[] = [
  {
    slug: "mesa-ciclos",
    categorySlug: "mesas",
    name: "Mesa Ciclos",
    eyebrow: "Mesa escultorica",
    description:
      "Mesa de caracter artistico con una lectura organica y contemporanea. Pensada como punto focal para salas, estudios o espacios curatoriales.",
    dimensions: "Medidas por confirmar",
    materials: ["Madera intervenida", "Acabado artistico", "Proteccion final"],
    variants: [
      {
        name: "Vista principal",
        swatch: "#d3b886",
        image: `${mueblesBase}/Mesa - Ciclos/NEW ChatGPT Image 16 nov 2025, 08_00_54.jpg`,
      },
      {
        name: "Cambio de color",
        swatch: "#8c6945",
        image: `${mueblesBase}/Mesa - Ciclos/mesa cambio de color.jpg`,
      },
      {
        name: "Detalle",
        swatch: "#c7c0b5",
        image: `${mueblesBase}/Mesa - Ciclos/IMG_2948.jpg`,
      },
    ],
  },
  {
    slug: "silla-pilares-infancia",
    categorySlug: "sillas",
    name: "Silla Pilares de la Infancia",
    eyebrow: "Silla intervenida",
    description:
      "Pieza funcional intervenida con lenguaje grafico y memoria personal. Una silla pensada para habitarse como objeto cotidiano y obra visual.",
    dimensions: "Medidas por confirmar",
    materials: ["Estructura de silla", "Intervencion pictorica", "Sellador"],
    variants: [
      {
        name: "Frontal",
        swatch: "#f0d25a",
        image: `${sillasBase}/Silla - Pilares de la infancia/1.jpg`,
      },
      {
        name: "Lateral",
        swatch: "#3e6b83",
        image: `${sillasBase}/Silla - Pilares de la infancia/2.jpg`,
      },
      {
        name: "Detalle",
        swatch: "#b44b36",
        image: `${sillasBase}/Silla - Pilares de la infancia/3.jpg`,
      },
      {
        name: "Ambiente",
        swatch: "#dfd6c4",
        image: `${sillasBase}/Silla - Pilares de la infancia/IMG_3879.jpg`,
      },
    ],
  },
  {
    slug: "silla-orbe-alma",
    categorySlug: "sillas",
    name: "Silla Orbe del Alma",
    eyebrow: "Silla artistica",
    description:
      "Silla con intervencion visual de alto contraste, concebida como una pieza de conversacion para interiores con identidad propia.",
    dimensions: "Medidas por confirmar",
    materials: ["Estructura de silla", "Intervencion artistica", "Acabado protector"],
    variants: [
      {
        name: "Orbe",
        swatch: "#1f2731",
        image: `${sillasBase}/Silla - Orbe del alma/1.png`,
      },
      {
        name: "Print",
        swatch: "#d7d1c7",
        image: `${sillasBase}/Silla - Orbe del alma/Print.jpg`,
      },
      {
        name: "Ojo",
        swatch: "#a9553d",
        image: `${sillasBase}/Silla - Orbe del alma/Print silla ojo.jpg`,
      },
    ],
  },
  {
    slug: "silla-torno",
    categorySlug: "sillas",
    name: "Silla Torno",
    eyebrow: "Taburete",
    description:
      "Taburete de lectura rustica y expresiva, con una presencia compacta para rincones, barras o espacios de acento.",
    dimensions: "Medidas por confirmar",
    materials: ["Madera", "Acabado natural", "Intervencion artesanal"],
    variants: [
      {
        name: "Luz natural",
        swatch: "#a77b52",
        image: `${sillasBase}/Silla - Torno/new Taburete rústico _Nuuk_ en luz natural.jpg`,
      },
      {
        name: "Oficial",
        swatch: "#5f402a",
        image: `${sillasBase}/Silla - Torno/OFICIAL.jpg`,
      },
    ],
  },
  {
    slug: "buros-alux-astronauta",
    categorySlug: "muebles",
    name: "Buros Alux y Astronauta",
    eyebrow: "Buros intervenidos",
    description:
      "Duo de buros con narrativa visual propia. Funcionan como piezas de apoyo y como acentos artisticos para recamaras o estudios.",
    dimensions: "Medidas por confirmar",
    materials: ["Madera", "Intervencion pictorica", "Acabado protector"],
    variants: [
      {
        name: "Conjunto",
        swatch: "#d4bc86",
        image: `${mueblesBase}/Burós - Aluz y Astronauta/Alux y Astro/Frente.jpg`,
      },
      {
        name: "Perspectiva",
        swatch: "#87614a",
        image: `${mueblesBase}/Burós - Aluz y Astronauta/Alux y Astro/Prspectiva.jpg`,
      },
      {
        name: "Alux",
        swatch: "#253a4c",
        image: `${mueblesBase}/Burós - Aluz y Astronauta/Alux fotos/Alux - Vista 1.jpg`,
      },
      {
        name: "Astronauta",
        swatch: "#f2e4c2",
        image: `${mueblesBase}/Burós - Aluz y Astronauta/Astronauta Fotos/Astro - Vista 1.1.jpg`,
      },
    ],
  },
  {
    slug: "mueble-escultorico-rex",
    categorySlug: "muebles",
    name: "Mueble Escultorico Rex",
    eyebrow: "Mueble escultorico",
    description:
      "Mueble de presencia escultural con lenguaje grafico envolvente. Una pieza para salas, recibidores o espacios donde el mobiliario se vuelve obra.",
    dimensions: "Medidas por confirmar",
    materials: ["Madera", "Pintura artistica", "Sellador final"],
    variants: [
      {
        name: "Vista 1",
        swatch: "#262c34",
        image: `${mueblesBase}/Mueble - Escultórico Rex/2.jpg`,
      },
      {
        name: "Vista 2",
        swatch: "#8b5f3d",
        image: `${mueblesBase}/Mueble - Escultórico Rex/3.jpg`,
      },
      {
        name: "Detalle",
        swatch: "#d7c7a8",
        image: `${mueblesBase}/Mueble - Escultórico Rex/IMG_9886.jpg`,
      },
    ],
  },
  {
    slug: "sofa-futurista",
    categorySlug: "muebles",
    name: "Sofa Futurista",
    eyebrow: "Sofa intervenido",
    description:
      "Sofa de lenguaje futurista, pensado como pieza protagonista para interiores atrevidos, galerias domesticas o proyectos especiales.",
    dimensions: "Medidas por confirmar",
    materials: ["Estructura tapizada", "Intervencion visual", "Acabado protector"],
    variants: [
      {
        name: "Vista 1",
        swatch: "#ece1cd",
        image: `${mueblesBase}/Sofá - Futurista/1.jpg`,
      },
      {
        name: "Vista 2",
        swatch: "#20242b",
        image: `${mueblesBase}/Sofá - Futurista/2.jpg`,
      },
      {
        name: "Futu",
        swatch: "#b98758",
        image: `${mueblesBase}/Sofá - Futurista/FUTU 2.jpg`,
      },
    ],
  },
  {
    slug: "azulejos-artisticos",
    categorySlug: "arte-decorativo",
    name: "Azulejos Artisticos",
    eyebrow: "Azulejos",
    description:
      "Piezas ceramicas intervenidas para muros, composiciones decorativas o acentos graficos dentro de proyectos residenciales.",
    dimensions: "Formato por confirmar",
    materials: ["Azulejo", "Intervencion artistica", "Proteccion final"],
    variants: [
      {
        name: "Composicion 1",
        swatch: "#d6c08b",
        image: `${azulejosBase}/azulejos 1.jpg`,
      },
      {
        name: "Composicion 2",
        swatch: "#415a68",
        image: `${azulejosBase}/azulejos 2.jpg`,
      },
      {
        name: "Musica 1",
        swatch: "#b4513e",
        image: `${azulejosBase}/MUSIC 1.jpg`,
      },
      {
        name: "Musica 2",
        swatch: "#222222",
        image: `${azulejosBase}/MUSIC 2.jpg`,
      },
    ],
  },
  {
    slug: "pinturas",
    categorySlug: "arte-decorativo",
    name: "Pinturas",
    eyebrow: "Obra pictorica",
    description:
      "Piezas pictoricas para complementar espacios con color, gesto y caracter visual.",
    dimensions: "Medidas por confirmar",
    materials: ["Tecnica mixta", "Soporte pictorico", "Acabado artistico"],
    variants: [
      {
        name: "Pieza 1",
        swatch: "#c08b52",
        image: `${pinturasBase}/27.12.25.jpg`,
      },
      {
        name: "Pieza 2",
        swatch: "#395b72",
        image: `${pinturasBase}/SUBIR 2.jpg`,
      },
      {
        name: "Pieza 3",
        swatch: "#b9a06f",
        image: `${pinturasBase}/SUBIR 3.jpg`,
      },
      {
        name: "Pieza 4",
        swatch: "#713f33",
        image: `${pinturasBase}/SUBIR 4.jpg`,
      },
    ],
  },
];

export function getShowroomCategory(slug: string) {
  return showroomCategories.find((category) => category.slug === slug);
}

// Mantiene el filtrado de productos fuera del componente de pagina para que
// otras vistas puedan reutilizar la misma logica de categoria.
export function getShowroomProductsByCategory(categorySlug: string) {
  return showroomProducts.filter(
    (product) => product.categorySlug === categorySlug,
  );
}
