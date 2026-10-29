"use client";

import { useState } from "react";
import { FiArrowRight, FiInfo } from "react-icons/fi";
import { TbHexagonLetterF } from "react-icons/tb";

interface TopUpCardProps {
  onProceed?: (amount: number) => void;
}

const BUNDLE_OPTIONS = [5, 10, 20, 50];

export default function TopUpCard({ onProceed }: TopUpCardProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(5);

  const handleProceed = () => {
    if (selectedAmount > 0 && onProceed) {
      onProceed(selectedAmount);
    }
  };

  return (
    <div className="bg-white border border-line rounded-2xl p-6 flex flex-col gap-5 shadow-xs h-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-ink">Pilih paket koin</h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Pilih paket bundle koin yang kamu butuhkan.
        </p>
      </div>

      {/* Bundle Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {BUNDLE_OPTIONS.map((amount) => {
          const isSelected = selectedAmount === amount;
          return (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={`flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? "bg-teal/5 border-teal text-teal shadow-xs font-semibold"
                  : "bg-white border-line text-ink hover:border-teal/40 hover:bg-[#f0f9f6]"
              }`}
            >
              <div className="flex items-center gap-1.5 text-lg font-bold">
                <TbHexagonLetterF className="text-teal text-xl shrink-0" />
                <span className="tabular-nums">{amount}</span>
              </div>
              <span
                className={`text-xs ${
                  isSelected ? "text-teal font-medium" : "text-ink-muted"
                }`}
              >
                Koin
              </span>
            </button>
          );
        })}
      </div>

      {/* Info box */}
      <div className="flex items-start gap-2.5 bg-[#EEF7F5] border border-teal/20 rounded-xl p-3.5">
        <FiInfo className="w-4 h-4 text-teal shrink-0 mt-0.5" />
        <p className="text-xs text-teal leading-relaxed">
          Informasi harga dan pembayaran akan ditampilkan sebelum konfirmasi.
          Belum ada pembayaran yang dilakukan.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2 mt-auto">
        <button
          type="button"
          id="btn-topup-proceed"
          onClick={handleProceed}
          className="w-full flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark active:scale-[0.98] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
        >
          <FiArrowRight className="w-4 h-4" />
          Lanjut ke rincian pembayaran ({selectedAmount} koin)
        </button>
      </div>
    </div>
  );
}
