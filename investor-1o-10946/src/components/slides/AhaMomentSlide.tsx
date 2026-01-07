import SlideContainer from "@/components/ui/SlideContainer";

interface AhaMomentSlideProps {
  onNavigateNext: () => void;
}

const journeySteps = [
  {
    title: "Tell us about your SMB",
    colorClass: "bg-soft-blue",
  },
  {
    title: "Tailored Recommendations",
    colorClass: "bg-brand-lightMint",
  },
  {
    title: "Activate your benefits",
    colorClass: "bg-brand-cream",
  },
];

const AhaMomentSlide = ({ onNavigateNext }: AhaMomentSlideProps) => {
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/40"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col px-10 md:px-14 lg:px-16 pb-12 pt-10">
        <h1 className="text-center text-[clamp(1.75rem,2.8vw,3.5rem)] font-bold text-brand-darkBlue whitespace-nowrap">
          Introducing Cakewalk:{" "}
          <span className="text-brand-blue">Benefits in minutes, not weeks.</span>
        </h1>

        <div className="relative mt-10 flex flex-1 items-center justify-center">
          <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:gap-0 sm:-space-x-10">
            {journeySteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-none items-center justify-center overflow-visible"
              >
                <div
                  className={`relative z-10 flex h-[24rem] w-[24rem] flex-none items-center justify-center rounded-full ${step.colorClass} px-6 text-center shadow-lg aspect-square md:h-[30rem] md:w-[30rem] ${
                    index === 1 ? "ring-2 ring-white/70" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-brand-darkBlue md:text-base">
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default AhaMomentSlide;
