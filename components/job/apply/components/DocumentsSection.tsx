"use client";

import { useRef } from "react";
import { FiFileText, FiFolder, FiTrash2, FiPlus, FiExternalLink } from "react-icons/fi";
import { UserDocument } from "../data/userProfile";

interface DocumentsSectionProps {
  cvFiles: UserDocument[];
  portfolioFiles: UserDocument[];
  portfolioUrl: string;
  onUpdatePortfolioUrl: (url: string) => void;
  onAddCvFile: (file: UserDocument) => void;
  onDeleteCvFile: (id: string) => void;
  onAddPortfolioFile: (file: UserDocument) => void;
  onDeletePortfolioFile: (id: string) => void;
  onViewDocument: (doc: UserDocument) => void;
}

export default function DocumentsSection({
  cvFiles,
  portfolioFiles,
  portfolioUrl,
  onUpdatePortfolioUrl,
  onAddCvFile,
  onDeleteCvFile,
  onAddPortfolioFile,
  onDeletePortfolioFile,
  onViewDocument,
}: DocumentsSectionProps) {
  const cvInputRef = useRef<HTMLInputElement>(null);
  const portfolioInputRef = useRef<HTMLInputElement>(null);

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    const newDoc: UserDocument = {
      id: `cv-${Date.now()}`,
      name: file.name,
      size: `${sizeInMb.replace(".", ",")} MB`,
      type: file.type.includes("pdf") ? "PDF" : "DOC",
      updatedAt: "Hari ini",
      url: URL.createObjectURL(file),
    };
    onAddCvFile(newDoc);
    e.target.value = "";
  };

  const handlePortfolioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    const newDoc: UserDocument = {
      id: `port-${Date.now()}`,
      name: file.name,
      size: `${sizeInMb.replace(".", ",")} MB`,
      type: file.type.includes("pdf") ? "PDF" : "DOC",
      url: URL.createObjectURL(file),
    };
    onAddPortfolioFile(newDoc);
    e.target.value = "";
  };

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      {/* Hidden file inputs */}
      <input
        ref={cvInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleCvUpload}
      />
      <input
        ref={portfolioInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.zip"
        className="hidden"
        onChange={handlePortfolioUpload}
      />

      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          CV & portofolio
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Dokumen ini diambil dari profilmu. Periksa kembali sebelum mengirim lamaran.
        </p>
      </div>

      {/* CV Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-ink">
            Curriculum Vitae (CV)
          </span>
          <button
            type="button"
            onClick={() => cvInputRef.current?.click()}
            className="flex items-center gap-1.5 text-xs font-medium text-teal hover:text-teal-dark hover:underline transition-all"
          >
            <FiPlus className="w-3.5 h-3.5" />
            Tambah CV
          </button>
        </div>

        {cvFiles.length > 0 ? (
          <div className="flex flex-col gap-2.5">
            {cvFiles.map((doc) => (
              <div
                key={doc.id}
                className="border border-line rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-white hover:border-ink/20 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 text-teal">
                    <FiFileText className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-ink truncate">
                      {doc.name}
                    </p>
                    <p className="text-[11px] text-ink-muted">
                      {doc.type} · {doc.size}
                      {doc.updatedAt && ` · Diperbarui ${doc.updatedAt}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onViewDocument(doc)}
                    className="text-teal hover:text-teal-dark text-xs font-medium px-2.5 py-1.5 rounded-lg hover:bg-teal/5 transition-all"
                  >
                    Lihat
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeleteCvFile(doc.id)}
                    title="Hapus dokumen"
                    className="text-ink-muted hover:text-danger p-1.5 rounded-lg hover:bg-danger/10 transition-all"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => cvInputRef.current?.click()}
            className="border border-dashed border-line hover:border-teal rounded-xl p-5 text-center cursor-pointer bg-gray-50/50 hover:bg-teal/5 transition-all flex flex-col items-center gap-2"
          >
            <FiFileText className="w-6 h-6 text-ink-muted" />
            <p className="text-xs font-medium text-ink">Belum ada CV terunggah</p>
            <p className="text-[11px] text-teal font-medium">
              Klik di sini untuk mengunggah CV baru (PDF, maks 5 MB)
            </p>
          </div>
        )}
      </div>

      {/* Portfolio URL */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="portfolio-url"
          className="text-xs font-semibold text-ink"
        >
          Tautan portofolio
        </label>
        <div className="relative">
          <input
            id="portfolio-url"
            type="text"
            value={portfolioUrl}
            onChange={(e) => onUpdatePortfolioUrl(e.target.value)}
            placeholder="Contoh: https://namaportofolio.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
          />
          {portfolioUrl && (
            <a
              href={portfolioUrl.startsWith("http") ? portfolioUrl : `https://${portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Kunjungi tautan"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-teal p-1"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Portfolio Files */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-ink">
            Dokumen Portofolio
          </span>
          <button
            type="button"
            onClick={() => portfolioInputRef.current?.click()}
            className="flex items-center gap-1.5 text-xs font-medium text-teal hover:text-teal-dark hover:underline transition-all"
          >
            <FiPlus className="w-3.5 h-3.5" />
            Tambah Portofolio
          </button>
        </div>

        {portfolioFiles.length > 0 ? (
          <div className="flex flex-col gap-2.5">
            {portfolioFiles.map((doc) => (
              <div
                key={doc.id}
                className="border border-line rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-white hover:border-ink/20 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 text-teal">
                    <FiFolder className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-ink truncate">
                      {doc.name}
                    </p>
                    <p className="text-[11px] text-ink-muted">
                      {doc.type} · {doc.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onViewDocument(doc)}
                    className="text-teal hover:text-teal-dark text-xs font-medium px-2.5 py-1.5 rounded-lg hover:bg-teal/5 transition-all"
                  >
                    Lihat
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeletePortfolioFile(doc.id)}
                    title="Hapus dokumen"
                    className="text-ink-muted hover:text-danger p-1.5 rounded-lg hover:bg-danger/10 transition-all"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => portfolioInputRef.current?.click()}
            className="border border-dashed border-line hover:border-teal rounded-xl p-5 text-center cursor-pointer bg-gray-50/50 hover:bg-teal/5 transition-all flex flex-col items-center gap-2"
          >
            <FiFolder className="w-6 h-6 text-ink-muted" />
            <p className="text-xs font-medium text-ink">Belum ada file portofolio</p>
            <p className="text-[11px] text-teal font-medium">
              Klik di sini untuk mengunggah dokumen portofolio (PDF/ZIP, maks 10 MB)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
