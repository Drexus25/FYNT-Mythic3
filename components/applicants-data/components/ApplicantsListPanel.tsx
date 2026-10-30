"use client";

import { useState } from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { Applicant, ApplicantStatus } from "../data/applicantsData";

type TabFilter = "all" | "not-reviewed" | "shortlist" | "rejected";

interface ApplicantsListPanelProps {
  applicants: Applicant[];
  selectedId: string;
  onSelectApplicant: (id: string) => void;
}

export default function ApplicantsListPanel({
  applicants,
  selectedId,
  onSelectApplicant,
}: ApplicantsListPanelProps) {
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  // Count by status
  const total = applicants.length;
  const notReviewedCount = applicants.filter((a) => a.status === "Not Reviewed").length;
  const shortlistCount = applicants.filter((a) => a.status === "Shortlist").length;
  const rejectedCount = applicants.filter((a) => a.status === "Rejected").length;

  // Filter by tab
  const tabFiltered = applicants.filter((a) => {
    if (activeTab === "not-reviewed") return a.status === "Not Reviewed";
    if (activeTab === "shortlist") return a.status === "Shortlist";
    if (activeTab === "rejected") return a.status === "Rejected";
    return true;
  });

  // Filter by search
  const filtered = tabFiltered.filter((a) => {
    const q = searchQuery.toLowerCase();
    return (
      a.name.toLowerCase().includes(q) ||
      a.role.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  // Paginate
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const statusBadge = (status: ApplicantStatus) => {
    if (status === "Shortlist") {
      return (
        <span className="text-[10px] font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full">
          Shortlist
        </span>
      );
    }
    if (status === "Rejected") {
      return (
        <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">
          Rejected
        </span>
      );
    }
    return (
      <span className="text-[10px] font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full">
        Not Reviewed
      </span>
    );
  };

  const tabs = [
    { key: "all" as TabFilter, label: `Semua (${total})` },
    { key: "not-reviewed" as TabFilter, label: `Not Reviewed (${notReviewedCount})` },
    { key: "shortlist" as TabFilter, label: `Shortlist (${shortlistCount})` },
    { key: "rejected" as TabFilter, label: `Rejected (${rejectedCount})` },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => { setActiveTab(tab.key); setPage(1); }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === tab.key
                ? "bg-teal text-white shadow-sm"
                : "bg-white border border-line text-ink-muted hover:border-teal/50 hover:text-teal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted w-4 h-4" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
          placeholder="Cari nama atau keahlian"
          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-line text-xs sm:text-sm text-ink placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all bg-white"
        />
      </div>

      {/* Count & Sort */}
      <div className="flex items-center justify-between text-[11px] text-ink-muted px-0.5">
        <span>
          {filtered.length === 0
            ? "Tidak ada pelamar"
            : `${filtered.length} dari ${total} pelamar`}
        </span>
        <span className="font-medium">Terbaru ↓</span>
      </div>

      {/* Applicant Cards */}
      <div className="flex flex-col gap-2.5">
        {paginated.length === 0 ? (
          <div className="bg-white border border-line rounded-xl p-6 text-center text-xs text-ink-muted">
            Tidak ada pelamar yang sesuai filter.
          </div>
        ) : (
          paginated.map((applicant) => {
            const isSelected = applicant.id === selectedId;
            return (
              <div
                key={applicant.id}
                onClick={() => onSelectApplicant(applicant.id)}
                className={`bg-white rounded-xl p-4 cursor-pointer transition-all flex flex-col gap-2 ${
                  isSelected
                    ? "border-2 border-teal shadow-sm"
                    : "border border-line hover:border-teal/50 hover:shadow-2xs"
                }`}
              >
                {/* Avatar + Name Row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal/15 text-teal font-bold text-sm flex items-center justify-center shrink-0">
                    {applicant.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink truncate">{applicant.name}</p>
                    <p className="text-[11px] text-ink-muted truncate">
                      {applicant.role} · {applicant.experience}
                    </p>
                  </div>
                </div>

                {/* Status + Date */}
                <div className="flex items-center justify-between gap-2">
                  {statusBadge(applicant.status)}
                  <span className="text-[11px] text-ink-muted font-medium">{applicant.appliedDate}</span>
                </div>

                {/* Location & Docs hint */}
                <p className="text-[11px] text-ink-muted">
                  {applicant.location} · CV, portofolio & {applicant.essayAnswers.length} jawaban essay
                </p>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                page === p
                  ? "bg-teal text-white shadow-xs"
                  : "border border-line text-ink-muted hover:border-teal/50 hover:text-teal"
              }`}
            >
              {p}
            </button>
          ))}
          {page < totalPages && (
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="w-8 h-8 rounded-lg border border-line text-ink-muted hover:border-teal/50 hover:text-teal flex items-center justify-center transition-all"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
