"use client";

import { FiX, FiFileText, FiFolder, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { SeekerApplication } from "../data/seekerDashboardData";

interface ApplicationDetailModalProps {
  application: SeekerApplication | null;
  onClose: () => void;
}

export default function ApplicationDetailModal({
  application,
  onClose,
}: ApplicationDetailModalProps) {
  if (!application) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white border border-line rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-line bg-gray-50/50">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-sm shrink-0 border border-teal/20">
              {application.logo}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-ink truncate">
                {application.title}
              </h3>
              <p className="text-xs text-ink-muted">
                {application.company} · {application.location}
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

        {/* Content */}
        <div className="p-6 flex flex-col gap-5 max-h-[75vh] overflow-y-auto">
          {/* Status Alert Banner */}
          <div className="bg-[#f0f9f8] border border-teal/20 rounded-xl p-3.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-teal font-medium">
              <FiCheckCircle className="w-4 h-4 shrink-0" />
              <span>Status Lamaran:</span>
            </div>
            <span className="font-semibold text-teal-dark">{application.status}</span>
          </div>

          {/* Submitted Documents Section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-ink uppercase tracking-wider text-ink-muted">
              Dokumen yang Dikirimkan
            </h4>

            {/* CV */}
            <div className="border border-line rounded-xl p-3 flex items-center justify-between gap-3 bg-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  <FiFileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-ink truncate">
                    {application.submittedDocuments.cvName}
                  </p>
                  <p className="text-[11px] text-ink-muted">Curriculum Vitae (PDF)</p>
                </div>
              </div>
              <span className="text-xs text-teal font-medium px-2 py-1 bg-teal/5 rounded-md shrink-0">
                Terlampir
              </span>
            </div>

            {/* Portfolio File */}
            {application.submittedDocuments.portfolioName && (
              <div className="border border-line rounded-xl p-3 flex items-center justify-between gap-3 bg-white">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <FiFolder className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink truncate">
                      {application.submittedDocuments.portfolioName}
                    </p>
                    <p className="text-[11px] text-ink-muted">Berkas Portofolio (PDF)</p>
                  </div>
                </div>
                <span className="text-xs text-teal font-medium px-2 py-1 bg-teal/5 rounded-md shrink-0">
                  Terlampir
                </span>
              </div>
            )}

            {/* Portfolio URL */}
            {application.submittedDocuments.portfolioUrl && (
              <div className="border border-line rounded-xl p-3 flex items-center justify-between gap-3 bg-white">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <FiExternalLink className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink truncate">
                      {application.submittedDocuments.portfolioUrl}
                    </p>
                    <p className="text-[11px] text-ink-muted">Tautan Portofolio Daring</p>
                  </div>
                </div>
                <a
                  href={`https://${application.submittedDocuments.portfolioUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal hover:underline font-medium shrink-0"
                >
                  Buka
                </a>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 pt-2 border-t border-line text-xs">
            <div className="flex justify-between py-1">
              <span className="text-ink-muted">Tanggal Melamar</span>
              <span className="font-semibold text-ink">{application.appliedDate}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-ink-muted">Jenis Pekerjaan</span>
              <span className="font-semibold text-ink">{application.employmentType} ({application.workplaceType})</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-line bg-gray-50/50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-teal hover:bg-teal-dark text-white rounded-xl transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
