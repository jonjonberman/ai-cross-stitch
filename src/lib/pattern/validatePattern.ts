import { DMC_COLORS } from "./dmc";
import type { PatternProject, ValidationResult } from "./types";

export function validatePattern(pattern: PatternProject): ValidationResult {
  const errors: string[] = [];
  const { width, height, cells } = pattern.grid;

  if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
    errors.push("Grid width and height must be positive integers.");
  }

  if (cells.length !== width * height) {
    errors.push("Grid must include exactly width * height cells.");
  }

  const coordSet = new Set<string>();
  for (const cell of cells) {
    const key = `${cell.x},${cell.y}`;
    if (coordSet.has(key)) {
      errors.push(`Duplicate coordinate found: ${key}`);
      break;
    }
    coordSet.add(key);
  }

  const validCodes = new Set(DMC_COLORS.map((color) => color.code));
  for (const cell of cells) {
    if (!validCodes.has(cell.dmcCode)) {
      errors.push(`Unknown DMC code in grid: ${cell.dmcCode}`);
      break;
    }
  }

  const legendCodes = new Set(pattern.legend.map((item) => item.dmcCode));
  for (const cell of cells) {
    if (!legendCodes.has(cell.dmcCode)) {
      errors.push(`Grid cell color ${cell.dmcCode} missing from legend.`);
      break;
    }
  }

  for (const item of pattern.legend) {
    if (!cells.some((cell) => cell.dmcCode === item.dmcCode)) {
      errors.push(`Legend color ${item.dmcCode} missing from grid.`);
      break;
    }
  }

  return { valid: errors.length === 0, errors };
}
