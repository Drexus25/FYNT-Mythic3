"use client";

import { useState } from "react";
import JobCard from "@/components/shared/JobCard";
import { JobItem } from "../data/data";
import { FiChevronDown } from "react-icons/fi";

interface FindJobGridProps {
  jobs: JobItem[];
  sortBy: string;
  onSortChange: (sort: string) => void;
  onResetSearch?: () => void;
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
}

export default function FindJobGrid({
  jobs,
  sortBy,
  onSortChange,
  onResetSearch,
  isLoading = false,
  isError = false,
  onRetry,
}: FindJobGridProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortOptions = [
    { label: "Relevansi", value: "relevance" },
    { label: "Terbaru", value: "newest" },
    { label: "Gaji Tertinggi", value: "salary" },
    { label: "Koin Terendah", value: "coin" },
  ];

  const currentSortLabel =
    sortOptions.find((opt) => opt.value === sortBy)?.label || "Relevansi";

  return (
    <section className="flex flex-col gap-4 mt-2">
      {/* List Header: Count & Sorting */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-ink">
          {jobs.length} lowongan ditemukan
        </h2>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink font-medium py-1 px-2 rounded transition-colors"
          >
            <span>Urutkan:</span>
            <span className="font-semibold text-ink">{currentSortLabel}</span>
            <FiChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-1 w-40 bg-white border border-line rounded-lg shadow-lg z-30 py-1 text-xs">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onSortChange(opt.value);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 transition-colors flex items-center justify-between ${
                      sortBy === opt.value
                        ? "bg-[#E6F4F1] text-teal font-semibold"
                        : "text-ink hover:bg-paper"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.value && <span>✓</span>}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Grid of Job Cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col w-full h-[220px] gap-4 p-5 bg-white border border-line rounded-3xl animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gray-200" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
              <div className="flex flex-col gap-2 flex-1 mt-1">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-3.5 w-1/2 bg-gray-200 rounded" />
                <div className="h-4 w-1/3 bg-gray-200 rounded mt-1" />
              </div>
              <div className="w-full bg-line h-px" />
              <div className="flex justify-between items-center">
                <div className="h-6 w-20 bg-gray-200 rounded-full" />
                <div className="h-3.5 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white border border-line rounded-2xl text-center px-4">
          <p className="text-lg font-semibold text-rose-600">
            Gagal memuat lowongan
          </p>
          <p className="text-sm text-ink-muted mt-1 max-w-sm">
            Terjadi kesalahan saat memuat data lowongan dari server.
          </p>
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="mt-4 px-4 py-2 bg-teal text-white text-xs font-semibold rounded-lg hover:bg-teal-dark transition-all cursor-pointer"
            >
              Coba Lagi
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white border border-line rounded-2xl text-center px-4">
          <p className="text-lg font-semibold text-ink">
            Tidak ada lowongan yang ditemukan
          </p>
          <p className="text-sm text-ink-muted mt-1 max-w-sm">
            Coba gunakan kata kunci lain seperti posisi pekerjaan, keahlian, atau nama perusahaan.
          </p>
          {onResetSearch && (
            <button
              onClick={onResetSearch}
              className="mt-4 px-4 py-2 bg-teal text-white text-xs font-semibold rounded-lg hover:bg-teal-dark transition-all cursor-pointer"
            >
              Hapus Filter Pencarian
            </button>
          )}
        </div>
      )}
    </section>
  );
}
