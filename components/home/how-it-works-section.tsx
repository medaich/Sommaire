import { steps } from "@/lib/consts";
import Step from "../common/step";

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 p-8 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-center font-bold text-rose-500 uppercase">
            How it works
          </h2>
          <h3 className="text-center text-3xl font-bold">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              Icon={step.icon}
              showArrow={index < steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
