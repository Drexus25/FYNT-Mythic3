"use client";

import { DUMMY_JOBS } from "@/components/find/data/data";
import JobHero from "../components/JobHero";
import JobHeader from "../components/JobHeader";
import JobDescription from "../components/JobDescription";
import JobEssayQuestions from "../components/JobEssayQuestions";
import JobApplySidebar from "../components/JobApplySidebar";

interface JobDetailContainerProps {
  slug: string;
}

export default function JobDetailContainer({ slug }: JobDetailContainerProps) {
  const job = DUMMY_JOBS.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="w-full min-h-screen bg-paper pt-24 pb-8 flex items-center justify-center">
        <div className="text-center flex flex-col gap-3">
          <p className="text-2xl font-semibold text-ink">Lowongan tidak ditemukan</p>
          <p className="text-sm text-ink-muted">
            Lowongan yang kamu cari mungkin sudah ditutup atau tidak tersedia.
          </p>
          <a
            href="/find"
            className="mt-2 inline-block bg-teal text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-teal-dark transition-all"
          >
            Kembali ke pencarian
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-paper pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Hero / breadcrumb + page title */}
        <JobHero jobTitle={job.title} />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* Left column — main content */}
          <div className="flex flex-col gap-5">
            {/* Job header card (logo, title, meta) */}
            <JobHeader job={job} />

            {/* Job description — single text editor section */}
            <JobDescription content={job.description} />

            {/* Essay questions */}
            <JobEssayQuestions
              questions={job.essayQuestions ?? []}
              companyName={job.company}
            />
          </div>

          {/* Right column — sticky sidebar */}
          <div className="lg:sticky lg:top-28">
            <JobApplySidebar job={job} />
          </div>
        </div>
      </div>
    </div>
  );
}
