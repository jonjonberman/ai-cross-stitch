import type { PatternGrid } from "./types";

export function renderPreviewToPpm(grid: PatternGrid, cellSize = 8): string {
  const width = grid.width * cellSize;
  const height = grid.height * cellSize;
  const rows: string[] = [`P3`, `${width} ${height}`, `255`];

  const byCoord = new Map(grid.cells.map((cell) => [`${cell.x},${cell.y}`, cell.hex]));

  for (let y = 0; y < grid.height; y++) {
    for (let ys = 0; ys < cellSize; ys++) {
      const rowPixels: string[] = [];
      for (let x = 0; x < grid.width; x++) {
        const hex = byCoord.get(`${x},${y}`) ?? "#000000";
        const r = Number.parseInt(hex.slice(1, 3), 16);
        const g = Number.parseInt(hex.slice(3, 5), 16);
        const b = Number.parseInt(hex.slice(5, 7), 16);
        for (let xs = 0; xs < cellSize; xs++) {
          rowPixels.push(`${r} ${g} ${b}`);
        }
      }
      rows.push(rowPixels.join(" "));
    }
  }

  return `${rows.join("\n")}\n`;
}
