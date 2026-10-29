"use client";

import { useRef, useState } from "react";
import { FiFileText, FiUploadCloud, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { ProfileDocument } from "../data/profileTypes";

interface CvSectionProps {
  cvDocument?: ProfileDocument;
  onUploadCv: (file: File) => void;
  onRemoveCv: (id: string) => void;
}

export default function CvSection({
  cvDocument,
  onUploadCv,
  onRemoveCv,
}: CvSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadCv(file);
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
      onUploadCv(file);
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
        id="cv-file-input"
      />

      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Curriculum Vitae (CV)
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Unggah CV terbaru dalam format PDF agar perekrut dapat melihat riwayat profesionalmu.
        </p>
      </div>

      {/* CV Document Card (if exists) */}
      {cvDocument ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 border border-line rounded-xl p-3.5 hover:border-teal/30 transition-all bg-white group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#f0f9f6] border border-teal/20 flex items-center justify-center shrink-0">
                <FiFileText className="w-5 h-5 text-teal" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-ink truncate">
                  {cvDocument.name}
                </p>
                <p className="text-[11px] text-ink-muted">
                  PDF · {cvDocument.size} · Diperbarui {cvDocument.updatedAt}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                id="btn-replace-cv"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-dark px-3 py-1.5 rounded-lg hover:bg-[#f0f9f6] transition-colors cursor-pointer"
                title="Ganti berkas CV"
              >
                <FiRefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ganti CV</span>
              </button>
              <button
                type="button"
                id="btn-remove-cv"
                onClick={() => onRemoveCv(cvDocument.id)}
                className="text-xs font-medium text-ink-muted hover:text-danger p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                title="Hapus CV"
                aria-label="Hapus CV"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty / Upload Dropzone */
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
          id="btn-upload-cv"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              fileInputRef.current?.click();
            }
          }}
        >
          <FiUploadCloud className="w-8 h-8 text-ink-muted group-hover:text-teal transition-colors" />
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold text-ink">
              Pilih file CV atau seret & lepas ke sini
            </p>
            <p className="text-[11px] text-ink-muted mt-0.5">
              Format PDF · Maksimal 5 MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
