import Navbar from "./Navbar";

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
          <h1 className="text-4xl font-light uppercase tracking-[0.35em] md:text-6xl lg:text-7xl">
            MUEBLES ARTE
          </h1>
          <p className="mt-4 text-sm font-light tracking-[0.2em] text-white/80 md:text-base">
            Diseño de mobiliario con identidad artística
          </p>
        </div>
      </div>
    </header>
  );
}