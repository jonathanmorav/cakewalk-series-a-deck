import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface TheNeedSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 4: The Need
 *
 * Structure: WHO → SCALE → WHY
 */
const TheNeedSlide = ({ onNavigateNext }: TheNeedSlideProps) => {
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
      background="bg-gradient-to-br from-brand-blue/5 via-white to-brand-cream"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20">
        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-darkBlue text-center"
        >
          People are people, benefits shouldn’t discriminate.
        </motion.h1>

        {/* Subtitle */}

        {/* SCALE - Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-3 gap-8 md:gap-16 max-w-4xl w-full mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-2 relative inline-block">
                {stat.value}
                <sup className="absolute -top-1 -right-4 text-[10px] md:text-xs font-medium text-brand-gray/40">
                  {index + 1}
                </sup>
              </p>
              <p className="text-sm md:text-base text-brand-gray">
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
          className="absolute bottom-20 left-8 text-[10px] text-brand-gray/50 space-y-0.5"
        >
          {stats.map((stat, index) => (
            <p key={index}>
              <sup>{index + 1}</sup>{" "}
              <a
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue hover:underline transition-colors"
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

export default TheNeedSlide;
