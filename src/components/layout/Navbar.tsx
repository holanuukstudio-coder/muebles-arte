"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import NavLinks from "@/components/ui/NavLinks";
import SocialActions from "@/components/ui/SocialActions";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-white/72 text-black backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-5 md:h-16 md:px-8 lg:px-12">
          <Logo />
          <div className="hidden items-center justify-end gap-8 lg:flex">
            <NavLinks light={false} />
            <SocialActions dark />
          </div>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-black/80 transition-colors hover:text-black lg:hidden"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          isMenuOpen
            ? "pointer-events-auto bg-black/35 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-[70] h-screen w-[85%] max-w-[360px] bg-white px-6 py-6 shadow-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Logo />

          <button
            type="button"
            aria-label="Cerrar menu"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-black/70 transition-colors hover:text-black"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <NavLinks
          vertical
          light={false}
          onNavigate={() => setIsMenuOpen(false)}
        />

        <div className="mt-10">
          <SocialActions dark />
        </div>
      </aside>
    </>
  );
}
