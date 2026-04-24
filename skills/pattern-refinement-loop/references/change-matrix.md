# Change Matrix

## Prompt-side changes

- Subject unclear -> "strong silhouette", "centered subject", "simple readable shapes".
- Key detail missing -> explicitly mention key detail and contrast.
- Too much clutter -> "plain background", "no background clutter", "no text", "no border".
- Over-detailed textures -> "low detail density", "limited shading".

## Conversion-side changes

- Too abstract -> increase width/height moderately.
- Too many colors -> lower maxColors and re-run quantization.
- Confetti high -> increase cleanup intensity and merge tiny regions.
- Flat/low contrast -> allow slightly higher maxColors or tune quantization bins.
