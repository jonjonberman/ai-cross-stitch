# DMC Color Mapping

## Palette source

Current `src/data/dmc-colors.json` is a temporary subset for bootstrapping. It must be replaced with a full vetted palette before production.

## Matching approach

- Convert RGB input and DMC RGB values to CIELAB.
- Use Delta E (CIE76 currently) to compute nearest floss color.

## Known limitations

- CIE76 may be replaced with Delta E 2000 after baseline testing.
- Palette provenance still needs final documentation.
