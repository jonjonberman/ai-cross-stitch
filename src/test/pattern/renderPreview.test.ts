import { describe, expect, it } from "vitest";
import { renderPreviewToPpm } from "@/lib/pattern/renderPreview";

describe("renderPreview", () => {
  it("renders exact dimensions header", () => {
    const ppm = renderPreviewToPpm({
      width: 2,
      height: 1,
      cells: [
        { x: 0, y: 0, dmcCode: "310", hex: "#000000" },
        { x: 1, y: 0, dmcCode: "B5200", hex: "#FFFFFF" },
      ],
    }, 4);
    expect(ppm).toContain("8 4");
  });
});
