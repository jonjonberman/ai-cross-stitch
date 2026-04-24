import { promises as fs } from "node:fs";
import path from "node:path";
import type { PatternProject } from "@/lib/pattern/types";
import type { PatternStore } from "./PatternStore";

const STORE_DIR = path.join(process.cwd(), ".data", "patterns");

export class LocalPatternStore implements PatternStore {
  async save(pattern: PatternProject): Promise<void> {
    await fs.mkdir(STORE_DIR, { recursive: true });
    await fs.writeFile(path.join(STORE_DIR, `${pattern.id}.json`), JSON.stringify(pattern, null, 2));
  }

  async getById(id: string): Promise<PatternProject | null> {
    try {
      const content = await fs.readFile(path.join(STORE_DIR, `${id}.json`), "utf8");
      return JSON.parse(content) as PatternProject;
    } catch {
      return null;
    }
  }
}
