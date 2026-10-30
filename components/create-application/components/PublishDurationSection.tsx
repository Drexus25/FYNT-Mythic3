"use client";

import { FiInfo, FiPlus, FiMinus, FiClock } from "react-icons/fi";

interface PublishDurationSectionProps {
  durationMonths: number;
  additionalWeeks?: number;
  onSelectDuration: (months: number) => void;
  onAdditionalWeeksChange?: (weeks: number) => void;
}

export default function PublishDurationSection({
  durationMonths,
  additionalWeeks = 1,
  onSelectDuration,
  onAdditionalWeeksChange,
}: PublishDurationSectionProps) {
  const isCustomDuration = durationMonths > 1;
  const currentWeeks = Math.max(1, additionalWeeks);
  const totalCoins = 5 + currentWeeks;

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Durasi publikasi
        </h2>
        <span className="text-xs text-ink-muted flex items-center gap-1.5">
          <FiClock className="w-3.5 h-3.5 text-teal" />
          Biaya dasar 5 koin / bulan
        </span>
      </div>

      {/* Duration Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1 Bulan */}
        <div
          id="duration-option-1-month"
          onClick={() => onSelectDuration(1)}
          className={`rounded-xl p-4 sm:p-5 flex flex-col gap-1 cursor-pointer transition-all ${
            !isCustomDuration
              ? "border-2 border-teal bg-[#f0f9f6] shadow-2xs"
              : "border border-line bg-white hover:border-teal/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">1 bulan</span>
            {!isCustomDuration && (
              <span className="text-[11px] font-semibold text-teal bg-teal/15 px-2 py-0.5 rounded-full">
                5 koin
              </span>
            )}
          </div>
          <span className="text-xs text-ink-muted">5 koin untuk satu lowongan</span>
        </div>

        {/* Lebih dari 1 Bulan */}
        <div
          id="duration-option-more-months"
          onClick={() => onSelectDuration(2)}
          className={`rounded-xl p-4 sm:p-5 flex flex-col gap-1 cursor-pointer transition-all ${
            isCustomDuration
              ? "border-2 border-teal bg-[#f0f9f6] shadow-2xs"
              : "border border-line bg-white hover:border-teal/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Lebih dari 1 bulan</span>
            {isCustomDuration && (
              <span className="text-[11px] font-semibold text-teal bg-teal/15 px-2 py-0.5 rounded-full">
                +{currentWeeks} minggu ({totalCoins} koin)
              </span>
            )}
          </div>
          <span className="text-xs text-ink-muted">
            {isCustomDuration
              ? `Biaya: 5 koin + ${currentWeeks} koin tambahan`
              : "Koin tambahan berlaku (+1 koin/minggu)"}
          </span>
        </div>
      </div>

      {/* Additional Weeks Field (Appears when Lebih dari 1 bulan is chosen) */}
      {isCustomDuration && (
        <div className="bg-[#fafbfc] border border-teal/30 rounded-xl p-4 sm:p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <label
                htmlFor="additional-weeks-input"
                className="text-sm font-semibold text-ink flex items-center gap-2"
              >
                <span>Durasi tambahan (minggu)</span>
                <span className="text-[11px] text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">
                  +1 koin / minggu
                </span>
              </label>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                Tentukan jumlah minggu tambahan di luar masa tayang 1 bulan. Setiap penambahan 1 minggu dikenakan biaya 1 koin.
              </p>
            </div>

            {/* Stepper Input */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-white p-1 rounded-xl border border-line shadow-2xs">
              <button
                type="button"
                id="btn-decrease-weeks"
                disabled={currentWeeks <= 1}
                onClick={() => onAdditionalWeeksChange?.(Math.max(1, currentWeeks - 1))}
                className="w-8 h-8 rounded-lg bg-paper hover:bg-line active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-ink transition-all cursor-pointer"
                title="Kurangi 1 minggu"
                aria-label="Kurangi 1 minggu"
              >
                <FiMinus className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center px-1">
                <input
                  id="additional-weeks-input"
                  type="number"
                  min="1"
                  max="52"
                  value={currentWeeks}
                  onChange={(e) => {
                    const parsed = parseInt(e.target.value, 10);
                    if (!isNaN(parsed)) {
                      onAdditionalWeeksChange?.(Math.max(1, Math.min(52, parsed)));
                    } else if (e.target.value === "") {
                      onAdditionalWeeksChange?.(1);
                    }
                  }}
                  className="w-12 text-center font-bold text-sm text-ink focus:outline-hidden bg-transparent"
                />
                <span className="text-xs font-medium text-ink-muted pr-1">mg</span>
              </div>

              <button
                type="button"
                id="btn-increase-weeks"
                disabled={currentWeeks >= 52}
                onClick={() => onAdditionalWeeksChange?.(Math.min(52, currentWeeks + 1))}
                className="w-8 h-8 rounded-lg bg-teal text-white hover:bg-teal-dark active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer"
                title="Tambah 1 minggu"
                aria-label="Tambah 1 minggu"
              >
                <FiPlus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Cost Calculation Summary Box */}
          <div className="bg-white border border-teal/20 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs">
              <span className="text-ink-muted">Masa tayang total:</span>
              <span className="font-semibold text-ink bg-[#f0f9f6] px-2 py-0.5 rounded-md border border-teal/20">
                1 bulan + {currentWeeks} minggu
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-ink-muted">
                5 koin + {currentWeeks} koin =
              </span>
              <span className="font-bold text-teal text-sm">
                {totalCoins} koin
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
