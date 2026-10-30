"use client";

import { useRef, useState } from "react";
import { FiLayout, FiUploadCloud, FiTrash2, FiRefreshCw, FiLink } from "react-icons/fi";
import { ProfileDocument } from "../data/profileTypes";

interface PortfolioSectionProps {
  portfolioLink: string;
  portfolioDocument?: ProfileDocument;
  onPortfolioLinkChange: (value: string) => void;
  onUploadPortfolio: (file: File) => void;
  onRemovePortfolio: (id: string) => void;
}

export default function PortfolioSection({
  portfolioLink,
  portfolioDocument,
  onPortfolioLinkChange,
  onUploadPortfolio,
  onRemovePortfolio,
}: PortfolioSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadPortfolio(file);
      e.target.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      onUploadPortfolio(file);
    }
  };

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
        id="portfolio-file-input"
      />

      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Portofolio
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Tunjukkan portofolio terbaikmu melalui tautan situs web atau berkas dokumen PDF.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Field 1: Tautan Portofolio */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="profile-portfolio-link"
            className="text-xs font-semibold text-ink flex items-center gap-1.5"
          >
            <FiLink className="w-3.5 h-3.5 text-teal" />
            Tautan portofolio (URL)
          </label>
          <input
            id="profile-portfolio-link"
            type="text"
            value={portfolioLink}
            onChange={(e) => onPortfolioLinkChange(e.target.value)}
            placeholder="Contoh: https://yourname.design atau behance.net/yourname"
            className={inputClass}
          />
        </div>

        {/* Field 2: Berkas Portofolio (PDF) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-ink">
            Berkas portofolio (PDF)
          </label>

          {portfolioDocument ? (
            <div className="flex items-center justify-between gap-3 border border-line rounded-xl p-3.5 hover:border-teal/30 transition-all bg-white group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#f0f9f6] border border-teal/20 flex items-center justify-center shrink-0">
                  <FiLayout className="w-5 h-5 text-teal" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-ink truncate">
                    {portfolioDocument.name}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    PDF · {portfolioDocument.size} · Diperbarui {portfolioDocument.updatedAt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  id="btn-replace-portfolio"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-dark px-3 py-1.5 rounded-lg hover:bg-[#f0f9f6] transition-colors cursor-pointer"
                  title="Ganti berkas portofolio"
                >
                  <FiRefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ganti berkas</span>
                </button>
                <button
                  type="button"
                  id="btn-remove-portfolio"
                  onClick={() => onRemovePortfolio(portfolioDocument.id)}
                  className="text-xs font-medium text-ink-muted hover:text-danger p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                  title="Hapus portofolio"
                  aria-label="Hapus portofolio"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-2 transition-all cursor-pointer ${
                isDragging
                  ? "border-teal bg-[#f0f9f6]"
                  : "border-line hover:border-teal/50 hover:bg-[#f0f9f6]/60"
              }`}
              role="button"
              tabIndex={0}
              id="btn-upload-portfolio"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  fileInputRef.current?.click();
                }
              }}
            >
              <FiUploadCloud className="w-8 h-8 text-ink-muted group-hover:text-teal transition-colors" />
              <div className="text-center">
                <p className="text-xs sm:text-sm font-semibold text-ink">
                  Pilih file portofolio atau seret & lepas ke sini
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">
                  Format PDF · Maksimal 10 MB per berkas
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
