export type Rgb = { r: number; g: number; b: number };

export function quantizeRgb(colors: Rgb[], maxColors: number): Rgb[] {
  if (maxColors <= 0) {
    throw new Error("maxColors must be positive");
  }

  const buckets = new Map<string, { color: Rgb; count: number }>();
  for (const color of colors) {
    const key = `${Math.round(color.r / 16)}-${Math.round(color.g / 16)}-${Math.round(color.b / 16)}`;
    const current = buckets.get(key);
    if (current) {
      current.count += 1;
    } else {
      buckets.set(key, { color, count: 1 });
    }
  }

  return [...buckets.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, maxColors)
    .map((entry) => entry.color);
}
