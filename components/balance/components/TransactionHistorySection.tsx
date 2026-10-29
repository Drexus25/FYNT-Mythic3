"use client";

import { useState, useMemo } from "react";
import { FiArrowUpRight, FiArrowDownLeft, FiGift, FiRefreshCw, FiShoppingCart, FiBriefcase } from "react-icons/fi";
import { TbHexagonLetterF } from "react-icons/tb";
import { Transaction, TransactionCategory, formatDate } from "../data/balanceTypes";
import { UserRole } from "@/data/users";

type FilterTab = "all" | "credit" | "debit";

interface TransactionHistorySectionProps {
  transactions: Transaction[];
  role: UserRole;
}

function categoryIcon(category: TransactionCategory) {
  switch (category) {
    case "bonus_registration":
    case "reward":
      return <FiGift className="w-4 h-4" />;
    case "topup":
      return <FiShoppingCart className="w-4 h-4" />;
    case "apply_job":
    case "post_job":
      return <FiBriefcase className="w-4 h-4" />;
    case "refund":
      return <FiRefreshCw className="w-4 h-4" />;
    default:
      return <TbHexagonLetterF className="w-4 h-4" />;
  }
}

const TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "Semua aktivitas" },
  { key: "credit", label: "Koin masuk" },
  { key: "debit", label: "Koin keluar" },
];

export default function TransactionHistorySection({
  transactions,
  role,
}: TransactionHistorySectionProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filtered = useMemo(
    () =>
      activeTab === "all"
        ? transactions
        : transactions.filter((t) => t.type === activeTab),
    [transactions, activeTab]
  );

  const emptyLabel =
    activeTab === "credit"
      ? "Belum ada koin yang masuk."
      : activeTab === "debit"
      ? role === "recruiter"
        ? "Belum ada koin yang digunakan. Saat kamu memasang lowongan, transaksi akan tercatat di sini."
        : "Belum ada koin yang digunakan. Saat kamu melamar, transaksi akan tercatat di sini."
      : role === "recruiter"
      ? "Belum ada transaksi. Mulai pasang lowongan untuk menggunakan koin."
      : "Belum ada transaksi. Mulai melamar untuk menggunakan koin.";

  return (
    <div className="bg-white border border-line rounded-2xl shadow-xs overflow-hidden">
      {/* Section Header */}
      <div className="px-6 md:px-8 pt-6 pb-4 flex flex-col gap-1 border-b border-line">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Riwayat koin
        </h2>
        <p className="text-xs text-ink-muted">
          Semua aktivitas saldo dalam satu tempat.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 md:px-8 pt-4 flex items-center gap-2 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            id={`tab-history-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === tab.key
                ? "bg-teal text-white border-teal"
                : "border-line text-ink-muted hover:border-teal/40 hover:text-teal hover:bg-[#f0f9f6]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-line">
              <th className="px-6 md:px-8 py-3 text-left text-[11px] font-semibold text-ink-muted uppercase tracking-wider">
                Aktivitas
              </th>
              <th className="px-4 py-3 text-right text-[11px] font-semibold text-ink-muted uppercase tracking-wider whitespace-nowrap">
                Tanggal
              </th>
              <th className="px-6 md:px-8 py-3 text-right text-[11px] font-semibold text-ink-muted uppercase tracking-wider">
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/60">
            {filtered.length > 0 ? (
              filtered.map((txn) => (
                <tr
                  key={txn.id}
                  className="hover:bg-paper/60 transition-colors"
                >
                  {/* Activity cell */}
                  <td className="px-6 md:px-8 py-4">
                    <div className="flex items-center gap-3">
                      {/* Icon bubble */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          txn.type === "credit"
                            ? "bg-[#EEF7F5] text-teal"
                            : txn.category === "refund"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-rose-50 text-rose-500"
                        }`}
                      >
                        {categoryIcon(txn.category)}
                      </div>
                      {/* Description */}
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <p className="text-sm font-semibold text-ink leading-tight truncate">
                          {txn.description}
                        </p>
                        {txn.detail && (
                          <p className="text-[11px] text-ink-muted truncate">
                            {txn.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Date cell */}
                  <td className="px-4 py-4 text-right whitespace-nowrap">
                    <span className="text-xs text-ink-muted">
                      {formatDate(txn.date)}
                    </span>
                  </td>

                  {/* Amount cell */}
                  <td className="px-6 md:px-8 py-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      {txn.type === "credit" ? (
                        <FiArrowDownLeft className="w-3.5 h-3.5 text-teal shrink-0" />
                      ) : (
                        <FiArrowUpRight className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      )}
                      <span
                        className={`text-sm font-bold tabular-nums ${
                          txn.type === "credit"
                            ? "text-teal"
                            : txn.category === "refund"
                            ? "text-amber-600"
                            : "text-rose-500"
                        }`}
                      >
                        {txn.type === "credit" ? "+" : "-"}
                        {txn.amount} koin
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              /* Empty state */
              <tr>
                <td colSpan={3} className="px-6 md:px-8 py-10 text-center">
                  <p className="text-sm text-ink-muted leading-relaxed max-w-sm mx-auto">
                    {emptyLabel}
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
