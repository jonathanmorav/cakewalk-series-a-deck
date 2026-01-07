import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface GTMDistributionProps {
  onNavigateNext: () => void;
}

const channels = [
  {
    title: "Trusted Insurance Advisors",
    description: "Licensed agents & brokers already serving SMBs",
    cardClassName: "bg-brand-darkBlue text-white",
    accentClassName: "bg-brand-mint/80",
    titleClassName: "text-white",
    descriptionClassName: "text-white/80",
  },
  {
    title: "Professional Networks",
    description: "Associations & membership organizations",
    cardClassName: "bg-brand-blue text-white",
    accentClassName: "bg-brand-lightMint/80",
    titleClassName: "text-white",
    descriptionClassName: "text-white/85",
  },
  {
    title: "Platform Partnerships",
    description: "Embedded in SMB software & services",
    cardClassName: "bg-brand-teal/85 text-brand-darkBlue",
    accentClassName: "bg-brand-darkBlue/60",
    titleClassName: "text-white",
    descriptionClassName: "text-white/85",
  },
];

const GTMDistribution = ({ onNavigateNext }: GTMDistributionProps) => {
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/30"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col px-10 md:px-14 lg:px-16 pb-12 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-6xl text-center"
        >
          <h1 className="text-4xl font-bold text-brand-darkBlue md:text-5xl">
            Trusted resellers already reach 34M SMBs. Cakewalk scales through them.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-1 items-center justify-center"
        >
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                className={`flex min-h-[18rem] flex-col justify-between rounded-3xl p-6 shadow-lg ${channel.cardClassName}`}
              >
                <div>
                  <div className={`h-1 w-12 rounded-full ${channel.accentClassName}`} />
                  <h2 className={`mt-5 text-3xl font-semibold leading-tight md:text-4xl ${channel.titleClassName}`}>
                    {channel.title}
                  </h2>
                </div>
                <p className={`text-base md:text-lg ${channel.descriptionClassName}`}>
                  {channel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default GTMDistribution;
