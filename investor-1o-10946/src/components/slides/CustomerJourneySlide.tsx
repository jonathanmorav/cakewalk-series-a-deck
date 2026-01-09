import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import CustomerJourneyDiagram from "@/components/CustomerJourneyDiagram";

interface CustomerJourneySlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 7: Customer Journey - Compressed timeline
 * YC-style: Visual before/after with dramatic time and step reduction
 */
const CustomerJourneySlide = ({ onNavigateNext }: CustomerJourneySlideProps) => {
  const headlineStats = [
    {
      label: "Steps",
      value: "40+",
      detail: "Manual handoffs and approvals",
    },
    {
      label: "Timeline",
      value: "8-12 weeks",
      detail: "Back-and-forth to activate coverage",
    },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/30 via-white to-brand-lightMint/50"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-start px-10 md:px-14 lg:px-16 pb-12 pt-12 text-center">
        <div className="absolute left-1/2 top-8 -translate-x-1/2">
          <h2 className="text-[clamp(1.5rem,2.8vw,3.5rem)] font-bold text-brand-darkBlue whitespace-nowrap">
            A Broken Customer Journey
          </h2>
        </div>
        <div className="mt-[10vh] flex w-full flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-12 md:grid-cols-2"
          >
          {headlineStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gray">
                {stat.label}
              </p>
              <p className="mt-4 text-4xl md:text-5xl font-bold text-brand-blue">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-brand-gray">{stat.detail}</p>
            </div>
          ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex w-full max-w-6xl items-center justify-center"
          >
            <CustomerJourneyDiagram />
          </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default CustomerJourneySlide;
