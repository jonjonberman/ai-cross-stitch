import type { PatternProject } from "@/lib/pattern/types";

export interface PatternStore {
  save(pattern: PatternProject): Promise<void>;
  getById(id: string): Promise<PatternProject | null>;
}
