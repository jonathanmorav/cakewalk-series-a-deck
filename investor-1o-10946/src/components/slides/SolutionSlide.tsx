import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface SolutionSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 3: The Need (with Solution design)
 * Bold hero headline + stats row
 */
const SolutionSlide = ({ onNavigateNext }: SolutionSlideProps) => {
  const stats = [
    {
      value: "34M+",
      label: "small businesses",
      source: "SBA Office of Advocacy, 2024",
      url: "https://advocacy.sba.gov/2024/11/19/new-advocacy-report-shows-small-business-total-reaches-34-8-million-accounting-for-2-6-million-net-new-jobs-in-latest-year-of-data/",
    },
    {
      value: "<30%",
      label: "offer comprehensive benefits",
      source: "Bureau of Labor Statistics",
      url: "https://www.bls.gov/opub/ted/2018/the-benefits-of-working-for-a-small-business.htm",
    },
    {
      value: "50%",
      label: "Higher premium for employees",
      source: "Commonwealth Fund, 2024",
      url: "https://www.commonwealthfund.org/publications/issue-briefs/2024/dec/trends-employer-health-insurance-costs-2014-2023",
    },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/90 to-brand-purple/80"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-mint/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20 z-10">
        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center"
        >
          <h1 className="mb-2">People are people.</h1>
          <h1 className="whitespace-nowrap">
            Employee benefits shouldn't <span className="text-brand-mint">discriminate</span>.
          </h1>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-3 gap-8 md:gap-16 max-w-4xl w-full"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-mint mb-2 relative inline-block">
                {stat.value}
                <sup className="absolute -top-1 -right-4 text-[10px] md:text-xs font-medium text-white/40">
                  {index + 1}
                </sup>
              </p>
              <p className="text-xl md:text-2xl text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sources - Academic footnote style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-20 left-8 text-[10px] text-white/40 space-y-0.5"
        >
          {stats.map((stat, index) => (
            <p key={index}>
              <sup>{index + 1}</sup>{" "}
              <a
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-mint hover:underline transition-colors"
              >
                {stat.source}
              </a>
            </p>
          ))}
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default SolutionSlide;
