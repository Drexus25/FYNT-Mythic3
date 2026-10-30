"use client";

import {
  JOB_CATEGORIES,
  EMPLOYMENT_TYPES,
  WORKPLACE_TYPES,
} from "../data/createApplicationTypes";

interface JobInfoSectionProps {
  title: string;
  category: string;
  employmentType: string;
  location: string;
  workplaceType: string;
  salary: string;
  slot: number;
  isUnlimitedSlot?: boolean;
  onChange: (field: string, value: any) => void;
}

export default function JobInfoSection({
  title,
  category,
  employmentType,
  location,
  workplaceType,
  salary,
  slot,
  isUnlimitedSlot = false,
  onChange,
}: JobInfoSectionProps) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xs">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-base md:text-lg font-semibold text-ink">
          Informasi pekerjaan
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed">
          Buat informasi yang jelas agar kandidat memahami perannya.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Judul Posisi */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="job-title" className="text-xs font-semibold text-ink">
            Judul posisi <span className="text-danger">*</span>
          </label>
          <input
            id="job-title"
            type="text"
            value={title}
            onChange={(e) => onChange("title", e.target.value)}
            placeholder="Contoh: UX Researcher"
            className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
          />
        </div>

        {/* Kategori & Jenis Pekerjaan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Kategori */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="job-category"
              className="text-xs font-semibold text-ink"
            >
              Kategori <span className="text-danger">*</span>
            </label>
            <div className="relative">
              <select
                id="job-category"
                value={category}
                onChange={(e) => onChange("category", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm bg-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all appearance-none cursor-pointer pr-9"
              >
                <option value="">Pilih kategori pekerjaan</option>
                {JOB_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Jenis Pekerjaan */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="job-employment-type"
              className="text-xs font-semibold text-ink"
            >
              Jenis pekerjaan <span className="text-danger">*</span>
            </label>
            <div className="relative">
              <select
                id="job-employment-type"
                value={employmentType}
                onChange={(e) => onChange("employmentType", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm bg-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all appearance-none cursor-pointer pr-9"
              >
                <option value="">Pilih jenis pekerjaan</option>
                {EMPLOYMENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted text-xs">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Lokasi & Cara Kerja */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Lokasi */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="job-location"
              className="text-xs font-semibold text-ink"
            >
              Lokasi <span className="text-danger">*</span>
            </label>
            <input
              id="job-location"
              type="text"
              value={location}
              onChange={(e) => onChange("location", e.target.value)}
              placeholder="Contoh: Jakarta Selatan"
              className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
            />
          </div>

          {/* Cara Kerja */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="job-workplace-type"
              className="text-xs font-semibold text-ink"
            >
              Cara kerja <span className="text-danger">*</span>
            </label>
            <div className="relative">
              <select
                id="job-workplace-type"
                value={workplaceType}
                onChange={(e) => onChange("workplaceType", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm bg-white focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all appearance-none cursor-pointer pr-9"
              >
                <option value="">Pilih cara kerja</option>
                {WORKPLACE_TYPES.map((wpt) => (
                  <option key={wpt} value={wpt}>
                    {wpt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted text-xs">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Rentang Gaji & Jumlah Slot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Rentang Gaji */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="job-salary" className="text-xs font-semibold text-ink">
              Rentang gaji / bulan
            </label>
            <input
              id="job-salary"
              type="text"
              value={salary}
              onChange={(e) => onChange("salary", e.target.value)}
              placeholder="Contoh: Rp8–12 juta"
              className="w-full px-3.5 py-2.5 rounded-xl border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
            />
          </div>

          {/* Jumlah Slot */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="job-slot" className="text-xs font-semibold text-ink">
                Jumlah slot <span className="text-danger">*</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer text-xs text-ink-muted select-none hover:text-ink transition-colors">
                <input
                  type="checkbox"
                  id="job-unlimited-slot"
                  checked={isUnlimitedSlot}
                  onChange={(e) => onChange("isUnlimitedSlot", e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-line text-teal focus:ring-teal accent-teal cursor-pointer"
                />
                <span>Tanpa batas</span>
              </label>
            </div>
            <div className="relative">
              <input
                id="job-slot"
                type={isUnlimitedSlot ? "text" : "number"}
                min={1}
                disabled={isUnlimitedSlot}
                value={isUnlimitedSlot ? "Tidak terbatas" : slot}
                onChange={(e) => onChange("slot", e.target.value)}
                placeholder="Contoh: 3"
                className={`w-full px-3.5 py-2.5 rounded-xl border border-line text-xs sm:text-sm transition-all ${
                  isUnlimitedSlot
                    ? "bg-paper/70 text-ink-muted cursor-not-allowed border-dashed pr-28 select-none"
                    : "text-ink placeholder:text-ink-muted/50 focus:border-teal focus:ring-1 focus:ring-teal outline-none"
                }`}
              />
              {isUnlimitedSlot && (
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-teal bg-teal/10 border border-teal/20 px-2 py-0.5 rounded-md select-none pointer-events-none">
                  ∞ Unlimited
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
