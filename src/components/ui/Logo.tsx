import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-sm font-medium uppercase tracking-[0.22em] text-black md:text-base"
    >
      Mayte
    </Link>
  );
}