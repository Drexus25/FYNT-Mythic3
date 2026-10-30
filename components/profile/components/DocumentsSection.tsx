"use client";

import { FiFileText, FiLayout, FiUploadCloud, FiLink } from "react-icons/fi";
import { ProfileDocument } from "../data/profileTypes";

interface DocumentsSectionProps {
  documents: ProfileDocument[];
  portfolioLink: string;
  onPortfolioLinkChange: (value: string) => void;
  onReplaceDocument: (id: string) => void;
}

export default function DocumentsSection({
  documents,
  portfolioLink,
  onPortfolioLinkChange,
  onReplaceDocument,
}: DocumentsSectionProps) {
  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white";

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Section Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        CV &amp; Portofolio
      </h2>

      {/* Document List */}
      <div className="flex flex-col gap-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between gap-3 border border-line rounded-xl p-3.5 hover:border-teal/30 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#f0f9f6] border border-teal/20 flex items-center justify-center shrink-0">
                {doc.type === "cv" ? (
                  <FiFileText className="w-4 h-4 text-teal" />
                ) : (
                  <FiLayout className="w-4 h-4 text-teal" />
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-semibold text-ink">{doc.name}</p>
                <p className="text-[11px] text-ink-muted">
                  PDF · {doc.size} · Diperbarui {doc.updatedAt}
                </p>
              </div>
            </div>
            <button
              type="button"
              id={`btn-replace-doc-${doc.id}`}
              onClick={() => onReplaceDocument(doc.id)}
              className="text-xs font-semibold text-teal hover:text-teal-dark transition-colors cursor-pointer shrink-0 opacity-0 group-hover:opacity-100"
            >
              Ganti
            </button>
          </div>
        ))}
      </div>

      {/* Portfolio Link */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="profile-portfolio-link" className="text-xs font-semibold text-ink flex items-center gap-1.5">
          <FiLink className="w-3.5 h-3.5 text-teal" />
          Tautan portofolio
        </label>
        <input
          id="profile-portfolio-link"
          type="text"
          value={portfolioLink}
          onChange={(e) => onPortfolioLinkChange(e.target.value)}
          placeholder="Contoh: yourname.design atau behance.net/yourname"
          className={inputClass}
        />
      </div>

      {/* Upload Drop Zone */}
      <button
        type="button"
        id="btn-upload-document"
        className="w-full border-2 border-dashed border-line hover:border-teal/50 hover:bg-[#f0f9f6] rounded-xl p-6 flex flex-col items-center gap-2 transition-all group cursor-pointer"
      >
        <FiUploadCloud className="w-7 h-7 text-ink-muted group-hover:text-teal transition-colors" />
        <div className="text-center">
          <p className="text-xs font-semibold text-ink group-hover:text-teal transition-colors">
            Unggah dokumen baru
          </p>
          <p className="text-[11px] text-ink-muted mt-0.5">
            PDF · Maksimal 5 MB per berkas
          </p>
        </div>
      </button>
    </div>
  );
}
