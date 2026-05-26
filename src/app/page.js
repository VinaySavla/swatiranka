import HeroSlideshow from "@/components/HeroSlideshow";
import QuoteSection from "@/components/QuoteSection";
import MeetTheMaker from "@/components/MeetTheMaker";
import CollectionList from "@/components/CollectionList";
import Testimonials from "@/components/Testimonials";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/mockData";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <>
      <HeroSlideshow />
      <QuoteSection />
      <MeetTheMaker />
      <CollectionList />
      <section className="py-12 lg:py-16 bg-[#f5f5f5]">
        <div className="page-width">
          <h2 className="font-heading text-[2.4rem] lg:text-[3rem] font-light text-[#121212] text-center mb-8 lg:mb-12 tracking-wide">
            Featured Artworks
          </h2>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      <Testimonials />
    </>
  );
}
