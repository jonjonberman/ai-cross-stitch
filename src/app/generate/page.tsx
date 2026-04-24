import { ConceptForm } from "@/components/ConceptForm";

export default function GeneratePage() {
  return (
    <main className="mx-auto max-w-3xl p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Generate Pattern</h1>
      <ConceptForm />
    </main>
  );
}
