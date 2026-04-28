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
    <section className="w-full bg-white pt-[64px]">
      <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
        <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="relative flex h-[320px] w-full max-w-[620px] items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f5] shadow-sm md:h-[420px] lg:h-[520px]">
              {slides.map((slide, index) => (
                <img
                  key={slide}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide}
                    type="button"
                    aria-label={`Ir a la imagen ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-[2px] transition-all duration-300 ${
                      index === currentSlide
                        ? "w-10 bg-black"
                        : "w-6 bg-black/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 max-w-[560px] pt-4 lg:order-2 lg:ml-auto lg:pt-10">
            <span className="text-[11px] uppercase tracking-[0.24em] text-black/50 md:text-xs">
              Colección destacada
            </span>

            <h1 className="mt-4 text-4xl font-light uppercase leading-[0.95] tracking-[0.08em] text-black md:text-5xl xl:text-6xl">
              <span className="block">Muebles con</span>
              <span className="block">identidad artística</span>
            </h1>

            <p className="mt-6 max-w-[460px] text-sm leading-7 text-black/70 md:text-base">
              Piezas diseñadas para transformar espacios con una estética limpia,
              contemporánea y cuidadosamente curada.
            </p>

            <div className="mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Shop Sale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}