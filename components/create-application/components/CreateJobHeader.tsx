"use client";

import Link from "next/link";

export default function CreateJobHeader() {
  return (
    <section className="flex flex-col gap-3 pt-6 pb-2">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
        <Link
          href="/recruiter/dashboard"
          className="hover:text-teal transition-colors"
        >
          Perusahaan
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-soft">Buka lowongan</span>
      </nav>

      {/* Main Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-ink tracking-tight">
          Buka ruang untuk talenta baru.
        </h1>
      </div>
    </section>
  );
}
