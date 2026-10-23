"use client";

import Link from "next/link";

interface ApplyHeaderProps {
  jobTitle: string;
  companyName: string;
  jobSlug: string;
}

export default function ApplyHeader({
  jobTitle,
  companyName,
  jobSlug,
}: ApplyHeaderProps) {
  return (
    <section className="flex flex-col gap-5 pt-8 pb-2">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
        <Link href="/find" className="hover:text-teal transition-colors">
          Pencari kerja
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/job/${jobSlug}`} className="hover:text-teal transition-colors">
          Lamaran saya
        </Link>
        {jobTitle && (
          <>
            <span className="mx-2">/</span>
            <span className="text-ink-soft truncate max-w-[200px] inline-block align-bottom">
              {jobTitle}
            </span>
          </>
        )}
      </nav>

      {/* Main Title & Subtitle */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <h1 className="text-3xl md:text-4xl text-ink tracking-tight">
          Lamaran yang bercerita tentangmu.
        </h1>
        <p className="text-sm md:text-base text-ink-muted leading-relaxed">
          {jobTitle} di {companyName}
        </p>
      </div>
    </section>
  );
}
