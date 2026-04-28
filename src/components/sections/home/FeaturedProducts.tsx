"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products.data";

export default function FeaturedProducts() {
  const scrollBy = (direction: "left" | "right") => {
    const track = document.getElementById("featured-products-track");
    track?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-12">
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
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group min-w-[78vw] snap-start md:min-w-[420px] lg:min-w-[460px]"
            >
              <article className="overflow-hidden border border-black/10 bg-[#f7f5f1]">
                <div className="aspect-[4/5] overflow-hidden bg-[#efede8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex min-h-[170px] flex-col justify-between p-5 md:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-black/42">
                      {product.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-light tracking-[0.02em] text-black">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-black/62">
                    {product.shortDescription}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
