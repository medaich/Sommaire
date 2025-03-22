import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";

const Page = () => {
  return (
    <div className="relative">
      <BgGradient />
      <div className="flex flex-col"></div>
      <HeroSection />
      {/* <DemoSection />
      <HowItWorksSection/>
      <PricingSection />
      <CTASection /> */}
    </div>
  );
};

export default Page;
