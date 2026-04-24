export function buildSourceArtPrompt(concept: string, width: number, height: number): string {
  return `Create a clean, centered, stitch-friendly illustration of ${concept}. Use simple readable shapes, strong silhouette, limited shading, and no text or grid. The design should remain recognizable when reduced to ${width} x ${height} stitches.`;
}
