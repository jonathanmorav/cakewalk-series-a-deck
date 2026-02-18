import GTMDistribution from "@/components/GTMDistribution";

interface GTMSlideProps {
  onNavigateNext: () => void;
  slideNumber?: number;
  totalSlides?: number;
}

/**
 * Slide 7: Go-To-Market — Distribution Strategy
 * Uses the GTMDistribution layout from the investor repo.
 */
const GTMSlide = ({ onNavigateNext, slideNumber, totalSlides }: GTMSlideProps) => {
  return (
    <GTMDistribution
      onNavigateNext={onNavigateNext}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
    />
  );
};

export default GTMSlide;
