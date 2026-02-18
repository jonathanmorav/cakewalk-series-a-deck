import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const SLIDE_W = 1920;
const SLIDE_H = 1080;
const RENDER_SCALE = 2;

/**
 * Exports the deck to a high-resolution landscape PDF.
 * Expects to be called when a container with id="pdf-render-root"
 * holds all slides, each wrapped in a `section` containing an
 * `aspect-[16/9]` div (the standard SlideContainer output).
 */
export async function exportDeckToPdf(
  container: HTMLElement,
  onProgress?: (current: number, total: number) => void,
) {
  const slideEls = container.querySelectorAll<HTMLElement>(
    "section > div[class*='aspect-']",
  );

  if (slideEls.length === 0) return;

  const total = slideEls.length;
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [SLIDE_W, SLIDE_H],
  });

  for (let i = 0; i < total; i++) {
    onProgress?.(i + 1, total);

    const el = slideEls[i];
    const canvas = await html2canvas(el, {
      scale: RENDER_SCALE,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      width: el.offsetWidth,
      height: el.offsetHeight,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.92);

    if (i > 0) pdf.addPage([SLIDE_W, SLIDE_H], "landscape");

    pdf.addImage(imgData, "JPEG", 0, 0, SLIDE_W, SLIDE_H);
  }

  pdf.save("Cakewalk-Series-A-1-Deck.pdf");
}
