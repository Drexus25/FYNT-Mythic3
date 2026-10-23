"use client";

import Link from "next/link";

interface ApplicantsPageHeaderProps {
  jobTitle: string;
  company: string;
}

export default function ApplicantsPageHeader({
  jobTitle,
  company,
}: ApplicantsPageHeaderProps) {
  return (
    <section className="flex flex-col gap-3 pt-6 pb-2">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
        <Link href="/recruiter/dashboard" className="hover:text-teal transition-colors">
          Perusahaan
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-soft">Pelamar</span>
      </nav>

      {/* Title block */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-ink tracking-tight">
          Kenali talenta di balik lamaran.
        </h1>
        <p className="text-xs sm:text-sm text-ink-muted">
          {jobTitle} · {company}
        </p>
      </div>
    </section>
  );
}
