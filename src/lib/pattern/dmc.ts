import dmcPalette from "@/data/dmc-colors.json";
import type { DmcColor } from "./types";

export const DMC_COLORS = dmcPalette as DmcColor[];

type Lab = { l: number; a: number; b: number };

function pivotRgbChannel(value: number): number {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function rgbToXyz({ r, g, b }: { r: number; g: number; b: number }) {
  const rn = pivotRgbChannel(r);
  const gn = pivotRgbChannel(g);
  const bn = pivotRgbChannel(b);
  return {
    x: rn * 0.4124 + gn * 0.3576 + bn * 0.1805,
    y: rn * 0.2126 + gn * 0.7152 + bn * 0.0722,
    z: rn * 0.0193 + gn * 0.1192 + bn * 0.9505,
  };
}

function pivotLab(value: number): number {
  return value > 0.008856 ? value ** (1 / 3) : 7.787 * value + 16 / 116;
}

export function rgbToLab(rgb: { r: number; g: number; b: number }): Lab {
  const xyz = rgbToXyz(rgb);
  const ref = { x: 0.95047, y: 1, z: 1.08883 };
  const x = pivotLab(xyz.x / ref.x);
  const y = pivotLab(xyz.y / ref.y);
  const z = pivotLab(xyz.z / ref.z);
  return { l: 116 * y - 16, a: 500 * (x - y), b: 200 * (y - z) };
}

export function deltaE76(a: Lab, b: Lab): number {
  return Math.sqrt((a.l - b.l) ** 2 + (a.a - b.a) ** 2 + (a.b - b.b) ** 2);
}

export function findNearestDmc(rgb: { r: number; g: number; b: number }): DmcColor {
  const targetLab = rgbToLab(rgb);
  return DMC_COLORS.reduce(
    (best, color) => {
      const colorLab = color.lab ?? rgbToLab(color.rgb);
      const score = deltaE76(targetLab, colorLab);
      return score < best.score ? { score, color } : best;
    },
    { score: Number.POSITIVE_INFINITY, color: DMC_COLORS[0] },
  ).color;
}
