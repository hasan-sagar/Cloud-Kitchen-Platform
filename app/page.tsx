import FeatureMenu from "@/components/FeatureMenu";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <FeatureMenu />
      <Footer />
    </div>
  );
}
