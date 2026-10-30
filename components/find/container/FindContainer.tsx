"use client";

import { useState, useMemo } from "react";
import FindHero from "../components/FindHero";
import FindJobGrid from "../components/FindJobGrid";
import FindPagination from "../components/FindPagination";
import { DUMMY_JOBS } from "../data/data";

const ITEMS_PER_PAGE = 6;

interface FindContainerProps {
  initialQuery?: string;
}

export default function FindContainer({ initialQuery = "" }: FindContainerProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [appliedSearch, setAppliedSearch] = useState(initialQuery);
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter jobs based on search query
  const filteredJobs = useMemo(() => {
    let result = [...DUMMY_JOBS];

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
  }, [appliedSearch, sortBy]);

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
        />

        <FindPagination
          currentPage={validPage}
          totalPages={totalPages}
          startItem={startItem}
          endItem={endItem}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
