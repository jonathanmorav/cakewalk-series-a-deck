import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface SolutionSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 3: Solution
 * Bold hero headline
 */
const SolutionSlide = ({ onNavigateNext }: SolutionSlideProps) => {
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/90 to-brand-purple/80"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-mint/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-12 md:px-20 pb-16 z-10">
        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-center max-w-5xl"
        >
          Size doesn't{" "}
          <span className="text-brand-mint">matter</span>.
        </motion.h1>
      </div>
    </SlideContainer>
  );
};

export default SolutionSlide;
