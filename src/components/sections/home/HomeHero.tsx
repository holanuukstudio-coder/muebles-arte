"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "/images/header/nuukheader1.png",
  "/images/header/nuukestudio2.png",
  "/images/header/nuukestudio3.png",
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5f1] text-white">
      {slides.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/8 to-black/48" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-16 pt-28 md:px-8 md:pb-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.45fr)] lg:px-12">
          <div className="max-w-[820px]">
            <p className="text-xs uppercase tracking-[0.24em] text-white/72">
              Mobiliario de autor
            </p>

            <h1 className="mt-5 max-w-[760px] text-5xl font-light leading-[0.96] tracking-[0.02em] md:text-7xl lg:text-8xl">
              Muebles minimalistas con alma de galeria.
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <p className="max-w-[360px] text-sm leading-7 text-white/78 md:text-base">
              Piezas disenadas para espacios serenos, materiales honestos y una
              presencia visual que se siente hecha a medida.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/shop"
                className="inline-flex h-11 items-center justify-center border border-white/55 px-6 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:border-white hover:bg-white hover:!text-black"
              >
                Ver coleccion
              </Link>
              <Link
                href="/showroom"
                className="inline-flex h-11 items-center justify-center border border-white/55 px-6 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:border-white hover:bg-white hover:!text-black"
              >
                Showroom
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-5 z-20 flex items-center gap-2 md:left-8 lg:left-12">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            aria-label={`Ir a la imagen ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-px transition-all duration-300 ${
              index === currentSlide ? "w-12 bg-white" : "w-6 bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
