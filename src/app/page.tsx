import ProductsSecton from "@/components/ProductsSecton";
import HeroSection from "../components/HeroSection";
import AboutSection from '../components/AboutSection';
import { InfiniteMovingCardsDemo } from "@/components/ReviewSection";

export default function Home() {
  return (
  <h1 className="text-3xl text-center">
    <HeroSection/>
    <ProductsSecton/>
    <AboutSection/>
    <InfiniteMovingCardsDemo/>
  </h1>
  );
}
