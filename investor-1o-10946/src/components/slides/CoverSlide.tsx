import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import VantaAnimation from "@/components/cover/VantaAnimation";
import cakewalkLogo from "@/assets/cakewalk-logo.png";

interface CoverSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 1: Cover
 * Full-screen hero with logo, starfield background, and round details.
 */
const CoverSlide = ({ onNavigateNext }: CoverSlideProps) => {
  const formattedMonthYear = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <SlideContainer
      background="bg-brand-darkBlue"
      showLogo={false}
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
    >
      {/* Animated starfield background */}
      <VantaAnimation />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
          <img
            src={cakewalkLogo}
            alt="Cakewalk Benefits"
            className="w-full max-w-[500px] h-auto"
            style={{
              filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.15))",
            }}
          />
        </motion.div>

        <motion.h1
          className="mt-8 text-white text-3xl font-semibold tracking-wide md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Series A Investor Deck
        </motion.h1>

        <motion.p
          className="mt-3 text-white/70 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {formattedMonthYear}
        </motion.p>

      </div>
    </SlideContainer>
  );
};

export default CoverSlide;
