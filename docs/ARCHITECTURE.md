# Architecture

## System overview

The system is a hybrid pipeline:
1. AI creates stitch-friendly source art.
2. Deterministic functions convert source art into a strict `PatternGrid`.
3. Exports are produced only from validated grid data.

## Responsibility split

- AI: prompt planning and source art generation.
- Deterministic code: quantization, DMC mapping, cleanup, validation, and export rendering.

## Storage

Initial storage abstraction uses `PatternStore` with a local filesystem implementation.
