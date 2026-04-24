# Pattern Pipeline

## Current implementation

- `imageToGrid`: maps RGB pixels to nearest DMC code.
- `quantize`: deterministic bucket-based pre-reduction utility.
- `renderPreview`: produces hard-edge preview output (PPM placeholder path to PNG).
- `validatePattern`: enforces width/height, coordinates, DMC validity, and legend consistency.

## Planned additions

- Normalize image and alpha composition.
- Crop/pad to target ratio.
- Area-based resize using Sharp.
- Cleanup heuristics for confetti and tiny regions.
