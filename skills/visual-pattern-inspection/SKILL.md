---
name: visual-pattern-inspection
description: Evaluate how recognizable generated source art and converted cross-stitch previews are, using a deterministic review rubric and actionable findings. Use when reviewing candidate images/patterns for subject clarity, silhouette quality, stitchability risk, confetti risk, or readability loss after downscaling.
---

# Visual Pattern Inspection

Use this workflow to review candidates before selecting a final pattern.

## Inputs

- `concept` text prompt.
- One or more candidate source images or pattern previews.
- Target stitch dimensions and max colors.

## Procedure

1. Load the concept and confirm the primary subject, required features, and optional features.
2. Review each candidate using the rubric in `references/review-rubric.md`.
3. Assign a score (0-5) per rubric category and compute total score.
4. Record top failure reasons and classify as:
   - recognizability issue,
   - stitchability issue,
   - color/palette issue,
   - background clutter issue.
5. Produce a ranked list with concise rationale.
6. Output refinement suggestions using `references/refinement-playbook.md`.

## Output format

Return structured output:

```json
{
  "winner": "candidate-id",
  "ranking": [
    { "id": "candidate-id", "score": 0, "notes": [] }
  ],
  "criticalFailures": [],
  "refinementActions": []
}
```

## Guardrails

- Prefer candidates that remain readable at target stitch size.
- Penalize heavy micro-detail and noisy backgrounds.
- Penalize candidates that increase likely confetti stitches.
