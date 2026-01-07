import Team from "@/components/Team";

interface TeamSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 9: Team
 * Uses the Team layout from the investor repo.
 */
const TeamSlide = ({ onNavigateNext }: TeamSlideProps) => {
  return <Team onNavigateNext={onNavigateNext} />;
};

export default TeamSlide;
