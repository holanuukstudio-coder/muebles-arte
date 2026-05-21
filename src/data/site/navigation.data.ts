export type NavigationLink = {
  label: string;
  href: string;
};

// Fuente unica para la navegacion principal. Navbar y menu movil consumen
// esta lista para evitar inconsistencias entre desktop y mobile.
export const navigationLinks: NavigationLink[] = [
  { label: "Showroom", href: "/showroom" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Colaboraciones", href: "/colaboraciones" },
  { label: "Contacto", href: "/contacto" },
];
