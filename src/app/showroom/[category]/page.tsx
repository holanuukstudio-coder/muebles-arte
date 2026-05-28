import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProductVariantCard from "@/components/showroom/ProductVariantCard";
import {
  getShowroomCategory,
  getShowroomProductsByCategory,
  showroomCategories,
} from "@/data/showroom.data";

type ShowroomCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

// Next 16 entrega `params` como Promise en rutas dinamicas del App Router.
// Estos params generan las paginas estaticas por categoria del showroom.
export function generateStaticParams() {
  return showroomCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function ShowroomCategoryPage({
  params,
}: ShowroomCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getShowroomCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getShowroomProductsByCategory(category.slug);

  return (
    <main className="bg-sand">
      <section className="relative min-h-[520px] overflow-hidden bg-ink px-5 pb-14 pt-28 text-white md:px-8 md:pb-16 lg:px-12">
        <Image
          src={category.image}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/56 via-black/36 to-black/82" />
        <div className="relative z-10 mx-auto flex min-h-[378px] max-w-[1440px] flex-col justify-end">
          <Link
            href="/showroom"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/64 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Showroom
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/68">
                Coleccion
              </p>
              <h1 className="mt-5 text-5xl font-light leading-[0.98] tracking-[0.02em] !text-white md:text-7xl">
                {category.name}
              </h1>
            </div>
            <p className="max-w-[560px] text-sm leading-7 !text-white/82 md:text-base">
              {category.description} Selecciona un acabado para visualizar la
              pieza en otra tonalidad antes de solicitar una cotizacion.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8">
          {products.map((product) => (
            <ProductVariantCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
