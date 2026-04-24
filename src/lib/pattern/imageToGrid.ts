import { findNearestDmc } from "./dmc";
import type { PatternGrid } from "./types";

export function imagePixelsToGrid(pixels: { r: number; g: number; b: number }[], width: number, height: number): PatternGrid {
  if (pixels.length !== width * height) {
    throw new Error("Input pixels do not match provided dimensions.");
  }

  const cells = pixels.map((pixel, index) => {
    const x = index % width;
    const y = Math.floor(index / width);
    const dmc = findNearestDmc(pixel);
    return { x, y, dmcCode: dmc.code, hex: dmc.hex, sourceRgb: pixel };
  });

  return { width, height, cells };
}
