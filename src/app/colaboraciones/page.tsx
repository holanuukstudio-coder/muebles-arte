import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  GalleryHorizontalEnd,
  Handshake,
  Hotel,
  Layers3,
  Palette,
} from "lucide-react";

const whatsappNumber = "529990000000";
const email = "hola@nuukestudio.com";
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hola, quiero platicar sobre una colaboracion con Nuuk Estudio.",
)}`;

const collaborationTypes = [
  {
    title: "Interioristas y arquitectos",
    text: "Piezas especiales para residencias, departamentos muestra, hospitality y espacios comerciales.",
    icon: Building2,
  },
  {
    title: "Galerias y proyectos curatoriales",
    text: "Mobiliario-obra, objetos intervenidos e instalaciones funcionales para exhibicion o coleccion.",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Marcas y espacios editoriales",
    text: "Objetos con narrativa visual para escaparates, activaciones, produccion fotografica y lanzamientos.",
    icon: Handshake,
  },
  {
    title: "Hoteles y boutiques",
    text: "Acentos artisticos para lobby, suites, restaurantes, concept stores y experiencias de marca.",
    icon: Hotel,
  },
];

const processSteps = [
  {
    label: "01",
    title: "Direccion creativa",
    text: "Revisamos atmosfera, escala, uso, materiales, presupuesto y la intencion visual del proyecto.",
  },
  {
    label: "02",
    title: "Propuesta de pieza",
    text: "Definimos lenguaje, acabados, referencias y una ruta de produccion clara para aprobar antes de fabricar.",
  },
  {
    label: "03",
    title: "Produccion y acompanamiento",
    text: "Coordinamos realizacion, ajustes, entregables visuales y seguimiento hasta instalar o entregar la pieza.",
  },
];

const criteria = [
  "Piezas con identidad",
  "Escala para el espacio",
  "Materiales honestos",
  "Acabados artisticos",
  "Narrativa visual",
  "Produccion cuidada",
];

const deliverables = [
  "Mobiliario intervenido",
  "Piezas a medida",
  "Azulejos artisticos",
  "Objetos para escaparate",
  "Instalaciones funcionales",
  "Remodelacion artistica",
];

// Pagina para alianzas y proyectos especiales. Mantiene una lectura editorial,
// pero con rutas claras para que interioristas, galerias y marcas contacten.
export default function ColaboracionesPage() {
  return (
    <main className="bg-paper">
      <section className="px-5 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Colaboraciones
            </p>
            <h1 className="mt-5 max-w-[900px] text-5xl font-light leading-[0.98] tracking-[0.02em] text-black md:text-7xl">
              Piezas de autor para proyectos con mirada propia.
            </h1>
          </div>
          <div className="max-w-[580px] lg:justify-self-end">
            <p className="text-base leading-8 text-black/62">
              Trabajamos con interioristas, arquitectos, galerias, marcas y
              espacios que buscan mobiliario, objetos o intervenciones con
              presencia artistica y utilidad real.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 border border-black bg-black px-5 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:bg-white hover:!text-black"
              >
                Iniciar colaboracion
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
              <Link
                href={`mailto:${email}?subject=Colaboracion%20con%20Nuuk%20Estudio`}
                className="inline-flex h-11 items-center justify-center border border-black/20 px-5 text-xs font-medium uppercase tracking-[0.18em] text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                Enviar dossier
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-sand md:min-h-[640px]">
            <Image
              src="/images/header/YAYAYAY.jpg"
              alt="Pieza artistica para proyecto colaborativo"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/0 to-black/52" />
            <div className="absolute bottom-0 left-0 max-w-[560px] p-6 text-white md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/62">
                Proyecto especial
              </p>
              <h2 className="mt-3 text-4xl font-light leading-tight tracking-[0.02em] md:text-5xl">
                Arte aplicado al espacio.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
            {collaborationTypes.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group flex min-h-[148px] flex-col justify-between border border-black/10 bg-sand p-6 transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <div className="flex items-start justify-between gap-6">
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-black/54 transition-colors duration-300 group-hover:text-white/70"
                  />
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-black/34 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-light tracking-[0.02em]">
                    {title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-black/60 transition-colors duration-300 group-hover:text-white/62">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/42">
              Criterio curatorial
            </p>
            <h2 className="mt-4 max-w-[640px] text-4xl font-light leading-tight tracking-[0.02em] md:text-6xl">
              No producimos decoracion generica.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {criteria.map((item, index) => (
              <div
                key={item}
                className="grid min-h-28 grid-cols-[44px_1fr] border-t border-white/14 pt-5"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-white/34">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-2xl font-light tracking-[0.02em] text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Proceso
            </p>
            <h2 className="mt-4 max-w-[620px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
              Una colaboracion debe sentirse clara desde el primer boceto.
            </h2>
          </div>

          <div className="grid gap-0 border-y border-black/12">
            {processSteps.map((step) => (
              <article
                key={step.label}
                className="grid gap-5 border-b border-black/10 py-7 last:border-b-0 md:grid-cols-[92px_1fr]"
              >
                <span className="text-xs uppercase tracking-[0.22em] text-black/35">
                  {step.label}
                </span>
                <div>
                  <h3 className="text-2xl font-light tracking-[0.02em] text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[760px] text-sm leading-7 text-black/62 md:text-base">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Entregables
            </p>
            <h2 className="mt-4 max-w-[720px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
              Objetos, mobiliario e intervenciones pensadas para dialogar con
              el espacio.
            </h2>
          </div>
          <div className="grid grid-cols-2 border-y border-black/12 md:grid-cols-3">
            {deliverables.map((deliverable) => (
              <div
                key={deliverable}
                className="min-h-28 border-b border-r border-black/10 p-4 text-sm leading-6 text-black/68 md:text-base [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 [&:nth-child(n+5)]:border-b-0 md:[&:nth-child(n+4)]:border-b-0"
              >
                <Layers3
                  size={16}
                  strokeWidth={1.5}
                  className="mb-5 text-black/38"
                />
                {deliverable}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 border-t border-black/12 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center border border-black/14 bg-sand text-black">
              <Palette size={20} strokeWidth={1.5} />
            </span>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Abramos la conversacion
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <p className="max-w-[760px] text-2xl font-light leading-snug tracking-[0.02em] text-black md:text-4xl">
              Si el proyecto necesita una pieza que no exista todavia, ese es
              el mejor punto de partida.
            </p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-black bg-black px-6 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:bg-white hover:!text-black"
            >
              Platicar proyecto
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
