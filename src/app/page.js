import HeroSlideshow from "@/components/HeroSlideshow";
import QuoteSection from "@/components/QuoteSection";
import MeetTheMaker from "@/components/MeetTheMaker";
import CollectionList from "@/components/CollectionList";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <QuoteSection />
      <MeetTheMaker />
      <CollectionList />
      <Testimonials />
    </>
  );
}
