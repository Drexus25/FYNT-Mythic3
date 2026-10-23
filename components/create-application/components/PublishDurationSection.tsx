"use client";

import { FiInfo } from "react-icons/fi";

interface PublishDurationSectionProps {
  durationMonths: number;
  onSelectDuration: (months: number) => void;
}

export default function PublishDurationSection({
  durationMonths,
  onSelectDuration,
}: PublishDurationSectionProps) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        Durasi publikasi
      </h2>

      {/* Duration Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1 Bulan */}
        <div
          onClick={() => onSelectDuration(1)}
          className={`rounded-xl p-4 sm:p-5 flex flex-col gap-1 cursor-pointer transition-all ${
            durationMonths === 1
              ? "border-2 border-teal bg-[#f0f9f6] shadow-2xs"
              : "border border-line bg-white hover:border-teal/50"
          }`}
        >
          <span className="text-sm font-semibold text-ink">1 bulan</span>
          <span className="text-xs text-ink-muted">5 koin untuk satu lowongan</span>
        </div>

        {/* Lebih dari 1 Bulan */}
        <div
          onClick={() => onSelectDuration(3)}
          className={`rounded-xl p-4 sm:p-5 flex flex-col gap-1 cursor-pointer transition-all ${
            durationMonths > 1
              ? "border-2 border-teal bg-[#f0f9f6] shadow-2xs"
              : "border border-line bg-white hover:border-teal/50"
          }`}
        >
          <span className="text-sm font-semibold text-ink">Lebih dari 1 bulan</span>
          <span className="text-xs text-ink-muted">Koin tambahan berlaku</span>
        </div>
      </div>

      {/* Info Notice Banner */}
      <div className="bg-[#f0f9f8] border border-teal/20 rounded-xl p-3.5 flex items-start gap-2.5">
        <FiInfo className="w-4 h-4 text-teal shrink-0 mt-0.5" />
        <p className="text-xs text-teal-dark leading-relaxed">
          Jika memilih durasi lebih dari sebulan, biaya koin tambahan akan ditampilkan sebelum konfirmasi. Tarif perpanjangan tidak ditetapkan di sini.
        </p>
      </div>
    </div>
  );
}
