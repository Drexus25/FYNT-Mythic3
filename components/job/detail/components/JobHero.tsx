"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface JobHeroProps {
  jobTitle?: string;
}

export default function JobHero({ jobTitle }: JobHeroProps) {
  return (
    <section className="flex flex-col gap-5 pt-8 pb-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
        <Link href="/find" className="hover:text-teal transition-colors">
          Pencari kerja
        </Link>
        <span className="mx-2">/</span>
        <Link href="/find" className="hover:text-teal transition-colors">
          Cari lowongan
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

      {/* Heading & Back Button */}
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-3xl md:text-4xl text-ink tracking-tight">
            Detail lowongan
          </h1>
          <p className="text-sm md:text-base text-ink-muted leading-relaxed">
            Pahami peran, kenali perusahaan, dan siapkan lamaran terbaikmu.
          </p>
        </div>
        <Link
          href="/find"
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink border border-line hover:border-ink-muted rounded-xl px-4 py-2 transition-all shrink-0 mt-1"
        >
          <FiArrowLeft className="w-4 h-4" />
          Kembali ke pencarian
        </Link>
      </div>
    </section>
  );
}