"use client";

import { FiInfo, FiArrowUpRight } from "react-icons/fi";

interface PublishSidebarProps {
  jobTitle: string;
  companyName: string;
  location: string;
  availableCoins?: number;
  coinCost?: number;
  durationMonths: number;
  additionalWeeks?: number;
  hasAgreed: boolean;
  onToggleAgree: () => void;
  onPublish: () => void;
  isPublishing: boolean;
  canPublish: boolean;
}

export default function PublishSidebar({
  jobTitle,
  companyName = "Nusa Studio",
  location,
  availableCoins = 5,
  coinCost = 5,
  durationMonths,
  additionalWeeks = 1,
  hasAgreed,
  onToggleAgree,
  onPublish,
  isPublishing,
  canPublish,
}: PublishSidebarProps) {
  const remainingCoins = Math.max(0, availableCoins - coinCost);
  const isCustomDuration = durationMonths > 1;
  const durationLabel = isCustomDuration
    ? `1 bulan + ${additionalWeeks} minggu`
    : "1 bulan";

  return (
    <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 flex flex-col gap-5 shadow-xs">
      {/* Title */}
      <h3 className="text-sm font-semibold text-ink">Ringkasan publikasi</h3>

      {/* Target Job Preview */}
      <div className="flex flex-col gap-1 border-b border-line pb-4">
        <h4 className="text-sm font-semibold text-ink truncate">
          {jobTitle.trim() || "Judul posisi"}
        </h4>
        <p className="text-xs text-ink-muted truncate">
          {companyName} · {location.trim() || "Lokasi kerja"}
        </p>
      </div>

      {/* Breakdown */}
      <div className="flex flex-col gap-2.5 text-xs">
        <div className="flex justify-between items-center text-ink-muted">
          <span>Masa tayang</span>
          <span className="font-semibold text-ink">
            {durationLabel}
          </span>
        </div>
        <div className="flex justify-between items-center text-ink-muted">
          <span>Biaya publikasi</span>
          <span className="font-semibold text-ink">{coinCost} koin</span>
        </div>
        <div className="flex justify-between items-center text-ink-muted">
          <span>Saldo tersedia</span>
          <span className="font-semibold text-ink">{availableCoins} koin</span>
        </div>

        <div className="border-t border-line my-1"></div>

        <div className="flex justify-between items-center">
          <span className="text-ink font-medium">Saldo setelah publikasi</span>
          <span className="font-bold text-teal text-sm">
            {remainingCoins} koin
          </span>
        </div>
      </div>

      {/* Alert Note */}
      <div className="bg-[#f0f9f8] border border-teal/20 rounded-xl p-3 flex items-start gap-2">
        <FiInfo className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
        <p className="text-[11px] text-teal-dark leading-relaxed">
          {coinCost} koin digunakan untuk satu lowongan selama {durationLabel}, mulai dari tanggal publikasi.
        </p>
      </div>

      {/* Agreement Checkbox */}
      <label
        htmlFor="agree-publish-cost"
        className="flex items-start gap-2.5 cursor-pointer select-none group"
      >
        <input
          id="agree-publish-cost"
          type="checkbox"
          checked={hasAgreed}
          onChange={onToggleAgree}
          className="mt-0.5 w-4 h-4 rounded border-line text-teal focus:ring-teal cursor-pointer accent-teal shrink-0"
        />
        <span className="text-xs text-ink group-hover:text-teal transition-colors leading-relaxed">
          Saya menyetujui biaya publikasi sebesar {coinCost} koin.
        </span>
      </label>

      {/* Publish Button */}
      <button
        type="button"
        id="publish-job-btn"
        disabled={!canPublish || isPublishing}
        onClick={onPublish}
        className="w-full flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
      >
        <FiArrowUpRight className="w-4 h-4" />
        <span>{isPublishing ? "Mempublikasikan..." : `Publikasikan - ${coinCost} koin`}</span>
      </button>
    </div>
  );
}
