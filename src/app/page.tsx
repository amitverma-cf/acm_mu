import Events from "@/components/app/Events";
import FAQ from "@/components/app/FAQ";
import HeroSection from "@/components/app/Hero-Section";
import Marquee from "@/components/app/Marquee";
import Membership from "@/components/app/Membership";
import Showcase from "@/components/app/Showcase";
import Testimonial from "@/components/app/Testimonial";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <Showcase />
      <Events />
      <Testimonial />
      <Membership />
      <FAQ />
    </>
  );
}
