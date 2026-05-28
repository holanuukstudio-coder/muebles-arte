const notes = [
  "Mesas de centro como punto de pausa visual.",
  "Luz calida para convertir una esquina en ambiente.",
  "Texturas discretas para muros con caracter.",
];

// Vista previa de contenido editorial. Por ahora es estatico; si se agrega
// blog o CMS, este arreglo debe reemplazarse por la fuente de publicaciones.
export default function JournalPreview() {
  return (
    <section className="bg-paper px-5 pb-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] border-t border-black/12 pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">
              Ideas de interior
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-[0.02em] text-black md:text-5xl">
              Guias breves para elegir sin saturar.
            </h2>
          </div>

          <div className="grid gap-3">
            {notes.map((note, index) => (
              <div
                key={note}
                className="grid grid-cols-[44px_1fr] items-center border-b border-black/10 py-5"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-black/35">
                  0{index + 1}
                </span>
                <p className="text-xl font-light tracking-[0.01em] text-black md:text-2xl">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
