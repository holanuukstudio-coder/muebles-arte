import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PencilLine,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const whatsappNumber = "529990000000";
const email = "hola@nuukestudio.com";
// Datos de contacto centralizados para que el cambio de telefono o correo
// no requiera revisar todos los enlaces de la pagina.
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hola, quiero platicar sobre un proyecto con Nuuk Estudio.",
)}`;

const contactOptions = [
  {
    title: "Cotizar una pieza",
    text: "Para muebles, sillas, mesas, azulejos, pintura o una pieza especial.",
    href: whatsappHref,
    label: "Escribir por WhatsApp",
    icon: MessageCircle,
  },
  {
    title: "Agendar showroom",
    text: "Para revisar materiales, escala, acabados y posibilidades de produccion.",
    href: whatsappHref,
    label: "Solicitar visita",
    icon: CalendarDays,
  },
  {
    title: "Colaboraciones",
    text: "Para interioristas, arquitectos, marcas, galerias y proyectos especiales.",
    href: `mailto:${email}?subject=Colaboracion%20con%20Nuuk%20Estudio`,
    label: "Enviar correo",
    icon: PencilLine,
  },
];

// Opciones visibles del formulario. Si se conecta a un backend externo, estos
// valores deben mantenerse alineados con el esquema esperado por correo, CRM o API.
const projectTypes = [
  "Mobiliario a medida",
  "Remodelacion artistica",
  "Instalacion",
  "Azulejos",
  "Pintura",
  "Colaboracion",
];

// Pagina de contacto orientada a conversion directa y captura estructurada.
// El formulario ya guarda solicitudes mediante el CRUD interno de contacto.
export default function ContactoPage() {
  return (
    <main className="bg-paper">
      <section className="px-5 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Contacto
            </p>
            <h1 className="mt-5 max-w-[880px] text-5xl font-light leading-[0.98] tracking-[0.02em] text-black md:text-7xl">
              Hablemos de la pieza que necesita tu espacio.
            </h1>
          </div>
          <p className="max-w-[560px] text-base leading-8 text-black/62">
            Cuentanos que tienes en mente: una pieza existente, una comision a
            medida, una remodelacion o una colaboracion. Respondemos desde
            Merida, Yucatan.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-3">
          {contactOptions.map(({ title, text, href, label, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              target={href.startsWith("https://") ? "_blank" : undefined}
              rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
              className="group flex min-h-[260px] flex-col justify-between border border-black/10 bg-sand p-6 transition-colors duration-300 hover:border-black hover:bg-black hover:text-white md:p-7"
            >
              <div>
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-black/58 transition-colors duration-300 group-hover:text-white/72"
                />
                <h2 className="mt-8 text-2xl font-light tracking-[0.02em]">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-black/60 transition-colors duration-300 group-hover:text-white/62">
                  {text}
                </p>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]">
                {label}
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Proyecto
            </p>
            <h2 className="mt-4 max-w-[620px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
              Una primera nota para entender intencion, escala y atmosfera.
            </h2>

            <div className="mt-12 grid gap-5 border-t border-black/12 pt-8">
              <Link
                href={`mailto:${email}`}
                className="group flex items-center justify-between gap-5 border-b border-black/10 pb-5 text-black"
              >
                <span className="inline-flex items-center gap-3 text-sm text-black/64">
                  <Mail size={17} strokeWidth={1.5} />
                  {email}
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-5 border-b border-black/10 pb-5 text-black"
              >
                <span className="inline-flex items-center gap-3 text-sm text-black/64">
                  <MessageCircle size={17} strokeWidth={1.5} />
                  WhatsApp
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              <p className="flex items-center gap-3 text-sm text-black/64">
                <MapPin size={17} strokeWidth={1.5} />
                Merida, Yucatan, Mexico
              </p>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-black/64 transition-colors hover:text-black"
              >
                <Instagram size={17} strokeWidth={1.5} />
                Instagram
              </Link>
            </div>
          </div>

          <ContactForm projectTypes={projectTypes} />
        </div>
      </section>
    </main>
  );
}
