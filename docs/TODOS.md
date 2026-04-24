# TODOs

## Active backlog

- Replace placeholder DMC subset with full vetted palette and provenance.
- Implement image normalization, crop/pad, and Sharp-based resize modules.
- Implement cleanup heuristics for isolated stitches.
- Replace PPM preview placeholder with PNG byte output.
- Build generate page flow that calls API routes end-to-end.

## Completed

- Bootstrapped Next.js repo structure.
- Added strict core domain types and deterministic pattern modules.
- Added API scaffolding and deterministic module unit tests.
- Added baseline architecture/pipeline/export docs.
- Added top-level TODO tracker, AGENTS index, skill packs, and changelog.

## Deferred ideas

- Candidate ranking workflow and multi-image selection.
- Owned-floss palette constraints.
- PDF and symbol chart export.

## Known bugs / gaps

- `pnpm install` currently blocked in this environment by registry access restrictions.

## Next recommended task

Implement Sharp-based normalize/crop/resize pipeline and wire it into `/api/convert-pattern`.
