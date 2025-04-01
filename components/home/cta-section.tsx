import CTAButton from "../common/cta-button";

const CTASection = () => {
  return (
    <section className="bg-gray-50 px-4 py-24 text-center md:py-32">
      <div className="mx-auto w-full max-w-3xl space-y-4">
        <h3 className="text-[26px] font-bold sm:text-4xl">
          Ready to Save Hours of Reading Time?
        </h3>
        <p className="text-gray-500 sm:text-lg">
          Transform lengthy documents into clear, actionable insights with our
          AI-powered summarizer.
        </p>
        <CTAButton
          href="#pricing"
          label="Get started"
          className="rounded px-6 py-3"
        />
      </div>
    </section>
  );
};

export default CTASection;
