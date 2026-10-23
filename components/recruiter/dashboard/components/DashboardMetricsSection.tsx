"use client";

import { FiBriefcase, FiUsers, FiFileText } from "react-icons/fi";
import { DashboardMetric } from "../data/recruiterDashboardData";

interface DashboardMetricsSectionProps {
  metrics: DashboardMetric[];
}

export default function DashboardMetricsSection({
  metrics,
}: DashboardMetricsSectionProps) {
  const renderIcon = (type: DashboardMetric["iconType"]) => {
    switch (type) {
      case "briefcase":
        return <FiBriefcase className="text-[#0D6E66] text-[20px]" />;
      case "users":
        return <FiUsers className="text-[#0D6E66] text-[20px]" />;
      case "document":
        return <FiFileText className="text-[#0D6E66] text-[20px]" />;
      case "coin":
        return (
          <svg
            className="w-5 h-5 text-[#0D6E66]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="9" r="6" />
            <circle cx="15" cy="15" r="6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-white border border-[#E5E9EB] rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-2xs hover:border-[#D0D7DE] transition-colors"
        >
          <div className="flex items-center justify-between text-ink-muted">
            <span className="text-[13px] font-medium text-ink-muted">
              {metric.label}
            </span>
            <div className="shrink-0">{renderIcon(metric.iconType)}</div>
          </div>

          <div>
            <span className="font-rethink-sans font-bold text-3xl lg:text-[34px] text-ink leading-none">
              {metric.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
