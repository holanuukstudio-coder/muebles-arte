const values = [
  {
    title: "Materiales honestos",
    text: "Madera, fibras, metal y acabados tactiles que envejecen con dignidad.",
  },
  {
    title: "Proporcion serena",
    text: "Piezas con lineas limpias, presencia contenida y escala pensada para habitarse.",
  },
  {
    title: "Hecho a medida",
    text: "Cada proyecto puede ajustarse al espacio, al uso y al lenguaje visual del interior.",
  },
];

export default function StudioStory() {
  return (
    <section className="bg-[#f7f5f1] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-black/45">
            Estudio
          </p>
          <h2 className="mt-4 max-w-[620px] text-4xl font-light leading-tight tracking-[0.02em] text-black md:text-6xl">
            Diseno que no compite con la arquitectura.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="border-t border-black/15 pt-5">
              <h3 className="text-base font-medium tracking-[0.02em] text-black">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/62">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
