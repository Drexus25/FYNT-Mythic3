"use client";

import { FiCheck, FiArrowUpRight, FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { SeekerApplication } from "../data/seekerDashboardData";

interface ApplicationProgressSidebarProps {
  application: SeekerApplication;
  onViewApplication: (app: SeekerApplication) => void;
}

export default function ApplicationProgressSidebar({
  application,
  onViewApplication,
}: ApplicationProgressSidebarProps) {
  const getDecisionStatusBadge = () => {
    if (application.status === "Diterima") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#e6f4f1] text-teal">
          <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
          Diterima
        </span>
      );
    }
    if (application.status === "Tidak diterima") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
          Tidak diterima
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#e6f4f1] text-teal">
        <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
        {application.decisionStage || "Menunggu keputusan"}
      </span>
    );
  };

  return (
    <div className="bg-white border border-line rounded-2xl p-5 sm:p-6 flex flex-col gap-5 shadow-xs">
      {/* Title */}
      <h2 className="text-sm font-semibold text-ink border-b border-line pb-3">
        Perkembangan lamaran
      </h2>

      {/* Target Application Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-base shrink-0 border border-teal/20">
            {application.logo}
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm font-semibold text-ink leading-tight truncate">
              {application.title}
            </h3>
            <p className="text-xs text-ink-muted leading-tight mt-0.5 truncate">
              {application.company}
            </p>
          </div>
        </div>

        <p className="text-[11px] text-ink-muted">
          {application.location} · {application.workplaceType} · {application.employmentType}
        </p>

        {/* Dynamic Status Badge */}
        <div>{getDecisionStatusBadge()}</div>
      </div>

      <div className="border-t border-line"></div>

      {/* Summary & Timeline */}
      <div className="flex flex-col gap-4">
        <h4 className="text-xs font-semibold text-ink">Ringkasan lamaran</h4>

        <div className="flex flex-col">
          {application.timeline.map((step, index) => {
            const isLast = index === application.timeline.length - 1;

            return (
              <div key={index} className="flex gap-3 relative pb-5 last:pb-1">
                {/* Connecting Line */}
                {!isLast && (
                  <div className="absolute left-[13px] top-[22px] bottom-0 w-[1.5px] bg-line"></div>
                )}

                {/* Step Icon */}
                <div className="shrink-0 z-10">
                  {step.state === "completed" && step.variant === "teal" ? (
                    <div className="w-7 h-7 rounded-full bg-teal text-white flex items-center justify-center shadow-xs">
                      <FiCheckCircle className="w-4 h-4" />
                    </div>
                  ) : step.state === "completed" && step.variant === "rose" ? (
                    <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xs">
                      <FiXCircle className="w-4 h-4" />
                    </div>
                  ) : step.state === "completed" ? (
                    <div className="w-7 h-7 rounded-full bg-teal text-white flex items-center justify-center shadow-xs">
                      <FiCheck className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-teal/15 text-teal flex items-center justify-center border border-teal/30">
                      <FiClock className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex flex-col gap-0.5 flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-ink truncate">
                      {step.title}
                    </span>
                    {step.date && (
                      <span className="text-[11px] text-ink-muted shrink-0 font-medium">
                        {step.date}
                      </span>
                    )}
                    {step.statusLabel && (
                      <span className="text-[11px] text-teal-dark font-medium shrink-0">
                        {step.statusLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View Submitted Application Link */}
      <div className="pt-3 border-t border-line">
        <button
          type="button"
          onClick={() => onViewApplication(application)}
          className="w-full flex items-center justify-between text-xs font-semibold text-teal hover:text-teal-dark transition-all group py-1"
        >
          <span className="group-hover:underline">Lihat lamaran yang dikirim</span>
          <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
