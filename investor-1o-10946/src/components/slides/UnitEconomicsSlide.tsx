import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import { TrendingUp, DollarSign, Users, Repeat, Building, BarChart3 } from "lucide-react";

interface UnitEconomicsSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 11: Unit Economics & Financial Projections
 * Key financial metrics + 4-year pro forma projection table.
 */
const UnitEconomicsSlide = ({ onNavigateNext }: UnitEconomicsSlideProps) => {
  const metrics = [
    { icon: DollarSign, label: "ARPU", value: "$6,400", subtext: "per year" },
    { icon: Users, label: "CAC", value: "$800", subtext: "fully loaded" },
    { icon: TrendingUp, label: "LTV:CAC", value: "8:1", subtext: "target" },
    { icon: Repeat, label: "NRR", value: "115%", subtext: "with expansion" },
  ];

  const margins = [
    { label: "Gross Margin", value: "65%", bar: 65 },
    { label: "Contribution Margin", value: "45%", bar: 45 },
    { label: "Payback Period", value: "4 mo", bar: 33 },
  ];

  const projections = [
    { year: "Year 1", companies: "2,500", lives: "12,500", marketPct: "0.02%", monthlyRev: "$200K", annualRev: "$2.4M" },
    { year: "Year 2", companies: "10,000", lives: "50,000", marketPct: "0.08%", monthlyRev: "$1.2M", annualRev: "$14.1M" },
    { year: "Year 3", companies: "35,000", lives: "175,000", marketPct: "0.27%", monthlyRev: "$4.1M", annualRev: "$49.4M" },
    { year: "Year 4", companies: "75,000", lives: "375,000", marketPct: "0.58%", monthlyRev: "$8.8M", annualRev: "$105.8M" },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-white via-brand-cream/30 to-brand-lightMint/20"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col px-12 py-8 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">
            Unit Economics & Projections
          </span>
          <h2 className="text-3xl font-bold text-brand-darkBlue mt-1">
            A Profitable Model at Scale
          </h2>
        </motion.div>

        <div className="flex-1 grid grid-cols-12 gap-4">
          {/* Left Column: Unit Economics */}
          <div className="col-span-5 flex flex-col gap-4">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <metric.icon className="w-4 h-4 text-brand-blue" />
                    <span className="text-xs text-brand-gray">{metric.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-brand-darkBlue">{metric.value}</p>
                  <p className="text-[10px] text-brand-gray">{metric.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Margin Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex-1"
            >
              <h3 className="text-sm font-semibold text-brand-darkBlue mb-3">Margin Profile</h3>
              <div className="space-y-3">
                {margins.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-brand-gray">{item.label}</span>
                      <span className="text-xs font-semibold text-brand-darkBlue">{item.value}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.bar}%` }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-brand-blue to-brand-teal rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Financial Projections */}
          <div className="col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-brand-purple" />
                <h3 className="text-sm font-semibold text-brand-darkBlue">4-Year Financial Projections</h3>
              </div>

              {/* Projections Table */}
              <div className="flex-1 overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2 text-brand-gray font-medium"></th>
                      {projections.map(p => (
                        <th key={p.year} className="text-center py-2 text-brand-darkBlue font-semibold">{p.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 text-brand-gray">Companies</td>
                      {projections.map(p => (
                        <td key={p.year} className="text-center py-2 font-medium text-brand-darkBlue">{p.companies}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 text-brand-gray">Eligible Lives</td>
                      {projections.map(p => (
                        <td key={p.year} className="text-center py-2 font-medium text-brand-darkBlue">{p.lives}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 text-brand-gray">% of Market</td>
                      {projections.map(p => (
                        <td key={p.year} className="text-center py-2 font-medium text-brand-gray">{p.marketPct}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-2 text-brand-gray">Monthly Revenue</td>
                      {projections.map(p => (
                        <td key={p.year} className="text-center py-2 font-medium text-brand-blue">{p.monthlyRev}</td>
                      ))}
                    </tr>
                    <tr className="bg-brand-blue/5">
                      <td className="py-2 text-brand-darkBlue font-semibold">Annual Revenue</td>
                      {projections.map(p => (
                        <td key={p.year} className="text-center py-2 font-bold text-brand-blue">{p.annualRev}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Valuation Metrics */}
              <div className="mt-3 pt-3 border-t border-gray-100 flex gap-6">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-brand-purple" />
                  <div>
                    <p className="text-[10px] text-brand-gray">Valuation per Company</p>
                    <p className="text-sm font-bold text-brand-purple">$14,100</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-teal" />
                  <div>
                    <p className="text-[10px] text-brand-gray">Valuation per Eligible Life</p>
                    <p className="text-sm font-bold text-brand-teal">$2,820</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default UnitEconomicsSlide;
