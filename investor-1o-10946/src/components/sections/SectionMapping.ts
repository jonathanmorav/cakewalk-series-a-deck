import {
  CoverSlide,
  MissionSlide,
  CakewalkSlide2,
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
 * The deck consists of 14 slides:
 * 1. Cover
 * 2. Mission
 * 3. The Need (Solution design)
 * 4. Total Addressable Market
 * 5. Customer Journey
 * 6. Cakewalk
 * 7. Go-To-Market
 * 8. Competitive Advantage
 * 9. Team
 * 10. Board of Directors
 * 11. Unit Economics
 * 12. Milestones
 * 13. The Ask
 * 14. Conclusion
 */
export const sections: DeckSection[] = [
  { id: "cover", title: "Cover", slideNumber: "1" },
  { id: "mission", title: "Mission", slideNumber: "2" },
  { id: "solution", title: "The Need", slideNumber: "3" },
  { id: "tam", title: "Total Addressable Market", slideNumber: "4" },
  { id: "customer-journey", title: "Customer Journey", slideNumber: "5" },
  { id: "cakewalk", title: "Cakewalk", slideNumber: "6" },
  { id: "gtm", title: "Go-To-Market", slideNumber: "7" },
  { id: "competitive-advantage", title: "Competitive Advantage", slideNumber: "8" },
  { id: "team", title: "Team", slideNumber: "9" },
  { id: "board-advisors", title: "Board of Directors", slideNumber: "10" },
  { id: "unit-economics", title: "Unit Economics", slideNumber: "11" },
  { id: "milestones", title: "Milestones", slideNumber: "12" },
  { id: "the-ask", title: "The Ask", slideNumber: "13" },
  { id: "conclusion", title: "Conclusion", slideNumber: "14" },
];

// Mapping of section IDs to their respective components
export const sectionComponents = {
  "cover": CoverSlide,
  "mission": MissionSlide,
  "cakewalk": CakewalkSlide2,
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
