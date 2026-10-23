"use client";

import Link from "next/link";
import { FiInfo, FiSend } from "react-icons/fi";

interface ConfirmationSectionProps {
  jobSlug: string;
  companyName: string;
  coinCost: number;
  userCoins: number;
  confirmedCorrect: boolean;
  confirmedPayment: boolean;
  onToggleCorrect: () => void;
  onTogglePayment: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  canSubmit: boolean;
}

export default function ConfirmationSection({
  jobSlug,
  companyName,
  coinCost,
  userCoins,
  confirmedCorrect,
  confirmedPayment,
  onToggleCorrect,
  onTogglePayment,
  onSubmit,
  isSubmitting,
  canSubmit,
}: ConfirmationSectionProps) {
  const remainingCoins = Math.max(0, userCoins - coinCost);

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      {/* Section Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        Konfirmasi sebelum mengirim
      </h2>

      {/* Checkboxes */}
      <div className="flex flex-col gap-3.5">
        {/* Checkbox 1 */}
        <label
          htmlFor="confirm-correct"
          className="flex items-start gap-3 cursor-pointer select-none group"
        >
          <input
            id="confirm-correct"
            type="checkbox"
            checked={confirmedCorrect}
            onChange={onToggleCorrect}
            className="mt-0.5 w-4 h-4 rounded border-line text-teal focus:ring-teal cursor-pointer accent-teal shrink-0"
          />
          <span className="text-xs text-ink leading-relaxed group-hover:text-teal transition-colors">
            Saya memastikan informasi dan dokumen yang disertakan sudah benar.
          </span>
        </label>

        {/* Checkbox 2 */}
        <label
          htmlFor="confirm-payment"
          className="flex items-start gap-3 cursor-pointer select-none group"
        >
          <input
            id="confirm-payment"
            type="checkbox"
            checked={confirmedPayment}
            onChange={onTogglePayment}
            className="mt-0.5 w-4 h-4 rounded border-line text-teal focus:ring-teal cursor-pointer accent-teal shrink-0"
          />
          <span className="text-xs text-ink leading-relaxed group-hover:text-teal transition-colors">
            Saya setuju membayar {coinCost} koin untuk mengirim lamaran ini kepada {companyName}.
          </span>
        </label>
      </div>

      {/* Notice Banner */}
      <div className="bg-[#f0f9f8] border border-teal/20 rounded-xl p-4 flex items-start sm:items-center gap-3">
        <FiInfo className="w-4 h-4 text-teal shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-xs text-teal-dark font-medium leading-relaxed">
          Setelah dikirim, saldo berkurang dari {userCoins} koin menjadi {remainingCoins} koin. Periksa kembali seluruh jawaban dan dokumenmu.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2">
        <Link
          href={`/job/${jobSlug}`}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-line hover:border-ink-muted text-ink text-xs sm:text-sm font-semibold text-center hover:bg-gray-50 active:scale-[0.99] transition-all"
        >
          Kembali ke detail
        </Link>

        <button
          id="submit-application-btn"
          type="button"
          disabled={!canSubmit || isSubmitting}
          onClick={onSubmit}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal hover:bg-teal-dark active:scale-[0.99] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FiSend className="w-3.5 h-3.5" />
          {isSubmitting ? "Mengirim lamaran..." : "Konfirmasi & kirim"}
        </button>
      </div>
    </div>
  );
}
