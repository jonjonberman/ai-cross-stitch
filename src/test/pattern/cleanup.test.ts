import { describe, expect, it } from "vitest";
import { cleanupGrid } from "@/lib/pattern/cleanup";

describe("cleanup", () => {
  it("does not change dimensions", () => {
    const grid = { width: 1, height: 1, cells: [{ x: 0, y: 0, dmcCode: "310", hex: "#000000" }] };
    const cleaned = cleanupGrid(grid);
    expect(cleaned.width).toBe(1);
    expect(cleaned.height).toBe(1);
  });
});
