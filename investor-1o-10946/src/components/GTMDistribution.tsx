import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface GTMDistributionProps {
  onNavigateNext: () => void;
}

const GTMDistribution = ({ onNavigateNext }: GTMDistributionProps) => {
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/30"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col px-10 md:px-14 lg:px-16 pb-12 pt-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-6xl text-center"
        >
          <h1 className="text-3xl font-bold text-brand-darkBlue md:text-4xl lg:text-5xl whitespace-nowrap">
            Partner led distribution unlocks access to 34M SMBs.
          </h1>
          <p className="mt-3 text-lg text-brand-gray md:text-xl">
            Our GTM revolves around agents, platforms, and advisors who already serve SMBs in trusted capacities.
          </p>
        </motion.div>

        {/* Funnel Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-1 items-center justify-center"
        >
          <div className="flex w-full max-w-5xl items-center justify-center gap-16">
            {/* Funnel */}
            <div className="flex flex-col items-center gap-4">
              {/* Top box - widest */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex min-h-[5rem] w-[32rem] items-center justify-center rounded-2xl bg-brand-darkBlue px-8 py-5 shadow-lg"
              >
                <p className="text-center text-xl font-semibold text-white md:text-2xl">
                  34 Million Small Businesses
                </p>
              </motion.div>

              {/* Dotted connector */}
              <div className="h-6 border-l-2 border-dashed border-brand-gray/40" />

              {/* Middle box - medium width */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex min-h-[5rem] w-[24rem] items-center justify-center rounded-2xl bg-brand-blue px-8 py-5 shadow-lg"
              >
                <p className="text-center text-xl font-semibold text-white md:text-2xl whitespace-nowrap">
                  2 Million Distribution Partners
                </p>
              </motion.div>

              {/* Dotted connector */}
              <div className="h-6 border-l-2 border-dashed border-brand-gray/40" />

              {/* Bottom section with badge and targets */}
              <div className="flex items-center gap-8">
                {/* 2026 Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-mint shadow-lg"
                >
                  <span className="text-2xl font-bold text-white">2026</span>
                  <span className="text-xs font-medium text-white">Target</span>
                </motion.div>

                {/* Target box - narrowest */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex min-h-[5rem] w-[20rem] flex-col items-center justify-center rounded-2xl bg-brand-mint px-8 py-5 shadow-lg"
                >
                  <p className="text-center text-lg font-semibold text-brand-darkBlue md:text-xl whitespace-nowrap">
                    1,000 Distribution Partners
                  </p>
                  <p className="text-center text-lg font-semibold text-brand-darkBlue md:text-xl">
                    5,000 SMBs
                  </p>
                  <p className="text-center text-lg font-semibold text-brand-darkBlue md:text-xl">
                    25,000 Lives Served
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default GTMDistribution;
