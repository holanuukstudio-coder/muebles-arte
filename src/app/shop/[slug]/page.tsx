import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products.data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Rutas estaticas del catalogo heredado. Mantener `params` como Promise por la
// convencion actual de Next 16 en App Router.
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white px-5 py-28 md:px-8 lg:px-12">
      <section className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="overflow-hidden bg-[#f7f5f1]">
          <img
            src={product.image}
            alt={product.name}
            className="min-h-[420px] w-full object-cover lg:h-[calc(100vh-7rem)]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.24em] text-black/45">
            {product.category}
          </p>
          <h1 className="mt-5 text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-8 max-w-[620px] text-base leading-8 text-black/64">
            {product.description}
          </p>

          <dl className="mt-12 grid gap-7 border-t border-black/12 pt-8 md:grid-cols-2">
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
      </section>
    </main>
  );
}
