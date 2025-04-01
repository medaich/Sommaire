import { PricingTier } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  pricing: PricingTier;
}

const PricingCard = ({ pricing }: PricingCardProps) => {
  const { label, description, price, advanteges, isRecommended } = pricing;

  return (
    <li
      className={cn(
        "flex h-[450px] w-full max-w-lg flex-1 flex-col justify-between space-y-4 rounded-2xl border border-gray-200 p-8 transition-transform duration-400 hover:scale-108",
        {
          "border-2 border-rose-600": isRecommended,
        },
      )}
    >
      <div className="space-y-4">
        <h3 className="font-bold">{label}</h3>
        <p>{description}</p>
      </div>

      <div className="flex gap-2">
        <div className="text-5xl font-extrabold">${price}</div>
        <div className="self-center text-xs">
          <span className="font-semibold">USD</span>
          <br />
          <span>/month</span>
        </div>
      </div>
      <ul className="space-y-4">
        {advanteges.map((adv, idx) => (
          <li key={idx}>
            <Check className="mr-2 inline w-4" />
            <span>{adv}</span>
          </li>
        ))}
      </ul>

      <Link
        href={"#"}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500/80 to-rose-500 p-2 text-lg text-white ring-1 transition-colors duration-150 outline-none hover:from-rose-600/90 hover:to-rose-800/90 focus:ring-rose-950 focus:ring-offset-1",
          {
            "from-rose-800/90 via-rose-700/90 to-rose-600/90 ring-rose-950":
              isRecommended,
          },
        )}
      >
        <span className="capitalize">Buy now</span>
        <ArrowRight className="w-5" />
      </Link>
    </li>
  );
};

export default PricingCard;
