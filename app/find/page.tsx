import type { Metadata } from "next";
import { Suspense } from "react";
import FindPageClient from "./FindPageClient";

export const metadata: Metadata = {
  title: "Cari Lowongan Pekerjaan · FYNT",
  description:
    "Jelajahi pekerjaan yang sesuai keahlian, minat, dan cara kerjamu di FYNT.",
};

export default function FindPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-white pt-24 pb-8" />}>
      <FindPageClient />
    </Suspense>
  );
}