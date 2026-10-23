"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiFileText,
  FiFolder,
  FiExternalLink,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { Applicant, ApplicantStatus } from "../data/applicantsData";

interface ApplicantDetailPanelProps {
  applicant: Applicant;
  onUpdateStatus: (id: string, status: ApplicantStatus) => void;
  onUpdateNote: (id: string, note: string) => void;
}

export default function ApplicantDetailPanel({
  applicant,
  onUpdateStatus,
  onUpdateNote,
}: ApplicantDetailPanelProps) {
  const [localNote, setLocalNote] = useState(applicant.internalNote || "");
  const [noteSaved, setNoteSaved] = useState(false);

  // Sync note when applicant changes
  const handleApplicantChange = () => {
    setLocalNote(applicant.internalNote || "");
    setNoteSaved(false);
  };

  const handleSaveNote = () => {
    onUpdateNote(applicant.id, localNote);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const statusBadge = (status: ApplicantStatus) => {
    if (status === "Shortlist") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10">
          Shortlist
        </span>
      );
    }
    if (status === "Rejected") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-rose-700 bg-rose-50">
          Rejected
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10">
        Not Reviewed
      </span>
    );
  };

  return (
    <div
      key={applicant.id}
      className="flex flex-col gap-6"
      onMouseEnter={handleApplicantChange}
    >
      {/* ── Header Card ── */}
      <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-xs">
        {/* Name, role, status */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-teal/15 text-teal font-bold text-base flex items-center justify-center shrink-0">
              {applicant.initials}
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-semibold text-ink leading-tight truncate">
                {applicant.name}
              </h2>
              <p className="text-xs text-ink-muted truncate">
                {applicant.role} · {applicant.location}
              </p>
            </div>
          </div>
          <div>{statusBadge(applicant.status)}</div>
        </div>

        {/* Contact */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted">
          <a
            href={`mailto:${applicant.email}`}
            className="flex items-center gap-1.5 hover:text-teal transition-colors"
          >
            <FiMail className="w-3.5 h-3.5" />
            <span>{applicant.email}</span>
          </a>
          <a
            href={`tel:${applicant.phone}`}
            className="flex items-center gap-1.5 hover:text-teal transition-colors"
          >
            <FiPhone className="w-3.5 h-3.5" />
            <span>{applicant.phone}</span>
          </a>
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
          {applicant.summary}
        </p>

        {/* Tags */}
        {applicant.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {applicant.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-gray-100 text-ink text-[11px] font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <button
            type="button"
            id={`shortlist-btn-${applicant.id}`}
            onClick={() =>
              onUpdateStatus(
                applicant.id,
                applicant.status === "Shortlist" ? "Not Reviewed" : "Shortlist"
              )
            }
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer ${
              applicant.status === "Shortlist"
                ? "bg-teal text-white hover:bg-teal-dark"
                : "bg-teal hover:bg-teal-dark text-white"
            }`}
          >
            <FiCheck className="w-3.5 h-3.5" />
            {applicant.status === "Shortlist" ? "Batalkan Shortlist" : "Masukkan shortlist"}
          </button>

          <button
            type="button"
            id={`reject-btn-${applicant.id}`}
            onClick={() =>
              onUpdateStatus(
                applicant.id,
                applicant.status === "Rejected" ? "Not Reviewed" : "Rejected"
              )
            }
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer ${
              applicant.status === "Rejected"
                ? "bg-rose-600 text-white hover:bg-rose-700"
                : "border border-line text-ink hover:border-rose-400 hover:text-rose-600 hover:bg-rose-50"
            }`}
          >
            <FiX className="w-3.5 h-3.5" />
            {applicant.status === "Rejected" ? "Batalkan Tolak" : "Tolak"}
          </button>
        </div>
      </div>

      {/* ── CV & Portofolio ── */}
      <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-xs">
        <h3 className="text-sm font-semibold text-ink">CV & portofolio</h3>

        <div className="flex flex-col gap-2.5">
          {applicant.documents.map((doc, i) => (
            <div
              key={i}
              className="border border-line rounded-xl p-3.5 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  {doc.name.includes("Portfolio") || doc.name.includes("portfolio") ? (
                    <FiFolder className="w-4.5 h-4.5" />
                  ) : (
                    <FiFileText className="w-4.5 h-4.5" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-ink truncate">{doc.name}</p>
                  <p className="text-[11px] text-ink-muted">
                    {doc.type} · {doc.size} · Dikirim {doc.sentAt}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="text-teal text-xs font-semibold hover:text-teal-dark transition-colors shrink-0 px-2 py-1.5 hover:bg-teal/5 rounded-lg"
              >
                Lihat
              </button>
            </div>
          ))}

          {applicant.portfolioUrl && (
            <a
              href={`https://${applicant.portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-teal font-medium hover:underline mt-1"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              <span>{applicant.portfolioUrl}</span>
            </a>
          )}
        </div>
      </div>

      {/* ── Essay Answers ── */}
      {applicant.essayAnswers.length > 0 && (
        <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 flex flex-col gap-5 shadow-xs">
          <h3 className="text-sm font-semibold text-ink">Jawaban essay</h3>

          {applicant.essayAnswers.map((ea, i) => (
            <div key={i} className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-ink leading-relaxed">
                {ea.question}
              </p>
              <div className="rounded-xl border border-line bg-gray-50/50 p-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                {ea.answer}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Internal Note ── */}
      <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-xs">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm font-semibold text-ink">Catatan internal</h3>
          <p className="text-[11px] text-ink-muted">Hanya terlihat oleh tim perusahaan.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`note-${applicant.id}`} className="text-xs font-semibold text-ink">
            Catatan kandidat
          </label>
          <textarea
            id={`note-${applicant.id}`}
            rows={4}
            value={localNote}
            onChange={(e) => {
              setLocalNote(e.target.value);
              setNoteSaved(false);
            }}
            placeholder="Tambahkan catatan internal tentang kandidat ini..."
            className="w-full p-3.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none leading-relaxed transition-all resize-y min-h-[100px]"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleSaveNote}
            className="px-4 py-2 text-xs font-semibold bg-white border border-line hover:border-teal text-ink hover:text-teal rounded-xl transition-all cursor-pointer"
          >
            {noteSaved ? "✓ Catatan disimpan" : "Simpan catatan"}
          </button>
        </div>
      </div>
    </div>
  );
}
