"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  showroomCategories,
  showroomProducts,
} from "@/data/showroom.data";

const featuredProducts = showroomProducts;

// Estos helpers mantienen la home desacoplada del detalle del showroom:
// si cambia el nombre de una categoria o la descripcion, se actualiza desde data.
function getCategoryName(categorySlug: string) {
  return (
    showroomCategories.find((category) => category.slug === categorySlug)
      ?.name ?? categorySlug
  );
}

function getProductSummary(description: string) {
  return `${description.split(".")[0]}.`;
}

export default function FeaturedProducts() {
  // Carrusel horizontal nativo para conservar una interaccion ligera y facil de mantener.
  const scrollBy = (direction: "left" | "right") => {
    const track = document.getElementById("featured-products-track");
    track?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="featured-products"
      className="bg-paper px-5 py-24 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="border-y border-black/10 py-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[680px]">
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">
                Coleccion
              </p>
              <h2 className="mt-4 text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
                Piezas para construir calma alrededor.
              </h2>
              <p className="mt-5 max-w-[540px] text-sm leading-7 text-black/58 md:text-base">
                Una seleccion de muebles y objetos intervenidos para mirarse de
                cerca, con espacio suficiente para apreciar silueta, color y
                detalle.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Ver productos anteriores"
                onClick={() => scrollBy("left")}
                className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Ver mas productos"
                onClick={() => scrollBy("right")}
                className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div
            id="featured-products-track"
            className="mt-12 flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {featuredProducts.map((product) => {
              const image = product.variants[0].image;

              return (
                <Link
                  key={product.slug}
                  href={`/showroom/${product.categorySlug}`}
                  className="group min-w-[84vw] snap-start md:min-w-[440px] lg:min-w-[500px]"
                >
                  <article className="overflow-hidden border border-black/10 bg-[#f4f1ea] transition-colors duration-300 hover:border-black/28">
                    <div className="relative min-h-[470px] overflow-hidden bg-[#e8e2d6] md:min-h-[560px]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 500px, (min-width: 768px) 440px, 84vw"
                        className="scale-110 object-cover opacity-[0.18] blur-xl transition-transform duration-700 group-hover:scale-[1.15]"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/28 via-white/8 to-black/10" />
                      <Image
                        src={image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 500px, (min-width: 768px) 440px, 84vw"
                        className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025] md:p-7"
                      />
                      <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-black px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black md:bottom-6 md:left-6">
                        Ver mas
                        <ArrowUpRight size={15} strokeWidth={1.7} />
                      </span>
                    </div>
                    <div className="flex min-h-[190px] flex-col justify-between border-t border-black/10 bg-paper p-5 md:p-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-black/42">
                          {getCategoryName(product.categorySlug)}
                        </p>
                        <h3 className="mt-3 text-2xl font-light leading-tight tracking-[0.02em] text-black md:text-[1.75rem]">
                          {product.name}
                        </h3>
                      </div>
                      <p className="mt-5 text-sm leading-6 text-black/62">
                        {getProductSummary(product.description)}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
