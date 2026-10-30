"use client";

import { FiX, FiFileText, FiDownload } from "react-icons/fi";
import { UserDocument } from "../data/userProfile";

interface DocumentPreviewModalProps {
  document: UserDocument | null;
  onClose: () => void;
}

export default function DocumentPreviewModal({
  document,
  onClose,
}: DocumentPreviewModalProps) {
  if (!document) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white border border-line rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-line bg-gray-50/50">
          <div className="flex items-center gap-2.5 min-w-0">
            <FiFileText className="w-5 h-5 text-teal shrink-0" />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-ink truncate">
                {document.name}
              </h3>
              <p className="text-[11px] text-ink-muted">
                {document.type} · {document.size}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-muted hover:text-ink p-1.5 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Mock Document Content */}
        <div className="p-6 flex flex-col items-center justify-center min-h-[220px] bg-paper text-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-xs">
            <FiFileText className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1 max-w-xs">
            <p className="text-sm font-semibold text-ink">{document.name}</p>
            <p className="text-xs text-ink-muted">
              Dokumen tersimpan dari profil pelamar. Siap ditinjau oleh tim rekrutmen.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-2.5 p-4 border-t border-line bg-white">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-ink hover:bg-gray-100 rounded-xl transition-all"
          >
            Tutup
          </button>
          {document.url && document.url !== "#" ? (
            <a
              href={document.url}
              download={document.name}
              className="px-4 py-2 text-xs font-semibold bg-teal hover:bg-teal-dark text-white rounded-xl flex items-center gap-1.5 transition-all"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Unduh
            </a>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold bg-teal hover:bg-teal-dark text-white rounded-xl transition-all"
            >
              Selesai Meninjau
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
