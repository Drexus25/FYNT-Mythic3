"use client";

import { TbHexagonLetterF } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { JobItem } from "@/components/find/data/data";

interface JobApplySidebarProps {
  job: JobItem;
  userCoins?: number;
}

export default function JobApplySidebar({
  job,
  userCoins = 2,
}: JobApplySidebarProps) {
  const remaining = userCoins - job.coinCost;

  return (
    <div className="flex flex-col gap-4">
      {/* Apply CTA card */}
      <div className="bg-white border border-line rounded-2xl p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-ink">Siap mengambil langkah?</h3>
          <p className="text-xs text-ink-muted">Periksa biaya sebelum melamar.</p>
        </div>

        {/* Coin cost badge */}
        <div className="flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-xl px-3 py-2 w-fit">
          <TbHexagonLetterF className="text-teal w-4 h-4" />
          <span className="text-sm text-teal font-semibold">
            {job.coinCost} koin untuk melamar
          </span>
        </div>

        <p className="text-xs text-ink-muted leading-relaxed">
          Biaya ini ditetapkan oleh {job.company} untuk lowongan {job.title}.
        </p>

        {/* Cost breakdown */}
        <div className="flex flex-col gap-2 text-xs border-t border-line pt-3">
          <div className="flex justify-between text-ink-muted">
            <span>Saldo saat ini</span>
            <span className="font-medium text-ink">{userCoins} koin</span>
          </div>
          <div className="flex justify-between text-ink-muted">
            <span>Biaya lamaran</span>
            <span className="font-medium text-ink">{job.coinCost} koin</span>
          </div>
          <div className="flex justify-between text-ink font-semibold mt-0.5">
            <span>Sisa setelah melamar</span>
            <span className={remaining < 0 ? "text-danger" : "text-teal"}>
              {remaining} koin
            </span>
          </div>
        </div>

        {/* Apply button */}
        <button
          id="job-apply-btn"
          type="button"
          disabled={remaining < 0}
          className="w-full flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
        >
          <FiArrowUpRight className="w-4 h-4" />
          Melamar sekarang
        </button>

        <p className="text-[11px] text-ink-muted leading-relaxed text-center">
          Koin baru dipotong setelah kamu mengonfirmasi dan mengirim formulir lamaran.
        </p>
      </div>

      {/* Company info card */}
      <div className="bg-white border border-line rounded-2xl p-5 flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-ink">Tentang {job.company}</h3>

        {job.isVerified && (
          <div className="flex items-center gap-1.5 text-xs text-teal">
            <div className="w-4 h-4 rounded-full bg-teal/10 flex items-center justify-center">
              <span className="text-teal text-[10px]">✓</span>
            </div>
            Perusahaan terverifikasi
          </div>
        )}

        <p className="text-xs text-ink-muted leading-relaxed">
          {job.companyDescription}
        </p>

        <div className="flex flex-col gap-2 text-xs border-t border-line pt-3">
          <div className="flex justify-between">
            <span className="text-ink-muted">Industri</span>
            <span className="text-ink font-medium text-right">{job.companyIndustry}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Situs</span>
            <span className="text-teal font-medium">{job.companyWebsite}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
