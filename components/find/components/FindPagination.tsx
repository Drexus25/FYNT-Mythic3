"use client";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface FindPaginationProps {
  currentPage: number;
  totalPages: number;
  startItem: number;
  endItem: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function FindPagination({
  currentPage,
  totalPages,
  startItem,
  endItem,
  totalItems,
  onPageChange,
}: FindPaginationProps) {
  if (totalItems === 0) return null;

  return (
    <div className="flex items-center justify-between pt-6 pb-12 text-xs text-ink-muted">
      <div>
        <span>
          Menampilkan {startItem}–{endItem} dari {totalItems} lowongan
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {totalPages > 1 && (
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Halaman sebelumnya"
            className="w-7 h-7 flex items-center justify-center rounded-md border border-line text-ink-muted hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <FiChevronLeft className="w-3.5 h-3.5" />
          </button>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`w-7 h-7 flex items-center justify-center rounded-md text-xs font-semibold transition-colors ${
              currentPage === page
                ? "bg-[#E6F4F1] text-teal"
                : "border border-line text-ink hover:bg-paper"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Halaman selanjutnya"
          className="w-7 h-7 flex items-center justify-center rounded-md border border-transparent text-ink-muted hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
