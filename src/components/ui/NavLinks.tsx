import Link from "next/link";
import { navigationLinks } from "@/data/site/navigation.data";

type NavLinksProps = {
  vertical?: boolean;
  onNavigate?: () => void;
  light?: boolean;
};

// Renderiza la misma lista de enlaces en horizontal o vertical.
// El prop light permite reutilizarlo sobre fondos claros u oscuros.
export default function NavLinks({
  vertical = false,
  onNavigate,
  light = true,
}: NavLinksProps) {
  const textColor = light ? "text-white" : "text-black";
  const lineColor = light ? "after:bg-white" : "after:bg-black";

  return (
    <nav
      className={
        vertical
          ? "flex flex-col items-start gap-5"
          : "flex items-center gap-6 xl:gap-8"
      }
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className={`relative text-xs uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-70 md:text-sm ${textColor} after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 ${lineColor} after:transition-all after:duration-300 hover:after:w-full`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
