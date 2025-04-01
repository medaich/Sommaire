import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import CTAButton from "@/components/common/cta-button";

const HeroSection = () => {
  return (
    <section className="animate-in relative z-0 mx-auto flex max-w-7xl flex-col items-center py-16 transition-all sm:py-20 lg:px-12">
      <div className="animate-gradient-x group relative rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 p-[1px]">
        <Badge
          variant="secondary"
          className="rounded-full bg-white px-6 py-2 text-base transition-colors duration-200 group-hover:bg-gray-50/50"
        >
          <Sparkles className="mr-2 !size-8 animate-pulse text-rose-600" />
          <p className="text-rose-600">Powered by AI</p>
        </Badge>
      </div>

      <h1 className="py-6 text-center">
        Transform PDFs into{" "}
        <span className="relative px-2">
          concise
          <span
            className="absolute inset-0 -z-10 inline-block -rotate-2 rounded-lg bg-rose-100"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </h1>
      <h2 className="px-4 text-center text-lg text-gray-600 sm:text-xl lg:max-w-4xl lg:px-0 lg:text-2xl">
        Get a beautiful summary reel of the document in seconds.
      </h2>

      <div>
        <CTAButton
          href="#pricing"
          label="Try Sommaire"
          className="mt-6 font-bold sm:px-10 sm:py-7 sm:text-lg lg:mt-16 lg:px-12 lg:py-8 lg:text-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
