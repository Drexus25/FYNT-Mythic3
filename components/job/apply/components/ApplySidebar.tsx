"use client";

import { JobItem } from "@/components/find/data/data";
import { FiFileText } from "react-icons/fi";

interface ApplySidebarProps {
  job: JobItem;
  userCoins: number;
}

export default function ApplySidebar({ job, userCoins }: ApplySidebarProps) {
  const remaining = Math.max(0, userCoins - job.coinCost);

  return (
    <div className="flex flex-col gap-4">
      {/* Lamaranmu Card */}
      <div className="bg-white border border-line rounded-2xl p-5 flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-ink">Lamaranmu</h3>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center font-bold text-teal text-base shrink-0">
            {job.logo || job.company.charAt(0)}
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="text-sm font-semibold text-ink leading-tight truncate">
              {job.title}
            </h4>
            <p className="text-xs text-ink-muted leading-tight mt-0.5 truncate">
              {job.company}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 text-xs border-t border-line pt-3.5">
          <div className="flex justify-between items-center">
            <span className="text-ink-muted">Lokasi</span>
            <span className="font-semibold text-ink">{job.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-ink-muted">Cara kerja</span>
            <span className="font-semibold text-ink">{job.workplaceType || job.type}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-ink-muted">Jenis</span>
            <span className="font-semibold text-ink">{job.employmentType || "Full-time"}</span>
          </div>
        </div>
      </div>

      {/* Ringkasan Pembayaran Card */}
      <div className="bg-white border border-line rounded-2xl p-5 flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-ink">Ringkasan pembayaran</h3>

        <div className="flex flex-col gap-2 text-xs pt-1">
          <div className="flex justify-between items-center text-ink-muted">
            <span>Saldo saat ini</span>
            <span className="font-semibold text-ink">{userCoins} koin</span>
          </div>
          <div className="flex justify-between items-center text-ink-muted">
            <span>Biaya lamaran</span>
            <span className="font-semibold text-ink">-{job.coinCost} koin</span>
          </div>

          <div className="border-t border-line my-1"></div>

          <div className="flex justify-between items-center">
            <span className="text-ink font-medium">Sisa setelah dikirim</span>
            <span className="font-bold text-teal text-xs sm:text-sm">
              {remaining} koin
            </span>
          </div>
        </div>

        <p className="text-[11px] text-ink-muted leading-relaxed pt-1">
          Biaya {job.coinCost} koin ditetapkan oleh {job.company} untuk lowongan ini. Belum ada koin yang dipotong.
        </p>
      </div>
    </div>
  );
}
