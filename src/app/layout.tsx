import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Cross Stitch",
  description: "Generate stitchable cross-stitch patterns from concepts or images.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-100 text-stone-900">{children}</body>
    </html>
  );
}
