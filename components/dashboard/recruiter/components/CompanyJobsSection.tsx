"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { CompanyJob, JobStatus } from "../data/recruiterDashboardData";

interface CompanyJobsSectionProps {
  jobs: CompanyJob[];
}

type FilterTab = "Semua" | JobStatus;

export default function CompanyJobsSection({ jobs }: CompanyJobsSectionProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("Semua");

  const counts = {
    Semua: jobs.length,
    Aktif: jobs.filter((j) => j.status === "Aktif").length,
    Tutup: jobs.filter((j) => j.status === "Tutup").length,
    Draf: jobs.filter((j) => j.status === "Draf").length,
  };

  const filteredJobs = jobs.filter((job) => {
    if (activeTab === "Semua") return true;
    return job.status === activeTab;
  });

  const getStatusBadge = (status: JobStatus) => {
    switch (status) {
      case "Aktif":
        return (
          <span className="inline-block px-3 py-0.5 bg-[#E6F4EA] text-[#137333] text-[12px] font-medium rounded-full">
            Aktif
          </span>
        );
      case "Tutup":
        return (
          <span className="inline-block px-3 py-0.5 bg-[#FCE8E6] text-[#C5221F] text-[12px] font-medium rounded-full">
            Tutup
          </span>
        );
      case "Draf":
        return (
          <span className="inline-block px-3 py-0.5 bg-[#F1F3F4] text-[#5F6368] text-[12px] font-medium rounded-full">
            Draf
          </span>
        );
    }
  };

  return (
    <div className="bg-white border border-[#E5E9EB] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 shadow-2xs w-full">
      {/* Title & Description */}
      <div className="flex flex-col gap-1">
        <h2 className="font-rethink-sans font-bold text-[18px] text-ink leading-tight">
          Lowongan perusahaan
        </h2>
        <p className="text-[13px] text-ink-muted">
          Kelola publikasi dan pelamar untuk setiap posisi.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5">
        {(["Semua", "Aktif", "Tutup", "Draf"] as const).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-[12px] font-medium transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#E6F4EA] text-[#0D6E66] font-semibold"
                  : "text-ink-muted hover:text-ink hover:bg-gray-100/70"
              }`}
            >
              {tab} ({counts[tab]})
            </button>
          );
        })}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-6 lg:mx-0 px-6 lg:px-0">
        <div className="min-w-[700px] flex flex-col">
          {/* Table Header */}
          <div className="bg-[#F8FAFB] px-6 py-3 rounded-lg text-[12px] text-ink-muted font-normal grid grid-cols-12 items-center">
            <span className="col-span-4">Posisi pekerjaan</span>
            <span className="col-span-2 text-center">Status</span>
            <span className="col-span-2 text-center">Pelamar</span>
            <span className="col-span-2">Masa tayang</span>
            <span className="col-span-2 text-right">Tindakan</span>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col divide-y divide-gray-100">
            {filteredJobs.length === 0 ? (
              <div className="py-12 text-center text-ink-muted text-[13px]">
                Tidak ada lowongan dengan status {activeTab}.
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="px-6 py-4.5 grid grid-cols-12 items-center hover:bg-paper/40 transition-colors"
                >
                  {/* Posisi pekerjaan */}
                  <div className="col-span-4 flex flex-col">
                    <span className="font-rethink-sans font-bold text-[14px] text-ink leading-tight">
                      {job.title}
                    </span>
                    <span className="text-[12px] text-ink-muted mt-0.5">
                      {job.employmentType} · {job.workplaceType}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="col-span-2 text-center">
                    {getStatusBadge(job.status)}
                  </div>

                  {/* Pelamar */}
                  <div className="col-span-2 text-center">
                    {job.applicantsCount !== null ? (
                      <span className="font-rethink-sans font-bold text-[14px] text-ink">
                        {job.applicantsCount}
                      </span>
                    ) : (
                      <span className="text-[14px] text-ink-muted font-normal">
                        —
                      </span>
                    )}
                  </div>

                  {/* Masa tayang */}
                  <div className="col-span-2">
                    <span className="text-[12px] text-ink-muted">
                      {job.activePeriod}
                    </span>
                  </div>

                  {/* Tindakan */}
                  <div className="col-span-2 text-right">
                    <Link
                      href={job.actionHref}
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0D6E66] hover:text-[#09524C] hover:underline transition-colors"
                    >
                      <span>{job.actionText}</span>
                      <FiArrowRight className="text-[13px]" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
