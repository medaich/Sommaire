import { pricings } from "@/lib/consts";
import PricingCard from "../common/pricing-card";

const PricingSection = () => {
  return (
    <section className="p-8 px-4 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        <h2 className="text-center font-bold text-rose-500 uppercase">
          Pricing
        </h2>
        <ul className="flex items-center gap-8 max-lg:flex-col">
          {pricings.map((pricing, index) => (
            <PricingCard pricing={pricing} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PricingSection;
