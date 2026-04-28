import Link from "next/link";

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
