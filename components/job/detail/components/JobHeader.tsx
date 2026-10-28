import { FiMapPin, FiBriefcase, FiDollarSign } from "react-icons/fi";
import { JobItem } from "@/components/find/data/data";

interface JobHeaderProps {
  job: JobItem;
}

export default function JobHeader({ job }: JobHeaderProps) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 flex flex-col gap-5">
      {/* Company info row */}
      <div className="flex items-center gap-4">
        <div
          className={`${job.logoColor} rounded-xl w-14 h-14 flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-sm`}
        >
          {job.logo}
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-2xl font-semibold text-ink tracking-tight">
            {job.title}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-ink-muted font-medium">{job.company}</span>
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
        <span className="flex items-center gap-1.5">
          <FiMapPin className="w-4 h-4 shrink-0" />
          {job.location} · {job.workplaceType}
        </span>
        <span className="flex items-center gap-1.5">
          <FiBriefcase className="w-4 h-4 shrink-0" />
          {job.employmentType} · {job.level}
        </span>
        <span className="flex items-center gap-1.5">
          <FiDollarSign className="w-4 h-4 shrink-0" />
          {job.salary}
        </span>
      </div>

      {/* Posted & closing date */}
      <p className="text-xs text-ink-muted">
        Dipublikasikan {job.postedAtFull ?? job.postedAt} · Lamaran ditutup {job.closingDateFull ?? job.closingDate}
      </p>
    </div>
  );
}
