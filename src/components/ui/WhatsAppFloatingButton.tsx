const whatsappNumber = "529990000000";
const whatsappHref = `https://wa.me/${whatsappNumber}`;

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M16.01 3.2A12.76 12.76 0 0 0 5.08 22.5L3.2 29.06l6.76-1.77A12.76 12.76 0 1 0 16.01 3.2Zm0 23.24a10.4 10.4 0 0 1-5.31-1.45l-.38-.22-4.01 1.05 1.07-3.88-.25-.4A10.4 10.4 0 1 1 16 26.44Zm5.72-7.78c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.79.66.75.24 1.44.21 1.98.13.6-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-3 right-5 z-[80] inline-flex h-13 items-center gap-3 rounded-full border border-black/10 bg-white/92 px-4 text-black shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white md:bottom-5 md:right-7 md:px-5"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
        <WhatsAppIcon />
      </span>
      <span className="hidden pr-1 text-[11px] font-medium uppercase tracking-[0.18em] md:inline">
        WhatsApp
      </span>
    </a>
  );
}
