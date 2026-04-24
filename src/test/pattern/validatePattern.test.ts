import { describe, expect, it } from "vitest";
import type { PatternProject } from "@/lib/pattern/types";
import { validatePattern } from "@/lib/pattern/validatePattern";

function makeProject(): PatternProject {
  return {
    id: "1",
    concept: "test",
    sourcePrompt: "test",
    createdAt: new Date().toISOString(),
    grid: {
      width: 1,
      height: 1,
      cells: [{ x: 0, y: 0, dmcCode: "310", hex: "#000000" }],
    },
    legend: [{ dmcCode: "310", name: "Black", hex: "#000000", symbol: "A", stitchCount: 1 }],
    quality: {
      width: 1,
      height: 1,
      totalStitches: 1,
      colorCount: 1,
      isolatedCellCount: 0,
      smallRegionCount: 0,
      maxColorsRequested: 1,
      warnings: [],
    },
  };
}

describe("validatePattern", () => {
  it("accepts valid minimal pattern", () => {
    expect(validatePattern(makeProject()).valid).toBe(true);
  });

  it("rejects duplicate coordinates", () => {
    const p = makeProject();
    p.grid.cells.push({ x: 0, y: 0, dmcCode: "310", hex: "#000000" });
    expect(validatePattern(p).valid).toBe(false);
  });

  it("rejects unknown DMC codes", () => {
    const p = makeProject();
    p.grid.cells[0].dmcCode = "9999";
    expect(validatePattern(p).valid).toBe(false);
  });
});
