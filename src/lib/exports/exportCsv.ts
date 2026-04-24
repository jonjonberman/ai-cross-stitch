import type { PatternGrid } from "@/lib/pattern/types";

export function exportPatternCsv(grid: PatternGrid): string {
  const byCoord = new Map(grid.cells.map((cell) => [`${cell.x},${cell.y}`, cell.dmcCode]));
  const lines: string[] = [];
  for (let y = 0; y < grid.height; y++) {
    const row: string[] = [];
    for (let x = 0; x < grid.width; x++) {
      row.push(byCoord.get(`${x},${y}`) ?? "");
    }
    lines.push(row.join(","));
  }
  return lines.join("\n");
}
