# AI Cross Stitch

AI Cross Stitch is a web application that turns a text concept or uploaded image into a strict, stitchable cross-stitch pattern.

## MVP Scope (current)

- Next.js app scaffold with App Router.
- Deterministic core pattern modules: DMC mapping, quantization, grid conversion, validation, and preview rendering.
- API route scaffolding for source-art generation, conversion, and CSV export.
- Unit tests for deterministic pipeline modules.

## Setup

```bash
pnpm install
pnpm dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and set secrets.

## Common Commands

```bash
pnpm dev
pnpm lint
pnpm test
pnpm build
```

## Notes

This repo currently includes a placeholder DMC palette subset for bootstrapping development. See `docs/DMC_COLOR_MAPPING.md`.
