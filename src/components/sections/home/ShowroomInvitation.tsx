import Link from "next/link";

const studioStats = [
  { value: "42", label: "publicaciones" },
  { value: "155", label: "seguidores" },
  { value: "18", label: "piezas curadas" },
];

export default function ShowroomInvitation() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.24em] text-black/45">
            Atelier & showroom
          </p>
          <h2 className="mt-4 max-w-[660px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
            Una mirada curada para imaginar cada pieza en su espacio.
          </h2>
          <p className="mt-7 max-w-[560px] text-sm leading-7 text-black/62 md:text-base">
            La coleccion vive entre mobiliario, arte y objetos de interior.
            Cada seleccion ayuda a visualizar materiales, escala y atmosfera
            antes de producir una pieza especial.
          </p>

          <div className="mt-10 grid max-w-[560px] grid-cols-3 border-y border-black/12">
            {studioStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-black/12 py-6 pr-4 last:border-r-0"
              >
                <p className="text-3xl font-light tracking-[0.02em] text-black md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-black/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/showroom"
              className="inline-flex h-11 items-center justify-center border border-black bg-black px-6 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:bg-white hover:!text-black"
            >
              Ver showroom
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-11 items-center justify-center border border-black/20 px-6 text-xs font-medium uppercase tracking-[0.18em] text-black transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              Agendar cita
            </Link>
          </div>
        </div>

        <div className="order-1 grid gap-4 lg:order-2">
          <div className="aspect-[5/4] overflow-hidden bg-[#f7f5f1]">
            <img
              src="/images/header/nuukestudioheader1.jpg"
              alt="Showroom de mobiliario minimalista"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-[1fr_0.65fr] gap-4">
            <div className="aspect-[4/3] overflow-hidden bg-[#f7f5f1]">
              <img
                src="/images/header/nuukestudio2.png"
                alt="Detalle de mobiliario y objetos de interior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-end bg-[#f7f5f1] p-5">
              <p className="text-sm leading-6 text-black/58">
                Selecciones visuales para proyectos residenciales, estudios e
                interiorismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
