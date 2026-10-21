"use client";

import { FiSearch } from "react-icons/fi";

interface FindHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (e?: React.FormEvent) => void;
}

export default function FindHero({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: FindHeroProps) {
  return (
    <section className="flex flex-col gap-5 pt-8 pb-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
        <span>Pencari kerja</span>
        <span className="mx-2">/</span>
        <span className="text-ink-soft">Cari lowongan</span>
      </nav>

      {/* Heading & Subheading */}
      <div className="flex flex-col gap-2 max-w-4xl">
        <h1 className="text-3xl md:text-4xl text-ink tracking-tight">
          Temukan peluang berikutnya.
        </h1>
        <p className="text-sm md:text-base text-ink-muted leading-relaxed">
          Jelajahi pekerjaan yang sesuai keahlian, minat, dan cara kerjamu. Untuk
          melamar atau menyimpan lowongan, silakan masuk atau daftar terlebih
          dahulu.
        </p>
      </div>

      {/* Search Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit(e);
        }}
        className="w-full mt-2"
      >
        <div className="relative flex items-center w-full bg-white border border-line rounded-xl shadow-xs focus-within:border-teal focus-within:ring-2 focus-within:ring-teal/20 transition-all p-1.5 pl-4 gap-3">
          <FiSearch className="w-5 h-5 text-ink-muted shrink-0" />
          <input
            id="job-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Posisi, keahlian, atau perusahaan"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted/80 focus:outline-none"
          />
          <button
            id="job-search-btn"
            type="submit"
            className="shrink-0 bg-teal hover:bg-teal-dark active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all"
          >
            Cari lowongan
          </button>
        </div>
      </form>
    </section>
  );
}
