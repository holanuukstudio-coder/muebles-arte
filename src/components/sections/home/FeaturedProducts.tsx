"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    <section className="bg-paper px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[680px]">
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Coleccion
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
              Piezas para construir calma alrededor.
            </h2>
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
          className="mt-12 flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProducts.map((product) => {
            const image = product.variants[0].image;

            return (
              <Link
                key={product.slug}
                href={`/showroom/${product.categorySlug}`}
                className="group min-w-[78vw] snap-start md:min-w-[420px] lg:min-w-[460px]"
              >
                <article className="overflow-hidden border border-black/10 bg-sand">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand-deep">
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 460px, (min-width: 768px) 420px, 78vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex min-h-[178px] flex-col justify-between p-5 md:p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-black/42">
                        {getCategoryName(product.categorySlug)}
                      </p>
                      <h3 className="mt-3 text-2xl font-light tracking-[0.02em] text-black">
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
    </section>
  );
}
