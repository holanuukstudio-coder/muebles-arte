import Link from "next/link";
import { ArrowUpRight, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Showroom", href: "/showroom" },
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

export default function Footer() {
  return (
    <footer className="w-full bg-[#10100f] text-white">
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
                className="inline-flex h-11 items-center gap-2 border border-white bg-white px-6 text-xs font-medium uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-white"
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
            className="text-sm font-medium uppercase tracking-[0.2em] text-white"
          >
            Mayte
          </Link>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
            (c) {new Date().getFullYear()} Mayte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
