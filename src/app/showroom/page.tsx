import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { showroomCategories } from "@/data/showroom.data";

// Vista general del showroom. Esta pagina funciona como menu visual por tipo
// de producto; el cambio de variantes vive en cada categoria dinamica.
export default function ShowroomPage() {
  return (
    <main className="bg-paper">
      <section className="px-5 pb-12 pt-32 md:px-8 md:pb-16 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs uppercase tracking-[0.24em] text-black/45">
            Showroom
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <h1 className="max-w-[820px] text-5xl font-light leading-[0.98] tracking-[0.02em] text-black md:text-7xl">
              Explora las piezas por tipo de producto.
            </h1>
            <p className="max-w-[520px] text-sm leading-7 text-black/62 md:text-base">
              Una galeria visual para recorrer mesas, sillas, lamparas y
              objetos antes de entrar a cada coleccion y revisar sus acabados.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2">
          {showroomCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/showroom/${category.slug}`}
              className={`group relative min-h-[420px] overflow-hidden bg-sand text-white md:min-h-[560px] ${
                index === 0 ? "md:row-span-2 md:min-h-[720px]" : ""
              }`}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/18 to-black/76" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/68">
                      Coleccion
                    </p>
                    <h2 className="mt-3 text-4xl font-light tracking-[0.02em] !text-white md:text-5xl">
                      {category.name}
                    </h2>
                    <p className="mt-4 max-w-[420px] text-sm leading-6 !text-white/78">
                      {category.description}
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/40 text-white transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black md:flex">
                    <ArrowUpRight size={19} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
