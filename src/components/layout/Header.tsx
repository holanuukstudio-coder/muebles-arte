import Navbar from "./Navbar";

// Header heredado de una version anterior del sitio. La home actual usa HomeHero,
// pero se conserva por si se necesita una cabecera full-screen en otra ruta.
export default function Header() {
  return (
    <header
      className="relative h-screen w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/header/header1.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-light uppercase tracking-[0.24em] md:text-6xl lg:text-7xl">
            Muebles Arte
          </h1>
          <p className="mt-4 text-sm font-light tracking-[0.16em] text-white/80 md:text-base">
            Diseno de mobiliario con identidad artistica
          </p>
        </div>
      </div>
    </header>
  );
}
