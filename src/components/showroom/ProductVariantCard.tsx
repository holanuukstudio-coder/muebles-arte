"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { ShowroomProduct } from "@/data/showroom.data";

type ProductVariantCardProps = {
  product: ShowroomProduct;
};

const whatsappNumber = "529990000000";

// Tarjeta interactiva del showroom. Cada producto recibe variantes reales
// desde `showroom.data.ts`; al cambiar swatch se cambia la imagen de acabado.
export default function ProductVariantCard({
  product,
}: ProductVariantCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  // El mensaje prellenado facilita cotizaciones por producto y acabado.
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola, quiero recibir informacion sobre ${product.name} en acabado ${selectedVariant.name}.`,
  )}`;

  return (
    <article className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative min-h-[360px] bg-[#f7f5f1] md:min-h-[520px]">
        <Image
          key={selectedVariant.image}
          src={selectedVariant.image}
          alt={`${product.name} en acabado ${selectedVariant.name}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-black/45">
            {product.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-5xl">
            {product.name}
          </h2>
          <p className="mt-6 max-w-[620px] text-sm leading-7 text-black/62 md:text-base">
            {product.description}
          </p>

          <div className="mt-9">
            <div className="flex items-center justify-between gap-5">
              <p className="text-xs uppercase tracking-[0.22em] text-black/42">
                Acabado
              </p>
              <p className="text-sm text-black/64">{selectedVariant.name}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {product.variants.map((variant) => {
                const isSelected = variant.name === selectedVariant.name;

                return (
                  <button
                    key={variant.name}
                    type="button"
                    aria-label={`Ver acabado ${variant.name}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedVariant(variant)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                      isSelected
                        ? "border-black"
                        : "border-black/12 hover:border-black/45"
                    }`}
                  >
                    <span
                      className="h-7 w-7 rounded-full border border-black/10"
                      style={{ backgroundColor: variant.swatch }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-black/12 pt-8 md:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-black/40">
                Dimensiones
              </dt>
              <dd className="mt-3 text-sm leading-6 text-black/70">
                {product.dimensions}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-black/40">
                Materiales
              </dt>
              <dd className="mt-3 text-sm leading-6 text-black/70">
                {product.materials.join(", ")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 border border-black bg-black px-5 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:bg-white hover:!text-black"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Cotizar acabado
          </Link>
        </div>
      </div>
    </article>
  );
}
