import { describe, expect, it } from "vitest";
import { quantizeRgb } from "@/lib/pattern/quantize";

describe("quantize", () => {
  it("respects max color count", () => {
    const result = quantizeRgb([
      { r: 0, g: 0, b: 0 },
      { r: 255, g: 255, b: 255 },
      { r: 200, g: 29, b: 17 },
    ], 2);
    expect(result.length).toBeLessThanOrEqual(2);
  });

  it("is deterministic", () => {
    const input = [
      { r: 1, g: 2, b: 3 },
      { r: 1, g: 2, b: 3 },
      { r: 200, g: 150, b: 100 },
    ];
    expect(quantizeRgb(input, 2)).toEqual(quantizeRgb(input, 2));
  });

  it("handles tiny images", () => {
    expect(quantizeRgb([{ r: 1, g: 1, b: 1 }], 1)).toHaveLength(1);
  });
});
