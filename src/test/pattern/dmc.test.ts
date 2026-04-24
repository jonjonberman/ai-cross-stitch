import { describe, expect, it } from "vitest";
import { findNearestDmc, rgbToLab } from "@/lib/pattern/dmc";

describe("dmc mapping", () => {
  it("maps exact color match", () => {
    expect(findNearestDmc({ r: 0, g: 0, b: 0 }).code).toBe("310");
  });

  it("returns deterministic nearest match", () => {
    const a = findNearestDmc({ r: 190, g: 40, b: 20 }).code;
    const b = findNearestDmc({ r: 190, g: 40, b: 20 }).code;
    expect(a).toBe(b);
  });

  it("computes lab values", () => {
    const lab = rgbToLab({ r: 255, g: 255, b: 255 });
    expect(lab.l).toBeGreaterThan(99);
  });
});
