"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    src: "/images/header/nuukheader1.png",
    position: "center",
    eyebrow: "Mobiliario de autor",
    title: "Muebles minimalistas con alma de galeria.",
    description:
      "Piezas disenadas para espacios serenos, materiales honestos y una presencia visual que se siente hecha a medida.",
    href: "/showroom",
    cta: "Explorar showroom",
  },
  {
    src: "/images/header/header1.png",
    position: "center",
    eyebrow: "Nuuk Estudio",
    title: "Arte, diseno y funcion desde Merida.",
    description:
      "Un estudio donde el mobiliario, el interiorismo y la produccion artistica se encuentran en piezas con identidad propia.",
    href: "/acerca-de",
    cta: "Conocer el estudio",
  },
  {
    src: "/images/Muebles Nuuk/Muebles Nuuk/Mesa - Ciclos/mesa cambio de color.jpg",
    position: "center",
    eyebrow: "Mesa Ciclos",
    title: "Formas organicas para espacios vivos.",
    description:
      "Una pieza central que combina presencia escultorica, color y escala para transformar el ritmo de una sala.",
    href: "/showroom/mesas",
    cta: "Ver mesas",
  },
  {
    src: "/images/Sillas Nuuk/Sillas Nuuk/Silla - Torno/OFICIAL.jpg",
    position: "center",
    eyebrow: "Silla Torno",
    title: "Objeto funcional con gesto escultorico.",
    description:
      "Sillas pensadas como acentos visuales: utiles, expresivas y listas para dialogar con la arquitectura.",
    href: "/showroom/sillas",
    cta: "Ver sillas",
  },
  {
    src: "/images/Sillas Nuuk/Sillas Nuuk/Silla - Pilares de la infancia/IMG_3866.jpeg",
    position: "center 56%",
    eyebrow: "Pilares de la infancia",
    title: "Color y memoria en una pieza utilitaria.",
    description:
      "Cada acabado permite que la silla cambie de caracter sin perder su lenguaje jugueton y contemporaneo.",
    href: "/showroom/sillas",
    cta: "Cambiar acabados",
  },
  {
    src: "/images/Azulejos/Azulejos/NEEWWWW.png",
    position: "center",
    eyebrow: "Azulejos artisticos",
    title: "Superficies que cuentan historias.",
    description:
      "Color, textura y trazo aplicados a muros, objetos y proyectos especiales con una presencia inesperada.",
    href: "/showroom/arte-decorativo",
    cta: "Ver arte decorativo",
  },
  {
    src: "/images/header/nuukestudio2.png",
    position: "center",
    eyebrow: "Interiorismo",
    title: "Piezas para construir calma alrededor.",
    description:
      "Selecciones visuales para imaginar materiales, escala y atmosfera antes de llevar una pieza al espacio.",
    href: "/showroom",
    cta: "Recorrer coleccion",
  },
  {
    src: "/images/header/nuukestudio3.png",
    position: "center",
    eyebrow: "Proyecto especial",
    title: "Cada espacio puede pedir una pieza distinta.",
    description:
      "Trabajamos mobiliario, arte y objetos a medida para residencias, estudios, marcas y proyectos de interior.",
    href: "/contacto",
    cta: "Iniciar proyecto",
  },
];

// Hero principal de la home. El arreglo `slides` controla la secuencia visual,
// mezcla imagenes de ambiente con piezas reales y permite ajustar el encuadre.
export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = slides[currentSlide];
  const nextSlide = slides[(currentSlide + 1) % slides.length];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5f1] text-white">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          aria-hidden="true"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ${
            index === currentSlide
              ? "scale-[1.04] opacity-100 duration-[5200ms]"
              : "scale-100 opacity-0"
          }`}
          style={{ objectPosition: slide.position }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/12 to-black/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.38),rgba(0,0,0,0.04)_58%)]" />

      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-24 pt-28 md:px-8 md:pb-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.45fr)] lg:px-12">
          <div className="max-w-[820px]">
            <p className="text-xs uppercase tracking-[0.24em] text-white/72">
              {activeSlide.eyebrow}
            </p>

            <h1 className="mt-5 max-w-[790px] text-5xl font-light leading-[0.96] tracking-[0.02em] md:text-7xl lg:text-8xl">
              {activeSlide.title}
            </h1>

            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/62">
              <span>{String(currentSlide + 1).padStart(2, "0")}</span>
              <div className="h-px w-28 overflow-hidden bg-white/28">
                <span
                  key={currentSlide}
                  className="block h-full bg-white hero-progress"
                />
              </div>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <button
              type="button"
              onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
              className="group mb-7 grid w-full max-w-[360px] grid-cols-[72px_1fr] items-center gap-4 border border-white/18 bg-black/18 p-2 text-left text-white backdrop-blur-md transition-colors hover:border-white/48 hover:bg-black/28"
            >
              <span className="relative aspect-square overflow-hidden bg-white/10">
                <Image
                  src={nextSlide.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="72px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: nextSlide.position }}
                />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/48">
                  Siguiente
                </span>
                <span className="mt-2 block text-sm leading-5 text-white/78">
                  {nextSlide.eyebrow}
                </span>
              </span>
            </button>

            <p className="max-w-[360px] text-sm leading-7 text-white/78 md:text-base">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={activeSlide.href}
                className="inline-flex h-11 items-center justify-center gap-2 border border-white bg-white px-6 text-xs font-medium uppercase tracking-[0.18em] !text-black transition-colors hover:bg-transparent hover:!text-white"
              >
                {activeSlide.cta}
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex h-11 items-center justify-center border border-white/45 px-6 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:border-white hover:bg-white hover:!text-black"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-5 z-20 flex items-center gap-2 md:left-8 lg:left-12">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ir a ${slide.eyebrow}`}
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
