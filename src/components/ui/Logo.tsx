import Link from "next/link";

// Logo reutilizable para navbar y menu movil. El asset activo es Nuuk,
// aunque quedan textos de marca pendientes de cierre en algunos lugares.
export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex h-10 items-center"
      aria-label="Mayte"
    >
      <img
        src="/images/logo/nuuk2.svg"
        alt="nuuk"
        className="h-9 w-auto md:h-11"
      />
    </Link>
  );
}
