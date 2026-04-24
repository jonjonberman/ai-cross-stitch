import type { PatternGrid } from "./types";

export function cleanupGrid(grid: PatternGrid): PatternGrid {
  return {
    ...grid,
    cells: grid.cells.map((cell) => ({ ...cell })),
  };
}
