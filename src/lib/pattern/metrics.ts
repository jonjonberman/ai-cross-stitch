import type { PatternGrid, PatternQualityReport } from "./types";

export function computeQualityMetrics(grid: PatternGrid, maxColorsRequested: number): PatternQualityReport {
  const colorCount = new Set(grid.cells.map((cell) => cell.dmcCode)).size;
  return {
    width: grid.width,
    height: grid.height,
    totalStitches: grid.width * grid.height,
    colorCount,
    isolatedCellCount: 0,
    smallRegionCount: 0,
    maxColorsRequested,
    warnings: colorCount > maxColorsRequested ? ["Too many colors for selected pattern size."] : [],
  };
}
