# TODO

This file is the quick top-level follow-up tracker for the repository.
Detailed planning remains in `docs/TODOS.md`.

## Immediate follow-ups

- Implement image normalization and alpha/background handling (`normalizeImage`).
- Implement crop/pad to target stitch aspect ratio.
- Implement Sharp area-based resizing to exact stitch dimensions.
- Replace placeholder DMC subset with a full vetted palette and provenance notes.
- Implement cleanup heuristics for confetti stitches while preserving locked detail cells.
- Replace PPM placeholder with true PNG export bytes.
- Wire `/generate` page to call API routes end-to-end.
- Add integration tests: fixture image -> grid -> legend -> validation -> export.

## Blockers

- Package install is blocked in this environment by npm registry 403.
