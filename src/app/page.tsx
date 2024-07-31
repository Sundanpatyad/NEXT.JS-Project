import ProductsSecton from "@/components/ProductsSecton";
import HeroSection from "../components/HeroSection";
import AboutSection from '../components/AboutSection';
import { InfiniteMovingCardsDemo } from "@/components/ReviewSection";
import { SparklesPreview } from "@/components/Sparkels";

export default function Home() {
  return (
  <div className="text-3xl text-center">
    <HeroSection/>
    <ProductsSecton/>
    <AboutSection/>
    <InfiniteMovingCardsDemo/>
    <SparklesPreview/>
  </div>
  );
}
