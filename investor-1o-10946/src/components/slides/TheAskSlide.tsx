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
 * Slide 13: The Raise
 * Financing summary — Mission-style atmosphere with bold typography on gradient.
 */
const TheAskSlide = ({ onNavigateNext, slideNumber, totalSlides }: TheAskSlideProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-darkBlue via-brand-blue to-brand-purple/90"
        onNavigateNext={onNavigateNext}
      >
        <div className="absolute top-10 right-0 w-48 h-48 bg-brand-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-40 h-40 bg-brand-purple/15 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-center px-2"
        >
          <h2 className="text-3xl font-bold text-white leading-relaxed">The Raise</h2>

          <p className="mt-8 text-5xl font-bold text-brand-mint">$5M</p>
          <p className="mt-2 text-xl font-semibold text-white">New Equity Commitment</p>

          <p className="mt-8 text-2xl font-medium text-white/95">$36.6M Pre-money Valuation</p>
          <p className="mt-1 text-base text-brand-mint/80">Series A-1</p>

          <div className="mt-10 pt-6 border-t border-white/20">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-mint/90">Previous Round</p>
            <p className="mt-3 text-xl font-semibold text-white">Seed Round &middot; SAFE Note</p>
            <p className="mt-2 text-base text-white/80">757K raised &middot; 10M Post-Money Valuation Cap</p>
          </div>
        </motion.div>
      </MobileSlideContainer>
    );
  }

  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue to-brand-purple/90"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
      sectionLabel="The Raise"
      lightLabel
      slideNumber={slideNumber}
      totalSlides={totalSlides}
    >
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-mint/5 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="text-brand-mint">$5M</span> New Equity Commitment
          </h2>

          <p className="mt-8 text-2xl md:text-3xl lg:text-4xl font-medium text-white/95 leading-snug">
            $36.6M Pre-money Valuation
          </p>
          <p className="mt-2 text-lg md:text-xl text-brand-mint/80">Series A-1</p>

          <div className="mt-12 pt-8 border-t border-white/20 max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint/90">Previous Round</p>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-white">
              Seed Round &middot; SAFE Note
            </p>
            <p className="mt-2 text-base md:text-lg text-white/80">
              757K raised &middot; 10M Post-Money Valuation Cap
            </p>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default TheAskSlide;
