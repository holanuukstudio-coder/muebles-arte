"use client";

import { useState } from "react";
import Image from "next/image";

const floatingNotes = [
  { label: "Arquitectura", className: "left-4 top-5 md:left-7 md:top-8" },
  { label: "Arte plástico", className: "bottom-20 left-5 md:bottom-24" },
  { label: "Diseño", className: "right-5 top-16 md:right-8 md:top-24" },
  { label: "Surrealismo", className: "bottom-7 right-5 md:right-8" },
];

// Retrato interactivo de Mayte. El tilt responde al puntero y las etiquetas
// refuerzan sus disciplinas sin depender de animaciones externas.
export default function MaytePortrait() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="group relative"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="absolute -inset-3 border border-black/8 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
      <div
        className="relative aspect-[4/5] overflow-hidden bg-sand transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        <Image
          src="/images/mayte/mayte.jpg"
          alt="María Teresa Ortiz, fundadora de Nuuk"
          fill
          priority
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/28" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-white/72">
            Fundadora
          </p>
          <p className="mt-2 text-2xl font-light tracking-[0.02em]">
            María Teresa Ortiz
          </p>
        </div>
      </div>

      {floatingNotes.map((note, index) => (
        <span
          key={note.label}
          className={`pointer-events-none absolute border border-black/12 bg-paper/86 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-black/58 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 ${note.className}`}
          style={{ animationDelay: `${index * 220}ms` }}
        >
          {note.label}
        </span>
      ))}
    </div>
  );
}
