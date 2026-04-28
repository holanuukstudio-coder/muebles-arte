import Link from "next/link";
import { products } from "@/data/products.data";

export default function ShopPage() {
  return (
    <main className="bg-white px-5 py-32 md:px-8 lg:px-12">
      <section className="mx-auto max-w-[1440px]">
        <p className="text-xs uppercase tracking-[0.24em] text-black/45">
          Shop
        </p>
        <h1 className="mt-5 max-w-[760px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
          Piezas seleccionadas para interiores limpios y expresivos.
        </h1>
        <p className="mt-8 max-w-[640px] text-base leading-8 text-black/62">
          Esta seccion reunira la coleccion de muebles disponibles, piezas
          destacadas y ediciones especiales.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group block border border-black/10 bg-[#f7f5f1]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-black/42">
                  {product.category}
                </p>
                <h2 className="mt-3 text-2xl font-light text-black">
                  {product.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-black/62">
                  {product.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
