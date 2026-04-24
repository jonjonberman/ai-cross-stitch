"use client";

import { useState } from "react";

export function ConceptForm() {
  const [concept, setConcept] = useState("sleeping fox curled into a circle");

  return (
    <form className="space-y-4 rounded border bg-white p-4">
      <label className="block text-sm font-medium" htmlFor="concept">
        Concept
      </label>
      <input
        id="concept"
        className="w-full rounded border px-3 py-2"
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
      />
      <button className="rounded bg-stone-900 px-4 py-2 text-white" type="button">
        Generate source art
      </button>
    </form>
  );
}
