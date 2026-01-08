import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface CompetitiveAdvantageSlideProps {
  onNavigateNext: () => void;
}

const CompetitiveAdvantageSlide = ({ onNavigateNext }: CompetitiveAdvantageSlideProps) => {
  const comparisonRows = [
    {
      category: "Time to Coverage",
      current: "3-6 weeks",
      cakewalk: "Minutes",
    },
    {
      category: "Process Steps",
      current: "40+ manual handoffs",
      cakewalk: "3 simple steps",
    },
    {
      category: "Underwriting",
      current: "Manual, days to weeks",
      cakewalk: "Instant, automated",
    },
    {
      category: "Premium Cost",
      current: "50% higher for SMBs",
      cakewalk: "Enterprise-grade pricing",
    },
    {
      category: "Benefits Quality",
      current: "Limited options",
      cakewalk: "Fortune 500 benefits",
    },
    {
      category: "Technology",
      current: "Fragmented & legacy systems",
      cakewalk: "End-to-end digital",
    },
  ];

  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col px-10 pb-12 pt-10 md:px-14 lg:px-16">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-4 max-w-6xl text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkBlue">
            Why Cakewalk Wins
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brand-gray max-w-3xl mx-auto">
            End-to-end technology and risk pooling, purpose-built for the SMB.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-1 items-center justify-center"
        >
          <div className="w-full max-w-4xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 pb-4">
              <div />
              <div className="text-center">
                <p className="text-sm font-medium text-brand-gray/60 uppercase tracking-wider">Incumbent</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-brand-blue uppercase tracking-wider">Cakewalk</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-1">
              {comparisonRows.map((row, index) => (
                <motion.div
                  key={row.category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="grid grid-cols-3 items-center py-4"
                >
                  {/* Category */}
                  <div>
                    <p className="text-base font-semibold text-brand-darkBlue">{row.category}</p>
                  </div>

                  {/* Current/Traditional */}
                  <div className="text-center">
                    <p className="text-base text-brand-gray/70">{row.current}</p>
                  </div>

                  {/* Cakewalk */}
                  <div className="text-center">
                    <span className="inline-block rounded-full bg-brand-mint/20 px-4 py-1.5 text-base font-medium text-brand-darkBlue">
                      {row.cakewalk}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default CompetitiveAdvantageSlide;
