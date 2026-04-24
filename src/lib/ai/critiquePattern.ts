export type PatternCritique = { score: number; notes: string[] };

export function critiquePatternStub(): PatternCritique {
  return { score: 0, notes: ["Candidate ranking will be added in Phase 4."] };
}
