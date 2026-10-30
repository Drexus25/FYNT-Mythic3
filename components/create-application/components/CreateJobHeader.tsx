"use client";

import Link from "next/link";
import { FiBookmark } from "react-icons/fi";

interface CreateJobHeaderProps {
  onSaveDraft?: () => void;
  isDraftSaving?: boolean;
}

export default function CreateJobHeader({
  onSaveDraft,
  isDraftSaving = false,
}: CreateJobHeaderProps) {
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

      {/* Main Title & Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-ink tracking-tight">
          Buka ruang untuk talenta baru.
        </h1>

        <button
          type="button"
          onClick={onSaveDraft}
          disabled={isDraftSaving}
          className="inline-flex items-center gap-2 px-4 py-2 border border-line bg-white hover:bg-gray-50 active:scale-[0.98] text-ink text-xs font-semibold rounded-xl shadow-2xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <FiBookmark className="w-3.5 h-3.5 text-ink-muted" />
          <span>{isDraftSaving ? "Menyimpan..." : "Simpan draf"}</span>
        </button>
      </div>
    </section>
  );
}
