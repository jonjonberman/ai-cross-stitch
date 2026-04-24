import { NextResponse } from "next/server";
import { z } from "zod";
import { exportPatternCsv } from "@/lib/exports/exportCsv";

const cellSchema = z.object({ x: z.number(), y: z.number(), dmcCode: z.string(), hex: z.string() });
const requestSchema = z.object({
  format: z.enum(["csv"]),
  grid: z.object({ width: z.number().int().positive(), height: z.number().int().positive(), cells: z.array(cellSchema) }),
});

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });
  }

  const csv = exportPatternCsv(parsed.data.grid);
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="pattern.csv"',
    },
  });
}
