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
    <main className="bg-[#f7f5f1]">
      <section className="px-5 pb-12 pt-28 md:px-8 md:pb-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/showroom"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/48 transition-colors hover:text-black"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Showroom
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">
                Coleccion
              </p>
              <h1 className="mt-5 text-5xl font-light leading-[0.98] tracking-[0.02em] text-black md:text-7xl">
                {category.name}
              </h1>
            </div>
            <p className="max-w-[560px] text-sm leading-7 text-black/62 md:text-base">
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
