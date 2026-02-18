import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface TheAskSlideProps {
  onNavigateNext: () => void;
  slideNumber?: number;
  totalSlides?: number;
}

/**
 * Slide 13: The Ask — Funding Request
 * Financing summary with current raise and previous round context.
 */
const TheAskSlide = ({ onNavigateNext, slideNumber, totalSlides }: TheAskSlideProps) => {
  const isMobile = useIsMobile();

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/95 to-brand-purple/90"
        onNavigateNext={onNavigateNext}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-brand-mint/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 mb-5 w-full rounded-2xl bg-white p-6 text-center shadow-lg"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-darkBlue">The Ask</p>
          <h2 className="mt-5 text-4xl font-bold text-brand-blue">$5M</h2>
          <p className="mt-2 text-2xl font-semibold text-brand-blue">New Equity Commitment</p>
          <p className="mt-6 text-2xl font-medium text-brand-darkBlue">$36.6M Pre-money Valuation</p>
          <p className="mt-2 text-base text-brand-gray">Series A-1</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 w-full rounded-2xl bg-gradient-to-r from-brand-darkBlue to-brand-blue p-5 text-white shadow-lg"
        >
          <p className="text-sm font-semibold tracking-wide text-white/95">Previous Round</p>
          <div className="mt-3 border-l border-white/60 pl-4">
            <p className="text-lg font-semibold text-white">Seed Round</p>
            <p className="mt-1 text-base text-white/85">SAFE Note</p>
            <p className="mt-3 text-base text-white/90">757K raised</p>
            <p className="mt-1 text-base text-white/90">10M Post-Money Valuation Cap</p>
          </div>
        </motion.div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/95 to-brand-purple/90"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
      sectionLabel="The Ask"
      lightLabel
      slideNumber={slideNumber}
      totalSlides={totalSlides}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-mint/10 blur-3xl" />

      <div className="absolute inset-0 z-10 flex flex-col px-12 py-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-white"
        >
          <h2 className="text-2xl font-bold md:text-3xl">The Ask</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          <div className="grid h-full grid-rows-[1fr_210px]">
            <div className="flex flex-col items-start justify-center px-10 py-8 lg:px-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-darkBlue/80">The Ask</p>
              <h3 className="mt-10 text-6xl font-bold leading-none text-brand-blue">$5M</h3>
              <p className="mt-5 text-[clamp(1.9rem,3vw,3rem)] font-semibold text-brand-blue">New Equity Commitment</p>
              <p className="mt-10 text-[clamp(2rem,3vw,3.2rem)] font-medium leading-tight text-brand-darkBlue">
                $36.6M Pre-money Valuation
              </p>
              <p className="mt-2 text-xl text-brand-gray">Series A-1</p>
            </div>

            <div className="flex items-center bg-gradient-to-r from-brand-darkBlue to-brand-blue px-10 lg:px-14">
              <div className="border-l border-white/60 pl-5 text-white">
                <p className="text-xl font-semibold text-white/95">Previous Round</p>
                <p className="mt-3 text-3xl font-semibold">Seed Round</p>
                <p className="mt-2 text-xl text-white/85">SAFE Note</p>
                <p className="mt-4 text-xl text-white/95">757K raised</p>
                <p className="mt-1 text-xl text-white/95">10M Post-Money Valuation Cap</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default TheAskSlide;
