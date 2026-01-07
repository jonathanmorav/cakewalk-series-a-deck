import {
  CoverSlide,
  MissionSlide,
  TheNeedSlide,
  AhaMomentSlide,
  SolutionSlide,
  TAMSlide,
  CustomerJourneySlide,
  GTMSlide,
  CompetitiveAdvantageSlide,
  TeamSlide,
  BoardAdvisorsSlide,
  UnitEconomicsSlide,
  MilestonesSlide,
  TheAskSlide,
  ConclusionSlide,
} from "@/components/slides";

export type DeckSection = {
  id: string;
  title: string;
  /** Optional slide number for display (e.g., "4a", "4b") */
  slideNumber?: string;
};

/**
 * Series A Deck - Slide Structure
 *
 * The deck consists of 15 slides:
 * 1. Cover
 * 2. Mission
 * 3. Solution
 * 4. The Need
 * 5. Total Addressable Market
 * 6. The Aha Moment
 * 7. Customer Journey
 * 8. Go-To-Market
 * 9. Competitive Advantage
 * 10. Team
 * 11. Board of Directors
 * 12. Unit Economics
 * 13. Milestones
 * 14. The Ask
 * 15. Conclusion
 */
export const sections: DeckSection[] = [
  { id: "cover", title: "Cover", slideNumber: "1" },
  { id: "mission", title: "Mission", slideNumber: "2" },
  { id: "solution", title: "Solution", slideNumber: "3" },
  { id: "the-need", title: "The Need", slideNumber: "4" },
  { id: "tam", title: "Total Addressable Market", slideNumber: "5" },
  { id: "customer-journey", title: "Customer Journey", slideNumber: "6" },
  { id: "aha-moment", title: "Introducing Cakewalk", slideNumber: "7" },
  { id: "gtm", title: "Go-To-Market", slideNumber: "8" },
  { id: "competitive-advantage", title: "Competitive Advantage", slideNumber: "9" },
  { id: "team", title: "Team", slideNumber: "10" },
  { id: "board-advisors", title: "Board of Directors", slideNumber: "11" },
  { id: "unit-economics", title: "Unit Economics", slideNumber: "12" },
  { id: "milestones", title: "Milestones", slideNumber: "13" },
  { id: "the-ask", title: "The Ask", slideNumber: "14" },
  { id: "conclusion", title: "Conclusion", slideNumber: "15" },
];

// Mapping of section IDs to their respective components
export const sectionComponents = {
  "cover": CoverSlide,
  "mission": MissionSlide,
  "the-need": TheNeedSlide,
  "aha-moment": AhaMomentSlide,
  "solution": SolutionSlide,
  "tam": TAMSlide,
  "customer-journey": CustomerJourneySlide,
  "gtm": GTMSlide,
  "competitive-advantage": CompetitiveAdvantageSlide,
  "team": TeamSlide,
  "board-advisors": BoardAdvisorsSlide,
  "unit-economics": UnitEconomicsSlide,
  "milestones": MilestonesSlide,
  "the-ask": TheAskSlide,
  "conclusion": ConclusionSlide,
};

// Total number of slides for display purposes
export const TOTAL_SLIDES = sections.length;
