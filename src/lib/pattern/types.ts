export type DmcColor = {
  code: string;
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  lab?: { l: number; a: number; b: number };
};

export type PatternCell = {
  x: number;
  y: number;
  dmcCode: string;
  hex: string;
  symbol?: string;
  locked?: boolean;
  sourceRgb?: { r: number; g: number; b: number };
};

export type PatternGrid = {
  width: number;
  height: number;
  cells: PatternCell[];
};

export type PatternLegendItem = {
  dmcCode: string;
  name: string;
  hex: string;
  symbol: string;
  stitchCount: number;
  estimatedSkeins?: number;
};

export type PatternQualityReport = {
  width: number;
  height: number;
  totalStitches: number;
  colorCount: number;
  isolatedCellCount: number;
  smallRegionCount: number;
  maxColorsRequested: number;
  warnings: string[];
};

export type PatternProject = {
  id: string;
  concept: string;
  sourcePrompt: string;
  sourceImageUrl?: string;
  grid: PatternGrid;
  legend: PatternLegendItem[];
  quality: PatternQualityReport;
  createdAt: string;
};

export type ValidationResult = { valid: boolean; errors: string[] };
