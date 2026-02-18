import { useState } from "react";
import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface TAMSlideProps {
  onNavigateNext: () => void;
  slideNumber?: number;
  totalSlides?: number;
}

/**
 * Slide 5: TAM / SAM / SOM
 * YC-style: simple framing, big numbers, clear addressable definition
 */
const TAMSlide = ({ onNavigateNext, slideNumber, totalSlides }: TAMSlideProps) => {
  const isMobile = useIsMobile();
  const [showSources, setShowSources] = useState(false);

  const totalMarketCircle = {
    id: "total-market",
    label: "Total U.S. Benefits Premium Market",
    value: "$1.69T",
    valueSources: "1-7",
    detail: "All U.S. employer-sponsored benefits premiums.",
    circleClassName: "bg-brand-blue text-white",
    sizeClassName: "h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem]",
    labelClassName: "text-brand-blue",
  };

  const tamCircle = {
    id: "tam",
    label: "TAM",
    value: "$656B",
    valueSources: "1-7,8",
    detail: "Addressable SMB market (<=50 employees; 38.85% of total market).",
    circleClassName: "bg-brand-mint text-brand-darkBlue",
    sizeClassName: "h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80",
    labelClassName: "text-brand-mint",
  };

  const circleDetails = [totalMarketCircle, tamCircle];

  const sourceLinks = [
    {
      id: 1,
      label: "Grand View Research - U.S. Group Health Insurance Market Report",
      url: "https://www.grandviewresearch.com/industry-analysis/us-group-health-insurance-market-report",
    },
    {
      id: 2,
      label: "Towards Healthcare - U.S. Dental Insurance Market",
      url: "https://www.towardshealthcare.com/insights/us-dental-insurance-market",
    },
    {
      id: 3,
      label: "IBISWorld - Vision Insurance in the United States",
      url: "https://www.ibisworld.com/united-states/industry/vision-insurance/5914/",
    },
    {
      id: 4,
      label: "Precedence Research - Group Life Insurance Market",
      url: "https://www.precedenceresearch.com/group-life-insurance-market",
    },
    {
      id: 5,
      label: "Milliman - 2025 U.S. Group Disability Market Survey Summary",
      url: "https://us.milliman.com/en/insight/2025-us-group-disability-market-survey-summary",
    },
    {
      id: 6,
      label: "Precedence Research - U.S. Supplemental Health Market",
      url: "https://www.precedenceresearch.com/us-supplemental-health-market",
    },
    {
      id: 7,
      label:
        "Datos Insights - AI and Digital Innovation Reshape the Group Benefits Landscape in 2024 (citing Eastbridge Consulting)",
      url: "https://datos-insights.com/blog/ai-and-digital-innovation-reshape-the-group-benefits-landscape-in-2024/",
    },
    {
      id: 8,
      label: "U.S. Census Bureau - County Business Patterns 2023 (employment by establishment size)",
      url: "https://api.census.gov/data/2023/cbp?get=EMP,EMPSZES,EMPSZES_LABEL,NAICS2017&for=us:*",
    },
  ];

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-white via-brand-cream/30 to-brand-lightBlue/10"
        onNavigateNext={onNavigateNext}
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-brand-darkBlue text-center mb-6"
        >
          <h1 className="mb-1">Cakewalk unlocks benefits for SMBs.</h1>
          <h1 className="text-lg">The largest overlooked insurance market in the U.S.</h1>
        </motion.div>

        {/* TAM Visualization - Scaled down */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex items-center justify-center mb-6"
        >
          <div className="relative h-48 w-48">
            {/* TAM Circle */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-brand-blue text-white shadow-md">
              <span className="absolute top-3 text-lg font-bold">$1.69T</span>
            </div>

            {/* SAM Circle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-28 w-28 flex items-center justify-center rounded-full bg-brand-mint text-brand-darkBlue shadow-lg">
              <span className="absolute top-2 text-base font-bold">$656B</span>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-3 w-full"
        >
          {circleDetails.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <span className={`h-3 w-3 rounded-full ${item.circleClassName}`} />
              <div>
                <p className={`text-sm font-semibold leading-snug ${item.labelClassName}`}>
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-brand-gray leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-5 w-full"
        >
          <button
            type="button"
            onClick={() => setShowSources((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white/85 px-4 py-2 text-sm font-medium text-brand-gray hover:text-brand-darkBlue transition-colors"
            aria-expanded={showSources}
          >
            {showSources ? "Hide sources" : "Show sources"}
          </button>
          <div
            className={`mt-3 overflow-hidden rounded-lg border border-brand-blue/10 bg-white/90 transition-all duration-300 ${
              showSources ? "max-h-72 p-3 opacity-100" : "max-h-0 p-0 opacity-0 border-transparent"
            }`}
          >
            <div className="space-y-2 text-xs text-brand-gray leading-relaxed max-h-64 overflow-auto">
              {sourceLinks.map((source) => (
                <span key={source.id} className="block">
                  {source.id}.{" "}
                  <a
                    className="underline decoration-brand-blue/40 hover:text-brand-blue"
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.label}
                  </a>
                </span>
              ))}
              <span className="block">
                Notes: midpoints used where sources provide ranges; supplemental health 2024 total derived from the 2024 product table in source 6.
              </span>
            </div>
          </div>
        </motion.div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-gradient-to-br from-white via-brand-cream/30 to-brand-lightBlue/10"
      onNavigateNext={onNavigateNext}
      sectionLabel="Total Addressable Market"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkBlue text-center leading-tight"
        >
          <h1 className="mb-2">Cakewalk unlocks benefits for SMBs.</h1>
          <h1>The largest overlooked insurance market in the U.S.</h1>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 w-full max-w-6xl"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
            <div className="relative flex items-center justify-center">
              <div className={`relative ${tamCircle.sizeClassName}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.45 }}
                  className={`absolute inset-0 flex items-center justify-center rounded-full shadow-md ${totalMarketCircle.circleClassName}`}
                >
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xl sm:text-2xl md:text-3xl font-bold">
                    {totalMarketCircle.value}
                    {totalMarketCircle.valueSources ? (
                      <span className="align-super text-[0.6rem] ml-0.5">
                        {totalMarketCircle.valueSources}
                      </span>
                    ) : null}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
                  className="absolute inset-0 flex items-end justify-center pb-0"
                >
                  <div
                    className={`relative flex items-center justify-center rounded-full shadow-lg ${samCircle.circleClassName} ${samCircle.sizeClassName}`}
                  >
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 text-lg sm:text-xl md:text-2xl font-bold">
                      {samCircle.value}
                      {samCircle.valueSources ? (
                        <span className="align-super text-[0.55rem] ml-0.5">
                          {samCircle.valueSources}
                        </span>
                      ) : null}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-6 text-center md:text-left">
              {circleDetails.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + index * 0.1 }}
                  className="max-w-md"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${item.circleClassName}`} />
                    <p
                      className={`text-base font-semibold leading-snug ${item.labelClassName}`}
                    >
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-2 text-base text-brand-gray leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-4 w-full max-w-6xl text-brand-gray leading-relaxed">
          <button
            type="button"
            onClick={() => setShowSources((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white/85 px-4 py-2 text-sm font-medium text-brand-gray hover:text-brand-darkBlue transition-colors"
            aria-expanded={showSources}
          >
            {showSources ? "Hide sources" : "Show sources"}
          </button>
          <div
            className={`mt-3 overflow-hidden rounded-xl border border-brand-blue/10 bg-white/90 transition-all duration-300 ${
              showSources ? "max-h-72 p-4 opacity-100" : "max-h-0 p-0 opacity-0 border-transparent"
            }`}
          >
            <div className="space-y-2 text-sm leading-relaxed max-h-60 overflow-auto">
              {sourceLinks.map((source) => (
                <span key={source.id} className="block">
                  {source.id}.{" "}
                  <a
                    className="underline decoration-brand-blue/40 hover:text-brand-blue"
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.label}
                  </a>
                </span>
              ))}
              <span className="block">
                Notes: midpoints used where sources provide ranges; supplemental health 2024 total derived from the 2024 product table in source 6.
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default TAMSlide;
