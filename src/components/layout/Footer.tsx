import Link from "next/link";

const footerLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Showroom", href: "/showroom" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-[420px]">
            <Link
              href="/"
              className="inline-block text-sm font-medium uppercase tracking-[0.24em] text-black md:text-base"
            >
              Mayte
            </Link>

            <p className="mt-5 text-sm leading-7 text-black/60 md:text-base">
              Diseño de mobiliario con una visión artística, minimalista y
              contemporánea para espacios con identidad.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-black/45 md:text-xs">
              Navegación
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative inline-block text-sm text-black/80 transition-opacity duration-300 hover:opacity-70"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-black/45 md:text-xs">
              Sígueme
            </h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block text-sm text-black/80 transition-opacity duration-300 hover:opacity-70"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-black/40 md:text-xs">
            © {new Date().getFullYear()} Mayte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}