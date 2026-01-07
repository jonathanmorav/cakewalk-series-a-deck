import GTMDistribution from "@/components/GTMDistribution";

interface GTMSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 7: Go-To-Market — Distribution Strategy
 * Uses the GTMDistribution layout from the investor repo.
 */
const GTMSlide = ({ onNavigateNext }: GTMSlideProps) => {
  return <GTMDistribution onNavigateNext={onNavigateNext} />;
};

export default GTMSlide;
