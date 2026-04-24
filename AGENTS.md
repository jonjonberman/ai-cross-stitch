# AGENTS.md

## Table of Contents

1. [Project overview](#project-overview)
2. [Working agreements](#working-agreements)
3. [Key documents](#key-documents)
4. [Repository map](#repository-map)
5. [Skill index](#skill-index)
6. [Session startup checklist](#session-startup-checklist)

---

## Project overview

Build a web app that converts a concept or source image into a strict cross-stitch grid with DMC-mapped colors and stitchable exports.

## Working agreements

- Keep final chart generation deterministic.
- Keep every stitch as one grid cell with one DMC color.
- Keep AI focused on source-art planning/generation, not final chart rendering.
- Keep docs and TODO trackers updated as part of each substantive change.

## Key documents

- `README.md` - setup and project status.
- `TODO.md` - top-level follow-up tracker.
- `docs/TODOS.md` - detailed backlog and working memory.
- `docs/ARCHITECTURE.md` - system architecture.
- `docs/PATTERN_PIPELINE.md` - deterministic conversion workflow.
- `docs/DMC_COLOR_MAPPING.md` - palette and distance notes.
- `docs/EXPORTS.md` - export plans and schemas.
- `docs/DECISIONS.md` - ADR-style design decisions.
- `CHANGELOG.md` - historical change log.

## Repository map

- `src/app` - Next.js routes and API handlers.
- `src/components` - UI components.
- `src/lib/ai` - AI prompt/generation helpers.
- `src/lib/pattern` - deterministic pattern pipeline logic.
- `src/lib/exports` - JSON/CSV/PNG/PDF export helpers.
- `src/lib/storage` - persistence abstraction.
- `src/data` - palette and static data.
- `src/test` - deterministic unit/integration tests.
- `skills` - specialized skills for repeatable workflows.

## Skill index

- `skills/visual-pattern-inspection` - visual recognizability checks and review scoring for generated source images/pattern previews.
- `skills/pattern-refinement-loop` - iterative refinement workflow from review findings to prompt and parameter updates.

## Session startup checklist

1. Read this file (`AGENTS.md`).
2. Read `README.md`.
3. Read `TODO.md` and `docs/TODOS.md`.
4. Inspect current source status and test constraints.
5. Select the smallest high-value task and implement with tests/docs updates.
