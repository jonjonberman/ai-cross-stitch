import type { PatternProject } from "@/lib/pattern/types";

export function exportPatternJson(pattern: PatternProject): string {
  return JSON.stringify(pattern, null, 2);
}
