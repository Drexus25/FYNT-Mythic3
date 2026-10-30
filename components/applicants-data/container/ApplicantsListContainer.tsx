"use client";

import { useState } from "react";
import {
  APPLICANTS_DATA,
  Applicant,
  ApplicantStatus,
  JobWithApplicants,
} from "../data/applicantsData";
import ApplicantsPageHeader from "../components/ApplicantsPageHeader";
import ApplicantsListPanel from "../components/ApplicantsListPanel";
import ApplicantDetailPanel from "../components/ApplicantDetailPanel";

interface ApplicantsListContainerProps {
  slug?: string;
}

export default function ApplicantsListContainer({
  slug,
}: ApplicantsListContainerProps) {
  // Find job data by slug, fallback to first
  const jobData: JobWithApplicants =
    APPLICANTS_DATA.find((j) => j.slug === slug) || APPLICANTS_DATA[0];

  const [applicants, setApplicants] = useState<Applicant[]>(jobData.applicants);
  const [selectedId, setSelectedId] = useState<string>(jobData.applicants[0]?.id || "");

  const selectedApplicant = applicants.find((a) => a.id === selectedId) || applicants[0];

  // Update applicant status
  const handleUpdateStatus = (id: string, status: ApplicantStatus) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  // Update internal note
  const handleUpdateNote = (id: string, note: string) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, internalNote: note } : a))
    );
  };

  return (
    <div className="min-h-screen bg-[#FBFDFD] pt-24 pb-16 px-6 lg:px-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <ApplicantsPageHeader
          jobTitle={jobData.title}
          company={jobData.company}
        />

        {/* Two-column layout: List (left) + Detail (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* Left: Applicants List Panel */}
          <div className="lg:sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-1 scrollbar-thin">
            <ApplicantsListPanel
              applicants={applicants}
              selectedId={selectedId}
              onSelectApplicant={(id) => setSelectedId(id)}
              onUpdateStatus={handleUpdateStatus}
            />
          </div>

          {/* Right: Applicant Detail Panel */}
          <div>
            {selectedApplicant ? (
              <ApplicantDetailPanel
                applicant={selectedApplicant}
                onUpdateStatus={handleUpdateStatus}
                onUpdateNote={handleUpdateNote}
              />
            ) : (
              <div className="bg-white border border-line rounded-2xl p-10 flex items-center justify-center text-sm text-ink-muted text-center shadow-xs">
                Pilih pelamar di sebelah kiri untuk melihat detail lamaran.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
