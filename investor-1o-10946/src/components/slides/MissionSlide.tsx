import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface MissionSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 2: Mission
 *
 * Simple & bold per YC best practices:
 * - Mission (hero text)
 */
const MissionSlide = ({ onNavigateNext }: MissionSlideProps) => {
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue to-brand-purple/90"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
    >
      {/* Glow effects for atmosphere */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-mint/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20 z-10">
        {/* Mission - Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center max-w-5xl leading-tight"
        >
          Today, your{" "}
          <span className="text-brand-mint">company size</span>{" "}
          determines your benefits.
        </motion.h1>
      </div>
    </SlideContainer>
  );
};

export default MissionSlide;
