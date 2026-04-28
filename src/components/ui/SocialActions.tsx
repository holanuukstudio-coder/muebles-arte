import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

type SocialActionsProps = {
  dark?: boolean;
};

export default function SocialActions({
  dark = false,
}: SocialActionsProps) {
  const color = dark ? "text-black" : "text-white";

  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://instagram.com"
        target="_blank"
        aria-label="Instagram"
        className={`${color} transition-opacity duration-300 hover:opacity-70`}
      >
        <Instagram size={18} />
      </Link>

      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Facebook"
        className={`${color} transition-opacity duration-300 hover:opacity-70`}
      >
        <Facebook size={18} />
      </Link>
    </div>
  );
}