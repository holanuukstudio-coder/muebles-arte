import Link from "next/link";
import { ArrowUpRight, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Showroom", href: "/showroom" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Colaboraciones", href: "/colaboraciones" },
  { label: "Contacto", href: "/contacto" },
];

const services = [
  "Piezas a medida",
  "Mobiliario residencial",
  "Curaduria de interiores",
  "Colaboraciones",
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
];

const whatsappNumber = "529990000000";
const whatsappHref = `https://wa.me/${whatsappNumber}`;

// Icono local para WhatsApp porque lucide-react no incluye el isotipo oficial.
function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M16.01 3.2A12.76 12.76 0 0 0 5.08 22.5L3.2 29.06l6.76-1.77A12.76 12.76 0 1 0 16.01 3.2Zm0 23.24a10.4 10.4 0 0 1-5.31-1.45l-.38-.22-4.01 1.05 1.07-3.88-.25-.4A10.4 10.4 0 1 1 16 26.44Zm5.72-7.78c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.79.66.75.24 1.44.21 1.98.13.6-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

// Footer editorial con navegacion secundaria, servicios y datos de contacto.
// Varios textos siguen siendo configurables cuando el cliente entregue datos finales.
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="grid gap-14 border-b border-white/12 pb-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Muebles Arte
            </p>
            <h2 className="mt-5 max-w-[820px] text-5xl font-light leading-[0.95] tracking-[0.02em] md:text-7xl lg:text-8xl">
              Piezas serenas para espacios con caracter.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-[420px] text-sm leading-7 text-white/62 md:text-base">
              Diseno de mobiliario minimalista, objetos de interior y piezas
              especiales para proyectos residenciales, estudios y espacios
              curatoriales.
            </p>
            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex h-11 items-center gap-2 border border-white bg-white px-6 text-xs font-medium uppercase tracking-[0.18em] !text-black transition-colors hover:bg-transparent hover:!text-white"
              >
                Iniciar proyecto
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/12 py-12 md:grid-cols-2 lg:grid-cols-[0.85fr_0.85fr_1fr_0.7fr]">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-white/38">
              Navegacion
            </h3>
            <nav className="mt-6 flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative inline-flex items-center gap-2 text-sm text-white/78 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-6" />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-white/38">
              Servicios
            </h3>
            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/68">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-white/38">
              Contacto
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-6 text-white/68">
              <p>Merida, Yucatan</p>
              <Link
                href="mailto:hola@mueblesarte.com"
                className="block transition-colors hover:text-white"
              >
                hola@mueblesarte.com
              </Link>
              <Link
                href="/showroom"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-white/70"
              >
                Solicitar visita privada
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-white/38">
              Social
            </h3>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-white/18 text-white/72 transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <WhatsAppIcon />
              </Link>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/18 text-white/72 transition-colors hover:border-white hover:bg-white hover:text-black"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="inline-flex h-10 items-center"
            aria-label="Mayte"
          >
            <img
              src="/images/logo/mayte-logo-white.svg"
              alt="Mayte"
              className="h-7 w-auto"
            />
          </Link>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
            (c) {new Date().getFullYear()} Mayte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
