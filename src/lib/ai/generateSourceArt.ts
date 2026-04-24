import { getOpenAiClient } from "./openaiClient";
import { buildSourceArtPrompt } from "./sourceArtPrompt";

export async function generateSourceArt(concept: string, width: number, height: number): Promise<string> {
  const client = getOpenAiClient();
  const prompt = buildSourceArtPrompt(concept, width, height);
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";
  const result = await client.images.generate({ model, prompt, size: "1024x1024" });
  return result.data[0]?.b64_json ?? "";
}
