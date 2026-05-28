import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

// Root layout compartido por todas las rutas del App Router.
// Mantiene la navegacion, footer y acceso flotante a WhatsApp fuera de cada pagina.
const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muebles Arte",
  description: "Diseno de mobiliario con identidad artistica",
};

// En Next 16 el root layout debe conservar las etiquetas html/body.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manropeSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
