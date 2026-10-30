"use client";

import { useState } from "react";
import { TbHexagonLetterF } from "react-icons/tb";
import { FiArrowRight, FiInfo } from "react-icons/fi";
import { UserRole } from "@/data/users";

const BUNDLE_OPTIONS = [5, 10, 20, 50];

interface CoinCardProps {
  coins: number;
  role: UserRole;
  onProceed?: (amount: number) => void;
}

export default function CoinCard({ coins, role, onProceed }: CoinCardProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(5);

  const label =
    role === "recruiter"
      ? "Saldo tersedia untuk pasang lowongan"
      : "Saldo tersedia untuk melamar kerja";

  const handleProceed = () => {
    if (selectedAmount > 0 && onProceed) {
      onProceed(selectedAmount);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-teal to-teal-dark rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-2 border-white/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-2 border-white/10 pointer-events-none"
      />

      {/* Label row */}
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs md:text-sm font-semibold text-white/70 uppercase tracking-widest">
          Saldo Tersedia
        </p>
        <div className="relative group cursor-default">
          <FiInfo className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
          {/* Tooltip */}
          <div className="absolute right-0 top-7 hidden group-hover:block w-56 bg-ink text-white text-[11px] rounded-xl p-3 leading-relaxed shadow-xl z-10 pointer-events-none">
            {label}
          </div>
        </div>
      </div>

      {/* Coin amount */}
      <div className="flex items-end gap-3">
        <TbHexagonLetterF className="text-white/80 text-5xl shrink-0 mb-0.5" />
        <div className="flex items-baseline gap-2">
          <span className="text-5xl md:text-6xl font-bold text-white leading-none tabular-nums">
            {coins}
          </span>
          <span className="text-xl md:text-2xl font-semibold text-white/60">
            Koin
          </span>
        </div>
      </div>

      {/* Hint row */}
      <p className="text-xs text-white/50 leading-relaxed">
        {role === "recruiter"
          ? "Setiap lowongan yang kamu pasang menggunakan koin."
          : "Setiap lamaran yang kamu kirim menggunakan koin."}
      </p>

      {/* Divider */}
      <div className="border-t border-white/15" />

      {/* Top-up section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm font-semibold text-white">Pilih paket koin</h3>
          <p className="text-xs text-white/50 leading-relaxed">
            Pilih paket bundle koin yang kamu butuhkan.
          </p>
        </div>

        {/* Bundle options grid with larger buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BUNDLE_OPTIONS.map((amount) => {
            const isSelected = selectedAmount === amount;
            return (
              <button
                key={amount}
                type="button"
                onClick={() => setSelectedAmount(amount)}
                className={`flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-teal border-white shadow-sm font-semibold"
                    : "border-white/20 bg-white/10 text-white hover:border-white/50 hover:bg-white/15"
                }`}
              >
                <div className="flex items-center gap-1.5 text-lg font-bold">
                  <TbHexagonLetterF className="text-xl shrink-0" />
                  <span className="tabular-nums">{amount}</span>
                </div>
                <span
                  className={`text-xs ${
                    isSelected ? "text-teal/80 font-medium" : "text-white/60"
                  }`}
                >
                  Koin
                </span>
              </button>
            );
          })}
        </div>

        {/* Info box */}
        <div className="flex items-start gap-2.5 bg-white/10 border border-white/20 rounded-xl p-3.5">
          <FiInfo className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
          <p className="text-xs text-white/70 leading-relaxed">
            Informasi harga dan pembayaran akan ditampilkan sebelum konfirmasi.
            Belum ada pembayaran yang dilakukan.
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          id="btn-topup-proceed"
          onClick={handleProceed}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-white/90 active:scale-[0.98] text-teal text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
        >
          <FiArrowRight className="w-4 h-4" />
          Lanjut ke rincian pembayaran ({selectedAmount} koin)
        </button>
      </div>
    </div>
  );
}
