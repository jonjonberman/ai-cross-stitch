import { NextResponse } from "next/server";
import { z } from "zod";
import { imagePixelsToGrid } from "@/lib/pattern/imageToGrid";

const pixelSchema = z.object({ r: z.number().int().min(0).max(255), g: z.number().int().min(0).max(255), b: z.number().int().min(0).max(255) });

const requestSchema = z.object({
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  pixels: z.array(pixelSchema),
});

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const grid = imagePixelsToGrid(parsed.data.pixels, parsed.data.width, parsed.data.height);
    return NextResponse.json({ grid });
  } catch (error) {
    return NextResponse.json({ error: "Conversion failed", details: String(error) }, { status: 400 });
  }
}
