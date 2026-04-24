export default async function PatternDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-semibold">Pattern {id}</h1>
      <p>Pattern details page placeholder.</p>
    </main>
  );
}
