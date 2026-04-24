import { renderPreviewToPpm } from "@/lib/pattern/renderPreview";
import type { PatternGrid } from "@/lib/pattern/types";

export function exportPatternPngPreviewPlaceholder(grid: PatternGrid): string {
  return renderPreviewToPpm(grid, 8);
}
