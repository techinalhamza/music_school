import { Clients } from "@/components/Clients";
import FeatureCourses from "@/components/FeatureCourses";
import FeatureWebinars from "@/components/FeatureWebinars";
import Hero from "@/components/Hero";
import InfiniteCards from "@/components/InfiniteCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCourses />
      <WhyChooseUs />
      <InfiniteCards />
      <FeatureWebinars />
      <Clients />
    </>
  );
}
