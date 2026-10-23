"use client";

import { FiPlus } from "react-icons/fi";

interface DashboardHeaderSectionProps {
  companyName?: string;
  onOpenNewJob?: () => void;
}

export default function DashboardHeaderSection({
  companyName = "Nusa Studio",
  onOpenNewJob,
}: DashboardHeaderSectionProps) {
  return (
    <div className="flex flex-col gap-5 w-full pt-8">
      {/* Breadcrumb */}
      <div className="text-[13px] text-ink-muted">
        <span>Perusahaan</span>
        <span className="mx-2 text-ink-muted/60">/</span>
        <span className="text-ink-muted">Ringkasan</span>
      </div>

      {/* Main Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-rethink-sans font-bold text-2xl sm:text-3xl lg:text-[32px] text-ink leading-tight tracking-tight">
            Selamat datang, {companyName}.
          </h1>
          <p className="text-[14px] text-ink-muted">
            Pantau lowongan dan kenali talenta untuk tim berikutnya.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenNewJob}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0D6E66] hover:bg-[#09524C] active:scale-[0.98] text-white text-[14px] font-semibold rounded-xl transition-all shadow-xs cursor-pointer self-start sm:self-auto shrink-0"
        >
          <FiPlus className="text-[18px]" />
          <span>Buka lowongan</span>
        </button>
      </div>
    </div>
  );
}
