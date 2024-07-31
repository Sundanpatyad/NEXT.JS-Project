import ProductsSecton from "@/components/ProductsSecton";
import HeroSection from "../components/HeroSection"
export default function Home() {
  return (
  <h1 className="text-3xl text-center">
    <HeroSection/>
    <ProductsSecton/>
  </h1>
  );
}
