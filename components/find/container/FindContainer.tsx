"use client";

import { useState, useMemo } from "react";
import FindHero from "../components/FindHero";
import FindJobGrid from "../components/FindJobGrid";
import FindPagination from "../components/FindPagination";
import { JobItem } from "../data/data";
import { useJobs } from "@/repository/jobs";
import { DTOJobsResponses } from "@/repository/jobs/dto";

const ITEMS_PER_PAGE = 6;

interface FindContainerProps {
  initialQuery?: string;
}

const LOGO_COLORS = [
  "bg-[#0D6E66]",
  "bg-indigo-600",
  "bg-emerald-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-violet-600",
  "bg-teal-600",
];

function transformApiJobToJobItem(apiJob: DTOJobsResponses, index: number): JobItem {
  const company =
    (apiJob as unknown as { company_name?: string; company?: string }).company_name ||
    (apiJob as unknown as { company_name?: string; company?: string }).company ||
    "Perusahaan";

  const initials =
    company
      .split(/\s+/)
      .map((w: string) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "FY";

  const logoColor = LOGO_COLORS[index % LOGO_COLORS.length];

  // Format closing date if available
  let formattedClosingDate = apiJob.closing_date;
  if (apiJob.closing_date) {
    try {
      const d = new Date(apiJob.closing_date);
      if (!isNaN(d.getTime())) {
        formattedClosingDate = d.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      }
    } catch {
      // keep fallback
    }
  }

  const slug = `${apiJob.position ? apiJob.position.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "job"}-${apiJob.id}`;

  return {
    id: apiJob.id,
    slug,
    title: apiJob.position || "Lowongan Pekerjaan",
    company,
    logo: initials,
    logoColor,
    location: apiJob.location || "Indonesia",
    type: `${apiJob.employment || "Full-time"} · ${apiJob.workplace || "Hybrid"}`,
    workplaceType: (apiJob.workplace as "Hybrid" | "Remote" | "On-site") || "Hybrid",
    employmentType: apiJob.employment || "Full-time",
    salary: apiJob.salary_desc || "Gaji Kompetitif",
    slotsfilled: apiJob.filled_slot ?? 0,
    slotsTotal: apiJob.slot ?? 1,
    coinCost: apiJob.coin_applyment ?? 1,
    closingDate: formattedClosingDate || "Segera",
    description: apiJob.jobdesc || "",
    tags: [apiJob.employment, apiJob.workplace].filter(Boolean) as string[],
  };
}

export default function FindContainer({ initialQuery = "" }: FindContainerProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [appliedSearch, setAppliedSearch] = useState(initialQuery);
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch real jobs from /api/v1/jobs endpoint
  const { data: jobsResponse, isLoading, isError, refetch } = useJobs();

  // Map API jobs only
  const baseJobs: JobItem[] = useMemo(() => {
    if (
      jobsResponse?.data &&
      Array.isArray(jobsResponse.data) &&
      jobsResponse.data.length > 0
    ) {
      return jobsResponse.data.map((job, idx) =>
        transformApiJobToJobItem(job, idx)
      );
    }
    return [];
  }, [jobsResponse]);

  // Filter jobs based on search query
  const filteredJobs = useMemo(() => {
    let result = [...baseJobs];

    if (appliedSearch.trim()) {
      const q = appliedSearch.toLowerCase().trim();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.location.toLowerCase().includes(q) ||
          job.type.toLowerCase().includes(q) ||
          (job.workplaceType && job.workplaceType.toLowerCase().includes(q)) ||
          (job.tags && job.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }

    // Sort jobs
    if (sortBy === "newest") {
      result.sort((a, b) => {
        const aDays = parseInt(a.postedAt || "0", 10) || 0;
        const bDays = parseInt(b.postedAt || "0", 10) || 0;
        return aDays - bDays;
      });
    } else if (sortBy === "salary") {
      result.sort((a, b) => {
        const getSalaryNum = (s: string) => {
          const match = s.match(/Rp(\d+)/);
          return match ? parseInt(match[1]) : 0;
        };
        return getSalaryNum(b.salary) - getSalaryNum(a.salary);
      });
    } else if (sortBy === "coin") {
      result.sort((a, b) => (a.coinCost || 0) - (b.coinCost || 0));
    }

    return result;
  }, [baseJobs, appliedSearch, sortBy]);

  // Pagination calculation
  const totalItems = filteredJobs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const validPage = Math.min(currentPage, totalPages);
  const startItem = totalItems === 0 ? 0 : (validPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(validPage * ITEMS_PER_PAGE, totalItems);

  const displayedJobs = useMemo(() => {
    const start = (validPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredJobs, validPage]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAppliedSearch(searchQuery);
    setCurrentPage(1);
  };

  const handleResetSearch = () => {
    setSearchQuery("");
    setAppliedSearch("");
    setCurrentPage(1);
  };

  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <FindHero
          searchQuery={searchQuery}
          onSearchChange={(val) => {
            setSearchQuery(val);
            if (val === "") {
              setAppliedSearch("");
              setCurrentPage(1);
            }
          }}
          onSearchSubmit={handleSearchSubmit}
        />

        <FindJobGrid
          jobs={displayedJobs}
          sortBy={sortBy}
          onSortChange={(sort) => {
            setSortBy(sort);
            setCurrentPage(1);
          }}
          onResetSearch={handleResetSearch}
          isLoading={isLoading}
          isError={isError}
          onRetry={() => refetch()}
        />

        {!isLoading && totalItems > 0 && (
          <FindPagination
            currentPage={validPage}
            totalPages={totalPages}
            startItem={startItem}
            endItem={endItem}
            totalItems={totalItems}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
