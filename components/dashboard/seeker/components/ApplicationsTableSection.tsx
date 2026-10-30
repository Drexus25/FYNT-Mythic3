"use client";

import { useState } from "react";
import { FiSearch, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import {
  SeekerApplication,
  ApplicationTab,
  ApplicationStatus,
} from "../data/seekerDashboardData";

interface ApplicationsTableSectionProps {
  applications: SeekerApplication[];
  selectedId: string;
  onSelectApplication: (id: string) => void;
  onViewApplication: (app: SeekerApplication) => void;
}

export default function ApplicationsTableSection({
  applications,
  selectedId,
  onSelectApplication,
  onViewApplication,
}: ApplicationsTableSectionProps) {
  const [activeTab, setActiveTab] = useState<ApplicationTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  // Filter applications by tab
  const tabFiltered = applications.filter((app) => {
    if (activeTab === "active") return app.group === "active";
    if (activeTab === "completed") return app.group === "completed";
    return true;
  });

  // Filter by search query & status dropdown
  const filtered = tabFiltered.filter((app) => {
    const matchesSearch =
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Separate active vs completed for grouping
  const activeList = filtered.filter((a) => a.group === "active");
  const completedList = filtered.filter((a) => a.group === "completed");

  const totalAll = applications.length;
  const totalActive = applications.filter((a) => a.group === "active").length;
  const totalCompleted = applications.filter((a) => a.group === "completed").length;

  const renderStatusBadge = (status: ApplicationStatus) => {
    if (status === "Diterima") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#e6f4f1] text-teal">
          <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span>
          Diterima
        </span>
      );
    }
    if (status === "Tidak diterima") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0"></span>
          Tidak diterima
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-ink-soft">
        <span className="w-1.5 h-1.5 rounded-full bg-ink-muted shrink-0"></span>
        Ditinjau
      </span>
    );
  };

  const renderApplicationRow = (app: SeekerApplication) => {
    const isSelected = app.id === selectedId;

    return (
      <div
        key={app.id}
        onClick={() => onSelectApplication(app.id)}
        className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_120px_130px_48px] items-center gap-3 px-4 sm:px-6 py-4 cursor-pointer transition-all border-b border-line/60 ${
          isSelected
            ? "bg-[#f0f9f6] border-l-4 border-l-teal"
            : "border-l-4 border-l-transparent hover:bg-gray-50/70"
        }`}
      >
        {/* Posisi / Perusahaan */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-10 h-10 rounded-xl border border-line bg-white flex items-center justify-center font-bold text-sm text-ink shrink-0 shadow-2xs">
            {app.logo}
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm font-semibold text-ink leading-tight truncate">
              {app.title}
            </h3>
            <p className="text-xs text-ink-muted leading-tight mt-0.5 truncate">
              {app.company}
            </p>
            <p className="text-[11px] text-ink-muted/80 leading-tight mt-0.5 truncate">
              {app.location} · {app.workplaceType}
            </p>
          </div>
        </div>

        {/* Melamar date (desktop) */}
        <div className="hidden sm:block text-xs text-ink-muted font-medium">
          {app.appliedDate}
        </div>

        {/* Status */}
        <div className="flex items-center justify-end sm:justify-start">
          {renderStatusBadge(app.status)}
        </div>

        {/* Action arrow button */}
        <div className="hidden sm:flex items-center justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectApplication(app.id);
              onViewApplication(app);
            }}
            title="Lihat detail lamaran"
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
              isSelected
                ? "bg-teal text-white shadow-xs"
                : "text-teal hover:bg-teal/10"
            }`}
          >
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden shadow-xs flex flex-col">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Lamaran saya
        </h2>
        <span className="text-xs text-ink-muted font-medium">
          {totalAll} lamaran
        </span>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 px-6 border-b border-line text-xs sm:text-sm">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`pb-3 font-semibold transition-all relative ${
            activeTab === "all"
              ? "text-teal border-b-2 border-teal -mb-[1px]"
              : "text-ink-muted hover:text-ink font-medium"
          }`}
        >
          Semua {totalAll}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("active")}
          className={`pb-3 font-semibold transition-all relative ${
            activeTab === "active"
              ? "text-teal border-b-2 border-teal -mb-[1px]"
              : "text-ink-muted hover:text-ink font-medium"
          }`}
        >
          Aktif {totalActive}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("completed")}
          className={`pb-3 font-semibold transition-all relative ${
            activeTab === "completed"
              ? "text-teal border-b-2 border-teal -mb-[1px]"
              : "text-ink-muted hover:text-ink font-medium"
          }`}
        >
          Selesai {totalCompleted}
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3">
        {/* Search Input */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari posisi atau perusahaan"
            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-line text-xs sm:text-sm text-ink placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative w-full sm:w-auto shrink-0">
          <button
            type="button"
            onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
            className="w-full sm:w-auto flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl border border-line bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-ink transition-all"
          >
            <div className="flex items-center gap-2">
              <TbAdjustmentsHorizontal className="w-4 h-4 text-ink-muted" />
              <span>
                {statusFilter === "all"
                  ? "Semua status"
                  : statusFilter}
              </span>
            </div>
            <FiChevronDown className="w-3.5 h-3.5 text-ink-muted" />
          </button>

          {isFilterDropdownOpen && (
            <div className="absolute right-0 mt-1.5 w-48 bg-white border border-line rounded-xl shadow-lg z-20 py-1.5 text-xs animate-in fade-in zoom-in-95 duration-150">
              <button
                type="button"
                onClick={() => {
                  setStatusFilter("all");
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 transition-colors ${
                  statusFilter === "all" ? "text-teal font-semibold bg-teal/5" : "text-ink"
                }`}
              >
                Semua status
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatusFilter("Ditinjau");
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 transition-colors ${
                  statusFilter === "Ditinjau" ? "text-teal font-semibold bg-teal/5" : "text-ink"
                }`}
              >
                Ditinjau
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatusFilter("Diterima");
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 transition-colors ${
                  statusFilter === "Diterima" ? "text-teal font-semibold bg-teal/5" : "text-ink"
                }`}
              >
                Diterima
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatusFilter("Tidak diterima");
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 transition-colors ${
                  statusFilter === "Tidak diterima" ? "text-teal font-semibold bg-teal/5" : "text-ink"
                }`}
              >
                Tidak diterima
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table Column Headers */}
      <div className="hidden sm:grid grid-cols-[1fr_120px_130px_48px] items-center gap-3 px-6 py-2.5 border-y border-line/60 bg-gray-50/50 text-[11px] font-semibold text-ink-muted uppercase tracking-wider">
        <div>Posisi / Perusahaan</div>
        <div>Melamar ↓</div>
        <div>Status</div>
        <div className="text-right">Lihat</div>
      </div>

      {/* Rows Container */}
      <div className="flex flex-col">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-xs text-ink-muted">
            Tidak ada lamaran yang sesuai dengan filter.
          </div>
        ) : (
          <>
            {/* Active Applications */}
            {activeList.map(renderApplicationRow)}

            {/* Final Outcome Header if there are completed applications */}
            {completedList.length > 0 && (activeTab === "all" || activeTab === "completed") && (
              <div className="bg-gray-50/80 px-6 py-2.5 text-[11px] font-semibold text-ink-muted uppercase tracking-wider border-y border-line/60">
                Hasil Akhir · {completedList.length} Lamaran
              </div>
            )}

            {/* Completed Applications */}
            {completedList.map(renderApplicationRow)}
          </>
        )}
      </div>

      {/* Table Footer */}
      <div className="px-6 py-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-muted">
        <span>
          Menampilkan 1–{filtered.length} dari {totalAll} lamaran
        </span>
      </div>
    </div>
  );
}
