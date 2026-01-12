import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface MilestonesSlideProps {
  onNavigateNext: () => void;
}

const MilestonesSlide = ({ onNavigateNext }: MilestonesSlideProps) => {
  // Traction stats
  const tractionStats = [
    { value: "1,200+", label: "SMBs Served" },
    { value: "$3M+", label: "Gross Written Premium" },
    { value: "$700K+", label: "ARR Run Rate" },
  ];

  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
      sectionLabel="Traction"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-14 lg:px-16">
        {/* Traction Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue">
            Momentum Built with <span className="text-brand-blue">Speed</span>
          </h1>
        </motion.div>

        {/* Traction Stats - Large and Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid w-full max-w-6xl grid-cols-3 gap-16"
        >
          {tractionStats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue whitespace-nowrap">
                {stat.value}
              </p>
              <p className="mt-4 text-lg md:text-xl text-brand-gray">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default MilestonesSlide;
