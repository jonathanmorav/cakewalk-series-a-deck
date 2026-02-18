
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections, sectionComponents } from "./sections/SectionMapping";
import PageNavigation from "@/components/PageNavigation";
import { useFullScreen } from "@/hooks/use-fullscreen";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, Download, Loader2 } from "lucide-react";
import { exportDeckToPdf } from "@/utils/exportPdf";

interface ShowcaseViewProps {
  currentSectionId: string;
  onNavigate: (sectionId: string) => void;
  onNavigateNext: () => void;
}

interface SlideRenderProps {
  onNavigateNext: () => void;
  slideNumber?: number;
  totalSlides?: number;
}

const ShowcaseView: React.FC<ShowcaseViewProps> = ({ 
  currentSectionId, 
  onNavigate, 
  onNavigateNext 
}) => {
  const { isFullScreen, isPseudoFullScreen, toggleFullScreen } = useFullScreen();
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState("");
  const pdfRootRef = useRef<HTMLDivElement>(null);
  
  const CurrentSection =
    (sectionComponents[currentSectionId as keyof typeof sectionComponents] as React.ComponentType<SlideRenderProps>) ||
    (() => <p>Section not found</p>);
  const currentSectionIndex = sections.findIndex((section) => section.id === currentSectionId);
  const slideNumber = currentSectionIndex >= 0 ? currentSectionIndex + 1 : undefined;
  const isCoverSlide = currentSectionId === "cover";

  const handleExportPdf = useCallback(async () => {
    setIsExporting(true);
    setExportProgress("Preparing slides…");

    await new Promise((r) => setTimeout(r, 500));

    const container = pdfRootRef.current;
    if (!container) {
      setIsExporting(false);
      return;
    }

    try {
      await exportDeckToPdf(container, (cur, total) => {
        setExportProgress(`Rendering slide ${cur} of ${total}…`);
      });
    } finally {
      setIsExporting(false);
      setExportProgress("");
    }
  }, []);

  useEffect(() => {
    if (!isFullScreen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullScreen();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFullScreen, toggleFullScreen]);

  // Prevent body scroll when in pseudo fullscreen
  useEffect(() => {
    if (isPseudoFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPseudoFullScreen]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        isFullScreen && "bg-white",
        // Pseudo fullscreen styling - fixed positioning to cover viewport
        isPseudoFullScreen && "fixed inset-0 z-[100] bg-white"
      )}
    > 
      <div className="fixed right-6 top-6 z-[110] flex items-center gap-2">
        <button
          type="button"
          onClick={() => void handleExportPdf()}
          disabled={isExporting}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-darkBlue shadow-md backdrop-blur transition hover:bg-white",
            isExporting && "opacity-70 cursor-wait"
          )}
        >
          {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          {isExporting ? exportProgress : "Download PDF"}
        </button>

        <button
          type="button"
          onClick={() => void toggleFullScreen()}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-darkBlue shadow-md backdrop-blur transition hover:bg-white",
            isFullScreen && "border-gray-200 bg-white shadow-lg"
          )}
          aria-pressed={isFullScreen}
        >
          {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
      
      {/* Current section with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-full",
            isFullScreen && "h-screen overflow-y-auto"
          )}
        >
          <div className={cn(isFullScreen && "min-h-screen pb-20")}> 
            <CurrentSection
              onNavigateNext={onNavigateNext}
              slideNumber={isCoverSlide ? undefined : slideNumber}
              totalSlides={sections.length}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Page Navigation */}
      <PageNavigation
        sections={sections}
        currentSectionId={currentSectionId}
        onNavigate={onNavigate}
      />

      {isExporting && (
        <div
          ref={pdfRootRef}
          className="fixed left-0 top-0 z-[-1] opacity-0 pointer-events-none"
          style={{ width: 1920 }}
        >
          {sections.map((section, idx) => {
            const SlideComp = sectionComponents[section.id as keyof typeof sectionComponents] as React.ComponentType<SlideRenderProps>;
            if (!SlideComp) return null;
            return (
              <SlideComp
                key={section.id}
                onNavigateNext={() => {}}
                slideNumber={idx === 0 ? undefined : idx + 1}
                totalSlides={sections.length}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShowcaseView;
