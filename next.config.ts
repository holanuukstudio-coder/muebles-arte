import type { NextConfig } from "next";
import path from "node:path";

// Configuracion general de Next.js. Se mantiene vacia hasta que el proyecto
// necesite reglas de imagen remota, redirects, headers o ajustes de build.
const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
