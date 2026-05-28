import MaytePortrait from "@/components/about/MaytePortrait";

// Listas de contenido reutilizadas en la pagina Acerca de. Se mantienen aqui
// porque pertenecen al relato institucional, no al catalogo de productos.
const studioCapabilities = [
  "Lámparas",
  "Sofás",
  "Sillas",
  "Mesas",
  "Cabeceras",
  "Espejos",
  "Burós",
  "Esculturas",
  "Azulejos",
  "Remodelación artística",
  "Instalaciones",
];

const disciplines = [
  "Arquitectura",
  "Artes plásticas",
  "Diseño industrial",
  "Interiorismo",
  "Técnicas textiles",
  "Instalaciones artísticas",
];

const manifestoWords = [
  "Arte",
  "Diseño",
  "Función",
  "Memoria",
  "Color",
  "Textura",
  "Juego",
  "Surrealismo",
];

// Pagina editorial sobre Nuuk y Mayte. Combina texto institucional con bloques
// interactivos ligeros definidos en CSS global y en MaytePortrait.
export default function AcercaDePage() {
  return (
    <main className="bg-paper">
      <section className="px-5 pb-20 pt-32 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="about-rise">
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Acerca de Nuuk
            </p>
            <h1 className="mt-5 max-w-[820px] text-5xl font-light leading-[0.98] tracking-[0.02em] text-black md:text-7xl">
              Mayte Ortiz, artista y fundadora de Nuuk.
            </h1>
            <div className="mt-12 max-w-[560px] border-t border-black/12 pt-7">
              <div className="grid gap-5 md:grid-cols-[120px_1fr] md:items-start md:gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-black/34">
                    Fundación
                  </p>
                  <span className="mt-3 block text-5xl font-light leading-none text-black md:text-6xl">
                    2024
                  </span>
                </div>
                <p className="border-l border-black/12 pl-5 text-sm leading-7 text-black/58 md:mt-1">
                  El estudio nace en Mérida como un laboratorio donde
                  mobiliario, arte e interiorismo se contaminan entre sí.
                </p>
              </div>
            </div>
          </div>

          <div className="about-rise grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end [animation-delay:160ms]">
            <MaytePortrait />
            <div className="border-t border-black/12 pt-6 transition-colors duration-300 hover:border-black">
              <p className="text-xs uppercase tracking-[0.24em] text-black/42">
                María Teresa Ortiz
              </p>
              <p className="mt-4 text-base leading-8 text-black/68">
                Arquitecta, diseñadora de interiores y artista plástica. Nació
                el 6 de noviembre de 1995 en Mérida, Yucatán, México.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-sand px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Nuuk
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
              Significa “Grandeza” en maya.
            </h2>
            <div className="mt-10 grid grid-cols-2 border-y border-black/12 md:grid-cols-4">
              {manifestoWords.map((word, index) => (
                <div
                  key={word}
                  className="group min-h-24 border-b border-r border-black/10 p-4 transition-colors duration-300 hover:bg-black hover:text-white md:min-h-28 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:border-b-0"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-black/35 transition-colors duration-300 group-hover:text-white/45">
                    0{index + 1}
                  </span>
                  <p className="mt-5 text-2xl font-light tracking-[0.02em] transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {word}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-7 text-base leading-8 text-black/66">
            <p className="transition-colors duration-300 hover:text-black/82">
              Nuestro estudio se fundó en 2024 en Mérida, Yucatán, México. Nos
              enorgullece inspirarnos en diversas formas, colores y en estas
              tierras llenas de secretos, con un lenguaje visual contemporáneo,
              divertido y surrealista.
            </p>
            <p className="transition-colors duration-300 hover:text-black/82">
              Su práctica creativa se desarrolla entre lo funcional y lo
              contemporáneo, integrando conocimientos de diversas disciplinas
              como arquitectura, artes plásticas, diseño industrial e
              interiorismo, así como técnicas textiles e instalaciones
              artísticas.
            </p>
            <p className="transition-colors duration-300 hover:text-black/82">
              Actualmente trabaja como jefa del Departamento de Arquitectura y
              Diseño en una empresa de arte contemporáneo de renombre
              internacional.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Filosofía
            </p>
            <h2 className="mt-4 max-w-[720px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
              Arte, diseño y funcionalidad desde una visión divertida y
              surrealista.
            </h2>
          </div>

          <div className="grid gap-7 text-base leading-8 text-black/66">
            <p className="border-l border-black/12 pl-6 transition-all duration-300 hover:border-black hover:pl-8 hover:text-black/82">
              Cada pieza parece tener vida dentro de un lenguaje contemporáneo:
              formas orgánicas, colores y texturas que construyen objetos
              únicos, con expresión poética y memoria.
            </p>
            <p className="border-l border-black/12 pl-6 transition-all duration-300 hover:border-black hover:pl-8 hover:text-black/82">
              Nuestro enfoque se aleja de lo convencional. Cada proyecto combina
              creatividad, funcionalidad y significado para producir mobiliario,
              esculturas, azulejos e instalaciones con identidad propia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/42">
              Producción
            </p>
            <h2 className="mt-4 max-w-[680px] text-4xl font-light leading-tight tracking-[0.02em] md:text-6xl">
              Un equipo multidisciplinario para piezas y espacios a medida.
            </h2>
            <p className="mt-7 max-w-[620px] text-sm leading-7 text-white/62 md:text-base">
              Trabajamos con especialistas en carpintería, pintura, producción,
              diseño e instalación para ofrecer soluciones personalizadas en
              espacios residenciales, comerciales, de hostelería y exposiciones
              en galerías.
            </p>
          </div>

          <div className="grid gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.24em] text-white/42">
                Piezas
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {studioCapabilities.map((capability, index) => (
                  <span
                    key={capability}
                    className="about-float border border-white/16 px-4 py-2 text-sm text-white/72 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
                    style={{ animationDelay: `${index * 110}ms` }}
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.24em] text-white/42">
                Disciplinas
              </h3>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline}
                    className="group border-t border-white/14 pt-4 text-sm text-white/68 transition-colors duration-300 hover:border-white hover:text-white"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {discipline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="max-w-[720px] text-base leading-8 text-white/68">
              También colaboramos con mentes innovadoras y excéntricas que
              buscan propuestas únicas y originales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
