"use client";

import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

interface PublishSuccessModalProps {
  jobTitle: string;
  companyName: string;
  remainingCoins: number;
  usedCoins?: number;
}

export default function PublishSuccessModal({
  jobTitle,
  companyName,
  remainingCoins,
  usedCoins = 5,
}: PublishSuccessModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white border border-line rounded-2xl w-full max-w-md shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-5 animate-in fade-in zoom-in-95 duration-200">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center text-teal">
          <FiCheckCircle className="w-9 h-9" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-ink tracking-tight">
            Lowongan Berhasil Dipublikasikan!
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Lowongan <span className="font-semibold text-ink">{jobTitle}</span> di <span className="font-semibold text-ink">{companyName}</span> sekarang sudah aktif dan dapat ditemukan oleh para pencari kerja.
          </p>
        </div>

        {/* Balance Badge */}
        <div className="w-full bg-[#f0f9f8] border border-teal/20 rounded-xl p-3 text-xs text-teal-dark font-medium flex items-center justify-between">
          <span>Koin terpakai: {usedCoins} koin</span>
          <span className="font-bold">Sisa saldo: {remainingCoins} koin</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col w-full gap-2.5 pt-2">
          <Link
            href="/recruiter/dashboard"
            className="w-full py-2.5 px-4 rounded-xl bg-teal hover:bg-teal-dark text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Kembali ke Dashboard Perusahaan</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
