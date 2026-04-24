import { NextResponse } from "next/server";
import { z } from "zod";
import { generateSourceArt } from "@/lib/ai/generateSourceArt";

const requestSchema = z.object({
  concept: z.string().min(3),
  width: z.number().int().min(16).max(256).default(80),
  height: z.number().int().min(16).max(256).default(80),
});

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const imageBase64 = await generateSourceArt(parsed.data.concept, parsed.data.width, parsed.data.height);
    return NextResponse.json({ imageBase64 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate source art", details: String(error) }, { status: 500 });
  }
}
