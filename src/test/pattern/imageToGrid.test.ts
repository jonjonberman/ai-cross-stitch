import { describe, expect, it } from "vitest";
import { imagePixelsToGrid } from "@/lib/pattern/imageToGrid";

describe("imageToGrid", () => {
  it("builds exact number of cells", () => {
    const grid = imagePixelsToGrid([
      { r: 0, g: 0, b: 0 },
      { r: 255, g: 255, b: 255 },
      { r: 0, g: 0, b: 0 },
      { r: 255, g: 255, b: 255 },
    ], 2, 2);
    expect(grid.cells).toHaveLength(4);
  });
});
