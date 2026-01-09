import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";
import cakewalkLogo from "@/assets/cakewalk-logo-new.png";

interface CoverSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 1: Cover
 * Clean white background with logo and text.
 */
const CoverSlide = ({ onNavigateNext }: CoverSlideProps) => {
  const isMobile = useIsMobile();
  const formattedMonthYear = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-white"
        showLogo={false}
        onNavigateNext={onNavigateNext}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={cakewalkLogo}
              alt="Cakewalk Benefits"
              className="w-64 h-auto"
            />
          </motion.div>

          <motion.h1
            className="mt-6 text-brand-darkBlue text-2xl font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Series A Investor Deck
          </motion.h1>

          <motion.p
            className="mt-2 text-brand-gray text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {formattedMonthYear}
          </motion.p>
        </div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-white"
      showLogo={false}
      onNavigateNext={onNavigateNext}
    >
      {/* Content */}
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
          />
        </motion.div>

        <motion.h1
          className="mt-8 text-brand-darkBlue text-3xl font-semibold tracking-wide md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Series A Investor Deck
        </motion.h1>

        <motion.p
          className="mt-3 text-brand-gray text-lg"
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
