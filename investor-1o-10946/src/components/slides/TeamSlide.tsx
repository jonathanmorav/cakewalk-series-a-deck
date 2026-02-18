import Team from "@/components/Team";

interface TeamSlideProps {
  onNavigateNext: () => void;
  slideNumber?: number;
  totalSlides?: number;
}

/**
 * Slide 9: Team
 * Uses the Team layout from the investor repo.
 */
const TeamSlide = ({ onNavigateNext, slideNumber, totalSlides }: TeamSlideProps) => {
  return (
    <Team
      onNavigateNext={onNavigateNext}
      slideNumber={slideNumber}
      totalSlides={totalSlides}
    />
  );
};

export default TeamSlide;
