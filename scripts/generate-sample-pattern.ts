import { exportPatternJson } from "@/lib/exports/exportJson";
import { imagePixelsToGrid } from "@/lib/pattern/imageToGrid";

const pixels = [
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 255, b: 255 },
  { r: 200, g: 29, b: 17 },
  { r: 5, g: 101, b: 23 },
];

const grid = imagePixelsToGrid(pixels, 2, 2);

console.log(exportPatternJson({
  id: "sample",
  concept: "sample",
  sourcePrompt: "sample",
  grid,
  legend: [],
  quality: {
    width: 2,
    height: 2,
    totalStitches: 4,
    colorCount: 4,
    isolatedCellCount: 0,
    smallRegionCount: 0,
    maxColorsRequested: 4,
    warnings: [],
  },
  createdAt: new Date().toISOString(),
}));
