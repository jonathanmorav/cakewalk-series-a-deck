import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface CompetitiveAdvantageSlideProps {
  onNavigateNext: () => void;
}

const CompetitiveAdvantageSlide = ({ onNavigateNext }: CompetitiveAdvantageSlideProps) => {
  const painPoints = [
    {
      title: "Poor Experience",
      description: "Fragmented systems, weeks to enroll",
      cardClassName: "bg-white text-brand-darkBlue border border-brand-darkBlue/10",
      accentClassName: "bg-brand-blue",
      numberClassName: "text-brand-blue",
    },
    {
      title: "Higher Prices",
      description: "Enterprise scale distribution costs passed to SMB customers",
      cardClassName: "bg-white text-brand-darkBlue border border-brand-darkBlue/10",
      accentClassName: "bg-brand-mint",
      numberClassName: "text-brand-mint",
    },
    {
      title: "Bad Plans",
      description: "Adverse selection drives up costs, limits options",
      cardClassName: "bg-white text-brand-darkBlue border border-brand-darkBlue/10",
      accentClassName: "bg-brand-orange",
      numberClassName: "text-brand-orange",
    },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/35"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col px-10 pb-12 pt-10 md:px-14 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-6xl text-center"
        >
          <h1 className="text-[clamp(1.8rem,2.6vw,3rem)] font-bold text-brand-darkBlue whitespace-nowrap">
            PEOs, carriers, and legacy distribution failed SMBs
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-1 items-center justify-center"
        >
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                className={`flex min-h-[18rem] flex-col justify-between rounded-3xl p-6 shadow-lg ${point.cardClassName}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold tracking-[0.2em] ${point.numberClassName}`}>
                      0{index + 1}
                    </span>
                    <div className={`h-1 w-10 rounded-full ${point.accentClassName}`} />
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                    {point.title}
                  </h2>
                </div>
                <p className="text-base md:text-lg text-brand-gray">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default CompetitiveAdvantageSlide;
