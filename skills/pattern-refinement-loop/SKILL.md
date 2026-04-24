---
name: pattern-refinement-loop
description: Run an iterative loop to improve generated cross-stitch candidates by applying structured edits to prompts and conversion parameters after visual review. Use when a candidate is close but still has recognizability, palette, or stitchability issues.
---

# Pattern Refinement Loop

Use this workflow after initial candidate generation.

## Inputs

- Prior inspection output (scores + failure reasons).
- Current source-art prompt.
- Conversion parameters (width, height, maxColors, cleanup intensity).

## Iterative loop

1. Select top 1-2 failure reasons.
2. Choose minimal changes using `references/change-matrix.md`.
3. Update prompt and/or conversion settings.
4. Regenerate source art or reconvert existing source art.
5. Re-run visual inspection.
6. Stop when quality improves materially or max iterations reached.

## Stopping criteria

Stop when one is true:

- Total inspection score increases by >= 20%.
- Critical failures drop to zero.
- Iteration cap reached (default 4).

## Output format

Return:

```json
{
  "iterations": [],
  "bestCandidate": "id",
  "finalPrompt": "...",
  "finalSettings": {
    "width": 80,
    "height": 80,
    "maxColors": 24,
    "cleanupIntensity": 1
  }
}
```
