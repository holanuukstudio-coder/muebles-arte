import HomeHero from "@/components/sections/home/HomeHero";
import FeaturedProducts from "@/components/sections/home/FeaturedProducts";
import StudioStory from "@/components/sections/home/StudioStory";
import ShowroomInvitation from "@/components/sections/home/ShowroomInvitation";
import JournalPreview from "@/components/sections/home/JournalPreview";

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
