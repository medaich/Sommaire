import { Pizza } from "lucide-react";
import BgGradient from "../common/bg-gradient";

const DemoSection = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl p-8 lg:py-24">
        <div>
          <div className="space-y-4">
            <Pizza
              aria-hidden="true"
              className="mx-auto size-10 rounded-2xl border-[.5px] bg-slate-100 p-2 text-rose-500"
            />
            <h2 className="text-center text-3xl font-bold">
              Watch how Sommaire transforms{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </h2>
          </div>

          {/* Summary viewer */}
        </div>
        <BgGradient />
      </div>
    </section>
  );
};

export default DemoSection;
