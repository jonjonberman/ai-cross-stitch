import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold">AI Cross Stitch</h1>
      <p className="mt-4">
        Turn a concept or uploaded image into a strict, DMC-mapped cross-stitch grid.
      </p>
      <Link className="mt-6 inline-block rounded bg-stone-900 px-4 py-2 text-white" href="/generate">
        Start generating
      </Link>
    </main>
  );
}
