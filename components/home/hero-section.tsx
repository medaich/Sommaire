import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative mx-auto z-0 flex flex-col items-center py-16 sm:py-20 animate-in transition-all max-w-7xl lg:px-12">
      <div className="relative bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x rounded-full p-[1px] group">
        <Badge
          variant="secondary"
          className="rounded-full px-6 py-2 text-base bg-white group-hover:bg-gray-50/50 transition-colors duration-200"
        >
          <Sparkles className="!size-8 text-rose-600 animate-pulse mr-2 " />
          <p className="text-rose-600">Powered by AI</p>
        </Badge>
      </div>

      <h1 className="text-center py-6">
        Transform PDFs into{" "}
        <span className="relative px-2">
          concise
          <span
            className="inline-block bg-rose-100 rounded-lg -rotate-2
            absolute inset-0 -z-10"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>

      <div>
        <Button
          variant={"link"}
          className="rounded-full mt-6 text-base sm:text-lg lg:text-xl bg-linear-to-r from-slate-800 to-rose-800 hover:from-rose-800 hover:to-slate-800 transition-colors duration-300 px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 hover:no-underline shadow-lg"
        >
          <Link href="#pricing" className="gap-2 flex items-center text-white ">
            <span className="font-bold">Try Sommaire</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
