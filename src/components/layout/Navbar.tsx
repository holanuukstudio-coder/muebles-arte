"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import NavLinks from "@/components/ui/NavLinks";
import SocialActions from "@/components/ui/SocialActions";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-white">
        <div className="mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className="group flex h-10 w-10 items-center justify-center"
            >
              <span className="relative block h-4 w-6">
                <span className="absolute left-0 top-0 block h-px w-6 bg-black transition-all duration-300 group-hover:w-4" />
                <span className="absolute left-0 top-3 block h-px w-4 bg-black transition-all duration-300 group-hover:w-6" />
              </span>
            </button>

            <Logo />
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <NavLinks light={false} />
            <SocialActions dark />
          </div>
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
        className={`fixed top-0 left-0 z-[70] h-screen w-[85%] max-w-[360px] bg-white px-6 py-6 shadow-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Logo />

          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-black transition-opacity hover:opacity-70"
          >
            ×
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