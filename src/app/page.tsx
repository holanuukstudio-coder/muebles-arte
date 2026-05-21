import HomeHero from "@/components/sections/home/HomeHero";
import FeaturedProducts from "@/components/sections/home/FeaturedProducts";
import StudioStory from "@/components/sections/home/StudioStory";
import ShowroomInvitation from "@/components/sections/home/ShowroomInvitation";
import JournalPreview from "@/components/sections/home/JournalPreview";

// Pagina principal de presentacion. Cada bloque vive como componente separado
// para facilitar ajustes de narrativa sin tocar la estructura global.
export default function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />
      <FeaturedProducts />
      <StudioStory />
      <ShowroomInvitation />
      <JournalPreview />
    </main>
  );
}
